import { createAction } from "@reduxjs/toolkit";

const myAction = (value) => {
  return {
    type: "MY_ACTION",
    payload: value,
  };
};

// const  = createAction("filter");
const changeFilter = (value) => ({
  type: "filter",
  payload: value,
});

export default { myAction, changeFilter };
