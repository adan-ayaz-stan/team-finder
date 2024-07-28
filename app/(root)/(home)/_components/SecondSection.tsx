import { Button } from "@/components/ui/button";
import { UsersRound } from "lucide-react";

const data = [
  {
    icon: <UsersRound className="w-10 h-10" />,
    content: "Create Teams",
  },
  {
    icon: <UsersRound className="w-10 h-10" />,
    content: "Join Teams",
  },
  {
    icon: <UsersRound className="w-10 h-10" />,
    content: "Explore Projects",
  },
  {
    icon: <UsersRound className="w-10 h-10" />,
    content: "Meet new people",
  },
];
export default function SecondSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      {/*  */}
      <h1 className="lg:w-2/3 font-medium text-center">
        The Simple Tool That Helps Connecting Technial People
      </h1>
      <p className="text-center text-muted-foreground">
        A platform delivering dynamic & personalized team matchup experience.
      </p>

      {/*  */}
      <div className="my-4 grid grid-cols-4 auto-rows-fr gap-16 max-w-4xl w-full">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-4 bg-gray-200 p-4 py-8 rounded-md"
          >
            {item.icon}
            <p className="text-center">{item.content}</p>
          </div>
        ))}
      </div>

      <Button className="mx-auto my-8">Get Started</Button>

      <hr className="h-0.5 bg-black w-full mx-auto max-w-7xl px-8 mt-16" />
    </div>
  );
}
