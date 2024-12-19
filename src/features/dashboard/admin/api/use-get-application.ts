import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/rpc";

export const useGetApplication = (search: string) => {
  const query = useQuery({
    queryKey: ["application", search],
    queryFn: async () => {
      const response = await client["api"]["admin"][":search"]["$get"]({
        param: { search },
      });
      if (!response.ok) {
        return null;
      }

      const { data } = await response.json();
      return data;
    },
  });

  return query;
};
