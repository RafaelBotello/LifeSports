import React from "react";
import { Link } from 'react-router-dom';

import CoachB from "../../Assets/Img/BrandonRothfuss.jpeg";
import CoachD from "../../Assets/Img/CoachDavid.jpg";



function AboutCoaches() {
  return(
      <React.Fragment>
        <h1 id="main">About Our Coaches:</h1>
        <div className="card">
            <img className="card-img-top" src={CoachB} alt="Coach Brandon Rothfuss "/>
            <div className="card-body">
                <p className="card-text">Hometown: Raleigh, NC. Brandon attended Guilford College in Greensboro, NC, where he played soccer and ran track. Graduating with a B.S. in Sports Management, he also has an extensive background in non-profit work, becoming the first male project coordinator for the downtown YMCA of Greater Greensboro through his scholarship with Guilford. Previously working in the NBA in sales for the Charlotte Hornets G League team, the Greensboro Swarm, Brandon now finds himself involved in what he considers his two true passions in life—youth and soccer. When he is not working, Brandon enjoys spending time with his dog, traveling with friends and playing soccer.</p>
            </div>
        </div>
        <div className="card">
            <img className="card-img-top" src={CoachD} alt="Coach David Crane"/>
            <div className="card-body">
                <p className="card-text">Hometown: Florence, SC. David grew up in Florence, South Carolina; however, after his freshman year in high school, moved to Kiev, Ukraine with his family. Following high school, he took a gap year to stay in Kiev to tutor and coach his school’s middle school boys’ soccer team. He then attended Francis Marion University, where he received a degree in Mass Communications focused in sports journalism. Fun fact—David speaks Russian!</p>
            </div>
        </div>
    </React.Fragment>
  );
};
export default AboutCoaches;