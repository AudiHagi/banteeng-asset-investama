'use client'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import YT from '../../../public/images/Youtube.png'
import IG from '../../../public/images/insta.png'

export default function Footer() {
  return (
    <div class='bg-blue-950 w-full h-20 flex justify-end align-bottom items-end'>
      <div class='w-full h-20 flex justify-center items-center xl:text-lg lg:text-md text-xs text-white'>© 2023 Powered by PT. Uruz Solusi Teknologi</div>
      {/* <div class='w-1/2 h-20 flex justify-start items-center pl-11 xl:text-lg lg:text-md text-xs text-white'>© 2023 Uruz | Powered by Uruz</div>
      <div class='w-1/2 h-20 flex justify-end items-center pr-11'>
        <Image
          src={IG}
          height={15}
          width={15}
          unoptimized
          class='w-10 h-10 mr-4'
          alt="Picture of the author"
        />
        <div>
          <Image
            src={YT}
            height={15}
            width={15}
            unoptimized
            className='w-10 h-10'
            alt="YouTube Logo"
          />
        </div>

      </div> */}
    </div>
  )
}