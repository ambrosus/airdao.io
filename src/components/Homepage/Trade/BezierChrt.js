import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory';

export default function BezierChart(props) {
  const formattedData = props.data.map((point, i) => ({
    x: i,
    y: point,
  }));

  return (
    <VictoryChart padding={0} height={200}>
      <VictoryAxis
        dependentAxis={false}
        crossAxis={false}
        style={{
          axis: { stroke: 'transparent' },
          grid: {
            stroke: 'transparent',
          },
          ticks: {
            stroke: 'transparent',
          },
          tickLabels: {
            fill: 'transparent',
          },
        }}
      />
      <VictoryLine
        interpolation="natural"
        style={{
          data: {
            stroke: '#2dba8d',
            strokeWidth: 5,
            transform: 'scaleY(0.98)',
          },
        }}
        data={formattedData}
      />
    </VictoryChart>
  );
}
