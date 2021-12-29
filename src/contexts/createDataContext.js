import React, { useReducer } from 'react';

export default (reducers, actions, defaultValues) => {
    const Context  = React.createContext();

    const Provider = ({children}) => {
        const[state,dispatch] = useReducer(reducers,defaultValues);

        const bondActions = {};
        for (const key in actions) {
           bondActions[key]=actions[key](dispatch);
        }

        return(
            <Context.Provider value={{state, ...bondActions}}>{children}</Context.Provider>
        );
    };
    return {Context: Context, Provider:Provider};
};