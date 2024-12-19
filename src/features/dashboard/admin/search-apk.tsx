"use client";
import { useState } from "react";
import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useSearchApplication } from "./hooks/use-search";

export const SearchApplication = () => {
  const { search, setSearch } = useSearchApplication();
  const [value, setValue] = useState(search);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSearch(value);
      }}
      className="flex gap-x-2"
    >
      <Input
        className="w-full"
        placeholder="Search Here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <Button>
        <SearchIcon />
      </Button>
    </form>
  );
};
