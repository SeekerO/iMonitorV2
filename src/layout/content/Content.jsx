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
const CreateAnnouncement = lazy(() =>
  import("./pages/announcement/createannounce/CreateAnnouncement")
);
const ActivityLog = lazy(() =>
  import("./pages/announcement/activitylog/ActivityLog")
);
const UploadLog = lazy(() =>
  import("./pages/announcement/uploadlog/UploadLog")
);

const Content = ({ isLoggedIn }) => {
  const [data, setdata] = useState(null);
  const [filterBy, setfilterBy] = useState("BSIT");

  useLayoutEffect(() => {
    setdata(DataFetcher(filterBy));
  }, [isLoggedIn]);

  if (data === null) setdata(DataFetcher(filterBy));
  else
    return (
      <div className="w-full h-full  justify-center flex pt-1">
        <Suspense fallback={"Loading..."}>
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/monitoring" element={<Monitoring data={data} />} />
            <Route path="/masterlist" element={<MasterList data={data} />} />
            <Route path="/message" element={<Message />} />
            <Route
              path="/company"
              element={<Company company_data={CompanyFetcher()} />}
            />
            <Route path="/activitylog" element={<CreateAnnouncement />} />
            <Route path="/createannouncement" element={<ActivityLog />} />
            <Route path="/uploadlog" element={<UploadLog />} />
          </Routes>
        </Suspense>
      </div>
    );
};

export default Content;
