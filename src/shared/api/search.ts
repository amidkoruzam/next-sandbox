export const search = ({ from, to }: { from: string; to: string }) =>
  fetch("/api/search", {
    method: "POST",
    body: JSON.stringify({
      from,
      to,
    }),
  });
