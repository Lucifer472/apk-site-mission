import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/rpc";

export const useCurrent = () => {
  const query = useQuery({
    queryKey: ["current"],
    queryFn: async () => {
      const response = await client["api"]["auth-client"]["user"]["$get"]();
      if (!response.ok) {
        return null;
      }

      const { success } = await response.json();
      return success;
    },
  });

  return query;
};
