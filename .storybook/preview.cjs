import { withTheme } from './decorators/with-theme.decorator'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
	backgrounds: {
		default: 'light',
		values: [
			{
				name: 'light',
				value: '#fff',
			},
			{
				name: 'dark',
				value: '#2E2E30',
			}
		]
	}
}

export const decorators = [withTheme]
