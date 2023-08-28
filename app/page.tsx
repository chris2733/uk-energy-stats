import Image from "next/image";
import DashboardLayout from "./dashboard/layout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DashboardLayout />
    </main>
  );
}
