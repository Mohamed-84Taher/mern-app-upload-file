import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home'
import CardList from './components/cardList/CardList'
import AddEdit from './components/addEdit/AddEdit'
import NotFound from './components/NotFound';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
  <h1>Ws Mern</h1>
  <Routes>
    <Route exact path='/'  element={<Home />} />
    <Route exact path='/lists'  element={<CardList />} />
    <Route exact path='/addEdit'  element={<AddEdit />} />
    <Route path='*'  element={<NotFound />} />
  </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
