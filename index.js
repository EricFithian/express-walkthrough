// A route to my homepage
// A route to my about page
// A route to my products page

const express = require("express")
const app = express()
require('hbs')

app.set('view engine', 'hbs')

// The method `.use` sets up middleware for the Express application
app.use(express.json())
// this parses requests that may use a different content type
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.render("welcome")
})

app.post('/', (req, res) => {
    console.log(req.body)
    let context = {
        name: req.body.name,
        email: req.body.email
    }
    res.render('profile', context)
})

app.get('/:myName', (req, res) => {
    console.log(req.params)
    let context = { helloAll: req.params.myName}
    res.render(`index`, context)
})

app.get('/taco_tuesday/:number', (req, res) => {
    console.log(req.params)
    let context = { numOfTacos: req.params.number}
    res.render(`tacos`, context)
})


app.listen(4000, () => {
    console.log("app listening on port 4000")
})