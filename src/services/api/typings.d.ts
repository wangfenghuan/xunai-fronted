declare namespace API {
  type addBlogParams = {
    image: string;
  };

  type AiAnalyzeVO = {
    id?: number;
    userId?: number;
    result?: string;
    createTime?: string;
    status?: string;
  };

  type BaseResponseBlogVO = {
    code?: number;
    data?: BlogVO;
    message?: string;
  };

  type BaseResponseBoolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseListAiAnalyzeVO = {
    code?: number;
    data?: AiAnalyzeVO[];
    message?: string;
  };

  type BaseResponseListMessage = {
    code?: number;
    data?: Message[];
    message?: string;
  };

  type BaseResponseListOrder = {
    code?: number;
    data?: Order[];
    message?: string;
  };

  type BaseResponseListString = {
    code?: number;
    data?: string[];
    message?: string;
  };

  type BaseResponseListUserVO = {
    code?: number;
    data?: UserVO[];
    message?: string;
  };

  type BaseResponseLong = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseMapStringString = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageBlogEsDTO = {
    code?: number;
    data?: PageBlogEsDTO;
    message?: string;
  };

  type BaseResponsePageBlogVO = {
    code?: number;
    data?: PageBlogVO;
    message?: string;
  };

  type BaseResponsePageListMessage = {
    code?: number;
    data?: PageListMessage;
    message?: string;
  };

  type BaseResponsePageListOrder = {
    code?: number;
    data?: PageListOrder;
    message?: string;
  };

  type BaseResponsePageListUser = {
    code?: number;
    data?: PageListUser;
    message?: string;
  };

  type BaseResponsePageListUserVO = {
    code?: number;
    data?: PageListUserVO;
    message?: string;
  };

  type BaseResponseString = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseTagsVO = {
    code?: number;
    data?: TagsVO;
    message?: string;
  };

  type BaseResponseUserVO = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type BlogAddRequest = {
    title?: string;
    coverImg?: string;
    content?: string;
  };

  type BlogDeleteRequest = {
    id?: number;
  };

  type BlogEditRequest = {
    id?: number;
    title?: string;
    coverImg?: string;
    content?: string;
  };

  type BlogEsDTO = {
    id?: number;
    userId?: number;
    title?: string;
    coverImg?: string;
    content?: string;
    thumbCount?: number;
    createTime?: string;
    updateTime?: string;
  };

  type BlogQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    title?: string;
    content?: string;
  };

  type BlogVO = {
    id?: number;
    userId?: number;
    title?: string;
    coverImg?: string;
    content?: string;
    thumbCount?: number;
    createTime?: string;
    updateTime?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getBlogVOByIdParams = {
    id: number;
  };

  type getMessageListByUserIdAndSenderParams = {
    receiverId: number;
    senderId: number;
  };

  type getMessageListByUserIdParams = {
    userId: number;
  };

  type getOrderListByUserIdParams = {
    userId: number;
  };

  type getRecommendUserParams = {
    userId: number;
  };

  type getUserStatusParams = {
    username: string;
  };

  type getUserVOByIdParams = {
    userId: number;
  };

  type listAiMsgParams = {
    userId: number;
  };

  type Message = {
    id?: number;
    sender?: number;
    recevier?: number;
    content?: string;
    createTime?: string;
    delivered?: number;
    isDelete?: number;
  };

  type MessageQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    sender?: number;
    recevier?: number;
    createTime?: string;
    delivered?: number;
  };

  type Msg = {
    receiver?: string;
    content?: string;
  };

  type Order = {
    id?: number;
    userId?: number;
    createTime?: string;
    payTime?: string;
    orderId?: string;
    status?: number;
    isDelete?: number;
    message?: string;
    expireTime?: string;
    wxOrderId?: string;
    price?: number;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type OrderQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    userId?: number;
    createTime?: string;
    payTime?: string;
    orderId?: string;
    status?: number;
    isDelete?: number;
    message?: string;
    expireTime?: string;
    wxOrderId?: string;
    price?: number;
  };

  type PageBlogEsDTO = {
    records?: BlogEsDTO[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageBlogEsDTO;
    searchCount?: PageBlogEsDTO;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageBlogVO = {
    records?: BlogVO[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageBlogVO;
    searchCount?: PageBlogVO;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageListMessage = {
    records?: Message[][];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageListMessage;
    searchCount?: PageListMessage;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageListOrder = {
    records?: Order[][];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageListOrder;
    searchCount?: PageListOrder;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageListUser = {
    records?: User[][];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageListUser;
    searchCount?: PageListUser;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageListUserVO = {
    records?: UserVO[][];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageListUserVO;
    searchCount?: PageListUserVO;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PhoneBindRequest = {
    phone?: string;
    code?: string;
  };

  type sendToUserParams = {
    receiver: number;
    content: string;
  };

  type TagsVO = {
    ageList?: number[];
    hightList?: number[];
    weightList?: number[];
    educateList?: string[];
    majorList?: string[];
    salaryList?: string[];
  };

  type updateBlogParams = {
    image: string;
  };

  type updateUserParams = {
    uploadFile: string;
  };

  type User = {
    id?: number;
    username?: string;
    userAccount?: string;
    photoUrl?: string;
    avatarUrl?: string;
    gender?: number;
    userPassword?: string;
    openId?: string;
    phone?: string;
    userStatus?: number;
    address?: string;
    description?: string;
    createTime?: string;
    updateTime?: string;
    isMarried?: number;
    isDelete?: number;
    userRole?: string;
    platformtCode?: string;
    tags?: string;
    thumbCount?: number;
  };

  type UserAddRequest = {
    username?: string;
    userAccount?: string;
    avatarUrl?: string;
    gender?: number;
    userPassword?: string;
    phone?: string;
    description?: string;
    userRole?: string;
  };

  type UserIdList = {
    userIds?: number[];
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
    code?: string;
  };

  type UserQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
    username?: string;
    userAccount?: string;
    gender?: number;
    phone?: string;
    description?: string;
    searchText?: string;
    address?: string;
    tags?: string[];
    userRole?: string;
  };

  type UserRegisterRequest = {
    userAccount?: string;
    userPassword?: string;
    checkPassword?: string;
  };

  type UserThumbRequest = {
    thumbToUserId?: number;
  };

  type UserUpdateRequest = {
    id?: number;
    username?: string;
    userAccount?: string;
    avatarUrl?: string;
    photoUrl?: string[];
    gender?: number;
    userPassword?: string;
    phone?: string;
    userStatus?: number;
    isMarried?: number;
    address?: string;
    description?: string;
    userRole?: string;
    platformtCode?: string;
    tags?: string;
  };

  type UserVO = {
    id?: number;
    username?: string;
    userAccount?: string;
    avatarUrl?: string;
    gender?: number;
    createTime?: string;
    updateTime?: string;
    userRole?: string;
    platformtCode?: string;
    description?: string;
    address?: string;
    tags?: string[];
    photoUrl?: string[];
    phone?: string;
    isMarried?: number;
    token?: string;
    thumbCount?: number;
  };
}
