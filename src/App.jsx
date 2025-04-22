import MainArea from "./components/MainArea";
import NotesPage from "./components/NotesPage";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";

const App = () => {
  const [groupData, setGroupData] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
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
        manageSidebar={setIsSidebarOpen}
        isVisible={isSidebarOpen}
        selectedGroup={selectedGroup}
      />
      {selectedGroup ? (
        <NotesPage
          onNotesAdd={fetchGroups}
          group={selectedGroup}
          openSidebar={toggleSidebar}
        />
      ) : (
        <MainArea />
      )}
    </div>
  );
};

export default App;
