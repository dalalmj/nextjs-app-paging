"use client";

import { useCallback, useEffect, useState } from "react";
import { ToolCard, Tool } from "@/components/tool";

export function ToolList({
  items,
  total,

  getData,
  ...rest
}: {
  items: Tool[];
  total: number;
  page: number;
  getData: (page: number) => Promise<{ items: Tool[]; total: number }>;
}) {
  const [data, setData] = useState<Tool[]>(items);
  const [page, setPage] = useState(rest.page);
  const [loading, setLoading] = useState(false);
  const canGetNext = page < total - 1;
  // get next page
  const getNext = useCallback(async () => {
    if (!canGetNext || loading) return;
    const { items } = await getData(page + 1);
    setData((prev) => {
      // de-dupe
      const lastToolId = items?.length ? items[items?.length - 1]?.toolId : 0;
      if (prev[prev?.length - 1]?.toolId === lastToolId) return prev;
      return [...prev, ...items];
    });
    setPage(page + 1);
    setLoading(false);
  }, [canGetNext, getData, loading, page]);

  // when user scrolls, get next page if required
  const handleScroll = useCallback(
    (event: any) => {
      const elem = event.currentTarget;
      if (loading || !canGetNext) return;
      const viewportHeight = elem.clientHeight;
      const contentHeight = elem.scrollHeight;
      if (contentHeight - elem.scrollTop < 1.5 * viewportHeight) {
        if (canGetNext && !loading) {
          getNext();
        }
      }
    },
    [canGetNext, getNext, loading]
  );
  // eager load first 3 pages
  useEffect(() => {
    const pageSize = 10;
    if (data.length <= pageSize * 3 && canGetNext && !loading) {
      getNext();
    }
  }, [canGetNext, getNext, loading, page, data.length]);
  //
  return (
    <div className="flex flex-col gap-4 h-screen overflow-hidden">
      <div
        onScroll={handleScroll}
        className="flex flex-wrap gap-2 w-full overflow-y-auto p-6 "
      >
        {data.map((item, i) => (
          <ToolCard item={item} key={item.toolId} />
        ))}
      </div>
    </div>
  );
}
