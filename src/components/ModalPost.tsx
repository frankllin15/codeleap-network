import { useModal, usePosts } from "../redux/hooks";
import { DeletePost } from "./DeletePost";
import { EditPost } from "./EditPost";

type ModalProps = {
    onClose?: () => void;
};

export const ModalPost: React.FC<ModalProps> = ({ onClose }) => {
    const { modal, setModal } = useModal();

    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setModal({ isOpen: false, type: "", data: null });
        }
    };

    if (!modal.isOpen) {
        return null;
    }

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center ${
                modal ? "block" : "hidden"
            }`}
            onClick={handleOutsideClick}
        >
            <div className="bg-white w-11/12 md:w-[660px] rounded-2xl p-6">
                {modal.type === "update" ? (
                    <EditPost post={modal.data} />
                ) : modal.type === "delete" ? (
                    <DeletePost post={modal.data} />
                ) : null}
            </div>
        </div>
    );
};
