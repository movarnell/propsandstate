import { useState } from "react"; //TODO <-- Don't forget to import useState from react. IF you don't import it, you can't use it.
import Level2 from "./Components/Level2"; //TODO <-- Don't forget to import the Component you are going to use as well, or you can't use it!
import "./App.css";
import AlsoLevel2 from "./Components/AlsoLevel2";
import image from "./Components/Images/Screenshot 2023-05-19 at 9.25.42 AM.png";
import MapEx from "./Components/MapEx";

function App() {
	//* We are going to create state here, and pass it down to the Level2 Component
	//* as a prop. We will also pass down a function that will update the state.
	//* You can pass down almost anything as a prop, including functions.
	//! First I am going to make a user so that we can set state to it to start with.
	//! When you set state to something where we have {user1} below, it will be an object from the very launch of the app, it won't stay that if you use the useState function to change it.

	const [userInfo, setUserInfo] = useState({ name: "John", age: 25 });
	const [array, setArray] = useState(["John", "Jane", "Joe", "Jill"]);

	console.log("file: App.js:13   App   userInfo:", userInfo);

	//* Now below we are going to call our Level2 Component & AlsoLevel2 Component, and pass down the state {userInfo} as props so that we can use them in both.Without passing them down as a prop it is like they don't exist in the Level2 Component.
	return (
		<div className="App">
			<MapEx array={array} setArray={setArray} />
			<Level2 userInfo={userInfo} setUserInfo={setUserInfo} />
			<AlsoLevel2 userInfo={userInfo} />
			<img src={image} alt="screenshot" className="imageStyle" />
		</div>
	);
}

export default App;
