module.exports = {
  name: 'generate:component',
  description: 'Create react component',
  run: async (toolbox) => {
    const {
      parameters: { first, second },
      template,
      print: { success, error },
      menu,
      prompt,
    } = toolbox

    if (!first) {
      error('precisa do módulo')
      return
    }

    if (!second) {
      error('precisa do nome')
      return
    }

    const path = `modules/${first}/src/presentation/components/${second}`

    await template.generate({
      template: 'component.tsx.ejs',
      target: `${path}/${second}.tsx`,
      props: { name: second },
    })

    await template.generate({
      template: 'styles.module.scss.ejs',
      target: `${path}/${second}.module.scss`,
    })

    await template.generate({
      template: 'test.spec.tsx.ejs',
      target: `${path}/${second}.spec.tsx`,
      props: { name: second },
    })

    await template.generate({
      template: 'index.tsx.ejs',
      target: `${path}/index.tsx`,
      props: { name: second },
    })

    success('componente criado com sucesso')
  },
}
