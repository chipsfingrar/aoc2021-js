'use strict'
const data = require('./1.json')

exports.solve = (values) => {
    return values.reduce((prev, current) => {
        return { value: current, increases: current > prev.value ? prev.increases + 1 : prev.increases }
    }, { increases: 0 }).increases
}

exports.toSummedWindows = (arr, windowSize) => {
    let windows = []
    while (arr.length >= windowSize) {
        windows.push(arr.slice(0, windowSize).reduce((prev, curr) => prev + curr, 0))
        arr.shift()
    }
    return windows
}

console.log(this.solve(data))
console.log(this.solve(this.toSummedWindows(data, 3)))