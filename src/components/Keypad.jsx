import Key from "./Key";
import "../css/keypad.css";
import "../css/key.css";
import { evaluate } from "mathjs";
const classList = `calc-key`;

const Keypad = ({ keyValue, setValue }) => {
	//calculation function

	const calculations = () => {
		let answer = evaluate(keyValue);
		console.log(answer);
		setValue(answer);
		return answer;
	};

	return (
		<div className="keypad">
			<button color="#507d84" class={classList} onClick={() => setValue("")}>
				C
			</button>
			<Key color="#507d84" keyValue={keyValue} setValue={setValue}>
				+/-
			</Key>
			<Key color="#507d84" keyValue={keyValue} setValue={setValue}>
				%
			</Key>
			<Key color="#ea736e" keyValue={keyValue} setValue={setValue}>
				&divide;
			</Key>
			<Key color="black" keyValue={keyValue} setValue={setValue}>
				7
			</Key>
			<Key color="black" keyValue={keyValue} setValue={setValue}>
				8
			</Key>
			<Key color="black" keyValue={keyValue} setValue={setValue}>
				9
			</Key>
			<Key color="#ea736e" keyValue={keyValue} setValue={setValue}>
				*
			</Key>
			<Key color="black" keyValue={keyValue} setValue={setValue}>
				4
			</Key>
			<Key color="black" keyValue={keyValue} setValue={setValue}>
				5
			</Key>
			<Key color="black" keyValue={keyValue} setValue={setValue}>
				6
			</Key>
			<Key color="#ea736e" keyValue={keyValue} setValue={setValue}>
				-
			</Key>
			<Key color="black" keyValue={keyValue} setValue={setValue}>
				1
			</Key>
			<Key color="black" keyValue={keyValue} setValue={setValue}>
				2
			</Key>
			<Key color="black" keyValue={keyValue} setValue={setValue}>
				3
			</Key>
			<Key color="#ea736e" keyValue={keyValue} setValue={setValue}>
				+
			</Key>
			<Key
				color="black"
				expand={true}
				keyValue={keyValue}
				setValue={setValue}
			>
				0
			</Key>
			<Key color="black" keyValue={keyValue} setValue={setValue}>
				.
			</Key>
			<button color="#ea736e" class={classList} onClick={() => calculations()}>
				=
			</button>
		</div>
	);
};

export default Keypad;
