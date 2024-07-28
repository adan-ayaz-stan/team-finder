'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between p-4 bg-gray-900">
        <div className="flex items-center">
          <div className="text-2xl font-bold">LOGO</div>
          <div className="relative ml-4">
            <Input type="search" placeholder="what are you looking for?" className="pl-10" />
            <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="flex items-center justify-center hover:bg-gray-700 text-black">
            Create your own team
          </Button>
          <Button variant="outline" className="flex items-center justify-center hover:bg-gray-700 text-black">
            Find a team
          </Button>
          <Avatar onClick={() => router.push("/profile")} className="w-10 h-10">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <main className="p-4">
        <section className="p-6 bg-blue-200 rounded-md">
          <h1 className="text-3xl font-bold">Welcome back, Ryan Ni</h1>
          <div className="flex justify-between mt-4">
            <Card className="w-1/2 mr-2" onClick={() => router.push("/update-profile")}>
              <CardHeader>
                <CardTitle>RECOMMENDED FOR YOU</CardTitle>
                <CardDescription>Get matched with a team</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Set up your profile and get noticed</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="flex items-center justify-center">
                  Update Profile
                </Button>
              </CardFooter>
            </Card>
            <Card className="w-1/2 ml-2" onClick={() => router.push("/create-profile")}>
              <CardHeader>
                <CardTitle>RECOMMENDED FOR YOU</CardTitle>
                <CardDescription>Get matched with a team</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Set up your profile and get noticed</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="flex items-center justify-center">
                  Create Profile
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Based on your profile</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-800 rounded-md p-4">
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="bg-gray-700 rounded-md p-4 group hover:bg-gray-600"
                  onClick={() => router.push("/profile/john-doe")}
                >
                  <h3 className="text-xl font-bold">Project Owner</h3>
                  <div className="flex items-center justify-between">
                    <h5 className="text-lg font-semibold">John Doe</h5>
                    <div className="flex items-center">
                      <Avatar className="w-10 h-10 mr-2">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge>Skill 1</Badge>
                    <Badge>Skill 2</Badge>
                    <Badge>Skill 3</Badge>
                  </div>
                </div>
                <div
                  className="bg-gray-700 rounded-md p-4 group hover:bg-gray-600"
                  onClick={() => router.push("/profile/jane-smith")}
                >
                  <h3 className="text-xl font-bold">Front End Developer</h3>
                  <div className="flex items-center justify-between">
                    <h5 className="text-lg font-semibold">Jane Smith</h5>
                    <div className="flex items-center">
                      <Avatar className="w-10 h-10 mr-2">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge>Skill 1</Badge>
                    <Badge>Skill 2</Badge>
                    <Badge>Skill 3</Badge>
                  </div>
                </div>
                <div
                  className="bg-gray-700 rounded-md p-4 group hover:bg-gray-600"
                  onClick={() => router.push("/profile/bob-johnson")}
                >
                  <h3 className="text-xl font-bold">Back End Developer</h3>
                  <div className="flex items-center justify-between">
                    <h5 className="text-lg font-semibold">Bob Johnson</h5>
                    <div className="flex items-center">
                      <Avatar className="w-10 h-10 mr-2">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>BJ</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge>Skill 1</Badge>
                    <Badge>Skill 2</Badge>
                    <Badge>Skill 3</Badge>
                  </div>
                </div>
                <div
                  className="bg-gray-700 rounded-md p-4 group hover:bg-gray-600"
                  onClick={() => router.push("/open-roles/designer")}
                >
                  <h3 className="text-xl font-bold">Open Role</h3>
                  <div className="flex items-center justify-between">
                    <h5 className="text-lg font-semibold">Designer</h5>
                    <Button variant="outline" className="flex items-center justify-center text-black">
                      Apply
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge>Skill 1</Badge>
                    <Badge>Skill 2</Badge>
                    <Badge>Skill 3</Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-md p-4">
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="bg-gray-700 rounded-md p-4 group hover:bg-gray-600"
                  onClick={() => router.push("/profile/john-doe")}
                >
                  <h3 className="text-xl font-bold">Project Owner</h3>
                  <div className="flex items-center justify-between">
                    <h5 className="text-lg font-semibold">John Doe</h5>
                    <div className="flex items-center">
                      <Avatar className="w-10 h-10 mr-2">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge>Skill 1</Badge>
                    <Badge>Skill 2</Badge>
                    <Badge>Skill 3</Badge>
                  </div>
                </div>
                <div
                  className="bg-gray-700 rounded-md p-4 group hover:bg-gray-600"
                  onClick={() => router.push("/profile/jane-smith")}
                >
                  <h3 className="text-xl font-bold">Front End Developer</h3>
                  <div className="flex items-center justify-between">
                    <h5 className="text-lg font-semibold">Jane Smith</h5>
                    <div className="flex items-center">
                      <Avatar className="w-10 h-10 mr-2">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge>Skill 1</Badge>
                    <Badge>Skill 2</Badge>
                    <Badge>Skill 3</Badge>
                  </div>
                </div>
                <div
                  className="bg-gray-700 rounded-md p-4 group hover:bg-gray-600"
                  onClick={() => router.push("/profile/bob-johnson")}
                >
                  <h3 className="text-xl font-bold">Back End Developer</h3>
                  <div className="flex items-center justify-between">
                    <h5 className="text-lg font-semibold">Bob Johnson</h5>
                    <div className="flex items-center">
                      <Avatar className="w-10 h-10 mr-2">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>BJ</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge>Skill 1</Badge>
                    <Badge>Skill 2</Badge>
                    <Badge>Skill 3</Badge>
                  </div>
                </div>
                <div
                  className="bg-gray-700 rounded-md p-4 group hover:bg-gray-600"
                  onClick={() => router.push("/open-roles/designer")}
                >
                  <h3 className="text-xl font-bold">Open Role</h3>
                  <div className="flex items-center justify-between">
                    <h5 className="text-lg font-semibold">Designer</h5>
                    <Button variant="outline" className="flex items-center justify-center text-black">
                      Apply
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge>Skill 1</Badge>
                    <Badge>Skill 2</Badge>
                    <Badge>Skill 3</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
