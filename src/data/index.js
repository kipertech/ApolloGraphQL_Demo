module.exports = {
    users: [
        {
            id: "1",
            name: "Kelvin",
            email: "kelvin@launchdeck.org"
        },
        {
            id: "2",
            name: "John",
            email: "john@launchdeck.org"
        },
        {
            id: "3",
            name: "Peter",
            email: "peter@launchdeck.org"
        },
        {
            id: "5",
            name: "Sara",
            email: "sara@launchdeck.org"
        },
    ],
    tasks: [
        {
            id: "1",
            name: "Work",
            isCompleted: false,
            userID: "3"
        },
        {
            id: "2",
            name: "Eat",
            isCompleted: true,
            userID: "1"
        },
        {
            id: "3",
            name: "Shopping",
            isCompleted: false,
            userID: "4"
        },
        {
            id: "4",
            name: "Gym",
            isCompleted: false,
            userID: "2"
        }
    ]
}