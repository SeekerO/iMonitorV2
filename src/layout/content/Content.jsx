import React from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "./pages/registration/Registration";
import Monitoring from "./pages/monitoring/Monitoring";
import MasterList from "./pages/masterlist/MasterList";
import Message from "./pages/mesage/Message";
import Company from "./pages/company/Comany";
import CreateAnnouncement from "./pages/announcement/createannounce/CreateAnnouncement";
import ActivityLog from "./pages/announcement/activitylog/ActivityLog";
import UploadLog from "./pages/announcement/uploadlog/UploadLog";
const Content = () => {
  return (
    <div className="w-full">
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
    </div>
  );
};

export default Content;
