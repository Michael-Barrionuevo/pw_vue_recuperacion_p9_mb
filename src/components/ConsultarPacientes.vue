<template>
  <div>
    <h3>Lista de Pacientes</h3>
    <table class="tabla-pacientes">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha de Nacimiento</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="paciente in pacientes" :key="paciente.id">
          <td>{{ paciente.id }}</td>
          <td>{{ paciente.nombre }}</td>
          <td>{{ paciente.apellido }}</td>
          <td>{{ paciente.fechaNacimiento }}</td>
          <td>
            <button class="btn-ver" @click="verPaciente(paciente)">Ver</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { listarPacientesFachada } from "@/clients/PacientesClients.js";

export default {
  name: "ConsultarPacientes",
  data() {
    return {
      pacientes: [],
    };
  },
  methods: {
    cargarPacientes() {
      listarPacientesFachada()
        .then((response) => {
          this.pacientes = response.data;
        })
        .catch((error) => {
          console.error("Error al cargar pacientes:", error);
        });
    },
    verPaciente(paciente) {
      const selfLink = paciente.links.find((l) => l.rel === "self");
      if (selfLink) {
        this.$emit("ver-paciente", selfLink.href);
      }
    },
  },
  mounted() {
    this.cargarPacientes();
  },
};
</script>

<style scoped>
.tabla-pacientes {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

.tabla-pacientes th,
.tabla-pacientes td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.tabla-pacientes th {
  background-color: #f0f0f0;
  font-weight: bold;
}

.btn-ver {
  background-color: #c0392b;
  color: white;
  border: none;
  padding: 6px 16px;
  cursor: pointer;
  border-radius: 2px;
}

.btn-ver:hover {
  background-color: #a93226;
}
</style>