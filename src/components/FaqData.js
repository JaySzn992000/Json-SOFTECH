import React, { useState } from "react";
import "./FaqSection.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
{
question: "What services do you offer ?",
answer:
"We provide website design, custom web development, eCommerce solutions, and website maintenance.",
},
{
question: "How long does it take to build a website ?",
answer:
"A basic website takes 7–10 days, while advanced websites may take 2–4 weeks.",
},
{
question: "Is the website mobile-friendly and SEO-optimized ?",
answer:
"Yes, all our websites are fully responsive and built with SEO best practices.",
},
{
question: "Do you provide support after project completion ?",
answer:
"Yes, we offer ongoing support and maintenance after the website launch.",
},

];

const FaqSection = () => {
const [openIndex, setOpenIndex] = useState(null);

const toggleFaq = (index) => {
setOpenIndex(openIndex === index ? null : index);
};

return (
<div className="faq-container">
<h1 id="fr-qsk" className="white-night">Frequently Asked Questions</h1>

{faqData.map((item, index) => (
<div
key={index}
className={`faq-item ${openIndex === index ? "active" : ""}`}
onClick={() => toggleFaq(index)}
>
<div className="faq-header">
<span className="faq-icon">
{openIndex === index ? <FaMinus /> : <FaPlus />}
</span>
<p>{item.question}</p>
</div>

<div
className="faq-answer"
style={{
maxHeight: openIndex === index ? "500px" : "0px",
backgroundColor: openIndex === index ? "#f9f9ff" : "transparent",
}}
>
<p>{item.answer}</p>
</div>
</div>
))}
</div>
);

};

export default FaqSection;
