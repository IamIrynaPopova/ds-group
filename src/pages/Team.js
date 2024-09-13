import React, { lazy, useState, useEffect } from "react";
const TeamGallery = lazy(() => import("../components/TeamGallery"));
// const TeamVideo = lazy(() => import("../components/TeamVideo"));
import data from "../data/teams.json";

const Team = ({ teamId }) => {
  const [team, setTeam] = useState(null);
  console.log(team);

  useEffect(() => {
    const foundTeam = data.find((team) => team.id === teamId);
    if (foundTeam) {
      setTeam(foundTeam);
    }
  }, [teamId]);

  return (
    <>
      <section>{/* інфо команди */}</section>
      {team && <TeamGallery photos={team.photos} />}
      {/* {team && <VideoGallery videos={team.videos} /> } */}
    </>
  );
};

export default Team;
