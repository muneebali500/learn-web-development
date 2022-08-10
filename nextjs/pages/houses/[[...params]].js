import { useRouter } from "next/router";

export default function Houses() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  // if (params.length === 3) {
  //   return <h2>length 2 house</h2>;
  // }

  // if (params.length === 2) {
  //   return <h2>length 1 house</h2>;
  // }

  return <div>Houses 0 homepage - {router.asPath}</div>;
}
