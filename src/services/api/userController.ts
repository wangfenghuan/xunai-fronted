// @ts-ignore
/* eslint-disable */
import { request } from "@umijs/max";
/** 此处后端没有提供注释 POST /user/add */
export async function addUser(
  body: API.UserAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseUserVO>("/user/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id批量获取用户信息 POST /user/batch-info */
export async function batchGetUserList(
  body: API.UserIdList,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListUserVO>("/user/batch-info", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /user/bindPhone */
export async function bindPhone(
  body: API.PhoneBindRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean>("/user/bindPhone", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 调用Ai来分析合适的配偶 POST /user/callai */
export async function callAi(options?: { [key: string]: any }) {
  return request<API.BaseResponseString>("/user/callai", {
    method: "POST",
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /user/count */
export async function getVisitNum(options?: { [key: string]: any }) {
  return request<API.BaseResponseLong>("/user/count", {
    method: "GET",
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /user/del */
export async function delUser(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean>("/user/del", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /user/getaddress */
export async function getAddress(options?: { [key: string]: any }) {
  return request<API.BaseResponseListString>("/user/getaddress", {
    method: "GET",
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /user/getById */
export async function getUserVoById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserVOByIdParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseUserVO>("/user/getById", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /user/gettags */
export async function getTagList(options?: { [key: string]: any }) {
  return request<API.BaseResponseTagsVO>("/user/gettags", {
    method: "GET",
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /user/list */
export async function getUserList(
  body: API.UserQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageListUser>("/user/list", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /user/list/vo */
export async function getUserVoList(
  body: API.UserQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageListUserVO>("/user/list/vo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取AI分析结果 GET /user/listaimsg */
export async function listAiMsg(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listAiMsgParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListAiAnalyzeVO>("/user/listaimsg", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /user/login */
export async function userLogin(
  body: API.UserLoginRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseUserVO>("/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /user/loginByWx */
export async function userLoginByWx(
  body: API.UserLoginRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseUserVO>("/user/loginByWx", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /user/logout */
export async function logout(options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>("/user/logout", {
    method: "POST",
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /user/recommend */
export async function getRecommendUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRecommendUserParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageListUserVO>("/user/recommend", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /user/register */
export async function userRegister(
  body: API.UserRegisterRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseUserVO>("/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /user/search */
export async function sarchUser(
  body: API.UserQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageListUserVO>("/user/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /user/sendMsgCode */
export async function sendMsgCode(
  body: API.PhoneBindRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseString>("/user/sendMsgCode", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /user/status/${param0} */
export async function getUserStatus(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserStatusParams,
  options?: { [key: string]: any }
) {
  const { username: param0, ...queryParams } = params;
  return request<string>(`/user/status/${param0}`, {
    method: "GET",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 用户点赞 POST /user/thumb */
export async function thumbUser(
  body: API.UserThumbRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean>("/user/thumb", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /user/update */
export async function updateUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateUserParams,
  body: API.UserUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean>("/user/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}
