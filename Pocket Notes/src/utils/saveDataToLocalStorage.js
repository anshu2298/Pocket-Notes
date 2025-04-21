const saveGroupsToLocalStorage = (groupsArray) => {
  localStorage.setItem(
    "groups",
    JSON.stringify(groupsArray)
  );
};

export const addGroup = (groupName, color) => {
  const existingGroups =
    JSON.parse(localStorage.getItem("groups")) || [];

  const newGroup = {
    groupName,
    color,
    notes: [],
  };

  existingGroups.push(newGroup);
  saveGroupsToLocalStorage(existingGroups);
};

export const addNoteToGroup = (groupName, message) => {
  const existingGroups =
    JSON.parse(localStorage.getItem("groups")) || [];
  const timestamp = new Date().toISOString();

  const updatedGroups = existingGroups.map((group) => {
    if (group.groupName === groupName) {
      return {
        ...group,
        notes: [...group.notes, { message, timestamp }],
      };
    }

    return group;
  });
  saveGroupsToLocalStorage(updatedGroups);
};
