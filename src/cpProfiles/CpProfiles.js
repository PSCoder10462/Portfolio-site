import { CodechefLogo, CodeforcesLogo } from "../Logos.js";

const CpProfiles = () => {
	return (
		<div className="cpProfiles">
			<a
				href="https://codeforces.com/profile/pscoder10462"
				target="_blank"
				rel="noreferrer"
			>
				<button data-aos="flip-up" className="getInTouch__btn">
					<CodeforcesLogo />
					<h3> Codeforces </h3>
				</button>
			</a>
			<a
				href="https://www.codechef.com/users/pscoder10462"
				target="_blank"
				rel="noreferrer"
			>
				<button data-aos="flip-up" className="getInTouch__btn">
					<CodechefLogo />
					<h3> Codechef </h3>
				</button>
			</a>
		</div>
	);
};

export default CpProfiles;
