import { createGlobalStyle } from 'styled-components'

import { variables } from './variables'
import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
	html {
		${variables.fontPrimary}: 'Roboto', sans-serif;
	}

	body,
	input,
	button,
	select,
	option {
		font-family: ${theme.fonts.primary};
	}
`
