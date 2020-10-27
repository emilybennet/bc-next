import React from "react";
import ScheduleSheet from "../../components/EventSchedule/ScheduleSheet";

export default {
  title: "eventSchedule/ScheduleSheet",
  component: ScheduleSheet,
  argTypes: {
      openDetailModal: {
          action: 'session clicked, modal would open.'
      }
  }
};

// slight css hack since these little labels have a negative left margin
export const Default = args => <ScheduleSheet {...args} />;
Default.args = {
    activeTabKey: 'thursday',
    eventData: {
        thursday: [
            {
                "id": 3,
                "event_name": "YouTube Ponies",
                "description": "Discover the secrets behind some of the fandom's best YouTube channels and learn what it takes to bring your own pony video project to the next level.",
                "start_time": "2019-08-01 12:00:00",
                "end_time": "2019-08-01 13:00:00",
                "location_name": "Hall of the Sun",
                "short_code": "SUN",
                "bcc_room_number": "BCC 307\u2013309",
                "track_name": "Panels",
                "fee": 0,
                "mature": false,
                "duration": 3600
            },
            {
                "id": 13,
                "event_name": "The Most Metal 1980s Show Ever Invented: My Little Pony Generation 1",
                "description": "Take a trip through the crazy world of 1980s ponies where the most metal of monsters and darkest disasters of the series are fought.",
                "start_time": "2019-08-01 12:00:00",
                "end_time": "2019-08-01 13:00:00",
                "location_name": "Hall of the Moon",
                "short_code": "MOON",
                "bcc_room_number": "BCC 318\u2013320",
                "track_name": "Panels",
                "fee": 0,
                "mature": false,
                "duration": 3600
            },
            {
                "id": 1,
                "event_name": "Opening Ceremonies",
                "description": "",
                "start_time": "2019-08-01 18:00:00",
                "end_time": "2019-08-01 18:30:00",
                "location_name": "Mane Event's Hall",
                "short_code": "MANE",
                "bcc_room_number": "BCC Hall B",
                "track_name": "Panels",
                "fee": 0,
                "mature": false,
                "duration": 1800
            },
            {
                "id": 256,
                "event_name": "Honey Heist",
                "description": "You are about to pull off a heist that makes _Mission: Impossible_ look like a kid's show. The only issue? You're all bears. Good luck, agents!",
                "start_time": "2019-08-01 18:00:00",
                "end_time": "2019-08-01 19:00:00",
                "location_name": "Stabletop Games",
                "short_code": "STG",
                "bcc_room_number": "BCC 316\u2013317",
                "track_name": "Games + Tournaments",
                "fee": 0,
                "mature": false,
                "duration": 3600
            },
            {
                "id": 2,
                "event_name": "BronyPalooza",
                "description": "Rock out in Mane Event's Hall and witness the most immersive fandom musical experience ever in a three-night sixteen-hour concert. <br/><br/>\n7:00pm Hollowpoint; 7:40pm Seventh Element; 8:15pm Faulty B2B PegasYs; 8:50pm John Kenza; 9:25pm YourEnigma; 10:00pm GeekBrony; 10:35pm loophoof; 11:10pm Lavender Harmony; 11:45pm Elevative; 12:20am FLIGHTRUSH; 12:55am R3CTIFIER; 1:30am Chang31ing",
                "start_time": "2019-08-01 19:00:00",
                "end_time": "2019-08-02 02:00:00",
                "location_name": "Mane Event's Hall",
                "short_code": "MANE",
                "bcc_room_number": "BCC Hall B",
                "track_name": "Concerts",
                "fee": 0,
                "mature": false,
                "duration": 25200
            },
        ],
        friday: [
            {
                "id": 23,
                "event_name": "Finding the Voice Within",
                "description": "Learn the basics of voice acting with Nicole Oliver, Michelle Creber, and Rebecca Shoichet as they teach our Community Guests how to hone their voice and develop the skills needed to voice a character.",
                "start_time": "2019-08-02 10:00:00",
                "end_time": "2019-08-02 11:00:00",
                "location_name": "Mane Event's Hall",
                "short_code": "MANE",
                "bcc_room_number": "BCC Hall B",
                "track_name": "Panels",
                "fee": 0,
                "mature": false,
                "duration": 3600
            },
            {
                "id": 139,
                "event_name": "Puyo Puyo Tetris Tournament",
                "description": "Get your brain moving fast in this classic mashup of two puzzle game classics. If you think you're the biggest egghead of the convention, put your skills to the test.",
                "start_time": "2019-08-02 10:00:00",
                "end_time": "2019-08-02 12:00:00",
                "location_name": "Baltimare Arcade",
                "short_code": "ARC",
                "bcc_room_number": "BCC 314\u2013315",
                "track_name": "Games + Tournaments",
                "fee": 0,
                "mature": false,
                "duration": 7200
            },
            {
                "id": 195,
                "event_name": "DIY Mini-Pony Plush",
                "description": "Join seasoned plush makers as they guide you step-by-step to make your own mini pony. All skill levels are welcome. Children under the age of 8 will not be allowed to sew. $10 material fee.",
                "start_time": "2019-08-02 11:00:00",
                "end_time": "2019-08-02 13:00:00",
                "location_name": "Pastel Pastures",
                "short_code": "PAST",
                "bcc_room_number": "BCC 310",
                "track_name": "Workshops",
                "fee": 10,
                "mature": false,
                "duration": 7200
            },
        ],
        saturday: [
            {
                "id": 99,
                "event_name": "Cosplay Cosmetics",
                "description": "Get your makeup bag and compact mirror: it's time for some glitz and glam! All genders and skill levels are invited to come and learn how to create your own personalized looks during this live cosmetics demo.",
                "start_time": "2019-08-03 10:00:00",
                "end_time": "2019-08-03 11:00:00",
                "location_name": "Hall of the Stars",
                "short_code": "STAR",
                "bcc_room_number": "BCC 321\u2013323",
                "track_name": "Panels",
                "fee": 0,
                "mature": false,
                "duration": 3600
            }
        ],
        sunday: [
            {
                "id": 119,
                "event_name": "Let's Play Jackbox!",
                "description": "Come play Jackbox games with the _MLP_ crew and Community Guests.",
                "start_time": "2019-08-04 10:00:00",
                "end_time": "2019-08-04 11:00:00",
                "location_name": "Mane Event's Hall",
                "short_code": "MANE",
                "bcc_room_number": "BCC Hall B",
                "track_name": "Panels",
                "fee": 0,
                "mature": false,
                "duration": 3600
            },
            {
                "id": 122,
                "event_name": "Closing Ceremonies",
                "description": "",
                "start_time": "2019-08-04 16:00:00",
                "end_time": "2019-08-04 17:00:00",
                "location_name": "Mane Event's Hall",
                "short_code": "MANE",
                "bcc_room_number": "BCC Hall B",
                "track_name": "Panels",
                "fee": 0,
                "mature": false,
                "duration": 3600
            }
        ]
    }
  }