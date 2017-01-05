import React from 'react';

const About = () => (
  	<div>
	    <a  name="about"></a>
	    <div className="content-section-a">
		    <div className="bg-overlay2">
		        <div className="container">
		            <div className="row">
		                <div className="col-lg-5 col-sm-6">
		                    
		                  <div className="clearfix"></div>
		                  <h2 className="section-heading">Franz Web Development Studio.</h2>
		                  <br></br>
		                    <p className="lead">I'm a <a className="link" target="_blank" 
		                    href="http://www.freecodecamp.com/franzparks">self taught</a> web developer, based in California,USA.
		                    <br></br>
		              		I'm currently part of a software development
		 					team as an automation software engineer and I am also a contributor at Blitz
		 					<br></br> 
							My passion is to use technology based solutions, to help solve real world challenges.
							<br></br>
							Competences:<br></br>
							Languages and Frameworks:<br></br>
							Javascript, HTML5, CSS3, Bootstrap3, Angular.js, React.js, Python, Java, Spring Framework.
							<br></br>
							Tools & expertise:<br></br>
							Git, Agile Methodologies.
							</p>
		                </div>
		            	<div className="col-lg-5 col-lg-offset-2 col-sm-6 collapse navbar-collapse">
		                <img className="img-circle img-responsive" 
		                    src="src/images/FranzImage.jpg" 
		                    alt="Francis image"></img>
		        		</div>
		        	</div>
		    	</div>
		    </div>
	    </div>	
    </div>
);

export default About;

