import React from 'react';
import "./CustomerSection.css"

const CustomerContainer = () => {

return (

<div className="customer-container">

<h1 id="ch1" className="white-night">
Custom Website Solutions <br />
</h1>

<section className="div-container">

<div className="over-effectdiv">
<h1 className="white-night">Web Solutions</h1>
<img src="https://webitof.com/wp-content/uploads/2021/04/Website-Design-webitof.png" alt="" />

<p>
We develop modern and high-performance 
Websiets & App solutions that help businesses 
grow. Our focus is on robust architecture,
responsive performance, and smooth user 
functionality — making every digital interaction 
fast, reliable, and impactful.
</p>

<div className="layer"></div>
</div>

<div className="over-effectdiv">
<h1 className="white-night">Web Hosting</h1>
<img src="https://webitof.com/wp-content/uploads/2021/04/social-marketing-webitof-image.png" alt="" />
<p>
Our web hosting service delivers high-speed 
performance and uninterrupted uptime. With 
smart server optimization and auto-scaling, 
we ensure smooth performance even during 
high-traffic periods.
</p>
<div className="layer"></div>
</div>

<div className="over-effectdiv">
<h1 className="white-night">CRM Development</h1>
<img src="https://webitof.com/wp-content/uploads/2021/05/App-Development-webitof.jpg" alt="" />
<p>
Our CRM development focuses on smart automation 
and real-time insights. It analyzes customer data 
and behavior to deliver personalized interactions, 
helping businesses boost sales and build stronger 
relationships.
</p>
<div className="layer"></div>
</div>

</section>

</div>
);
};

export default CustomerContainer;