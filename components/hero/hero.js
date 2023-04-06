import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="top-header m-5 d-flex justify-content-center">
      <div className="container my-5">
        <div className="row p-0 pb-0 pe-lg-0 pt-lg-0 align-items-center">
          <div className="col-lg-7 p-3 p-lg-3 pt-lg-1">
            <h1 className="display-5 fw-bold lh-1 pt-5">
              My Web Class: Revolutianized Teaching Solutions
            </h1>
            <p className="lead" style={{ fontFamily: "Space Mono, monospace" }}>
              Empower your students with cutting-edge software engineering
              skills. <br />
              Join MyWebClass and discover advanced technologies that will
              transform your teaching and their learning journey.
            </p>
            <div className="d-grid gap-3 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-success btn-lg px-4 me-md-2 fw-bold"
                style={{ backgroundColor: "blue" }}
              >
                <Link href="/about/about">Start Here</Link>
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden">
            <Image
              className="img-fluid fade-in"
              src="/images/image-project1.jpg"
              alt="A teacher instructing a student"
              width={720}
              height={480}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
