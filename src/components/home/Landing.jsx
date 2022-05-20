import Link from "next/link";
import { urlFor } from "../../../api";
import BackgroundImage from "../common/BackgroundImage";

function Landing({ data, background }) {
  return (
    <>
      <div className="w-full h-screen">
        <BackgroundImage
          src={urlFor(background.background).url()}
          alt={background.altText}
        />

        <div className="container h-full flex items-center justify-start">
          <div className="max-w-xl">
            <h1>
              What mental health needs is more sunlight and more unashamed
              conversation.
            </h1>
            <p>
              Mindful Life is a one of its kind Psychological Wellness Centre
              currently based on Kolkata. We help to improve your Mental well
              being whenever and wherever suits you, with online or face-to-face
              sessions.
            </p>

            <div className="flex gap-2 items-center justify-start mt-4">
              <Link href="/contact">
                <a className="btn bg-white text-black">Get help now</a>
              </Link>

              {data.length > 0 && (
                <Link href="/service">
                  <a className="btn secondary">Our services</a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
