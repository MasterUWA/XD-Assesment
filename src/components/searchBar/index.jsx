import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { faSearch, faStopCircle } from '@fortawesome/free-solid-svg-icons';
import { Button } from "../button";
import { Marginer } from "../../components/marginer";

const SearchContainer = styled.div`
	.search {
		display: flex;
	}

	.searchTerm {
		border: 3px solid #e1077c;
		padding: 1rem 25rem 1rem 1rem;
		outline: none;
		border-radius: 2rem 2rem 2rem 2rem;
		margin-right: 1rem;
	}

	/*Resize the wrap to see the search bar change!*/
	.wrap {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		/* change the margin to move where it is on the page */

	}

`;


export function Search() {
	return (
		<SearchContainer>
			<div className="wrap">
				<div className="search">
					<input placeholder="What are you looking for?" type="text" className="searchTerm" />
					<Button>Search<FontAwesomeIcon icon={faSearch}/></Button>
					<Marginer direction="horizontal" margin="4em" />
					<Button>Reset<FontAwesomeIcon icon={faStopCircle}/></Button>
				</div>
			</div>
		</SearchContainer>
		);
}
