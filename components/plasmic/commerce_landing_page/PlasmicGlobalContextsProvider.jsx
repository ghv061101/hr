// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ayMB79M2Zha2oXCHU8VvVd
import * as React from "react";
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider";
import { EmbedCss } from "@plasmicpkgs/plasmic-embed-css";
import { CmsCredentialsProvider } from "@plasmicpkgs/plasmic-cms";

export default function GlobalContextsProvider(props) {
  const {
    children,
    antdConfigProviderProps,
    embedCssProps,
    cmsCredentialsProviderProps
  } = props;
  return (
    <AntdConfigProvider
      {...antdConfigProviderProps}
      borderRadius={
        antdConfigProviderProps && "borderRadius" in antdConfigProviderProps
          ? antdConfigProviderProps.borderRadius
          : 6
      }
      colorBgBase={
        antdConfigProviderProps && "colorBgBase" in antdConfigProviderProps
          ? antdConfigProviderProps.colorBgBase
          : "#ffffff"
      }
      colorError={
        antdConfigProviderProps && "colorError" in antdConfigProviderProps
          ? antdConfigProviderProps.colorError
          : "#ff4d4f"
      }
      colorInfo={
        antdConfigProviderProps && "colorInfo" in antdConfigProviderProps
          ? antdConfigProviderProps.colorInfo
          : "#1677ff"
      }
      colorPrimary={
        antdConfigProviderProps && "colorPrimary" in antdConfigProviderProps
          ? antdConfigProviderProps.colorPrimary
          : "#1677ff"
      }
      colorSuccess={
        antdConfigProviderProps && "colorSuccess" in antdConfigProviderProps
          ? antdConfigProviderProps.colorSuccess
          : "#52c41a"
      }
      colorWarning={
        antdConfigProviderProps && "colorWarning" in antdConfigProviderProps
          ? antdConfigProviderProps.colorWarning
          : "#faad14"
      }
      controlHeight={
        antdConfigProviderProps && "controlHeight" in antdConfigProviderProps
          ? antdConfigProviderProps.controlHeight
          : 32
      }
      defaultDark={
        antdConfigProviderProps && "defaultDark" in antdConfigProviderProps
          ? antdConfigProviderProps.defaultDark
          : false
      }
      lineWidth={
        antdConfigProviderProps && "lineWidth" in antdConfigProviderProps
          ? antdConfigProviderProps.lineWidth
          : 1
      }
      loadingText={
        antdConfigProviderProps && "loadingText" in antdConfigProviderProps
          ? antdConfigProviderProps.loadingText
          : undefined
      }
      removeLoading={
        antdConfigProviderProps && "removeLoading" in antdConfigProviderProps
          ? antdConfigProviderProps.removeLoading
          : undefined
      }
      sizeStep={
        antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
          ? antdConfigProviderProps.sizeStep
          : 4
      }
      sizeUnit={
        antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
          ? antdConfigProviderProps.sizeUnit
          : 4
      }
      themeStyles={
        antdConfigProviderProps && "themeStyles" in antdConfigProviderProps
          ? antdConfigProviderProps.themeStyles
          : true
          ? {
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "normal",
              lineHeight: "1.5",
              color: "#333333",
              letterSpacing: "normal"
            }
          : undefined
      }
      wireframe={
        antdConfigProviderProps && "wireframe" in antdConfigProviderProps
          ? antdConfigProviderProps.wireframe
          : false
      }
    >
      <EmbedCss
        {...embedCssProps}
        css={
          embedCssProps && "css" in embedCssProps
            ? embedCssProps.css
            : undefined
        }
      >
        <CmsCredentialsProvider
          {...cmsCredentialsProviderProps}
          databaseId={
            cmsCredentialsProviderProps &&
            "databaseId" in cmsCredentialsProviderProps
              ? cmsCredentialsProviderProps.databaseId
              : undefined
          }
          databaseToken={
            cmsCredentialsProviderProps &&
            "databaseToken" in cmsCredentialsProviderProps
              ? cmsCredentialsProviderProps.databaseToken
              : undefined
          }
          host={
            cmsCredentialsProviderProps && "host" in cmsCredentialsProviderProps
              ? cmsCredentialsProviderProps.host
              : "https://data.plasmic.app"
          }
          locale={
            cmsCredentialsProviderProps &&
            "locale" in cmsCredentialsProviderProps
              ? cmsCredentialsProviderProps.locale
              : undefined
          }
        >
          {children}
        </CmsCredentialsProvider>
      </EmbedCss>
    </AntdConfigProvider>
  );
}
