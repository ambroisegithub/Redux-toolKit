
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store.js'
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
    // here am passing a store as property and store values will be store
    <Provider store={store}>
        <App />
    </Provider>


)
