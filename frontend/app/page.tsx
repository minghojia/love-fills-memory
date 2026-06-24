"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getToken } from "@/lib/authClient";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const token = getToken();

    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h1>Memory Dashboard</h1>
      <p>Welcome to your SaaS system</p>
    </main>
  );
}