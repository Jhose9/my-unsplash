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
function ModalNewPost() {
  const router=useRouter();
  return (
    <Card className="md:w-1/2">
    <CardHeader>
      <CardTitle>Create new post</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">titulo</Label>
            <Input id="name" placeholder="Name of your image" />
          </div>
          
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Descripcion</Label>
            <Input id="name" placeholder="description the image" />
          </div>

          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">URL image</Label>
            <Input id="name" placeholder="http:image/pictura/animals" />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button onClick={()=>router.push('/')} variant="outline">Cancel</Button>
      <Button >Deploy</Button>
    </CardFooter>
  </Card>
  )
}

export default ModalNewPost