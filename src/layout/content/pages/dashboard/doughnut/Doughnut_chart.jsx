import React from "react";
import { RiBuilding2Fill } from "react-icons/ri";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register components in Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const Doughnut_chart = ({ data }) => {
  const filterOjtData = (dataArray) => {
    return dataArray.filter((data) => {
      return data.status === true;
    });
  };

  const data_master = filterOjtData(data);

  // Create an object to store data by 'acro'
  const coursesData = {};
  data_master.forEach((item) => {
    if (!coursesData[item.acro]) {
      coursesData[item.acro] = []; // Initialize array if 'acro' doesn't exist as a key
    }
    coursesData[item.acro].push(item); // Push data into the corresponding 'acro' key
  });

  // Function to count items with ojtprogress equal to ojtrequiredprogress
  const countMatchingProgress = (data) => {
    return data.filter((item) => item.ojtprogress === item.ojtrequiredprogress)
      .length;
  };

  // Function to calculate completion percentage
  const completion_percentage = (acro) => {
    const courseData = coursesData[acro];
    const matchingProgressCount = countMatchingProgress(courseData);
    const totalStudents = courseData.length;
    if (totalStudents === 0) return "N/A"; // To handle division by zero
    const percentage = (matchingProgressCount / totalStudents) * 100;
    return `${percentage.toFixed(2)}% out of the ${totalStudents} students`;
  };

  // Sort the courses based on the highest completion percentage
  const sortedCompanies = Object.keys(coursesData)
    .sort((a, b) => {
      const percentageA = parseFloat(completion_percentage(a).replace("%", ""));
      const percentageB = parseFloat(completion_percentage(b).replace("%", ""));
      return percentageB - percentageA;
    })
    .slice(0, 3);

  const generateChartData = (acro) => {
    const completed = coursesData[acro].filter(
      (item) => item.ojtprogress === item.ojtrequiredprogress
    ).length;
    const notCompleted = coursesData[acro].length - completed;

    return {
      labels: ["Completed", "Not Completed"],
      datasets: [
        {
          data: [completed, notCompleted],
          backgroundColor: ["#5a90c2", "#3867b4"],
          borderColor: ["#5a90c2", "#3867b4"],
          borderWidth: 1,
        },
      ],
    };
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "rgba(255, 255, 255, 1)", // Legend text color
        },
      },
      title: {
        text: "Number of Student Ongoing and Archvied",
        color: "rgba(255, 255, 255, 1)", // Title text color
      },
      tooltip: {
        bodyColor: "rgba(255, 255, 255, 1)", // Tooltip text color
        titleColor: "rgba(255, 255, 255, 1)", // Tooltip title color
      },
    },
  };

  return (
    <div className="">
      <div className="pt-3">
        <div className="text-[21px] font-semibold items-center justify-center flex gap-2 text-white MainColor mx-3 mb-2 rounded-md shadow-md">
          <div className="text-blue-400 flex items-center gap-1">
            <RiBuilding2Fill /> <em className="font-semibold">TOP 3</em>
          </div>
          <span className="text-[16px] items-center flex h-full justify-center">
            {" "}
            OJT STUDENT COMPLETION RATE PER COURSE
          </span>
        </div>
      </div>

      <div className="h-full w-full">
        {sortedCompanies.map((acro, index) => (
          <div key={acro} className="w-full px-3 mt-2">
            <div className="h-[190px] w-full bg-[#274472] bg-opacity-95 text-white rounded-md shadow-md p-1 flex">
              <Doughnut
                data={generateChartData(acro)}
                options={options}
                width={300} // Set the width of the chart
                height={300} // Set the height of the chart
              />

              <div className="ml-3 flex flex-col justify-center">
                <h3 className="text-xl font-bold ">{acro}</h3>
                <p>
                  The total completion rate in this course is{" "}
                  {completion_percentage(acro)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doughnut_chart;
