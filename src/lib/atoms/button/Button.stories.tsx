import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Button } from './Button'

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Button',
}
