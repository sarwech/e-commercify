import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import '../App.css';

class GalleryGrid extends Component {
	constructor(props) {
		super(props);
	}
	
    render () {

        let IMAGESS =
                this.props.images.map((i) => {
                    i.customOverlay = (
                            <div style={captionStyle}>
                            <div>{i.caption}</div>
                        </div>);
                    return i;
                });
        return (
        	<div>
                <Gallery
            images={this.props.images}/>
            </div>
        );
    }
};

const captionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    maxHeight: "320px",
    overflow: "hidden",
    position: "absolute",
    bottom: "0",
    width: "100%",
    color: "white",
    padding: "2px",
    fontSize: "90%"
};

const customTagStyle = {
    wordWrap: "break-word",
    display: "inline-block",
    backgroundColor: "white",
    height: "auto",
    fontSize: "75%",
    fontWeight: "600",
    lineHeight: "1",
    padding: ".2em .6em .3em",
    borderRadius: ".25em",
    color: "black",
    verticalAlign: "baseline",
    margin: "2px"
};

export default GalleryGrid;