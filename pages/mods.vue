<script>
import {
  Card,
  Button,
  WikiIcon,
  DownloadIcon,
  LeftArrowIcon,
  XIcon,
  SearchIcon,
  DropdownSelect,
} from "omorphia";
export default {
  components: {
    Card,
    Button,
    WikiIcon,
    DownloadIcon,
    LeftArrowIcon,
    XIcon,
    SearchIcon,
    DropdownSelect,
  },
  data: () => {
    return {
      modsList: [],
      docPages: [],
      descending: false,
      orderBy: "Date",
      inputText: "",
    };
  },
  methods: {
    async populateMods() {
      const baseURL = useRuntimeConfig().public.apiURL;
      fetch(baseURL + "/mods")
        .then((data) => data.json())
        .then((data) => (this.modsList = data));

      const { data } = await useAsyncData(`docPages`, () =>
        queryContent("docs").where({ _extension: "md" }).find()
      );
      this.docPages = data;
    },
  },
  beforeMount() {
    this.populateMods();
  },
  computed: {
    modsArray: function () {
      let tempArray = [...this.modsList];

      if (this.descending) tempArray.reverse();

      if (this.inputText != "") {
        tempArray = tempArray.filter((mod) =>
          mod.title.toLowerCase().includes(this.inputText.toLowerCase())
        );
      }

      return tempArray;
    },
  },
};
</script>

<template>
  <div class="hero">
    <h1>Mods</h1>
    <Card>
      <div class="flex-inputs">
        <div class="iconified-input left">
          <SearchIcon />
          <input
            class="search-box"
            v-model="inputText"
            type="text"
            placeholder="Search"
          />
          <Button @click="() => (inputText = '')">
            <XIcon />
          </Button>
        </div>
        <div class="right">
          <DropdownSelect
            class="dropdown"
            v-model="orderBy"
            :options="['Date', 'Title']"
            placeholder="Order By"
          />
          <Button
            @click="
              () => {
                descending = !descending;
              }
            "
            iconOnly
            ><LeftArrowIcon :transform="`rotate(${descending ? -90 : 90})`"
          /></Button>
        </div>
      </div>
    </Card>
    <div class="flex-row image-card-row">
      <Card v-for="mod in modsArray" class="flex-row-item">
        <img :src="mod.galleryImage" />
        <h3>{{ mod.title }}</h3>

        <p>{{ mod.summary }}</p>

        <div class="buttons">
          <NuxtLink :to="mod.modrinthURL" class="link__button" target="_blank">
            <Button color="primary"><DownloadIcon />Download</Button></NuxtLink
          >

          <NuxtLink
            class="link__button"
            :to="'/docs/' + mod.id"
            v-if="
              docPages.filter((page) => page._path === `/docs/${mod.id}`)
                .length > 0
            "
            ><Button><ArchiveIcon />Docs</Button></NuxtLink
          >
        </div>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.right {
  display: flex;
  flex-direction: row;
  gap: var(--gap-md);
}

.dropdown {
  width: fit-content;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
