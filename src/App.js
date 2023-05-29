import logo from './logo.svg';
import './App.css';
// import Expenses from './Expenses';
import Navbar from './Navbar';
// import Cta from './Cta';
import AllRoutes from './Routers/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>

          {/*   <Cta/> */}
     {/* <Expenses/> */}
    </div>
  );
}

export default App;
