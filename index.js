'use strict'

const wagenreihung = require('db-wagenreihung')
const trainNumbers = require('db-train-numbers')
const _map = require('through2-map').obj
const Queue = require('queue')
const retry = require('p-retry')

const stream = () => _map(x => x)

const wagenreihungStream = (start, end, opt = {}) => {
    const output = stream()
    const queue = Queue({concurrency: 10})
    trainNumbers(start, end, opt)
    .then(tN => {
        tN = tN.filter(n => n.train.toLowerCase().indexOf('ice') === 0)
        for (let trainNumber of tN) {
            queue.push(cb => {
                const parts = trainNumber.train.split(' ')
                const number = parts[parts.length-1]
                retry(() => wagenreihung(number, trainNumber.lastDeparture), {retries: 3})
                .then(res => {
                    output.push(res)
                    cb()
                })
                // todo
                .catch(e => {output.emit('hidden-error', e); cb()})
            })
        }
        queue.start()
    })
    .catch(e => {console.error(e); throw new Error(e)})

    queue.on('end', () => output.end())
    return output
}

module.exports = wagenreihungStream
