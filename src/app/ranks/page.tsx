import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
function page() {
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
    <TableRow>
      <TableCell className="font-medium">3/5/2024</TableCell>
      <TableCell className="text-center">Jhotaw3ass</TableCell>
      <TableCell className="text-center">20</TableCell>
      <TableCell className="text-center">50</TableCell>
    </TableRow>

    
  </TableBody>
</Table>
    </div>
  )
}

export default page