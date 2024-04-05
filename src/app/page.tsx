import { Button } from "@/components/ui/button";
import { api } from "../../convex/_generated/api";
import { SignInButton, SignOutButton, SignedIn, SignedOut, useSession } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";

export default function Home() {
  const files = useQuery(api.files.createFile);
  const createFile = useMutation(api.files.createFile);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <SignedIn>
      <SignOutButton>
        <Button>Sign Out</Button>
      </SignOutButton>  
    </SignedIn>
    <SignedOut>
    <SignOutButton>
    <SignInButton mode='modal' />
      <Button>Sign In</Button>
    </SignOutButton>
    </SignedOut>

    {files?.map((file) => {
      return <div key={file._id}>{file.name}</div>;
    })}
  
    <Button 
     onClick={() => {
      createFile({
        name: "hello world",
      });
    }}
    >
      Click Me
      </Button>
    </main>
  );
}
