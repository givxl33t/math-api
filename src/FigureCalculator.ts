class FigureCalculator {
    _mathBasic: any
    constructor (mathBasic) {
        this._mathBasic = mathBasic
    }

    _verifyArgs (args, expectedArgsCount) {
        if (args.length !== expectedArgsCount) {
            throw new Error(`functions only accepts ${expectedArgsCount} parameters`)
        }

        args.forEach((arg) => {
            if (typeof arg !== 'number') {
                throw new Error(`function only accepts ${expectedArgsCount} numbers as a parameter`)
            }
        })

        return args
    }

    calculateRectanglePerimeter (...args) {
        const [length, width] = this._verifyArgs(args, 2)

        // formula: (2 * (length + width))
        return this._mathBasic.multiply(2, this._mathBasic.add(length, width))
    }

    calculateRectangleArea (...args) {
        const [length, width] = this._verifyArgs(args, 2)

        // formula: length * width
        return this._mathBasic.multiply(length, width)
    }

    calculateTrianglePerimeter (...args) {
        const [sideA, sideB, base] = this._verifyArgs(args, 3)

        // formula: (sideA + sideB + base)
        return this._mathBasic.add(sideA, this._mathBasic.add(sideB, base))
    }

    calculateTriangleArea (...args) {
        const [base, height] = this._verifyArgs(args, 2)

        // formula: ((base * height) / 2)
        return this._mathBasic.divide(this._mathBasic.multiply(base, height), 2)
    }
}

export { FigureCalculator }