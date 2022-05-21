import { urlFor } from "../../../api";
import BackgroundImage from "../common/BackgroundImage";
import LandingContent from "./components/LandingContent";
import LandingFooter from "./components/LandingFooter";

function Landing({ data, background }) {
  return (
    <>
      <div
        className="w-full h-screen 
      before:absolute before:w-full before:h-full before:inset-0 
      before:bg-gradient-to-tr from-[#1a4466]"
      >
        <BackgroundImage
          src={urlFor(background.background).url()}
          alt={background.altText}
        />

        <div className=""></div>

        <div className="container h-full flex items-center justify-start">
          <LandingContent data={data} />
          {/* <LandingFooter /> */}
        </div>
      </div>
    </>
  );
}

export default Landing;
