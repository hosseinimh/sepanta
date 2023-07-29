import React from "react";

import BaseTakeChallenge from "../BaseTakeChallenge";
import { CHALLENGE_LEVELS } from "../../../../../constants";

const TakeFreeChallenge = () => {
  return <BaseTakeChallenge level={CHALLENGE_LEVELS.FREE} />;
};

export default TakeFreeChallenge;
