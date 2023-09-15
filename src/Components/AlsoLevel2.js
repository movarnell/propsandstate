//* This sits below the App.js Component in the React Tree, so any information
//^ THIS COMPONENT HAS A BLUE BORDER

//* you need to use in it must be passed down as a prop. It is best to keep
//* the prop names the same to prevent confusing yourself later on.
export default function AlsoLevel2({ userInfo }) {
console.log(userInfo)

	const { name, age } = userInfo; //* If you haven't covered destructuring you can
	//* just use userInfo.name and userInfo.age instead of destructuring.

	return (
		<>
			<h1 className="blueBorder">
				Maybe {age} doesn't feel Old, but for {name} {age} isn't young anymore!
			</h1>
		</>
	);
}
