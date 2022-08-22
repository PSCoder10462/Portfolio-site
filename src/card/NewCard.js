import "./NewCard.css";
import { ExternalLink, GithubLogo } from "../Logos.js";

const NewCard = ({ Logo, title, siteLink, githubLink }) => (
	<div data-aos="flip-up" className="newCard">
		<div className="newCard__media">
			{siteLink ? <img src={Logo} alt={title} /> : <Logo />}
		</div>
		<h3> {title} </h3>
		{siteLink && (
			<div className="newCard__btnSection">
				<a href={siteLink} target="_blank" rel="noreferrer">
					<button>
						Visit Site <ExternalLink />
					</button>
				</a>
				<a href={githubLink} target="_blank" rel="noreferrer">
					<button>
						Github <GithubLogo />
					</button>
				</a>
			</div>
		)}
	</div>
);

export default NewCard;
