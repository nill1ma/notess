import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

type MenuProps = {
	actived: boolean;
};

export const Container = styled.div`
	display: flex;
	width: 20vw;
	height: 100vh;
`;

export const Menu = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	border-right: 1px solid #2c2c2c;
`;
export const Icon = styled(FontAwesomeIcon)``;

export const Li = styled.li<MenuProps>`
	display: flex;
	text-decoration: none;
	padding: 0.5em;
	cursor: pointer;
	background-color: ${({ actived }) => (actived ? "#2c2c2c" : "#fff")};
	color: ${({ actived }) => (actived ? "#fff" : "#2c2c2c")};
	${Icon} {
		color: ${({ actived }) => (actived ? "#fff" : "#2c2c2c")};
	}
	span {
		padding-left: 1em;
	}
`;
