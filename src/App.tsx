import "./App.css";
import ProjectContainer from "./components/ProjectContainer";
import { Colours } from "./styles/colours";
import NewProjectContainer from "./components/NewProjectContainer";
import { useProjectContext } from "./context";
import Modal from "./components/Modal";

const App = () => {
  const { projects } = useProjectContext();

  return (
    <>
      <div
        // className="min-h-screen p-5 flex flex-wrap"
        className="w-full min-h-screen p-5 pb-10 mx-auto mb-10 gap-5 columns-1 sm:columns-2 md:columns-4 lg:columns-6  space-y-5"
        style={{ backgroundColor: Colours.dark }}
      >
        <NewProjectContainer />
        {projects.map(({ title, description, tasks, id }, index) => (
          <ProjectContainer
            title={title}
            description={description}
            tasks={tasks}
            key={`project_card_${index}`}
            index={index}
            id={id}
          />
        ))}
      </div>
    </>
  );
};

export default App;
