import { useState } from "react";
import { useProjectContext } from "../../context";
import { Colours } from "../../styles/colours";
import { Button, Input } from "./component.style";

const copy = {
  header: "SISU",
  body: "Stick with something, see it through.",
  title: "Undertaking",
  description: "Why?",
  button: "Establish",
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
      className={`mx-auto max-w rounded overflow-hidden shadow-lg p-4 h-full drop-shadow-md`}
      style={{ backgroundColor: Colours.light, color: Colours.dark }}
    >
      <div>
        <div className="flex justify-between align-center">
          <div
            className="font-bold text-4xl mb-2"
            style={{ fontFamily: "Bebas Neue" }}
          >
            {copy.header}
          </div>
          <svg className={'h-[35px]'} viewBox={"0 0 97.942184 69.384674"}>
            <g fill={Colours.blocked} transform="translate(-1.03125,-15.381338)">
              <path
                d="m 93.5,61 c 0,0 -1.6,6.4 -2.1,7.6 -0.4,1.2 -2.9,5.4 -2.9,5.4 0,0 1.4,3.3 1.6,3.9 0.2,0.6 -2.9,1.9 -3.3,2.9 -0.4,1 0.6,1.9 4.5,1.6 3.9,-0.2 5.6,0.2 6.6,-3.9 1.2,-4.1 2.9,-8.9 -4.4,-17.5 z"
                id="path1"
              />
              <path
                d="m 36,56.9 -2.5,-7.6 c -0.4,-1.1 -1.4,-1.9 -2.6,-1.9 h -5.4 c 0,0 1.2,4.9 2.5,9.3 1.2,4.3 2.9,6.6 2.9,6.6 z"
                id="path2"
              />
              <path
                d="m 38.9,77.7 c -0.8,1.4 -0.8,2.5 -2.9,3.9 -2.1,1.4 1.6,0.7 7,0.9 0,0 2.5,-0.8 2.5,-2.9 0,-2.1 -1.9,-7.1 -1.9,-7.1 0,0 -3.9,3.7 -4.7,5.2 z"
                id="path3"
              />
              <path
                d="m 15.3,21.8 c 0,0 -1.5,-2.5 -3.5,-2 -2,0.5 -0.7,4.8 -0.7,4.8 0,0 1.2,-2.2 4.2,-2.8 z"
                id="path4"
              />
              <path
                d="M 92.6,41.8 C 89.2,32.5 83.1,18.1 54.4,20.2 c 0,0 -4.7,-0.6 -7.6,-3.1 -2.9,-2.5 -8.2,-2.7 -14.6,2.3 0,0 -2.7,1.8 -11.9,2.9 0,0 -5.4,0.2 -7.3,2.4 -1.9,2.2 -5.2,4.7 -6.4,7.2 -0.3,0.7 0,2.6 0,2.6 l -5.1,4 c -0.5,0.4 -0.6,1.2 -0.3,1.7 0.9,1.3 2.5,4.9 3.9,5.2 1.3,0.3 5.1,0.7 9.1,0.2 3,-0.3 12.2,-0.3 17.9,-0.2 1.7,0 3.2,1.1 3.7,2.8 l 2.5,9 c 0,0 -3.3,5.6 -7,9.3 -3.7,3.7 -3.5,8.7 -2.3,11.1 1.2,2.5 5.8,5.2 8.2,0 2.5,-5.2 9.5,-7.8 11.6,-11.5 2,-3.7 6.2,-8.9 5.3,-15.4 l 0.1,-2.8 c 0,0 2.2,4.2 1.1,8.2 -1,4 -1,4 -1,4 0,0 12.4,3.7 15,2.5 0,0 0.4,-6.6 6.8,-12.8 0,0 -6.2,10.3 -5.4,15.7 0.8,5.4 0.2,8 -0.6,11.1 -0.8,3.1 -2.2,4 -2.2,4 0,0 -4,0.6 -3.8,2.8 0.2,2.3 14.5,1 14.5,1 0,0 2.2,-0.4 2.2,-1.9 0,-1.5 6.4,-6 9.9,-18 3.7,-12.2 5.2,-13.4 1.9,-22.7 z M 11.8,34.4 c -0.7,0 -1.3,-0.6 -1.3,-1.3 0,-0.7 0.6,-1.3 1.3,-1.3 0.7,0 1.3,0.6 1.3,1.3 0,0.7 -0.6,1.3 -1.3,1.3 z m 11.4,-3.3 c 0,0 -0.8,-3.3 -3.6,-4 0,0 0.8,-3.1 2.5,-2.5 1.7,0.6 1.4,4.8 1.1,6.5 z"
                id="path5"
              />
            </g>
          </svg>
        </div>
        <p className={`text-base`} style={{ fontFamily: "Montserrat" }}>
          {copy.body}
        </p>
        <form className="w-full max-w">
          <div className="my-6">
            <Input
              placeholder={copy.title}
              value={title}
              label={copy.title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <Input
              placeholder={copy.description}
              value={description}
              label={copy.description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              maxLength={60}
            />
          </div>
          <div className="flex items-center py-2">
            <Button label={copy.button} onClick={handleCreateProject} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProjectContainer;
