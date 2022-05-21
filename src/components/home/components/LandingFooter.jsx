import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";

const LandingFooter = () => {
  return (
    <>
      <div className="absolute w-full max-w-4xl mx-auto h-auto bottom-0 left-0 flex items-center justify-between gap-4">
        <div className="flex items-center justify-start gap-4">
          <div className="flex items-center justify-start gap-2">
            <p>Email:</p>
            <a href="mailto:mindfulliving02@gmail.com">
              mindfulliving02@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-start gap-2">
            <p>Phone:</p>
            <a href="tel:+918867632278">+91 8867632278</a>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://www.facebook.com/MindfulLife.in"
            target="blank"
            title="Fackbook"
            className="flex text-3xl text-white hover:text-blue-700 duration-300"
          >
            <AiFillFacebook />
          </a>

          <a
            href="https://www.youtube.com/channel/UC87utudgNoK2Qa7n_XWX6CQ"
            target="blank"
            title="Youtube"
            className="flex text-4xl text-white hover:text-red-600 duration-300"
          >
            <AiFillYoutube />
          </a>
        </div>
      </div>
    </>
  );
};

export default LandingFooter;
