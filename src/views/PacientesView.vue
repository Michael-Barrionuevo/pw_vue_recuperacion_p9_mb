<template>
  <div>
    <ConsultarPacientes @ver-paciente="seleccionarPaciente" />
    <GuardarPacientes :linkPaciente="linkSeleccionado" />
  </div>
</template>

<script>
import ConsultarPacientes from "../components/ConsultarPacientes.vue";
import GuardarPacientes from "../components/GuardarPacientes.vue";

export default {
  components: {
    ConsultarPacientes,
    GuardarPacientes,
  },
  data() {
    return {
      linkSeleccionado: "",
    };
  },
  methods: {
    seleccionarPaciente(link) {
      this.linkSeleccionado = link;
    },
  },
};
</script>

<style>
</style>