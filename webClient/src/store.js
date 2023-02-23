import { configureStore } from '@reduxjs/toolkit';

// import testReducer from 'reducers/testReducer'; 
import subCategorySlice from '@/reducers/subCategorySlice';

export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    reducer: {
        subCategories: subCategorySlice,
    }
});
