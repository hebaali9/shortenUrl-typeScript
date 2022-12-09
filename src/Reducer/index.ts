import { Url } from "../types";

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
  switch (action.type) {
    case "UPDATE_THE_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "UPDATING_LIST_OF_URLS":
      return {
        ...state,
        urlsList: action.payload,
      };
    case "EDIT_URL":
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
