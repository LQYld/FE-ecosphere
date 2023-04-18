interface stylesType {
  [key: string]: string
}
declare module '*.css' {
  const css: stylesType
  export default css
}
declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}
declare module '*.mtl' {
  const mtl: any
  export default mtl
}
declare module '*.obj' {
  const obj: any
  export default obj
}
// declare module '@douyinfe/semi-icons' {
//   // import SemiIcons = require('@douyinfe/semi-icons')
//   export * from '@douyinfe/semi-icons'
//   import SemiIcons from '@douyinfe/semi-icons'
//   export default SemiIcons
// }
