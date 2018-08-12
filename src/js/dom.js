let elementStyle = document.createElement('div').style

let vender = (() => {
  let transformNames = {
    standard: 'transform',
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform'
  }

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }
})()

export function prefixStyle (style) {
  if (!vender) return false
  if (vender === 'standard') return style
  return vender + style.charAt(0).toUpperCase() + style.substring(1)
}
