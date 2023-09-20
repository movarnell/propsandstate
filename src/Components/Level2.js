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
	console.log(newName	)
	setUserInfo({ name: newName, age: 25 });
}

console.log(userInfo);


	return (
		<>
		
			<h1 className="redBorder">
				Hello {name}, You're getting old. {age} isn't young anymore!
			</h1>

			<input type="text" id="newFirstName" />
			<button onClick={() => updatingName(document.getElementById('newFirstName').value)}>Submit</button>
		</>
	);
}
