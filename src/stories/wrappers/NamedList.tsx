import React from 'react'

export const NamedList: React.FC<React.PropsWithChildren<{ name?: string }>> = props => {
  return (
    <section>
      {props.name ? <h1>{props.name}</h1> : null}
      <div css={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>{props.children}</div>
    </section>
  )
}
