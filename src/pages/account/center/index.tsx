import {
  ClusterOutlined,
  ContactsOutlined,
  HomeOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { GridContent } from '@ant-design/pro-components';
import {
  Avatar,
  Card,
  Col,
  Divider,
  Input,
  type InputRef,
  Row,
  Tag,
} from 'antd';
import React, {useEffect, useRef, useState} from 'react';
import useStyles from './Center.style';
import Articles from './components/Articles';
import type { CurrentUser, TagType, tabKeyType } from './data.d';
import {getCurrentUser} from "@/services/api/userController";

const operationTabList = [
  {
    key: 'articles',
    tab: (
      <span>
        文章{' '}
        <span
          style={{
            fontSize: 14,
          }}
        >
          (8)
        </span>
      </span>
    ),
  },
];
const TagList: React.FC<{
  tags: CurrentUser['tags'];
}> = ({ tags }) => {
  const { styles } = useStyles();
  const ref = useRef<InputRef | null>(null);
  const [newTags, setNewTags] = useState<TagType[]>([]);
  const [inputVisible, setInputVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const showInput = () => {
    setInputVisible(true);
    if (ref.current) {
      // eslint-disable-next-line no-unused-expressions
      ref.current?.focus();
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleInputConfirm = () => {
    let tempsTags = [...newTags];
    if (
      inputValue &&
      tempsTags.filter((tag) => tag.label === inputValue).length === 0
    ) {
      tempsTags = [
        ...tempsTags,
        {
          key: `new-${tempsTags.length}`,
          label: inputValue,
        },
      ];
    }
    setNewTags(tempsTags);
    setInputVisible(false);
    setInputValue('');
  };
  return (
    <div className={styles.tags}>
      <div className={styles.tagsTitle}>标签</div>
      {(tags || []).concat(newTags).map((item) => (
        <Tag key={item.key}>{item.label}</Tag>
      ))}
      {inputVisible && (
        <Input
          ref={ref}
          size="small"
          style={{
            width: 78,
          }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag
          onClick={showInput}
          style={{
            borderStyle: 'dashed',
          }}
        >
          <PlusOutlined />
        </Tag>
      )}
    </div>
  );
};
const Center: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const { styles } = useStyles();
  const [user, setUser] = useState<API.UserVO>({})
  const [tabKey, setTabKey] = useState<tabKeyType>('articles');
  const getUser = async () => {
    const res = await getCurrentUser()
    setLoading(false)
    setUser(res.data)
  }
  // 页面加载就获取用户信息
  useEffect(() => {
    getUser()
  },[])

  //  渲染用户信息
  const renderUserInfo = ({
    username,
    gender,
    description,
    address
  }: Partial<API.UserVO>) => {
    return (
      <div className={styles.detail}>
        <p>
          <ContactsOutlined
            style={{
              marginRight: 8,
            }}
          />
          {username}
        </p>
        <p>
          <ClusterOutlined
            style={{
              marginRight: 8,
            }}
          />
          {gender}
        </p>
        <p>
          <HomeOutlined
            style={{
              marginRight: 8,
            }}
          />
          {
            (
              description || {
                province: {
                  label: '',
                },
              }
            )
          }
        </p>
        <p>
          <HomeOutlined
            style={{
              marginRight: 8,
            }}
          />
          {
            (
              address|| {
                city: {
                  label: '',
                },
              }
            )
          }
        </p>
      </div>
    );
  };

  // 渲染tab切换
  const renderChildrenByTabKey = (tabValue: tabKeyType) => {
    if (tabValue === 'articles') {
      return <Articles />;
    }
    return null;
  };
  return (
    <GridContent>
      <Row gutter={24}>
        <Col lg={7} md={24}>
          <Card
            bordered={false}
            style={{
              marginBottom: 24,
            }}
            loading={loading}
          >
            {!loading && user && (
              <>
                <div className={styles.avatarHolder}>
                  <img alt="" src={user.avatarUrl} />
                  <div className={styles.name}>{user.username}</div>
                </div>
                {renderUserInfo(user)}
                <Divider dashed />
                <div>
                  {user.tags?.map(tag => (<Tag></Tag>)}
                </div>
                <Divider
                  style={{
                    marginTop: 16,
                  }}
                  dashed
                />
              </>
            )}
          </Card>
        </Col>
        <Col lg={17} md={24}>
          <Card
            className={styles.tabsCard}
            variant="borderless"
            tabList={operationTabList}
            activeTabKey={tabKey}
            onTabChange={(_tabKey: string) => {
              setTabKey(_tabKey as tabKeyType);
            }}
          >
            {renderChildrenByTabKey(tabKey)}
          </Card>
        </Col>
      </Row>
    </GridContent>
  );
};
export default Center;
