<template>
  <div class="detalle-paciente">
    <h3>PACIENTE</h3>
    <div class="form-group">
      <label>ID</label>
      <input type="text" v-model="paciente.id" readonly />
    </div>
    <div class="form-group">
      <label>Nombre</label>
      <input type="text" v-model="paciente.nombre" readonly />
    </div>
    <div class="form-group">
      <label>Apellido</label>
      <input type="text" v-model="paciente.apellido" readonly />
    </div>
    <div class="form-group">
      <label>Dirección</label>
      <input type="text" v-model="paciente.direccion" readonly />
    </div>
    <div class="form-group">
      <label>Fecha de Nacimiento</label>
      <input type="date" v-model="paciente.fechaNacimiento" readonly />
    </div>
  </div>
</template>

<script>
import { obtenerPacientePorLinkFachada } from "@/clients/PacientesClients.js";

export default {
  name: "GuardarPacientes",
  props: {
    linkPaciente: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      paciente: {
        id: "",
        nombre: "",
        apellido: "",
        direccion: "",
        fechaNacimiento: "",
      },
    };
  },
  watch: {
    linkPaciente(nuevoLink) {
      if (nuevoLink) {
        this.cargarPaciente(nuevoLink);
      }
    },
  },
  methods: {
    cargarPaciente(url) {
      obtenerPacientePorLinkFachada(url)
        .then((response) => {
          this.paciente = response.data;
        })
        .catch((error) => {
          console.error("Error al obtener paciente:", error);
        });
    },
  },
};
</script>

<style scoped>
.detalle-paciente {
  max-width: 400px;
  margin: 20px auto;
  text-align: left;
}

.detalle-paciente h3 {
  text-align: center;
  color: #1a3a5c;
  font-weight: bold;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #1a3a5c;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 2px solid #1a3a5c;
  border-radius: 8px;
  font-size: 14px;
  box-sizing: border-box;
  background-color: #fff;
}
</style>