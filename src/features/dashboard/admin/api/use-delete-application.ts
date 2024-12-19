import { toast } from "sonner";

import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { InferResponseType, InferRequestType } from "hono";

type ResponseType = InferResponseType<
  (typeof client)["api"]["admin"][":id"]["$delete"]
>;
type RequestType = InferRequestType<
  (typeof client)["api"]["admin"][":id"]["$delete"]
>;

export const useDeleteApplication = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ param }) => {
      const response = await client["api"]["admin"][":id"]["$delete"]({
        param,
      });

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["application"] });
      toast.success("App Deleted Successfully!");
    },
  });

  return mutation;
};
