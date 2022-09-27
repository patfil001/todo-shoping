import "./App.css";
import React from "react";
import { useState } from "react";

function ShoppingList() {
	const [inputValue, setInputValue] = useState("add items: ");
	const [addElement, setAddElement] = useState([]);

	const doList = addElement.map((element, index) => {
		return (
			<li>
				{element}
				<button
					onClick={() => {
						const del = [...addElement];
						del.splice(index, 1);
						setAddElement([...del]);
					}}>
					del
				</button>
				<button
					disabled={index === 0}
					onClick={() => {
						const tempVar = element;
						const prevVar = addElement[index - 1];
						addElement[index - 1] = tempVar;
						addElement[index] = prevVar;
						setAddElement([...addElement]);
					}}>
					⬆
				</button>
				<button
					disabled={index === addElement.length - 1}
					onClick={() => {
						const tempVar = element;
						const prevVar = addElement[index + 1];
						addElement[index + 1] = tempVar;
						addElement[index] = prevVar;
						setAddElement([...addElement]);
					}}>
					⬇
				</button>
			</li>
		);
	});

	return (
		<div>
			<h1>Shopping List</h1>
			<textarea>This is your personal shopping list</textarea>
			<div id='ramka'>{doList}</div>
			<div className='show'>{inputValue}</div>
			<input
				value={inputValue}
				onChange={element => {
					setInputValue(element.target.value);
				}}
			/>
			<button
				onClick={() => {
					setAddElement([...addElement, inputValue]);
					setInputValue(" ");
				}}>
				add
			</button>
		</div>
	);
}

function App() {
	return (
		<div className='App'>
			<ShoppingList />
		</div>
	);
}

export default App;
