"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReactSelect from "react-select";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  idea: z.string().min(2).max(200),
  location: z.string().min(2).max(50),
  roles: z.array(
    z.object({
      title: z.string().min(2).max(50),
      skills_required: z.array(z.string().min(2).max(50)),
    })
  ),
});

export default function CreateTeamForm() {
  const [options, setOptions] = useState([]);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      idea: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Create your team</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-8 my-12 md:pl-16 py-8 border-l-2 border-gray-500 max-w-xl">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team Name / Project Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Corvo" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="idea"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us why you're making a team..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your location to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Add Roles here */}
            <h2>Add Roles</h2>
            <div className="space-y-2 flex flex-row items-center gap-4 border-2 border-gray-400 p-3">
              {/*  */}
              <FormField
                control={form.control}
                name="roles.title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
