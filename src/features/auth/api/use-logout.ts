import { useRouter } from "next/navigation";

import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<
  (typeof client)["api"]["auth-client"]["logout"]["$get"]
>;

type RequestType = InferRequestType<
  (typeof client)["api"]["auth-client"]["logout"]["$get"]
>;

export const useLogout = () => {
  const router = useRouter();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async () => {
      const response = await client["api"]["auth-client"]["logout"]["$get"]();

      return await response.json();
    },
    onSuccess: () => {
      router.refresh();
    },
  });

  return mutation;
};
