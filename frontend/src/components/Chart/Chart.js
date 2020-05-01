import React from "react";
import Plot from "react-plotly.js";

const Chart = (props) => {
  return (
    <>
      <Plot
        className="plot"
        data={[
          {
            type: "scatterpolar",
            theta: [
              "acousticness",
              "danceability",
              "energy",
              "instrumentalness",
              "liveness",
              "mode",
              "speechiness",
              "valence",
            ],
            r: [
              props.visiualization.graphInfo[0],
              props.visiualization.graphInfo[1],
              props.visiualization.graphInfo[2],
              props.visiualization.graphInfo[3],
              props.visiualization.graphInfo[4],
              props.visiualization.graphInfo[5],
              props.visiualization.graphInfo[6],
              props.visiualization.graphInfo[7],
            ],
            fill: "toself",
          },
        ]}
        //   style={{ width: 100%, height: 100%" }}
        layout={{
          width: 500,
          height: 500,
          title: "Average Attributes of Your Musical Preferences ",
          paper_bgcolor: "rgba(0, 0, 0, 0)",
          plot_bgcolor: "rgba(0,0,0,0)",

          polar: {
            radialaxis: {
              visible: true,
              range: [0, 1],
            },
          },

          showlegend: false,
        }}
        marker={{
          color: "rgb(0, 0, 0,0)",
        }}
      />
    </>
  );
};

export default Chart;
