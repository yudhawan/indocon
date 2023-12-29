import { backgroundStrike, captainBoltIconOne, captainBoltIconThree, captainBoltIconTwo, thunderBoltIcon } from '@/icons'
import Image from 'next/image'
import React from 'react'
import ButtonGetTicket from '../../components/ButtonGetTicket'
import CardBasic from '../../components/CardBasic'
import IconComponent from '../../components/IconComponent'
import { BC_Font } from '@/app/fonts'
import GalleryStacks from '../../components/GalleryStacks'
import CardListLink from '@/components/CardListLink'


function HomepageGridCard() {
  return (
    <div className='2xl:pt6 lg:pt-2 relative flex flex-col w-full'>
        <div className='absolute inset-0 -z-10'>
            <Image src={backgroundStrike} alt='bgstrike' width={1500} height={1500} className='w-full h-96 opacity-20 object-cover'/>
        </div>
        <div className='absolute inset-0 z-10 bg-gradient-to-b from-black via-[20%] lg:via-[5%] via-transparent to-[95%] to-gray-950'></div>
        <div className='relative z-10 !mt-0 mx-4 pt-6'>
            <div className='flex w-full flex-wrap md:flex-col 2xl:flex-row gap-5 lg:justify-center'>
                <div className='py-16 lg:w-auto flex items-end isolate lg:justify-center 2xl:justify-normal w-full justify-center'>
                    <div className='flex flex-col relative gap-4'>
                        <div className='absolute top-0 right-12 group'>
                            <Image src={captainBoltIconOne} alt='cpatain' width={300} height={300} className=' w-[112px] pointer-events-none translate-x-14 transition-transform duration-200 group-hover:scale-[1.1]'/>
                        </div>

                        <p className='text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white/100 uppercase'>Indonesia Comic Con 2023 ⚡️</p>
                        <h1 className='lg:text-7xl font-bold uppercase tracking-tight text-5xl w-full'>
                            Bringing <br/>
                            The Best <br/>
                            <span className='text-red-600'>Pop</span>
                            <span className='text-yellowMain'>culture</span><br/>
                            experience
                        </h1>
                        <div className='flex items-center gap-4'>
                            <ButtonGetTicket link='/ticket' text='Get your ticket' classname='px-6' />
                            <button className='py-5 px-6 rounded-full border border-white hover:bg-white hover:text-blackMain font-bold'>Be part of ICC</button>
                        </div>
                        <div className='absolute 2xl:-bottom-28  w-full h-1 grid grid-cols-3 -bottom-10 '>
                            <div className='bg-redMain rounded-bl-md'></div>
                            <div className='bg-yellowMain'></div>
                            <div className='bg-blueMain rounded-br-md'></div>
                        </div>
                        <Image src={thunderBoltIcon} width={96} height={140} alt='bolt' className='absolute 2xl:-bottom-48 2xl:-left-10 -rotate-[20deg] xl:-bottom-14 xl:-left-40 xl:w-28 xl:h-28 w-10 h-10 -bottom-16 -left-5' />
                        <Image src={thunderBoltIcon} width={96} height={140} alt='bolt' className='absolute 2xl:-bottom-48 2xl:-right-10 -rotate-[-20deg] xl:-bottom-14 xl:-right-40 xl:w-28 xl:h-28 w-10 h-10 -bottom-16 -right-5 scale-x-[-1] 2xl:hidden' />
                    </div>
                </div>
                <div className='grid xl:grid-cols-[488px_488px] lg:grid-cols-1 gap-4 relative lg:justify-center'>
                    <Image src={thunderBoltIcon} width={96} height={140} alt='bolt' className='absolute md:-top-16 md:right-44 lg:right-60 xl:right-72 xl:-top-36 scale-x-[-1] 2xl:-top-10 2xl:-right-10 z-20 rotate-12 w-10 h-10 xl:w-28 xl:h-28  -top-16 -right-0 hidden 2xl:block' />
                    <CardBasic background='bg-redMain' content={<div className='flex flex-col items-center gap-4'>
                        <span className={BC_Font.className+'  text-4xl'}>Nov 4-5, 2003</span>
                        <span className='font-semibold text-center'>Jakarta Convention Center (JCC) Senayan, Assembly, Cendrawasih, and Plenary Hall</span>
                        <span className='font-semibold'>10 AM - 9 PM</span>
                    </div>} icon={<Image src={captainBoltIconTwo} alt='cpatain two' width={300} height={300} className='absolute -top-2 right-3 w-[150px] -rotate-[30deg] pointer-events-none translate-x-14 transition-transform duration-200 group-hover:scale-[1.1]'/>} classname='group '/>
                    <CardBasic background='bg-yellowMain' content={<div className='flex flex-col items-center gap-4 mt-4'>
                        <span className='font-semibold text-black text-lg text-center'>The biggest event in the year to celebrate</span>
                        <span className={BC_Font.className+'  text-[48px] text-black font-[900] text-center'}>5 Pop Culture Pillars</span>
                        <span className='font-semibold'>10 AM - 9 PM</span>
                    </div>} icon={<Image src={captainBoltIconThree} alt='cpatain three' width={300} height={300} className='absolute -bottom-16 rotate-12 -left-24 w-[120px] pointer-events-none translate-x-14 transition-transform duration-200 group-hover:scale-x-[-1.1] group-hover:scale-y-[1.1] scale-x-[-1] group-hover:rotate-[16deg]'/>} classname='group !justify-start'/>
                    <GalleryStacks/>
                    <div className='grid grid-cols-1 gap-3'>
                        <CardListLink key={1} title='DG Awards 2023' url='/dg-awards-2023' content='The biggest gaming award event in Indonesia is coming.' backgroundColor='from-redMain' />
                        <CardListLink key={2} title='DG Awards 2023' url='/dg-awards-2023' content='The biggest gaming award event in Indonesia is coming.' backgroundColor='from-yellowMain' />
                        <CardListLink key={3} title='DG Awards 2023' url='/dg-awards-2023' content='The biggest gaming award event in Indonesia is coming.' backgroundColor='from-blueMain' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomepageGridCard