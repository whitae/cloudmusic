import {
  MenuUnfoldOutlined,
  PlayCircleFilled,
  SoundOutlined,
  StepBackwardFilled,
  StepForwardFilled,
} from '@ant-design/icons';
import { Slider, Image } from 'antd';
import React from 'react';

export default function Bottom() {
  return (
    <div className="bottom-container">
      {/* 左侧 */}
      <div className="bottom-left">
        <Image
          width={50}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          style={{ marginLeft: '10px' }}
        />
      </div>
      {/* 中间 */}
      <div className="bottom-center">
        <div className="bottom-process">
          <StepBackwardFilled style={{ color: 'black', fontSize: '25px' }} />
          <PlayCircleFilled
            style={{
              color: 'rgb(183, 183, 189)',
              fontSize: '35px',
              margin: '20px',
            }}
          />
          <StepForwardFilled style={{ color: 'black', fontSize: '25px' }} />
        </div>
        <Slider defaultValue={0} style={{ width: '300px' }} />
      </div>
      {/* 右侧 */}
      <div className="bottom-right">
        <SoundOutlined style={{ color: 'black', fontSize: '20px' }} />
        <Slider defaultValue={100} style={{ width: '70px', margin: '20px' }} />
        <MenuUnfoldOutlined
          style={{ color: 'black', fontSize: '20px', marginRight: '20px' }}
        />
      </div>
    </div>
  );
}
