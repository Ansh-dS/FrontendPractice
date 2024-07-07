import {Provider} from 'react-redux'; 
import {configureStore} from '@reduxjs/toolkit'; 
import combinedReducers from '../Services/Reducers/index1'
//
let store= configureStore({reducer:combinedReducers})