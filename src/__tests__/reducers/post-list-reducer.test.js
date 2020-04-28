import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {

  test('Should return default state if no action type specified', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });


})