import React from 'react'

import { Toggle as UiToggle } from './Toggle'

export default {
  title: 'Atoms/Toggle',
}

export const Toggle = () => (
  <section css={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
    <div css={{ display: 'flex', gap: 10 }}>
      <UiToggle />
      <UiToggle checked />
    </div>
    <div css={{ display: 'flex', gap: 10 }}>
      <UiToggle disabled />
      <UiToggle disabled checked />
    </div>
  </section>
)
