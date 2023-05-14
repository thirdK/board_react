import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
import Login from './Login';

function Header(props) {
  let navigate = useNavigate();

  return (
    <header className="header">
      <div className="headerContainer">
        <a className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          LOGO
        </a>
        <nav className="nav">
          <a
            className="navItem login"
            onClick={() => {
              props.setOpen(true);
              props.setSelected(<Login />);
            }}
            style={{ cursor: 'pointer' }}
          >
            로그인
          </a>
          <a className="navItem signup" onClick={() => navigate('/join')} style={{ cursor: 'pointer' }}>
            회원가입
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
