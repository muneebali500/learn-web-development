import React, { useState, useEffect } from "react";

export default function dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function getDashboardData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();

      setDashboardData(data);
      setIsLoading(false);
    }

    getDashboardData();
  }, []);

  if (isLoading) {
    return <h2>loading......</h2>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>posts - {dashboardData.posts}</h2>
      <h2>likes - {dashboardData.likes}</h2>
      <h2>followers - {dashboardData.followers}</h2>
      <h2>following - {dashboardData.following}</h2>
    </div>
  );
}
