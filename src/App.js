import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="Login" element={<Login />} />

          <Route path="Dashboard" element={<Dashboard />} />

        </Route>
      </Routes>
    </BrowserRouter >
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Login />
//       </header>
//     </div>
//   );
// }




