import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Dextro World - Carol Franco"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#0a0a0a",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px",
      }}
    >
      {/* Avatar */}
      <img
        src="https://www.dextro.world/images/avatar.png"
        alt="Avatar"
        width={400}
        height={400}
        style={{
          objectFit: "contain",
        }}
      />

      {/* Text content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "60px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: "bold",
            color: "white",
            marginBottom: "10px",
          }}
        >
          CAROL
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: "bold",
            color: "#22d3ee",
            marginBottom: "30px",
          }}
        >
          FRANCO
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#9ca3af",
            maxWidth: "500px",
          }}
        >
          Data Analyst & Web Measurement Specialist | Digital Marketing & Front-End Developer
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
