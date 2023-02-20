import React from 'react'

export type ColorBoxProps = {
  label: string
  color: string
}

export const ColorBox: React.FC<ColorBoxProps> = props => {
  const { label, color } = props

  return (
    <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <span>{label}</span>
      <div
        css={{
          width: 45,
          height: 45,
          borderRadius: 14,
          backgroundColor: color,
        }}
      />
    </div>
  )
}
