import { TTask } from "@context/index";
import { Segment } from "./component.style";

type TDistributionBar = {
  tasks: TTask[];
  filter: string | null;
  onFilter: (value: string) => void;
};

const DistributionBar = ({ tasks, onFilter, filter }: TDistributionBar) => {
  function groupByType<T>(arr: T[], property: keyof T): Record<string, T[]> {
    return arr.reduce((result, obj: any) => {
      const key = String(obj[property]);
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(obj);
      return result;
    }, {} as Record<string, T[]>);
  }

  const groupedTasks = groupByType(tasks, "type");

  return (
    <div className="flex w-full h-5 bg-gray-200 rounded overflow-hidden dark:bg-gray-700">
      {groupedTasks.completed && groupedTasks.completed.length > 0 ? (
        <Segment
          count={groupedTasks.completed.length}
          length={tasks.length}
          type={"completed"}
          onClick={() => onFilter("completed")}
          filtered={!!filter && filter !== "completed"}
        />
      ) : null}

      {groupedTasks.blocked && groupedTasks.blocked.length > 0 ? (
        <Segment
          count={groupedTasks.blocked.length}
          length={tasks.length}
          type={"blocked"}
          onClick={() => onFilter("blocked")}
          filtered={!!filter && filter !== "blocked"}
        />
      ) : null}

      {groupedTasks.inProgress && groupedTasks.inProgress.length > 0 ? (
        <Segment
          count={groupedTasks.inProgress.length}
          length={tasks.length}
          type={"inProgress"}
          onClick={() => onFilter("inProgress")}
          filtered={!!filter && filter !== "inProgress"}
        />
      ) : null}
      {groupedTasks.todo && groupedTasks.todo.length > 0 ? (
        <Segment
          count={groupedTasks.todo.length}
          length={tasks.length}
          type={"todo"}
          onClick={() => onFilter("todo")}
          filtered={!!filter && filter !== "todo"}
        />
      ) : null}
    </div>
  );
};

export default DistributionBar;
