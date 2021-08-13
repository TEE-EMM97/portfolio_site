import React from 'react';
import socialData from '../../../config';
import './footer.scss'

const Footer = () => {
  let tempUrlForName = socialData.socialMedia[2].url;

  return (
    <footer className="main-content">
      <div className="footer__copyright">
        <div className="top">
          <span>Built with GatsbyJS by</span>
          <a href={'/'}> @TM97<span role="img" aria-label="emoji-pink-heart-with-arrow-in-the-middle"> 💘</span></a>
          <span> {new Date().getFullYear()}</span>
          &copy;
        </div>
      </div>
      <div className="footer__socials">
        {socialData.socialMedia.map((data, index) => {
          return (
            <li key={`${index}`} className="pl-4">
              <a href={data.url} target="_blank" rel="noreferrer">
                <i className={`bi-${data.name}`} role="img" aria-label={data.name}/>
              </a>
            </li>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
