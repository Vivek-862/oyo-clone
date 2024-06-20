import Header1 from "../components/Header1"
import Header2 from "../components/Header2"
import Header3 from "../components/Header3"
import Header4 from "../components/Header4"
import Image from "next/image";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>OYO: India's Best Online Hotel Booking for Santize Stay.</title>
      </Head>
      <Header1/>
      <Header2/>
      <Header3/>
      <div className="mx-20">
      <div className="py-14  max-w-full">
        <Image src={'/banner1.avif'} alt="banner1" width={1300} height={200} className="h-80" />
      </div>
      <div className="py-14  max-w-full">
        <Image src={'/banner2.avif'} alt="banner1" width={1300} height={200} className="h-40" />
      </div>
      <Header4/>
      </div>
      
    </div>
    
  )
}

export default Home