import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { InferResponseType, InferRequestType } from "hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<
  (typeof client)["api"]["admin"]["edit"][":id"]["$patch"]
>;
type RequestType = InferRequestType<
  (typeof client)["api"]["admin"]["edit"][":id"]["$patch"]
>;

export const useUpdateApplication = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json, param }) => {
      const response = await client["api"]["admin"]["edit"][":id"]["$patch"]({
        json,
        param,
      });

      return response.json();
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["application"] });
      toast.success("App Updated Successfully");
    },
  });

  return mutation;
};
