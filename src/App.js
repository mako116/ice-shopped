import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import PageLoading from "./components/loading/PageLoading";
import AlertModal from "./components/modal/AlertModal";
import UserModal from "./components/modal/UserModal";
import Routers from "./routes/Routers";
import { closeAlertPopModal } from "./store/alert/alertSlice";

function App() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.alert.alertPopModal);

  useEffect(() => {
    if (modal?.status === true) {
      setTimeout(() => {
        dispatch(closeAlertPopModal());
      }, 2500);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal]);

  return (
    <>
      <UserModal />
      <PageLoading />
      <AlertModal />
      <Routers />
    </>
  );
}

export default App;
