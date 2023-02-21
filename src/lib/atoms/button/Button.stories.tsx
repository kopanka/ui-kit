import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Button } from './Button'

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as ComponentMeta<typeof Button>

export const Primary = () => (
  <div>
    <Button size="large">Large</Button>
    <Button size="medium">Medium</Button>
    <Button size="small">Small</Button>
    <Button size="tiny">Tiny</Button>
  </div>
)

export const Outline = () => {
  return (
    <div>
      <Button appearance="outline" size="large">
        Large
      </Button>
      <Button appearance="outline" size="medium">
        Medium
      </Button>
      <Button appearance="outline" size="small">
        Small
      </Button>
      <Button appearance="outline" size="tiny">
        Tiny
      </Button>
    </div>
  )
}

export const Round = () => {
  return (
    <div>
      <Button variant="round" size="large">
        Large
      </Button>
      <Button variant="round" size="medium">
        Medium
      </Button>
      <Button variant="round" size="small">
        Small
      </Button>
      <Button variant="round" size="tiny">
        Tiny
      </Button>
    </div>
  )
}

export const Skeo = () => {
  return (
    <div>
      <Button design="skeo" size="large">
        Large
      </Button>
      <Button design="skeo" size="medium">
        Medium
      </Button>
      <Button design="skeo" size="small">
        Small
      </Button>
      <Button design="skeo" size="tiny">
        Tiny
      </Button>
    </div>
  )
}
