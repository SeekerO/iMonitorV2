import React from "react";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register components
Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

import { Bar } from "react-chartjs-2";

const Bargraph = ({ data }) => {
  // Collect all unique course acronyms
  const courses = [...new Set(data.map((item) => item.acro))];

  // Generate count for each course
  const acroCounts = data.reduce((acc, item) => {
    acc[item.acro] = (acc[item.acro] || 0) + 1;
    return acc;
  }, {});

  // Function to fetch the count for a specific course acronym
  const getAcroCount = (acro) => acroCounts[acro] || 0;

  // Generate a consistent color for each course
  const generateBlueShadeColor = () => {
    const blueShades = [
      "40", // Medium blue
      "80", // Light blue
      "BF", // Very light blue
      "FF", // Pale blue
    ];

    // Select a random shade of blue
    const blue = blueShades[Math.floor(Math.random() * blueShades.length)];

    const red = "01"; // Zero intensity for red
    const green = "04"; // Zero intensity for green

    // Return the color in hex format, allowing only the blue component to vary
    return `#${red}${green}${blue}`;
  };
  const colors = courses.map(() => generateBlueShadeColor());

  const countStatusByAcro = (data) => {
    return data.reduce((acc, entry) => {
      if (!acc[entry.acro]) {
        acc[entry.acro] = { trueCount: 0, falseCount: 0 };
      }
      if (entry.status) {
        acc[entry.acro].trueCount++;
      } else {
        acc[entry.acro].falseCount++;
      }
      return acc;
    }, {});
  };

  // Get the counts once
  const statusCountsByAcro = countStatusByAcro(data);

  // Format the result according to the desired structure
  const formattedData = Object.keys(statusCountsByAcro).map((acro) => ({
    acro: acro,
    label1: "ongoing",
    label2: "archvied",
    true: statusCountsByAcro[acro].trueCount,
    false: statusCountsByAcro[acro].falseCount,
  }));

  const barData = {
    labels: courses.map((cours1) => cours1),
    datasets: [
      {
        label: "Data",
        data: courses.map((course) => getAcroCount(course)),
        backgroundColor: colors,
      },
    ],
  };

  const barData_counter = {
    labels: formattedData.map((course) => course.acro),
    datasets: [
      {
        label: "Archived",
        data: formattedData.map((data) => data.true),
        backgroundColor: "#5a90c2",
      },

      {
        label: "Ongoing",
        data: formattedData.map((data) => data.false),
        backgroundColor: "#3867b4",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "rgba(255, 255, 255, 1)", // Legend text color
        },
      },
      title: {
        display: true,
        text: "Number of student enrolled in each course",
        color: "rgba(255, 255, 255, 1)", // Title text color
      },
      tooltip: {
        bodyColor: "rgba(255, 255, 255, 1)", // Tooltip text color
        titleColor: "rgba(255, 255, 255, 1)", // Tooltip title color
      },
    },

    maintainAspectRatio: false,
  };

  const options2 = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "rgba(255, 255, 255, 1)", // Legend text color
        },
      },
      title: {
        display: true,
        text: "Number of Student Ongoing and Archvied",
        color: "rgba(255, 255, 255, 1)", // Title text color
      },
      tooltip: {
        bodyColor: "rgba(255, 255, 255, 1)", // Tooltip text color
        titleColor: "rgba(255, 255, 255, 1)", // Tooltip title color
      },
    },

    maintainAspectRatio: false,
  };
  return (
    <>
      <div className="w-full h-full bg-slate-200 bg-opacity-70 rounded-md overflow-auto">
        <Bar data={barData} options={options} />
      </div>
      <div className="w-full h-full bg-slate-200 bg-opacity-70 rounded-md overflow-auto">
        <Bar data={barData_counter} options={options2} />
      </div>
    </>
  );
};

export default Bargraph;
