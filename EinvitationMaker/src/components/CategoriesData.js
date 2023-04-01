// import btemp1 from './categories/Btemp1/Btemp1'
import btemp1 from "./Templates/btemp1SS.png";
import wedAnniv1 from "./Templates/Wed1SS.png";
import wtemp1 from "./Templates/wedAnnivSS.png";

// import './categories/Btemp1/Btemp1.css'
// import image from "./Templates/birthday6.jpg"

const headingData = [
  // landingCategories =
  {
    id: 1,
    title: "Personal",
    subHeading: [
      {
        id: 11,
        title: "Baby Shower",
        link: "#",
        template: btemp1,
        eachTemplates: [
          { temp: btemp1, id: 111  },
          { temp: wedAnniv1, id: 112 , path: "/categories/WedAnniv1/WedAnniv1" },
          { temp: wtemp1, id: 113 , path: "/categories/wedding/Wtemp1" },
        ],
      },
      {
        id: 12,
        title: "Graduation",
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
        title: "Prom Night",
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
        title: "Housewarmings",
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
        title: "Retirement",
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
        title: "Business Conference",
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
        title: "Exhibition",
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
        title: "Webinar",
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
        title: "Seminar",
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
        title: "Product Launch",
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
    title: "Birthdays",
    subHeading: [
      {
        id: 31,
        title: "Kids",
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
        title: "Teenagers",
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
        title: "Women",
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
        title: "Men",
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
        title: "Surprise Party",
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
    title: "Weddings",
    subHeading: [
      {
        id: 41,
        title: "Engagement",
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
        title: "Bachelor party",
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
        title: "Wedding Ceremony",
        link: "#",
        template: wtemp1,
        eachTemplates: [
          { temp: btemp1, id: 431  },
          { temp: wedAnniv1, id: 432  },
          { temp: wtemp1, id: 433  },
        ],
      },
      {
        id: 44,
        title: "Anniversary",
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
        title: "Reception",
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
        title: "Navratri",
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
        title: "Cristmas",
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
        title: "Ganesh Chaturthi",
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

// path : <div>
// <img src={image} alt='bdaytemp1' class="container"/>
// <div className="subContainer">
//     <div className="textContainer">
//         <h1>Happy<br/>Birthday</h1><br/>
//         <div className='nameHolder'>
//           {/* <textarea type={Text} id='name' value={name} onChange={handleChange}></textarea> */}
//         </div>
//         {/* <input onChange={(e)=>setName(e.target.value)} onClick></input> */}
//         <div className='dateHolder'>
//           <textarea typeof='text' id='date'>28-Aug-2023</textarea>
//         </div>
//     </div>
// </div>
// <footer>
//     <textarea id='location'>Party at N.K Restaurant, Lovely Professional University</textarea>
// </footer>
// </div>
