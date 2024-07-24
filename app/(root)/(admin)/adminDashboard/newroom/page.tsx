"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateRoomSchema } from "@/lib/utils";
import { z } from "zod";
import {
  InputForm,
  SelectForm,
  TextAreaForm,
} from "@/components/shared/InstantForm";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useForm<z.infer<typeof CreateRoomSchema>>({
    resolver: zodResolver(CreateRoomSchema),
    defaultValues: {
      id: "",
      title: "",
      pictures: "",
      description: "",
      capacity: "",
      location: "",
      country: "",
      category: "",
      bedroom: "",
      bed: "",
      bath: "",
      price: "",
      freeWifi: false,
      parking: false,
      gym: false,
      pool: false,
      roomNumber: "",
    },
  });

  const onSubmit = (values: z.infer<typeof CreateRoomSchema>) => {
    console.log("clicked!");
    console.log(values);
  };

  const Category = [
    { id: 1, name: "Honeymoon Suite", vault: "honeymoon" },
    { id: 2, name: "Deluxe Suite", vault: "deluxe" },
    { id: 3, name: "Family Suite", vault: "family" },
    { id: 4, name: "Standard Suite", vault: "standard" },
  ];
  return (
    <div className="mx-auto w-full max-w-4xl p-6 sm:p-8 md:p-10">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Create a New Room</h1>
          <p className="text-muted-foreground">
            Add a new room to your accommodation listing.
          </p>
        </div>
        <Card>
          <CardContent>
            <Form {...form}>
              <form
                className="grid gap-6"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <InputForm
                      control={form.control}
                      formName="title"
                      label="Room Name"
                      placeholder="Enter your room name..."
                    />
                  </div>
                  <div className="space-y-2">
                    <SelectForm
                      control={form.control}
                      formName="category"
                      label="Category"
                      content={Category}
                      placeholder="Select your room type..."
                      valueKey="id"
                      displayKey="name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <InputForm
                      control={form.control}
                      formName="bedroom"
                      placeholder="Enter number of bedrooms..."
                      label="Number of Bedrooms"
                    />
                  </div>
                  <div className="space-y-2">
                    <InputForm
                      control={form.control}
                      formName="bed"
                      placeholder="Enter number of beds..."
                      label="Number of Beds"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <InputForm
                      control={form.control}
                      formName="bath"
                      placeholder="Enter number of bathrooms..."
                      label="Number of Bathrooms"
                    />
                  </div>
                  <div className="space-y-2">
                    <InputForm
                      control={form.control}
                      formName="roomNumber"
                      placeholder="Enter room number..."
                      label="Room Number"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <InputForm
                      control={form.control}
                      formName="price"
                      label="Price"
                      placeholder="Price"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <TextAreaForm
                    control={form.control}
                    formName="description"
                    placeholder="Enter amenities (e.g. wifi, air conditioning, mini-bar)"
                    label="Amenities"
                  />
                </div>
                <div>
                  <Button type="submit" className="w-full">
                    Create Room
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
