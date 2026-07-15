
import { Banner } from "./components/Banner";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";


export default function Home() {
  return (
    <div className="container mx-auto">
    
      <Banner></Banner>
      <LandingPage></LandingPage>
      <Footer></Footer>
    </div>
    
  );
}
