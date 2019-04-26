import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  mounted() {
    this.renderChart({
      labels: ["Fixed", "Postpond", "In queue"],
      datasets: [
        {
          backgroundColor: ["#41B883", "#E46651", "#ffce56"],
          data: [40, 39, 10]
        }
      ]
    });
  }
};
