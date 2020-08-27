import { gql } from 'apollo-server-express';

const taskTypeDef = gql`
    extend type Query {
        tasks: [Task!],
        task(id: ID!): Task
    }

    input createTaskInput {
        name: String!,
        isCompleted: Boolean!,
        userID: ID!
    }

    extend type Mutation {
        createTask(input: createTaskInput!): Task
    }

    type Task {
        id: ID!,
        name: String!,
        isCompleted: Boolean!,
        userData: User
    }
`;

export default taskTypeDef;