import React from 'react';

const OfferFeePreview = ({ offerFee }) => {
    if (!offerFee) {
        return null;
    }

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'PLN' }).format(amount);
    };

    return (
        <div>
            <h2>Offer Fee Preview</h2>
            <p>
                <strong>Offer ID:</strong> {offerFee.offerId}
            </p>
            <p>
                <strong>Fee:</strong> {formatCurrency(offerFee.fee)}
            </p>
        </div>
    );
};

export default OfferFeePreview;
