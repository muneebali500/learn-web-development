import React from "react";

export default function Users({ users }) {
  return (
    <div>
      <h2>list of users</h2>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();

  // console.log(users);

  return {
    props: {
      users,
    },
  };
}
