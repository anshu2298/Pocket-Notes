import { useState } from "react";
import GroupIcons from "./GroupIcons";
import AddGroupModal from "./AddGroupModal";
const Sidebar = ({ group, onGroupAdd, onGroupSelect }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    setIsModalOpen(false);
    onGroupAdd();
  };
  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <h1>Pocket Notes</h1>
      </div>
      <AddGroupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
      <div className='sidebar-content'>
        {group.map((grp, index) => {
          return (
            <button
              className='grp-btn'
              key={index}
              onClick={() => onGroupSelect(grp)}
            >
              <GroupIcons group={grp} />
            </button>
          );
        })}
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className='add-note-btn'
      >
        <span>+</span>
      </button>
    </div>
  );
};

export default Sidebar;
