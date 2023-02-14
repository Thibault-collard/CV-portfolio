import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

const Portfolio: React.FunctionComponent = () => {
    const jitter_test =  require("../images/portfolio/test-jitter.png")
    const herobay = require("../images/portfolio/herobay.png")
    const spider_controller = require("../images/portfolio/spider-controllers.png")
    const cross_quantum = require("../images/portfolio/crossquantum.png")
    const nectar = require("../images/portfolio/nectar-THP.png")
    const njoys = require("../images/portfolio/n'joys.png")
    const game_golem = require("../images/portfolio/game-golem.png")
    const wing = require("../images/portfolio/wing.png")
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
                                                <div className="entry-content">
                                                    <div className="portfolio-items media-grid masonry" data-layout="masonry" data-item-width="360">
                                                        <div className="media-cell media format-link hentry">
                                                            <div className="media-box">
                                                                <img src={herobay} alt="portfolio-post" style={{maxWidth:'100%',height: 'auto'}}/>
                                                                    <a href="https://herobay.herokuapp.com/" className="mask" target="_blank" rel="noreferrer"></a>                                                            </div>
                                                            <div className="media-cell-desc">
                                                                <h3>Superheroes Store
                                                                    <div className='m-l-10'>
                                                                        <a className='btn-round github' href="https://github.com/Thibault-collard/herobay" target="_blank" rel="noreferrer"> </a>
                                                                        <a className='btn-round demo' href="https://herobay.herokuapp.com/" target="_blank" rel="noreferrer"> </a>
                                                                    </div>
                                                                </h3>
                                                                <p className="category"> Supermarket checkout management solution with superhero rental service for all types of use: war, work, entertainment... (03/22)</p>
                                                                <div className='m-t-5'>
                                                                    <span className="badge badge-skills">Django</span> 
                                                                    <span className="badge badge-skills">Vue</span> 
                                                                    <span className="badge badge-skills">MongoDB</span>
                                                                    <span className="badge badge-skills">Vuex</span>
                                                                    <span className="badge badge-skills">Bootstrap</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="media-cell media format-link hentry">
                                                            <div className="media-box">
                                                                <img src={jitter_test} alt="portfolio-post" style={{maxWidth:'100%',height: 'auto'}}/>                                                                               
                                                                    <a href="https://test-jitter.herokuapp.com/" className="mask" target="_blank" rel="noreferrer"></a>                                                            
                                                            </div>
                                                            <div className="media-cell-desc">
                                                                <h3>Rectangle Animation
                                                                    <div className='m-l-10'>
                                                                        <a className='btn-round github' href="https://github.com/Thibault-collard/Jitter-test" target="_blank" rel="noreferrer"> </a>
                                                                        <a className='btn-round demo' href="https://test-jitter.herokuapp.com/" target="_blank" rel="noreferrer"> </a>
                                                                    </div>
                                                                </h3>
                                                                <p className="category"> Minimalist visual editor where the user will be able to edit a scene composed of random rectangular shapes. (02/22)</p>
                                                                <div className='m-t-5'>
                                                                    <span className="badge badge-skills">Javascript</span> 
                                                                    <span className="badge badge-skills">React</span> 
                                                                    <span className="badge badge-skills">Canvas</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="media-cell media format-link hentry">
                                                            <div className="media-box">
                                                                <img src={spider_controller} alt="portfolio-post" style={{maxWidth:'100%',height: 'auto'}}/>
                                                                <a href="https://spiders-control.herokuapp.com/" className="mask" target="_blank" rel="noreferrer"></a>                                                            
                                                            </div>
                                                            <div className="media-cell-desc">
                                                                <h3> Website Affiliate Link Scraper  
                                                                    <div className='m-l-10'>
                                                                        <a className='btn-round demo' href="https://spiders-control.herokuapp.com/" target="_blank" rel="noreferrer"> </a>
                                                                    </div>
                                                                </h3>
                                                                <p className="category"> Custom webscraper to get all external links from a potential client website and filter them for matching affiliate links with lemonads programs.(11/21 to 03/22)

                                                                </p>
                                                                <div className='m-t-5'>
                                                                    <span className="badge badge-skills">Python</span>
                                                                    <span className="badge badge-skills">Django</span> 
                                                                    <span className="badge badge-skills">Scrapy</span> 
                                                                    <span className="badge badge-skills">Zyte</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="media-cell media format-link hentry">
                                                            <div className="media-box">
                                                                <img src={cross_quantum} alt="portfolio-post" style={{maxWidth:'100%',height: 'auto'}}/>
                                                                <a href="https://test-crossquantum.herokuapp.com/" className="mask" target="_blank" rel="noreferrer"></a> 
                                                            </div>
                                                            <div className="media-cell-desc">
                                                                <h3> List Movies 
                                                                    <div className='m-l-10'>
                                                                        <a className='btn-round github' href="https://github.com/Thibault-collard/test-crossquantum" target="_blank" rel="noreferrer"> </a>
                                                                        <a className='btn-round demo' href="https://test-crossquantum.herokuapp.com/" target="_blank" rel="noreferrer"> </a>
                                                                    </div>
                                                                </h3>
                                                                <p className="category"> Connected to the Movie Database API, the user will be able to discover new movies and create a list with the movies they want to watch. (10/20)
                                                                </p>
                                                                <div className='m-t-5'>
                                                                    <span className="badge badge-skills">React</span>
                                                                    <span className="badge badge-skills">Redux</span>
                                                                </div>
                                                            </div>
                                                        </div>                                            
                                                        <div className="media-cell media format-link hentry">
                                                            <div className="media-box">
                                                                <img src={wing} alt="portfolio-post" style={{maxWidth:'100%',height: 'auto'}}/>
                                                                <a href="https://test-wing.herokuapp.com/" className="mask" target="_blank" rel="noreferrer"></a>
                                                            </div>
                                                            <div className="media-cell-desc">
                                                                <h3> E-commerce Logistic Solution 
                                                                    <div className='m-l-10'>
                                                                        <a className='btn-round github' href="https://github.com/Thibault-collard/test-wing" target="_blank" rel="noreferrer"> </a>
                                                                        <a className='btn-round demo' href="https://test-wing.herokuapp.com/" target="_blank" rel="noreferrer"> </a>
                                                                    </div>
                                                                </h3>
                                                                <p className="category"> Wing is a parcel carrier for small merchants. The purpose of this app is to optimize the space in the boxes and in the pallets of goods. (09/20)</p>
                                                                <div className='m-t-5'>
                                                                    <span className="badge badge-skills">Javascript</span> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="media-cell media format-link hentry">
                                                            <div className="media-box">
                                                                <img src={njoys} style={{maxWidth:'100%',height: 'auto'}} alt="portfolio-post"/>
                                                                <a href="https://unsciernotemporarisxndc.herokuapp.com/" className="mask" target="_blank" rel="noreferrer"></a> 
                                                            </div>
                                                            <div className="media-cell-desc">
                                                                <h3> E-commerce Lottery Shop with Gaming 
                                                                    <div className='m-l-10'>
                                                                        <a className='btn-round demo' href="https://unsciernotemporarisxndc.herokuapp.com/"> </a>
                                                                    </div>
                                                                </h3>
                                                                <p className="category"> N'joys is the marketplace where you pay to have % chance of getting the product. The result of the lottery is revealed by a deck of cards. (03/20 to 07/20)</p>
                                                                <div className='m-t-5'>
                                                                    <span className="badge badge-skills">Javascript</span>
                                                                    <span className="badge badge-skills">React</span>  
                                                                    <span className="badge badge-skills">MongoDB</span> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="media-cell media format-link hentry">
                                                            <div className="media-box">
                                                                <img src={game_golem} style={{maxWidth:'100%',height: 'auto'}} alt="portfolio-post"/>
                                                                <a href="https://Thibault-collard.github.io" className="mask" target="_blank" rel="noreferrer"></a> 
                                                            </div>
                                                            <div className="media-cell-desc">
                                                                <h3> Angry Golem Game
                                                                    <div className='m-l-10'>
                                                                        <a className='btn-round github' href="https://github.com/Thibault-collard/Thibault-collard.github.io" target="_blank" rel="noreferrer"> </a>
                                                                        <a className='btn-round demo' href="https://Thibault-collard.github.io" target="_blank" rel="noreferrer"> </a>
                                                                    </div>
                                                                </h3>
                                                                <p className="category"> Escape the golem and collect the stars to reveal my resume. <br/> You can get a new life if you collect a heart. (10/19)</p>
                                                                <div className='m-t-5'>
                                                                    <span className="badge badge-skills">Javascript</span>
                                                                    <span className="badge badge-skills">Canvas</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="media-cell media format-link hentry">
                                                            <div className="media-box">
                                                                <img src={nectar} style={{maxWidth:'100%',height: 'auto'}} alt="portfolio-post"/>
                                                                <a href="https://nectar-project.herokuapp.com/artworks" className="mask" target="_blank" ></a> 
                                                            </div>
                                                            <div className="media-cell-desc">
                                                                <h3>Artwork Shop
                                                                    <div className='m-l-10'>
                                                                        <a className='btn-round github' href="https://github.com/NectarTHP/Nectar" target="_blank" rel="noreferrer"> </a>
                                                                        <a className='btn-round demo' href="https://nectar-project.herokuapp.com/artworks" target="_blank" rel="noreferrer"> </a>
                                                                    </div>
                                                                </h3>
                                                                <p className="category"> Nectar is the place for starting and confirmed artists that are looking to share, show and sell artworks. Team coding project from THP. (09/19) </p>
                                                                <div className='m-t-5'>
                                                                    <span className="badge badge-skills">Ruby</span> 
                                                                    <span className="badge badge-skills">Ruby on Rails</span> 
                                                                </div>
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
            </div>
        </Fragment>
    )
}

export default Portfolio