import React from 'react';

const OfferFeePreview = ({ offerFee }) => {
    if (!offerFee) {
        return null;
    }

    const formatCurrency = (amount, currency) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency,
        }).format(amount);
    };

    const combinedFees = offerFee.commissions.concat(offerFee.quotes).filter(fee => fee.fee && fee.fee.amount);
    const totalAmount = combinedFees.reduce(
        (total, fee) => total + parseFloat(fee.fee.amount),
        0
    );

    const defaultCurrency = 'PLN';
    const currency = offerFee.commissions.length > 0 && offerFee.commissions[0].fee && offerFee.commissions[0].fee.currency
        ? offerFee.commissions[0].fee.currency
        : defaultCurrency;

    return (
        <div>
            <h2>Offer Fee Preview</h2>
            <table>
                <thead>
                <tr>
                    <th>Fee Name</th>
                    <th>Fee Type</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                {combinedFees.map((fee, index) => (
                    <tr key={index}>
                        <td>{fee.name}</td>
                        <td>{fee.type}</td>
                        <td>{formatCurrency(fee.fee.amount, fee.fee.currency)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <p>
                <strong>Total: </strong> {formatCurrency(totalAmount, currency)}
            </p>
        </div>
    );
};

export default OfferFeePreview;
