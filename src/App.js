import "./App.css";
import React from "react";
import { useState } from "react";
import { renderIntoDocument } from "react-dom/test-utils";

function ShoppingEntry(props) {
	return (
		<li>
			{props.element}
			<button
				onClick={() => {
					const del = [...leftStack];
					del.splice(index, 1);
					props.setLeftStack([...del]);
				}}>
				del
			</button>
			<button
				disabled={index === 0}
				onClick={() => {
					const tempVar = element;
					const prevVar = leftStack[index - 1];
					leftStack[index - 1] = tempVar;
					leftStack[index] = prevVar;
					setLeftStack([...leftStack]);
				}}>
				⬆
			</button>
			<button
				disabled={index === leftStack.length - 1}
				onClick={() => {
					const tempVar = element;
					const prevVar = leftStack[index + 1];
					leftStack[index + 1] = tempVar;
					leftStack[index] = prevVar;
					setLeftStack([...leftStack]);
				}}>
				⬇
			</button>
			<button
				onClick={() => {
					setRightStack([...rightStack, element]);
				}}>
				➡
			</button>
		</li>
	);
}

function ShoppingList() {
	const [inputValue, setInputValue] = useState("add items: ");
	const [leftStack, setLeftStack] = useState([]);
	const [rightStack, setRightStack] = useState([]);

	const mappedAddElement = leftStack.map((element, index) => (
		<ShoppingEntry element={element} index={index} leftStack={leftStack} />
	));

	return (
		<div>
			<h1>Shopping List</h1>
			<textarea>This is your personal shopping list</textarea>
			<div className='container'>
				<div className='item'>{mappedAddElement}</div>
				<p></p>
				<div className='item'>{rightStack}</div>
			</div>
			<div className='show'>{inputValue}</div>
			<p></p>
			<input
				value={inputValue}
				onChange={element => {
					setInputValue(element.target.value);
				}}
			/>
			<button
				onClick={() => {
					setLeftStack([...leftStack, inputValue]);
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
