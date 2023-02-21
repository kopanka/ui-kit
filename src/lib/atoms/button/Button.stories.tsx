import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Button as UiButton } from './Button'

export default {
  title: 'Atoms/Button',
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as ComponentMeta<typeof Button>

export const Button = () => {
  return (
    <div css={{ display: 'flex', flexDirection: 'column', gap: 25 }}>
      <div>
        <UiButton size="large">Large</UiButton>
        <UiButton size="medium">Medium</UiButton>
        <UiButton size="small">Small</UiButton>
        <UiButton size="tiny">Tiny</UiButton>
      </div>
      <div>
        <UiButton appearance="outline" size="large">
          Large
        </UiButton>
        <UiButton appearance="outline" size="medium">
          Medium
        </UiButton>
        <UiButton appearance="outline" size="small">
          Small
        </UiButton>
        <UiButton appearance="outline" size="tiny">
          Tiny
        </UiButton>
      </div>
      <div>
        <UiButton variant="round" size="large">
          Large
        </UiButton>
        <UiButton variant="round" size="medium">
          Medium
        </UiButton>
        <UiButton variant="round" size="small">
          Small
        </UiButton>
        <UiButton variant="round" size="tiny">
          Tiny
        </UiButton>
      </div>
      <div>
        <UiButton design="skeo" size="large">
          Large
        </UiButton>
        <UiButton design="skeo" size="medium">
          Medium
        </UiButton>
        <UiButton design="skeo" size="small">
          Small
        </UiButton>
        <UiButton design="skeo" size="tiny">
          Tiny
        </UiButton>
      </div>
    </div>
  )
}
