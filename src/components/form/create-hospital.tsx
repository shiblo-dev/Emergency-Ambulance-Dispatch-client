// "use client";

// import { useCreateHospital } from "@/hooks/hospital.hook";
//  import { hospitalZodSchema } from "@/validation/hospital.validation";
// import { useForm } from "@tanstack/react-form";
// import { toast } from "../ui/toast";
// import { useRouter } from "next/navigation";
//  import { HospitalPayload } from "@/types/hospital.type";

// import { Home, MapPin, Stethoscope, User } from "lucide-react";
// import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
// import { Input } from "../ui/input";

// const CreateHospital = () => {
//   const router = useRouter();
//   const { mutate: create, isPending: createPending } = useCreateHospital();
//   const form = useForm({
//     defaultValues: {
//       name: "",
//       address: "",
//       city: "",
//       latitude: undefined,
//       longitude: undefined,
//       phone: "",
//       totalBeds: 0,
//       availableBeds: 0,
//     },

//     validators: {
//       onSubmit: hospitalZodSchema,
//     },

//     onSubmit: async ({ value }) => {
//       const hospitalData: HospitalPayload = {
//         name: value.name.trim(),
//         address: value.address.trim(),
//         city: value.city.trim(),
//         latitude: value.latitude,
//         longitude: value.longitude,
//         phone: value.phone.trim(),
//         totalBeds: Number(value.totalBeds),
//         availableBeds: Number(value.availableBeds),
//       };

//       create(hospitalData, {
//         onSuccess: (res) => {
//           if (!res.success) {
//             toast.add({
//               title: "Server Failure",
//               description: "Something went wrong. Please try again",
//               type: "error",
//             });
//             return;
//           }

//           toast.add({
//             title: "Hospital Created",
//             description: "Hospital has been created successfully",
//             type: "success",
//           });
//           router.push("/hospitals");
//         },
//       });
//     },
//   });
//   return  (

//      <div className="flex flex-col gap-6 ">
//       <div className="flex flex-col gap-2 text-center">
//         <h1 className="text-2xl font-bold tracking-tight">
//           create a new hospital
//         </h1>
//       </div>

//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           e.stopPropagation();
//           form.handleSubmit();
//         }}
//         noValidate
//       >
//         <FieldGroup>
//           <div className="grid gap-5 sm:grid-cols-2">
//             <form.Field name="name">
//               {(field) => {
//                 const isInvalid =
//                   field.state.meta.isTouched && !field.state.meta.isValid;
//                 return (
//                   <Field data-invalid={isInvalid}>
//                     <FieldLabel htmlFor={field.name}>Full name</FieldLabel>
//                     <div className="relative">
//                       <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
//                       <Input
//                         id={field.name}
//                         name={field.name}
//                         type="text"
//                         placeholder="Dr. John Doe"
//                         value={field.state.value}
//                         onBlur={field.handleBlur}
//                         onChange={(e) => field.handleChange(e.target.value)}
//                         aria-invalid={isInvalid}
//                         className="pl-9"
//                         autoComplete="name"
//                       />
//                     </div>
//                     {isInvalid && (
//                       <FieldError errors={field.state.meta.errors} />
//                     )}
//                   </Field>
//                 );
//               }}
//             </form.Field>

//              <form.Field name="address">
//               {(field) => {
//                 const isInvalid =
//                   field.state.meta.isTouched && !field.state.meta.isValid;
//                 return (
//                   <Field data-invalid={isInvalid}>
//                     <FieldLabel htmlFor={field.name}>
//                       Practice address{" "}
//                       <span className="font-normal text-muted-foreground">
//                         (optional)
//                       </span>
//                     </FieldLabel>
//                     <div className="relative">
//                       <MapPin className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
//                       <Input
//                         id={field.name}
//                         name={field.name}
//                         type="text"
//                         placeholder="Chamber or hospital address"
//                         value={field.state.value}
//                         onBlur={field.handleBlur}
//                         onChange={(e) => field.handleChange(e.target.value)}
//                         aria-invalid={isInvalid}
//                         className="pl-9"
//                         autoComplete="street-address"
//                       />
//                     </div>
//                     {isInvalid && (
//                       <FieldError errors={field.state.meta.errors} />
//                     )}
//                   </Field>
//                 );
//               }}
//             </form.Field>
//              <form.Field name="city">
//               {(field) => {
//                 const isInvalid =
//                   field.state.meta.isTouched && !field.state.meta.isValid;
//                 return (
//                   <Field data-invalid={isInvalid}>
//                     <FieldLabel htmlFor={field.name}>
//                       Practice address{" "}
//                       <span className="font-normal text-muted-foreground">
//                         (optional)
//                       </span>
//                     </FieldLabel>
//                     <div className="relative">
//                       <MapPin className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
//                       <Input
//                         id={field.name}
//                         name={field.name}
//                         type="text"
//                         placeholder="Chamber or hospital address"
//                         value={field.state.value}
//                         onBlur={field.handleBlur}
//                         onChange={(e) => field.handleChange(e.target.value)}
//                         aria-invalid={isInvalid}
//                         className="pl-9"
//                         autoComplete="street-address"
//                       />
//                     </div>
//                     {isInvalid && (
//                       <FieldError errors={field.state.meta.errors} />
//                     )}
//                   </Field>
//                 );
//               }}
//             </form.Field>

//             <form.Field name="latitude">
//               {(field) => {
//                 const isInvalid =
//                   field.state.meta.isTouched && !field.state.meta.isValid;
//                 return (
//                   <Field data-invalid={isInvalid}>
//                     <FieldLabel htmlFor={field.name}>Contact number</FieldLabel>
//                     <div className="relative">
//                       <Phone className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
//                       <Input
//                         id={field.name}
//                         name={field.name}
//                         type="tel"
//                         placeholder="+880 1712 345678"
//                         value={field.state.value}
//                         onBlur={field.handleBlur}
//                         onChange={(e) => field.handleChange(e.target.value)}
//                         aria-invalid={isInvalid}
//                         className="pl-9"
//                         autoComplete="tel"
//                       />
//                     </div>
//                     {isInvalid && (
//                       <FieldError errors={field.state.meta.errors} />
//                     )}
//                   </Field>
//                 );
//               }}
//             </form.Field>
//             <form.Field name="longitude">
//               {(field) => {
//                 const isInvalid =
//                   field.state.meta.isTouched && !field.state.meta.isValid;
//                 return (
//                   <Field data-invalid={isInvalid}>
//                     <FieldLabel htmlFor={field.name}>Contact number</FieldLabel>
//                     <div className="relative">
//                       <Phone className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
//                       <Input
//                         id={field.name}
//                         name={field.name}
//                         type="tel"
//                         placeholder="+880 1712 345678"
//                         value={field.state.value}
//                         onBlur={field.handleBlur}
//                         onChange={(e) => field.handleChange(e.target.value)}
//                         aria-invalid={isInvalid}
//                         className="pl-9"
//                         autoComplete="tel"
//                       />
//                     </div>
//                     {isInvalid && (
//                       <FieldError errors={field.state.meta.errors} />
//                     )}
//                   </Field>
//                 );
//               }}
//             </form.Field>
//             <form.Field name="totalBeds">
//               {(field) => {
//                 const isInvalid =
//                   field.state.meta.isTouched && !field.state.meta.isValid;
//                 return (
//                   <Field data-invalid={isInvalid}>
//                     <FieldLabel htmlFor={field.name}>Contact number</FieldLabel>
//                     <div className="relative">
//                       <Phone className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
//                       <Input
//                         id={field.name}
//                         name={field.name}
//                         type="tel"
//                         placeholder="+880 1712 345678"
//                         value={field.state.value}
//                         onBlur={field.handleBlur}
//                         onChange={(e) => field.handleChange(e.target.value)}
//                         aria-invalid={isInvalid}
//                         className="pl-9"
//                         autoComplete="tel"
//                       />
//                     </div>
//                     {isInvalid && (
//                       <FieldError errors={field.state.meta.errors} />
//                     )}
//                   </Field>
//                 );
//               }}
//             </form.Field>
//             <form.Field name="availableBeds">
//               {(field) => {
//                 const isInvalid =
//                   field.state.meta.isTouched && !field.state.meta.isValid;
//                 return (
//                   <Field data-invalid={isInvalid}>
//                     <FieldLabel htmlFor={field.name}>Contact number</FieldLabel>
//                     <div className="relative">
//                       <Phone className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
//                       <Input
//                         id={field.name}
//                         name={field.name}
//                         type="tel"
//                         placeholder="+880 1712 345678"
//                         value={field.state.value}
//                         onBlur={field.handleBlur}
//                         onChange={(e) => field.handleChange(e.target.value)}
//                         aria-invalid={isInvalid}
//                         className="pl-9"
//                         autoComplete="tel"
//                       />
//                     </div>
//                     {isInvalid && (
//                       <FieldError errors={field.state.meta.errors} />
//                     )}
//                   </Field>
//                 );
//               }}
//             </form.Field>

//           </div>
// {/*
//           <div className="grid gap-5 sm:grid-cols-2">
//             <form.Field name="specialization">
//               {(field) => {
//                 const isInvalid =
//                   field.state.meta.isTouched && !field.state.meta.isValid;
//                 return (
//                   <Field data-invalid={isInvalid}>
//                     <FieldLabel htmlFor={field.name}>Specialization</FieldLabel>
//                     <div className="relative">
//                       <Stethoscope className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
//                       <Input
//                         id={field.name}
//                         name={field.name}
//                         type="text"
//                         placeholder="Cardiology"
//                         value={field.state.value}
//                         onBlur={field.handleBlur}
//                         onChange={(e) => field.handleChange(e.target.value)}
//                         aria-invalid={isInvalid}
//                         className="pl-9"
//                       />
//                     </div>
//                     {isInvalid && (
//                       <FieldError errors={field.state.meta.errors} />
//                     )}
//                   </Field>
//                 );
//               }}
//             </form.Field>

//             <form.Field name="licenseNumber">
//               {(field) => {
//                 const isInvalid =
//                   field.state.meta.isTouched && !field.state.meta.isValid;
//                 return (
//                   <Field data-invalid={isInvalid}>
//                     <FieldLabel htmlFor={field.name}>
//                       BMDC registration number
//                     </FieldLabel>
//                     <div className="relative">
//                       <BadgeCheck className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
//                       <Input
//                         id={field.name}
//                         name={field.name}
//                         type="text"
//                         placeholder="A-12345"
//                         value={field.state.value}
//                         onBlur={field.handleBlur}
//                         onChange={(e) => field.handleChange(e.target.value)}
//                         aria-invalid={isInvalid}
//                         className="pl-9"
//                       />
//                     </div>
//                     {isInvalid && (
//                       <FieldError errors={field.state.meta.errors} />
//                     )}
//                   </Field>
//                 );
//               }}
//             </form.Field>

//             <form.Field name="qualifications">
//               {(field) => {
//                 const isInvalid =
//                   field.state.meta.isTouched && !field.state.meta.isValid;
//                 return (
//                   <Field data-invalid={isInvalid}>
//                     <FieldLabel htmlFor={field.name}>Qualifications</FieldLabel>
//                     <div className="relative">
//                       <GraduationCap className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
//                       <Input
//                         id={field.name}
//                         name={field.name}
//                         type="text"
//                         placeholder="MBBS, FCPS (Medicine)"
//                         value={field.state.value}
//                         onBlur={field.handleBlur}
//                         onChange={(e) => field.handleChange(e.target.value)}
//                         aria-invalid={isInvalid}
//                         className="pl-9"
//                       />
//                     </div>
//                     {isInvalid && (
//                       <FieldError errors={field.state.meta.errors} />
//                     )}
//                   </Field>
//                 );
//               }}
//             </form.Field>

//             <form.Field name="experienceYears">
//               {(field) => {
//                 const isInvalid =
//                   field.state.meta.isTouched && !field.state.meta.isValid;
//                 return (
//                   <Field data-invalid={isInvalid}>
//                     <FieldLabel htmlFor={field.name}>
//                       Years of experience
//                     </FieldLabel>
//                     <div className="relative">
//                       <BriefcaseMedical className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
//                       <Input
//                         id={field.name}
//                         name={field.name}
//                         type="number"
//                         min={0}
//                         max={70}
//                         inputMode="numeric"
//                         placeholder="10"
//                         value={field.state.value}
//                         onBlur={field.handleBlur}
//                         onChange={(e) => field.handleChange(e.target.value)}
//                         aria-invalid={isInvalid}
//                         className="pl-9"
//                       />
//                     </div>
//                     {isInvalid && (
//                       <FieldError errors={field.state.meta.errors} />
//                     )}
//                   </Field>
//                 );
//               }}
//             </form.Field>
//           </div>

//           <div className="grid gap-5 sm:grid-cols-2">
//             <form.Field name="consultationFee">
//               {(field) => {
//                 const isInvalid =
//                   field.state.meta.isTouched && !field.state.meta.isValid;
//                 return (
//                   <Field data-invalid={isInvalid}>
//                     <FieldLabel htmlFor={field.name}>
//                       Consultation fee (BDT){" "}
//                       <span className="font-normal text-muted-foreground">
//                         (optional)
//                       </span>
//                     </FieldLabel>
//                     <div className="relative">
//                       <Banknote className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
//                       <Input
//                         id={field.name}
//                         name={field.name}
//                         type="number"
//                         min={0}
//                         step="0.01"
//                         inputMode="decimal"
//                         placeholder="1000"
//                         value={field.state.value}
//                         onBlur={field.handleBlur}
//                         onChange={(e) => field.handleChange(e.target.value)}
//                         aria-invalid={isInvalid}
//                         className="pl-9"
//                       />
//                     </div>
//                     {isInvalid && (
//                       <FieldError errors={field.state.meta.errors} />
//                     )}
//                   </Field>
//                 );
//               }}
//             </form.Field>
//           </div> */}

//         </FieldGroup>
//         <div className="flex justify-end w-full mt-5">
//           <Button disabled={applyPending} type="submit">
//             {applyPending ? (
//               <>
//                 <Spinner /> submitting
//               </>
//             ) : (
//               "Submit"
//             )}
//           </Button>
//         </div>
//       </form>

//     </div>
//   );
// };

// export default CreateHospital;
"use client";

import { useCreateHospital } from "@/hooks/hospital.hook";
import { hospitalZodSchema } from "@/validation/hospital.validation";
import { useForm } from "@tanstack/react-form";
import { toast } from "../ui/toast";
import { useRouter } from "next/navigation";

import {
  BedDouble,
  Building2,
  Compass,
  Landmark,
  MapPin,
  Phone,
} from "lucide-react";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { HospitalFormValues } from "@/types/hospital.type";

const CreateHospital = () => {
  const router = useRouter();
  const { mutate: create, isPending: createPending } = useCreateHospital();
const defaultValues: HospitalFormValues = {
  name: "",
  address: "",
  city: "",
  phone: "",
  totalBeds: 0,
  availableBeds: 0,
};

  const form = useForm({
    defaultValues,

  validators: {
    onSubmit: hospitalZodSchema,
  },

    onSubmit: async ({ value }) => {
         console.log("submit reached:", value);
      const hospitalData: HospitalFormValues = {
        name: value.name.trim(),
        address: value.address.trim(),
        city: value.city.trim(),
        latitude: value.latitude,
        longitude: value.longitude,
        phone: value.phone.trim(),
        totalBeds: Number(value.totalBeds),
        availableBeds: Number(value.availableBeds),
      };

      create(hospitalData, {

        onSuccess: (res) => {
             console.log("create response:", res);
          if (!res.success) {
             console.log("create response:", res);
            toast.add({
              title: "Server Failure",
              description: "Something went wrong. Please try again",
              type: "error",
            });
            return;
          }

          toast.add({
            title: "Hospital Created",
            description: "Hospital has been created successfully",
            type: "success",
          });
          router.push("/");

        },
      });

    },
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">
          Create a new hospital
        </h1>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        noValidate
      >
        <FieldGroup>
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Name */}
            <form.Field name="name">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Hospital name</FieldLabel>
                    <div className="relative">
                      <Building2 className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id={field.name}
                        name={field.name}
                        type="text"
                        placeholder="Dhaka Medical College Hospital"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        className="pl-9"
                      />
                    </div>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            {/* Phone */}
            <form.Field name="phone">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Contact number</FieldLabel>
                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id={field.name}
                        name={field.name}
                        type="tel"
                        placeholder="+880 1712 345678"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        className="pl-9"
                        autoComplete="tel"
                      />
                    </div>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            {/* Address */}
            <form.Field name="address">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Address</FieldLabel>
                    <div className="relative">
                      <MapPin className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id={field.name}
                        name={field.name}
                        type="text"
                        placeholder="Shahbag, Dhaka"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        className="pl-9"
                        autoComplete="street-address"
                      />
                    </div>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            {/* City */}
            <form.Field name="city">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>City</FieldLabel>
                    <div className="relative">
                      <Landmark className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id={field.name}
                        name={field.name}
                        type="text"
                        placeholder="Dhaka"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        className="pl-9"
                        autoComplete="address-level2"
                      />
                    </div>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            {/* Latitude (optional) */}
            <form.Field name="latitude">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>
                      Latitude{" "}
                      <span className="font-normal text-muted-foreground">
                        (optional)
                      </span>
                    </FieldLabel>
                    <div className="relative">
                      <Compass className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id={field.name}
                        name={field.name}
                        type="number"
                        step="any"
                        inputMode="decimal"
                        placeholder="23.7261"
                        value={field.state.value ?? ""}
                        onBlur={field.handleBlur}
                        onChange={(e) =>
                          field.handleChange(
                            e.target.value === ""
                              ? undefined
                              : Number(e.target.value),
                          )
                        }
                        aria-invalid={isInvalid}
                        className="pl-9"
                      />
                    </div>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            {/* Longitude (optional) */}
            <form.Field name="longitude">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>
                      Longitude{" "}
                      <span className="font-normal text-muted-foreground">
                        (optional)
                      </span>
                    </FieldLabel>
                    <div className="relative">
                      <Compass className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id={field.name}
                        name={field.name}
                        type="number"
                        step="any"
                        inputMode="decimal"
                        placeholder="90.3975"
                        value={field.state.value ?? ""}
                        onBlur={field.handleBlur}
                        onChange={(e) =>
                          field.handleChange(
                            e.target.value === ""
                              ? undefined
                              : Number(e.target.value),
                          )
                        }
                        aria-invalid={isInvalid}
                        className="pl-9"
                      />
                    </div>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            {/* Total beds */}
            <form.Field name="totalBeds">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Total beds</FieldLabel>
                    <div className="relative">
                      <BedDouble className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id={field.name}
                        name={field.name}
                        type="number"
                        min={0}
                        inputMode="numeric"
                        placeholder="100"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) =>
                          field.handleChange(Number(e.target.value))
                        }
                        aria-invalid={isInvalid}
                        className="pl-9"
                      />
                    </div>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            {/* Available beds */}
            <form.Field name="availableBeds">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Available beds</FieldLabel>
                    <div className="relative">
                      <BedDouble className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id={field.name}
                        name={field.name}
                        type="number"
                        min={0}
                        inputMode="numeric"
                        placeholder="40"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) =>
                          field.handleChange(Number(e.target.value))
                        }
                        aria-invalid={isInvalid}
                        className="pl-9"
                      />
                    </div>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>
          </div>
        </FieldGroup>

        <div className="mt-5 flex w-full justify-end">
          <Button disabled={createPending} type="submit">
            {createPending ? (
              <>
                <Spinner /> Submitting
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateHospital;
