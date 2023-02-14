import React, { Fragment } from 'react'
import '../index.css'

const Resume: React.FunctionComponent = () => {
    const CV = require("../documents/CV-TCOLLARDBOVY.pdf")
    const recoAlban = require('../documents/lettre-reco-alban-leandri.pdf')
    const recoAnael = require('../documents/lettre-reco-anael-laskri.pdf')
    const recoCarlos = require('../documents/lettre-reco-carlos-rodriguez.pdf')
    const thib_pic = require("../images/home/thibault.png")

  return (
    <Fragment>
        <div id="page" className="hfeed site">

		  	<main id="main" className="site-main cd-main">
            
                <div className="site-middle"> 
                     
                    <div className="layout-medium"> 
                        <div id="primary" className="content-area">

                            <div id="content" className="site-content" role="main">
                            <div className="page-single page-layout">


                                <article className="page hentry">

                                    <header className="entry-header">
                                    <div className="row">
                                        <div className="col-sm-3 col-lg-5">
                                            <img className='pic-home' src={thib_pic} alt='tcb'/>
                                        </div>
                                        <div className="col-sm-9 col-lg-7">
                                            <div className='text-intro'>I am a developer, passionate about building excellent software that improves the lives of those around me. What would you do if you had a software expert available at your fingertips?</div>
                                        </div>
                                    </div>
                                        <h2 className="entry-title">Fullstack Software Developer</h2>
                                        <h4 className="section-search center"> ~ Looking for a full-time position in the Geneva region ~</h4>
                                        <p className='center'><a href={CV} target="_blank" rel="noreferrer" className="downloadCV"><i className="pw-icon-doc-alt"></i> Download CV</a></p>
                                    </header>
                                    <div className="entry-content">

                                        <div className="row">

                                            <div className="col-sm-6 col-lg-7">


                                                <div className="event">
                                                    <h2>WORK HISTORY</h2>
                                                    <p>
                                                        <i className="pw-icon-badge"></i>
                                                    </p>
                                                </div>

                                                <div className="event">
                                                    <h4>Developer Fullstack</h4>
                                                    <h5>MCR Solutions (Jun 2022 - Jan 2023)</h5>
                                                    <p> Within the international division of MCR, whose clients are pharmaceutical laboratories, 
                                                        my missions consisted of the implementation of a mobile application for inventory
                                                        management on Windev mobile, the creation of new features on Angular JS, React 
                                                        and Windev with management of SQL queries, bug fixes and customer support management  
                                                    </p>
                                                </div>

                                                <div className="event">
                                                    <h4>Python Developer for Growth Hacking</h4>
                                                    <h5>Lemonads (Sep 2021 - Mar 2022)</h5>
                                                    <p> Lemonads wanted to collect data from publisher websites and send <br/>
                                                    ultra-targeted prospecting emails. This solution had to be accessible, <br/>
                                                    100% autonomous, operate 24/7 and provide good quality data without <br/>
                                                    leaks. I developed a Python solution with the Scrapy library running <br/>
                                                    on Zyte server managed by n8nio and connected to Google docs.  
                                                    </p>
                                                </div>


                                                <div className="event">
                                                    <h4> Founder </h4>
                                                    <h5>Golden Muse (Sep 2020 - Jun 2021)</h5>
                                                    <p> I created this marketing agency to help those who have the vision of what <br/>
                                                    they want but do not know how to transcribe it technically in an efficient way. 
                                                    Using my skills in graphic design, marketing and web development, <br/>
                                                    the challenge was to create effective elements and educate my clients to <br/>
                                                    do it by themselves using tools like Canva, Wordpress... <br/></p>
                                                </div>

                                                <div className="event">
                                                    <h4> Javascript developer & co-founder </h4>
                                                    <h5> N'joys (Mar 2020 - Jul 2020)</h5>
                                                    <p> The concept of this start-up creation was 
                                                        to combine a lottery e-commerce website with a gaming experience. To do so, I coded a simplified version 
                                                        of the poker game card with Canva to reveal the lottery result and implemented the MERN stack for the custom e-commerce platform </p>
                                                </div>

                                                <div className="event">
                                                    <h4>Javascript Developer Fullstack</h4>
                                                    <h5>Arhia RH (Feb 2020 - Mar 2020)</h5>
                                                    <p>I worked with the main developer of the company with the aim of creating a working 
                                                        environment free of technical problems for Arhia HR clients. 
                                                        Step by step, I had to understand the technical problems of users, be able 
                                                        to detect and reproduce these problems in a test environment, implementing
                                                        unit tests, and finally fix them without creating subsequent regressions</p>
                                                </div>

                                                <div className="event">
                                                    <h4>Trips to the USA, New-Zealand and Nepal</h4>
                                                    <h5> Hiking, Working and Learning English in classes (Sep 2017 - Feb 2019)</h5>  
                                                </div>

                                                <div className="event">
                                                    <h4>Social Media Manager</h4>
                                                    <h5>Idaos (Sep 2016 - Jul 2017)</h5>
                                                    <p>In order to increase the visibility of social media profiles for IDAOS 
                                                        customers, I started to implement the monitoring of stats about content, 
                                                        created more meaningful content and implemented social media 
                                                        automation tools to drive social media account growth</p>
                                                </div>

                                                <div className="event">
                                                    <h4>Community Manager</h4>
                                                    <h5>Kantar Worldpanel (Sep 2015 - Jun 2016)</h5>
                                                    <p>To ensure that social media followers receive accurate information posted 
                                                        by KWP employees without censoring posted content, I trained them on the 
                                                        correct use of Twitter and created regular live-tweets around events</p>
                                                </div>

                                                <div className="event">
                                                    <h4>Marketing Assistant</h4>
                                                    <h5>Bouygues Immobilier (Sep 2014 - Jun 2015)</h5>
                                                    <p>I got involved in managing the content of the corporate blog "demainlaville.com"
                                                        with the mission of publishing one article per day with the best possible Google
                                                        ranking. To do this, we hired an expert writer to always have content in advance
                                                        and a SEA agency to optimize the content </p>
                                                </div>

                                                <div className="event">
                                                    <h2>EDUCATION</h2>
                                                    <p>
                                                        <i className="pw-icon-education"></i>
                                                    </p>
                                                </div>

                                                <div className="event">
                                                    <h4>Javascript Software Engineer</h4>
                                                    <h5>IFOCOP (Oct 2019 - Jun 2020)</h5>
                                                    <p>I studied Javascript web development at IFOCOP Paris. I learned to create usable
                                                        web interfaces, front end and back end with the MERN Stack
                                                        (Mongo, Express, React, Node) </p>
                                                </div>


                                                <div className="event">
                                                    <h4>Ruby on Rails Software Engineer</h4>
                                                    <h5> The Hacking Project (Jui 2019 - Sep 2019)</h5>
                                                    <p> During the summer, I joined the summer session of THP
                                                        to learn Ruby software development. The special pedagogy
                                                        of THP is to learn from where you want, in community, 
                                                        by doing concrete projects.</p>
                                                </div>

                                                <div className="event">
                                                    <h4> C Software Engineer </h4>
                                                    <h5> 42 Paris (Apr 2019 - Jun 2019)</h5>
                                                    <p> After having validated the entrance test, I started the 
                                                        course of the school 42 in Paris, a computer science 
                                                        training in language C</p>
                                                </div>

                                                <div className="event">
                                                    <h4> Master 2 Management Communication & Marketing </h4>
                                                    <h5> Cesacom Paris (Sep 2014 - Jui 2017)</h5>
                                                    <p> The pedagogy of Cesacom Paris is to learn communication
                                                        through practical projects resulting from requests from
                                                        real advertisers. I obtained a master 2 in work-study 
                                                        after several experiences in digital communication services</p>
                                                </div>

                                                <div className="event">
                                                    <h4> BTS Communication des entreprises </h4>
                                                    <h5> Pigier SQY (Sep 2012 - Jui 2014)</h5>
                                                    <p> I obtained the BTS Communication diploma which 
                                                        gave me the skills to participate in the design,
                                                        implementation and monitoring of internal or external
                                                        communication actions</p>
                                                </div>

                                            </div>
                                            <div className="col-sm-6 col-lg-5">

                                                <div className="section-title center">
                                                    <h2>
                                                        <i>Coding Skills</i>
                                                    </h2>
                                                </div>
                                                
                                                <div className="skill-unit">
                                                    <h4>Languages</h4>
                                                    <div><a href='https://devdocs.io/javascript/' className="badge badge-skills">Javascript</a>
                                                        <a href='https://devdocs.io/typescript/' className="badge badge-skills"> Typescript </a>
                                                        <a href='https://devdocs.io/html/' className="badge badge-skills"> HTML </a>
                                                        <a href='https://devdocs.io/css/' className="badge badge-skills"> CSS </a>
                                                        <a href='https://devdocs.io/python~3.9/' className="badge badge-skills">Python</a>
                                                        <a href='https://doc.pcsoft.fr/' className="badge badge-skills">Windev</a>
                                                    </div>
                                                </div>
                                                
                                                <div className="skill-unit">
                                                    <h4>Frameworks</h4>
                                                    <div><a href='https://devdocs.io/jquery/' className="badge badge-skills"> Jquery </a>
                                                    <a href='https://devdocs.io/express/' className="badge badge-skills">Express</a>
                                                    <a href='https://devdocs.io/react/' className="badge badge-skills">React</a>
                                                    <a href='https://devdocs.io/angularjs~1.8//' className="badge badge-skills">Angular Js</a>
                                                    <a href='https://devdocs.io/django~4.0/' className="badge badge-skills">Django</a>
                                                    <a href='https://devdocs.io/flask~2.0/' className="badge badge-skills">Flask</a>
                                                    <a href='https://devdocs.io/vue~3/' className="badge badge-skills">Vue JS</a>
                                                    <a href='https://devdocs.io/jest/' className="badge badge-skills">Jest</a>
                                                    </div>
                                                </div>
                                                
                                                <div className="skill-unit">
                                                    <h4>Databases</h4>
                                                    <div>
                                                        <a href='https://www.mongodb.com/fr-fr/nosql-explained' className="badge badge-skills">MongoDB</a>
                                                        <a href='https://hsqldb.org/web/hsqlDocsFrame.html/' className="badge badge-skills">HSQL</a>
                                                        <a href='https://docs.docker.com/' className="badge badge-skills">Docker</a>
                                                        <a href='https://aws.amazon.com/fr/' className="badge badge-skills">AWS</a>
                                                        <a href='https://console.cloud.google.com/?hl=fr' className="badge badge-skills">Gcloud</a>
                                                        <a href='https://devcenter.heroku.com/' className="badge badge-skills">Heroku</a>

                                                    </div>
                                                </div>
                                                
                                                <div className="skill-unit">
                                                    <h4>Design</h4>
                                                    <div>
                                                        <a href='https://www.adobe.com/fr/products/illustrator.html' className="badge badge-skills">Illustrator</a>
                                                        <a href='https://www.adobe.com/fr/products/indesign.html' className="badge badge-skills">Indesign</a>
                                                        <a href='https://www.adobe.com/fr/products/photoshop.html' className="badge badge-skills">Photoshop</a>
                                                    </div>
                                                </div>
                                                <div className="section-title center">
                                                    <h2>
                                                        <i>Languages</i>
                                                    </h2>
                                                </div>
                                                
                                                <div className="skill-unit">
                                                    <h4>English (TOEIC Level)</h4>
                                                    <div className="lang"> <a href='https://www.ef.fr/tests-anglais/toeic/speaking/'>Listening and Reading</a> </div>
                                                    <div className="bar" data-percent="89">
                                                        <div className="progress" style={{width:"89%"}}>
                                                            <span> 885/990 </span>    
                                                        </div>
                                                    </div>
                                                    <div className="lang"> <a href='https://www.ets.org/toeic/test-takers/speaking-writing/about/content-format/'>Speaking </a></div>
                                                    <div className="bar" data-percent="77">
                                                        <div className="progress" style={{width:"77%"}}>
                                                            <span> 7/9 </span>    
                                                        </div>
                                                    </div>
                                                    <div className="lang"> <a href='https://www.ets.org/toeic/test-takers/speaking-writing/about/content-format/'>Writing </a> </div>
                                                    <div className="bar" data-percent="88">
                                                        <div className="progress" style={{width:"88%"}}>
                                                            <span> 8/9 </span>    
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="skill-unit">
                                                    <h4>French</h4>
                                                    <div className="bar" data-percent="100">
                                                        <div className="progress" style={{width:"100%"}}>
                                                            <span> Native </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="section-title center">
                                                    <h2>
                                                        <i>REFERENCES</i>
                                                    </h2>
                                                </div>
                                                
                                                <div className="testo">
                                                    <a href={recoCarlos}>                                                    
                                                        <h3>Carlos Rodriguez</h3>
                                                        <h5>Founder of MCR Solutions</h5>
                                                    </a>
                                                </div>

                                                <div className="testo">
                                                    <a href={recoAlban}>   
                                                        <h3>Alban Leandri</h3>
                                                        <h5>Growth hacker at Lemonads</h5>
                                                    </a>
                                                </div>
                                                <div className="testo">
                                                    <a href={recoAnael}> 
                                                        <h3>Anael Laskri</h3>
                                                        <h5>Ex-Designer UX at N'joys</h5>
                                                    </a>
                                                </div>

                                            </div>


                                        </div>
                                        

                                    </div>
                                    

                                </article>


                            </div>
                            
                            </div>
                        </div>  
                    
                    
                        
                    
                    
                    </div>
                    
                
                </div>
                
                    
      </main>
                
                <div className="site-alert animated"></div>
                
                
                
                
            </div>
                
        <script src="js/tween-max.js"></script>
        <script src="js/jquery-address.js"></script>
        <script src="js/nprogress/nprogress.js"></script>
        <script src="js/jquery-isotope.js"></script>
        <script src="js/imagesloaded.js"></script>
        <script src="js/jquery-fitvids.js"></script>
        <script src="js/jquery.magnific-popup/jquery-magnific-popup.js"></script>
        <script src="js/jquery-easing.js"></script>
        <script src="js/jquery-validate.js"></script>
        <script src="js/resize-sensor.js"></script>
        <script src="js/jquery-sticky-sidebar.js"></script>
        <script src="js/main.js"></script>
        
    </Fragment>
  )
}

export default Resume