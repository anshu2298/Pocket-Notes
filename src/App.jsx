import MainArea from "./components/MainArea";
import NotesPage from "./components/NotesPage";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";

const App = () => {
  const [groupData, setGroupData] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const fetchGroups = () => {
    const groups =
      JSON.parse(localStorage.getItem("groups")) || [];
    setGroupData(groups);

    if (selectedGroup) {
      const updatedSelected = groups.find(
        (grp) => grp.groupName === selectedGroup.groupName
      );
      setSelectedGroup(updatedSelected);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <div className='app'>
      <Sidebar
        group={groupData}
        onGroupAdd={fetchGroups}
        onGroupSelect={setSelectedGroup}
      />
      {selectedGroup ? (
        <NotesPage
          onNotesAdd={fetchGroups}
          group={selectedGroup}
        />
      ) : (
        <MainArea />
      )}
    </div>
  );
};

export default App;
