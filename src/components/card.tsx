"use client"
import React from 'react'
import Image from 'next/image';
import {ThumbsUp} from 'lucide-react';
import {useRouter} from 'next/navigation';
import {CardType} from '@/types/types';
function Card(params:CardType) {
  const router= useRouter();
  return (
    <div className='mb-7 md:mr-5 hover:scale-105 transition '>
          <Image
          onClick={()=>router.push("/post")}
        className="rounded-lg shadow-md sm:mr-5 hover:opacity-50"
        src={params.src}
        alt="descripcion"
        width={350}
        height={300}
        /> 
       <div className='flex mt-5'>
       <h2 className='font-extrabold'>{params.title}</h2>
       <div className='flex gap-2 ml-auto lg:pr-4'> 
       <ThumbsUp />
        <p>likes</p>
       </div>
     
       </div>
    </div>
  )
}

export default Card