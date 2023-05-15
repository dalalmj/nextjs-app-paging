import { getData } from "./actions";

import { ToolList } from "./list";

export default async function ListPage({
  searchParams,
}: {
  searchParams: {
    page: string;
  };
}) {
  const page = +(searchParams?.page ?? 0);
  const { items, total } = await getData(page);
  return <ToolList items={items} page={page} total={total} />;
}
