import { useState } from "react";

const Formulario = () => {
  const [formData, setFormData] = useState({
    fecha: "",
    hora: "",
    movil: "",
    personal: "",
    kilometros: "",
    litros: "",
    foto: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      await fetch("URL_DEL_SCRIPT_GOOGLE_APPS", {
        method: "POST",
        body: data,
      });
      alert("Datos enviados correctamente");
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

      <label>
        Foto:
        <input type="file" name="foto" onChange={handleChange} accept="image/*" required />
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
