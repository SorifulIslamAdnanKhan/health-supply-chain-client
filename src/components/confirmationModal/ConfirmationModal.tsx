import { Button } from "../ui/button";

type ConfirmationModalProps = {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};
const ConfirmationModal = ({
  isOpen,
  onCancel,
  onConfirm,
}: ConfirmationModalProps) => {
  return (
    <>
      {isOpen && (
        <div className="bg-slate-300 h-[200px] rounded-lg">
          <div className="p-4">
            <p>Are you sure you want to delete this supply?</p>
            <div className="flex justify-evenly mt-20">
              <Button onClick={onCancel} className="bg-blue-600">
                Cancel
              </Button>
              <Button
                onClick={onConfirm}
                className="bg-red-600 hover:bg-red-500"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmationModal;
