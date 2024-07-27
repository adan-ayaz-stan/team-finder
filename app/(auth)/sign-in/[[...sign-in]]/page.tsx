import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex flex-col justify-center items-center gap-10" >
            <h2 className="font-bold mt-4">Sign into Team-Finder</h2>
            <SignIn />
        </div>
    )
}