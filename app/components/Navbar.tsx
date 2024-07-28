import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full py-2 px-8 md:px-16 flex flex-row items-center justify-between bg-black z-50">
      {/* Logo */}
      <h2 className="text-white">Logo</h2>

      {/* Login Button */}
      <Link href={"/sign-in"}>
        <Button variant="outline">Login</Button>
      </Link>
    </div>
  );
}
