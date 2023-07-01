import { GrAdd } from "react-icons/gr";
import Modal from "./Modal";

const AddTask = () => {
  return (
    <div>
      <button className="btn btn-primary w-full">
        Add new task <GrAdd className="ml-5" size={20} />
      </button>
      {/* <Modal /> */}
    </div>
  );
};

export default AddTask;
