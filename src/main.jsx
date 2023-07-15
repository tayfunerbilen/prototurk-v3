import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {Provider} from 'react-redux';
import {
	QueryClient,
	QueryClientProvider
} from '@tanstack/react-query'
import routes from './routes';
import store from './stores';
import './assets/css/style.css'
import "./utils/language"
import {worker} from "~/mocks/browser";

const queryClient = new QueryClient()

// if (import.meta.env.MODE === 'development') {
	worker.start()
// }

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={routes}/>
		</QueryClientProvider>
	</Provider>
)
