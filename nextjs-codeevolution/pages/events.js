import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function events({ events }) {
  const [eventList, setEventList] = useState(events);
  const router = useRouter();

  async function fetchSportsEvetns() {
    const response = await fetch(
      `http://localhost:4000/events?category=sports`
    );
    const data = await response.json();

    setEventList(data);
    router.push(`/events?category=sports`, undefined, { shallow: true });
  }

  return (
    <div>
      <button onClick={fetchSportsEvetns}>get sports</button>
      <h1>Events</h1>
      {eventList.map((event) => {
        return (
          <div key={event.id}>
            <h4>
              {event.id} - {event.title} | {event.category}
            </h4>
            <p>{event.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? `category=sports` : ``;

  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      events: data,
    },
  };
}
