const express = require("express")
const router = express.Router()
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
	title: String,
	review: String,
    username: String},
    {collection: "Movie"}
)

const Movie = mongoose.model('Movie', movieSchema);


router.post("/movieRecommend", async (req, res) => {
	console.log(req.body);
	const newMovie = new Movie(req.body);
	newMovie.save();
	res.send()
})

router.get("/movieRecommend", async (req, res) => {
	Movie.find({}).sort({ _id: -1 }).limit(5).exec(function (err, docs) {
		if (err){
			console.log(err);
		}
		else{
			res.send(docs);
		}
})})

module.exports = router