import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitInquiry() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      email: string;
      message: string;
      kvaRequirement: number;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.submitInquiry(
        data.name,
        data.phone,
        data.email,
        data.message,
        BigInt(data.kvaRequirement),
      );
    },
  });
}
