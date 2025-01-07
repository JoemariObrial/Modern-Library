import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
function Home() {
  return (
    <>
      <div className="flex justify-center mt-[150px]">
        <Card className="w-[800px] flex flex-row">
          <div className="w-[350px] flex justify-center">
            <Image
              src={"/assets/images/logolib.png"}
              alt="logo"
              height={400}
              width={400}
            />
          </div>
          <div className="w-[450px] flex flex-col mt-10">
            <CardHeader>
              <CardDescription>
                A lightweight and modular library for building fast and scalable
                web applications.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <form className="flex flex-col">
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" placeholder="Enter your username" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="pword">Password</Label>
                    <Input id="pword" placeholder="Enter your password" />
                  </div>
                </div>
              </form>
            </CardContent>

            <CardFooter className="flex flex-col justify-center">
              <Button>
                <Link href={"/dashboard"}>Login</Link>
              </Button>
              <div className="flex justify-between mt-4">
                <p>
                  Don't have an account?{" "}
                  <a
                    href="/register"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </CardFooter>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Home;
