import {
	faClipboardList,
	faPollH,
	IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { getTestId } from "../../helpers/utils";
import { Container, Icon, Li, Menu } from "./styles";

type SideBarProps = {
	id: number;
	label: string;
	actived: boolean;
	icon?: IconDefinition;
};

export default function SideBar() {
	const [items, setItems] = useState<Array<SideBarProps>>([
		{ id: 1, label: "My Notes", actived: true, icon: faClipboardList },
		{ id: 2, label: "New Note", actived: false, icon: faPollH },
	]);

	const handleMenu = (itemId: number) =>
		setItems((previous: SideBarProps[]) => {
			return [
				...previous.map((prev: SideBarProps) => {
					prev.id === itemId ? (prev.actived = true) : (prev.actived = false);
					return prev;
				}),
			];
		});

	return (
		<Container>
			<Menu>
				{items.map(({ id, label, actived, icon }: SideBarProps) => (
					<Li
						key={id}
						onClick={() => handleMenu(id)}
						actived={actived}
						value={id}
						data-testid={getTestId(label)}
					>
						<Icon icon={icon} />
						<span>{label}</span>
					</Li>
				))}
			</Menu>
		</Container>
	);
}
