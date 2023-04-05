const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const downloadSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    templateID: {
      type: Number,
      required: true,
    },
    template: {
      type: String,
      required: true,
    },
    Btemp1: {
      nameBtemp1: {
        type: String,
        required: false,
      },
      dateBtemp1: {
        type: Number,String,
        required: false,
      },
      locationBtemp1: {
        type: String,Number,
        required: false,
      },
      type: Object,
      required:false
    },
    WedAnniv1: {
      headInviteWedAnniv1: {
        type: String,
        required: false,
      },
      nameOneWedAnniv1: {
        type: String,
        required: false,
      },
      nameTwoWedAnniv1: {
        type: String,
        required: false,
      },
      footInviteWedAnniv1: {
        type: String,
        Number,
        required: false,
      },
      type: Object,
      required:false
    },
    Wtemp1: {
      headInviteWtemp1: {
        type: String,
        required: false,
      },
      nameWtemp1: {
        type: String,
        required: false,
      },
      footInviteWtemp1: {
        type: String, Number,
        required: false,
      },
      type: Object,
      required:false
    }
    // templateImg: {

    // }
  },
  { timestamps: true }
);

module.exports = mongoose.model("download", downloadSchema);
