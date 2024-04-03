"use client";

import { Loader2, Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useTransition } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const defaultQuery = searchParams.get("query") || "";
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isSearching, startTransition] = useTransition();
  const router = useRouter();
  const [query, setQuery] = useState(defaultQuery);

  const search = () => {
    startTransition(() => {
      router.push(`/search?query=${query}`);
    });
  };
  return (
    <div className="relative w-full h-14 flex flex-col bg-white">
      <div className="relative h-14 z-10 rounded-md">
        <Input
          ref={inputRef}
          className="absolute inset-0 h-full"
          disabled={isSearching}
          onKeyDown={(e) => {
            if (e.key === "Enter" && query !== "") {
              search();
            }
            if (e.key === "Escape") {
              inputRef?.current?.blur();
            }
          }}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          className="absolute right-0 h-full inset-y-0 rounded-l-none hover:bg-transparent/70 focus-within:bg-transparent/70"
          disabled={isSearching}
          size={"sm"}
          onClick={search}
        >
          {isSearching ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <Search className="h-6 w-6" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
