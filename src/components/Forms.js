import React, { useState } from "react";

function Form(props) {

	const [name, setName] = useState("");

	/**
	 * handleSubmit
	 * 
	 * @param {*} e 
	 */
	function handleSubmit(e) {
		// prevent default behavior of form submit event
		e.preventDefault();
		// alert("Hello, world!");
		props.addTask(name);
		// 
		setName("");
	}

	/**
	 * handleChange
	 * 
	 * @param {*} e 
	 */
	function handleChange(e) {
		setName(e.target.value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2 className="label-wrapper">
				<label htmlFor="new-todo-input" className="label__lg">
					What needs to be done?
				</label>
			</h2>
			<input
				type="text"
				id="new-todo-input"
				className="input input__lg"
				name="text"
				autoComplete="off"
				value={name}
				onChange={handleChange}
			/>
			<button type="submit" className="btn btn__primary btn__lg">
				Add
			</button>
		</form>
	);
}

export default Form;