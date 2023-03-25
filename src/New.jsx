import { useState, Suspense, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Model } from "./Model3";
import "./App.css";
import "./Login.css";

const New = () => {
  const [count, setCount] = useState(0);
  const [pos, setPos] = useState(0);
  const d = new Date();
  let birthDateTime =
    new Date("07 Mar 2003 00:00:00 GMT").getTime() - d.getTime();
  const byear = birthDateTime / (1000 * 60 * 60 * 24 * 365);
  // console.log(byear);

  let time = d.toLocaleTimeString();
  let date = d.toLocaleDateString();

  const formRef = useRef(null);

  function handleSubmit(event) {
    formRef.current.submit();
  }

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
          <div
            style={{
              position: "absolute",
              left: "3vw",
              margin: "1rem",
              fontSize: "13px",
              color: "#ddd",
            }}
          >
            <a href="#form-id">Got Questions{">"}</a>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/codewithzoro"
          >
            <img src="twitter.png" />
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
          style={{ transform: "translate(5vw , -75vh)", fontSize: "200px" }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              pointerEvents: "none",
              width: "100%",
              height: "90%",
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
                top: "64vh",

                fontSize: "13px",
                color: "#ddd",
              }}
            >
              {time}
            </div>
            <div
              style={{
                position: "absolute",
                top: "62vh",

                fontSize: "13px",
                color: "#ddd",
              }}
            >
              {date}
            </div>
          </div>
        </div>
        <div
          style={{
            fontFamily: "monospace, Courier",
          }}
        >
          <h1>About me</h1>
          <p
            style={{
              lineHeight: "2em",
              paddingInline: "8vw",
            }}
          >
            Hi there! My name is Advait Jain and I am{" "}
            {Math.abs(byear).toFixed(0)} years old. I live in Delhi, India and I
            love [Coding , Playing Guitar , etc].
            <br />
            <br />
            I am passionate and driven Btech IT student , I am constantly
            striving to push the boundaries of what I can achieve by learing
            constantly and building my knowlage.
            <br />
            <br />
            Feel free to reach out to me at{" "}
            <a href="mailto:aj.advaitj+port@gmail.com">
              {" "}
              aj.advaitj@gmail.com
            </a>{" "}
            if you want to connect! <br />
          </p>
          <p
            style={{
              paddingBottom: "8vw",
              paddingInline: "8vw",
              lineHeight: "2em",
              fontFamily: "monospace, Courier",
            }}
          >
            With a strong foundation in technical languages such as Python,
            JavaScript, Java, Rust, and C/C++, as well as web and database
            technologies like React.js, HTML/CSS, and SQL, etc.
            <br />I have a diverse set of skills that allow me to take on
            complex projects with ease.
          </p>
          <p>
            <h2 class="Bio">Bio 🧬</h2>
            <div
              className=""
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr",
                marginInline: "2rem",
                rowGap: "0.5rem",
                marginBottom: "5rem",
              }}
            >
              <span>2003</span>Born in Delhi, India.
              <span>2021</span>Completed the 12th Grade
              <span>2021</span> Started the coding My Journey
              <span>2021 to present</span>Studying As a BTech Student in
              Informational Technology
              <span>Future</span> Helping Build software which is used by
              Billions
            </div>
          </p>
        </div>
        <h2>Technologies 👨‍💻</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            margin: "2rem 2em 2em 2em",
          }}
        >
          <br />
          <img
            src="https://img.icons8.com/color/48/null/python--v1.png"
            alt="python"
            title="python"
          />
          <img
            src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
            height="48"
            alt="react.js"
            title="react.js"
          />
          <img
            src="https://img.icons8.com/color/48/javascript--v1.png"
            alt="js"
            title="Js"
          />
          <img
            src="https://img.icons8.com/color/48/null/typescript.png"
            alt="ts"
            title="Typescript"
          />
          <img
            src="https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg"
            height={48}
            title="Rust"
            alt="Rust"
          />
          <img
            src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png"
            height="35"
            alt="Docker"
            title="Docker"
          />
          <img
            src="https://img.icons8.com/color/48/null/linux--v2.png"
            alt="linux"
            title="linux"
          />
          <img
            title="Django"
            alt="Django"
            src="https://img.icons8.com/material-outlined/48/000000/django.png"
          />
          <img
            src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg"
            height={48}
            title="vscode editor"
            alt="vscode editor"
          />
          <img
            src="https://img.icons8.com/color/48/null/github--v1.png"
            alt="github"
            title="Github"
          />
          <img
            src="https://img.icons8.com/color/48/null/mysql-logo.png"
            alt="mysql"
            title="MySql"
          />
        </div>
      </div>
      <div>
        <div>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
            rel="stylesheet"
          />
          <section className="hero-section">
            <div className="card-grid">
              <a className="card" href="#">
                <div
                  className="card__background"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80)",
                  }}
                />
                <div className="card__content">
                  <p className="card__category">Backend</p>
                  <h3 className="card__heading">Desert</h3>
                </div>
              </a>
              <a className="card" href="#">
                <div
                  className="card__background"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80)",
                  }}
                />
                <div className="card__content">
                  <p className="card__category">Backend</p>
                  <h3 className="card__heading">Mountains</h3>
                </div>
              </a>
              <a className="card" href="#">
                <div
                  className="card__background"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80)",
                  }}
                />
                <div className="card__content">
                  <p className="card__category">FrontEnd</p>
                  <h3 className="card__heading">Countryside</h3>
                </div>
              </a>
              <a className="card" href="#">
                <div
                  className="card__background"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1546900703-cf06143d1239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1150&q=80)",
                  }}
                />
                <div className="card__content">
                  <p className="card__category">Frontend</p>
                  <h3 className="card__heading">Beach</h3>
                </div>
              </a>
              <div></div>
            </div>
          </section>
          <div
            style={{
              margin: "2rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <l
              className="twitter-timeline"
              data-theme="dark"
              data-height="500"
              data-width="1000"
              href="https://twitter.com/codewithzoro?ref_src=twsrc%5Etfw"
            >
              Tweets by codewithzoro
            </l>
          </div>
          <div className="login-box">
            <h2>Got any Questions Ask Away</h2>
            <form
              action="https://formsubmit.co/5f052b815648d35c2f1a6cf59dbd7b1d"
              method="POST"
              id="form-id"
              ref={formRef}
            >
              <div className="user-box">
                <input type="text" name="Name" required />
                <label>Your Name</label>
              </div>
              <div className="user-box">
                <input type="email" name="Email" required />
                <label>Email Id</label>
              </div>
              <div className="user-box">
                <input type={"text"} name="Comments" required />
                <label>Your Comments</label>
              </div>
              <a href="#" onClick={handleSubmit}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </a>
            </form>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginInline: "2rem",
            }}
          >
            <h3>Address</h3>

            <p>
              {" "}
              New Delhi , Delhi
              <br />
              India, pincode-110052 <br />
              India
            </p>
            <h3> Email</h3>
            <p
              style={{
                textAlign: "left !Important",
              }}
            >
              {" "}
              aj.advaitj@gmail.com
            </p>
            <h3>Phone</h3>
            <p>
              {" "}
              Please Dm me to get contact details or Complete the side form.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
