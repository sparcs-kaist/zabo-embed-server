import type { Field } from "payload/types";

export const showField: Field = {
  name: "show",
  label: "게시",
  required: true,
  type: "checkbox",
  admin: {
    position: "sidebar",
    description: ({ value }) => value
      ? "이 프로모션이 SPARCS 서비스에 게시됩니다."
      : "체크 해제시 모든 서비스에서 숨겨집니다.",
  }
} as const;
