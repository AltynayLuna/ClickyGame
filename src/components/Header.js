import React, {Component} from 'react';

export default class Header extends Component {
	render() {
	    return (
			<section id="showcase">
				<div className="container">
					<div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
						<div className="col-xs-10 col-sm-10 col-md-10 col-lg-7 showcase-content">
							<h1>Welcome to <span className="primary-text">Clicky Game</span></h1>
							<p>Click on an image to earn points, but do not click on any more than once!</p>
						</div>
					</div>
				</div>		
			</section>
		)
	}
}