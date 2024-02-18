"use client"
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"
import {useRouter} from 'next/navigation';
function ModalLogin() {

  const router=useRouter();
  const [DatosLogin, setDatosLogin] = useState({
    username:"",
    password:""
  })

const llamar=()=>{
  console.log(DatosLogin);
  
}

  const  handleSubmit= async() =>{
    const response=await fetch("http://localhost:3100/v1/user/login",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(DatosLogin)
    }
    )
    const value= await response.json();
    if(value.exist==true){
     localStorage.setItem('login',"true");
     router.push("/")
    }else{
      alert("valor incorrecto");
    }
    
  }


  const handleInputChange=(e:any)=>{
    const {name,value}=e.target;
    setDatosLogin({...DatosLogin, [name]: value})
  }
  return (
    <Tabs defaultValue="Login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Login">Login</TabsTrigger>
        <TabsTrigger value="Register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="Login">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="username">UserName</Label>
              <Input onChange={handleInputChange} id="username" placeholder="Pedro Duarte"  name="username" value={DatosLogin.username} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input onChange={handleInputChange} id="password" type="number" placeholder="*********" name="password" value={DatosLogin.password} />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSubmit}>Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="Register">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Register</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">UserName</Label>
              <Input id="current" placeholder="Pedro Duarte" type="text" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Password</Label>
              <Input id="new" placeholder="******" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="current">Profile Picture</Label>
              <Input id="current" placeholder="https://github.com/shadcn.png" type="text" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Register</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default ModalLogin