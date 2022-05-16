import React from "react";

import {AuthContextProvider} from './auth';
import {ToastProvider} from './toast';

export const AppProvider: React.FC = ({children}) => {
    return(
        <AuthContextProvider>
            <ToastProvider>
                {children}
            </ToastProvider>
        </AuthContextProvider>
    )
}