import cloneDeep from "lodash.clonedeep";

export const getCopy = (state) => {
  return {
    ...cloneDeep(state),
  };
};

export const updateState = (previousState, updatedProperties) => {
  return {
    ...cloneDeep(previousState),
    ...updatedProperties,
  };
};
