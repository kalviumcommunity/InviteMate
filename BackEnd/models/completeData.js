const mongoose = require("mongoose");
// import btemp1 from "./Templates/btemp1SS.png";
// import wedAnniv1 from "./Templates/Wed1SS.png";
// import wtemp1 from "./Templates/wedAnnivSS.png";

const Schema = mongoose.Schema;

const headingData = new Schema([
  {
    id: { type: Number },
    title: { type: String },
    subHeading: [
      {
        id: { type: Number },
        title: { type: String },
        template: { type: String },

        eachTemplates: [
          {
            temp: { type: String },
            id: { type: Number },
          },
        ],
      },
    ],
  },
]);

module.exports = mongoose.model("headingData", headingData);
