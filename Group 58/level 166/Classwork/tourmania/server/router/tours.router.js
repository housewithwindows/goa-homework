const { getTours } = require("../controller/tours.controller.js");

const router = (req, res) => {
    const { url, method } = req;

    if ((url === "/tours" || url.startsWith("/tours")) && method === "GET") {
        getTours(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
};

module.exports = {
    router
};
