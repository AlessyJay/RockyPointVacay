"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CreateRoomSchema } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { Plus } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { createRooms } from "@/lib/actions/rooms.action";

export default function NewRoom() {
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
      price: 0,
      freeWifi: false,
      parking: false,
      gym: false,
      pool: false,
      roomNumber: "",
    },
  });

  const onSubmit = async (value: z.infer<typeof CreateRoomSchema>) => {
    try {
      await createRooms();
      console.log(value);
    } catch (error) {
      console.log(error);
    }
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
                                    <Button onClick={(e) => e.preventDefault()}>
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
                                <SelectTrigger>Select a Country</SelectTrigger>
                                <SelectContent>
                                  <div>
                                    <Input placeholder="Search Country" />
                                  </div>
                                  <hr className="my-3 border-gray-300" />
                                  <SelectItem value="JP">Japan</SelectItem>
                                  <SelectItem value="US">
                                    United States
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
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <SelectTrigger>Select Location</SelectTrigger>
                                <SelectContent>
                                  <div>
                                    <Input placeholder="Search Location" />
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
                              <Input
                                placeholder="Set the price"
                                type="number"
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
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={formSchema.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Amenities</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Enter amenities (e.g. wifi, air conditioning, mini-bar)"
                              className="min-h-[100px] resize-none"
                              {...field}
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
