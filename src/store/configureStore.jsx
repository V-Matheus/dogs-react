import { combineReducers, configureStore } from '@reduxjs/toolkit';
import photo from './photo';
import token from './token';
import user from './user';
import feed from './feed';
import ui from './ui';
import photoPost from './photoPost';

const middleware = (getDefaultMiddleware) => [...getDefaultMiddleware()];
const reducer = combineReducers({ photo, photoPost, token, user, feed, ui });
const store = configureStore({ reducer, middleware });

export default store;
