import PropTypes from 'prop-types';
import s from './Conteiner.module.css';

function Conteiner({ children }) {
  return <div className={s.main}>{children}</div>;
}

Conteiner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Conteiner;
