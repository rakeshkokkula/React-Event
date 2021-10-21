import {createAction } from 'typesafe-actions';

export const ADD_ITEMS= createAction('ADD_ITEMS', payload=>payload)();
export const DELETE_ITEMS= createAction('DELETE_ITEMS', payload=>payload)();
export const GO_TO_CART= createAction('GO_TO_CART',payload=>payload)();


