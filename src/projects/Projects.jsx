import React from "react";
import imessage from "./imessage.png";
import twitter from "./twitter.png";
import portfolio from "./portfolio.png";
import wssap from "./wssap.png";
import amazon from "./amazon.png";
import memories from "./memories.png";
import NewCard from "../card/NewCard";

const proj = [
	{
		pic: memories,
		title: "memories",
		link: "https://ps-memories.netlify.app/",
		github: 'https://github.com/PSCoder10462/memories'
	},
	{
		pic: wssap,
		title: "whatsapp clone",
		link: "https://ps-whatsapp.netlify.app/",
		github: 'https://github.com/PSCoder10462/wssap-frontend'
	},
	{
		pic: amazon,
		title: "amazon clone",
		link: "https://pscoder10462.github.io/amazon/",
		github: 'https://github.com/PSCoder10462/amazon'
	},
	{
		pic: twitter,
		title: "twitter clone",
		link: "https://ps-twitter.web.app/",
		github: 'https://github.com/PSCoder10462/Twitter-clone'
	},
	{
		pic: imessage,
		title: "iMessage clone",
		link: "https://ps-imessage.web.app/",
		github: 'https://github.com/PSCoder10462/ps-imessages'
	},
	{
		pic: portfolio,
		title: "portfolio",
		link: "https://parvsharma.netlify.app/",
		github: 'https://github.com/PSCoder10462/Portfolio-site'
	},
];

function Projects() {
	return (
		<div className="projects">
			<div className="container">
				{proj.map((p) => (
					<NewCard Logo={p.pic} title={p.title} siteLink={p.link} githubLink={p.github} key={p.pic} />
				))}
			</div>
		</div>
	);
}

export default Projects;
