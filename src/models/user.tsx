// hooks/useGlobalState.js
import { useModel } from 'umi';

export default function useGlobalState() {
  const { initialState, setInitialState } = useModel('@@initialState');

  const updateUserInfo = (userInfo: API.UserVO) => {
    setInitialState({
      ...initialState,
      userInfo
    });
  };

  return {
    userInfo: initialState?.userInfo,
    globalState: initialState,
    setGlobalState: setInitialState,
    updateUserInfo
  };
}
