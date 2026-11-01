"use client";

import { useAllHospital } from "@/hooks/hospital.hook";

type Hospital = {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  totalBeds: number;
  availableBeds: number;
  latitude: number | null;
  longitude: number | null;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

const AllHospitals = () => {
  const { data, isLoading, isError, error } = useAllHospital();

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError) return <p className="p-6 text-red-600">Error: {error.message}</p>;


  const hospitals: Hospital[] = Array.isArray(data) ? data : data?.data ?? [];

  if (hospitals.length === 0) {
    return <p className="p-6">No hospitals found.</p>;
  }

  return (
    <div className="p-6"> 
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {hospitals.map((hospital) => {
          const hasBeds = hospital.availableBeds > 0;
          const occupancy =
            ((hospital.totalBeds - hospital.availableBeds) / hospital.totalBeds) * 100;

          return (
            <div
              key={hospital.id}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-gray-900">{hospital.name}</h3>
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                    hasBeds ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}
                >
                  {hasBeds ? "Beds Available" : "Full"}
                </span>
              </div>

              <p className="text-sm text-gray-600">{hospital.address}</p>
              <p className="mb-3 text-sm font-medium text-gray-700">{hospital.city}</p>

              <a
                href={`tel:${hospital.phone}`}
                className="text-sm text-blue-600 hover:underline"
              >
                {hospital.phone}
              </a>

              <div className="mt-4">
                <div className="mb-1 flex justify-between text-sm text-gray-700">
                  <span>Available Beds</span>
                  <span className="font-semibold">
                    {hospital.availableBeds} / {hospital.totalBeds}
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className={`h-2 rounded-full ${hasBeds ? "bg-green-500" : "bg-red-500"}`}
                    style={{ width: `${occupancy}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllHospitals;