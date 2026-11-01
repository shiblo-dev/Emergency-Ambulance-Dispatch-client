import { createHospital } from "@/api";
import { useMutation } from "@tanstack/react-query";

export function useCreateHospital() {
  return useMutation({
    mutationFn: createHospital,
  });
}