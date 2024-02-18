"use client";
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {Post} from '@/types/types';
function Page() {
  const [Datarank, setDatarank] = useState<Post[]>();

  const CallDataRank = async () => {
    try {
      const response = await fetch("http://localhost:3100/v1/rank");

      if (response.ok) {
        const data = await response.json();
        setDatarank(data);
        console.log(data);
      } else {
        throw new Error("error en el response");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    CallDataRank();
  }, []);

  return (
    <div className="md:w-3/4 mx-auto lg:w-2/4">
      <Table>
        <TableCaption>user ranking list.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-24">Last Post</TableHead>
            <TableHead className="text-center">UserName</TableHead>
            <TableHead className="text-center">N-Post</TableHead>
            <TableHead className="text-center">Likes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Datarank &&
            Datarank.map((elemet: Post) => (
              <TableRow key={elemet.userData.id}>
                <TableCell className="font-medium">
                  {" "}
                  {new Date(elemet.postData.fecha).toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </TableCell>
                <TableCell className="text-center">
                  {elemet.userData.username}
                </TableCell>
                <TableCell className="text-center">
                  {elemet.userData.numberpost}
                </TableCell>
                <TableCell className="text-center">
                  {elemet.likecount}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Page;
