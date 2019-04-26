import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  mounted() {
    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "All Issues",
            borderColor: "#cc65fe",
            backgroundColor: "#cc65fe",
            data: [40, 39, 10, 40, 39, 50, 40]
          },
          {
            label: "Fixed Issues",
            borderColor: "#36a2eb",
            backgroundColor: "#36a2eb",
            data: [15, 21, 0, 18, 9, 35, 4]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
