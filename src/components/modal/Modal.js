function Modal({ setModalOpen }) {

    const closeModal = () => {
        setModalOpen(false);
    };
    

    return (
        <div className="w-300 h-300 z-auto absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 bg-gray-200 border rounded-lg">
            <button className="absolute right-2 top-2" onClick={closeModal}>
                X
            </button>
            <p>모달창입니다.</p>
        </div>
    );
};

export default Modal;