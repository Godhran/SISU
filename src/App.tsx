import "./App.css";
import ProjectContainer from "./components/ProjectContainer";
import { Colours } from "./styles/colours";
import NewProjectContainer from "./components/NewProjectContainer";
import { useProjectContext } from "./context";

const App = () => {
  const { projects } = useProjectContext();

  return (
    <>
      <div
        className="w-full min-h-screen p-5 pb-10 mx-auto gap-5 columns-1 sm:columns-2 md:columns-2 lg:columns-4 xl:columns-5  space-y-5"
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
