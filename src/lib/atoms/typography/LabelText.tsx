import type { CSSProp } from 'styled-components'
import styled from 'styled-components'

import { theme } from '../../design'

type LabelTextProps = {
  size: 'small' | 'medium' | 'large'
}

const sizeStyles: Record<LabelTextProps['size'], CSSProp> = {
  small: {
    fontSize: theme.text.labelSmall,
  },
  medium: {
    fontSize: theme.text.labelMedium,
  },
  large: {
    fontSize: theme.text.labelLarge,
  },
}

export const LabelText = styled.span<LabelTextProps>`
  font-weight: ${theme.fontWeight.medium};

  ${({ size }) => sizeStyles[size]}
`
