const chalk = require('chalk')

// this plugin if for loggin url after each time the compilation is done.
module.exports = class LogPlugin {
    constructor(port) {
        this.port = port
    }

    apply(compiler) {
        compiler.plugin('done', () => {
            console.log(`> Centuria website is running at ${chalk.yellow(`http://localhost:${this.port}`)} ~ Teemo.. 🙊\n`)
        })
    }
}
