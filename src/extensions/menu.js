const figlet = require('figlet')
const gradient = require('gradient-string')
const sleep = require('../toolbox/sleep')

module.exports = (toolbox) => {
  const { prompt, print } = toolbox
  toolbox.menu = {
    open: async () => {
      const askCommand = {
        type: 'select',
        name: 'value',
        message: 'O que deseja criar?',
        choices: ['Componente'],
      }

      figlet('Test CLI', (err, data) => {
        print.info(gradient.pastel.multiline(data))
      })
      await sleep(1000)

      const result = await prompt.ask(askCommand)
      return result.value
    },
  }
}
