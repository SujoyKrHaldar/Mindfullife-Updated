import Link from "next/link";

function About() {
  return (
    <>
      <div className="py-[6rem]">
        <div className="container">
          <p className="mb-4 font-bold">Mindful Life - Abouts</p>
          <p className="text-2xl max-w-4xl leading-10">
            Get benefit from the best online therapy from counsellors to get rid
            of your psychological issues leading to a happy and healthy life
            with a better mental health. We work with children, adolescents and
            adults with mental health problems, educational and occupational
            problems.
          </p>

          <Link href="/about">
            <a className="btn bg-sky-900 hover:bg-sky-700 duration-300 text-white mt-8">
              Continue reading
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
