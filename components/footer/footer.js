export default function Footer(){
  return (
    <footer>
      <section>
        <div
          className="p-4 align-items-center pb-5 shadow-lg navbar-dark bg-light"
          style={{ paddingTop: "70px" }}
        >
          <div className="container mt-2 mb-3">
            <div className="row">
              <div className="col">
                <h5>About Us:</h5>
                <ul className="list-group list-group-flush m-0 p-0">
                  <li className="list-item" style={{ listStyle: "none" }}>
                    <a
                      href="story.html"
                      style={{
                        textDecoration: "none",
                        color: "rgb(37, 37, 41)",
                      }}
                    >
                      Our Story
                    </a>
                  </li>
                  <li className="list-item" style={{ listStyle: "none" }}>
                    <a
                      href="privacy2.html"
                      style={{
                        color: "rgb(37, 37, 41)",
                        textDecoration: "none",
                      }}
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h5>Our Social Media:</h5>
                <ul className="list-group list-group-flush m-0 p-0">
                  <li className="list-item" style={{ listStyle: "none" }}>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "rgb(37, 37, 41)",
                      }}
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="list-item" style={{ listStyle: "none" }}>
                    <a
                      href="#"
                      style={{
                        color: "rgb(37, 37, 41)",
                        textDecoration: "none",
                      }}
                    >
                      Twitter
                    </a>
                  </li>
                  <li className="list-item" style={{ listStyle: "none" }}>
                    <a
                      href="#"
                      style={{
                        color: "rgb(37, 37, 41)",
                        textDecoration: "none",
                      }}
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of what's new and exciting from us.</p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <button
                      className="btn"
                      style={{ backgroundColor: "blue", color: "white" }}
                      type="button"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

