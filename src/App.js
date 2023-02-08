import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';
import { PublicRoute } from './route/Route';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashbord from './layout/Main';

import { PrivateRoute } from './route/PrivateRoute';
import MainLayout from './private/MainLayout';
import Main2 from './private/Main';

function App() {
  let accessType = 0
  return (
    <>
      {/* <BrowserRouter>
        {!x === 1 ?
          <Main>
            <Routes>
              {PublicRoute.map((item) => (
                <Route key={item.id} path={item.path} element={item.element} />
              ))}
            </Routes>
          </Main> :
          <Dashbord>
          </Dashbord>}
      </BrowserRouter> */}
      {/* <Main/> */}

      <BrowserRouter>
        {/* เงื่อนไข */}
        {accessType == 0 ? (
          <Main>
            <Routes>
              {PublicRoute.map((item) => (
                <Route key={item.id} path={item.path} element={item.element} />
              ))}
            </Routes>
          </Main>) :
          (<Main2>
            <Routes>
              {PrivateRoute.map((item) => (
                <Route key={item.id} path={item.path} element={item.element} />
              ))}
            </Routes>
          </Main2>)}
      </BrowserRouter>
    </>
  );
}

export default App;
