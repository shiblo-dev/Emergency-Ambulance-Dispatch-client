import CreateHospital from "@/components/form/create-hospital";

export default function page() {
  return (
    <section className="p-5">
      <div>
        <h1> Create Hospital </h1>
        <p>Please fill in the following details to create a new hospital.</p>
      </div>
      <CreateHospital />
    </section>
  );
}