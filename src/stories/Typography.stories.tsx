import React from 'react'

import { BodyText, Heading, LabelText } from '../lib'

export default {
  title: 'Design/Typography',
}

export const Typography = () => (
  <div>
    <section css={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
    </section>
    <section css={{ marginTop: 30, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <BodyText size="large">Body text large</BodyText>
      <BodyText size="medium">Body text medium</BodyText>
      <BodyText size="small">Body text small</BodyText>
    </section>
    <section css={{ marginTop: 30, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <LabelText size="large">Label text large</LabelText>
      <LabelText size="medium">Label text medium</LabelText>
      <LabelText size="small">Label text small</LabelText>
    </section>
  </div>
)
