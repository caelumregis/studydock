// temporary in memory data source
//
// this allows us to build and test the API contract before
// introducing MongoDB. Later, this array will be replaced by
// database queries

const users = [
    {
        id: 1,
        name: "Eric",
        role: "Student Developer"
    },
    {
        id: 2,
        name: "Mika",
        role: "DevOps Learner"
    }
];

function getAllUsers() {
    return users;
}

module.exports = {
    getAllUsers
};