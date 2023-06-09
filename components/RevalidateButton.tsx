"use client";

export function RevalidateButton({ pageId = "" }) {
  return (
    <button
      onClick={async () => {
        try {
          const res = await fetch(
            `/api/revalidate?secret=${process.env.REVALIDATE_SECRET_TOKEN}&pageId=${pageId}`,
            { method: "GET" }
          );
          const data = await res.json();
          console.log("data", data);
        } catch (error) {
          console.log("error", error);
        }
      }}
    >
      revalidate
    </button>
  );
}
