// root React component from which all other components (blue html tags) flow

/*  Roles of the css files:
- index.css — Base/reset styles. Font defaults, body margins, heading sizes, things every page needs. Think of it as global defaults.
- App.css — Styles for App.tsx's layout and structure. The navbar, sidebar, main content area, etc.

But the split is just preference. Some projects dump everything in index.css. Others make a CSS file per component. As long as it stays organized, it doesn't matter.
*/

import './css/App.css'
import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Story from './pages/Story'

function App() {

  return (
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/data" element={<Story />} />
      </Routes>
    </main>
  )
}

export default App
