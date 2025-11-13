import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  let body = "";

  // colectăm corpul requestului (Vercel + Vite)
  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", async () => {
    const data = JSON.parse(body);

    try {
      await resend.emails.send({
        from: process.env.FROM_EMAIL || "onboarding@resend.dev",
        to: process.env.CONTACT_TARGET_EMAIL,
        subject: `Cerere ofertă de la ${data.name}`,
        html: `
          <h2>Cerere ofertă personalizată</h2>
          <p><strong>Nume:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Telefon:</strong> ${data.phone}</p>
          <p><strong>Destinație:</strong> ${data.destination}</p>
          <p><strong>Perioadă:</strong> ${data.date}</p>
          <p><strong>Buget:</strong> ${data.budget}</p>
          <p><strong>Mesaj:</strong><br>${data.message}</p>
        `,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("EROARE RESEND:", error);
      res.status(500).json({ success: false, error });
    }
  });
}
