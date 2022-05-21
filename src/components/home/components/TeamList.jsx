import { urlFor } from "../../../../api";
import BackgroundImage from "../../common/BackgroundImage";

function TeamList({ data }) {
  return (
    <>
      <div className="flex items-center justify-center gap-8 py-11">
        {data.map((data) => (
          <div
            className="flex-1 h-[330px] rounded-2xl overflow-hidden first:translate-y-[50px]"
            key={data.id}
          >
            <BackgroundImage src={urlFor(data.profile).url()} alt={data.name} />

            <div className="flex items-end rounded-2xl h-full ">
              <div className="p-4 text-white">
                <p className="font-bold text-lg">{data.name}</p>
                <p className="text-sm"> {data.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TeamList;
