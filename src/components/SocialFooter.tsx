import React from 'react'
import {Link} from 'react-router-dom'

const SocialFooter: React.FunctionComponent = () => {
  return (
    <>
      <p className="home-social">
        <a href="http://linkedin.com/in/thibaultcb" className="social-link linkedin" target="_blank" rel="noreferrer"></a>
        <a href="https://github.com/Thibault-collard" className="social-link github" target="_blank" rel="noreferrer"></a>
      </p>
      <a href="#" id="back-to-top" className="show">↑ <span>Scroll to top</span></a>
    </>
  )
}

export default SocialFooter