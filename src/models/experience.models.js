const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    startDate: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    endDate: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    isWorkingHere: {
      type: Boolean,
      required: true,
    },
    companyExperience: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    designation: {
      type: String,
      required: true,
      trim: true,
    },
    linkedin: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
const Experience = mongoose.model("Experience", experienceSchema);
module.exports = Experience;
