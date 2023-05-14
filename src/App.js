import './App.css';
import './css/card.css';
import './css/header.css';
import './css/paging.css';
import './css/error.css';
import './css/join.css';
import './css/login.css';
import './css/write.css';
import './css/detail.css';
import styles from './css/main.module.css';
import Header from './components/Header.js';
import Main from './pages/Main.js';
import Modal from './components/Modal.js';
import Error from './pages/Error.js';
import Join from './pages/Join';
import Write from './pages/Write';
import Detail from './pages/Detail';
import { useState } from 'react';

import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
function App() {
  let [isOpen, setOpen] = useState(false);
  let [selected, setSelected] = useState();

  return (
    <div className="App">
      <Header isOpen={isOpen} setOpen={setOpen} setSelected={setSelected} />
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Error />} />
          <Route path="/join" element={<Join />} />
          <Route path="/write" element={<Write />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </div>
      <Modal isOpen={isOpen} setOpen={setOpen} selected={selected}></Modal>
    </div>
  );
}

export default App;
