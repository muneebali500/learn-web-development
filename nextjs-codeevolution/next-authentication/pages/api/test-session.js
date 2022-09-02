import { getSession } from "next-auth/client";

export default async function (req, res) {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ error: `unauthorized access` });
  } else {
    res.status(200).json({ message: `success`, session });
  }
}
