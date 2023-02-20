import React from 'react'

import { theme } from '../lib'

import { NamedList, ShadowBox } from './wrappers'

export default {
  title: 'Design/Shadows',
}

export const Shadows = () => {
  return (
    <div>
      <NamedList name="Dark Shadows">
        <ShadowBox css={{ boxShadow: theme.shadows.dark }}>1x</ShadowBox>
        <ShadowBox css={{ boxShadow: theme.shadows.dark2x }}>2x</ShadowBox>
        <ShadowBox css={{ boxShadow: theme.shadows.dark3x }}>3x</ShadowBox>
        <ShadowBox css={{ boxShadow: theme.shadows.dark4x }}>4x</ShadowBox>
        <ShadowBox css={{ boxShadow: theme.shadows.dark5x }}>5x</ShadowBox>
      </NamedList>
      <NamedList name="Color Shadows">
        <ShadowBox css={{ boxShadow: theme.shadows.color }}>1x</ShadowBox>
        <ShadowBox css={{ boxShadow: theme.shadows.color2x }}>2x</ShadowBox>
      </NamedList>
      <NamedList name="Skeomorphism Light">
        <ShadowBox css={{ boxShadow: theme.shadows.skeomorphicLight }} />
        <ShadowBox css={{ boxShadow: theme.shadows.skeomorphicInnerLight }} />
      </NamedList>
      <NamedList name="Skeomorphism Dark">
        <ShadowBox css={{ boxShadow: theme.shadows.skeomorphicDark }} />
        <ShadowBox css={{ boxShadow: theme.shadows.skeomorphicInnerDark }} />
      </NamedList>
    </div>
  )
}
