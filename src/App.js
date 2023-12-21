import React, { useState } from 'react';
import './App.css';
import OfferFeePreview from './OfferFeePreview';
function App() {
  const [offerId, setOfferId] = useState('');
  const [offerFee, setOfferFee] = useState(null);
  

  const fetchCalculatedTotalOfferFee = async () => {
    try {
      const response = await fetch(`http://localhost:5029/fee/get-total-offer-fee/${offerId}`);
      if (response.ok) {
        const offerFeeData = await response.json();
        console.log("Offer Fee Data:", offerFeeData);
        setOfferFee(offerFeeData);
      } else {
        setOfferFee(null);
        alert('Offer fee not found');
      }
    } catch (error) {
      alert('Error fetching offer fee');
    }
  };

  return (
      <div className="App">
  
        <h1>Offer Fee Calculator</h1>
        <input
            type="text"
            placeholder="Enter offer ID"
            value={offerId}
            onChange={(e) => setOfferId(e.target.value)}
        />
        <button onClick={fetchCalculatedTotalOfferFee}>Calculate Offer Fee</button>
        {offerFee && <OfferFeePreview offerFee={offerFee} />}
      </div>
  );
}

export default App;
