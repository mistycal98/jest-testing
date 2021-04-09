const axios = require("axios");

const fetchUser = () => {
	axios
		.get("https://jsonplaceholder.typicode.com/users/1")
		.then(({ data }) => data.name)
		.catch((error) => console.log(error));
};

fetchUser();

module.exports = { fetchUser };
