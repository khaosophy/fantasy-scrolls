import Modal from 'react-modal'; /* react-modal does not support typescript */
Modal.setAppElement('#root');

const InstructionsModal = (props) => {
  const { isOpen, closeModal } = props;
  return (
    <Modal
      isOpen={isOpen}
    >
      <div className="d-flex align-items-center justify-content-between">
        <h2>How does one use this scroll maker?</h2>
        <button
          className="btn btn-link"
          onClick={closeModal}
        >
          Close
        </button>
      </div>

      <div>
        {/* todo: write up how to use */}
      </div>
    </Modal>
  )
}

export default InstructionsModal;