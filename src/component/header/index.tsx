/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import {
  CaretDownOutlined,
  CloseOutlined,
  FrownFilled,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Input } from 'antd';
import { ipcRenderer } from 'electron';

export default function Header() {
  const search = (value: any) => {
    console.log(value);
  };
  const close = () => {
    ipcRenderer.send('close', 'close');
  };

  return (
    <div className="header-container">
      {/* 图标和title */}
      <div className="title">
        <FrownFilled style={{ color: 'white', fontSize: '25px' }} />
        <span style={{ paddingLeft: '10px', alignItems: 'center' }}>
          网抑云音乐
        </span>
      </div>
      {/* 搜索框 */}
      <div className="search-container">
        <Input
          style={{
            backgroundColor: 'rgb(192, 24, 24)',
            borderRadius: '20px',
            color: 'red',
            width: '160px',
          }}
          prefix={
            <SearchOutlined style={{ color: 'white', fontSize: '15px' }} />
          }
          size="small"
          placeholder="搜索"
          bordered={false}
          maxLength={80}
          allowClear
          onPressEnter={search}
        />
      </div>
      {/* 用户信息 */}
      <div className="user-info-container">
        <Avatar icon={<UserOutlined />} />
        <span style={{ color: 'white', margin: '10px' }}>whitae</span>
        <CaretDownOutlined style={{ color: 'white', fontSize: '15px' }} />
      </div>
      {/* 退出按钮 */}
      <div
        className="get-out"
        onClick={() => {
          close();
        }}
      >
        <CloseOutlined style={{ color: 'white', fontSize: '15px' }} />
      </div>
    </div>
  );
}
