import btemp1 from "./Templates/btemp1SS.png";
import wedAnniv1 from "./Templates/Wed1SS.png";
import wtemp1 from "./Templates/wedAnnivSS.png";

const headingData = [
  {
    id: 1,
    title: "Personal",
    subHeading: [
      {
        id: 11,
        title: "Birthdays",
        link: "#",
        template: btemp1,
        eachTemplates: [
          { temp: btemp1, id: 111 },
          { temp: wedAnniv1, id: 112 },
          { temp: wtemp1, id: 113 },
        ],
      },
      {
        id: 12,
        title: "Weddings",
        link: "#",
        template: wedAnniv1,
        eachTemplates: [
          { temp: wtemp1, id: 121 },
          { temp: wedAnniv1, id: 122 },
          { temp: btemp1, id: 123 },
        ],
      },
      {
        id: 13,
        title: "Anniversary",
        link: "#",
        template: wtemp1,
        eachTemplates: [
          { temp: btemp1, id: 131 },
          { temp: wtemp1, id: 132 },
          { temp: wedAnniv1, id: 133 },
        ],
      },
      {
        id: 14,
        title: "Baby Showers",
        link: "#",
        template: btemp1,
        eachTemplates: [
          { temp: wedAnniv1, id: 141 },
          { temp: wtemp1, id: 142 },
          { temp: btemp1, id: 143 },
        ],
      },
      {
        id: 15,
        title: "Housewarming",
        link: "#",
        template: wtemp1,
        eachTemplates: [
          { temp: wedAnniv1, id: 151 },
          { temp: btemp1, id: 152 },
          { temp: wtemp1, id: 153 },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Professional",
    subHeading: [
      {
        id: 21,
        title: "Networking",
        link: "#",
        template: wedAnniv1,
        eachTemplates: [
          { temp: btemp1, id: 211 },
          { temp: wedAnniv1, id: 212 },
          { temp: wtemp1, id: 213 },
        ],
      },
      {
        id: 22,
        title: "Corporate",
        link: "#",
        template: btemp1,
        eachTemplates: [
          { temp: btemp1, id: 221 },
          { temp: wedAnniv1, id: 222 },
          { temp: wtemp1, id: 223 },
        ],
      },
      {
        id: 23,
        title: "Career",
        link: "#",
        template: wtemp1,
        eachTemplates: [
          { temp: btemp1, id: 231 },
          { temp: wedAnniv1, id: 232 },
          { temp: wtemp1, id: 233 },
        ],
      },
      {
        id: 24,
        title: "Training",
        link: "#",
        template: wedAnniv1,
        eachTemplates: [
          { temp: btemp1, id: 241 },
          { temp: wedAnniv1, id: 242 },
          { temp: wtemp1, id: 243 },
        ],
      },
      {
        id: 25,
        title: "Appreciation",
        link: "#",
        template: btemp1,
        eachTemplates: [
          { temp: btemp1, id: 251 },
          { temp: wedAnniv1, id: 252 },
          { temp: wtemp1, id: 253 },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Social Gatherings",
    subHeading: [
      {
        id: 31,
        title: "Reunions",
        link: "#",
        template: wtemp1,
        eachTemplates: [
          { temp: btemp1, id: 311 },
          { temp: wedAnniv1, id: 312 },
          { temp: wtemp1, id: 313 },
        ],
      },
      {
        id: 32,
        title: "Parties",
        link: "#",
        template: btemp1,
        eachTemplates: [
          { temp: btemp1, id: 321 },
          { temp: wedAnniv1, id: 322 },
          { temp: wtemp1, id: 323 },
        ],
      },
      {
        id: 33,
        title: "Graduation",
        link: "#",
        template: wedAnniv1,
        eachTemplates: [
          { temp: btemp1, id: 331 },
          { temp: wedAnniv1, id: 332 },
          { temp: wtemp1, id: 333 },
        ],
      },
      {
        id: 34,
        title: "Picnics & Outings",
        link: "#",
        template: btemp1,
        eachTemplates: [
          { temp: btemp1, id: 341 },
          { temp: wedAnniv1, id: 342 },
          { temp: wtemp1, id: 343 },
        ],
      },
      {
        id: 35,
        title: "Funerals & Memorials",
        link: "#",
        template: wtemp1,
        eachTemplates: [
          { temp: btemp1, id: 351 },
          { temp: wedAnniv1, id: 352 },
          { temp: wtemp1, id: 353 },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Cultural",
    subHeading: [
      {
        id: 41,
        title: "Music & Dance",
        link: "#",
        template: btemp1,
        eachTemplates: [
          { temp: btemp1, id: 411 },
          { temp: wedAnniv1, id: 412 },
          { temp: wtemp1, id: 413 },
        ],
      },
      {
        id: 42,
        title: "Theater & Films",
        link: "#",
        template: wedAnniv1,
        eachTemplates: [
          { temp: btemp1, id: 421 },
          { temp: wedAnniv1, id: 422 },
          { temp: wtemp1, id: 423 },
        ],
      },
      {
        id: 43,
        title: "Art & Craft",
        link: "#",
        template: wtemp1,
        eachTemplates: [
          { temp: btemp1, id: 431 },
          { temp: wedAnniv1, id: 432 },
          { temp: wtemp1, id: 433 },
        ],
      },
      {
        id: 44,
        title: "Sports Event",
        link: "#",
        template: btemp1,
        eachTemplates: [
          { temp: btemp1, id: 441 },
          { temp: wedAnniv1, id: 442 },
          { temp: wtemp1, id: 443 },
        ],
      },
      {
        id: 45,
        title: "Food Festival",
        link: "#",
        template: wedAnniv1,
        eachTemplates: [
          { temp: btemp1, id: 451 },
          { temp: wedAnniv1, id: 452 },
          { temp: wtemp1, id: 453 },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Festivals",
    subHeading: [
      {
        id: 51,
        title: "Diwali",
        link: "#",
        template: wtemp1,
        eachTemplates: [
          { temp: btemp1, id: 511 },
          { temp: wedAnniv1, id: 512 },
          { temp: wtemp1, id: 513 },
        ],
      },
      {
        id: 52,
        title: "Holi",
        link: "#",
        template: btemp1,
        eachTemplates: [
          { temp: btemp1, id: 521 },
          { temp: wedAnniv1, id: 522 },
          { temp: wtemp1, id: 523 },
        ],
      },
      {
        id: 53,
        title: "Eid",
        link: "#",
        template: wedAnniv1,
        eachTemplates: [
          { temp: btemp1, id: 531 },
          { temp: wedAnniv1, id: 532 },
          { temp: wtemp1, id: 533 },
        ],
      },
      {
        id: 54,
        title: "Navratri & Durga Puja",
        link: "#",
        template: wtemp1,
        eachTemplates: [
          { temp: btemp1, id: 541 },
          { temp: wedAnniv1, id: 542 },
          { temp: wtemp1, id: 543 },
        ],
      },
      {
        id: 55,
        title: "Christmas",
        link: "#",
        template: btemp1,
        eachTemplates: [
          { temp: btemp1, id: 551 },
          { temp: wedAnniv1, id: 552 },
          { temp: wtemp1, id: 553 },
        ],
      },
    ],
  },
];

export default headingData;
