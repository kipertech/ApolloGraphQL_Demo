import { gql } from 'apollo-server-express';

import userTypeDef from './typeDef_users';
import taskTypeDef from './typeDef_tasks';

const typeDefs = gql`
    type Query {
        _: String
    }

    type Mutation {
        _: String
    }
`;

export default [typeDefs, userTypeDef, taskTypeDef];