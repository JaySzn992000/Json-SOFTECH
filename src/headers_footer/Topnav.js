import React from "react";
import "./Topnav.css";
import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Topnav = () => {

return (

<div className="f-nav">
<section className="left-info">
<div className="info-item">
<FaMapMarkerAlt />
<span>Amritpuri 93/4 East Of Kailash New Delhi - 110065</span>
</div>
<div className="info-item">
<FaPhoneAlt />
<span>+91 93110 71290</span>
</div>
<div className="info-item">
<FaEnvelope />
<span>Jsonsoftech@gmail.com</span>
</div>
</section>

<section className="right-icons">

<a
href="https://api.whatsapp.com/send/?phone=9311071290&text&type=phone_number&app_absent=0"
target="_blank"
rel="noreferrer"
>
<FaWhatsapp />
</a>

<a href="https://www.instagram.com/jsonsoftech/?next=%2F" target="_blank" rel="noreferrer">
<FaInstagram />
</a>

<a
href="https://www.linkedin.com/in/json-softech-46b61a294/"
target="_blank"
rel="noreferrer"
>
<FaLinkedinIn />
</a>

</section>

</div>

);
};

export default Topnav;
