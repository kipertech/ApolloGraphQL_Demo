import { users, tasks } from '../data';
import * as UUID from 'uuid';

const userResolver = {
    Query: {
        users: () => users,
        user: (_, { id }) => users.find((item) => item.id === id)
    },
    Mutation: {
        
    },
    User: {
        taskList: (parent) => tasks.filter((task) => task.userID === parent.id)
    }
}

export default userResolver;