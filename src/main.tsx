import App from './App';
import { fetchPlacesEpic } from './features/epics';
import placesReducer from './features/placesSlice';
import { configureStore } from '@reduxjs/toolkit';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createEpicMiddleware } from 'redux-observable';
import './index.css'

const epicMiddleware = createEpicMiddleware();
const store = configureStore({
  reducer: {
    places: placesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(epicMiddleware),
});

epicMiddleware.run(fetchPlacesEpic);

export type RootState = ReturnType<typeof store.getState>;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
