import axios from "axios";

const API_URL = "http://localhost:8081/consultorio/api/v1.0/pacientes";

const getAuthHeader = () => {
    const token = localStorage.getItem("token");
    return {
        headers: {
            Authorization: "Bearer " + token
        }
    };
};

const guardarPaciente = (paciente) => {
    return axios.post(API_URL, paciente, getAuthHeader());
};

const listarPacientes = () => {
    return axios.get(API_URL, getAuthHeader());
};

const obtenerPacientePorLink = (url) => {
    return axios.get("http://localhost:8081" + url, getAuthHeader());
};

// Fachada

export const guardarPacienteFachada = (paciente) => {
    return guardarPaciente(paciente);
};

export const listarPacientesFachada = () => {
    return listarPacientes();
};

export const obtenerPacientePorLinkFachada = (url) => {
    return obtenerPacientePorLink(url);
};
