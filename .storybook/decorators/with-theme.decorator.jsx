import { GlobalStyles } from '../../src/lib/index.ts'

export const withTheme = Story => {
  return (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
}
