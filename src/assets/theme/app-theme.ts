import { DefaultTheme } from 'styled-components'
import '../fonts/stylesheet.css'
import '../icons/style.css'

import {
   colorB,
   colorsG,
   colorsR,
   fontsValue,
   sizeBlockValues,
   MediaQueryToScreen,
} from './styled.d'

export const appTheme: DefaultTheme = {
   fonts: fontsValue,
   colors: {
      r: colorsR,
      g: colorsG,
      b: colorB,
   },
   sizeBlock: sizeBlockValues,
   media: MediaQueryToScreen,
}
