import React from "react";
import "./Websolution.css";

const Websolution = () => {

return (

<div className="websolution-container">

<h1 id="websolution-title" className="white-night">
Social Marketing Solutions<br />
</h1>

<section className="websolution-section">

<div className="hover-slide">

<img
src="https://webitof.com/wp-content/uploads/2021/04/Website-Design-webitof.png"
alt="Web Design"
/>

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
<img
src="https://webitof.com/wp-content/uploads/2021/04/social-marketing-webitof-image.png"
alt="UI UX"
/>
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
<img
src="https://webitof.com/wp-content/uploads/2021/05/App-Development-webitof.jpg"
alt="Web Development"
/>
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
