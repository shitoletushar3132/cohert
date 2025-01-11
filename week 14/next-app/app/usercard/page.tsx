"use client";
import React, { useEffect, useState } from "react";

interface Data {
  jobs: string;
  network: string;
  messagings: string;
  notifications: string;
}

const Page = () => {
  const [data, setData] = useState<Data | undefined>(undefined);

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.json(); // Add return here to return the promise
      })
      .then((responseData: Data) => {
        setData(responseData); // Set data received from API
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div className="h-screen flex items-center justify-center">
      {data ? (
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Jobs: {data.jobs}</h2>
          <p className="text-lg">Network: {data.network}</p>
          <p className="text-lg">Messagings: {data.messagings}</p>
          <p className="text-lg">Notifications: {data.notifications}</p>
        </div>
      ) : (
        <p className="text-lg animate-pulse">Loading...</p>
      )}
    </div>
  );
};

export default Page;
