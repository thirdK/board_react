function Login() {
  return (
    <div className="login-container">
      <h1 className="login-title">로그인</h1>
      <form className="login-form">
        <div className="input-group">
          <label for="username">아이디</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="input-group">
          <label for="password">비밀번호</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button className="login-btn" type="submit">
          로그인
        </button>
      </form>
      <div className="signup-redirect">
        <span>
          아직 회원이 아니신가요? <a href="#">회원가입</a>
        </span>
      </div>
    </div>
  );
}

export default Login;
