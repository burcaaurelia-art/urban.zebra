export default function CereOferta() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div style={{ padding: "40px", width: "100%", maxWidth: "700px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "20px" }}>
          Cere ofertă personalizată ✈️
        </h1>

        {/* Formular simplu, FĂRĂ JavaScript, trimite direct la Web3Forms */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          {/* efd6f339-47d1-4294-bebc-a24b8f3994f2 */}
          <input
            type="hidden"
            name="access_key"
            value="e6df6339-47d1-4294-bebc-a24b8f3994f2"
          />

          {/* subiectul emailului pe care îl primești */}
          <input
            type="hidden"
            name="subject"
            value="Cerere ofertă de la Urban.Zebra"
          />

          <input
            name="name"
            placeholder="Nume complet"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
          />

          <input
            name="phone"
            placeholder="Telefon"
            required
          />

          <input
            name="destination"
            placeholder="Destinație"
          />

          <input
            name="date"
            placeholder="Perioada"
          />

          <input
            name="budget"
            placeholder="Buget"
          />

          <textarea
            name="message"
            placeholder="Detalii"
            rows="4"
          ></textarea>

          <label style={{ fontSize: "14px" }}>
            <input type="checkbox" name="gdpr" required /> Accept GDPR
          </label>

          <button
            type="submit"
            style={{
              marginTop: "10px",
              padding: "10px",
              backgroundColor: "#ffffff",
              color: "#000000",
              fontWeight: "600",
              border: "none",
              cursor: "pointer"
            }}
          >
            Trimite
          </button>
        </form>
      </div>
    </div>
  );
}
