import React from "react";
import aboutus from "../Slider/aboutus.jpg";
import "./ComAbout.css";

const ComAbout = () => {


return (

<section className="about-us">

<img
id="aboutimg"
alt=""
src={aboutus}
></img>

<div className="about-content">
<div className="about-header">
<h1 id="aboutusk">About us</h1>
<h2 className="white-cl_ab">
Premium Web Design & Development for Modern Businesses.
</h2>
</div>

{/*  */}

<p>JSON Softech is a dynamic IT solutions company 
dedicated to delivering tailored and high-quality 
web development services for small and mid-size businesses. 
Focused on innovation and practical problem-solving, JSON 
Softech ensures impactful digital experiences that help 
businesses grow and achieve their goals.</p>


<div id="block-formediaquery">
<div className="e-learning">
<label className="royal-night">✓</label>
<h3 className="white-night">Free consultant</h3>
<label className="royal-night">✓</label>
<h3 className="white-night">24*7 Support</h3>
</div>

<div className="e-learning">
<label className="royal-night">✓</label>
<h3 className="white-night">Help</h3>
<label className="royal-night">✓</label>
<h3 className="white-night">On-Demand Development</h3>
</div>

</div>

{/*  */}

<h2 id="call">Call to ask questions.</h2>
<h3 className="white-cl_ab">+91 93110 71290</h3>

<button className="contact-btn">
<a>Contact us</a>
</button>
</div>
</section>



);

};

export default ComAbout;
