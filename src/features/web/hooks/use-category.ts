import { parseAsBoolean, useQueryState } from "nuqs";

export const useCategory = () => {
  const [isCategory, setIsCategory] = useQueryState(
    "category",
    parseAsBoolean.withDefault(false).withOptions({ clearOnDefault: true })
  );

  return { isCategory, setIsCategory };
};

export const useGameCategory = () => {
  const [isGameCategory, setIsGameCategory] = useQueryState(
    "category-game",
    parseAsBoolean.withDefault(false).withOptions({ clearOnDefault: true })
  );

  return { isGameCategory, setIsGameCategory };
};
