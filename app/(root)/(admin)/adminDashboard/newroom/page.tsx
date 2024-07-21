"use client";

import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  // CreateCatagorySchema,
  CreateRoomSchema,
  generateRandomId,
} from "@/lib/utils";
import { useForm } from "react-hook-form";
import { Plus, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { createRooms } from "@/lib/actions/rooms.action";
import Tiptap from "@/components/shared/Tiptap/Tiptap";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

export default function NewRoom() {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  // eslint-disable-next-line no-unused-vars
  const [countries, setCountries] = useState<any[]>([]);
  const [searchTerm, setSearchterm] = useState<string>("");
  const [filteredCountries, setFilteredCountries] = useState<any[]>([]);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const pathname = usePathname();
  const formSchema = useForm<z.infer<typeof CreateRoomSchema>>({
    resolver: zodResolver(CreateRoomSchema),
    defaultValues: {
      id: "",
      title: "",
      pictures: "",
      description: "",
      capacity: "",
      catagory: "",
      location: "",
      country: "",
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

  const getCountries = async () => {
    const res = await fetch("/api/country");
    return res.json();
  };

  useEffect(() => {
    getCountries().then((data: any[]) => {
      const countryObjects = data.map((item) => ({
        iso2: item.iso2,
        name: item.name,
      }));

      setCountries(countryObjects);

      const newFilteredCountries = countryObjects.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );

      setFilteredCountries(newFilteredCountries);
    });
  }, [searchTerm]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files);
      setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const removeImage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number,
  ) => {
    e.preventDefault();
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const onSubmit = async (values: z.infer<typeof CreateRoomSchema>) => {
    try {
      const randomId = generateRandomId();
      const pictureURLs = await Promise.all(
        selectedImages.map(async (image) => {
          const formData = new FormData();
          formData.append("image", image);

          const response = await fetch("https://api.imgbb.com/1/upload", {
            method: "POST",
            headers: {
              Authorization: `Client-ID ${process.env.IMGBB_API_KEY}`,
            },
            body: formData,
          });

          const data = await response.json();
          return data.data.url;
        }),
      );

      values.pictures = pictureURLs.join(",");

      await createRooms({
        id: randomId,
        title: values.title,
        picture: values.pictures || "",
        description: values.description || "",
        capacity: values.capacity || "",
        location: values.location,
        country: values.country,
        bedroom: values.bedroom,
        bed: values.bed,
        bath: values.bath,
        price: parseInt(values.price),
        freeWifi: values.freeWifi || false,
        parking: values.parking || false,
        gym: values.gym || false,
        pool: values.pool || false,
        roomNumber: values.roomNumber,
        path: pathname,
      });
      toast({
        title: "Room created successfully",
        description: "Your room was successfully created.",
      });
      setSelectedImages([]);
      router.push("/adminDashboard", { scroll: true });
    } catch (error) {
      console.log(error);
    }
  };

  const onCreateCatagory = async (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    e.preventDefault();
    console.log("Click!");
  };

  return (
    <Form {...formSchema}>
      <form onSubmit={formSchema.handleSubmit(onSubmit)}>
        <div className="mx-auto h-screen w-full max-w-4xl p-6 sm:p-8 md:p-10">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Create a New Room</h1>
              <p className="text-muted-foreground">
                Add a new room to your accommodation listing.
              </p>
            </div>
            <Card>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <FormField
                        control={formSchema.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Room Name</FormLabel>
                            <FormControl>
                              <Input
                                id="name"
                                placeholder="Enter room name"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={formSchema.control}
                        name="catagory"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Select Catagory</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select the catagory" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="deluxe">
                                    Deluxe Suite
                                  </SelectItem>
                                  <SelectItem value="standard">
                                    Standard Room
                                  </SelectItem>
                                  <SelectItem value="family">
                                    Family Suite
                                  </SelectItem>
                                  <SelectItem value="honeymoon">
                                    Honeymoon Suite
                                  </SelectItem>
                                  <hr className="mb-3 border-gray-300" />
                                  <div className="flex justify-center">
                                    <Button
                                      onClick={(e) => onCreateCatagory(e)}
                                    >
                                      <Plus className="mr-3" />
                                      Create a catagory
                                    </Button>
                                  </div>
                                </SelectContent>
                              </Select>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={formSchema.control}
                        name="capacity"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Capacity (people)</FormLabel>
                            <FormControl>
                              <Input placeholder="3 people" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={formSchema.control}
                        name="bed"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Number of Beds</FormLabel>
                            <FormControl>
                              <Input placeholder="0" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={formSchema.control}
                        name="bedroom"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Number of Bedrooms</FormLabel>
                            <FormControl>
                              <Input placeholder="2 bedrooms" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={formSchema.control}
                        name="bath"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Number of Bathrooms</FormLabel>
                            <FormControl>
                              <Input placeholder="2 bathrooms" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={formSchema.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select Country" />
                                </SelectTrigger>
                                <SelectContent>
                                  <div>
                                    <Input
                                      ref={searchInputRef}
                                      placeholder="Search for Country"
                                      value={searchTerm}
                                      onChange={(e) =>
                                        setSearchterm(e.target.value)
                                      }
                                      onFocus={(e) => e.target.blur()}
                                    />
                                  </div>
                                  <hr className="my-3 border-gray-300" />
                                  {filteredCountries.map((item: any) => (
                                    <SelectItem
                                      key={item.iso2}
                                      value={item.iso2}
                                      className="cursor-pointer"
                                    >
                                      {item.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={formSchema.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select Location" />
                                </SelectTrigger>
                                <SelectContent>
                                  <div>
                                    <Input placeholder="Search for Location" />
                                  </div>
                                  <hr className="my-3 border-gray-300" />
                                  <SelectItem value="tokyo">Tokyo</SelectItem>
                                  <SelectItem value="phoenix">
                                    Phoenix
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={formSchema.control}
                        name="price"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Set Price</FormLabel>
                            <FormControl>
                              <Input placeholder="Set the price" {...field} />
                            </FormControl>
                            <FormMessage></FormMessage>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={formSchema.control}
                        name="roomNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Room Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Set the number of the room"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-5 text-center">
                      <FormField
                        control={formSchema.control}
                        name="freeWifi"
                        render={({ field }) => (
                          <FormItem className="space-x-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className=""
                              />
                            </FormControl>
                            <FormLabel>Free WiFi</FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={formSchema.control}
                        name="parking"
                        render={({ field }) => (
                          <FormItem className="space-x-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel>Parking</FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={formSchema.control}
                        name="gym"
                        render={({ field }) => (
                          <FormItem className="space-x-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel>Gym</FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={formSchema.control}
                        name="pool"
                        render={({ field }) => (
                          <FormItem className="space-x-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel>Pool</FormLabel>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={formSchema.control}
                        name="pictures"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Upload Pictures</FormLabel>
                            <FormControl>
                              <div className="flex items-center space-x-2">
                                {selectedImages.length > 0 ? ( // Render if there are images selected
                                  <>
                                    {selectedImages
                                      .slice(0, 2)
                                      .map((image, index) => (
                                        <div
                                          key={index}
                                          className="relative size-16 overflow-hidden rounded-md"
                                        >
                                          <Image
                                            src={URL.createObjectURL(image)}
                                            alt="Selected Image"
                                            fill
                                            className="object-cover"
                                          />
                                          <Button
                                            onClick={(e) =>
                                              removeImage(e, index)
                                            }
                                            className="absolute right-1 top-1 rounded-full bg-red-500 p-1 text-white hover:bg-red-700"
                                          >
                                            <X size={12} />
                                          </Button>
                                        </div>
                                      ))}

                                    {selectedImages.length > 2 && ( // Render badge only if more than 3
                                      <div className="relative flex size-16 items-center justify-center rounded-md bg-gray-200">
                                        <span className="font-semibold text-gray-600">
                                          +{selectedImages.length - 2}
                                        </span>
                                      </div>
                                    )}
                                  </>
                                ) : (
                                  <div className="relative flex size-16 items-center justify-center rounded-md bg-gray-200 text-gray-400">
                                    <span className="font-semibold text-gray-600">
                                      +0
                                    </span>
                                  </div> // Placeholder if no images are selected
                                )}

                                <Input
                                  type="file"
                                  multiple
                                  onChange={handleImageChange}
                                  className="hidden"
                                  id="image-upload"
                                />
                                <Label
                                  htmlFor="image-upload"
                                  className="cursor-pointer rounded-md bg-primary px-4 py-2 text-white"
                                >
                                  Select Images
                                </Label>
                              </div>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={formSchema.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Amenities</FormLabel>
                          <FormControl>
                            <Tiptap
                              content={field.value}
                              onChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <Button type="submit" className="w-full">
                      Create Room
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </Form>
  );
}
