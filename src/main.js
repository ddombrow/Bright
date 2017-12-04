import Gun from "gun";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import GunnyWorkerLink from "./lib/apollo-link-worker";
import { ApolloProvider } from "react-apollo";
import { execute, makePromise } from "apollo-link";
import gql from "graphql-tag";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

(function() {
	const gunLink = new GunnyWorkerLink();
	const client = new ApolloClient({
		link: gunLink,
		cache: new InMemoryCache()
	});

	ReactDOM.render(
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>,
		document.getElementById("root")
	);
})();
