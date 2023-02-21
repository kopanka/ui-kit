import React from 'react'
import type { CSSProp } from 'styled-components'
import styled from 'styled-components'
import { border, padding } from 'polished'

import { theme } from '../../design'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'tiny' | 'small' | 'medium' | 'large'
  appearance?: 'default' | 'outline'
  design?: 'default' | 'skeo'
  variant?: 'default' | 'round'
}

const sizeStyles = {
  tiny: {
    ...padding(6),
    fontSize: theme.text.bodySmall,
    borderRadius: 8,
  },
  small: {
    ...padding(10, 8),
    fontSize: theme.text.labelSmall,
    borderRadius: 10,
  },
  medium: {
    ...padding(10),
    fontSize: theme.text.bodyLarge,
    borderRadius: 15,
  },
  large: {
    ...padding(10),
    fontSize: theme.text.bodyLarge,
    fontWeight: theme.fontWeight.medium,
    borderRadius: 15,
  },
} as Record<NonNullable<ButtonProps['size']>, CSSProp>

const appearanceStyles = {
  default: {
    ...border(1, 'solid', theme.colors.purple500),
    backgroundColor: theme.colors.purple500,
  },
  outline: {
    ...border(1, 'solid', theme.colors.black100),
    backgroundColor: 'transparent',
  },
} as Record<NonNullable<ButtonProps['appearance']>, CSSProp>

const variantStyles = {
  default: {},
  round: {
    borderRadius: 50,
  },
} as Record<NonNullable<ButtonProps['variant']>, CSSProp>

const designStyles = {
  default: {},
  skeo: {
    boxShadow: theme.shadows.skeomorphicDark,
  },
} as Record<NonNullable<ButtonProps['design']>, CSSProp>

const ButtonStyled = styled.button<Required<Pick<ButtonProps, 'size' | 'appearance' | 'variant' | 'design'>>>`
  color: ${theme.colors.black100};

  ${({ size }) => sizeStyles[size]}
  ${({ appearance }) => appearanceStyles[appearance]}
	${({ variant }) => variantStyles[variant]}
	${({ design }) => designStyles[design]}
`

export const Button: React.FC<ButtonProps> = props => {
  const { size = 'medium', appearance = 'default', design = 'default', variant = 'default', ...restProps } = props

  return <ButtonStyled size={size} appearance={appearance} variant={variant} design={design} {...restProps} />
}
