import React from "react";
import { useParams } from "react-router-dom";

import BaseAddTicket from "../BaseAddTicket";

const AddTicket = () => {
    const params = useParams();

    return <BaseAddTicket userId={params?.userId} />;
};

export default AddTicket;
