import React, { Suspense } from "react";
import Cells from "./cell/Cells";
import Bargraph from "./bargraph/Bargraph";
import { Doughnut } from "react-chartjs-2";
import Doughnut_chart from "./doughnut/Doughnut_chart";

const Dashboard = ({ data }) => {
  return (
    <div className="w-full h-[88%] md:flex grid md:space-x-2 overflow-auto">
      <Suspense fallback={"Loading..."}>
        <div className="w-full h-full rounded-md flex flex-col space-y-2">
          <Cells data={data} />
          <Bargraph data={data} />
        </div>
        <div className="shrink-0 md:w-[30rem] w-full h-full md:overflow-hidden overflow-auto rounded-md bg-slate-100 bg-opacity-70 flex flex-col">
          <Doughnut_chart data={data} />
        </div>
      </Suspense>
    </div>
  );
};

export default Dashboard;
