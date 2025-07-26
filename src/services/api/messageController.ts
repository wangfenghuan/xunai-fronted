// @ts-ignore
/* eslint-disable */
import { request } from "@umijs/max";

/** 此处后端没有提供注释 GET /message/history */
export async function getMessageListByUserIdAndSender(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMessageListByUserIdAndSenderParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListMessage>("/message/history", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /message/list */
export async function getMessageListByUserId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMessageListByUserIdParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListMessage>("/message/list", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /message/listall */
export async function getMessageList(
  body: API.MessageQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageListMessage>("/message/listall", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
