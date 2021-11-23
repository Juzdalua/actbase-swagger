import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import options from "./swagger.js";

const PORT = 4000;
const app = express();

const specs = swaggerJsdoc(options);

app.get("/hello", (req, res) => {
    const {name} = req.query;
    res.send(`${name}님. 안녕하세요.`);
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
    console.log(`😄 Connected PORT: ${PORT}`);
});

export default app;