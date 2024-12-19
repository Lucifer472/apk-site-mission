import { client } from "@/lib/rpc";
import { useMutation } from "@tanstack/react-query";

import { InferResponseType, InferRequestType } from "hono";

type ResponseType = InferResponseType<
  (typeof client)["api"]["admin"]["create"]["$post"]
>;
type RequestType = InferRequestType<
  (typeof client)["api"]["admin"]["create"]["$post"]
>;

export const useCreateApplication = () => {
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => {
      const response = await client["api"]["admin"]["create"]["$post"]({
        json,
      });

      return response.json();
    },
  });

  return mutation;
};
