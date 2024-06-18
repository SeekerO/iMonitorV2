import React, { Suspense, useEffect, useLayoutEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import {
  DataFetcher,
  CompanyFetcher,
} from "./pages/component/fetcher/dataFetchers";

const Registration = lazy(() => import("./pages/registration/Registration"));
const Monitoring = lazy(() => import("./pages/monitoring/Monitoring"));
const MasterList = lazy(() => import("./pages/masterlist/MasterList"));
const Message = lazy(() => import("./pages/mesage/Message"));
const Company = lazy(() => import("./pages/company/Company"));
const Dasboard = lazy(() => import("./pages/dashboard/Dashbaord"));
const CreateAnnouncement = lazy(() =>
  import("./pages/announcement/createannounce/CreateAnnouncement")
);
const ActivityLog = lazy(() =>
  import("./pages/announcement/activitylog/ActivityLog")
);
const UploadLog = lazy(() =>
  import("./pages/announcement/uploadlog/UploadLog")
);

const Content = ({ isLoggedIn, socket }) => {
  const [data, setdata] = useState(null);
  const [filterBy, setfilterBy] = useState("ALL");

  useLayoutEffect(() => {
    setdata(DataFetcher(filterBy));
  }, [isLoggedIn]);

  if (data === null) setdata(DataFetcher(filterBy));
  else
    return (
      <div className="w-full h-full  justify-center flex px-5">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Dasboard data={data} />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/monitoring" element={<Monitoring data={data} />} />
            <Route path="/masterlist" element={<MasterList data={data} />} />
            <Route
              path="/message"
              element={<Message data={data} socket={socket} />}
            />
            <Route
              path="/company"
              element={<Company company_data={CompanyFetcher()} />}
            />
            <Route path="/activitylog" element={<ActivityLog />} />
            <Route
              path="/createannouncement"
              element={<CreateAnnouncement />}
            />
            <Route path="/uploadlog" element={<UploadLog />} />
          </Routes>
        </Suspense>
      </div>
    );
};

export default Content;
