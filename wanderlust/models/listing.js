const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    filename: {
      type: String,
      default: "listingimage",
    },
    url: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
      // If someone submits an empty string in the form, fall back to a default image
      set: (v) =>
        v === ""
          ? "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop"
          : v,
    },
  },
  price: {
    type: Number,
    min: 0,
  },
  location: {
    type: String,
  },
  country: {
    type: String,
  },
});

module.exports = mongoose.model("Listing", listingSchema);
