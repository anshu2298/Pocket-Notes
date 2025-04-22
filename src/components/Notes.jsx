import {
  formattedDate,
  formattedTime,
} from "../utils/date-time-formater";

const Notes = ({ note }) => {
  return (
    <div className='card'>
      <p className='card-text'>{note.message}</p>
      <div className='card-footer'>
        <span className='timestamp'>
          {formattedDate(note.timestamp)}
        </span>
        <span className='bullet'>•</span>
        <span className='timestamp'>
          {formattedTime(note.timestamp)}
        </span>
      </div>
    </div>
  );
};

export default Notes;
