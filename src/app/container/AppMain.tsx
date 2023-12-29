'use client'
import HeaderComponent from '@/components/HeaderComponent'
import React, { useEffect, useState } from 'react'

function AppMain({children}:{children:React.ReactNode}) {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent) => {
    setTimeout(()=>{
      setPosition({ x: e.pageX - 5, y: e.pageY - 4 });
    },200)
  };

  const handleScroll = () => {
    setPosition((prevPosition) => ({
      ...prevPosition,
      y: prevPosition.y + window.scrollY - prevPosition.y,
    }))
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('mousemove', handleMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <main className='relative overflow-x-hidden h-screen'>
      <div className='w-3 h-3 rounded-full bg-white absolute z-40 pointerClass' style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          pointerEvents: 'none',
          transition: 'transform 5s ease-out'
        }}> </div>
        <HeaderComponent/>
        {children}
    </main>
  )
}

export default AppMain