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
import ReactSelect, { Options } from "react-select";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Delete } from "lucide-react";
import { Label } from "@/components/ui/label";

// Static Data
type Role = {
  title: string;
  value: string;
};

const roles: Role[] = [
  { title: "UI / UX Designer", value: "ui-ux-designer" },
  { title: "Frontend Developer", value: "frontend-developer" },
  { title: "Backend Developer", value: "backend-developer" },
  { title: "Fullstack Developer", value: "fullstack-developer" },
  { title: "Mobile Developer", value: "mobile-developer" },
  { title: "Data Scientist", value: "data-scientist" },
  { title: "Data Engineer", value: "data-engineer" },
  { title: "Data Architect", value: "data-architect" },
  { title: "DevOps Engineer", value: "devops-engineer" },
  { title: "Product Manager", value: "product-manager" },
  { title: "Product Designer", value: "product-designer" },
  { title: "Product Owner", value: "product-owner" },
  { title: "QA Engineer", value: "qa-engineer" },
  { title: "DevSecOps Engineer", value: "devsecops-engineer" },
  { title: "Security Analyst", value: "security-analyst" },
  // { title: "Cloud Architect", value: "cloud-architect" },
  // { title: "Cloud Engineer", value: "cloud-engineer" },
  // { title: "Cloud Security Engineer", value: "cloud-security-engineer" },
  // { title: "Cloud Security Analyst", value: "cloud-security-analyst" },
  // { title: "Cloud Security Consultant", value: "cloud-security-consultant" },
  // { title: "Cloud Security Architect", value: "cloud-security-architect" },
  // { title: "Cloud Security Auditor", value: "cloud-security-auditor" },
  // { title: "Cloud Security Manager", value: "cloud-security-manager" },
  // { title: "Cloud Security Specialist", value: "cloud-security-specialist" },
  // { title: "Cloud Security Expert", value: "cloud-security-expert" },
  // { title: "Cloud Security Associate", value: "cloud-security-associate" },
  // {
  //   title: "Cloud Security Professional",
  //   value: "cloud-security-professional",
  // },
];

const skillNames: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Bootstrap",
  "Material UI",
  "Figma",
  "Sketch",
  "Vue.js",
  "Nuxt.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Git",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "Python",
  "Django",
  "Flask",
  "Ruby",
  "Rails",
  "PHP",
  "Laravel",
  "Java",
  "Spring",
  "Spring Boot",
  "C++",
  "C#",
  "Data Analysis",
  "Data Visualization",
  "Data Science",
  "Data Engineering",
  "Data Management",
  "Data Governance",
  "Data Security",
  "Data Analytics",
  "Data Integration",
  "Data Mining",
  "Data Governance",
  "GraphQL",
  "Apollo",
  "Microservices",
  "RESTAPI",
  "Data Structure",
  "Algorithms",
  "Golang",
  "Rust",
  "Solidity",
  "Web 3",
  "Adobe XD",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Adobe After Effects",
  "Adobe Premiere",
  // List mobile dev skills
  "Android",
  "iOS",
  "Swift",
  "Kotlin",
  "Objective-C",
  "Cocoa",
  "Xcode",
  "Xamarin",
  "React Native",
  "Flutter",
  "Unity",
];

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const skills = skillNames.map((skill) => ({ label: skill, value: skill }));

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

  return (
    <div>
      <h1>Create your team</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-8 my-12 md:pl-16 py-8 border-l-2 border-gray-500">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="max-w-xl">
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
                <FormItem className="max-w-xl">
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
                <FormItem className="max-w-xl">
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
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Add Roles here */}
            <h2>Add Roles</h2>
            <div>
              {Array.from({ length: form.watch("roles")?.length ?? 0 }).map(
                (_, i) => (
                  <div key={i}>
                    <div className="space-y-2 w-fit flex flex-row items-center gap-4 p-2">
                      {/*  */}
                      <FormField
                        control={form.control}
                        name={`roles.${i}.title`}
                        render={({ field }) => (
                          <FormItem className="min-w-80">
                            <FormLabel>Role</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a role to display" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {roles.map((role) => (
                                  <SelectItem
                                    key={role.value}
                                    value={role.value}
                                  >
                                    {role.title}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`roles.${i}.skills_required`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Skills Required</FormLabel>
                            <ReactSelect
                              isMulti
                              name="roles.0.skills_required"
                              options={skills}
                              onChange={(newValue) => {
                                field.onChange(newValue.map((v) => v.label));
                              }}
                              className="lg:min-w-[50vw] w-full basic-multi-select"
                              classNamePrefix="select"
                            ></ReactSelect>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="space-y-2 flex flex-col gap-1">
                        <Label>Delete Role</Label>
                        <Button
                          onClick={() => {
                            const prevRoles = form.getValues("roles");
                            const newRoles = prevRoles?.filter(
                              (_, index) => index !== i
                            );

                            form.resetField("roles", {
                              defaultValue: newRoles,
                            });
                          }}
                          type="button"
                          variant="destructive"
                        >
                          <Delete />
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>

            <Button
              onClick={() => {
                const prevRoles = form.getValues("roles");
                console.log(prevRoles);

                if (!prevRoles) {
                  form.setValue("roles", [{}]);
                  return;
                }

                form.setValue("roles", [...prevRoles, {}]);
              }}
              type="button"
            >
              Add Role
            </Button>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
