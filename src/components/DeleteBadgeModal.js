import React from "react";
import Modal from "./Modal";

function DeleteBadgeModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteBadgeModal">
        <h1>Are you sure?</h1>
        <p>You're about to delete this badge.</p>
        <div>
          <button className="btn btn-danger mr-2"> Delete</button>
          <button className="btn btn-primary"> Cancel</button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;
