import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieSerh from './components/pages/Movie/Movie';
import TrendTodey from "./components/pages/TrendTodey/TrendTodey"
import Loadpage from './components/pages/Loadpage/Loadpage';
function App() {
  return (
  <>
<Header>

</Header>
<Routes>
        <Route path="/" element={<TrendTodey />}></Route>
          <Route path="movie" element={<MovieSerh />} />
          <Route path="/loadpage" element={<Loadpage />} />
      </Routes>
  </>
  );
}

export default App;
