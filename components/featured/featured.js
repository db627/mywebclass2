import React from "react";

export default function body(){
  return (
    <div className="pb-5 pt-5 px-5 bg-light">
      <section className="py-5 ">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img
                  src="src/1.png"
                  className="card-img-top rounded-top"
                  alt="Featured Article"
                />
                <div className="card-body">
                  <a
                    href="#"
                    className="card-title text-xl font-bold text-gray-900 mb-2 hover:text-blue-600"
                    style={{ color: "black" }}
                  >
                    Article Title
                  </a>
                  <p className="card-text text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a
                    href="contentpage.html"
                    className="btn btn-primary mt-2 font-bold hover:underline"
                    style={{ backgroundColor: "blue", color: "white" }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="src/2.png"
                  className="card-img-top rounded-top"
                  alt="Featured Article"
                />
                <div className="card-body">
                  <a
                    href="#"
                    className="card-title text-xl font-bold text-gray-900 mb-2 hover:text-blue-600"
                    style={{ color: "black" }}
                  >
                    Article Title
                  </a>
                  <p className="card-text text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a
                    href="contentpage.html"
                    className="btn btn-primary mt-2 font-bold hover:underline"
                    style={{ backgroundColor: "blue", color: "white" }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="src/3.png"
                  className="card-img-top rounded-top"
                  alt="Featured Article"
                />
                <div className="card-body">
                  <a
                    href="#"
                    className="card-title text-xl font-bold text-gray-900 mb-2 hover:text-blue-600"
                    style={{ color: "black" }}
                  >
                    Article Title
                  </a>
                  <p className="card-text text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a
                    href="contentpage.html"
                    className="btn btn-primary mt-2 font-bold hover:underline"
                    style={{ backgroundColor: "blue", color: "white" }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
