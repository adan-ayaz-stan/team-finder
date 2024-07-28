import { Button } from "@/components/ui/button";
import { Atom, UsersRound, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "Find your kind of passion",
    description:
      "All passion, all drive. People just like you looking forward to building something cool.",
    icon: <Atom className="h-10 w-10" />,
  },
  {
    title: "Lead or Build",
    description:
      "Create your own team and lead them to a product goal. Or be the starteammate of someone else’s journey.",
    icon: <UsersRound className="h-10 w-10" />,
  },
  {
    title: "Excel yourself",
    description:
      "Bring your skills to spotlight and showcase them to your team through excellence.",
    icon: <Zap className="h-10 w-10" />,
  },
];

export default function HeroSection() {
  return (
    <div className="min-h-screen relative flex flex-col justify-between pt-12 lg:pt-32">
      <div className="h-full grid grid-cols-1 lg:grid-cols-2 auto-rows-fr lg:px-20 md:px-12 sm:px-4 px-2">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-5xl">
            Discover the joy of
            <br /> finding your teammates <br />
            <span className="text-blue-400 font-bold rounded-xl">
              effortlessly{" "}
            </span>
            for a <br />{" "}
            <span className="text-red-600 font-bold rounded-xl">hackathon</span>{" "}
            or your <br />
            <span className="text-green-600 font-bold rounded-xl">
              personal idea
            </span>
            .
          </h1>
          <p className="text-sm text-muted-foreground">
            Redefining hacker marathon team ups, on and off the ground. Create
            teams or find your team. Set up your profile and set yourself up for
            a project.
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 100%);",
            }}
          />

          <Image
            src="/images/hero-image.png"
            alt="Polka Dot SVG"
            className="h-[400px] w-[400px] lg:h-[500px] lg:w-[500px] object-cover"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-[1px] pt-[1px] bg-gray-300 border-b-[1px] border-gray-300">
        <div className="flex items-center justify-center bg-white rounded-tr-md">
          <Link href={"/sign-in"}>
            <Button className="rounded-md">Get Started</Button>
          </Link>
        </div>
        {data.map((ele) => (
          <div
            key={ele.title} // Using a unique key prop for each element
            className="grid grid-cols-6 auto-rows-fr px-4 py-12 gap-4 bg-white last:rounded-tl-md last:rounded-tr-none rounded-t-md"
          >
            <div className="col-span-1 flex items-center justify-center">
              {ele.icon}
            </div>
            <div className="col-span-5">
              <h3 className="font-bold uppercase">{ele.title}</h3>
              <p className="text-sm text-muted-foreground">{ele.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
