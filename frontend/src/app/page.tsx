import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { signOut } from "@/lib/auth";
import Image from "next/image";

export default function Home() {
  const isRed = true
  return (
   <div className={cn("text-blue-400 text-4xl", isRed===true && "text" )}>
    smart agricult
    <Button onClick={ async ()=>{
      "use server"
       await signOut()
       }}>
      signout
    </Button>
   </div>
  );
}
