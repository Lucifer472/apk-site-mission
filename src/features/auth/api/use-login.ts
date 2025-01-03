import { useRouter } from "next/navigation";

import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<
  (typeof client)["api"]["auth-client"]["login"]["$post"]
>;

type RequestType = InferRequestType<
  (typeof client)["api"]["auth-client"]["login"]["$post"]
>;

export const useLogin = () => {
  const router = useRouter();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => {
      const response = await client["api"]["auth-client"]["login"]["$post"]({
        json,
      });

      return await response.json();
    },
    onSuccess: () => {
      router.refresh();
    },
  });

  return mutation;
};
