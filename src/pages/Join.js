function Join() {
  return (
    <div className="container">
      <h1 className="title">회원가입</h1>
      <div className="form-wrap">
        <form className="signup-form">
          <div className="form-group">
            <label for="username">아이디</label>
            <input type="text" id="userId" name="userId" required />
          </div>
          <div className="form-group">
            <label for="password">비밀번호</label>
            <input type="password" id="userPassword" name="userPassword" required />
          </div>
          <div className="form-group">
            <label for="confirm-password">비밀번호 확인</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
          </div>

          <div className="form-group">
            <label>성별</label>
            <div className="gender-wrap">
              <label for="gender-m" className="gender-box">
                <span>남자</span>
                <input type="radio" id="gender-m" name="userGender" value="M" />
              </label>
              <label for="gender-f" className="gender-box">
                <span>여자</span>
                <input type="radio" id="gender-f" name="userGender" value="F" />
              </label>
            </div>
          </div>

          <div className="form-group">
            <label for="email">이메일</label>
            <input type="email" id="userEmail" name="userEmail" required />
          </div>
          <div className="form-group">
            <label for="address">주소</label>
            <input type="text" id="userAddress" name="userAddress" required />
          </div>
          <button type="submit" className="submit-btn">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}

export default Join;
