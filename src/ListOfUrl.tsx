import React, { useState, useEffect } from "react";
import "./ListOfUrl.css";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Header } from "./Header";
import { Table } from "antd";
import "antd/dist/antd.css";
import PopUp from "./PopUp";
import { store } from "./Store";
import { Edit_Url_Api, On_Delete_Api, List_Of_Urls } from "./Actions";
import { Url, EditedUrl } from "./types";

function ListOfUrl() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState<Url | null>(null);
  const token = store.getState().token;
  const urlsList: Url[] = store.getState().urlsList;

  const onClosePopup = () => setIsOpen(false);

  function onEdit(editedUrl: string) {
    store.dispatch(
      Edit_Url_Api({ selectedUrl, editedUrl, token }, onClosePopup)
    );
    // axios
    //   .put(
    //     `${baseurl}/url/${selectedUrl.id}`,
    //     { full_url: editedUrl },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     // const newUrls = urlsList.map((url) => {
    //     //   return {
    //     //     ...url,
    //     //     full_url: url.id === selectedUrl.id ? editedUrl : url.full_url,
    //     //   };
    //     // });
    //     // store.dispatch(Update_Urls_List(newUrls));
    //     const action = EDIT_URL({ editedUrl, selectedUrl });
    //     store.dispatch(action);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })

    //   .finally(() => {
    //     onClosePopup();
    //   });
  }

  function onDelete(id: string) {
    store.dispatch(On_Delete_Api({ id, token, urlsList }));
    // axios
    //   .delete(`${baseurl}/url/${id}`, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then((response) => {
    //     store.dispatch(
    //       Update_Urls_List(
    //         urlsList.filter((el) => {
    //           return el.id !== id;
    //         })
    //       )
    //     );
    //   })
    //   .catch((error) => console.error(error));
  }

  const columns = [
    {
      title: "fullUrl",
      dataIndex: "full_url",
    },
    {
      title: "shortUrl",
      dataIndex: "short_url",
    },
    {
      title: "Actions",
      dataIndex: "Actions",
      key: "Actions",
      render: (par1: string, url: Url) => {
        return (
          <div className="list" key={url.id}>
            <button
              className="list-button"
              onClick={() => {
                onDelete(url.id);
              }}
            >
              delete
              <FaTrashAlt color="rgb(61, 6, 113)" />
            </button>
            <div>
              <button
                className="list-button"
                onClick={() => {
                  setSelectedUrl(url);
                  setIsOpen(true);
                }}
              >
                edit <FaEdit color="rgb(61, 6, 113)" />
              </button>
            </div>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    store.dispatch(List_Of_Urls({ token }));

    // useEffect(() => {
    //   axios
    //     .get(`${baseurl}/urls`, {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     })

    //     .then((response) => {
    //       store.dispatch(Update_Urls_List(response.data));
    //     })
    //     .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Header />
      <Table dataSource={urlsList} columns={columns} rowKey="id" />;
      {isOpen && (
        <PopUp url={selectedUrl!} onEdit={onEdit} onCLose={onClosePopup} />
      )}
    </div>
  );
}
export default ListOfUrl;
