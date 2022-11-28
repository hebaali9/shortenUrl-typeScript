import { Url } from "../types";
import { AnyAction } from "redux";

type ActionType =
  | {
      type: string;
      payload: any;
    }
  | any;
export function reducer(
  state = { token: "", urlsList: [] },
  action: ActionType
) {
  if (action.type === "UPDATE_THE_TOKEN") {
    return {
      ...state,
      token: action.payload,
    };
  } else if (action.type === "UPDATING_LIST_OF_URLS") {
    return {
      ...state,
      urlsList: action.payload,
    };
  } else if (action.type === "EDIT_URL") {
    const newUrls = state.urlsList.map((url: Url) => {
      return {
        ...url,
        full_url:
          url.id === action.payload.selectedUrl.id
            ? action.payload.editedUrl
            : url.full_url,
      };
    });
    return {
      ...state,
      urlsList: newUrls,
    };
  }

  return state;
}

//else if (action.type === "DELETE_ONE_LIST"){
//     const deleteTheList = urlsList.filter((el) => {
//       return el.id !== id;
//      })
