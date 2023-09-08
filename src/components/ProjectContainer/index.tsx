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
  faTimesRectangle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animated, useTransition } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";
import { TTask, useProjectContext } from "../../context";
import { Colours } from "../../styles/colours";
import DistributionBar from "../DistributionBar";
import TaskItem from "../TaskItem";
import { Collapse, Input } from "./component.style";

type TProductContainer = {
  title: string;
  description: string;
  tasks: TTask[];
  index: number;
  id?: string;
};

const copy = {
  input: "I will...",
  item: "{number} item",
  items: "{number} items",
};

const ProjectContainer = ({
  title,
  description,
  tasks,
  index,
  id,
}: TProductContainer) => {
  const { addTask, deleteProject, projects } = useProjectContext();
  const [expanded, setExpanded] = useState<boolean>(true);
  const [taskHeight, setHeightOfTasks] = useState<number>(4000);
  const collapseDivRef = useRef<any>(null);
  const [displayTasks, setDisplayTasks] = useState<any>(tasks);
  const [newTask, setNewTask] = useState<string>("");

  const getContainerHeight = () => {
    setHeightOfTasks(collapseDivRef?.current?.clientHeight + 200);
  };

  useEffect(() => {
    getContainerHeight();
  }, [projects]);

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
    enter: { opacity: 1, maxHeight: 500, marginTop: 10 },
    leave: { opacity: 0, maxHeight: 0, marginTop: 0 },
  });

  const fadeInListItems = transition((style, item) => {
    return (
      <animated.div style={style}>
        <TaskItem
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
      className={`mx-auto max-w rounded overflow-hidden shadow-lg p-4 h-full`}
      style={{ backgroundColor: Colours.light, color: Colours.dark }}
    >
      {tasks.length > 0 ? (
        <DistributionBar
          tasks={tasks}
          onFilter={handleFilter}
          filter={filter}
        />
      ) : null}

      <div className="flex justify-between py-3">
        <FontAwesomeIcon
          icon={faTimesRectangle}
          size="2x"
          color='transparent'
        />
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

      <div className="mt-4">
        <div className="font-bold text-xl mb-2 text-ellipsis overflow-hidden" style={{fontFamily:'Montserrat'}}>
          {title}
        </div>
      </div>

      <Collapse maxHeight={taskHeight} expanded={expanded}>
        <div ref={collapseDivRef}>
          <div className="mb-4">
            <p className={`text-base break-words italic`} style={{fontFamily:'Montserrat'}}>{description}</p>
            <p className={`text-base font-semibold py-2`} style={{fontFamily:'Montserrat'}}>
              {tasks.length !== 1
                ? copy.items.replace("{number}", `${tasks.length}`)
                : copy.item.replace("{number}", `${tasks.length}`)}
            </p>
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
          <div className="pt-5">
            <Input
              placeholder={copy.input}
              label={copy.input}
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
        </div>
      </Collapse>
    </div>
  );
};

export default ProjectContainer;
