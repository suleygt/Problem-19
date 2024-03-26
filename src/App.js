import { useEffect, useState } from 'react'

// isOpen true olduğunda Modalı açalım
export default function App() {
  const [isOpen, setOpen] = useState(false)

  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }

  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {!isOpen && (
        <button style={{ padding: '10px 20px', fontSize: '16px', border: 'none', backgroundColor: '#006400', color: 'white', cursor: 'pointer' }} onClick={openModal}>
          Modalı aç
        </button>
      )}
      {isOpen && (
        <Modal onClose={closeModal}>
          <h1 style={{ padding: '20px', fontSize: '1.25rem', fontWeight: 'bold', color: '#006400' }}>Modal açık</h1>
          <button style={{ padding: '10px 20px', fontSize: '16px', border: 'none', backgroundColor: '#8B4513', color: 'white', cursor: 'pointer' }} onClick={closeModal}>Kapat</button>
        </Modal>
      )}
    </div>
  );
}

function Modal({ children, onClose }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <dialog open style={{ border: '2px solid #006400' }}>
      {children}
    </dialog>
  );
}