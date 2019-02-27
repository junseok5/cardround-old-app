import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import penderMiddleware from "redux-pender"
import * as modules from "./modules"

const reducers = combineReducers(modules)
const middlewares = [penderMiddleware()]

const configure = preloadedState =>
    createStore(reducers, preloadedState, applyMiddleware(...middlewares))

export default configure
