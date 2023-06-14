type Props = {
  from: string;
  to: string;
  duration: number;
  flightCompanyName: string;
};

const roundToRemainderOf5 = (num: number) => num - (num % 5);

export const Ticket = ({ from, to, flightCompanyName, duration }: Props) => {
  const minutes = duration % 60;
  const hours = (duration - minutes) / 60;

  return (
    <div className="p-3 border border-gray-400">
      <div>
        <span>
          <span className="text-xs">From:</span> {from}
        </span>

        <span className="inline-block ml-4">
          <span className="text-xs">To:</span> {to}
        </span>
      </div>

      <div className="mt-3">
        <p>
          <span className="text-xs">Duration:</span> {hours}H{" "}
          {roundToRemainderOf5(minutes)}M
        </p>
        <p>
          <span className="text-xs">Company:</span> {flightCompanyName}
        </p>
      </div>
    </div>
  );
};
