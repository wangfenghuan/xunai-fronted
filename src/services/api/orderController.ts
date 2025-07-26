// @ts-ignore
/* eslint-disable */
import { request } from "@umijs/max";

/** 此处后端没有提供注释 GET /pay/getById */
export async function getOrderListByUserId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOrderListByUserIdParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListOrder>("/pay/getById", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /pay/list */
export async function getOrderList(
  body: API.OrderQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageListOrder>("/pay/list", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /pay/wechat/apporder */
export async function createWechatAppOrder(options?: { [key: string]: any }) {
  return request<API.BaseResponseMapStringString>("/pay/wechat/apporder", {
    method: "GET",
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /pay/wechat/notify */
export async function wechatPayNotify(
  body: string,
  options?: { [key: string]: any }
) {
  return request<string>("/pay/wechat/notify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
