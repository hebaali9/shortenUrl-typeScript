import axios from "axios";
import { Dispatch } from "redux";
import { baseurl } from "../constant";
import { Url, EditedUrl, UrlListParams } from "../types";

export const Update_Token_Action = function (token: string) {
  return {
    type: "UPDATE_THE_TOKEN",
    payload: token,
  };
};

export const Update_Urls_List = function (urlsList: object[]) {
  return {
    type: "UPDATING_LIST_OF_URLS",
    payload: urlsList,
  };
};

// export function Sign_UP_Api(
//   { email, password, fName, lName, gender },
//   successCb
// ) {
//   return (dispatch) => {
//     axios
//       .post(`${baseurl}/signup`, {
//         email,
//         password,
//         first_name: fName,
//         last_name: lName,
//         gender,
//       })
//       .then((response) => {
//         //store.dispatch({
//         // type: "UPDATE_THE_TOKEN",
//         //    payload: ""
//         // }) please can i keep them
//         const action = Update_Token_Action(response.data.token);
//         dispatch(action);

//         successCb();
//       })
//       .catch((error) => console.error(error));
//   };
// }

type RegistrationParams = {
  email: string;
  password: string;
  fName: string;
  lName: string;
  gender: "M" | "F";
};

export function Sign_UP_Api(
  { email, password, fName, lName, gender }: RegistrationParams,
  successCb: () => void
) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(`${baseurl}/signup`, {
        email,
        password,
        first_name: fName,
        last_name: lName,
        gender,
      });

      const action = Update_Token_Action(response.data.token);
      dispatch(action);
      successCb();
    } catch (error) {
      console.error(error);
    }
  };
}

export function EDIT_URL({
  editedUrl,
  selectedUrl,
}: {
  editedUrl: string;
  selectedUrl: Url | null;
}) {
  return {
    type: "EDIT_URL",
    payload: {
      editedUrl,
      selectedUrl,
    },
  };
}

// export function On_Edit_Api({ selectedUrl, editedUrl, token }, onClosePopup) {
//   return (dispatch) => {
//     axios
//       .put(
//         `${baseurl}/url/${selectedUrl.id}`,
//         { full_url: editedUrl },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       )
//       .then((response) => {
//         const action = EDIT_URL({ editedUrl, selectedUrl });
//         dispatch(action);
//       })
//       .catch((error) => {
//         console.log(error);
//       })

//       .finally(() => {
//         onClosePopup();
//       });
//   };
// }

export function Edit_Url_Api(
  { selectedUrl, editedUrl, token }: UrlListParams,
  onClosePopup: () => void
) {
  return async (dispatch: Dispatch) => {
    try {
      await axios.put(
        `${baseurl}/url/${selectedUrl?.id}`,
        { full_url: editedUrl },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const action = EDIT_URL({ editedUrl, selectedUrl });
      dispatch(action);
    } catch (error) {
      console.log(error);
    }

    onClosePopup();
  };
}

type deleteParams = {
  id: string;
  token: string;
  urlsList: Url[];
};
export function On_Delete_Api({ id, token, urlsList }: deleteParams) {
  return async (dispatch: Dispatch) => {
    try {
      await axios.delete(`${baseurl}/url/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(
        Update_Urls_List(
          urlsList.filter((el) => {
            return el.id !== id;
          })
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
}

// export function Use_Effect_Api({ token }) {
//   console.log("useeffect run");
//   return (dispatch) => {
//     axios
//       .get(`${baseurl}/urls`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })

//       .then((response) => {
//         dispatch(Update_Urls_List(response.data));
//       })
//       .catch((error) => console.error(error));
//   };
// }

export function List_Of_Urls({ token }: { token: string }) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`${baseurl}/urls`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(Update_Urls_List(response.data));
    } catch (error) {
      console.error(error);
    }
  };
}

type inputParams = {
  token: string;
  longUrl: string;
  props: any;
};
export function Input_Url_Api({ token, longUrl, props }: inputParams) {
  console.log(props);
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(
        `${baseurl}/url`,
        { url: longUrl },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      props.setShortUrl(response.data.short_url);
    } catch (error) {
      console.error(error);
    }
  };
}

// export function Input_Url_Api({ token, longUrl, props }) {
//   return (dispatch) => {
//     axios
//       .post(
//         `${baseurl}/url`,
//         { url: longUrl },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       )
//       .then((response) => {
//         props.setShortUrl(response.data.short_url);
//       });
//   };
// }

// export function On_Delete_Api({ id, token, urlsList }) {
//   return (dispatch) => {
//     axios
//       .delete(`${baseurl}/url/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         dispatch(
//           Update_Urls_List(
//             urlsList.filter((el) => {
//               return el.id !== id;
//             })
//           )
//         );
//       })
//       .catch((error) => console.error(error));
//   };
// }
