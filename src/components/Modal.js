import React from 'react';
import { Outlet } from 'react-router-dom';

/**
 * 모달 컴포넌트
 *
 * @param {boolean} props.isOpen - 모달창의 open 상태 값
 * @param {Function} props.onClose - 모달창 닫기 처리를 위한 콜백함수
 * @param {React.ReactNode} props.children - 모달창 내부 컨텐츠
 * @returns {React.ReactNode}
 */

function Modal({ isOpen, setOpen, selected }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button
          style={buttonStyle}
          onClick={() => {
            setOpen(false);
          }}
        >
          X
        </button>
        {selected}
      </div>
    </div>
  );
}

const buttonStyle = {
  position: 'absolute',
  top: '-45px',
  right: '-35px',
  background: 'none',
  border: 'none',
  fontSize: '40px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalStyle = {
  backgroundColor: '#fff',
  borderRadius: '5px',
  maxWidth: '1000px',
  minHeight: '100px',
  margin: '0 auto',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
};

export default Modal;
