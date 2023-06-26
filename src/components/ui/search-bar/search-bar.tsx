"use client";

import { SearchIcon } from "./icons";

export type SearchBarProps = {};

export function SearchBar({}: SearchBarProps) {
  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const textElement = form.elements.namedItem("search") as HTMLInputElement;
    const searchValue = textElement.value;

    console.log({ searchValue });

    // onSubmit(searchValue);
  }

  return (
    <form aria-labelledby="search-label" onSubmit={submitForm}>
      <label
        htmlFor="search"
        aria-label="Search"
        id="search-label"
        className="flex items-center rounded-full bg-gray-dark p-3 text-white outline-brand focus-within:outline"
      >
        <span className="pr-4 text-gray-light">
          <SearchIcon />
        </span>
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search"
          className="w-full bg-transparent outline-none placeholder:text-gray-light"
        />
      </label>
    </form>
  );
}
