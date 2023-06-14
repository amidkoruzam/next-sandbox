import { Container } from "@/shared/ui/container";
import { Search } from "./search";
import { search } from "@/server/features/search";
import { Ticket } from "./_components/ticket";

export default async function Home({
  searchParams,
}: {
  params: { slug: string };
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const from = searchParams?.from;
  const to = searchParams?.to;

  const tickets = await (typeof from === "string" && typeof to === "string"
    ? search({ from, to })
    : Promise.resolve([]));

  return (
    <Container className="pt-10 pb-10">
      <Search />

      <div className="grid gap-y-5 mt-5">
        {tickets.map(({ from, to, id, duration, flightCompany }) => (
          <Ticket
            key={id}
            from={from}
            to={to}
            duration={duration}
            flightCompanyName={flightCompany.name}
          />
        ))}
      </div>
    </Container>
  );
}
