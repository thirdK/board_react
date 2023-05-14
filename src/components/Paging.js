function Paging() {
  return (
    <div className="page-container">
      <ul className="page-box">
        <a href="" className="page-a">
          <li className="page-num prev">{'<'}</li>
        </a>
        <a href="" className="page-a">
          <li className="page-num active">1</li>
        </a>
        <a href="" className="page-a">
          <li className="page-num">2</li>
        </a>
        <a href="" className="page-a">
          <li className="page-num">3</li>
        </a>
        <a href="" className="page-a">
          <li className="page-num">4</li>
        </a>
        <a href="" className="page-a">
          <li className="page-num">5</li>
        </a>
        <a href="" className="page-a">
          <li className="page-num next">{'>'}</li>
        </a>
      </ul>
    </div>
  );
}

export default Paging;
