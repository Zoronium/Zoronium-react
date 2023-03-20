import { useState, Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Model } from "./Model3";
import "./App.css";

const New = () => {
  const [count, setCount] = useState(0);
  const [pos, setPos] = useState(0);
  const d = new Date();
  let time = d.toLocaleTimeString();
  let date = d.toLocaleDateString();
  return (
    <div className="container">
      <div className="">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            height: "80%",
          }}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/codewithzoro"
          >
            <img src="twitter.png" />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/advaitj/"
          >
            <img src="linkedin.png" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.github.com/Zoronium"
          >
            <img src="github.png" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:aj.advaitj+website@gmail.com"
          >
            <img src="email.png" />
          </a>
        </div>

        <Canvas
          camera={{ position: [0, 1, 10.25], fov: 15 }}
          dpr={[1.5, 2]}
          style={{
            backgroundColor: "#12071f",
            width: "100vw",
            height: "100vh",
          }}
        >
          <ambientLight intensity={1.25} />
          <ambientLight intensity={0.1} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <Model position={[0.125, -0.9, 0]} />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
        <div
          className=""
          style={{ transform: "translate(5vw , -95vh)", fontSize: "200px" }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              pointerEvents: "none",
              width: "100%",
              height: "100%",
              display: "flex",
              alignContent: "center",
            }}
          >
            <div
              style={{
                margin: "auto auto",
              }}
              className={"typewriter"}
            >
              <h1
                style={{
                  margin: 0,
                  padding: 0,
                  fontSize: "25vw",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                }}
              >
                hello
              </h1>
            </div>
            <div
              style={{
                position: "absolute",
                top: "84vh",
                
                fontSize: "13px",
                color: "#ddd",
              }}
            >
              {time}
            </div>
            <div
              style={{
                position: "absolute",
                top: "82vh",
                
                fontSize: "13px",
                color: "#ddd",
              }}
            >
              {date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
