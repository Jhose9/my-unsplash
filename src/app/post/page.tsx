"use client";
import React from "react";
import Image from "next/image";
import { ThumbsUp } from "lucide-react";
import { useState, useEffect } from "react";
import { PostType, postUny } from "@/types/types";
import Link from "next/link";
import {useRouter} from 'next/navigation';

function Page() {
  const [id, setid] = useState<string>()
  const router=useRouter();
    const [DataPosts, setDataPosts] = useState<PostType[]>();
    const [DataPost, setDataPost] = useState<postUny>();

    
    async function CallApi() {
      try {
        const response = await fetch("http://localhost:3100/v1/post/all");
        
        if (response.ok) {
          const data = await response.json();
          setDataPosts(data);
        } else {
          throw new Error("error en la respuesta");
        }
      } catch (error) {
        console.error(error);
      }
    }
    
    async function CallPost(id: any) {
      try {
        const response = await fetch(`http://localhost:3100/v1/post/${id}`);
        
        if (response.ok) {
          const data = await response.json();
          setDataPost(data);
        } else {
          throw new Error("error en la respuesta");
        }
      } catch (error) {
        console.error(error);
      }
    }
    
    useEffect(() => {
      const currentUrl = window.location.href;
  
      const url = new URL(currentUrl);
  
      const nameParam = url.searchParams.get("id");
  
      setid(nameParam || "");
      CallApi();
      CallPost(nameParam);
     
    }, []);
    return (
    <div>
      <div className="flex-col lg:mt-20 ">
        <Image
          className="rounded-lg shadow-md mx-auto"
          src={DataPost?.img || ""}
          width={300}
          height={300}
          alt="descripcion"
        />
        <div className="text-center mt-5 ">
          <div className="flex justify-center gap-4">
            <h1 className="font-extrabold text-2xl">{DataPost?.title}</h1>
            <div className="flex gap-2 justify-center items-center">
              <ThumbsUp />
              <p className="text-xl">{DataPost?.like[0]?.count || 0}</p>
            </div>
          </div>

          <p className="w-9/12 mx-auto lg:w-5/12 lg:mt-5">
            {DataPost?.description}
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-center font-bold mt-9 mb-5 text-2xl">more image</h2>
        <div className="flex-wrap flex gap-5 lg:w-9/12 mx-auto">
          {DataPosts &&
            DataPosts.slice(0, 14).map((elemt: PostType) => (
              <div key={elemt.id} onClick={()=>{ router.refresh()}} >
                <Link
                  href={{
                    pathname: "/post",
                    query: { id: elemt.id },
                  }}
                >
                  <Image
                    className="rounded-lg shadow-md mx-auto hover:scale-105 hover:opacity-50 "
                    src={elemt.img}
                    width={180}
                    height={100}
                    alt="descripcion"
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
