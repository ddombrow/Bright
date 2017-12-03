import { ApolloLink } from "apollo-link";

class ConsoleLink extends ApolloLink {
	constructor(cb) {
		super();
	}
	request(operation, forward) {
		console.log("operation:", operation);
	}
}

export default ConsoleLink;
