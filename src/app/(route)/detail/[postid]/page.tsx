import Header from "@/app/components/common/Header";
import DetailBase from "@/app/components/detail/DetailBase/DetailBase";
import apiClient from "@/lib/apiClient";

async function getDetail(postid: string) {
  const {data} = await apiClient(`/api/v1/meeting/${postid}`);
  return data;
}

export default async function Detail({ params }: { params: { postid: string } }) {

  const {status, data : meeting} = await getDetail(params.postid);

  return (
    <>
      <Header/>
      <DetailBase meeting={meeting}/>
    </>
  )
}
