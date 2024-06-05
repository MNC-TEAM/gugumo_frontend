"use client"
import Footer from "@components/common/Footer";
import HomeKeyword from "@components/page/home/HomeKeyword";
import HomeService from "@components/page/home/HomeService";
import HomeVisual from "@components/page/home/HomeVisual";
import HomeWave from "@components/page/home/HomeWave";

export default function page() {
  return (
    <main>
      <HomeVisual/>
      <HomeWave/>
      <HomeKeyword/>
      <HomeService/>
      <Footer/>
    </main>
  )
}
