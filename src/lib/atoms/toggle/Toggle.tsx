import React from 'react'
import { border, em, hideVisually, transitions } from 'polished'
import styled from 'styled-components'

import { ReactComponent as MarkIcon } from '../../icons/mark.svg'
import { theme } from '../../design'

const Box = styled.div`
  width: ${em(28)};
  height: ${em(28)};
  background-color: ${theme.colors.dark100};
  border-radius: 50%;
  position: absolute;
  left: ${em(1)};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  ${transitions(['transform', 'background-color'], '0.2s ease-in-out')};
`

const Mark = styled(MarkIcon)`
  color: transparent;
  opacity: 0;
  width: ${em(16)};
  height: ${em(16)};
  ${transitions(['color', 'opacity'], '0.2s ease-in-out')};
`

const NativeCheckbox = styled.input.attrs({ type: 'checkbox' })`
  ${hideVisually()};

  &:checked + ${Box} {
    transform: translateX(${em(24)}) translateY(-50%);
    background-color: ${theme.colors.gray600};

    ${Mark} {
      color: ${theme.colors.primary500};
      opacity: 1;
    }
  }

  &:disabled + ${Box} {
    background-color: ${theme.colors.dark300};
  }

  &:disabled:checked + ${Box} {
    background-color: ${theme.colors.gray600};

    ${Mark} {
      color: ${theme.colors.black100};
    }
  }
`

const Container = styled.label`
  display: block;
  position: relative;
  width: ${em(56)};
  height: ${em(32)};
  border-radius: ${em(37)};
  box-sizing: border-box;
  background-color: transparent;
  ${border(em(1), 'solid', theme.colors.gray500)};
  ${transitions(['border-color', 'background-color', 'outline'], '0.2s ease-in-out')};

  &:has(${NativeCheckbox}:focus-visible) {
    border-color: ${theme.colors.gray600};
    background-color: ${theme.colors.gray500};
    outline: ${em(6)} solid ${theme.colors.dark300};
  }

  &:has(${NativeCheckbox}:checked) {
    border-color: ${theme.colors.primary500};
    background-color: ${theme.colors.primary500};
    outline: none;

    &:has(${NativeCheckbox}:focus-visible) {
      outline: ${em(6)} solid ${theme.colors.dark300};
    }
  }

  &:hover {
    border-color: ${theme.colors.primary500};
    background-color: ${theme.colors.primary200};
    outline: ${em(6)} solid ${theme.colors.dark300};

    ${Box} {
      background-color: ${theme.colors.dark300};
    }

    ${NativeCheckbox}:checked + ${Box} ${Mark} {
      color: ${theme.colors.black100};
    }
  }

  &:has(${NativeCheckbox}:disabled) {
    border-color: ${theme.colors.gray500};
    background-color: ${theme.colors.dark200};
    cursor: not-allowed;
    outline: none;
  }
`

export const Toggle = () => {
  return (
    <Container>
      <NativeCheckbox />
      <Box>
        <Mark />
      </Box>
    </Container>
  )
}
