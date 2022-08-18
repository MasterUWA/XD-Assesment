import React from "react";
import styled, { css } from "styled-components";
import ExigentLogo from "../../assets/logo/logo_croped.png";

const LogoContainer = styled.div`
	display: flex;
	flex-direction: ${({ inline }) => (inline ? "row" : "column")};
	align-items: center;
`;

const LogoImg = styled.img`
	width: 8em;
	height: 8em;

	${({ inline }) =>
		inline &&
		css`
			width: 150px;
			height: auto;
			margin-right: 6px;
		`};

	${({ small }) =>
		small &&
		css`
			width: 4.8em;
			height: 4.8em;
		`};
`;


export function Logo(props) {
	const { inline, small } = props;

	return (
		<LogoContainer inline={inline} small={small}>
			<LogoImg src={ExigentLogo} inline={inline} small={small} />
		</LogoContainer>
	);
}
