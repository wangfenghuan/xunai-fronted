import React, {useEffect, useState} from "react";
import {getUserVoList} from "@/services/api/userController";
import {Card, message, Space, Tag} from "antd";

const Main: React.FC = () => {
  // 初始用户列表
  const [userList, setUserList] = useState<API.UserVO[]>([])
  // 初始化搜索参数
  const [searchParams, setSearchParams] = useState<API.UserQueryRequest>({})
  const getUserList = async () => {
    const res = await  getUserVoList(searchParams)
    if (res.code === 0){
      message.success('获取用户列表成功')
      setUserList(res.data.records)
    }else {
      message.error('获取用户列表失败' + res.msg)
    }
  }
   useEffect(()  => {
    getUserList().then(r => {

    })
  },[])
  return (<div>
    {userList.map(item => (
      <Space direction="vertical" size={16}>
      <Card title="Default size card" extra={<a href="#">更多</a>} style={{ width: 300 }}>
        <img src={item.avatarUrl}
             alt={'用户头像'}
             style={{
               width: '150px',
               height: '150px',
               objectFit: 'cover', // 可选值包括 'fill', 'contain', 'cover', 'none', 'scale-down'
             }}
        />
        <p>{item.username}</p>
        <p>{item.description}</p>
        <p>{item.gender}</p>
        <p>{item.address}</p>
        {'照片：'}
        <p>{item.tags?.map(tag => (<Tag color="magenta">{tag}</Tag>))}</p>
      </Card>
    </Space>))}

  </div>)
}
export default Main
