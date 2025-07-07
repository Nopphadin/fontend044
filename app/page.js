import Carousel from "./conponents/carousel";
import Card from "./conponents/card";
import Footer from "./conponents/footer"
export default function service() {
  return(
    <>
    <h1 className="text-4xl text-center text-black-500">Home Page</h1>
    <Carousel/>
    <Card/>
    <Footer/>
    </>
  )
}

