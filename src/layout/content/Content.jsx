import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { lazy } from "react";

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
  return (
    <div className="w-full">
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/masterlist" element={<MasterList />} />
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
