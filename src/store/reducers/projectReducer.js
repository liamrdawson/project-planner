const initState = {
    projects: [
        {id: 1, title: 'Learn Redux', content: 'Learn more about Redux by building a project planner app.'},
        {id: 2, title: 'Thunk', content: 'Add Thunk to your project.'},
        {id: 3, title: 'Firebase', content: 'Set up a backend using Firebase.'}
    ]
};

const projectReducer = (state = initState, action) => {
    return state;
}

export default projectReducer;