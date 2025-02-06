"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignUpDialog } from "@/components/SignUpDialog";

function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
        <div className="hidden md:flex md:w-2/5 p-6 justify-center items-center bg-gray-100">
          <Image
            src="/assets/images/logolib.png"
            alt="logo"
            width={300}
            height={300}
            className="max-w-full h-auto"
          />
        </div>
        <div className="w-full md:w-3/5 p-6">
          <CardHeader>
            <CardDescription className="text-center md:text-left">
              A lightweight and modular library for building fast and scalable
              web applications.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Enter your username" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-4">
            <Button className="w-full">
              <Link href="/dashboard" className="w-full text-center">
                Login
              </Link>
            </Button>
            <p className="text-sm text-center">
              Don't have an account? <SignUpDialog />
            </p>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}

export default Home;
