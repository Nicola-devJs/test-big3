import 'styled-components'

export enum colorsR {
   darkRed = '#C60E2E',
   red = '#E4163A',
   lightRed = '#FF5761',
   lighestRed = '#FF768E',
}

export enum colorsG {
   darkGray = '#303030',
   gray = '#707070',
   lightGray = '#9C9C9C',
   lighestGray = '#D1D1D1',
   white = '#F6F6F6',
}

export enum colorB {
   blue = '#344472',
}

interface TypedColors {
   r: typeof colorsR
   g: typeof colorsG
   b: typeof colorsB
}

export enum fontsValue {
   primary = "Avenir, 'sans-serif'",
   secondary = "Montserrat, 'sans-serif'",
}

export enum sizeBlockValues {
   heightHeader = '80px',
   widthSidebar = '140px',
}

export enum MediaQueryToScreen {
   maxNotebook = 'max-width: 1024px',
   maxTablet = 'max-width: 768px',
   maxPhone = 'max-width: 375px',
}

declare module 'styled-components' {
   export interface DefaultTheme {
      fonts: typeof fontsValue
      colors: TypedColors
      sizeBlock: typeof sizeBlockValues
      media: typeof MediaQueryToScreen
   }
}
