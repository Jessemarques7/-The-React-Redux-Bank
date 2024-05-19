const initialStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payLoad.fullName,
        nationalId: action.payLoad.nationalId,
        createdAt: action.payLoad.createAt,
      };
    case "customer/updatename":
      return { ...state, fullName: action.fullName };

    default:
      return state;
  }
}

export function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payLoad: { fullName, nationalId, createAt: new Date().toISOString },
  };
}

export function updatename(fullName) {
  return { type: "customer/updatename", payLoad: fullName };
}
