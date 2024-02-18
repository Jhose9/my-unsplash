"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {useRouter} from 'next/navigation';
import { useState } from 'react';


function ModalNewPost() {
const [Form, setForm] = useState({
  title:"",
  description:"",
  img:""
});
  const router=useRouter();

const handleInputChange=(e:any)=>{
  const { name, value } = e.target;
  setForm({
    ...Form,
    [name]: value
  });
}


  const handleSubmit=async(event:any)=>{
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3100/v1/post/${1}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Form)
      });
      console.log(response);
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  }
  return (
    <Card className="md:w-1/2">
    <CardHeader>
      <CardTitle>Create new post</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
    <CardContent>
      <form >
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">titulo</Label>
            <Input id="name" placeholder="Name of your image" 
            value={Form.title}  
            onChange={handleInputChange}
            name= "title"
            type='text'
            />
          </div>
          
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Descripcion</Label>
            <Input id="name" placeholder="description the image"value={Form.description}  
            onChange={handleInputChange} 
            name= "description"
            type='text'
            />
          </div>

          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">URL image</Label>
            <Input id="name" placeholder="http:image/pictura/animals" value={Form.img}  
            onChange={handleInputChange}
            name= "img"
            type='text'
            />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button onClick={()=>router.push('/')} variant="outline">Cancel</Button>
      <Button onClick={handleSubmit} >Deploy</Button>
    </CardFooter>
  </Card>
  )
}

export default ModalNewPost