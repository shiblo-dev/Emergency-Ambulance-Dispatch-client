import { createHospital, getHospitals } from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useCreateHospital() {
  return useMutation({
    mutationFn: createHospital,
  });
}
export function useAllHospital() {
  return useQuery({
    queryKey: ["hospitals"],
    queryFn: getHospitals,
  });
}
