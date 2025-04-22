import { getInitials } from "../utils/getInitials";

const GroupIcons = ({ group }) => {
  const initials = getInitials(group.groupName);
  return (
    <div className='grp-badge'>
      <div
        className='grp-icon'
        style={{ backgroundColor: group.color }}
      >
        <p className='icon-text'>{initials}</p>
      </div>
      <p className='grp-name'>{group.groupName}</p>
    </div>
  );
};

export default GroupIcons;
