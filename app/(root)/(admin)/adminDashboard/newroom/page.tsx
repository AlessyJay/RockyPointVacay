"use client";

import React, { useState, useEffect } from "react";
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
import { CreateRoomSchema, formUrlQuery, generateRandomId } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { createRooms } from "@/lib/actions/rooms.action";
import Tiptap from "@/components/shared/Tiptap/Tiptap";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
// import { CreateCatagory } from "@/lib/actions/catagory.action";

export default function NewRoom() {
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  // eslint-disable-next-line no-unused-vars
  const [countries, setCountries] = useState<any[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [cities, setCities] = useState<any[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string | undefined>(
    undefined,
  );
  const [searchTerm, setSearchterm] = useState<string>("");
  const [filteredCountries, setFilteredCountries] = useState<any[]>([]);
  const [isCreatingCategory, setIsCreatingCategory] = useState<boolean>(false);
  const [newCategory, setNewCategory] = useState<string>("");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const countryQuery = searchParams.get("country");

  const formSchema = useForm<z.infer<typeof CreateRoomSchema>>({
    resolver: zodResolver(CreateRoomSchema),
    defaultValues: isCreatingCategory
      ? {
          id: "",
          title: "",
          pictures: "",
          description: "",
          capacity: "",
          category: newCategory,
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
        }
      : {
          id: "",
          title: "",
          pictures: "",
          description: "",
          capacity: "",
          category: "",
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

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch("/api/country");
      const data = await res.json();
      const countryObjects = data.map((item: any) => ({
        iso2: item.iso2,
        name: item.name,
      }));

      setCountries(countryObjects);
      setFilteredCountries(countryObjects);
    };

    const fetchCities = async () => {
      if (countryQuery) {
        try {
          const res = await fetch(`/api/city?country=${countryQuery}`);

          if (!res.ok) throw new Error("Error fetching cities");

          const data = await res.json();
          setCities(data);
          setSelectedLocation(undefined);
        } catch (error) {
          console.error("Error fetching cities:", error);
          toast({
            title: "Error",
            description: "Failed to fetch cities. Please try again.",
          });
        }
      }
    };

    fetchCountries();
    fetchCities();

    // const debouncing = setTimeout(async () => {
    //   const newUrl = formUrlQuery({
    //     params: searchParams.toString(),
    //     key: "city",
    //     value:
    //   })
    // })
  }, [countryQuery]);

  const handleLocationChange = (value: string) => {
    setSelectedLocation(value);
  };

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
    setIsLoading(true);
    try {
      const randomId = generateRandomId();
      const pictureURLs = await Promise.all(
        selectedImages.map(async (image) => {
          const formData = new FormData();
          formData.append("image", image);

          console.log("FormData:", formData);

          const response = await fetch(`/api/upload`, {
            method: "POST",
            body: formData,
          });

          console.log("Response:", response);

          if (!response.ok) {
            throw new Error(`Failed to upload image: ${response.statusText}`);
          }

          const data = await response.json();
          console.log("Response Data:", data);

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
        category: values.category,
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
      router.push("/adminDashboard", { scroll: false });
    } catch (error) {
      console.log(error);
      toast({
        title: "Something went wrong!",
        description: "Your room was not successfully created.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onCreateCategory = async (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setIsCreatingCategory((prev) => !prev);
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
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Select Category</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select the category" />
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
                                  <div className="flex flex-col justify-center">
                                    {isCreatingCategory && (
                                      <Input
                                        value={newCategory}
                                        onChange={(e) =>
                                          setNewCategory(e.target.value)
                                        }
                                        placeholder="Deluxe suit, Standard room, etc..."
                                        className="mb-2"
                                      />
                                    )}
                                    <Button onClick={onCreateCategory}>
                                      {isCreatingCategory
                                        ? "Create"
                                        : "Create a category"}
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
                                onValueChange={(value) => {
                                  setSelectedCountry(value);
                                  formSchema.setValue("country", value);
                                  field.onChange(value);
                                }}
                                value={selectedCountry}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select Country" />
                                </SelectTrigger>
                                <SelectContent>
                                  <div>
                                    <Input
                                      placeholder="Search for Country"
                                      value={searchTerm}
                                      onChange={(e) => {
                                        setSearchterm(e.target.value);
                                      }}
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
                                disabled={!selectedCountry}
                                onValueChange={handleLocationChange}
                                value={selectedLocation}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select Location" />
                                </SelectTrigger>
                                <SelectContent>
                                  <div>
                                    <Input placeholder="Search for Location" />
                                  </div>
                                  <hr className="my-3 border-gray-300" />
                                  {cities.map((item) => (
                                    <SelectItem key={item.id} value={item.name}>
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
                    {isLoading ? (
                      <Button
                        disabled={isLoading}
                        className="group relative inline-flex h-12 w-full items-center px-6 font-medium text-neutral-200 disabled:pointer-events-none disabled:opacity-50"
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 size-5 animate-spin text-white"
                        >
                          <path
                            d="M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Creating...</span>
                      </Button>
                    ) : (
                      <Button type="submit" className="w-full">
                        Create Room
                      </Button>
                    )}
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
