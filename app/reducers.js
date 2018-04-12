import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import servicesReducer from 'services/reducers';

export default combineReducers({
    routing: routerReducer,
    services: servicesReducer,
});