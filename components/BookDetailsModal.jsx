import Image from "next/image";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function BookDetailsModal({ book }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Image
          src={book.imageUrl || "/placeholder.svg"}
          alt={`Cover of ${book.title}`}
          width={50}
          height={50}
          className="rounded-md cursor-pointer"
        />
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle>{book.title}</AlertDialogTitle>
          <AlertDialogDescription>
            Details about the book.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex justify-center">
            <Image
              src={book.imageUrl || "/placeholder.svg"}
              alt={`Cover of ${book.title}`}
              width={150}
              height={150}
              className="rounded-md"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-bold">Author:</span>
            <span className="col-span-3">{book.author}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-bold">Status:</span>
            <span className="col-span-3">{book.status}</span>
          </div>
        </div>
        <AlertDialogCancel>Close</AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
}
