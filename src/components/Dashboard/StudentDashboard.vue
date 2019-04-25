<template>
  <div class="section">
    <div class="modal" :class="modalClass">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add new issue</p>
          <button class="delete" @click="closeModal"></button>
        </header>
        <section class="modal-card-body">
          <form>
            <div class="field">
              <label class="label">Title</label>
              <div class="control">
                <input class="input" type="text" placeholder="Title" v-model="modal.title">
              </div>
            </div>

            <div class="field">
              <label class="label">Assign to</label>
              <div class="control">
                <div class="select">
                  <select v-model="modal.assignedTo">
                    <option selected>Ahmadi</option>
                    <option>Mohseni</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea class="textarea" placeholder="Message" v-model="modal.msg"></textarea>
              </div>
            </div>

            <div class="field">
              <label class="checkbox">
                <input type="checkbox" v-model="modal.isHighPriority">
                High priority
              </label>
            </div>
          </form>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="addIssue">Add</button>
          <button class="button" @click="closeModal">Cancel</button>
        </footer>
      </div>
    </div>

    <button class="button is-primary is-pulled-right" @click="openModal">Add new issue</button>
    <br>
    <br>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th v-for="(title, index) in tableHead" v-bind:key="index">{{title}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(issue, index) in formatedIssues" v-bind:key="index">
          <td>{{issue.dateAdded}}</td>
          <td>
            <strong>{{issue.title}}</strong>
          </td>
          <td>{{issue.msg}}</td>
          <td>
            <span
              class="tag"
              :class="[issue.priority == 'High'?'is-danger':'is-warning']"
            >{{issue.priority}}</span>
          </td>
          <td>
            <div class="tags">
              <span class="tag" v-for="(assignedTo, index) in issue.assignedTo" v-bind:key="index">
                <span>{{assignedTo.staff}}</span>
                <span class="icon has-text-info" v-if="assignedTo.hasSeen">
                  <i class="fas fa-check-circle"></i>
                </span>
              </span>
            </div>
          </td>
          <td>
            <span
              class="tag"
              :class="[issue.state == 'Closed'?'is-success':'is-info']"
            >{{issue.state}}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from "moment";
import _ from "underscore";

const defaultModal = {
  title: "",
  msg: "",
  isHighPriority: false,
  assignedTo: "Ahmadi"
};

export default {
  data() {
    return {
      modalClass: { "is-active": false },
      modal: defaultModal,
      tableHead: [
        "Date added",
        "Title",
        "Message",
        "Priority",
        "Assigned to",
        "State"
      ],
      issues: [
        {
          title: "Fix loby window",
          msg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
          priority: "High",
          assignedTo: [{ hasSeen: false, staff: "Ahmadi" }],
          dateAdded: 1556179693374,
          state: "Open"
        },
        {
          title: "Loby is hot",
          msg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
          priority: "Low",
          assignedTo: [{ hasSeen: true, staff: "Ahmadi" }],
          dateAdded: 1556179683374,
          state: "Closed"
        },
        {
          title: "Loby is cold",
          msg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
          priority: "High",
          assignedTo: [{ hasSeen: true, staff: "Mohseni" }],
          dateAdded: 1555579593374,
          state: "Closed"
        },
        {
          title: "Internet problem",
          msg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
          priority: "Low",
          assignedTo: [{ hasSeen: false, staff: "Ahmadi" }],
          dateAdded: 1555979393374,
          state: "open"
        },
        {
          title: "Fix library window",
          msg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
          priority: "Low",
          assignedTo: [
            { hasSeen: true, staff: "Mohseni" },
            { hasSeen: false, staff: "Ahmadi" }
          ],
          dateAdded: 1556079193374,
          state: "open"
        }
      ]
    };
  },
  computed: {
    formatedIssues() {
      const sortedByDate = _.sortBy(this.issues, o => -o.dateAdded);
      const formatedIssues = _.map(sortedByDate, o => ({
        ...o,
        dateAdded: moment(o.dateAdded).format("MM-D-YYYY")
      }));
      return formatedIssues;
    }
  },
  methods: {
    addIssue() {
      this.issues.push({
        title: this.modal.title,
        msg: this.modal.msg,
        priority: this.modal.isHighPriority ? "High" : "Low",
        assignedTo: [{ hasSeen: false, staff: this.modal.assignedTo }],
        dateAdded: Date.now(),
        state: "open"
      });
      closeModal();
    },
    closeModal() {
      this.modalClass["is-active"] = false;
      this.modal = defaultModal;
    },
    openModal() {
      this.modalClass["is-active"] = true;
    }
  },
  components: {}
};
</script>

<style>
</style>
