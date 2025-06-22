import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const calculators = [
  { name: "SIP Calculator", desc: "Estimate returns on a SIP", path: "/calculator/sip" },
  { name: "SWP Calculator", desc: "Returns on your systematic withdrawal plan", path: "/calculator/swp" },
  { name: "Brokerage Calculator", desc: "Estimate charges for your trade/investment", path: "/calculator/brokerage" },
  { name: "Margin Calculator", desc: "Estimate balance needed to buy/sell a stock", path: "/calculator/margin" },
];

const ipoList = [
  {
    name: "Eppeltone Engineers",
    date: "19 Jun",
    status: "34.01x",
    action: "Apply",
    type: "SME",
    info: "You are applying for Eppeltone Engineers IPO. Please ensure your details are correct before proceeding.",
  },
  {
    name: "Influx Healthtech",
    date: "20 Jun",
    status: "5.38x",
    action: "Apply",
    type: "SME",
    info: "You are applying for Influx Healthtech IPO. Please ensure your details are correct before proceeding.",
  },
  {
    name: "Mayasheel Ventures",
    date: "24 Jun",
    status: "0.00x",
    action: "Pre-apply",
    type: "SME",
    info: "You are pre-applying for Mayasheel Ventures IPO. Please ensure your details are correct before proceeding.",
  },
  {
    name: "Safe Enterprises Retail Fixtures",
    date: "24 Jun",
    status: "0.00x",
    action: "Pre-apply",
    type: "SME",
    info: "You are pre-applying for Safe Enterprises Retail Fixtures IPO. Please ensure your details are correct before proceeding.",
  },
];

export default function AdminDashboard() {
  const [search, setSearch] = useState("");
  const [showAppInfo, setShowAppInfo] = useState(false);
  const [appInfo, setAppInfo] = useState("");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("login"); // 'login' or 'signup'
  const [notification, setNotification] = useState({ show: false, message: "", type: "success" });
  const navigate = useNavigate();

  const filteredIpos = ipoList.filter((ipo) =>
    ipo.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCalculatorClick = (path) => {
    navigate(path);
  };

  const handleApplyClick = (ipo) => {
    setAppInfo(ipo.info);
    setShowAppInfo(true);
  };

  const closeAppInfo = () => {
    setShowAppInfo(false);
    setAppInfo("");
  };

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  const closeAuthModal = () => {
    setShowAuthModal(false);
  };

  // Show notification for 2.5 seconds
  const showNotification = (message, type = "success") => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: "", type });
    }, 2500);
  };

  // Handle login/signup form submit
  const handleAuthSubmit = (e) => {
    e.preventDefault();
    closeAuthModal();
    if (authMode === "login") {
      showNotification("Login successful!", "success");
    } else {
      showNotification("Sign up successful! Registration completed.", "success");
    }
  };

  return (
    <>
      <style>{`
        body, #root, .app-bg {
          min-height: 100vh;
          margin: 0;
          padding: 0;
        }
        .app-bg {
          min-height: 100vh;
          background: linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%);
          background-repeat: no-repeat;
          background-attachment: fixed;
        }
        .dashboard-header-bar {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255,255,255,0.95);
          border-bottom: 1px solid #eee;
          padding: 0.5rem 2rem 0.5rem 2rem;
          position: sticky;
          top: 0;
          z-index: 10;
          box-shadow: 0 2px 8px rgba(0,0,0,0.03);
        }
        .logo-ipo {
          display: flex;
          align-items: center;
        }
        .logo-ipo-img {
          width: 44px;
          height: 44px;
          object-fit: contain;
          margin-right: 0.7rem;
        }
        .logo-ipo-text {
          font-size: 1.5rem;
          font-weight: bold;
          color: #2d72d9;
          letter-spacing: 1px;
          font-family: 'Segoe UI', Arial, sans-serif;
        }
        .auth-btn {
          margin-left: 1rem;
          background: #2d72d9;
          color: #fff;
          border: none;
          padding: 0.4rem 1.1rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          transition: background 0.2s;
        }
        .auth-btn:hover {
          background: #1a4e8a;
        }
        .auth-modal-bg {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
        }
        .auth-modal-content {
          background: #fff;
          padding: 2rem 2.5rem;
          border-radius: 8px;
          min-width: 320px;
          max-width: 95vw;
          box-shadow: 0 2px 16px rgba(0,0,0,0.15);
        }
        .auth-modal-content h2 {
          margin-bottom: 1rem;
        }
        .auth-modal-content form {
          display: flex;
          flex-direction: column;
        }
        .auth-modal-content input {
          margin-bottom: 1rem;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }
        .auth-modal-content button[type="submit"] {
          background: #2d72d9;
          color: #fff;
          border: none;
          padding: 0.5rem 1.2rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
        }
        .auth-modal-content .switch-link {
          margin-top: 0.7rem;
          color: #2d72d9;
          background: none;
          border: none;
          cursor: pointer;
          text-decoration: underline;
          font-size: 0.98rem;
        }
        .notification-bar {
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          background: #4caf50;
          color: #fff;
          padding: 0.8rem 2.5rem;
          border-radius: 0 0 8px 8px;
          font-size: 1.1rem;
          z-index: 3000;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          animation: fadeIn 0.3s;
        }
        .notification-bar.error {
          background: #e53935;
        }
        @keyframes fadeIn {
          from { opacity: 0; top: -40px; }
          to { opacity: 1; top: 0; }
        }
        .dashboard-container {
          display: flex;
          min-height: 100vh;
          background: transparent;
        }
        .sidebar {
          background: rgba(255,255,255,0.97);
          padding: 2rem 1rem;
          min-width: 220px;
          border-right: 1px solid #eee;
        }
        .sidebar h2 {
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }
        .sidebar ul {
          list-style: none;
          padding: 0;
        }
        .sidebar li {
          margin-bottom: 1.5rem;
          cursor: pointer;
          transition: background 0.2s;
          border-radius: 4px;
          padding: 0.5rem 0.5rem;
        }
        .sidebar li:hover {
          background: #f0f4fa;
        }
        .sidebar strong {
          display: block;
          font-size: 1rem;
          color: #2d72d9;
        }
        .sidebar span {
          font-size: 0.9rem;
          color: #666;
        }
        .main-content {
          flex: 1;
          padding: 2rem;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .header input {
          padding: 0.5rem 1rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          width: 220px;
        }
        .ipo-table {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .ipo-table-header,
        .ipo-table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          align-items: center;
          padding: 1rem;
          border-bottom: 1px solid #f0f0f0;
        }
        .ipo-table-header {
          background: #f5f7fa;
          font-weight: bold;
        }
        .ipo-table-row:last-child {
          border-bottom: none;
        }
        .ipo-action {
          background: #2d72d9;
          color: #fff;
          border: none;
          padding: 0.5rem 1.2rem;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .ipo-action:hover {
          background: #1a4e8a;
        }
        .no-results {
          padding: 2rem;
          text-align: center;
          color: #888;
        }
        .modal-bg {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-content {
          background: #fff;
          padding: 2rem;
          border-radius: 8px;
          min-width: 300px;
          max-width: 90vw;
          box-shadow: 0 2px 16px rgba(0,0,0,0.15);
        }
        .modal-content button {
          margin-top: 1rem;
        }
        @media (max-width: 900px) {
          .dashboard-header-bar {
            flex-direction: column;
            align-items: flex-start;
            padding: 0.5rem 1rem 0.5rem 1rem;
          }
          .logo-ipo {
            margin-bottom: 0.5rem;
          }
          .dashboard-container {
            flex-direction: column;
          }
          .sidebar {
            min-width: 100%;
            border-right: none;
            border-bottom: 1px solid #eee;
          }
          .main-content {
            padding: 1rem;
          }
        }
        @media (max-width: 600px) {
          .ipo-table-header,
          .ipo-table-row {
            grid-template-columns: 1.5fr 1fr 1fr;
          }
          .ipo-table-header span:last-child,
          .ipo-table-row button {
            display: none;
          }
          .header input {
            width: 100px;
          }
          .logo-ipo-text {
            font-size: 1.1rem;
          }
          .logo-ipo-img {
            width: 32px;
            height: 32px;
          }
        }
      `}</style>
      <div className="app-bg">
        {notification.show && (
          <div className={`notification-bar${notification.type === 'error' ? ' error' : ''}`}>{notification.message}</div>
        )}
        <div className="dashboard-header-bar">
          <div className="logo-ipo">
            <img
              className="logo-ipo-img"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="IPO Logo"
            />
            <span className="logo-ipo-text">IPO Portal</span>
          </div>
          <div>
            <button className="auth-btn" onClick={() => openAuthModal('login')}>Login</button>
            <button className="auth-btn" onClick={() => openAuthModal('signup')}>Sign Up</button>
          </div>
        </div>
        <div className="dashboard-container">
          <aside className="sidebar">
            <h2>Calculators</h2>
            <ul>
              {calculators.map((calc) => (
                <li key={calc.name} onClick={() => handleCalculatorClick(calc.path)}>
                  <strong>{calc.name}</strong>
                  <span>{calc.desc}</span>
                </li>
              ))}
            </ul>
          </aside>
          <main className="main-content">
            <header className="header">
              <h1>IPO List</h1>
              <input
                type="text"
                placeholder="Search IPOs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </header>
            <div className="ipo-table">
              <div className="ipo-table-header">
                <span>Company</span>
                <span>Date</span>
                <span>Status</span>
                <span>Action</span>
              </div>
              {filteredIpos.length === 0 ? (
                <div className="no-results">No IPOs found.</div>
              ) : (
                filteredIpos.map((ipo) => (
                  <div className="ipo-table-row" key={ipo.name}>
                    <span>{ipo.name}</span>
                    <span>{ipo.date}</span>
                    <span>{ipo.status}</span>
                    <button className="ipo-action" onClick={() => handleApplyClick(ipo)}>{ipo.action}</button>
                  </div>
                ))
              )}
            </div>
          </main>
        </div>
        {showAppInfo && (
          <div className="modal-bg" onClick={closeAppInfo}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <h2>IPO Application</h2>
              <p>{appInfo}</p>
              <button className="ipo-action" onClick={closeAppInfo}>Close</button>
            </div>
          </div>
        )}
        {showAuthModal && (
          <div className="auth-modal-bg" onClick={closeAuthModal}>
            <div className="auth-modal-content" onClick={e => e.stopPropagation()}>
              <h2>{authMode === 'login' ? 'Login' : 'Sign Up'}</h2>
              <form onSubmit={handleAuthSubmit}>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                {authMode === 'signup' && (
                  <input type="password" placeholder="Confirm Password" required />
                )}
                <button type="submit">{authMode === 'login' ? 'Login' : 'Sign Up'}</button>
              </form>
              <button className="switch-link" onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}>
                {authMode === 'login' ? "Don't have an account? Sign Up" : "Already have an account? Login"}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// Calculator Pages (for routing)
export function SIPCalculator() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>SIP Calculator</h2>
      <p>Estimate returns on a Systematic Investment Plan (SIP).</p>
      {/* Add your SIP calculator logic/UI here */}
    </div>
  );
}
export function SWPCalculator() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>SWP Calculator</h2>
      <p>Calculate returns on your Systematic Withdrawal Plan (SWP).</p>
      {/* Add your SWP calculator logic/UI here */}
    </div>
  );
}
export function BrokerageCalculator() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Brokerage Calculator</h2>
      <p>Estimate charges for your trade/investment.</p>
      {/* Add your Brokerage calculator logic/UI here */}
    </div>
  );
}
export function MarginCalculator() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Margin Calculator</h2>
      <p>Estimate balance needed to buy/sell a stock.</p>
      {/* Add your Margin calculator logic/UI here */}
    </div>
  );
}
