import { createApi } from "@reduxjs/toolkit/query/react";
import BASE_URL from "../config";
import { updateInfo } from "../slices/server";
import baseQuery from "./base.query";
const defaultExpireDuration = 7 * 24 * 60 * 60;
export const serverApi = createApi({
  reducerPath: "serverApi",
  baseQuery,
  endpoints: (builder) => ({
    getServer: builder.query({
      query: () => ({ url: `admin/system/organization` }),
      transformResponse: (data) => {
        data.logo = `${BASE_URL}/resource/organization/logo?t=${new Date().getTime()}`;
        return data;
      },
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        try {
          const { data: server } = await queryFulfilled;
          dispatch(updateInfo(server));
        } catch {
          console.log("get server info error");
        }
      },
    }),
    getMetrics: builder.query({
      query: () => ({ url: `/admin/system/metrics` }),
    }),
    getFirebaseConfig: builder.query({
      query: () => ({ url: `admin/fcm/config` }),
    }),
    sendTestEmail: builder.mutation({
      query: (data) => ({
        url: `/admin/system/send_mail`,
        method: "POST",
        body: data,
      }),
    }),
    updateFirebaseConfig: builder.mutation({
      query: (data) => ({
        url: `admin/fcm/config`,
        method: "POST",
        body: data,
      }),
    }),
    getAgoraConfig: builder.query({
      query: () => ({ url: `admin/agora/config` }),
    }),
    updateAgoraConfig: builder.mutation({
      query: (data) => ({
        url: `admin/agora/config`,
        method: "POST",
        body: data,
      }),
    }),
    getSMTPConfig: builder.query({
      query: () => ({ url: `admin/smtp/config` }),
    }),
    updateSMTPConfig: builder.mutation({
      query: (data) => ({
        url: `admin/smtp/config`,
        method: "POST",
        body: data,
      }),
    }),
    getLoginConfig: builder.query({
      query: () => ({ url: `admin/login/config` }),
    }),
    updateLoginConfig: builder.mutation({
      query: (data) => ({
        url: `admin/login/config`,
        method: "POST",
        body: data,
      }),
    }),
    updateLogo: builder.mutation({
      query: (data) => ({
        headers: {
          "content-type": "image/png",
        },
        url: `admin/system/organization/logo`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            updateInfo({
              logo: `${BASE_URL}/resource/organization/logo?t=${new Date().getTime()}`,
            })
          );
        } catch {
          console.log("update server logo error");
        }
      },
    }),
    createInviteLink: builder.query({
      query: (expired_in = defaultExpireDuration) => ({
        headers: {
          "content-type": "text/plain",
          accept: "text/plain",
        },
        url: `/admin/user/create_invite_link?expired_in=${expired_in}`,
        responseHandler: (response) => response.text(),
      }),
      transformResponse: (link) => {
        // 替换掉域名
        const invite = new URL(link);
        return `${location.origin}${invite.pathname}${invite.search}${invite.hash}`;
      },
    }),
    updateServer: builder.mutation({
      query: (data) => ({
        url: `admin/system/organization`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled, getState }) {
        const { name: prevName, description: prevDesc } = getState().server;
        dispatch(updateInfo(data));
        try {
          await queryFulfilled;
        } catch {
          dispatch(updateInfo({ name: prevName, description: prevDesc }));
        }
      },
    }),
  }),
});

export const {
  useSendTestEmailMutation,
  useUpdateFirebaseConfigMutation,
  useGetFirebaseConfigQuery,
  useGetLoginConfigQuery,
  useUpdateLoginConfigMutation,
  useGetSMTPConfigQuery,
  useUpdateSMTPConfigMutation,
  useGetAgoraConfigQuery,
  useUpdateAgoraConfigMutation,
  useGetServerQuery,
  useLazyGetMetricsQuery,
  useLazyGetServerQuery,
  useUpdateServerMutation,
  useUpdateLogoMutation,
  useCreateInviteLinkQuery,
  useLazyCreateInviteLinkQuery,
} = serverApi;