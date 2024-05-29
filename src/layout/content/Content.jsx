import React, { Suspense, useEffect, useLayoutEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import DataFetcher from "./pages/component/fetcher/DataFetcher";

const Registration = lazy(() => import("./pages/registration/Registration"));
const Monitoring = lazy(() => import("./pages/monitoring/Monitoring"));
const MasterList = lazy(() => import("./pages/masterlist/MasterList"));
const Message = lazy(() => import("./pages/mesage/Message"));
const Company = lazy(() => import("./pages/company/Company"));
const CreateAnnouncement = lazy(() =>
  import("./pages/announcement/createannounce/CreateAnnouncement")
);
const ActivityLog = lazy(() =>
  import("./pages/announcement/activitylog/ActivityLog")
);
const UploadLog = lazy(() =>
  import("./pages/announcement/uploadlog/UploadLog")
);

const Content = () => {
  const [data, setdata] = useState(null);
  const url = window.location.pathname;
  useLayoutEffect(() => {
    setdata(DataFetcher());
  }, []);

  if (data === null) setdata(DataFetcher());
  return (
    <div className="w-full h-full items-center justify-center flex">
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/monitoring" element={<Monitoring data={data} />} />
          <Route path="/masterlist" element={<MasterList data={data} />} />
          <Route path="/message" element={<Message />} />
          <Route path="/company" element={<Company />} />
          <Route path="/activitylog" element={<CreateAnnouncement />} />
          <Route path="/createannouncement" element={<ActivityLog />} />
          <Route path="/uploadlog" element={<UploadLog />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Content;
