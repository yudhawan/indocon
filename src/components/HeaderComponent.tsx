'use client'
import React, { useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import IconComponent from './IconComponent'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ActiveMenuIcon, ChevronDownIcon, GalleryIcon, HomeIcon, PromoIcon, RundownIcon, StarIcon, TenantIcon } from '@/icons'
import { linksProvider, moreLinks } from '@/services/linkProvider'
import ButtonGetTicket from './ButtonGetTicket'
import '../app/globals.css'
function HeaderComponent() {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const buttonRefMobile = useRef<HTMLButtonElement>(null)
    const [menuShow,setMenuShow]=useState(false)
    const [menuShowMobile,setMenuShowMobile]=useState(false)
    const path= usePathname()
    const newPath = path==='/'?'home':path.substring(1)
    function getIcon(name:string) {
        if (name==='guest') return StarIcon
        else if(name==='rundown') return RundownIcon
        else if(name==='tenants') return TenantIcon
        else if(name==='gallery') return GalleryIcon
        else if(name==='promo') return PromoIcon
        else return ''
        
    }
    useEffect(()=>{
        const handleOutOfElement = (event: MouseEvent) => {
            if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) setMenuShow(false)
        };
        document.addEventListener("click",handleOutOfElement)
        return ()=> document.removeEventListener("click", handleOutOfElement)
    },[])
    useEffect(()=>{
        const handleOutOfElement = (event: MouseEvent) => {
            if (buttonRefMobile.current && !buttonRefMobile.current.contains(event.target as Node)) setMenuShowMobile(false)
        };
        document.addEventListener("click",handleOutOfElement)
        return ()=> document.removeEventListener("click", handleOutOfElement)
    },[])
    
  return (
    <header className='z-50 w-full h-24 transition-all duration-200 ease-in-out fixed top-0 left-0 bg-black/70 backdrop-blur-3xl'>
        <div className='w-full h-full px-4 items-center flex justify-between'>
            <a href="" className='md:w-[300px] md:h-50 flex items-center w-48 h-8'>
                <Image src={'/logo.png'} alt='logo' width={300} height={500} className='w-[188px] h-12' />
            </a>
            <nav className='gap-6 hidden lg:flex'>
                <Link href={'/'} key={10} className={cx('capitalize text-grayMain px-3 py-5 hover:bg-blackMain rounded-full flex flex-col items-center gap-1 relative',{['text-white']:newPath==='home'})}>
                    Home
                    {newPath==='home'&&<IconComponent name={ActiveMenuIcon} classname='w-7 absolute bottom-2 left-1/4 fill-yellowMain' />}
                </Link>
                {
                    linksProvider.map(val=>{
                    
                        if(val!=='more') return <Link href={val} key={val+1} className={cx('capitalize text-grayMain px-3 py-5 hover:bg-blackMain rounded-full flex items-center gap-1 flex-col relative',{['text-white']:newPath===val})}>
                            {val}
                            {newPath===val&&<IconComponent name={ActiveMenuIcon} classname='w-7 absolute bottom-2 left-1/4 fill-yellowMain' />}
                        </Link>
                        return <button className={cx('relative capitalize text-grayMain px-3 py-5 hover:bg-blackMain rounded-full flex items-center gap-1',{['text-white']:newPath===val})} onClick={()=>setMenuShow(!menuShow)} ref={buttonRef} key={val}>
                            {val}{val==='more'&&<IconComponent name={ChevronDownIcon} classname={`w-5 h-5 self-end ${menuShow?'scale-y-[-1]':''}`} />}
                            {menuShow&&<div className={'list-none absolute flex-col top-16 px-3 py-5 rounded-xl bg-blackMain right-0 hidden md:flex'}>
                                {moreLinks.map(val=><Link key={val.name} href={val.url} className='p-4 text-nowrap text-left text-grayMain2 hover:text-white flex gap-4 items-center group '>
                                    <IconComponent name={val.icon} classname='w-5 group-hover:fill-white fill-grayMain2' />
                                    {val.name}
                                </Link>)}
                            </div>}
                        </button> 
                    })
                }
            </nav>
            <ButtonGetTicket link='/ticket' classname='lg:py-5 !py-2 text-sm lg:text-base' text={<span className='flex'>Get <span className='hidden lg:block mx-1'>your</span> ticket</span>} />
            <button className={'relative capitalize  px-3 py-2 bg-blackMain rounded-full flex items-center gap-1 text-white lg:hidden w-20'} onClick={()=>setMenuShowMobile(!menuShowMobile)} ref={buttonRefMobile} >
                {!menuShowMobile?'Menu':'Close'}
                <IconComponent name={ChevronDownIcon} classname={`w-2 h-2 stroke-2 ${menuShowMobile?'scale-y-[-1]':''}`} />
                
                {
                    menuShowMobile&&<div className={'list-none absolute flex-col top-10  px-2 py-4 rounded-xl bg-white right-0 md:flex'}>
                        <Link key={'/'} href={'/'} className='p-4 text-nowrap text-left text-blackMain hover:text-blackMain flex gap-4 items-center group text-sm md:text-base'>
                            <IconComponent name={HomeIcon} classname='w-4 fill-blackMain iconActive' />
                            Home
                        </Link>
                        {
                            linksProvider.filter(val=> val!=='more').map(val=>{
                                
                                if(val!=='more') return <Link key={val} href={val} className='p-4 text-nowrap text-left text-blackMain hover:text-blackMain flex gap-4 items-center group text-sm md:text-base'>
                                    <IconComponent name={getIcon(val)} classname='w-4 fill-blackMain' />
                                    {val}
                                </Link>
                            })
                        }
                        {moreLinks.map(val=><Link key={val.name} href={val.url} className='p-4 text-nowrap text-left text-blackMain hover:text-blackMain flex gap-4 items-center text-sm md:text-base'>
                            <IconComponent name={val.icon} classname='w-4  fill-blackMain' />
                            {val.name}
                        </Link>)}
                    </div>
                }
            </button>
        </div>
    </header>
  )
}

export default HeaderComponent