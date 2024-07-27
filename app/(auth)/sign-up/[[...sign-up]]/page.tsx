import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex flex-col justify-center items-center gap-10" >
            <h2 className="font-bold mt-4">Sign up on Team-Finder</h2>
            <SignUp />
        </div>

    )
}