import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Logo } from "../logo";
import { Marginer } from "../marginer";

const NavbarContainer = styled.div`
	width: 100%;
	height: 70px;
	padding: 0 2em;
	background-color: #fff;
	color: #000;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const BrandContainer = styled.div``;

const AccessibilityContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const LinkButton = styled(Button)`
	background-color: transparent;
	border: none;
	color: #000;

	&:hover {
		background-color: transparent;
		border: none;
		color: rgb(212, 212, 212);
	}
`;

export function Navbar(props) {
	return (
		<NavbarContainer>
			<BrandContainer>
				<Logo inline />
			</BrandContainer>
			<AccessibilityContainer>
				<LinkButton small>Who We Help</LinkButton>
				<LinkButton small>What We Do</LinkButton>
				<LinkButton small>Who We Are</LinkButton>
				<LinkButton small>Join Our Team</LinkButton>
				<LinkButton small>Contact Us</LinkButton>
				<Marginer direction="vertical" margin="2em" />
				<Button small>Talk to Us</Button>
			</AccessibilityContainer>
		</NavbarContainer>
	);
}
