"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import AdminView from "@/components/dashboard/admin";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <main className="grow dark:bg-[#111]">
        <AdminView pages={children} />
      </main>
    </>
  );
}
