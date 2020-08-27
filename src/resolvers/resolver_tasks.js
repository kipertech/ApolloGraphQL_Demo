import { users, tasks } from '../data';
import * as UUID from 'uuid';

const taskResolver = {
    Query: {
        tasks: () => tasks,
        task: (_, { id }) => tasks.find((taskItem) => taskItem.id === id),
    },
    Mutation: {
        createTask: (_, { input }) => {
            const newTask = Object.assign({}, input, { id: UUID.v4() } );
            tasks.push(newTask);
            return newTask;
        }
    },
    Task: {
        userData: (parent) => {
            const foundUser = users.find((user) => user.id === parent.userID);
            if (foundUser)
            {
                return Object.assign({}, foundUser, { name: `Censored (User ID: ${parent.userID})` })
            }
            else return null;
        }
    }
};

export default taskResolver;