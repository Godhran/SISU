import { Segment } from "./component.style";

type TDistributionBar = {
  tasks: TTask[];
  filter: string | null;
  onFilter: (value: string) => void;
};

type TTask = {
  title: string;
  type: string;
};

const DistributionBar = ({ tasks, onFilter, filter }: TDistributionBar) => {
  function groupByType<T>(arr: T[], property: keyof T): Record<string, T[]> {
    return arr.reduce((result, obj) => {
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

      {groupedTasks.priority && groupedTasks.priority.length > 0 ? (
        <Segment
          count={groupedTasks.priority.length}
          length={tasks.length}
          type={"priority"}
          onClick={() => onFilter("priority")}
          filtered={!!filter && filter !== "priority"}
        />
      ) : null}

      {groupedTasks.warning && groupedTasks.warning.length > 0 ? (
        <Segment
          count={groupedTasks.warning.length}
          length={tasks.length}
          type={"warning"}
          onClick={() => onFilter("warning")}
          filtered={!!filter && filter !== "warning"}
        />
      ) : null}

      {groupedTasks.task && groupedTasks.task.length > 0 ? (
        <Segment
          count={groupedTasks.task.length}
          length={tasks.length}
          type={"task"}
          onClick={() => onFilter("task")}
          filtered={!!filter && filter !== "task"}
        />
      ) : null}
    </div>
  );
};

export default DistributionBar;
