import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BathIcon,
  CogIcon,
  FilePenIcon,
  Home,
  MenuIcon,
  PlusIcon,
  SparklesIcon,
  Dumbbell,
  Waves,
  TrashIcon,
  TvIcon,
  WifiIcon,
} from "lucide-react";
import Link from "next/link";

import React from "react";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-full flex-col justify-center">
        <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center border-b bg-background px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center justify-between gap-4">
            <h1 className="text-lg font-semibold tracking-tight">Rooms</h1>
            <Link
              href="/"
              className={`${buttonVariants({ variant: "default" })} gap-2`}
            >
              <Home />
              Home
            </Link>
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Rooms</h2>

            <Link
              href="/adminDashboard/newroom"
              className={`${buttonVariants({ variant: "default" })}`}
            >
              <PlusIcon className="mr-2 size-4" />
              Add New Room
            </Link>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Deluxe Suite</CardTitle>
                <CardDescription>Spacious and luxurious room</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Price:</span>
                    <span>$250 / night</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Capacity:</span>
                    <span>2 guests</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Amenities:</span>
                    <span>
                      <WifiIcon className="mr-1 size-4" />
                      <TvIcon className="mr-1 size-4" />
                      <BathIcon className="mr-1 size-4" />
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <Button size="sm" variant="outline">
                  <FilePenIcon className="mr-2 size-4" />
                  Edit
                </Button>
                <Button size="sm" variant="destructive" className="text-white">
                  <TrashIcon className="mr-2 size-4" />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
