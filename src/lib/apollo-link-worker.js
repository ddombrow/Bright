// create Apollo Link that takes a Worker, wraps in a promise for the makePromise Op, then

import { ApolloLink } from "apollo-link";
import GunnyWorker from "../workers/gunny.worker.js";

//create worker as a singleton
let gunnyWorker = null;
const getGunnyWorker = () => {
	if (!gunnyWorker) {
		gunnyWorker = new GunnyWorker();
	}
	return gunnyWorker;
};

class GunnyWorkerLink extends ApolloLink {
	constructor(cb) {
		super();
	}
	request(operation, forward) {
		getGunnyWorker().postMessage(operation);
	}
}

export default GunnyWorkerLink;
