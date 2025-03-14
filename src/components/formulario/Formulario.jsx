import { useState } from "react";

const Formulario = () => {
  const [formData, setFormData] = useState({
    fecha: "",
    hora: "",
    movil: "",
    personal: "",
    kilometros: "",
    litros: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = new URLSearchParams();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
  
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwGorMzPsVigPXyX7OCCXMZXY3-2a-Z71XnGceCg3-Vse_8uX15ZLZCX_D3BeqqNmXHfw/exec",
        {
          method: "POST",
          body: data,
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );
  
      const result = await response.json();
      alert(result.mensaje);
    } catch (error) {
      console.error("Error al enviar los datos", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <label>
        Fecha:
        <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} required />
      </label>

      <label>
        Hora:
        <input type="time" name="hora" value={formData.hora} onChange={handleChange} required />
      </label>

      <label>
        Móvil:
        <input type="number" name="movil" value={formData.movil} onChange={handleChange} required />
      </label>

      <label>
        Personal:
        <input type="text" name="personal" value={formData.personal} onChange={handleChange} required />
      </label>

      <label>
        Kilómetros:
        <input type="number" name="kilometros" value={formData.kilometros} onChange={handleChange} required />
      </label>

      <label>
        Litros:
        <input type="number" name="litros" value={formData.litros} onChange={handleChange} required />
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
