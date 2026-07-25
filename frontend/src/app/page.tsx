import dynamic from "next/dynamic";
import HomePage from "@/app/components/HomePage";


export const PageContent = dynamic(() => import("./page-content"));

export default function Page() {
  return (
    <main className="relative">
      <HomePage />
      <PageContent />
   </main>
  );
}

