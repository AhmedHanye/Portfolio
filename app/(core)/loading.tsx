import Loader from "@/components/loader";

export default function Loading() {
  return (
    <section id="loading" className="h-full center gap-4">
      <Loader />
      {/* <span className="text-2xl">Loading...</span> */}
    </section>
  );
}
