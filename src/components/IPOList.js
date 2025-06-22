import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function IPOList() {
  const [ipos, setIpos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/ipos')
      .then(res => setIpos(res.data))
      .catch(err => console.error('Error fetching IPOs:', err));
  }, []);

  return (
    <div className="row">
      {ipos.map(ipo => (
        <div className="col-md-4" key={ipo.ipo_id}>
          <div className="card mb-3">
            <img 
              src={`http://localhost:5000/${ipo?.Company?.company_logo}`} 
              className="card-img-top" 
              alt={ipo?.Company?.company_name || 'Company Logo'} 
            />
            <div className="card-body">
              <h5 className="card-title">{ipo?.Company?.company_name}</h5>
              <p className="card-text">
                Price Band: {ipo?.price_band}<br />
                Open: {ipo?.open_date}<br />
                Status: {ipo?.status}
              </p>
              <Link to={`/ipo/${ipo.ipo_id}`} className="btn btn-primary">Details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IPOList;