import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

function BrighterApp({ data: { ideas, refetch } }) {
	return (
		<div>
			<button onClick={() => refetch()}>Refresh</button>
			<ul>{ideas && ideas.map(idea => <li key={idea.id}>{idea.text}</li>)}</ul>
		</div>
	);
}

export default graphql(gql`
	query IdeaAppQuery {
		idea @live {
			id
			text
		}
	}
`)(BrighterApp);
