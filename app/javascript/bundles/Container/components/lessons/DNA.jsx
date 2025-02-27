import React, { Fragment } from "react";
import Adenine from "images/adenine.png";
import Cytosine from "images/cytosine.png";
import Guanine from "images/guanine.png";
import Thymine from "images/thymine.png";
import DNAText from "./text/DNAText";

const DNA = () => (
  <Fragment>
    <section id="visual">
      <div className="table">
        <div className="row">
          <div className="col-sm-1" />
          <div className="col-sm-3">
            <img src={Cytosine} className="dna-img c" />
            <img src={Thymine} className="dna-img t" />
            <img src={Adenine} className="dna-img a" />
            <img src={Guanine} className="dna-img g" />
          </div>
        </div>
      </div>
    </section>
    <DNAText />
  </Fragment>
);

export default DNA;
