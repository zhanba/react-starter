import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './Counter.css';

class Counter extends Component {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        dispatch: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.base}>
                Counter
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(Counter);


