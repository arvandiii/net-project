<template>
  <div class="section">
    <div class="columns">
      <div class="column">
        <h1 class="title is-4">Number of issues</h1>
        <app-issues-chart></app-issues-chart>
      </div>
      <div class="column">
        <h1 class="title is-4">Number of fixed issues</h1>
        <app-fixed-issues-chart></app-fixed-issues-chart>
      </div>
    </div>
    <div class="columns">
      <div class="column is-4">
        <h1 class="title is-4">Issues</h1>
        <app-doughnut-chart></app-doughnut-chart>
      </div>
    </div>
  </div>
</template>

<script>
import IssuesChart from "./IssuesChart.js";
import FixedIssuesChart from "./FixedIssuesChart.js";
import DoughnutChart from "./DoughnutChart.js";

export default {
  name: "app",
  components: {
    "app-issues-chart": IssuesChart,
    "app-fixed-issues-chart": FixedIssuesChart,
    "app-doughnut-chart": DoughnutChart
  }
};
</script>