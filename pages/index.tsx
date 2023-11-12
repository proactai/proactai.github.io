import { useRouter } from "next/router";
import Cards from "../components/Cards";
import ImageWithText from "../components/ImageWithText";
import ImageWithTextRight from "../components/ImageWithTextRight";
import TextBlock from "../components/TextBlock";
import Slider from "react-slick";
import videoLabeled from '../assets/videos/labeledVideo.mov'

export default function HomePage() {
  const router = useRouter();

  var settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden bg-black banner-section">
        <div className="container px-5 py-24 mx-auto">
          <Slider {...settings}>
            <div>
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                  <h2 className="text-xl title-font text-gray-300 tracking-widest">
                    Proact AI
                  </h2>
                  <h1 className="text-5xl title-font font-medium has-gradient pb-4">
                    Intelligent Surveillance using Generative AI
                  </h1>
                  <p className="leading-relaxed mb-4 font-medium text-gray-300 tracking-widest text-xl">
                    Welcome to Proact AI, where our state-of-the-art machine
                    learning models for CCTV cameras generate real-time alerts
                    for events of interest, eliminating the need for constant
                    monitoring.
                  </p>
                  <button
                    className="inline-flex text-gray-700 bg-gray-100 border border-gray-300 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg has-gradient"
                    onClick={() => router.push("/contact")}
                  >
                    Contact Us
                  </button>
                </div>
                <video
                  src={videoLabeled}
                  className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg border border-gray-200 video-shadow"
                  autoPlay
                  loop
                  muted
                />

              </div>
            </div>
            <div>
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                  <h2 className="text-xl title-font text-gray-300 tracking-widest">
                    Proact AI
                  </h2>
                  <h1 className="text-5xl title-font font-medium has-gradient pb-4">
                    Intelligent Surveillance using Generative AI
                  </h1>
                  <p className="leading-relaxed mb-4 font-medium text-gray-300 tracking-widest text-xl">
                    Welcome to Proact AI, where our state-of-the-art machine
                    learning models for CCTV cameras generate real-time alerts
                    for events of interest, eliminating the need for constant
                    monitoring.
                  </p>
                  <button
                    className="inline-flex text-gray-700 bg-gray-100 border border-gray-300 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg has-gradient"
                    onClick={() => router.push("/contact")}
                  >
                    Contact Us
                  </button>
                </div>
                <video
                  src={videoLabeled}
                  className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg border border-gray-200 video-shadow"
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>
            <div>
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                  <h2 className="text-xl title-font text-gray-300 tracking-widest">
                    Proact AI
                  </h2>
                  <h1 className="text-5xl title-font font-medium has-gradient pb-4">
                    Intelligent Surveillance using Generative AI
                  </h1>
                  <p className="leading-relaxed mb-4 font-medium text-gray-300 tracking-widest text-xl">
                    Welcome to Proact AI, where our state-of-the-art machine
                    learning models for CCTV cameras generate real-time alerts
                    for events of interest, eliminating the need for constant
                    monitoring.
                  </p>
                  <button
                    className="inline-flex text-gray-700 bg-gray-100 border border-gray-300 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg has-gradient"
                    onClick={() => router.push("/contact")}
                  >
                    Contact Us
                  </button>
                </div>
                <video
                  src={videoLabeled}
                  className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg border border-gray-200 video-shadow"
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <section className="text-gray-600 body-font overflow-hidden bg-layer">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Cards />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font overflow-hidden">
        <ImageWithText />
        <TextBlock
          heading="Proact SECURE"
          details="Proact SECURE, powered by patent-pending technology, has the capability to identify concealed weapons and objects of interest, while also pinpointing the individuals carrying them."
        />
        <ImageWithTextRight />
        <TextBlock
          heading="Proact SECURE"
          details="Proact SECURE, powered by patent-pending technology, has the capability to identify concealed weapons and objects of interest, while also pinpointing the individuals carrying them."
        />
      </section>
    </>
  );
}
