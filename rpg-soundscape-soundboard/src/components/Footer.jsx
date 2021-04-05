import React from 'react'
import GitHubButton from 'react-github-btn' 
export default function (props) {
    return(
    <footer className="footer">
    <div className="level">
      <section className="level-item">Powered by Spotify</section>
      <a className="level-item" href="https://bulma.io">
      <img
       src="https://bulma.io/images/made-with-bulma.png"
       alt="Made with Bulma"
        width="128"
       height="24"/>
       </a>
       <div className="level-item">Made with <a href="https://reactjs.org">React</a></div>
      <div className="level-item"><GitHubButton href="https://github.com/HiskiHuovila" data-size="large" aria-label="Follow @HiskiHuovila on GitHub">Follow @HiskiHuovila</GitHubButton></div>
    <a className="level-item" href="license.html">License</a>
    </div>
  </footer>)
}