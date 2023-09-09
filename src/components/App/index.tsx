import { useProjectContext } from "../../context";
import NewProjectContainer from "../NewProjectContainer";
import ProjectContainer from "../ProjectContainer";
import { Wrapper } from "./component.style";

const testId = {
  container: "appContainer",
};

const App = () => {
  const { projects } = useProjectContext();

  return (
    <Wrapper testId={testId.container}>
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
    </Wrapper>
  );
};

export default App;
