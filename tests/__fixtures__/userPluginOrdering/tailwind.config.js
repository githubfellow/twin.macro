function fluidContainer({ addComponents, theme }) {
  const styles = [
    {
      '@media (min-width: 1px)': {
        '.selector': {
          content: '@media .selector',
        },
      },
    },
    {
      '.selector': {
        content: '.selector',
        '.selector2': {
          content: '.selector .selector2',
        },
        '@media (min-width: 1px)': {
          '.selector3': {
            content: '@media .selector .selector3',
          },
        },
      },
    },
    {
      '.selector:hover': {
        content: '.selector:hover',
        '@media (min-width: 1px)': {
          '.selector2': {
            content: '@media .selector:hover .selector2',
          },
          '&.selector2': {
            content: '@media .selector:hover.selector2',
          },
        },
        '.selector3': {
          content: '.selector:hover .selector3',
        },
      },
    },
    {
      '.not-selector': {
        content: 'not-container',
      },
    },
    {
      '.selector': {
        margin: '1px',
        padding: 'padding',
        display: 'block',
        '@media (min-width: 2px)': {
          content: '@media .selector',
        },
      },
    },
  ]

  addComponents(styles)
}

module.exports = {
  plugins: [fluidContainer],
}
