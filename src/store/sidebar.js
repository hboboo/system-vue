import { defineStore } from "pinia";
import { ref } from "vue";

export const useSidebarStore = defineStore("sidebar", () => {
  const isCollapse = ref(false);

  function toggleSidebar() {
    isCollapse.value = !isCollapse.value;
  }

  return { isCollapse, toggleSidebar };
});

/* 
  ref() 就是 state 属性
  computed() 就是 getters
  function() 就是 actions
*/
