import { IModalHeaderProps } from "../Modal.types";

const ModalHeader: React.FC<IModalHeaderProps> = ({ onClose, title }) => {
  return (
    <header className="modal-header">
      <button
        onClick={onClose}
        className="text-softBlack focus:outline-none absolute left-6"
      >
        ✕
      </button>

      <h1 className="modal-header-title">{title}</h1>
    </header>
  );
};

export default ModalHeader;
