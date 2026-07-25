import dynamic from "next/dynamic";
import HomePage from "@/app/components/HomePage";

const PageContent = dynamic(() => import("./page-content"), {
  loading: () => <div className="min-h-screen" />,
});

export default function Page() {
  return (
    <main className="relative">
      <HomePage />
      <PageContent />
    </main>
  );
}

