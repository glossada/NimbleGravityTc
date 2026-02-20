import { BrowserRouter, Routes, Route } from 'react-router-dom'
import JobsView from './views/JobsView'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobsView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
