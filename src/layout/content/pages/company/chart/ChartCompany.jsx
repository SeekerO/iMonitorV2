import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import DataConfig from "../CompanyDataConfig/DataConfig";
import { RiBuilding2Fill } from "react-icons/ri";
ChartJS.register(Tooltip, Legend, ArcElement);

const ChartCompany = ({ data, deviceType }) => {
  const top3data = data
    .sort((a, b) => b.studentenrolled - a.studentenrolled)
    .slice(0, 3);

  const top10data = data
    .sort((a, b) => b.studentenrolled - a.studentenrolled)
    .slice(0, 10);

  const PieData = {
    labels: top3data.map((title) => title.companyname),
    datasets: [
      {
        label: "Enrolled Student",
        data: top3data.map((studEnrolled) => studEnrolled.studentEnrolled),
        backgroundColor: [
          "rgb(76, 185, 231, 0.6)",
          "rgb(15, 33, 103, 0.6)",
          "rgb(53, 89, 224, 0.6)",
        ],
        borderColor: [
          "rgb(76, 185, 231, 2)",
          "rgb(15, 33, 103, 2)",
          "rgb(53, 89, 224, 2)",
        ],
        borderWidth: 1,
        radius: !deviceType ? "70%" : "90%",
        hoverOffset: 50,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "rgba(255, 255, 255, 0.8)", // Legend text color
        },
      },
      title: {
        display: true,
        text: "TOP 3 COMPANIES",
        color: "rgba(255, 255, 255, 0.8)", // Title text color
      },
      tooltip: {
        bodyColor: "rgba(255, 255, 255, 0.8)", // Tooltip text color
        titleColor: "rgba(255, 255, 255, 0.8)", // Tooltip title color
      },
    },
  };
  return (
    <div className={`${deviceType ? "flex" : "flex-wrap"} w-full`}>
      <div className={` ${!deviceType ? "h-fit" : "h-[75dvh]"}  flex`}>
        <Pie options={options} data={PieData} />
      </div>
      <div className="flex flex-col h-full w-full overflow-hidden">
        <div className="w-full h-[25dvh] flex flex-col overflow-auto">
          <h1 className="text-[25px] font-semibold flex gap-2 items-center">
            <RiBuilding2Fill /> TOP 3 OJT COMPANIES STUDENT ENROLLED
          </h1>
          {top3data.map((data, index) => (
            <div>
              <DataConfig meta_data={data} />
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col mt-4">
          <h1 className="text-[25px] font-semibold flex gap-2 items-center">
            <RiBuilding2Fill /> TOP 10 OJT COMPANIES STUDENT ENROLLED
          </h1>
          <div className="h-[40dvh] overflow-auto flex flex-col">
            {top10data.map((data, index) => (
              <DataConfig meta_data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartCompany;
