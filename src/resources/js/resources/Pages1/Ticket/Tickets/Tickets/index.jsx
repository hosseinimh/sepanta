import React from "react";
import { useParams } from "react-router-dom";

import BaseTickets from "../BaseTickets";

const Tickets = () => {
    const params = useParams();

    return <BaseTickets userId={params?.userId} />;
};

export default Tickets;
