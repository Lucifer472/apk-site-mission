import { parseAsBoolean, useQueryState } from "nuqs";

export const useNavbar = () => {
  const [isNavbar, setIsNavbar] = useQueryState(
    "navbar",
    parseAsBoolean.withDefault(false).withOptions({ clearOnDefault: true })
  );

  return { isNavbar, setIsNavbar };
};
