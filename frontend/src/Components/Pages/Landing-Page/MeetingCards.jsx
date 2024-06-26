import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoMdVideocam } from "react-icons/io";
import { IconContext } from "react-icons";

const MeetingCards = () => {
	return (
		<div className="flex  flex-wrap gap-0 justify-center w-full  text-cyan-50 text-2xl text-center">
			<IconContext.Provider
				value={{ size: "3em", className: "global-class-name" }}>
				<MeetingCard
					style={{ backgroundColor: "#ff742e" }}
					icon={<FaPlus />}
					cardHeading="INSTANT MEETING"
					cardDesc="Start An Instant Meeting"
				/>

				<MeetingCard
					style={{ backgroundColor: "#0E78F9" }}
					icon={<FaUserPlus />}
					cardHeading="UPCOMING MEETING"
					cardDesc="Join Via Invitation Link"
				/>
				<MeetingCard
					style={{ backgroundColor: "#7c0dec" }}
					icon={<SlCalender />}
					cardHeading="SCHEDULE MEETING"
					cardDesc="Plan Your Meeting"
				/>
				<MeetingCard
					style={{ backgroundColor: "#e59c0d" }}
					icon={<IoMdVideocam />}
					cardHeading="VIEW STREAMS"
					cardDesc="View Previous Recordings"
				/>
			</IconContext.Provider>
		</div>
	);
};

export default MeetingCards;

const MeetingCard = ({ style, icon, cardHeading, cardDesc }) => {
	const [hovered, setHovered] = useState(false);
	return (
		<>
			<div
				style={style}
				className={`flex flex-col justify-center  items-center  w-48  m-3  rounded-2xl h-48 transition duration-500 ease-in-out transform hover:scale-90 cursor-pointer ${
					hovered ? "shadow-md" : style.backgroundColor
				}`}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}>
				<p
					className={`text-center text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ease-in-out ${
						hovered ? "opacity-0" : "opacity-100"
					} `}>
					{icon}
				</p>
				<div
					className={`text-center  transition-opacity ease-in-out duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
						hovered ? "opacity-100" : "opacity-0"
					}`}>
					<p className=" font-black text-xl mb-3">{cardHeading}</p>
					<p className=" w-full font-medium text-xs text-gray-200">
						{cardDesc}
					</p>
				</div>
			</div>
		</>
	);
};
