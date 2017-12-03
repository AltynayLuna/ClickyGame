import React, {Component} from 'react';

export default class Navbar extends Component {
render() {
    return (
        <header id="main-header">
        <div className="container"> 
        <div className="row end-sm end-md end-lg center-xs middle-xs middle-sm middle-md middle-lg">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <h1><span className="primary-text">Clicky Game</span></h1>
            </div>

            <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">           
                <nav id="navbar">
                    <ul>
                        <li>Click an Image to Begin</li>
                        <li>Score: 0 | Top Score: 0</li>
                    </ul>
                </nav>
            </div>
        </div>          
        </div>
    </header>
       
        );
    }
}

