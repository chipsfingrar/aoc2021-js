const { solve: solve, toSummedWindows } = require('./1')

let testData = [199,
    200,
    208,
    210,
    200,
    207,
    240,
    269,
    260,
    263]

test('should solve demo code', () => {
    expect(solve(testData)).toBe(7)
})

test('create windows', () => {
    const summedWindows = toSummedWindows(testData, 3)
    expect(solve(summedWindows)).toBe(5)
})
