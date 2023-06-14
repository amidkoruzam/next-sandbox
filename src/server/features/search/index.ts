const getRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomFromArray = <T>(array: T[]) =>
  array[Math.floor(Math.random() * array.length)];

const flightCompanies = [
  {
    id: 1,
    name: "Fly Emirates",
  },
  {
    id: 2,
    name: "Turkish Airlines",
  },
  {
    id: 3,
    name: "Virgin",
  },
  {
    id: 4,
    name: "American Airlines",
  },
  {
    id: 5,
    name: "British Airways",
  },
];

export const search = ({ from, to }: { from: string; to: string }) => {
  const duration = getRandomNumber(60, 360);

  return Array.from({ length: getRandomNumber(5, 10) }).map((_, index) => ({
    id: index,
    from,
    to,
    duration,
    flightCompany: getRandomFromArray(flightCompanies),
  }));
};
