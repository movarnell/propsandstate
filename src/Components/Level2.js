import React from "react";
// import {consoleCats} from "../consoleCats";
//! THIS COMPONENT HAS A RED BORDER
//* This sits below the App.js Component in the React Tree, so any information
//* you need to use in it must be passed down as a prop. It is best to keep
//* the prop names the same to prevent confusing yourself later on.

export default function Level2({ userInfo , setUserInfo }) {
	console.log("file: Level2.js:5   Level2   userInfo:", userInfo);

	const { name, age } = userInfo; //* If you haven't covered destructuring you can
	//* just use userInfo.name and userInfo.age instead of destructuring.

function updatingName(newName) {
	setUserInfo({ ...userInfo, name: newName });
}

console.log(userInfo);


	return (
		<>
		
			<h1 className="redBorder">
				Hello {name}, You're getting old. {age} isn't young anymore!
			</h1>
		</>
	);
}
