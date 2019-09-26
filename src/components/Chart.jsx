import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer
} from "recharts";
import { Typography } from "@material-ui/core";

function createChartData(time, amount) {
  return { time, amount };
}

const data = [
  createChartData("00:00", 0),
  createChartData("03:00", 300),
  createChartData("06:00", 600),
  createChartData("09:00", 800),
  createChartData("12:00", 1500),
  createChartData("15:00", 2000),
  createChartData("18:00", 2400),
  createChartData("21:00", 2400),
  createChartData("24:00", undefined)
];

export default function Chart() {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Income Current Month
      </Typography>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24
          }}
        >
          <XAxis dataKey="time" />
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: "middle" }}>
              Sales (Rs)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke="#556CD6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
