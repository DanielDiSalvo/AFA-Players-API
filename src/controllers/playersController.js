import { data } from "../../db.js";

// GET all players
export const getPlayers = async (req, res) => {
  res.status(200).json(data);
};
