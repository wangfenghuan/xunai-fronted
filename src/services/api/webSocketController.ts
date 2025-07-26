// @ts-ignore
/* eslint-disable */
import { request } from "@umijs/max";

/** 此处后端没有提供注释 POST /ws/sendFixMsgToUser */
export async function sendFixMsgToUser(
  body: API.Msg,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean>("/ws/sendFixMsgToUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /ws/sendFixWxMsgToUser */
export async function exchangeWeChat(
  body: API.Msg,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean>("/ws/sendFixWxMsgToUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /ws/sendToAdmin */
export async function sendToAdmin(
  body: API.Msg,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean>("/ws/sendToAdmin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /ws/sendToUser */
export async function sendToUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.sendToUserParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean>("/ws/sendToUser", {
    method: "POST",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
