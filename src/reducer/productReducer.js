const productReducer = (state, action) => {
  let featureData; // Declare featureData variable outside of the switch block

  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "MY_API_DATA":
      featureData = action.payload.filter(
        (curElem) => curElem.featured === true,
      );
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };
    case "MY_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        isError: false,
        singleProduct: action.payload,
      };
    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default productReducer;
