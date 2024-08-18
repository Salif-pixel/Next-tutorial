import Link from "next/link";


export default function Home() {
  return (
  <div                                                                                                                                                                                             className={`text-2xl`}>
<h1 className={`text-5xl mb-8 font-bold`}>next.js tutorial</h1>
    <Link href={'/client'} className={`btn btn-accent`}>
       GET STARTED
    </Link>

  </div>
  );
}
