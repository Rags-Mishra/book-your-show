import ShowsState from "./context/shows/ShowsState";
import AllShows from "./screens/AllShows";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ShowDescription from "./screens/ShowDescription";

function App() {
  return (
    <>
      <ShowsState>
        <Router>
          <Navbar/>

          <Routes>
            <Route exact path="/" element={<AllShows/>}/>
            <Route
              exact
              path="/show-description"
              element={<ShowDescription />}
            />
          </Routes>
        </Router>
      </ShowsState>
    </>
  );
}

export default App;
