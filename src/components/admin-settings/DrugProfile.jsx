import { Space, Table, Tag } from 'antd';
import React from 'react';

// THEAD START
const columns = [
  {
    title: 'UID',
    dataIndex: 'uid',
    key: 'uid',
    render: text => <button style={{ color: '#3FA9F5' }}>{text}</button>,
  },
  {
    title: 'DRUG NAME',
    dataIndex: 'drugName',
    key: 'drugName',
  },
  {
    title: 'BRAND NAMES',
    dataIndex: 'brandNames',
    key: 'brandNames',
    render: (_, { brandNames }) => (
      <>
        {brandNames.map(brandName => {
          let color = brandName.length > 5 ? 'geekblue' : 'green';

          if (brandName === 'loser') {
            color = 'volcano';
          }

          return (
            <Tag
              style={{
                padding: '0 .3em',
                border: '1px solid #3FA9F5',
                borderRadius: '4px',
                marginRight: '3px',
              }}
              color={color}
              key={brandName}
            >
              {brandName}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'SIGNAL SCHEDULE',
    key: 'signalSchedule',
    dataIndex: 'signalSchedule',
  },
  {
    title: 'ACTIONS',
    key: 'actions',
    render: (_, record) => (
      <Space size="middle">
        <button>
          <svg
            style={{
              fill: '#aaa',
              height: '1.3em',
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="edit-svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </button>
      </Space>
    ),
  },
];
// THEAD END
const data = [
  {
    key: '1',
    uid: 1000,
    drugName: 'Famciclovir',
    brandNames: ['Famtrex', 'Virovir', 'Penvir'],
    signalSchedule: '2 Schedules',
  },
  {
    key: '2',
    uid: 2000,
    drugName: 'Remdesivir',
    brandNames: ['Remde', 'Veklury'],
    signalSchedule: '1 Schedule',
  },
  {
    key: '3',
    uid: 3000,
    drugName: 'Diclofenac',
    brandNames: ['Voltaren', 'Zipsor', 'Cambia'],
    signalSchedule: '3 Schedules',
  },
];

const DrugProfile = () => <Table pagination={!!0} columns={columns} dataSource={data} />;

export default DrugProfile;
