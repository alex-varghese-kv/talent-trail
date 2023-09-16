import { PersonRankings } from "Components/PersonRankings/PersonRankings";
import { useGetRankings } from "service/hooks/jobs.hooks";

const Ranking = () => {
  const { data: rankingList } = useGetRankings({
    variables: {
      filter: {
        jobId: 1,
      },
    },
  });

  return (
    <>
      <div className="bg-BG_GREEN h-auto text-left  dashboard-body ">
        <h2 className="main-title text-DARK_GREEN text-left !mb-3">
          Brand & Product Designer
        </h2>
        <div className="info1 ">
          {rankingList?.findApplications.length} applicants
        </div>
        {rankingList?.findApplications?.map((item: any) => (
          <PersonRankings
            email={item?.candidate.email}
            name={item?.candidate.name}
            experience={item?.experience || "6 years"}
            location={`${item?.candidate?.location?.state || "Kochi"}, ${
              item.candidate?.location?.country || "Kerala"
            }`}
            score={item?.score}
          />
        ))}
      </div>
    </>
  );
};

export default Ranking;
