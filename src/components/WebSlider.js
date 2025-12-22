import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../Slider/Website1.jpg";
import img2 from "../Slider/Website2.jpg";
import img3 from "../Slider/website3.jpg";
import img4 from "../Slider/Website4.jpg";
import img5 from "../Slider/Website5.jpg";

import "./WebSlider.css";


const websites = [
{ name: "Natural Buti", url: "https://naturalbuti.vercel.app/", img: img1 },
{ name: "Lavonne", url: "https://lavonne.vercel.app/", img: img2 },
{ name: "Namasya", url: "https://namasya.vercel.app/", img: img5 },
{ name: "Antara XI", url: "https://antara-xi.vercel.app/", img: img3 },
{ name: "Omega Liard", url: "https://omega-liard.vercel.app/", img: img4 },
];

const WebSlider = () => {

const settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 3,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 3000,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 2,
slidesToScroll: 1,
infinite: true,
dots: true,
},
},

{
breakpoint: 768,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
infinite: true,
dots: true,
},
},
],
};

return (

<div className="webslider-container">
<Slider {...settings}>
{websites.map((item, i) => (
<div className="slide-item" key={i}>
<a href={item.url} target="_blank" rel="noopener noreferrer">
<img className="slide-img" src={item.img} alt={item.name} />
<h4 className="slide-title">{item.name}</h4>
</a>
</div>
))}
</Slider>
</div>

);
};

export default WebSlider;
