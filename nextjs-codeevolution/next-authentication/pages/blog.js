import { getSession, useSession } from "next-auth/client";

export default function Bblog({ data }) {
  return <div>blog - {data}</div>;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      data: session
        ? `list of personalized blogs`
        : `list of 100 personalized blogs`,
    },
  };
}
