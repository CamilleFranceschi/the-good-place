import React, { Component } from 'react';
import "./landing.css"
import "./button-landing.css"

const Landing = () => {
  const style = {
    // linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 50%)
    // backgroundImage: 'linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 50%)'
    // backgroundImage: 'linear-gradient(-225deg, #9b2fae, #f884b1)'
    // backgroundImage: 'linear-gradient(210deg, rgba(57,212,216, 0.9) 10% , rgba(32,22,133, 1) 62%)'
    // backgroundImage: 'linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 50%)'
    // backgroundImage: 'linear-gradient( to bottom,#0F015E,rgb(57,212,216) )'
    backgroundImage: 'radial-gradient(farthest-corner at 50% 100%, #772DFA,#3C2AE2)'

  };
  return (
    <div>
    <div style ={style}>
      <div className="banner">
        <div className="banner-content">
          <h1>Find the good place to go</h1>
          <p>Best bars and restaurants advised by your like-minded friends</p>
          <a className="btn-landing">DISCOVER PLACES</a>
        </div>
      </div>
      <svg viewBox="0 0 1920 240" className="svg-wave"><title id="title">goop</title><g><path d="M1920,144.5l0,95.5l-1920,0l0,-65.5c196,-36 452.146,-15.726 657.5,8.5c229.698,27.098 870,57 1262.5,-38.5Z"></path></g></svg>
        {/* <svg  viewBox="0 0 1920 240" id="goop"><title id="title">goop</title><g><path d="M1920,144.5l0,95.5l-1920,0l0,-65.5c196,-36 452.146,-15.726 657.5,8.5c229.698,27.098 870,57 1262.5,-38.5Z"></path></g></svg> */}
        {/* <svg className="goop__InlineSvg-s6dcphf-0 GeMIC" fill-rule="evenodd" clip-rule="evenodd" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" viewBox="0 0 1920 240" id="goop"><title id="title">goop</title><g><path d="M1920,144.5l0,95.5l-1920,0l0,-65.5c196,-36 452.146,-15.726 657.5,8.5c229.698,27.098 870,57 1262.5,-38.5Z"></path></g></svg> */}
    </div>
    <div>HEllo</div>
    <div>HEllo</div>
    <div>HEllo</div>
    <div>HEllo</div>
    <div>HEllo</div>
    <div>HEllo</div>
    <div>HEllo</div>
    <div>HEllo</div>
    <div>HEllo</div>
    </div>



  );
}

export default Landing;


/*blue #39D4D8       rgb(57,212,216)*/
/*purple #201685.   rgb(32,22,133)*/
// #473BE7

// dark purple #3C2AE2
// llight pruple #772DFA
