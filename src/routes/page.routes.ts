import { Router, Request, Response } from "express";

const pageRouter = Router()

//Home 
pageRouter.get('/', (req: Request, res: Response) => {
    res.status(200).render("index", { title: "My Webpage"})
})

//about
pageRouter.get('/about', (req: Request, res: Response) => {
    res.status(200).render("about", { title: "My Webpage"})
})

//contact 
pageRouter.get('/contact', (req: Request, res: Response) => {
    res.status(200).render("contact", { title: "My Webpage"})
})

//404 not found 
pageRouter.get("*", (req: Request, res: Response) => {
    res.status(404).send(`<h1>Page not found :(</h1>
        <img src="https://media.tenor.com/OgIQVzGLDiQAAAAM/annoyed.gif" alt="sad gif">`)
})

export default pageRouter