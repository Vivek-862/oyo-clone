'use client'
import Image from 'next/image';

const Header4 = () => {
  return (
    <div className="flex">
        <div className="flex">
            <Image src={'/fire.jpg'} alt="fire" width={200} height={200} className="w-20 h-20 rounded-full"/>
        </div>

    </div>
  )
}

export default Header4