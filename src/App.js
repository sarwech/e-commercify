import React, { Component } from 'react';
import Header from './Components/Header';
import GalleryGrid from './Components/GalleryGrid';
import './App.css';

const IMAGES =
[{
        _id: 1,
        src: "https://www.depop.com/georgebarry/georgebarry-vintage-tommy-hilfiger-panel-logo-fleece-2",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/2499011/333894655_rjb0EWeKwY/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        isSelected: false,
        tags: [{value: "£80", title: "£80"}],
        caption: "Vintage Tommy Hilfiger panel-logo fleece.",
        value: "Vintage Tommy Hilfiger panel-logo fleece.",
        gender: "Men"
},
{
        _id: 2,
        src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/6312186/333894739_frHoVhv1ew/P1.jpg",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/6312186/333894739_frHoVhv1ew/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£20", title: "£20"}],
        caption: "Vintage Retro Kappa LUFC Jacket",
        value: "Vintage Retro Kappa LUFC Jacket",
        gender: "Women"

},
 
{
        _id: 3,
        src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/5117243/333894886_TDyz0aFVUt/P1.jpg",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/5117243/333894886_TDyz0aFVUt/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£25", title: "£25"}],
        caption: "Gorgeous Zara trafuluc distressed denim pinafore dress with raw hem and blue detailing.",
        gender: "Women"
},
{
        _id: 4,
        src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/2499011/333891910_sMZx5p4tX6/P1.jpg",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/2499011/333891910_sMZx5p4tX6/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£25", title: "£25"}],
        caption: "Vintage Ellesse fleece.",
},
{
        _id: 5,
        src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/2499011/333893448_80i1GZhmJN/P1.jpg",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/2499011/333893448_80i1GZhmJN/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£40", title: "£40"}],
        caption: "Vintage Ralph Lauren sweatshirt."
},
 
{
        _id: 6,
        src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/3028144/333878474_1r69cP5QIk/P1.jpg",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/3028144/333878474_1r69cP5QIk/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£28", title: "£28"}],
        caption: "orange 🍊 suede slip on midi high heels ? shoes.",
        gender: "Women"
},
{
        _id: 7,
        src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/3920651/333880601_6H1tTPdEzj/P1.jpg",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/3920651/333880601_6H1tTPdEzj/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "$34", title: "$34"}],
        caption: "Such a great pair of GUESS jeans.",
        gender: "Women"
},
{
        _id: 8,
        src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/3296009/333880913_J49yaUYzml/P1.jpg",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/3296009/333880913_J49yaUYzml/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£3.50", title: "£3.50"}],
        caption: "NEW: Hip Hop sticker collection: includes Tupac, Snoop and Biggie."
},
 
{
        _id: 9,
        src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/1639128/333881984_Jc3xe4EBT1/P1.jpg",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/1639128/333881984_Jc3xe4EBT1/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£12", title: "£12"}],
        caption: "Lovely VINTAGE beige floral and square patterned button up blouse. ."
},
{
        _id: 10,
        src: "https://www.depop.com/jaxhouston/jaxhouston-red-high-neck-turtle",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/4372471/333945927_WnLlyYtijZ/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£24", title: "£24"}],
        caption: "Red high neck / turtle neck long sleeved fleece"
},
{
        _id: 11,
        src: "https://www.depop.com/gracecullinane/gracecullinane-amazing-vintage-high-waisted-pink",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/449845/333847404_A6gxkbJiGe/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£35", title: "£35"}],
        caption: "Amazing vintage high waisted pink denim skirt with raw hem frayed detail"
},
 
{
        _id: 12,
        src: "https://www.depop.com/amberrdavenport/amberrdavenport-high-quality-print-of-the-41",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/1212865/333950512_JO6Kp4oNqb/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£12", title: "£12"}],
        caption: "High quality print of the original painting printed onto 300gsm thick card."
},
{
        _id: 13,
        src: "https://www.depop.com/harrylibs/harrylibs-nike-crewneck-jumper-good",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/2528794/332810887_hmsMNnZOvp/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£18", title: "£18"}],
        caption: "Nike Crewneck Jumper"
},
{
        _id: 14,
        src: "https://www.depop.com/therail/therail-retro-90s-grey-adidas-sweatshirt",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/3872159/333950915_49R8xXK12f/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£22", title: "£22"}],
        caption: "Retro 90's Grey ADIDAS sweatshirt"
},
{
        _id: 15,
        src: "https://www.depop.com/orendalou/orendalou-cutest-pair-of-cotton-shorts",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/3920651/333955413_YuoTJn9UAD/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "$16", title: "$16"}],
        caption: "Cutest pair of cotton shorts!",
        gender: "Women"
},
{
        _id: 15,
        src: "https://www.depop.com/pocalondon/pocalondon-limitless-blue-jacket-size-10-12-",
        thumbnail: "https://d2h1pu99sxkfvn.cloudfront.net/b0/4907269/333944574_wrFxzSUPJk/P1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        tags: [{value: "£100", title: "£100"}],
        caption: "'Limitless' blue jacket",
        gender: "Women"
}];


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: IMAGES
		}
	}

	_handleClickMen() {
		this.setState((prevState, props) => {
			return { images: this.state.images.filter(function(image) {
				return image.gender === "Men"
			})}
		})
	}

	_handleClickWomen() {
		this.setState({
			images: this.state.images.filter(function(image) {
				return image.gender === "Women"
			})
		})
	}

	render() {
		return (
			<div>
				<Header images={this.state.images} handleClickMen={() => this._handleClickMen()} handleClickWomen={() => this._handleClickWomen()} />
				<GalleryGrid images={this.state.images}/>
			</div>
			)
	}
}

export default App;
