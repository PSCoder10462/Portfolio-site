import NewCard from "../card/NewCard.js";
import { CppLogo, JavascriptLogo, HtmlLogo, CssLogo } from "../Logos.js";

const lang = [
	{
		logo: CppLogo,
		title: "c++",
	},
	{
		logo: JavascriptLogo,
		title: "javascript",
	},
	{
		logo: HtmlLogo,
		title: "html 5",
	},
	{
		logo: CssLogo,
		title: "css 3",
	},
];

function Languages() {
	return (
		<div className="languages">
			<div className="container">
				{lang.map((l, ind) => (
					<NewCard Logo={l.logo} title={l.title} key={ind} />
				))}
			</div>
		</div>
	);
}

export default Languages;
