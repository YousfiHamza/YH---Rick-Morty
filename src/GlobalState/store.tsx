import React from 'react';

const initialState = {
    episodes: [],
    favourites: []
};

interface IAction {
    type: String,
    payload: any
}

type stateType = typeof initialState;

export const Store = React.createContext<stateType | any>(initialState);


const reducer = (state: stateType, action: IAction): stateType => {
    switch(action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                episodes: action.payload
            }
        default:
            return state;
    }
};

export const StoreProvider = (props: any): JSX.Element => {
    const [state, dispatch] = React.useReducer(reducer,initialState)
    return <Store.Provider value={{state, dispatch}}>
        {props.children}
    </Store.Provider>
};

