import Home from './pages/Home'
import ErrorPage from './pages/Error'
import Projects from './pages/Projects'

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<ErrorPage />} errorElement={<ErrorPage />} />
      <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
      <Route path="/projects" element={<Projects />} errorElement={<ErrorPage />} />
    </>
  )
)
