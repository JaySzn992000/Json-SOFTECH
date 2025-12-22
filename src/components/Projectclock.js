import React, { useEffect, useState } from "react";
import "./Projectclock.css";

const Projectclock = () => {
  const [projects, setProjects] = useState(0);
  const [services, setServices] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    const p = setInterval(() => {
      setProjects((c) => (c < 150 ? c + 5 : 150));
    }, 50);

    const s = setInterval(() => {
      setServices((c) => (c < 34 ? c + 1 : 34));
    }, 60);

    const e = setInterval(() => {
      setExperience((c) => (c < 2 ? c + 1 : 2));
    }, 300);

    return () => {
      clearInterval(p);
      clearInterval(s);
      clearInterval(e);
    };
  }, []);

  return (
    <div className="happy-clients">

      <div>
        <h3>Projects Completed</h3>
        <h1>{projects}+</h1>
      </div>

      <div>
        <h3>Web Services</h3>
        <h1>{services}+</h1>
      </div>

      <div id="third-bgdiv">
        <h3>Experience</h3>
        <h1>{experience}+ Years</h1>
      </div>

    </div>
  );
};

export default Projectclock;
