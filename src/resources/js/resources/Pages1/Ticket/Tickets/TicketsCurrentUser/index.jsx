import React from "react";
import { useSelector } from "react-redux";

import BaseTickets from "../BaseTickets";

const TicketsCurrentUser = () => {
    const userState = useSelector((state) => state.userReducer);

    return <BaseTickets userId={userState?.user?.id} />;
};

export default TicketsCurrentUser;
