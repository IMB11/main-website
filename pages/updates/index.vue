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
export default defineNuxtComponent({
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
  seoMeta() {
    return {
      title: "mineblock11 | Updates",
    };
  },
  data: () => {
    return {
      updatesList: [],
      descending: false,
      orderBy: "Date",
      inputText: "",
    };
  },
  methods: {
    populateUpdates() {
      const baseURL = useRuntimeConfig().public.apiURL;
      fetch(baseURL + "/updates")
        .then((data) => data.json())
        .then((data) => (this.updatesList = data));
    },
  },
  beforeMount() {
    this.populateUpdates();
  },
  computed: {
    updatesArray: function () {
      let tempArray = [...this.updatesList];

      if (this.descending) tempArray.reverse();

      if (this.inputText != "") {
        tempArray = tempArray.filter((update) =>
          update.title.toLowerCase().includes(this.inputText.toLowerCase())
        );
      }

      return tempArray;
    },
  },
});
</script>

<template>
  <div class="hero">
    <h1>Updates ({{ updatesList.length }})</h1>
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
    <div class="flex-row">
      <Card v-for="update in updatesArray" class="flex-row-item">
        <img :src="update.galleryImage" />

        <h3>{{ update.title }}</h3>

        <p>{{ update.summary }}</p>

        <div class="buttons">
          <NuxtLink
            :to="update.modrinthURL"
            class="link__button"
            target="_blank"
          >
            <Button color="primary"><DownloadIcon />Download</Button></NuxtLink
          >

          <NuxtLink class="link__button" :to="'/updates/' + update.id"
            ><Button>Read More</Button></NuxtLink
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
