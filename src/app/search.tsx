"use client";

import React, { ChangeEvent, FormEvent } from "react";

type Props = {
  fromDefaultValue?: string;
  toDefaultValue?: string;
};

export const Search = ({
  fromDefaultValue = "",
  toDefaultValue = "",
}: Props) => {
  const [from, setFrom] = React.useState(fromDefaultValue);
  const [to, setTo] = React.useState(toDefaultValue);

  const onFromChange = (evt: ChangeEvent<HTMLInputElement>) =>
    setFrom(evt.target.value);

  const onToChange = (evt: ChangeEvent<HTMLInputElement>) =>
    setTo(evt.target.value);

  const onSubmit = (evt: FormEvent) => {
    evt.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex justify-center">
        <div className="mr-5 grow">
          <label htmlFor="from" className="text-xs">
            From:
          </label>
          <div className="border border-gray-400 focus-within:border-sky-500">
            <input
              id="from"
              className="inline-block w-full focus-visible:outline-none px-2 py-2"
              onChange={onFromChange}
              value={from}
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
              onChange={onToChange}
              value={to}
            />
          </div>
        </div>
      </div>

      <div className="mt-2">
        <button
          className="border border-gray-400 py-2 px-4 hover:border-sky-400"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};
