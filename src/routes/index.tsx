import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <iframe
      src="/campustime.html"
      title="캠퍼스타임"
      className="fixed inset-0 z-0 h-dvh w-full border-0 bg-[#F2F3F5]"
    />
  );
}
