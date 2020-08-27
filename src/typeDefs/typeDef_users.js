import { gql } from 'apollo-server-express';

const userTypeDef = gql`
    extend type Query {
        users: [User!],
        user: User
    }

    type User {
        id: ID!,
        name: String!,
        email: String!,
        taskList: [Task!]
    }
`;

export default userTypeDef;