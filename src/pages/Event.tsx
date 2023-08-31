import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";

import Description from "../components/_eventComponents/Description/Description";
import Report from "../components/_eventComponents/Report/Report";
import Trailer from "../components/_eventComponents/Trailer/Trailer";

import { EventObject } from "../redux/eventSlice/types";

import { url } from "../constants/url";

const Event: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [event, setEvent] = React.useState<EventObject>();

  React.useEffect(() => {
    const fetchEvent = async () => {
      const { data } = await axios.get<EventObject>(
        `${url}/events/api/event/${id}/`
      );
      setEvent(data);
    };

    try {
      fetchEvent();
    } catch (e) {
      console.log(e);
      navigate("/PageNotFound");
    }
  }, [id]);

  if (!event) {
    return <></>;
  }

  return (
    <main>
      <Description {...event} />
      {event.video && <Report videoURL={event.video} />}
      {event.trailer && <Trailer trailerURL={event.trailer} />}
    </main>
  );
};

export default Event;
