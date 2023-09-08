import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { faTimesSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useProjectContext } from "../../context";
import { Colours } from "../../styles/colours";
import { Task } from "./component.style";

const TaskItem = ({
  id,
  title,
  type,
  index,
}: {
  id: string;
  title: string;
  type: string;
  index: number;
}) => {
  const { changeTaskType, deleteTask, getTypeString } = useProjectContext();

  const { setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleChangeTaskTypeClick = () => {
    changeTaskType(id, index);
  };
  const handleDeleteClick = (event: any) => {
    event.stopPropagation();
    deleteTask(id, index);
  };

  return (
    <div ref={setNodeRef} style={style} onClick={handleChangeTaskTypeClick}>
      <Task type={type}>
        <div className={"flex justify-between"}>
          <span className="opacity-50 italic capitalize">
            {`${getTypeString(type)}`}
          </span>
          <FontAwesomeIcon
            icon={faTimesSquare}
            size={"lg"}
            className={"mr-4 cursor-pointer z-50"}
            color={Colours.dark}
            onClick={handleDeleteClick}
          />
        </div>
        {title}
      </Task>
    </div>
  );
};

export default TaskItem;
