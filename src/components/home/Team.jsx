import JoinUs from "./components/JoinUs";
import TeamList from "./components/TeamList";

function Team({ data, team }) {
  return (
    <>
      <div className="py-[5rem]">
        <div className="container flex items-center justify-evenly gap-8">
          <div className="flex-1">
            <p className="mb-4 font-bold">A small team</p>
            <h2>A small team with impressive cred.</h2>
            <p className="mb-8">We build our knowledge on our Experience.</p>
            <JoinUs />
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
