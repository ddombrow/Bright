const graphqlGun = require("graphql-gun");
const Gun = require("gun");
const gql = require("graphql-tag");

const gun = Gun();

const idea = gun.get("idea");
idea.put({ id: "1234", text: "Do the thing." });
idea.put({ id: "2341", text: "Do the other thing." });

self.addEventListener("message", event => {
	const operation = event.data;
	console.log(operation);

	graphqlGun(operation.query, gun).then(function(results) {
		console.log("results: ", results);
	});
});
