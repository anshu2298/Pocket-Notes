import GroupIcons from "./GroupIcons";
import sendIcon from "../assets/send.png";
import arrow from "../assets/arrow.png";
import Notes from "./Notes";
import { useState } from "react";
import { addNoteToGroup } from "../utils/saveDataToLocalStorage";
const NotesPage = ({ group, onNotesAdd, openSidebar }) => {
  const [note, setNote] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const noteText = formData.get("note");
    addNoteToGroup(group.groupName, noteText);
    setNote("");
    onNotesAdd();
  };

  return (
    <div className='notes-page'>
      <div className='notes-page-header'>
        <button
          onClick={openSidebar}
          className='back-btn'
        >
          <img
            className='btn-img'
            src={arrow}
          />
        </button>
        <GroupIcons group={group} />
      </div>
      <div className='notes-area'>
        {group.notes.map((note, index) => {
          return (
            <Notes
              key={index}
              note={note}
            />
          );
        })}
      </div>
      <div className='notes-input-box'>
        <form
          onSubmit={handleSubmit}
          className='input-wrapper'
        >
          <textarea
            type='text'
            name='note'
            placeholder='Enter your text here....'
            className='custom-input'
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <button
            type='submit'
            disabled={!note.trim()}
            style={{
              opacity: !note.trim() ? 0.5 : 1,
            }}
          >
            <img
              src={sendIcon}
              className='arrow-icon'
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default NotesPage;
