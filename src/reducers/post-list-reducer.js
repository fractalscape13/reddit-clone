export default (state = {}, action => {
  const {subject, content, username, brownies, timestamp, image, id} = action;
  switch (action.type){
    case 'ADD_POST':
      return Object.assign({}, state, {
        [id] : {
        subject: subject,
        content: content,
        username: username,
        brownies: brownies,
        timestamp: timestamp,
        image: image,
        id: id
        }
      });
    case 'DELETE_POST':
      const newState = {...state};
      delete newState[id];
      return newState;
    default: 
      return state;
  }
});
