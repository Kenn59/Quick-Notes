import Landing from "./routes/Landing";
import {Routes, Route, Navigate} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<login/>}/>
        <Route path="/signup" element={<signup/>}/>
      </Routes>
    </>
  );
}

export default App;
