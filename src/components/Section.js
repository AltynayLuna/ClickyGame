import React, {Component} from 'react';

export default class Section extends Component {

	constructor(props){
		super(props);
		this.state = {
			images: [], 
			clickedImages: [],
			score: 0,
			topScore: 0,
			gameOver: false
		}
	}

	componentDidMount() {
		const images = [
				"image1.jpg",
				"image2.jpg",
				"image3.jpg",
				"image4.jpg",
				"image5.jpg",
				"image6.jpg",
				"image7.jpg",
				"image8.jpg",
				"image9.jpg",
				"image10.jpg",
				"image11.jpg",
				"image12.jpg",
		];

		this.setState({images});
	}; 

	imageFocus = (e) => {
		e.currentTarget.classList = "image-focused";
	}
	imageFocusOut = (e) => {
		e.currentTarget.classList = "image-container-div";
	}

	clickHandle = (e) => {
		const clickedImage = e.currentTarget.getAttribute("data-image");
		let score = this.state.score;
		const gameOver = this.isGameOver(clickedImage);
		if(gameOver){
			score = 0;
		}
		else{
			score++;
		}	
		const topScore = (score > this.state.topScore) ? score : this.state.topScore;

		this.setState({
			clickedImages: (score !== 0) ? [...this.state.clickedImages, clickedImage] : [],
			score,
			topScore,
			images: this.shuffle(this.state.images),
			gameOver: false
		});
	}

	isGameOver = (clickedImage) => {
		if(this.state.clickedImages.indexOf(clickedImage) > -1){
			alert("Game Over!");
			return true;
		}
		else {
			return false;
		}
	}

	shuffle = (array) => {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	}

	render() {
	    return (
			<section id="features">
				<div className="container">Score: {this.state.score}</div>
				<div className="container">Top Score: {this.state.topScore}</div>
				<div className="image-container container">
				{this.state.images.map((image, index) => {
					return (
						<div className="image-container-div" key={index} onMouseOver={this.imageFocus} onMouseOut={this.imageFocusOut}>
							<img src={"assets/images/"+image} className='galleryImage' onClick={this.clickHandle} data-image={image}/>
						</div>
						)
					})
				}
				</div>
			</section>
		);
	}
}