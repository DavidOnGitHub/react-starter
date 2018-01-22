import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Main.css';

const cx = classnames.bind(styles);

export default class Main extends React.Component {
  render() {
    return (
      <div className={cx('container')}>
        Main
      </div>
    );
  }
};

Main.propTypes = {
  history: PropTypes.object
};
