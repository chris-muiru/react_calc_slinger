import "../css/key.css";

const Key = ({ color, expand = false, keyValue, setValue, children, id }) => {
	const handleClick = () => {
		setValue(keyValue + children);
	};

	const classList = `calc-key`;
	return (
		<button
			className={classList}
			style={{ color }}
			id="btn-key"
			onClick={handleClick}
		>
			{children}
		</button>
	);
};

export default Key;
