import React from 'react';
import { CgNotes } from 'react-icons/cg';
import { FaUsers } from 'react-icons/fa6';
import Chart from './Chart';

const Statistics = () => {
    return (
        <>
            <div className="dashboard-container" id='stat'>
                <div className="chart">
                    <Chart />
                </div>
                <div className="stats-overwiev">
                    <div className="stat-card">
                        <p className='text'>quize</p>
                        <span className='count'>
                            <span id='first'><CgNotes /></span>
                            <p>1234</p>
                        </span>
                    </div>
                    <div className="stat-card">
                        <p className='text'>users</p>
                        <span className='count'>
                            <span id='sec'><FaUsers /></span>
                            <p>14</p>
                        </span>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Statistics;