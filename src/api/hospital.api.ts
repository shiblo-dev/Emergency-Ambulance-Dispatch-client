import apiClient from "@/lib/apiClient";
import { HospitalFormValues } from "@/types/hospital.type";

export function createHospital(payload: HospitalFormValues) {
  return apiClient("/hospitals", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}
export function getHospitals() {
  return apiClient("/hospitals", {
    method: "GET",
  });
}