import Link from "next/link";

function ContactContent() {
  return (
    <>
      <div className="w-full h-full max-w-md mx-auto">
        <p className="mb-4 font-bold">Contact us</p>
        <h2 className="mb-4">Let us help you in the best way possible.</h2>
        <p>
          Mindful Life is the best online counselling and therapy consultation
          platform in Kolkata. Consult online psychologist, counsellor, mental
          health Therapist Now.
        </p>

        <Link href="/contact">
          <a className="btn bg-sky-900 hover:bg-sky-700 duration-300 text-white mt-8">
            Lets talk
          </a>
        </Link>
      </div>
    </>
  );
}

export default ContactContent;
