import React from "react";

import {AuthContextProvider} from './auth';

export const AppProvider: React.FC = ({children}) => {
    return(
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    )
}