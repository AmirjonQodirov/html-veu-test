<template>
  <p class="folder">
    <i class="fas fa-folder"></i>
    {{ name }}
    <span
        class="collapse-icon"
        :class="{ 'rotate-90': click }"
        @click="clicked()"
    >
      <i class="fas fa-angle-right"></i>
    </span>
  </p>


  <div class="folderItem" v-if="click">
    <template class="folder" v-for="folder in folders">
      <FolderView :name="folder.name" :folders="folder.folders" :files="folder.files"/>
    </template>
    <template class="file" v-for="file in files">
      <FileView :name="file.name"/>
    </template>
  </div>
</template>

<script>
import FileView from "./FileView";

export default {
  name: 'FolderView',
  components: {FileView},
  data() {
    return {
      click: false,
    }
  },
  props: {
    name: String,
    folders: Array,
    files: Array,
  },
  methods: {
    clicked() {
      this.click = !this.click;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.folder {
  position: relative;
  color: orangered;
}

.folderItem {
  margin-left: 20px;
}

.showHide {
  background-color: #42b883;
  border: none; /* Remove borders */
  border-radius: 7px;
  color: white; /* White text */
  margin-left: 10px;
  padding: 8px 8px; /* Some padding */
  font-size: 16px; /* Set a font size */
  cursor: pointer; /* Mouse pointer on hover */
}

.collapse-icon {
  position: absolute;
  padding-left: 10px;
  padding-right: 10px;
  color: orangered;
  transition: 0.2s linear;
  cursor: pointer;
}

.rotate-90 {
  transform: rotate(90deg);
  transition: 0.2s linear;
}

.showHide:hover {
  background-color: #2e8260;
}
</style>
