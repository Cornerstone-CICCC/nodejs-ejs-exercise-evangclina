"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
//Home 
pageRouter.get('/', (req, res) => {
    res.status(200).render("index", { title: "My Webpage" });
});
//about
pageRouter.get('/about', (req, res) => {
    res.status(200).render("about", { title: "My Webpage" });
});
//contact 
pageRouter.get('/contact', (req, res) => {
    res.status(200).render("contact", { title: "My Webpage" });
});
//404 not found 
pageRouter.get("*", (req, res) => {
    res.status(404).send(`<h1>Page not found :(</h1>
        <img src="https://media.tenor.com/OgIQVzGLDiQAAAAM/annoyed.gif" alt="sad gif">`);
});
exports.default = pageRouter;
