import mongoose from "mongoose";

const Schema = mongoose.Schema;

const playersSchema = new Schema(
  {
    player: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    avatar_url: {
      type: String,
      required: true,
    },
  },
  {
    collection: "Players",
    versionKey: false,
  }
);

export const playersCollection = mongoose.model("players", playersSchema);
