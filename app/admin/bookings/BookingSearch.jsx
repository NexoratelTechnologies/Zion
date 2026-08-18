"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function BookingSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSearch = searchParams.get("search") || "";

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const search = formData.get("search")?.trim();

    const params = new URLSearchParams();

    if (search) {
      params.set("search", search);
    }

    const query = params.toString();

    router.push(query ? `/admin/bookings?${query}` : "/admin/bookings");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        placeholder="Search bookings..."
        defaultValue={currentSearch}
      />

      <button type="submit">Search</button>

      {currentSearch && (
        <button type="button" onClick={() => router.push("/admin/bookings")}>
          Clear
        </button>
      )}
    </form>
  );
}
