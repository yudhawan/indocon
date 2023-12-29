import React from 'react'
import { CardListLinkProps } from '@/types'
import Link from 'next/link'
import { BC_Font } from '@/app/fonts'
import IconComponent from './IconComponent'
import { ArrowRightIcon } from '@/icons'

function CardListLink({url,title,content,backgroundColor}:CardListLinkProps) {
  return (
    <Link href={url} className={`flex justify-between w-full rounded-2xl bg-gradient-to-r ${backgroundColor} p-px`}>
        <div className='flex px-6 py-4 bg-gradient-to-r from-gray-900 to-gray-950 w-full rounded-2xl justify-between'>
            <div className='flex flex-col'>
                <h1 className={BC_Font.className+' font-extrabold text-3xl'}>{title}</h1>
                <p className={`text-sm`}>{content}</p>
            </div>
            <div className='bg-white rounded-full flex justify-center items-center w-20 h-20 group transition-transform hover:scale-[1.1]'>
                <IconComponent name={ArrowRightIcon} classname='rotate-[45deg] fill-black w-6 transition-transform group-hover:scale-[1.1]' />
            </div>
        </div>
    </Link>
  )
}

export default CardListLink