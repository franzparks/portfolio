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
		                    
							My passion is to use technology based solutions, to help solve real world challenges.
							
							<h3>Competences:</h3>
								
							<h4>Languages and Frameworks:</h4>

							Javascript, HTML5, CSS3, Bootstrap3, Angular.js, React.js, Python, Java, Spring Framework.

							<h4>Tools & expertise:</h4>

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

