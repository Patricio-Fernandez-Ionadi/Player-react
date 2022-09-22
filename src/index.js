import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './AppRouter'
import './index.css'

const domelement = document.getElementById('root')
const root = ReactDOM.createRoot(domelement)

root.render(<AppRouter />)
