<template>
  <div class="section">
    <div class="modal" :class="actionModalClass">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Action</p>
          <button class="delete" @click="closeActionModal"></button>
        </header>
        <section class="modal-card-body">
          <h4 class="title is-4">
            {{actionModalData.title}}
            <span
              class="tag"
              :class="[actionModalData.priority == 'High'?'is-danger':'is-warning']"
            >{{actionModalData.priority}} priority</span>
          </h4>

          <p>
            <strong>Problem:</strong>
            {{actionModalData.msg}}
          </p>
          <p v-for="(paraf, index) in actionModalData.parafs" :key="index">
            <strong>{{paraf.sender}}:</strong>
            {{paraf.msg}}
          </p>
          <br>
          <br>

          <form>
            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea class="textarea" placeholder="Message" v-model="actionModalData.paraf"></textarea>
              </div>
            </div>
          </form>
          <br>
          <div class="box">
            <form>
              <div class="field is-grouped">
                <div class="control">
                  <div class="select">
                    <select v-model="actionModalData.newAssignedTo">
                      <option>Mohseni</option>
                      <option>Mohammadi</option>
                    </select>
                  </div>
                </div>
                <p class="control">
                  <a class="button is-info" @click="assignTo()">Assign</a>
                </p>
              </div>
            </form>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="closeIssue">Close</button>
          <button class="button" @click="closeActionModal">Cancel</button>
        </footer>
      </div>
    </div>

    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th v-for="(title, index) in tableHead" :key="index">{{title}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(issue, index) in formatedIssues" :key="index">
          <td>{{issue.dateAdded}}</td>
          <td>
            <strong>{{issue.title}}</strong>
          </td>
          <td>
            <p>
              <strong>Problem:</strong>
              {{issue.msg}}
            </p>
            <p v-for="(paraf, index) in issue.parafs" :key="index">
              <strong>{{paraf.sender}}:</strong>
              {{paraf.msg}}
            </p>
          </td>
          <td>
            <span
              class="tag"
              :class="[issue.priority == 'High'?'is-danger':'is-warning']"
            >{{issue.priority}}</span>
          </td>
          <td>
            <div class="tags">
              <span class="tag" v-for="(assignedTo, index) in issue.assignedTo" :key="index">
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
          <td>
            <button
              @click="openActionModal(index)"
              class="button is-primary"
              :disabled="issue.state == 'Closed'"
            >Action</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from "moment";
import _ from "underscore";

const defaultActionModalData = {
  index: 0,
  title: "",
  msg: "",
  isHighPriority: false,
  assignedTo: "Ahmadi",
  newAssignedTo: "Mohseni",
  paraf: ""
};

export default {
  data() {
    return {
      actionModalClass: { "is-active": false },
      actionModalData: defaultActionModalData,
      tableHead: [
        "Date added",
        "Title",
        "Message",
        "Priority",
        "Assigned to",
        "State",
        "Action"
      ],
      issues: [
        {
          id: "AYK12",
          title: "Fix loby window",
          msg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
          priority: "High",
          assignedTo: [{ hasSeen: false, staff: "Ahmadi" }],
          dateAdded: 1556179693374,
          state: "Open",
          parafs: []
        },
        {
          id: "AYK13",
          title: "Loby is hot",
          msg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
          priority: "Low",
          assignedTo: [{ hasSeen: true, staff: "Ahmadi" }],
          dateAdded: 1556179683374,
          state: "Closed",
          parafs: [{ sender: "Ahmadi", msg: "We can do nothing." }]
        },

        {
          id: "AYK14",
          title: "Internet problem",
          msg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
          priority: "Low",
          assignedTo: [{ hasSeen: false, staff: "Ahmadi" }],
          dateAdded: 1555979393374,
          state: "open",
          parafs: []
        },
        {
          id: "AYK15",
          title: "Fix library window",
          msg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
          priority: "Low",
          assignedTo: [
            { hasSeen: true, staff: "Mohseni" },
            { hasSeen: false, staff: "Ahmadi" }
          ],
          dateAdded: 1556079193374,
          state: "open",
          parafs: [
            {
              sender: "Mohseni",
              msg: "It is not my responsibility. I will assign it to ahmadi."
            }
          ]
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
    openActionModal(index) {
      this.actionModalClass["is-active"] = true;
      this.actionModalData = { ...this.formatedIssues[index] };
    },
    closeActionModal() {
      this.actionModalClass["is-active"] = false;
      this.modal = defaultActionModalData;
    },
    closeIssue() {
      const index = _.findIndex(
        this.issues,
        issue => issue.id == this.actionModalData.id
      );
      this.issues[index].assignedTo[
        this.issues[index].assignedTo.length - 1
      ].hasSeen = true;
      this.issues[index].state = "Closed";
      this.issues[index].parafs.push({
        sender: "Ahmadi",
        msg: this.actionModalData.paraf
      });
      this.closeActionModal();
    },
    assignTo() {
      const index = _.findIndex(
        this.issues,
        issue => issue.id == this.actionModalData.id
      );
      this.issues[index].assignedTo[
        this.issues[index].assignedTo.length - 1
      ].hasSeen = true;
      this.issues[index].assignedTo.push({
        staff: this.actionModalData.newAssignedTo,
        hasSeen: false
      });
      this.issues[index].state = "Closed";
      this.issues[index].parafs.push({
        sender: "Ahmadi",
        msg: this.actionModalData.paraf
      });
      this.closeActionModal();
    }
  },
  components: {}
};
</script>

<style>
</style>
