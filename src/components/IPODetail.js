import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function IPODetail() {
  const { id } = useParams();
  const [ipo, setIpo] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/ipos/${id}`)
      .then(res => setIpo(res.data))
      .catch(err => console.error('Error fetching IPO details:', err));
  }, [id]);

  if (!ipo) return <div>Loading...</div>;

  return (
    <div>
      <h2>{ipo?.Company?.company_name} IPO</h2>
      <img src={`http://localhost:5000/${ipo?.Company?.company_logo}`} alt={ipo?.Company?.company_name || 'Company Logo'} />
      <ul>
        <li>Price Band: {ipo?.price_band}</li>
        <li>Open Date: {ipo?.open_date}</li>
        <li>Close Date: {ipo?.close_date}</li>
        <li>Issue Size: {ipo?.issue_size}</li>
        <li>Issue Type: {ipo?.issue_type}</li>
        <li>Listing Date: {ipo?.listing_date}</li>
        <li>Status: {ipo?.status}</li>
        <li>IPO Price: {ipo?.ipo_price}</li>
        <li>Listing Price: {ipo?.listing_price}</li>
        <li>Current Market Price: {ipo?.current_market_price}</li>
      </ul>
      <h4>Documents</h4>
      {ipo?.Documents?.map(doc => (
        <div key={doc.document_id}>
          {doc.rhp_pdf && (
            <a href={`http://localhost:5000/${doc.rhp_pdf}`} download>
              Download RHP PDF
            </a>
          )}
          {doc.drhp_pdf && (
            <a href={`http://localhost:5000/${doc.drhp_pdf}`} download>
              Download DRHP PDF
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default IPODetail;