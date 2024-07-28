/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QXPsuDQcL24
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
// import { Input } from "@/components/ui/input"

export default function ProfileComponent () {
    const [location, setLocation] = useState("Chicago, USA")
    const [personalSite, setPersonalSite] = useState("https://charles-patterson.me")
    const [twitter, setTwitter] = useState("https://charles-patterson.me")
    const [linkedin, setLinkedin] = useState("https://charles-patterson.me")
    return (
        <div className="max-w-5xl mx-auto p-4 mt-20">
            <div className="flex flex-col items-center">
                <img src="/images/profile-banner.png" alt="Banner" className="w-full h-48 object-cover rounded-lg" />
                <Avatar className="mt-[-40px] w-20 h-20">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>CP</AvatarFallback>
                </Avatar>
                <h2 className="mt-4 text-2xl font-semibold">Charles Patterson</h2>
                <p className="text-muted-foreground">UI / UX Designer</p>
                <Button className="mt-2">Message Charles</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="md:col-span-2">
                    <h3 className="text-xl font-semibold">About</h3>
                    <p className="mt-2">
                        Hi,
                        <br />
                        Hello! I'm [Your Name], a passionate and versatile professional with a knack for blending creativity and
                        technology to drive impactful results. With a background spanning leadership, design, development, and
                        marketing, I bring a unique perspective to every project I tackle.
                    </p>
                    <div className="mt-4">
                        <h4 className="font-semibold">Previously collaborated with</h4>
                        <div className="flex space-x-4 mt-2">
                            <Avatar>
                                <AvatarImage src="/placeholder-user.jpg" />
                                <AvatarFallback>CP</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarImage src="/placeholder-user.jpg" />
                                <AvatarFallback>DK</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h4 className="font-semibold">Languages</h4>
                        <div className="flex space-x-2 mt-2">
                            <Badge>English</Badge>
                            <Badge>German</Badge>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h4 className="font-semibold">Tech Stack</h4>
                        <div className="flex space-x-2 mt-2">
                            <Badge>Next JS</Badge>
                            <Badge>Figma</Badge>
                            <Badge>Adobe XD</Badge>
                            <Badge>Rive</Badge>
                            <Badge>Adobe Illustrator</Badge>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Location</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Input disabled value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter location" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Personal Site</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Input
                                disabled
                                value={personalSite}
                                onChange={(e) => setPersonalSite(e.target.value)}
                                placeholder="Enter personal site URL"
                            />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Twitter</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Input disabled value={twitter} onChange={(e) => setTwitter(e.target.value)} placeholder="Enter Twitter URL" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>LinkedIn</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Input disabled value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="Enter LinkedIn URL" />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}