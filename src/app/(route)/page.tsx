import { cookies } from "next/headers";
import Header from "../components/common/Header";
import MainBase from "@/app/components/main/MainBase/MainBase";

export default function Home() {

  const user = cookies().get('user')?.value;

  return (
    <>
      <Header token={user}/>
      <MainBase/>
    </>
  );
  
}