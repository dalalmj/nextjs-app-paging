import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Tool, ToolCard } from "@/components/tool";

export function ToolList({
  items,
  total,
  page,
}: {
  items: Tool[];
  total: number;
  page: number;
}) {
  const canGetPrevious = page > 0;
  const canGetNext = page < total - 1;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2 w-full overflow-y-auto ">
        {items.map((item) => (
          <ToolCard item={item} key={item.toolId} />
        ))}
      </div>
      <div className="flex flex-row items-center gap-4">
        {canGetPrevious ? (
          <Link
            href={{
              pathname: "/tools",
              query: { page: page - 1 },
            }}
            className={cn(buttonVariants({ variant: "outline" }), " w-24")}
          >
            Previous
          </Link>
        ) : (
          <Button variant="outline" className="w-24" disabled>
            Previous
          </Button>
        )}
        <div className="w-24 text-center">Page {page + 1}</div>
        {canGetNext ? (
          <Link
            href={{
              pathname: "/tools",
              query: { page: page + 1 },
            }}
            className={cn(buttonVariants({ variant: "outline" }), " w-24")}
          >
            Next
          </Link>
        ) : (
          <Button variant="outline" className="w-24" disabled>
            Next
          </Button>
        )}
      </div>
    </div>
  );
}
