import React from 'react'
import Image from 'next/image'
import cx from 'classnames'
import Link from 'next/link'
import { imagesGalleryUrl } from '@/services/imageLink'
import IconComponent from './IconComponent'
import { ArrowRightIcon } from '@/icons'
import '../app/globals.css'
function GalleryStacks() {
  return (
    <div className='relative flex flex-col w-full h-96 gallery'>
        <Link href={'/gallery'} className='relative flex justify-center'>
            {
                imagesGalleryUrl.slice(0,4).map((val,index)=><Image key={val} src={val} alt='gallery-stack' width={488} height={300} className={cx('rounded-2xl absolute hover:rotate-6 transition-transform delay-200',{['w-[488px] h-[300px] z-50 top-0 ']:index==0},{['w-[420px] h-[250px] z-40 top-16']:index==1},{['w-[360px] h-[200px] z-30 top-32']:index==2},{['w-[320px] h-[150px] z-20 top-48']:index==3})} />)
            }
        </Link>
        <Link href={'/gallery'} className='absolute bottom-0 flex items-center gap-1 self-center' >
            <span>View the last edition of ICC's excitement</span>
            <IconComponent name={ArrowRightIcon}/>
        </Link>
    </div>
  )
}

export default GalleryStacks