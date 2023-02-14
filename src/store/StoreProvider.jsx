import { createContext, useContext } from 'react';

import { Store } from '@/store/Store';

export const store = new Store();

export const StoreContext = createContext(store);

export const StoreProvider = ({ children }) => (
    <StoreContext.Provider value={store}>
        {children}
    </StoreContext.Provider>
);

export function useStore() {
    return useContext(StoreContext);
}
