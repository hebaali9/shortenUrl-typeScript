import axios from "axios";
import { Dispatch } from "redux";
import { baseurl } from "../constant";
import { Url, UrlListParams } from "../types";

export const Update_Token_Action = function (token: string) {
  return {
    type: "UPDATE_THE_TOKEN",
    payload: token,
  };
};

export const UPDATE_URLS_LIST = function (urlsList: object[]) {
  return {
    type: "UPDATING_LIST_OF_URLS",
    payload: urlsList,
  };
};

type RegistrationParams = {
  email: string;
  password: string;
  fName: string;
  lName: string;
  gender: "M" | "F";
};

export function signup(
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

export function editUrl(
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

type DeleteParams = {
  id: string;
  token: string;
  urlsList: Url[];
};
export function On_Delete_Api({ id, token, urlsList }: DeleteParams) {
  return async (dispatch: Dispatch) => {
    try {
      await axios.delete(`${baseurl}/url/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(
        UPDATE_URLS_LIST(
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

export function getUrlsList({ token }: { token: string }) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`${baseurl}/urls`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(UPDATE_URLS_LIST(response.data));
    } catch (error) {
      console.error(error);
    }
  };
}

type InputParams = {
  token: string;
  longUrl: string;
};
export function inputUrl(
  { token, longUrl }: InputParams,
  successCb: (shortUrl: string) => void
) {
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

      successCb(response.data.short_url);
    } catch (error) {
      console.error(error);
    }
  };
}
