import { useQueryState, parseAsString } from "nuqs";

export const useSearchApplication = () => {
  const [search, setSearch] = useQueryState(
    "search",
    parseAsString.withDefault("").withOptions({ clearOnDefault: true })
  );

  return { search, setSearch };
};
