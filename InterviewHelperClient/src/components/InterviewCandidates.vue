<template>
  <div>
    <q-list bordered class="rounded-borders">
      <q-item-label header
        >Кандидаты
        <q-btn @click="AddCandidateInput = true" rounded style="float: right"
          >+</q-btn
        ></q-item-label
      >
      <q-separator spaced />
      <q-item
        v-for="candidate in candidates"
        :key="candidate.id"
        :class="{
          'text-green-14':
            currentCandidate !== null && currentCandidate.id === candidate.id,
        }"
      >
        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">{{ candidate.name }}</q-item-label>
        </q-item-section>

        <q-item-section top>
          <q-item-label>
            <span class="text-weight-medium">{{
              new Date(candidate.dateInput).toLocaleDateString()
            }}</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn
              size="12px"
              @click="selectCandidate(candidate.id)"
              flat
              dense
              round
              icon="edit"
            />
            <q-btn
              class="gt-xs"
              size="12px"
              @click="setConfirmToDelete(candidate.id)"
              flat
              dense
              round
              icon="delete"
            />
          </div>
        </q-item-section>
      </q-item>
    </q-list>

    <q-dialog v-model="AddCandidateInput" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Имя</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="name"
            autofocus
            @keyup.enter="AddCandidateInput = false"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Отмена" @click="name = ''" v-close-popup />
          <q-btn flat label="Добавить" @click="add" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="confirmDelete" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">Удалить товарища?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            label="Да"
            color="primary"
            @click="deleteCandidate(selectedToDeleteId)"
            v-close-popup
          />
          <q-btn flat label="Нет" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import parameters from "../modules/common-parameters";

export default {
  props: ["candidates", "currentCandidate"],
  data() {
    return {
      AddCandidateInput: false,
      confirmDelete: false,
      name: "",
      selectedToDeleteId: 0,
    };
  },
  methods: {
    setConfirmToDelete(id) {
      this.selectedToDeleteId = id;
      this.confirmDelete = true;
    },
    async selectCandidate(id) {
      this.$emit("onLoading", true);
      const candidate = await (
        await fetch(`${parameters.serverAddress}/${id}`)
      ).json();

      this.$emit("candidateSelected", candidate);
      this.$emit("onLoading", false);
    },
    async add() {
      this.$emit("onLoading", true);
      try {
        await fetch(parameters.serverAddress, {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            name: this.name,
            dateInput: new Date(),
          }),
        });
      } catch {
        // empty. cors error
      }

      this.name = "";
      this.$emit("reloadCandidates");
      this.$emit("onLoading", false);
    },
    async deleteCandidate(id) {
      this.$emit("onLoading", true);
      await fetch(`${parameters.serverAddress}/${id}`, {
        method: "DELETE",
      });

      this.$emit("reloadCandidates");
      this.$emit("onLoading", false);
    },
  },
};
</script>
