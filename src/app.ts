import { FigureCalculator } from './FigureCalculator'
import { MathBasic } from './MathBasic'
import { createServer } from './createServer'

const start = async () => {
    const figureCalculator = new FigureCalculator(MathBasic)
    const server = createServer({
        mathBasic: MathBasic,
        figureCalculator
    })

    await server.start()
    console.log(`Server start at ${server.info.uri}`)
}

start()