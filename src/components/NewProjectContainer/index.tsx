import React, { useState } from "react";
import { Colours } from "../../styles/colours";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { Button, Input, TextButton } from "./component.style";
import { useProjectContext } from "../../context";

const copy = {
  header: "Create new project",
  body: "Lorum ipsum orum ipsum orum ipsum orum ipsum orum ipsum ",
};

const NewProjectContainer = () => {
  const { createProject } = useProjectContext();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleCreateProject = () => {
    if (title.length > 0 && description.length > 0) {
      createProject({ title, description, tasks: [] });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div
      className={`mx-auto max-w-sm rounded overflow-hidden shadow-lg p-3 h-full`}
      style={{ backgroundColor: Colours.light, color: Colours.dark }}
    >
      {/* <div className={"flex justify-end"}>
        <FontAwesomeIcon icon={faPlusSquare} size={"2x"} />
      </div> */}
      <div className="px-2 py-4">
        <div className="font-bold text-xl mb-2">{copy.header}</div>
        <p className={`text-base`}>{copy.body}</p>
        <form className="w-full max-w-sm">
          <Input
            placeholder="Project"
            value={title}
            label="Project"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Input
            placeholder="Description"
            value={description}
            label="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <div className="flex items-center py-2">
            <Button label={"Create"} onClick={handleCreateProject} />
            <TextButton
              label={"Cancel"}
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProjectContainer;
