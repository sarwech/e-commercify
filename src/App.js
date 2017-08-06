import React, { Component } from 'react';
import Header from './Components/Header';
import GalleryGrid from './Components/GalleryGrid';
import './App.css';

const IMAGES =
[{
        src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/2499011/333894655_rjb0EWeKwY/P1.jpg",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/2499011/333894655_rjb0EWeKwY/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        isSelected: false,
        tags: [{value: "£80", title: "£80"}],
        caption: "Vintage Tommy Hilfiger panel-logo fleece."
},
{
        src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/6312186/333894739_frHoVhv1ew/P1.jpg",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/6312186/333894739_frHoVhv1ew/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£20", title: "£20"}],
        caption: "Vintage Retro Kappa LUFC Jacket"
},
 
{
        src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/5117243/333894886_TDyz0aFVUt/P1.jpg",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/5117243/333894886_TDyz0aFVUt/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£25", title: "£25"}],
        caption: "Gorgeous Zara trafuluc distressed denim pinafore dress with raw hem and blue detailing."
},
{
        src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/2499011/333891910_sMZx5p4tX6/P1.jpg",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/2499011/333891910_sMZx5p4tX6/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£25", title: "£25"}],
        caption: "Vintage Ellesse fleece."
},
{
        src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/2499011/333893448_80i1GZhmJN/P1.jpg",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/2499011/333893448_80i1GZhmJN/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£40", title: "£40"}],
        caption: "Vintage Ralph Lauren sweatshirt."
},
 
{
        src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/3028144/333878474_1r69cP5QIk/P1.jpg",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/3028144/333878474_1r69cP5QIk/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£28", title: "£28"}],
        caption: "orange 🍊 suede slip on midi high heels ? shoes."
},
{
        src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/3920651/333880601_6H1tTPdEzj/P1.jpg",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/3920651/333880601_6H1tTPdEzj/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "$34", title: "$34"}],
        caption: "Such a great pair of GUESS jeans."
},
{
        src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/3296009/333880913_J49yaUYzml/P1.jpg",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/3296009/333880913_J49yaUYzml/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£3.50", title: "£3.50"}],
        caption: "NEW: Hip Hop sticker collection: includes Tupac, Snoop and Biggie."
},
 
{
        src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/1639128/333881984_Jc3xe4EBT1/P1.jpg",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/1639128/333881984_Jc3xe4EBT1/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£12", title: "£12"}],
        caption: "Lovely VINTAGE beige floral and square patterned button up blouse. ."
},
{
        src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/6312186/333894739_frHoVhv1ew/P1.jpg",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/6312186/333894739_frHoVhv1ew/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£20", title: "£20"}],
        caption: "Vintage Retro Kappa LUFC Jacket"
},
{
        src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/6312186/333894739_frHoVhv1ew/P1.jpg",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/6312186/333894739_frHoVhv1ew/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£20", title: "£20"}],
        caption: "Vintage Retro Kappa LUFC Jacket"
},
 
{
        src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/6312186/333894739_frHoVhv1ew/P1.jpg",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/6312186/333894739_frHoVhv1ew/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£20", title: "£20"}],
        caption: "Vintage Retro Kappa LUFC Jacket"
},
{
        src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/6312186/333894739_frHoVhv1ew/P1.jpg",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/6312186/333894739_frHoVhv1ew/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£20", title: "£20"}],
        caption: "Vintage Retro Kappa LUFC Jacket"
},
{
        src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/6312186/333894739_frHoVhv1ew/P1.jpg",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/6312186/333894739_frHoVhv1ew/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£20", title: "£20"}],
        caption: "Vintage Retro Kappa LUFC Jacket"
},
 
{
        src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/6312186/333894739_frHoVhv1ew/P1.jpg",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/6312186/333894739_frHoVhv1ew/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£20", title: "£20"}],
        caption: "Vintage Retro Kappa LUFC Jacket"
}];


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: IMAGES
		}
	}

	render() {
		return (
			<div>
				<Header />
				<GalleryGrid images={this.state.images}/>
			</div>
			)
	}
}

export default App;
