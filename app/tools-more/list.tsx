"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import { ToolCard, type Tool } from "@/components/tool";

export function ToolList({
  items,
  total,
  page,
}: {
  items: Tool[];
  total: number;
  page: number;
}) {
  const [data, setData] = useState<Tool[]>(items);
  const router = useRouter();

  // items accumulator
  useEffect(() => {
    setData((prev) => {
      const lastToolId = items?.length ? items[items?.length - 1]?.toolId : 0;
      if (prev[prev?.length - 1]?.toolId === lastToolId) return prev;
      return [...prev, ...items];
    });
  }, [items]);

  // reset page
  const reset = useCallback(() => {
    setData([]);
    router.replace(`/tools-more`);
    // router.refresh();
  }, [router]);

  // user manually triggered reload, we are going to reset
  useEffect(() => {
    if (
      data[0] === items[0] &&
      data.length < items.length + 10 * +(page || 0)
    ) {
      reset();
    }
  }, [data.length, items.length, page, reset, data, items]);
  //
  const canGetNext = page < total - 1;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2 w-full overflow-y-auto ">
        {data.map((item, i) => (
          <ToolCard item={item} key={item.toolId} />
        ))}
      </div>
      <div className="flex flex-row items-center gap-4">
        {canGetNext ? (
          <Link
            href={{
              pathname: "/tools-more",
              query: { page: page + 1 },
            }}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Load More
          </Link>
        ) : null}
      </div>
    </div>
  );
}
