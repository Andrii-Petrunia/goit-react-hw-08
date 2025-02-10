import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import Modal from "../Modal/Modal";
import ContactEditForm from "../ContactEditForm/ContactEditForm";
import { toast } from "react-hot-toast";

export default function Contact({ id, name, number }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteContact(id))
      .then(() => toast.success("Contact deleted successfully"))
      .catch(() => toast.error("Failed to delete contact"));
    setIsModalOpen(false);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleCancelEdit = () => {
    setIsEditMode(false);
  };

  return (
    <li>
      <span>
        {name}: {number}
      </span>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>

      {isModalOpen && (
        <Modal
          contactName={name}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}

      {isEditMode && (
        <ContactEditForm
          contact={{ id, name, number }}
          onCancel={handleCancelEdit}
        />
      )}
    </li>
  );
}