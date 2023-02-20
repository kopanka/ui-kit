import type { CSSProp } from 'styled-components'
import styled from 'styled-components'

import { theme } from '../../design'

type BodyTextProps = {
  size: 'small' | 'medium' | 'large'
}

const sizeStyles: Record<BodyTextProps['size'], CSSProp> = {
  small: {
    fontSize: theme.text.bodySmall,
  },
  medium: {
    fontSize: theme.text.bodyMedium,
  },
  large: {
    fontSize: theme.text.bodyLarge,
  },
}

export const BodyText = styled.span<BodyTextProps>`
  font-weight: ${theme.fontWeight.regular};

  ${({ size }) => sizeStyles[size]}
`
