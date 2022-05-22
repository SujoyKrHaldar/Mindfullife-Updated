import Link from "next/link";

function LandingContent({ data }) {
  return (
    <div className="max-w-2xl text-white">
      <h1 className="mb-4">
        What mental health needs is more sunlight and more unashamed
        conversation.
      </h1>
      <p className="max-w-lg">
        Mindful Life is a one of its kind Psychological Wellness Centre
        currently based on Kolkata. We help to improve your Mental well being
        whenever and wherever suits you, with online or face-to-face sessions.
      </p>

      <div className="flex gap-2 items-center justify-start mt-8">
        <Link href="/contact">
          <a className="btn bg-white text-black">Get help now</a>
        </Link>

        {data.length > 0 && (
          <Link href="/service">
            <a className="btn bg-[#ffffff2b] hover:bg-[#ffffff54] duration-200">
              Our services
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}

export default LandingContent;
