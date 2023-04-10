import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUrlBySegment } from "./mockApi/storage";

export const Redirect: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const url = getUrlBySegment(params.url!);
    if (url) {
      window.location.href = url;
    } else {
      navigate("/signup");
    }
  }, []);

  return <></>;
};
