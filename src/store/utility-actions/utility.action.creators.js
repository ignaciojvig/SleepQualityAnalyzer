export const loadingDispatch = (loadingActionType, loadingState) => {
  return {
    type: loadingActionType,
    loadingState: loadingState,
  };
};
