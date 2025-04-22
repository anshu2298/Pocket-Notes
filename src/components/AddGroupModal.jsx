import React, { useState } from "react";
import { addGroup } from "../utils/saveDataToLocalStorage";

const colorArray = [
  "#B38BFA",
  "#FF79F2",
  "#43E6FC",
  "#F19576",
  "#0047FF",
  "#6691FF",
];

const AddGroupModal = ({ isOpen, onClose, onSubmit }) => {
  const [groupName, setGroupName] = useState("");
  const [groupColor, setGroupColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const groupName = formData.get("groupName");

    if (!groupName.trim() || !groupColor) return;

    addGroup(groupName, groupColor);
    onSubmit();
    setGroupName("");
    setGroupColor("");
  };

  if (!isOpen) return null;

  return (
    <div
      className='modal-backdrop active'
      onClick={(e) =>
        e.target.className === "modal-backdrop active" &&
        onClose()
      }
    >
      <div className='modal'>
        <h2 className='modal-title'>Create New group</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label
              htmlFor='groupName'
              className='form-label'
            >
              Group Name
            </label>
            <input
              type='text'
              id='groupName'
              name='groupName'
              className='form-input'
              placeholder='Enter group name'
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <label className='form-label'>
              Choose colour
            </label>
            <div className='color-options'>
              {colorArray.map((color, index) => {
                const isSelected = groupColor === color;
                return (
                  <button
                    className='color-btns'
                    key={index}
                    type='button'
                    onClick={() => setGroupColor(color)}
                    style={{
                      backgroundColor: color,
                      border: isSelected
                        ? "3px solid black"
                        : "none",
                    }}
                  />
                );
              })}
            </div>
          </div>

          <div className='modal-footer'>
            <button
              type='submit'
              className='btn btn-primary'
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGroupModal;
