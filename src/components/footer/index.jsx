import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  position: relative;
`;

const AccessibilityContainer = styled.div`
  width: 80%;
  display: flex;
  border-top: 1px solid #cdcdcd;
  padding-top: 12px;
  padding-right: 10px;
  padding-left: 10px;
  color: #fff;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
	width: 90%;
	padding-left: 8px;
	padding-right: 8px;
  }
`;

const PrivacyContainer = styled.div`
  display: flex;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  color: #fff;
  font-size: 20px;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:not(:last-of-type) {
	margin-right: 11px;

	@media screen and (max-width: 480px) {
	  margin-right: 9px;
	}
  }

  @media screen and (max-width: 480px) {
	font-size: 14px;
  }

  &:hover {
	color: #adadad;
  }
`;

const Link = styled.a`
  color: #fff;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  font-size: 14px;

  &:not(:last-of-type) {
	margin-right: 11px;

	@media screen and (max-width: 480px) {
	  margin-right: 9px;
	}
  }

  @media screen and (max-width: 480px) {
	font-size: 12px;
  }

  &:hover {
	color: #adadad;
  }
`;

const RightsReserved = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 12px;
`;

export function Footer(props) {
  return (
	<FooterContainer>
	  <Marginer direction="vertical" margin="2em" />
	  <AccessibilityContainer>
		<PrivacyContainer>
		  <Link>Privacy Policy</Link>
		  <Link>Terms of Service</Link>
		  <Link>Contact</Link>
		</PrivacyContainer>
		<SocialContainer>
		<SocialIcon>
			<FontAwesomeIcon icon={faFacebook} />
		  </SocialIcon>
		  <SocialIcon>
			<FontAwesomeIcon icon={faLinkedin} />
		  </SocialIcon>
		  <SocialIcon>
			<FontAwesomeIcon icon={faInstagram} />
		  </SocialIcon>
		</SocialContainer>
	  </AccessibilityContainer>
	  <RightsReserved>&copy; 2022 Exigent | All Rights Reserved</RightsReserved>
	</FooterContainer>
  );
}
