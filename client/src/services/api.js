import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Chatbot API
export const sendChatMessage = async (
  message,
  history = []
) => {
  try {
    const response = await api.post("/chat", {
      message,
      history,
    });

    return response.data;
  } catch (error) {
    console.error(
      "Chat API Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// URL Scanner API
export const scanUrl = async (url) => {
  try {
    const response = await api.post("/scan", {
      url,
    });

    return response.data;
  } catch (error) {
    console.error(
      "Scan API Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Contact Form API
export const submitContact = async (
  formData
) => {
  try {
    const response = await api.post(
      "/contact",
      formData
    );

    return response.data;
  } catch (error) {
    console.error(
      "Contact API Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export default api;