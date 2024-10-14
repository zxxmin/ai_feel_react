import React from 'react';
import { Segmented } from 'antd';
import 'antd/dist/reset.css';
import './Tab.css';

const Tab = ({ onClickTab, selectedTab }) => {
    const tabsData = [
        { id: 1, label: '등하교시간 관리' },
        { id: 2, label: '월별 정서지수 관리' },
        { id: 3, label: '학생별 평균 정서지수 관리' },
    ];

    return (
        <div className="tabs" id="tabs">
            <Segmented
                options={tabsData.map(tab => ({
                    label: tab.label,
                    value: tab.id,
                }))}
                value={selectedTab}
                onChange={value => onClickTab(value)}
            />
        </div>
    );
    // const tabsData = [
    //     {id: 1, label: '등하교시간 관리'},
    //     {id: 2, label: '월별 정서지수 관리'},
    //     {id: 3, label: '학생별 평균 정서지수 관리'},
    // ]

    // return (
    //     <div className="tabs">
    //         <ul>
    //             {tabsData.map((tab) => (
    //                 <li key={tab.id}>
    //                     <button
    //                         type='button'
    //                         onClick={() => onClickTab(tab.id)}
    //                         className={selectedTab === tab.id ? 'is-current' : ''}
    //                     >
    //                         <span>{tab.label}</span>
    //                     </button>
    //                 </li>
    //             ))}
    //         </ul>
    //     </div>
    // )
}

export default Tab;