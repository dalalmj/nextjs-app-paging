import { Tool } from "./type";

export function ToolCard({ item }: { item: Tool }) {
  return (
    <div
      key={item.toolId}
      className="flex flex-row flex-nowrap gap-3 p-4 rounded-lg max-w-sm w-full bg-background border"
    >
      <div className=" text-2xl font-semibold border rounded-full w-12 h-12 flex justify-center items-center ">
        {item.tool_name.substring(0, 1)}
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-medium text-lg">{item.tool_name}</h1>
        <h2 className="text-base ">{item.manufacturer}</h2>
        <p className="text-sm text-muted-foreground ">{item.model}</p>
        <p className="text-sm text-muted-foreground ">{item.barcode}</p>
        <p className="text-sm text-muted-foreground ">
          {item.renderedDate?.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}
