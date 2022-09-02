import { FC, ReactElement } from "react";
import { Navigate, useLocation, matchRoutes } from "react-router-dom";
import { GuestRoutes } from "../../app/config";
import { useGetInitializedQuery } from "../../app/services/auth";
import { useGetLoginConfigQuery } from "../../app/services/server";
import { useAppSelector } from "../../app/store";

interface Props {
  children: ReactElement;
  redirectTo?: string;
}
const GuestAllows = GuestRoutes.map((path) => {
  return { path };
});
const RequireAuth: FC<Props> = ({ children, redirectTo = "/login" }) => {
  // GuestRoutes
  const location = useLocation();
  const matchs = matchRoutes(GuestAllows, location);
  const allowGuest = matchs ? !!matchs[0].pathname : false;
  const { data: loginConfig, isLoading: fetchingLoginConfig } = useGetLoginConfigQuery();
  const { isLoading: checkingInitial } = useGetInitializedQuery();
  const { token, guest, initialized } = useAppSelector((store) => store.authData);
  // console.log("authhhhh", allowGuest);

  // 初始化和login配置检查
  if (checkingInitial || fetchingLoginConfig) return null;
  //  未初始化 则先走setup 流程
  if (!initialized) return <Navigate to={`/onboarding`} replace />;
  // 开启guest 并且没token 而且是允许guest访问的路由  则先去过渡页登录
  if (loginConfig?.guest && !token && allowGuest) return <Navigate to={"/guest_login"} replace />;
  // 登陆者是guest，并且不允许访问
  if (token && guest && !allowGuest) return <Navigate to={"/"} replace />;
  return token ? children : <Navigate to={redirectTo} replace />;
};

export default RequireAuth;