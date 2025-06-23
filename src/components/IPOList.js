import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { name: "HOME", path: "/admin" },
  { name: "ABOUT", path: "/about" },
  { name: "MARKET DATA", path: "/market-data" },
  { name: "INVEST", path: "/invest" },
  { name: "LIST", path: "/list" },
  { name: "TRADE", path: "/trade" },
  { name: "REGULATION", path: "/regulation" },
  { name: "LEARN", path: "/learn" },
  { name: "RESOURCES", path: "/resources" },
  { name: "COMPLAINTS", path: "/complaints" },
  { name: "RESEARCH", path: "/research" },
];

const ipoData = [
  {
    company: "Arisinfra Solutions Limited",
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

export default function IPOListPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredIpos = ipoData.filter((ipo) =>
    ipo.company.toLowerCase().includes(search.toLowerCase())
  );

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <style>{`
        .ipo-topbar {
          display: flex;
          align-items: center;
          background: #fff;
          border-bottom: 2px solid #e0e0e0;
          padding: 0 32px;
          height: 70px;
          box-shadow: 0 2px 8px rgba(44, 44, 44, 0.04);
        }
        .ipo-logo {
          display: flex;
          align-items: center;
          font-size: 2rem;
          font-weight: bold;
          color: #6c3fc7;
          margin-right: 32px;
          letter-spacing: 1px;
        }
        .ipo-logo-icon {
          width: 40px;
          height: 40px;
          margin-right: 10px;
        }
        .ipo-search-bar {
          margin-left: auto;
          display: flex;
          align-items: center;
        }
        .ipo-search-input {
          padding: 7px 14px;
          border: 1px solid #ccc;
          border-radius: 20px;
          font-size: 1rem;
          outline: none;
          width: 250px;
        }
        .ipo-navbar {
          display: flex;
          align-items: center;
          background: #f8f8fa;
          border-bottom: 2px solid #e0e0e0;
          padding: 0 32px;
          height: 48px;
        }
        .ipo-nav-links {
          display: flex;
          gap: 18px;
          flex: 1;
        }
        .ipo-nav-link {
          font-size: 1rem;
          color: #2d2d6e;
          text-decoration: none;
          padding: 8px 10px;
          border-bottom: 2px solid transparent;
          cursor: pointer;
          transition: border 0.2s, color 0.2s;
        }
        .ipo-nav-link:hover {
          color: #6c3fc7;
          border-bottom: 2px solid #6c3fc7;
        }
        .ipo-table-container {
          max-width: 1200px;
          margin: 40px auto 0 auto;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          padding: 32px 20px;
        }
        .ipo-table-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #2d2d6e;
          margin-bottom: 18px;
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
          background: #6c3fc7;
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
          .ipo-table-container {
            padding: 12px 2px;
          }
          .ipo-table-title {
            font-size: 1.1rem;
          }
          .ipo-table th, .ipo-table td {
            padding: 8px 6px;
            font-size: 0.95rem;
          }
          .ipo-search-input {
            width: 120px;
          }
        }
      `}</style>
      <div className="ipo-topbar">
        <span className="ipo-logo">
          <img
            className="ipo-logo-icon"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="IPO Logo"
          />
          IPO
        </span>
        <div className="ipo-search-bar">
          <input
            className="ipo-search-input"
            type="text"
            placeholder="Search by company"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="ipo-navbar">
        <div className="ipo-nav-links">
          {navLinks.map((link) => (
            <span
              key={link.name}
              className="ipo-nav-link"
              onClick={() => handleNavClick(link.path)}
            >
              {link.name}
            </span>
          ))}
        </div>
      </div>
      <div className="ipo-table-container">
        <div className="ipo-table-title">Current IPO Issues</div>
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
              {filteredIpos.length === 0 ? (
                <tr>
                  <td colSpan={8} style={{ textAlign: "center", color: "#888" }}>
                    No IPOs found.
                  </td>
                </tr>
              ) : (
                filteredIpos.map((ipo, idx) => (
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
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
