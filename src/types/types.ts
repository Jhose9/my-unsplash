export interface CardType{
    id:number,
    title:string,
    src:string
}

export interface PostType{
    id:number,
    title:string,
    img:string
}

interface PostData {
    id: number;
    img: string;
    title: string;
    description: string;
    fecha: string;
    authorid: number;
  }
  
  interface UserData {
    id: number;
    username: string;
    userimg: string;
    numberpost: number;
    password: string;
  }
  
  interface LikeData {
    id: number;
    count: number;
    likeid: number;
  }
  
  export interface Post {
    userData: UserData;
    postData: PostData;
    likeData: LikeData;
    likecount: number;
  }

  export interface postUny{
    img:string
    title:string
    description:string
    like:LikeData[]
  }

  interface LikeData {
    id: number;
    count: number;
    likeid: number;
  }