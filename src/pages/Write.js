function Write() {
  return (
    <>
      <h1 className="title">게시물 작성</h1>
      <div className="form-wrap">
        <form className="new-post-form" action="" method="post" encType="multipart/form-data">
          <div className="form-group">
            <label for="post-title">제목</label>
            <input type="text" id="post-title" name="post-title" required />
          </div>
          <div className="form-group">
            <label for="post-content">내용</label>
            <textarea id="post-content" name="post-content" rows="10" required></textarea>
          </div>
          <div className="form-group">
            <ul className="file-wrap">
              <li>
                <input type="file" id="post-image" name="post-image" accept="image/*" multiple />
              </li>
              <li className="img-list"></li>
              <li className="img-list"></li>
              <li className="img-list"></li>
              <li className="img-list"></li>
            </ul>
          </div>
          <button type="submit" className="submit-btn">
            게시물 작성
          </button>
        </form>
      </div>
    </>
  );
}

export default Write;
