import { useSortable } from "@dnd-kit/sortable";
import { Button } from "./component.style";
import { CSS } from "@dnd-kit/utilities";
import { useProjectContext } from "../../context";

const TaskButton = ({
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
  const { changeTaskType } = useProjectContext();

  const { 
    // attributes, listeners,
     setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleClick = () => {
    changeTaskType(id, index);
  };

  return (
    // <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
    <div
      ref={setNodeRef}
      style={style}
      onClick={() => {
        handleClick();
      }}
    >
      <Button title={title} type={type} className="mb-1" />
    </div>
  );
};

export default TaskButton;
