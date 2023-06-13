import { search } from "@/server/features/search";

export async function POST(request: Request) {
  const body = await request.json();
  return search({ from: body.from, to: body.to });
}
