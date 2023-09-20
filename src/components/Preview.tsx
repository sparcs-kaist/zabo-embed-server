import React from "react";

import { TextBanner } from "zabo-embed";

export const TextBannerPreview: React.FC = () => {
  // TODO
  return (
    <div style={{width: 400}}>
      <TextBanner
        mainText="지금은 새학기 동아리 모집 시즌"
        subText="어느 동아리가 모집중인지 알고 싶다면?"
        serviceName="Zabo"
        style={{
          primary: true,
          themeColor: "#1C3340",
        }}
        actionURL="https://zabo.sparcs.org"
        actionText="자보 바로가기"
      />
    </div>
  );
};
