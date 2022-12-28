const sleep = require('../toolbox/sleep')

module.exports = {
  name: 'testcli2',
  description: 'start cli',
  run: async (toolbox) => showMenu(toolbox),
}

async function showMenu(toolbox) {
  const { menu, question, prompt, print, system } = toolbox
  let spinner = null

  const menuResult = await menu.open()
  switch (menuResult) {
    case 'Componente':
      const { module, componentName } = await question.component()
      spinner = print.spin('Criando componente')
      result = await system.run(
        `testcli2 generate:component ${module} ${componentName}`
      )
      await sleep()
      break
    default:
      break
  }

  if (!result.includes('sucesso')) {
    spinner.fail('deu ruim')
    process.exit(0)
  }

  spinner.succeed(result)
  const { backToMainMenu } = await showMenuAgain(prompt)

  if (backToMainMenu) {
    showMenu(toolbox)
  } else {
    process.exit(0)
  }
}

function showMenuAgain(prompt) {
  const askBackToMainMenu = {
    type: 'confirm',
    name: 'backToMainMenu',
    message: 'Voltar ao menu principal?',
  }

  return prompt.ask(askBackToMainMenu)
}
