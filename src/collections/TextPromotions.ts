import type { CollectionConfig } from "payload/types";
import { TextBannerPreview } from "../components/Preview";
import { services } from "../constants/services";
import { showField } from "../fields";

export const TextPromotions: CollectionConfig = {
  slug: "textPromotions",
  admin: {
    useAsTitle: "mainText",
  },
  fields: [
    showField,
    {
      name: "service",
      type: "radio",
      required: true,
      options: Object.keys(services),
    },
    {
      name: "mainText",
      label: "메인 텍스트",
      required: true,
      type: "text",
    },
    {
      name: "subText",
      label: "서브 텍스트",
      required: true,
      type: "text",
    },
    {
      label: "액션 설정",
      name: "action",
      type: "group",
      fields: [
        {
          name: "actionUrl",
          type: "text",
          label: "이동할 URL",
          admin: {
            description: "버튼 클릭 시 이동하는 URL입니다. 비워 둘 시 선택한 서비스 홈으로 이동합니다."
          }
        },
        {
          name: "actionText",
          type: "text",
          label: "버튼 텍스트",
          required: true,
          admin: {
            description: "버튼에 표시되는 텍스트입니다."
          }
        }
      ],
    },
    {
      label: "스타일 설정",
      name: "style",
      type: "group",
      fields: [
        {
          name: "primary",
          type: "checkbox",
          label: "Primary 스타일 적용",
          required: true,
        },
        {
          name: "overrideThemeColor",
          type: "text",
          label: "서비스 테마 컬러 덮어쓰기",
          admin: {
            description: ({ value }) => !value
              ? "비워둘 시 서비스 기본 테마 컬러를 사용합니다."
              : /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(value)
                ? "서비스 테마 컬러를 무시하고 이 색상을 사용합니다."
                : "유효하지 않은 색상 코드입니다.",
          },
          validate: value => !value || /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(value) ||
            "유효하지 않은 색상 코드입니다.",
        }
      ],
    },
    {
      name: "Preview",
      type: "ui",
      admin: {
        position: "sidebar",
        components: {
          Field: TextBannerPreview,
        }
      }
    }
  ],
};

