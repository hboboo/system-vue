import { defineStore } from "pinia";

export const useTabsStore = defineStore("tabs", {
  state: () => {
    return {
      list: [],
    };
  },
  getters: {
    nameList: (state) => {
      return state.list.map((item) => item.name);
    },
  },
  actions: {
    setTabsItem(data) {
      this.list.push(data);
    },
    delTabsItem(index) {
      this.list.splice(index, 1);
    },
    clearTabs() {
      this.list = [];
    },
    closeTabsOther(data) {
      this.list = data;
    },
  },
});
