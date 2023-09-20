export interface Service {
  themeColor: string;
  url: string;
}

export const services = {
  Zabo: {
    themeColor: "#1C3340",
    url: "https://zabo.sparcs.org",
  },
  OTL: {
    themeColor: "#E54C65",
    url: "https://otl.kaist.ac.kr",
  },
  SPARCS: {
    themeColor: "#EBA12A",
    url: "https://sparcs.org",
  },
  Ara: {
    themeColor: "#ED3A3A",
    url: "https://newara.sparcs.org",
  },
  Taxi: {
    themeColor: "#6E3678",
    url: "https://taxi.sparcs.org",
  },
} as const satisfies Record<string, Service>;

