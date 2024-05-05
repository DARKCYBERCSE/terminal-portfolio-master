import { BiLogoHtml5, BiLogoJava, BiLogoJavascript } from "react-icons/bi";
import ProgressBar from "../ProgressBar";
import {
	SiReact,
	SiJavascript,
	SiHtml5,
	
	
} from "react-icons/si";

export default function Skills() {
	const listOfSkills = [
		{
			Icon: SiReact,
			barWidth: "w-80%",
			percentageValue: "60%",
			text: "React",
		},
		{
			Icon: BiLogoJava,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "Java",
		},
		{
			Icon: SiHtml5,
			barWidth: "w-80%",
			percentageValue: "70%",
			text: "html5",
		},
		{
			Icon: SiJavascript,
			barWidth: "w-80%",
			percentageValue: "50%",
			text: "Javascript",
		},
		
	];

	return (
		<div>
			{listOfSkills.map(({ Icon, barWidth, percentageValue, text }, index) => {
				return (
					<ProgressBar
						Icon={Icon}
						barWidth={barWidth}
						percentageValue={percentageValue}
						key={index}
						text={text}
					/>
				);
			})}
		</div>
	);
}
