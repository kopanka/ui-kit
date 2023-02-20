import type { CSSProp } from 'styled-components'
import React from 'react'
import styled from 'styled-components'

import { theme } from '../../design'

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

const sizeStyles: Record<NonNullable<HeadingProps['level']>, CSSProp> = {
  1: {
    fontSize: theme.text.h600,
  },
  2: {
    fontSize: theme.text.h500,
  },
  3: {
    fontSize: theme.text.h400,
  },
  4: {
    fontSize: theme.text.h300,
  },
  5: {
    fontSize: theme.text.h200,
  },
  6: {
    fontSize: theme.text.h100,
  },
}

const HeadingStyled = styled.h1<Required<HeadingProps>>`
  font-weight: ${theme.fontWeight.bold};
  margin: 0;

  ${({ level }) => sizeStyles[level]}
`

export const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = props => {
  const { level = 1 } = props

  return <HeadingStyled as={`h${level}`} level={level} {...props} />
}
