import React from './node_modules/react'
import { SvgXml } from './node_modules/react-native-svg'

export default function Icon () {
  const xml = `
    <svg xmlns="http://www.w3.org/2000/svg" width="192.902" height="182.036" viewBox="0 0 192.902 182.036">
      <g id="Group_17" data-name="Group 17" transform="translate(200.735 73.003) rotate(132)" opacity="0.4">
        <ellipse id="Ellipse_1" data-name="Ellipse 1" cx="28.519" cy="28.519" rx="28.519" ry="28.519" transform="translate(89.922 80.756)" fill="#5fe7ff"/>
        <ellipse id="Ellipse_2" data-name="Ellipse 2" cx="28.519" cy="28.519" rx="28.519" ry="28.519" transform="translate(11.707 0)" fill="#5fe7ff"/>
        <rect id="Rectangle_10" data-name="Rectangle 10" width="57.037" height="57.037" transform="translate(80.662 109.102) rotate(135)" fill="#5fe7ff"/>
        <rect id="Rectangle_11" data-name="Rectangle 11" width="57.037" height="57.037" transform="translate(146.944 57.287) rotate(180)" fill="#5fe7ff"/>
      </g>
    </svg>
  `

  return (
    <SvgXml xml={xml} />
  )
}
