import React, {useEffect, useState} from "react";
import {getUserVoList} from "@/services/api/userController";
import {message, Table, TableProps} from "antd";

const columns: TableProps<API.UserVO>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const Main: React.FC = () => {
  // 初始用户列表
  const [userList, setUserList] = useState<API.UserVO[]>([])
  // 初始化搜索参数
  const [searchParams, setSearchParams] = useState<API.UserQueryRequest>({})
  const getUserList = async () => {
    const res = await  getUserVoList(searchParams)
    if (res.code === 0){
      message.success('获取用户列表成功')
      setUserList(res.records)
    }else {
      message.error('获取用户列表失败' + res.msg)
    }
  }
   useEffect(()  => {
    getUserList().then(r => {

    })
  },[])
  return (<div>
    我是主页
    <Table<API.UserVO[]> columns={columns} dataSource={userList} />
  </div>)
}
export default Main
