import React from "react";
import styled from "styled-components";
import { Button, Dimensions } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from "react-native-chart-kit";

const LineChartComponent = props => (
  <Container>
    <LineChart
      data={{
        labels: props.time,
        datasets: [
          {
            data: props.data
          }
        ]
      }}
      width={Dimensions.get("window").width} // from react-native
      height={220}
      chartConfig={{
        backgroundColor: "#00008b",
        backgroundGradientFrom: "#4e54c8",
        backgroundGradientTo: "#8f94fb",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        }
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16
      }}
    />
  </Container>
);

export default LineChartComponent;

//Whole Card
const Container = styled.View`
  width: 99%;
  height: 98%;
`;
