import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright="Powered by wfh"
      links={[
        {
          key: '伙伴匹配',
          title: '伙伴匹配',
          href: 'https://github.com/wangfenghuan',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/wangfenghuan',
          blankTarget: true,
        },
        {
          key: '1',
          title: '@wangfenghuan',
          href: 'https://github.com/wangfenghuan',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
