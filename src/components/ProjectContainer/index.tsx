import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  faSquareCaretDown,
  faSquareCaretUp,
  faSquarePen,
  faTimesRectangle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animated, useTransition } from "@react-spring/web";
import { useEffect, useState } from "react";
import { TTask, useProjectContext } from "../../context";
import { Colours } from "../../styles/colours";
import DistributionBar from "../DistributionBar";
import TaskButton from "../TaskButton";
import { Input } from "./component.style";

type TProductContainer = {
  title: string;
  description: string;
  tasks: TTask[];
  index: number;
  id?: string;
};

const copy = {
  limitAdvice: " consider breaking your projects down into managable chunks",
  limitReached: "10/10 Task limit reached - ",
};

const ProjectContainer = ({
  title,
  description,
  tasks,
  index,
  id,
}: TProductContainer) => {
  const { addTask, deleteProject } = useProjectContext();
  const [expanded, setExpanded] = useState<boolean>(true);

  const [displayTasks, setDisplayTasks] = useState<any>(tasks);
  const [newTask, setNewTask] = useState<string>("");

  useEffect(() => {
    setDisplayTasks(tasks);
  }, [tasks]);

  const [filter, setFilter] = useState<string | null>(null);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: { active: any; over: any }) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = tasks.map((e) => e.id).indexOf(active.id);
      const newIndex = tasks.map((e) => e.id).indexOf(over.id);
      setDisplayTasks(arrayMove(displayTasks, oldIndex, newIndex));
    }
  };

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleDelete = () => {
    id && deleteProject(id);
  };

  const handleFilter = (type: string) => {
    if (filter === type) {
      setFilter(null);
      setDisplayTasks(tasks);
    } else {
      setFilter(type);
      setDisplayTasks(tasks.filter((entry) => entry.type === type));
    }
  };

  const transition = useTransition(displayTasks, {
    from: { opacity: 0, marginTop: 5 },
    enter: { opacity: 1, maxHeight: 50, marginTop: 10 },
    leave: { opacity: 0, maxHeight: 0, marginTop: 0 },
  });

  const fadeInListItems = transition((style, item) => {
    return (
      <animated.div style={style}>
        <TaskButton
          id={item.id}
          title={item.title}
          type={item.type}
          index={index}
        />
      </animated.div>
    );
  });

  return (
    <div
      className={`mx-auto max-w-sm rounded overflow-hidden shadow-lg p-3 h-full`}
      style={{ backgroundColor: Colours.light, color: Colours.dark }}
    >
      {tasks.length > 0 ? (
        <DistributionBar
          tasks={tasks}
          onFilter={handleFilter}
          filter={filter}
        />
      ) : null}
      <div className="flex justify-between py-3 px-3">
        <FontAwesomeIcon icon={faSquarePen} size="2x" opacity={0.5} />
        <FontAwesomeIcon
          icon={expanded ? faSquareCaretUp : faSquareCaretDown}
          size="2x"
          onClick={handleExpand}
        />
        <FontAwesomeIcon
          icon={faTimesRectangle}
          size="2x"
          onClick={() => {
            handleDelete();
          }}
        />
      </div>

      <div className="px-2 pt-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
      <div
        // className="!visible hidden"
        // className={`transition-all duration-300 ${expanded ? `hidden` : "visible"}`}
        className={`transition-all duration-300 ${
          expanded ? `max-h-[1200px] opacity-100` : "max-h-[0px] opacity-0 q"
        }`}
      >
        <div className="px-2 pb-4">
          <p className={`text-base`}>{description}</p>
        </div>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={displayTasks.map((i: { id: string }) => i.id)}
            strategy={verticalListSortingStrategy}
          >
            {fadeInListItems}
          </SortableContext>
        </DndContext>
        {tasks.length < 10 ? (
          <div className="pt-5">
            <Input
              placeholder={"I should..."}
              label={"I should..."}
              value={newTask}
              onChange={(e) => {
                setNewTask(e.target.value);
              }}
              onClick={() => {
                if (newTask.length > 0) {
                  addTask(newTask, index);
                  setNewTask("");
                }
              }}
            />
          </div>
        ) : (
          <div className="pt-5">
            <span className={`text-base`}>
              <span className={`text-base font-bold`}>{copy.limitReached}</span>
              <span className={`text-base`}>{copy.limitAdvice}</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectContainer;
