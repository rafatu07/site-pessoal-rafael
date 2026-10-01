import { ImageResponse } from "next/og";

export const alt = "Rafael Turino — Tecnologia, Sistemas, Dados e Gestão";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f3f0e8",
          color: "#1c1a17",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 6, color: "#5e5953" }}>
          TAUBATÉ
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, lineHeight: 0.92, letterSpacing: -2 }}>
            Rafael Turino
          </div>
          <div style={{ marginTop: 28, fontSize: 34 }}>
            Tecnologia, Sistemas, Dados e Gestão
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
