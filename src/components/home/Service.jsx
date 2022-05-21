import AboutSVG from "../common/svg/AboutSVG";
import ServiceContent from "./components/ServiceContent";

function Service({ data }) {
  return (
    <>
      <div className="py-[5rem]">
        <div className="container flex items-center justify-evenly gap-8 ">
          <div className="flex-1">
            <div className="max-w-md mx-auto">
              <AboutSVG />
            </div>
          </div>
          <div className="flex-1">
            <ServiceContent data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
