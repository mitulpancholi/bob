
import React from "react";
import { ReactComponent as LeftArrow } from "../assets/arrow-left.svg";


import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const caseStudies = [
  {
    id: 1,
    subtitle: "Transparent Tape",
    title: "One of the highest Selling Tapes",
    img: "curology-min.png",
  },
  {
    id: 2,
    subtitle: "Printed Tape",
    title: "We Provide Custom Printed Tape for You",
    img: "lumin-min.png",
  },
  {
    id: 3,
    subtitle: "Duct Tape",
    title: "This is sample text for this photo",
    img: "yourspace-min.png",
  },
];

const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <LeftArrow />
          </div>
          <div className="cases-arrow next">
            <RightArrow />
          </div>
        </div>
        <div className="row">
          {caseStudies.map((caseItem) => (
            <div className="case" key={caseItem.id}>
              <div className="case-details">
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className="case-image">

              <img src={`/assets/${caseItem.img}`} alt={caseItem.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
