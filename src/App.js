import React, { useState } from 'react';
import './App.css';
import OfferFeePreview from './OfferFeePreview';

function App() {
  const [productId, setProductId] = useState('');
  const [product, setProduct] = useState(null);
  const [offerId, setOfferId] = useState('');
  const [offerFee, setOfferFee] = useState(null);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:5029/Product/${productId}`);
      if (response.ok) {
        const productData = await response.json();
        setProduct(productData);
      } else {
        setProduct(null);
        alert('Product not found');
      }
    } catch (error) {
      alert('Error fetching product');
    }
  };

  const fetchOfferFeePreview = async () => {
    try {
      const response = await fetch(`http://localhost:5029/Product/offer-fee-preview/${offerId}`);
      if (response.ok) {
      const offerFeeData = await response.json();
        console.log("Offer Fee Data:", offerFeeData); // Add this line
        const parsedOfferFeeData = JSON.parse(JSON.stringify(offerFeeData));
      setOfferFee(parsedOfferFeeData);
    } else {
      setOfferFee(null);
      alert('Offer fee preview not found');
    }
  } catch (error) {
    alert('Error fetching offer fee preview');
  }
};

  return (
    <div className="App">
      <h1>Product Finder</h1>
      <input
        type="text"
        placeholder="Enter product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <button onClick={fetchProduct}>Find Product</button>
      {product && (
        <div>
          <h2>Product Details</h2>
          {/* Display product details */}
        </div>
      )}

      <h1>Offer Fee Preview Finder</h1>
      <input
        type="text"
        placeholder="Enter offer ID"
        value={offerId}
        onChange={(e) => setOfferId(e.target.value)}
      />
      <button onClick={fetchOfferFeePreview}>Find Offer Fee Preview</button>
      {offerFee && <OfferFeePreview offerFee={offerFee} />}
    </div>
  );
}

export default App;