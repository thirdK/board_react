function Detail() {
  return (
    <>
      <h1 className="title">자유 게시판</h1>
      <div className="post-wrap">
        <div className="post-wrap__box">
          <div className="post-header">
            <h2 className="post-title">게시물 제목</h2>
            <p className="post-info">작성자: 홍길동 | 작성일: 2023-03-31 | 수정일 : 2023-04-01</p>
          </div>
          <div className="post-content">게시물 내용</div>
          <div className="post-images">
            {/* <!-- 이미지 예시 --> */}
            <img src="example1.jpg" alt="첨부 이미지 1" />
            <img src="example2.jpg" alt="첨부 이미지 2" />
            {/* <!-- /이미지 예시 --> */}
          </div>
        </div>
        <div className="btn-wrap">
          <button type="button" className="btn-modify">
            수정
          </button>
          <button type="button" className="btn-remove">
            삭제
          </button>
          <button type="button" className="btn-back">
            뒤로 가기
          </button>
        </div>
        {/* 리플 컴포넌트 위치 */}
      </div>
    </>
  );
}

export default Detail;
