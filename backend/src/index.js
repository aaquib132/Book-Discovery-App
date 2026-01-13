import express from "express";
import cors from "cors"
import bookRoutes from "./routes/book.routes.js"
import favoriteRoutes from "./routes/favorite.routes.js";
import discoverRoutes from "./routes/discover.routes.js";




const app = express();
app.use(cors())
app.use(express.json());

app.use("/api/books", bookRoutes);
app.use("/api/favorites", favoriteRoutes);
app.use("/api/discover", discoverRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Backend is running on Port ${PORT}`))