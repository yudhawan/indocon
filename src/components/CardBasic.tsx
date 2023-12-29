import { CardBasicProps } from '@/types'
import React from 'react'
import IconComponent from './IconComponent'

function CardBasic({background,content,classname,icon}:CardBasicProps) {
    console.log(icon)
  return (
    <div className={'rounded-2xl xl:p-6 relative flex flex-col justify-center items-center overflow-hidden w-full h-80 '+classname+' '+background}>
        {content}
        {icon}
    </div>
  )
}

export default CardBasic