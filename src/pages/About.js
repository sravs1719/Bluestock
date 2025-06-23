import React from "react";

export default function About() {
  return (
    <div style={{ maxWidth: 700, margin: "40px auto", background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", padding: 32, fontFamily: 'Segoe UI, Arial, sans-serif' }}>
      <h1 style={{ color: "#6c3fc7", fontWeight: 700, marginBottom: 16 }}>About IPOs</h1>
      <p style={{ fontSize: "1.1rem", marginBottom: 24 }}>
        An <b>IPO (Initial Public Offering)</b> is the first time a company offers its shares to the public through the stock exchange. It allows everyday investors to buy shares and become part-owners of growing businesses. IPOs are often used by companies to raise funds for expansion, innovation, and future goals.
      </p>
      <div style={{ fontSize: "1.08rem", marginBottom: 12 }}>
        <span role="img" aria-label="chart">��</span> <b>What You'll Find in Our App:</b>
      </div>
      <ul style={{ fontSize: "1.08rem", lineHeight: 1.7, marginLeft: 24 }}>
        <li>✅ Live IPO listings with start and end dates</li>
        <li>✅ Company details and security types</li>
        <li>✅ Number of shares offered and total bids</li>
        <li>✅ Subscription rates across all categories</li>
        <li>✅ Clean, easy-to-read tables and responsive design</li>
      </ul>
    </div>
  );
} 