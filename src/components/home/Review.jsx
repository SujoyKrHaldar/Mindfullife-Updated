import Link from "next/link";

function Review({ data }) {
  return (
    <>
      <div className="container py-[5rem] text-center">
        <div className="">
          <p className="mb-4 font-bold">Testimonials</p>
          <h2 className="mb-2">What People Say About Us</h2>
          <p>
            Reviews of Mindful Life Clients who have experienced our services.
          </p>

          <div className="flex items-start justify-center gap-2 flex-wrap mt-8">
            {data.slice(0, 3).map((d) => (
              <div className="p-8 max-w-lg text-left bg-[#0c72ad30]" key={d.id}>
                <p className="mb-2">{d.message}</p>
                <p className="text-sm font-bold">{d.name}</p>
                <p className="text-sm ">{d.role}</p>
              </div>
            ))}
          </div>

          <Link href={data.length > 4 ? "/reviews" : "/about#testimonials"}>
            <a className="btn bg-sky-900 hover:bg-sky-700 duration-300 text-white mt-8">
              View all
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Review;
