import React from "react";
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch(`http://localhost:4000/dashboard`);
  const data = await response.json();
  return data;
};

export default function dashboardSwr() {
  const { data, error } = useSWR("dashboard", fetcher);

  if (error) return `there is an error`;
  if (!data) return `loading...`;

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>posts - {data.posts}</h2>
      <h2>likes - {data.likes}</h2>
      <h2>followers - {data.followers}</h2>
      <h2>following - {data.following}</h2>
    </div>
  );
}
