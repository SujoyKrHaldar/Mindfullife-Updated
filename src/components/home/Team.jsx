import TeamList from "./components/TeamList";

function Team({ data, team }) {
  return (
    <>
      <div className="py-[5rem]">
        <div className="container flex items-center justify-evenly gap-8">
          <div className="flex-1">
            <div className="max-w-md">
              <p className="font-bold">A small team</p>
              <h2 className="mb-4">
                A small team with impressive cred. We build our knowledge on our
                Experience.
              </h2>
              <p>Want to join us!</p>
              <p className="max-w-sm">
                Send your Resume at{" "}
                <a
                  className=" font-semibold"
                  href="mailto:mindfulliving02@gmail.com"
                  target="_blank"
                >
                  mindfulliving02@gmail.com
                </a>{" "}
                and let's have a chat.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <TeamList data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
