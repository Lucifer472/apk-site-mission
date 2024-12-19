import { useRouter } from "next/navigation";

import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<
  (typeof client)["api"]["apps"][":applicationId"]["$post"]
>;

type RequestType = InferRequestType<
  (typeof client)["api"]["apps"][":applicationId"]["$post"]
>;

export const useUpdateApplication = () => {
  const router = useRouter();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ param }) => {
      const response = await client["api"]["apps"][":applicationId"]["$post"]({
        param,
      });

      return await response.json();
    },
    onSuccess: () => {
      router.refresh();
    },
  });

  return mutation;
};
