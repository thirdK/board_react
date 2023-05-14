import styles from '../css/main.module.css';
import Card from '../components/Card';
import Paging from '../components/Paging';
import { useNavigate } from 'react-router-dom';
import getList from '../modules/board';
import { useEffect, useState } from 'react';
function Main() {
  let navigate = useNavigate();
  let [list, setList] = useState([]);
  useEffect(() => {
    getList(setList);
  }, []);

  return (
    <>
      <h1 className={styles.title}>커뮤니티 게시판</h1>
      <div className={styles.btnWrap}>
        <button className={styles.addPostBtn} onClick={() => navigate('/write')}>
          새 게시글 작성
        </button>
      </div>
      <div className={styles.board}>
        <Card list={list} />
      </div>

      <Paging />
    </>
  );
}

export default Main;
