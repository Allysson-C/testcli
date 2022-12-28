module.exports = (toolbox) => {
  const { prompt, filesystem, strings, print } = toolbox
  toolbox.question = {
    component: async () => {
      const modules = filesystem.list('modules')

      if (!modules) {
        print.error('Não existe nenhum módulo')
        process.exit(1)
      }

      const questions = {
        askModule: {
          type: 'select',
          name: 'module',
          message: 'Selecione o módulo',
          choices: modules,
        },
        askComponentName: {
          type: 'input',
          name: 'componentName',
          message: 'Nome do componente',
        },
      }

      const { module, componentName } = await prompt.ask([
        questions.askModule,
        questions.askComponentName,
      ])
      const pascalCaseName = strings.pascalCase(componentName)

      return { module, componentName: pascalCaseName }
    },
  }
}
