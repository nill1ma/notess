import { useState } from "react";
import { Container, Input, TextArea } from "./styles";

type FieldsProps = {
	[key: string]: string;
	name: string;
	label: string;
	type: string;
};

export default function Note() {
	const [fields, setFields] = useState<FieldsProps[]>([{} as FieldsProps]);

	const handleFields = (e: any) => {
		var {
			target: { name, value },
		} = e;
		setFields((previous: FieldsProps[]) => [
			...previous.map((prev: FieldsProps) => {
				if (name === prev.name) {
					[name] = value;
				}
				return prev;
			}),
		]);
	};

	return (
		<Container>
			{fields &&
				fields.length > 0 &&
				fields.map(({ name, label, type }: FieldsProps) => {
					<label>{label}</label>;
					return type === "text" ? (
						<Input onChange={(e) => handleFields(e)} name={name} id={name} />
					) : (
						<TextArea onChange={(e) => handleFields(e)} name={name} id={name} />
					);
				})}
		</Container>
	);
}
