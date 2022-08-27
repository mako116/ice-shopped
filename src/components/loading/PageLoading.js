import React from "react";
import "./loading.scss";
import { useSelector } from "react-redux";

const PageLoading = () => {
  const loading = useSelector((state) => state.loading.pageLoading);

  return (
    loading?.status && (
      <div className="page_processing_modal">
        <div className="loading-wrapper">
          <div className="loader">
            <div className="loader loader-inner"></div>
          </div>
        </div>
        <p>{loading?.message}</p>
      </div>
    )
  );
};

export default PageLoading;
