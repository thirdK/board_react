function Error() {
  return (
    <div className="container">
      <div className="error-container">
        <h1>잘못된 접근입니다.</h1>
        <p>아래 버튼을 눌러 로그인 페이지나 메인 페이지로 이동하세요.</p>
        <div>
          <a href="/user/login">로그인</a>
          <a href="/board/boardList">메인 페이지</a>
        </div>
      </div>
    </div>
  );
}

export default Error;
