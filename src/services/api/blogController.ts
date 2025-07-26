// @ts-ignore
/* eslint-disable */
import { request } from "@umijs/max";

/** 此处后端没有提供注释 POST /blog/add */
export async function addBlog(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.addBlogParams,
  body: API.BlogAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean>("/blog/add", {
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

/** 此处后端没有提供注释 POST /blog/del */
export async function deleteBlog(
  body: API.BlogDeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean>("/blog/del", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /blog/getById */
export async function getBlogVoById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBlogVOByIdParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBlogVO>("/blog/getById", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /blog/listpage */
export async function listBlogVoByPage(
  body: API.BlogQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageBlogVO>("/blog/listpage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /blog/listpage/es */
export async function listBlogVoPageFromEs(
  body: API.BlogQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageBlogEsDTO>("/blog/listpage/es", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /blog/update */
export async function updateBlog(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateBlogParams,
  body: API.BlogEditRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean>("/blog/update", {
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
