import { useState, useEffect } from "react";
import "./ListOfUrl.css";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Header } from "../header/Header";
import { Table } from "antd";
import "antd/dist/antd.css";
import PopUp from "../popup/PopUp";
import { store } from "../store";
import { editUrl, On_Delete_Api, getUrlsList } from "../actions";
import { Url } from "../types";
import { useSelector } from "react-redux";

type RootState = {
  token: string;
};
function ListOfUrl() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState<Url | null>(null);

  const selectToken = (state: RootState) => state.token;

  const token = useSelector(selectToken);
  const urlsList: Url[] = store.getState().urlsList;

  const onClosePopup = () => setIsPopUpOpen(false);

  function onEdit(editedUrl: string) {
    store.dispatch(editUrl({ selectedUrl, editedUrl, token }, onClosePopup));
  }

  function deleteUrl(id: string) {
    store.dispatch(On_Delete_Api({ id, token, urlsList }));
  }

  const columns = [
    {
      title: "full_Url",
      dataIndex: "full_url",
    },
    {
      title: "short_Url",
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
                deleteUrl(url.id);
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
                  setIsPopUpOpen(true);
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
    store.dispatch(getUrlsList({ token }));
  }, []);

  return (
    <div>
      <Header />
      <Table dataSource={urlsList} columns={columns} rowKey="id" />;
      {isPopUpOpen && (
        <PopUp url={selectedUrl!} onEdit={onEdit} onCLose={onClosePopup} />
      )}
    </div>
  );
}
export default ListOfUrl;
