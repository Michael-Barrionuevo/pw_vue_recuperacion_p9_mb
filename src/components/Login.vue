<template>
  <div class="login-container">
    <div class="login-card">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="ingresar">
        <div class="form-group">
          <label for="usuario">Usuario</label>
          <input
            id="usuario"
            type="text"
            v-model="usuario"
            placeholder="Ingrese su usuario"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input
            id="password"
            type="password"
            v-model="password"
            placeholder="Ingrese su contraseña"
            required
          />
        </div>
        <p v-if="mensaje" class="mensaje-error">{{ mensaje }}</p>
        <p v-if="mensajeExito" class="mensaje-exito">{{ mensajeExito }}</p>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  </div>
</template>

<script>
import LoginClient from "@/clients/LoginClient.js";

export default {
  name: "Login",
  data() {
    return {
      usuario: "",
      password: "",
      mensaje: "",
      mensajeExito: "",
    };
  },
  methods: {
    ingresar() {
      this.mensaje = "";
      this.mensajeExito = "";

      LoginClient.login(this.usuario, this.password)
        .then((response) => {
          if (response.data && response.data.accessToken) {
            localStorage.setItem("token", response.data.accessToken);
            localStorage.setItem("role", response.data.role);
            this.mensajeExito = "Inicio de sesión exitoso";
          } else {
            this.mensaje = "Credenciales incorrectas";
          }
        })
        .catch(() => {
          this.mensaje = "Error al conectar con el servidor";
        });
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
}

.login-card {
  background: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.login-card h2 {
  margin-bottom: 25px;
  color: #2c3e50;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
  color: #2c3e50;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #38a373;
}

.mensaje-error {
  color: red;
  font-size: 14px;
}

.mensaje-exito {
  color: green;
  font-size: 14px;
}
</style>