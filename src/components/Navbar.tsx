import React, {Fragment,useState,useRef } from 'react'
import {Link} from 'react-router-dom'
import ReactHowler from 'react-howler'
import '../index.css'

const Navbar: React.FunctionComponent = () => {
    const parentRef = useRef();
    const song =  require("../audio/song.mp3")
    const logoFull = require("../images/home/logo-tcb-full.png")
    const logoPart = require("../images/home/logo-tcb-icon.png")
    const audioMute = require("../images/home/mute-audio.png")
    const audioPlay = require("../images/home/play-audio.png")
    const [player, setPlayer] = useState([]);
    const [isPlaying, setIsPlaying] = useState<boolean>(false)

    const playPause = () => {
        setIsPlaying(isPlaying => !isPlaying);
        const newElement = React.createElement(ReactHowler,{key: 'ele'+ new Date().getTime(), playing: !isPlaying, src:[song] });
        setPlayer([newElement]);
    };
    
    return (
        <Fragment>
            <header id="masthead" className="header" role="banner">
                <div className="header-wrap">
                    <nav id="primary-navigation" className="site-navigation primary-navigation" role="navigation">
                        <div className="nav-menu menu-with-icons">
                            <ul>
                                <div className="container">
                                    <div className="row menu-icon" style={{fontSize:"2vh"}}>
                                            <Link to="/"><img className="logo-full" alt="logo-img" style={{maxWidth:"inherit",width:"100px",height:"auto"}}src={logoFull}/></Link>
                                            <Link to="/"><img className="logo-part" alt="logo-img" src={logoPart}/></Link>
                                                <div className="menu-link">
                                                    <li><Link to="/">Home</Link></li>
                                                    <li><Link to="/resume">Resume</Link></li>
                                                    <li><Link to="/portfolio">Portfolio</Link></li>
                                                    <li><Link to="/contact">Contact</Link></li>
                                                </div>
                                                
                                                <li><div className="play-music">
                                                    {player}
                                                    <a className="icon-audio" onClick={playPause} ref={parentRef}> {isPlaying ?  <img alt="audio-mute" src={audioMute}/> : <img alt="audio-mute" src={audioPlay}/>} </a>
                                                </div></li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </Fragment>
    )
}

export default Navbar