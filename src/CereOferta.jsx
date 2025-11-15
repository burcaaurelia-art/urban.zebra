import React, { useState } from "react";

export default function CereOferta() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefon: "",
    tip: "",
    perioada: "",
    buget: "",
    detalii: "",
    gdpr: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construim payload pentru Web3Forms
    const payload = {
      access_key: "cf0e6399-47d1-4294-bebc-a24b8f3994f2",
      subject: "Cerere ofertă de la Urban.Zebra",
      name: formData.name,
      email: formData.email,
      telefon: formData.telefon,
      tip: formData.tip,
      perioada: formData.perioada,
      buget: formData.buget,
      detalii: formData.detalii,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        alert("Cererea a fost trimisă cu succes!");
      } else {
        alert("Eroare la trimitere: " + result.message);
      }
    } catch (error) {
      alert("A apărut o eroare la trimitere.");
    }
  };

  return (
    <div className="form-container">
      <h2>Cere ofertă personalizată ✈️</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nume" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="text" name="telefon" placeholder="Telefon" required onChange={handleChange} />
        <input type="text" name="tip" placeholder="Tip vacanță" onChange={handleChange} />
        <input type="text" name="perioada" placeholder="Perioada" onChange={handleChange} />
        <input type="text" name="buget" placeholder="Buget" onChange={handleChange} />
        
        <textarea name="detalii" placeholder="Detalii" onChange={handleChange}></textarea>

        <label style={{ color: "#fff" }}>
          <input type="checkbox" name="gdpr" onChange={handleChange} /> Accept GDPR
        </label>

        <button type="submit">Trimite</button>
      </form>
    </div>
  );
}
