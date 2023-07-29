import React from "react";
import { useSelector } from "react-redux";

import BaseAddTicket from "../BaseAddTicket";

const AddTicketCurrentUser = () => {
    const userState = useSelector((state) => state.userReducer);

    return <BaseAddTicket userId={userState?.user?.id} />;
};

export default AddTicketCurrentUser;
