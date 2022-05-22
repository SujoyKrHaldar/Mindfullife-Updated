import Link from "next/link";

function ServiceContent({ data }) {
  return (
    <>
      <div className="w-full h-full">
        <p className="mb-4 font-bold">What we do</p>
        <h2 className="mb-4">
          We are a team of Experienced proffecionals in their specialities. We
          are here to help you.
        </h2>
        <p>
          Get benefit from the best online therapy from counsellors to get rid
          of your psychological issues leading to a happy and healthy life with
          a better mental healthWe work with children, adolescents and adults
          with mental health problems ,educational and occupational problems.
        </p>

        {data && (
          <div className="mt-4 flex items-center flex-wrap gap-4">
            {data.map((item, index) => (
              <p className="bg-[#0c72ad30] px-4 py-2 font-semibold" key={index}>
                {item.name}
              </p>
            ))}
            <p>...</p>
          </div>
        )}

        <Link href="/service/#services">
          <a
            className={
              data.length > 0
                ? "btn bg-sky-900 hover:bg-sky-700 duration-300 text-white mt-8"
                : "btn bg-sky-900 pointer-events-none "
            }
          >
            {data.length > 0 ? "View all Services" : "Coming soon"}
          </a>
        </Link>
      </div>
    </>
  );
}

export default ServiceContent;
