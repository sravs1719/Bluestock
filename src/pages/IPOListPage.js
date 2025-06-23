import React from "react";

export default function IPOListPage() {
  const ipoData = [
    {
      company: "Arisinfrra Solutions Limited",
      security: "EQ",
      start: "18-Jun-2025",
      end: "20-Jun-2025",
      status: "Active",
      offered: "1,30,84,656",
      bids: "14,83,380",
      subscription: "0.11",
      link: "#"
    },
    {
      company: "Influx Healthtech Limited",
      security: "SME",
      start: "18-Jun-2025",
      end: "20-Jun-2025",
      status: "Active",
      offered: "43,64,400",
      bids: "2,34,84,000",
      subscription: "5.38",
      link: "#"
    },
    {
      company: "Eppeltone Engineers Limited",
      security: "SME",
      start: "17-Jun-2025",
      end: "19-Jun-2025",
      status: "Active",
      offered: "24,56,000",
      bids: "8,35,30,000",
      subscription: "34.01",
      link: "#"
    },
    {
      company: "Patil Automation Limited",
      security: "SME",
      start: "16-Jun-2025",
      end: "18-Jun-2025",
      status: "Active",
      offered: "41,49,600",
      bids: "39,14,62,800",
      subscription: "94.34",
      link: "#"
    },
    {
      company: "Samay Project Services Limited",
      security: "SME",
      start: "16-Jun-2025",
      end: "18-Jun-2025",
      status: "Active",
      offered: "31,20,000",
      bids: "8,43,28,000",
      subscription: "27.03",
      link: "#"
    }
  ];

  return (
    <div className="ipo-page">
      <style>{`
        .ipo-page {
          font-family: 'Segoe UI', Arial, sans-serif;
          background: #f8f9fa;
          min-height: 100vh;
          padding: 24px 8px;
        }
        .ipo-container {
          max-width: 1100px;
          margin: 0 auto;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          padding: 32px 20px;
        }
        .ipo-title {
          font-size: 2rem;
          font-weight: 700;
          color: #2d2d6e;
          margin-bottom: 18px;
          text-align: center;
        }
        .ipo-table-wrapper {
          overflow-x: auto;
        }
        .ipo-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 900px;
        }
        .ipo-table th, .ipo-table td {
          padding: 12px 10px;
          text-align: left;
        }
        .ipo-table th {
          background: #2d2d6e;
          color: #fff;
          font-weight: 600;
        }
        .ipo-table tr:nth-child(even) {
          background: #f3f3f9;
        }
        .ipo-table a {
          color: #2d2d6e;
          text-decoration: underline;
        }
        .ipo-table td {
          font-size: 1rem;
        }
        @media (max-width: 700px) {
          .ipo-container {
            padding: 12px 2px;
          }
          .ipo-title {
            font-size: 1.2rem;
          }
          .ipo-table th, .ipo-table td {
            padding: 8px 6px;
            font-size: 0.95rem;
          }
        }
      `}</style>
      <div className="ipo-container">
        <div className="ipo-title">Current IPO Issues</div>
        <div className="ipo-table-wrapper">
          <table className="ipo-table">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Security Type</th>
                <th>Issue Start Date</th>
                <th>Issue End Date</th>
                <th>Status</th>
                <th>Offered/Reserved</th>
                <th>Bids</th>
                <th>Subscription Category</th>
              </tr>
            </thead>
            <tbody>
              {ipoData.map((ipo, idx) => (
                <tr key={idx}>
                  <td>
                    <a href={ipo.link} target="_blank" rel="noopener noreferrer">
                      {ipo.company}
                    </a>
                  </td>
                  <td>{ipo.security}</td>
                  <td>{ipo.start}</td>
                  <td>{ipo.end}</td>
                  <td>{ipo.status}</td>
                  <td>{ipo.offered}</td>
                  <td>{ipo.bids}</td>
                  <td>{ipo.subscription}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 