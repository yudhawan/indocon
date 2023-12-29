import { ButtonTicketProps } from '@/types'
import Link from 'next/link'
import React from 'react'

function ButtonGetTicket({link,text,classname}:ButtonTicketProps) {
  return <Link href={link} className={'text-blackMain px-3 py-5 hover:bg-yellowMain2 transition-colors duration-200 rounded-full flex flex-col items-center gap-1 relative bg-yellowMain font-bold text-nowrap '+classname}>
  {text}
</Link>
}

export default ButtonGetTicket