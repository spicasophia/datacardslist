"use client";
import CardList from "@/components/cards";
import { useState, useEffect } from "react";
export default function Home() {
  const [loadingState, setLoadingState] = useState({ loading: true, error: null });

  useEffect(() => {
    async function fetchData() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoadingState({ loading: false, error: null });
      } catch (err) {
        setLoadingState({ loading: false, error: "Failed to load data" });
      }
    }

    fetchData();
  }, []);

  if (loadingState.loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }
  
  return (
    <div>
      <div className="justify-center h-screen">
        <CardList />
      </div>
    </div>
  );
}


