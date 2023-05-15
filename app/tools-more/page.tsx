import { ToolList } from "./list";
import { getData } from "../tools/actions";

export default async function ListPage({
  searchParams,
}: {
  searchParams: {
    page: string;
  };
}) {
  const page = +(searchParams?.page ?? 0);
  const { items, total } = await getData(page);
  return <ToolList items={items} total={total} page={page} />;
}
