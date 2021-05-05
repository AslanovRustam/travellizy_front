const myAction = (value) => {
  return {
    type: "MY_ACTION",
    payload: value,
  };
};

const changeFilter = (value) => ({
  type: "filter",
  payload: value,
});

export default { myAction, changeFilter };
