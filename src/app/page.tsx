"use client";
import { useState, useEffect } from "react";
import Card from "@/components/card";
import { PostType } from "@/types/types";

export default function Home() {
  const [data, setData] = useState<PostType[]>();

  async function CallApi() {
    try {
      const response = await fetch("http://localhost:3100/v1/post/all");

      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        throw new Error("error en la respuesta");
      }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    CallApi();
  }, []);

  return (
    <div className="px-20">
      <h1 className="text-center font-bold text-5xl mb-10">Post</h1>
      <div className="flex flex-wrap justify-center items-center lg:gap-10 ">
        {data &&
          data.map((DataPost: PostType) => (
            <div key={DataPost.id}>
              <Card title={DataPost.title} src={DataPost.img} id={DataPost.id} />
            </div>
          ))}
      </div>
    </div>
  );
}
