import React from 'react';
import '../../assets/styles/index.scss';


const ProgressBar = ({percentage}) => {
    return (
        <div className="progress">
          <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
        </div>
    );
};

export default ProgressBar;