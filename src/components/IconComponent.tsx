import { IconProps } from '@/types';
import React from 'react'
import SVG from 'react-inlinesvg';
function IconComponent({name:{src},title,classname}:IconProps) {
  return <SVG
  src={src}
  className={classname}
  title={title}
/>
}

export default IconComponent