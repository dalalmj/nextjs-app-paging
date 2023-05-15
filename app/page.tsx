import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" m-8 ">
      <h1 className="text-4xl font-bold pb-8">
        Next.js App Router Paging Three ways
      </h1>
      <Link
        href="/tools"
        className=" border rounded-md h-12 flex items-center px-2 hover:bg-muted"
      >
        1. Simple Paging
      </Link>
      <aside className="p-4">
        Example showing Simple Previous/Next paging using Link/href and query
        string
      </aside>
      <Link
        href="/tools-more"
        className=" border rounded-md h-12 flex items-center px-2 hover:bg-muted"
      >
        2. Load More Paging
      </Link>
      <aside className="p-4">
        Example showing Forward only Load more paging using Link/href and query
        string.
      </aside>
      <Link
        href="/tools-infinite"
        className=" border rounded-md h-12 flex items-center px-2 hover:bg-muted"
      >
        3. Infinite Scroll Paging
      </Link>
      <aside className="p-4">
        Example showing Infinite Scroll paging using Server Actions! Resize
        browser to be narrow and open DevTools to view scroll loading in action!
      </aside>
    </main>
  );
}
