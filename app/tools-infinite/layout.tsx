import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-full overflow-hidden">
      <Link
        className="flex items-center text-muted-foreground hover:underline cursor-pointer"
        href="/"
      >
        <ArrowLeft /> Home
      </Link>
      <div className="text-4xl font-semibold text-foreground h-20 flex items-center p-4 ">
        Tools
      </div>
      {children}
    </div>
  );
}
