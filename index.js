// A route to my homepage
// A route to my about page
// A route to my products page

const express = require("express")
const app = express()
require('hbs')

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.send(`<h1>Duke will beat Texas Tech on Thursday</h1>
    <h2>More information</h2>`)
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