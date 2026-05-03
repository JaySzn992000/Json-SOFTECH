import React from "react";
import socialmedia from '../Slider/socialmedia.jpg'
import uiux from '../Slider/uiux.jpg'
import webdevelopment from '../Slider/webdevelopment.jpg'
import "./Websolution.css";

const Websolution = () => {

return (

<div className="websolution-container">

<h1 id="websolution-title" className="white-night">
Social Marketing Solutions<br />
</h1>

<section className="websolution-section">

<div className="hover-slide">

<img src={socialmedia}
alt="Web Design"
></img>

<div className="slide-layer">
<div className="slide-content">
<h1>Social Media Management</h1>
<p>
We manage your Instagram, Facebook, and LinkedIn with daily posts,
creative content, and consistent brand growth.
</p>
</div>
</div>
</div>

<div className="hover-slide">
<img src={uiux}
alt="ui ux"
></img>
<div className="slide-layer">
<div className="slide-content">
<h1>Google Business Listing</h1>
<p>
We optimize your Google Business Profile to improve
local visibility and generate more leads.
</p>
</div>
</div>
</div>

<div className="hover-slide">

<img src={webdevelopment}
alt="web development"
></img>

<div className="slide-layer">
<div className="slide-content">
<h1>Brand Growth</h1>
<p>
Consistent content and smart planning to build
a strong and trusted online brand.
</p>
</div>
</div>
</div>

</section>
</div>

);
};

export default Websolution;
