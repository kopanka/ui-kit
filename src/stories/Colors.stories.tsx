import React from 'react'
import type { ComponentMeta } from '@storybook/react'

import { theme } from '../lib'

import { ColorBox, ColorsList } from './wrappers'

export default {
  title: 'Design/Colors',
} as ComponentMeta<typeof ColorsList>

export const Colors = () => {
  return (
    <div css={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
      <ColorsList name="Primary">
        <ColorBox label="100" color={theme.colors.primary100} />
        <ColorBox label="200" color={theme.colors.primary200} />
        <ColorBox label="300" color={theme.colors.primary300} />
        <ColorBox label="400" color={theme.colors.primary400} />
        <ColorBox label="500" color={theme.colors.primary500} />
        <ColorBox label="600" color={theme.colors.primary600} />
        <ColorBox label="700" color={theme.colors.primary700} />
        <ColorBox label="800" color={theme.colors.primary800} />
        <ColorBox label="900" color={theme.colors.primary900} />
      </ColorsList>
      <ColorsList name="Success">
        <ColorBox label="100" color={theme.colors.success100} />
        <ColorBox label="200" color={theme.colors.success200} />
        <ColorBox label="300" color={theme.colors.success300} />
        <ColorBox label="400" color={theme.colors.success400} />
        <ColorBox label="500" color={theme.colors.success500} />
        <ColorBox label="600" color={theme.colors.success600} />
        <ColorBox label="700" color={theme.colors.success700} />
        <ColorBox label="800" color={theme.colors.success800} />
        <ColorBox label="900" color={theme.colors.success900} />
      </ColorsList>
      <ColorsList name="Info">
        <ColorBox label="100" color={theme.colors.info100} />
        <ColorBox label="200" color={theme.colors.info200} />
        <ColorBox label="300" color={theme.colors.info300} />
        <ColorBox label="400" color={theme.colors.info400} />
        <ColorBox label="500" color={theme.colors.info500} />
        <ColorBox label="600" color={theme.colors.info600} />
        <ColorBox label="700" color={theme.colors.info700} />
        <ColorBox label="800" color={theme.colors.info800} />
        <ColorBox label="900" color={theme.colors.info900} />
      </ColorsList>
      <ColorsList name="Warning">
        <ColorBox label="100" color={theme.colors.warning100} />
        <ColorBox label="200" color={theme.colors.warning200} />
        <ColorBox label="300" color={theme.colors.warning300} />
        <ColorBox label="400" color={theme.colors.warning400} />
        <ColorBox label="500" color={theme.colors.warning500} />
        <ColorBox label="600" color={theme.colors.warning600} />
        <ColorBox label="700" color={theme.colors.warning700} />
        <ColorBox label="800" color={theme.colors.warning800} />
        <ColorBox label="900" color={theme.colors.warning900} />
      </ColorsList>
      <ColorsList name="Danger">
        <ColorBox label="100" color={theme.colors.danger100} />
        <ColorBox label="200" color={theme.colors.danger200} />
        <ColorBox label="300" color={theme.colors.danger300} />
        <ColorBox label="400" color={theme.colors.danger400} />
        <ColorBox label="500" color={theme.colors.danger500} />
        <ColorBox label="600" color={theme.colors.danger600} />
        <ColorBox label="700" color={theme.colors.danger700} />
        <ColorBox label="800" color={theme.colors.danger800} />
        <ColorBox label="900" color={theme.colors.danger900} />
      </ColorsList>
      <ColorsList name="Purple">
        <ColorBox label="100" color={theme.colors.purple100} />
        <ColorBox label="200" color={theme.colors.purple200} />
        <ColorBox label="300" color={theme.colors.purple300} />
        <ColorBox label="400" color={theme.colors.purple400} />
        <ColorBox label="500" color={theme.colors.purple500} />
        <ColorBox label="600" color={theme.colors.purple600} />
        <ColorBox label="700" color={theme.colors.purple700} />
        <ColorBox label="800" color={theme.colors.purple800} />
        <ColorBox label="900" color={theme.colors.purple900} />
      </ColorsList>
      <ColorsList name="Black">
        <ColorBox label="100" color={theme.colors.black100} />
        <ColorBox label="200" color={theme.colors.black200} />
        <ColorBox label="300" color={theme.colors.black300} />
        <ColorBox label="400" color={theme.colors.black400} />
        <ColorBox label="500" color={theme.colors.black500} />
        <ColorBox label="600" color={theme.colors.black600} />
        <ColorBox label="700" color={theme.colors.black700} />
        <ColorBox label="800" color={theme.colors.black800} />
        <ColorBox label="900" color={theme.colors.black900} />
      </ColorsList>
      <ColorsList name="Pistachio">
        <ColorBox label="100" color={theme.colors.pistachio100} />
        <ColorBox label="200" color={theme.colors.pistachio200} />
        <ColorBox label="300" color={theme.colors.pistachio300} />
        <ColorBox label="400" color={theme.colors.pistachio400} />
        <ColorBox label="500" color={theme.colors.pistachio500} />
        <ColorBox label="600" color={theme.colors.pistachio600} />
        <ColorBox label="700" color={theme.colors.pistachio700} />
        <ColorBox label="800" color={theme.colors.pistachio800} />
        <ColorBox label="900" color={theme.colors.pistachio900} />
      </ColorsList>
      <ColorsList name="Peach">
        <ColorBox label="100" color={theme.colors.peach100} />
        <ColorBox label="200" color={theme.colors.peach200} />
        <ColorBox label="300" color={theme.colors.peach300} />
        <ColorBox label="400" color={theme.colors.peach400} />
        <ColorBox label="500" color={theme.colors.peach500} />
        <ColorBox label="600" color={theme.colors.peach600} />
        <ColorBox label="700" color={theme.colors.peach700} />
        <ColorBox label="800" color={theme.colors.peach800} />
        <ColorBox label="900" color={theme.colors.peach900} />
      </ColorsList>
      <ColorsList name="Pink">
        <ColorBox label="100" color={theme.colors.pink100} />
        <ColorBox label="200" color={theme.colors.pink200} />
        <ColorBox label="300" color={theme.colors.pink300} />
        <ColorBox label="400" color={theme.colors.pink400} />
        <ColorBox label="500" color={theme.colors.pink500} />
        <ColorBox label="600" color={theme.colors.pink600} />
        <ColorBox label="700" color={theme.colors.pink700} />
        <ColorBox label="800" color={theme.colors.pink800} />
        <ColorBox label="900" color={theme.colors.pink900} />
      </ColorsList>
      <ColorsList name="Gray">
        <ColorBox label="100" color={theme.colors.gray100} />
        <ColorBox label="200" color={theme.colors.gray200} />
        <ColorBox label="300" color={theme.colors.gray300} />
        <ColorBox label="400" color={theme.colors.gray400} />
        <ColorBox label="500" color={theme.colors.gray500} />
        <ColorBox label="600" color={theme.colors.gray600} />
        <ColorBox label="700" color={theme.colors.gray700} />
        <ColorBox label="800" color={theme.colors.gray800} />
        <ColorBox label="900" color={theme.colors.gray900} />
      </ColorsList>
      <ColorsList name="Dark">
        <ColorBox label="100" color={theme.colors.dark100} />
        <ColorBox label="200" color={theme.colors.dark200} />
        <ColorBox label="300" color={theme.colors.dark300} />
        <ColorBox label="400" color={theme.colors.dark400} />
        <ColorBox label="500" color={theme.colors.dark500} />
        <ColorBox label="600" color={theme.colors.dark600} />
        <ColorBox label="700" color={theme.colors.dark700} />
        <ColorBox label="800" color={theme.colors.dark800} />
        <ColorBox label="900" color={theme.colors.dark900} />
      </ColorsList>
    </div>
  )
}
