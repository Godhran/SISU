import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DistributionBar from "..";

const testId = {
  container: "distributionBarContainer",
  completedSegment: "distributionBarCompletedSegment",
  blockedSegment: "distributionBarBlockedSegment",
  todoSegment: "distributionBarToDoSegment",
  inProgressSegment: "distributionBarInProgressSegment",
};

const onFilter = jest.fn();

describe("DistributionBar - Component", () => {
  describe("Container", () => {
    describe("Render", () => {
      it("Should render the distribution bar container", () => {
        render(
          <DistributionBar tasks={[]} filter={null} onFilter={onFilter} />
        );

        expect(screen.getByTestId(testId.container)).toBeTruthy();
      });
    });
  });

  describe("Tasks", () => {
    describe("Completed", () => {
      describe("Render", () => {
        it("Should render the completed segment when there are completed tasks", () => {
          render(
            <DistributionBar
              tasks={[
                {
                  title: "Completed Task",
                  type: "completed",
                  id: "completed-task-uuid",
                },
              ]}
              filter={null}
              onFilter={onFilter}
            />
          );
          expect(screen.getByTestId(testId.completedSegment)).toBeTruthy();
        });
      });

      describe("Functionality", () => {
        it("Should set the filter to 'completed' on click", () => {
          render(
            <DistributionBar
              tasks={[
                {
                  title: "Completed Task",
                  type: "completed",
                  id: "completed-task-uuid",
                },
              ]}
              filter={null}
              onFilter={onFilter}
            />
          );
          expect(screen.getByTestId(testId.completedSegment)).toBeTruthy();
          fireEvent.click(screen.getByTestId(testId.completedSegment));
          expect(onFilter).toHaveBeenCalledWith("completed");
        });
      });
    });

    describe("Blocked", () => {
      describe("Render", () => {
        it("Should render the blocked segment when there are blocked tasks", () => {
          render(
            <DistributionBar
              tasks={[
                {
                  title: "Blocked Task",
                  type: "blocked",
                  id: "blocked-task-uuid",
                },
              ]}
              filter={null}
              onFilter={onFilter}
            />
          );
          expect(screen.getByTestId(testId.blockedSegment)).toBeTruthy();
        });
      });

      describe("Functionality", () => {
        it("Should set the filter to 'blocked' on click", () => {
          render(
            <DistributionBar
              tasks={[
                {
                  title: "Blocked Task",
                  type: "blocked",
                  id: "blocked-task-uuid",
                },
              ]}
              filter={null}
              onFilter={onFilter}
            />
          );
          expect(screen.getByTestId(testId.blockedSegment)).toBeTruthy();
          fireEvent.click(screen.getByTestId(testId.blockedSegment));
          expect(onFilter).toHaveBeenCalledWith("blocked");
        });
      });
    });

    describe("In Progress", () => {
      describe("Render", () => {
        it("Should render the in progress segment when there are in progress tasks", () => {
          render(
            <DistributionBar
              tasks={[
                {
                  title: "In Progress Task",
                  type: "inProgress",
                  id: "in-progress-task-uuid",
                },
              ]}
              filter={null}
              onFilter={onFilter}
            />
          );
          expect(screen.getByTestId(testId.inProgressSegment)).toBeTruthy();
        });
      });

      describe("Functionality", () => {
        it("Should set the filter to 'inProgress' on click", () => {
          render(
            <DistributionBar
              tasks={[
                {
                  title: "In Progress Task",
                  type: "inProgress",
                  id: "in-progress-task-uuid",
                },
              ]}
              filter={null}
              onFilter={onFilter}
            />
          );
          expect(screen.getByTestId(testId.inProgressSegment)).toBeTruthy();
          fireEvent.click(screen.getByTestId(testId.inProgressSegment));
          expect(onFilter).toHaveBeenCalledWith("inProgress");
        });
      });
    });

    describe("To-Do", () => {
      describe("Render", () => {
        it("Should render the to do segment when there are to do tasks", () => {
          render(
            <DistributionBar
              tasks={[
                {
                  title: "To Do Task",
                  type: "todo",
                  id: "todo-task-uuid",
                },
              ]}
              filter={null}
              onFilter={onFilter}
            />
          );
          expect(screen.getByTestId(testId.todoSegment)).toBeTruthy();
        });
      });

      describe("Functionality", () => {
        it("Should set the filter to 'todo' on click", () => {
          render(
            <DistributionBar
              tasks={[
                {
                  title: "To Do Task",
                  type: "todo",
                  id: "todo-task-uuid",
                },
              ]}
              filter={null}
              onFilter={onFilter}
            />
          );
          expect(screen.getByTestId(testId.todoSegment)).toBeTruthy();
          fireEvent.click(screen.getByTestId(testId.todoSegment));
          expect(onFilter).toHaveBeenCalledWith("todo");
        });
      });
    });
  });
});
