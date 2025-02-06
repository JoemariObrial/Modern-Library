// import { libraryBooks } from "@/data/libraryBooks"
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { BookDetailsModal } from "./BookDetailsModal"

// export default function TableMain() {
//   return (
//     (<div className="flex justify-center p-4">
//       <Table>
//         <TableCaption>A list of your library books.</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="w-[200px]">Book</TableHead>
//             <TableHead className="w-[150px]">Status</TableHead>
//             <TableHead className="w-[150px]">Author</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {libraryBooks.map((book) => (
//             <TableRow key={book.title}>
//               <TableCell className="font-medium">
//                 <div className="flex items-center space-x-3">
//                   <BookDetailsModal book={book} />
//                   <span>{book.title}</span>
//                 </div>
//               </TableCell>
//               <TableCell>{book.status}</TableCell>
//               <TableCell>{book.author}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//         <TableFooter>
//           <TableRow>
//             <TableCell colSpan={2}>Total</TableCell>
//             <TableCell className="text-right">{libraryBooks.length} Books</TableCell>
//           </TableRow>
//         </TableFooter>
//       </Table>
//     </div>)
//   );
// }
