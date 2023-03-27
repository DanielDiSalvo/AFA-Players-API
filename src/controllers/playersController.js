import { playersCollection } from "../models/playersModel.js";

// GET all players
export const getPlayers = async (req, res) => {
  const players = await playersCollection.find({}).sort({ createdAt: -1 });

  res.status(200).json(players);
};

// Create new workout
export const createPlayer = async (req, res) => {
  const { player, number, position, avatar_url } = req.body;

  // add doc to db
  try {
    const players = await playersCollection.create({
      player,
      number,
      position,
      avatar_url,
    });
    res.status(200).json(players);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
