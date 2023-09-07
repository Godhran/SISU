import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { v4 as uuid } from "uuid";

export type TTask = {
  title: string;
  type: string;
  id: string;
};

export type TProject = {
  title: string;
  description: string;
  id?: string;
  tasks: TTask[];
};

export type TContext = {
  projects: TProject[];
  setLocalProjects: (value: TProject[]) => void;
  getLocalProjects: () => void;
  setProjects: (value: TProject[]) => void;
  createProject: (value: TProject) => void;
  addTask: (value: string, index: number) => void;
  changeTaskType: (value: string, index: number) => void;
  deleteProject: (value: string) => void;
};

const initialState = {
  projects: [],
  setLocalProjects: (value: TProject[]) => value,
  getLocalProjects: () => {},
  setProjects: (value: TProject[]) => value,
  createProject: (value: TProject) => value,
  addTask: (value: string, index: number) => value,
  changeTaskType: (value: string, index: number) => value,
  deleteProject: (value: string) => value,
};

const ProjectContext = createContext<TContext>(initialState);

export const useProjectContext = () => useContext(ProjectContext);

const localStorageKey = "projects";

const cycleType = (type: string) => {
  switch (type) {
    case "completed":
      return "task";
    case "task":
      return "warning";
    case "warning":
      return "priority";
    default:
      return "completed";
  }
};

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<TProject[]>([]);
  const localVariables = useMemo(() => {
    return {
      localStorageProjects: localStorage.projects,
    };
  }, []);

  // localStorage.clear();
  useEffect(() => {
    const parsedLocalStorageProjects = localVariables.localStorageProjects
      ? JSON.parse(localVariables.localStorageProjects)
      : [];

    setProjects(parsedLocalStorageProjects);
  }, [localVariables]);

  const setLocalProjects = (item: TProject[]) => {
    localStorage.setItem(localStorageKey, JSON.stringify(item));
  };

  const getLocalProjects = () => {
    const localProjectJSON = localStorage.getItem(localStorageKey);
    if (localProjectJSON) {
      JSON.parse(localProjectJSON);
    }
    return [];
  };

  const createProject = ({
    title,
    description,
    tasks,
    id = uuid(),
  }: TProject) => {
    setProjects([...projects, { title, description, tasks, id }]);

    const parsedLocalStorageProjects = localVariables.localStorageProjects
      ? JSON.parse(localVariables.localStorageProjects)
      : [];

    setLocalProjects([
      ...parsedLocalStorageProjects,
      { title, description, tasks, id },
    ]);
  };

  const addTask = (task: string, index: number) => {
    const targetProject = { ...projects[index] };
    const rest = [...projects];
    targetProject.tasks.push({ title: task, type: "task", id: uuid() });
    rest[index] = targetProject;
    setLocalProjects(rest);
    setProjects(rest);
  };

  const deleteProject = (uuid: string) => {
    const rest = [...projects].filter((project) => project.id !== uuid);
    setLocalProjects(rest);
    setProjects(rest);
  };

  const changeTaskType = (uuid: string, index: number) => {
    const rest = [...projects];
    const taskIndex = projects[index].tasks.findIndex((task: TTask) => {
      return task.id === uuid;
    });
    rest[index].tasks[taskIndex].type = cycleType(
      rest[index].tasks[taskIndex].type
    );
    setLocalProjects(rest);
    setProjects(rest);
  };

  const exports = {
    setLocalProjects,
    getLocalProjects,
    projects,
    setProjects,
    createProject,
    addTask,
    changeTaskType,
    deleteProject,
  };

  return (
    <ProjectContext.Provider value={exports}>
      {children}
    </ProjectContext.Provider>
  );
};
