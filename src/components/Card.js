import { useNavigate } from 'react-router-dom';

function Card(props) {
  let navigate = useNavigate();
  console.log(props);
  return props.list.map((board) => {
    return (
      <div className="board-item">
        <div className="board-img-box">
          <div className="board-item-image" style={{ backgroundImage: 'url(https://via.placeholder.com/300x200)' }}></div>
          <div className="board-item-info">
            <span className="like">
              <i className="fas fa-heart"></i>
              <span className="like-count">12</span>
            </span>
            <span className="comment">
              <i className="fas fa-comment"></i>
              <span className="comment-count">5</span>
            </span>
          </div>
        </div>
        <div className="board-item-text">
          <h3
            className="board-item-title"
            onClick={() => {
              navigate('/detail');
            }}
            style={{ cursor: 'pointer' }}
          >
            {board.title}
          </h3>
          <span className="board-item-author">{board.userLoginId}</span>
        </div>
      </div>
    );
  });
}

export default Card;
