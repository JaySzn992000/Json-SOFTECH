import React from "react";
import "./about.css";
import Header from "../headers_footer/header";
import Navbar from "../headers_footer/navbar";
import personalsoluion from "../Slider/personalsolution.jpg";

const AboutUs = () => {

return (

<div>

<Navbar></Navbar>

<div className="about-page">

<div className="cg-bg">
<img
src="https://devtorium.com/wp-content/uploads/2023/03/blog-image-wide-best_principles_of_UI_design.png"
alt="Background"
/>
<div className="bg-layer"></div>
</div>

<section className="slider-col">
<div className="fit-div" id="div1">
<h1 id="uper-min">About us</h1>
</div>
</section>

<div className="about-us">
<span id="about-best">
<h1 id="aboutus">About us</h1>

<h1 className="white-night-diff">
Providing result-driven web development solutions.
</h1>

<p className="white-night">

Json Softech is a web development company 
delivering professional digital solutions for 
businesses of all sizes. We specialize in building
modern, responsive, and user-friendly websites that
strengthen brand presence online. Our services include
website development, CRM development, hosting solutions,
and ongoing support.

<br /><br />
At Json Softech, we focus on providing
reliable, high-quality solutions that drive 
business growth and long-term success.
</p>

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


<h1 id="call">Call to ask questions.</h1>
<h1 className="white-night">+91 93110 71290</h1>

<button className="btn_abtUs">
<a href="/contact">Contact us</a>
</button>
</span>

<img
id="aboutimg"
alt="UI/UX Design"
src="https://img.freepik.com/free-vector/ui-ux-differences-
concept-illustration_114360-10979.jpg"
/>
</div>

<div className="customer-container">
<h1 id="ch1" className="white-night">Why Choose Us</h1>

<section className="div-container">

<div className="over-effectdiv">
<h2>Big Experience</h2>
<img
alt="Experience"
src="https://miro.medium.com/v2/resize:fit:1200/1*1Bw8tqzEYn6LzmQInimbFA.png"
/>
<p>
We bring years of industry experience, 
delivering fully customized, unique, 
and trust-based digital solutions for 
every client. Our focus is on understanding 
business needs and providing reliable, 
high-quality results.
</p>
</div>

<div className="over-effectdiv">
<h2>Strong Creation</h2>
<img
alt="Strong Creation"
src="https://glyanec.net/sites/default/files/styles/
compressor/7730x7730/inline-images/wavy_bus-22_single-09_4.jpg"
/>
<p>
A personalized approach to every project, 
delivering flexible and creative solutions 
designed to achieve your business goals.
</p>
</div>

<div className="over-effectdiv">
<h2>Personal Solutions</h2>

<img alt="Personal Solutions"
src={personalsoluion} ></img>

<p>
We provide customized and well-planned 
solutions tailored to your unique business
requirements, ensuring flexibility, efficiency, 
and long-term success.
</p>
</div>

</section>
</div>

<section className="our-tech">

<section>
<h1 id="servi-col">
Find us <span>On Google Map</span>
</h1>

<div className="layer-cl">

<iframe
title="Google Maps"
loading="lazy"
style={{ border: 0 }}
width="100%"
height="487"
allowFullScreen
referrerPolicy="no-referrer-when-downgrade"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7008.691047024656!2d77.24105995747506!3d28.559385425720315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b794b4423f%3A0x8b4170ba5af347d8!2sAmritpuri%2C%20East%20of%20Kailash%2C%20New%20Delhi%2C%20Delhi%20110065!5e0!3m2!1sen!2sin!4v1695890679061!5m2!1sen!2sin"
></iframe>

</div>
</section>
</section>

</div>

<Header></Header>

</div>

);
};

export default AboutUs;