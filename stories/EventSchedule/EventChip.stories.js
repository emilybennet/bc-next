import React from "react";
import EventChip from "../../components/EventSchedule/EventChip";

export default {
  title: "eventSchedule/EventChip",
  component: EventChip,
  argTypes: {
      handleOnClick: {
          action: "EventChip clicked!"
      }
  }
};

export const Default = args => <EventChip {...args} />;
Default.args = {
    session: {
        "id": 194,
        "event_name": "DIY Mini-Pony Plush",
        "description": "Join seasoned plush makers as they guide you step-by-step to make your own mini pony. All skill levels are welcome. Children under the age of 8 will not be allowed to sew. $10 material fee.",
        "start_time": "2019-08-01 13:30:00",
        "end_time": "2019-08-01 15:30:00",
        "location_name": "Pastel Pastures",
        "short_code": "PAST",
        "bcc_room_number": "BCC 310",
        "track_name": "Workshops",
        "fee": 10,
        "mature": false,
        "duration": 7200
      }
}