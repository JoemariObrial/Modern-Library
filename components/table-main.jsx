import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
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

const libraryBooks = [
  {
    title: "Book 1",
    status: "Available",
    author: "Author 1",
  },
  {
    title: "Book 2",
    status: "Pending",
    author: "Author 2",
  },
  {
    title: "Book 3",
    status: "Unavailable",
    author: "Author 3",
  },
  {
    title: "Book 4",
    status: "Available",
    author: "Author 4",
  },
  {
    title: "Book 5",
    status: "Available",
    author: "Author 5",
  },
  {
    title: "Book 6",
    status: "Pending",
    author: "Author 6",
  },
  {
    title: "Book 7",
    status: "Unavailable",
    author: "Author 7",
  },
  {
    title: "Book 8",
    status: "Available",
    author: "Author 8",
  },
  {
    title: "Book 9",
    status: "Pending",
    author: "Author 9",
  },
  {
    title: "Book 10",
    status: "Unavailable",
    author: "Author 10",
  },
];

export default function TableMain() {
  return (
    <div className="flex justify-center">
      <Table>
        <TableCaption>A list of your library books.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Title</TableHead>
            <TableHead className="w-[150px]">Status</TableHead>
            <TableHead className="w-[150px]">Author</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {libraryBooks.map((book) => (
            <TableRow key={book.title}>
              <TableCell className="font-medium">{book.title}</TableCell>
              <TableCell>{book.status}</TableCell>
              <TableCell>{book.author}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2} className="w-[300px]">
              Total
            </TableCell>
            <TableCell className="w-[150px] text-right">10 Books</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
