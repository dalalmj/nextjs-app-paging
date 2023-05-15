"use server";

import data from "@/data/inventory.json";

const pageSize = 10;

export async function getData(page: number) {
  const renderedDate = new Date();
  return {
    items: data
      .slice(page * pageSize, page * pageSize + pageSize)
      .map((item) => ({ ...item, renderedDate })),
    total: data.length / pageSize,
  };
}
