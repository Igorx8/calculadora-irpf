import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'
import { Menu } from './components/Menu'
import store, { persistor } from './store'
import { EmployeeView } from './views/EmployeeView'
import { IrffView } from './views/IrrfView'
import { injectStyle } from 'react-toastify/dist/inject-style'

injectStyle()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<IrffView />} />
            <Route path="/irrf" element={<IrffView />} />
            <Route path="/employee" element={<EmployeeView />}>
              <Route path=":id" element={<EmployeeView />} />
            </Route>
          </Routes>
          <ToastContainer autoClose={3000}/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
