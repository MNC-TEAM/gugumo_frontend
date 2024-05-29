import Header from "@/app/components/common/Header";
import DetailBase from "@/app/components/detail/DetailBase/DetailBase";
import { cookies } from "next/headers";

async function getDetail(postid: string) {
  const res = await fetch(`${process.env.API_URL}/api/v1/meeting/${postid}`);
  const json = await res.json();
  console.log(json);
  return json;
}

export default async function Detail({ params }: { params: { postid: string } }) {

  const {status, data : meeting} = await getDetail(params.postid);
  const token = cookies().get('user')?.value;

  return (
    <>
      <Header token={token}/>
      <DetailBase meeting={meeting}/>
    </>
  )
}
