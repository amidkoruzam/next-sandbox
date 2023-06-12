"use client";

export const Search = () => {
  return (
    <div className="flex justify-center">
      <div className="mr-5 grow">
        <label htmlFor="from" className="text-xs">
          From:
        </label>
        <div className="border border-gray-400 focus-within:border-sky-500">
          <input
            id="from"
            className="inline-block w-full focus-visible:outline-none px-2 py-2"
          />
        </div>
      </div>

      <div className="grow">
        <label htmlFor="to" className="text-xs">
          To:
        </label>
        <div className="border border-gray-400 focus-within:border-sky-500">
          <input
            id="to"
            className="inline-block w-full focus-visible:outline-none px-2 py-2"
          />
        </div>
      </div>
    </div>
  );
};
