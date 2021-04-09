const fetchUsers = require("./function");

test("User Fetched name should be Leanne Graham", () => {
	expect.assertion(1);
	return fetchUsers().then(({ data }) => {
		expect(data.name).toEqual("Leanne Graham");
	});
});
