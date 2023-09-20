import React, { useMemo } from "react";

import { TextBanner } from "zabo-embed";
import {
  useAllFormFields,
  reduceFieldsToValues,
} from "payload/components/forms";
import { services } from "../constants/services";

export const TextBannerPreview: React.FC = () => {
  const [fields] = useAllFormFields();
  const data = useMemo(() => reduceFieldsToValues(fields), [fields]);

  return (
    <div style={{ width: 400 }}>
      <TextBanner
        mainText={data.mainText}
        subText={data.subText}
        serviceName={data.service}
        style={{
          primary: data["style.primary"],
          themeColor: data["style.overrideThemeColor"] ||
            services[data.service]?.themeColor,
        }}
        actionURL={data["action.actionUrl"] || services[data.service]?.url}
        actionText={data["action.actionText"]}
      />
    </div>
  );
};
