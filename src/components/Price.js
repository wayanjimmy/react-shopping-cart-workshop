import PropTypes from 'prop-types';

function currency(amount) {
  amount = parseFloat(amount).toFixed(0);
  amount = amount.replace(/(\d)(?=(\d{3})+\b)/g, '$1.');
  return 'Rp ' + amount;
}

const Price = ({ amount }) => currency(amount);

Price.propTypes = {
  amount: PropTypes.number.isRequired
};

export default Price;
