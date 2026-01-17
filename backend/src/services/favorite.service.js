import fs from "fs/promises";
import path from "path";

const filePath = path.resolve("favorites.json");

export const readFavorites = async () => {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

export const writeFavorites = async (data) => {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};
