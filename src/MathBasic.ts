const MathBasic = {
    _validateArgs (args) {
        if (args.length !== 2) {
            throw new Error('Function only accepts 2 arguments')
        }

        const [a, b] = args

        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Function only accepts numbers arguments')
        }
        return args
    },

    add: function add (...args) {
        const [a, b] = this._validateArgs(args)
        return a + b
    },
    subtract: function subtract (...args) {
        const [a, b] = this._validateArgs(args)
        return a - b
    },
    multiply: function multiply (...args) {
        const [a, b] = this._validateArgs(args)
        return a * b
    },
    divide: function divide (...args) {
        const [a, b] = this._validateArgs(args)
        return a / b
    }
}

export { MathBasic }