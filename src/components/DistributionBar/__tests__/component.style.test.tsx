import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Segment } from "../component.style";
import { Colours, hexToRgb } from "../../../styles/colours";

const testId = {
  completedSegment: "distributionBarCompletedSegment",
  blockedSegment: "distributionBarBlockedSegment",
  todoSegment: "distributionBarToDoSegment",
  inProgressSegment: "distributionBarInProgressSegment",
};

const onClick = jest.fn();

describe("DistributionBar - Styled Components", () => {
  describe("Segment", () => {
    describe("Render", () => {
      describe("Colour", () => {
        describe("Completed", () => {
          it("Should render the correct segment colour", () => {
            render(
              <Segment
                count={1}
                length={10}
                type={"completed"}
                onClick={onClick}
                filtered={false}
                testId={testId.completedSegment}
              />
            );

            expect(screen.getByTestId(testId.completedSegment)).toHaveStyle(
              `background-color: ${hexToRgb(Colours.completed)}`
            );
          });
        });

        describe("Blocked", () => {
          it("Should render the correct segment colour", () => {
            render(
              <Segment
                count={1}
                length={10}
                type={"blocked"}
                onClick={onClick}
                filtered={false}
                testId={testId.blockedSegment}
              />
            );

            expect(screen.getByTestId(testId.blockedSegment)).toHaveStyle(
              `background-color: ${hexToRgb(Colours.blocked)}`
            );
          });
        });

        describe("To Do", () => {
          it("Should render the correct segment colour", () => {
            render(
              <Segment
                count={1}
                length={10}
                type={"todo"}
                onClick={onClick}
                filtered={false}
                testId={testId.todoSegment}
              />
            );

            expect(screen.getByTestId(testId.todoSegment)).toHaveStyle(
              `background-color: ${hexToRgb(Colours.todo)}`
            );
          });
        });

        describe("In Progress", () => {
          it("Should render the correct segment colour", () => {
            render(
              <Segment
                count={1}
                length={10}
                type={"inProgress"}
                onClick={onClick}
                filtered={false}
                testId={testId.inProgressSegment}
              />
            );

            expect(screen.getByTestId(testId.inProgressSegment)).toHaveStyle(
              `background-color: ${hexToRgb(Colours.inProgress)}`
            );
          });
        });


        describe("Filtered", () => {
          it("Should render the correct segment colour", () => {
            render(
              <Segment
                count={1}
                length={10}
                type={"inProgress"}
                onClick={onClick}
                filtered={true}
                testId={testId.inProgressSegment}
              />
            );

            expect(screen.getByTestId(testId.inProgressSegment)).toHaveStyle(
              `background-color: ${hexToRgb(Colours.dark)}`
            );
          });
        });
      });

      describe("Width", () => {
        it("Should render the correct segment width", () => {
          render(
            <Segment
              count={1}
              length={10}
              type={"completed"}
              onClick={onClick}
              filtered={false}
              testId={testId.completedSegment}
            />
          );

          expect(screen.getByTestId(testId.completedSegment)).toHaveStyle(
            "width:10%"
          );
        });
      });
    });

    describe("Functionality", () => {
      it("Should call the onClick function on click", () => {
        render(
          <Segment
            count={1}
            length={10}
            type={"completed"}
            onClick={onClick}
            filtered={false}
            testId={testId.completedSegment}
          />
        );
        fireEvent.click(screen.getByTestId(testId.completedSegment));
        expect(onClick).toHaveBeenCalled();
      });
    });
  });
});
