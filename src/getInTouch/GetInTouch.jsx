import "./GetInTouch.css";
import { GmailLogo, LinkedInLogo, GithubLogo } from '../Logos.js';

function GetInTouch() {
  return (
    <div className="getInTouch">
      <a
        href="mailto:pscoder10462@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
		  <button data-aos='flip-up' className='getInTouch__btn'>
			  <GmailLogo />
			  <h3> Mail </h3>
		  </button>
      </a>
      <a
        href="https://www.linkedin.com/in/parv-sharma10462/"
        rel="noreferrer"
        target="_blank"
      >
		  <button data-aos='flip-up' className='getInTouch__btn'>
			  <LinkedInLogo />
			  <h3> LinkedIn </h3>
		  </button>
      </a>
      <a
        href="https://github.com/PSCoder10462/"
        rel="noreferrer"
        target="_blank"
      >
		  <button data-aos='flip-up' className='getInTouch__btn'>
			  <GithubLogo />
			  <h3> Github </h3>
		  </button>
      </a>
    </div>
  );
}

export default GetInTouch;
