import React from "react";
import Slider from "react-slick";
import img1 from "./Slider/1.img.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

const SliderComponent = () => {

const settings = {
dots: false,
infinite: true,
speed: 600,
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 2200,
arrows: false
};

return (
<div className="slider_div">


<img className="bg_img" src={img1} alt="background" />


<div className="slider_overlay">
<Slider {...settings}>

<div className="slide_box">
<p>CREATIVE & INNOVATIVE</p>
<h1>  Json Softech builds powerful websites, <br></br>
that help your business grow online.</h1>
</div>

<div className="slide_box">
<p> WEBSITE DEVELOPMENT</p>
<h1>A Complete web Solution <br></br> 
built to support your business goals. </h1>
</div>

<div className="slide_box">
<p>DIGITAL PRESENCE</p>
<h1>
Strengthening your brand <br />
across the digital landscape.
</h1>
</div>

</Slider>

</div>

</div>
);
};

export default SliderComponent;