export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import TeachersView from "@/components/dashboard/teachersView";

export default function Home() {
  return (
    <>
      <TeachersView />
    </>
  );
}
