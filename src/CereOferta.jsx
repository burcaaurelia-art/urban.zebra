export default function CereOferta() {
  return (
    <div style={{
      padding: "40px",
      maxWidth: "600px",
      margin: "0 auto",
      color: "#fff"
    }}>
      <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
        Cere ofertă personalizată ✈️
      </h1>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}
      >
        {/* Cheia ta Web3Forms */}
        <input
          type="hidden"
          name="access_key"
          value="e6df6339-47d1-4294-bebc-a24b8f3994f2"
        />

        {/* Redirect după succes */}
        <input
          type="hidden"
          name="redirect"
          value="https://urban-zebra-blog.vercel.app/cere-oferta"
        />

        <input
          name="name"
          placeholder="Nume complet"
          required
          style={{ padding: "10px" }}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          style={{ padding: "10px" }}
        />

        <input
          name="phone"
          placeholder="Telefon"
          required
          style={{ padding: "10px" }}
        />

        <input
          name="destination"
          placeholder="Destinație"
          style={{ padding: "10px" }}
        />

        <input
          name="date"
          placeholder="Perioada"
          style={{ padding: "10px" }}
        />

        <input
          name="budget"
          placeholder="Buget"
          style={{ padding: "10px" }}
        />

        <textarea
          name="message"
          placeholder="Detalii"
          rows={4}
          style={{ padding: "10px" }}
        />

        <label style={{ fontSize: "14px" }}>
          <input type="checkbox" name="gdpr" required /> Accept GDPR
        </label>

        <button
          type="submit"
          style={{
            padding: "12px",
            background: "#fff",
            color: "#000",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Trimite
        </button>
      </form>
    </div>
  );
}
