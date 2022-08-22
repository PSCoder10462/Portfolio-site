import {
	ReactLogo,
	ReduxLogo,
	MongoDBLogo,
	NodejsLogo,
	ExpressLogo,
	FirebaseLogo,
	MaterialUiLogo,
	BootstrapLogo,
	GitLogo,
	GithubLogo,
	VimLogo,
} from "../Logos.js";
import NewCard from "../card/NewCard.js";

const Technologies = () => {
	const tech = [
		{ logo: ReactLogo, title: "react js" },
		{ logo: ReduxLogo, title: "redux" },
		{ logo: MongoDBLogo, title: "monogo db" },
		{ logo: NodejsLogo, title: "node js" },
		{ logo: ExpressLogo, title: "express js" },
		{ logo: FirebaseLogo, title: "firebase" },
		{ logo: MaterialUiLogo, title: "material-ui" },
		{ logo: BootstrapLogo, title: "bootstrap" },
		{ logo: GitLogo, title: "git" },
		{ logo: GithubLogo, title: "github" },
		{ logo: VimLogo, title: "vim" },
	];
	return (
		<div className="technologies">
			<div className="container">
				{tech.map(({ logo, title }, index) => (
					<NewCard key={index} Logo={logo} title={title} />
				))}
			</div>
		</div>
	);
};

export default Technologies;
