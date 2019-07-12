import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="main-continer">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand" href="#">
						MobileMechs
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>

					<div
						className="collapse navbar-collapse"
						id="navbarTogglerDemo02">
						<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home{" "}
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/service">
									Services
								</a>
							</li>
						</ul>
						<form className="form-inline my-2 my-lg-0">
							<input
								className="form-control mr-sm-2"
								type="search"
								placeholder="email address"
							/>
							<button
								className="btn btn-outline-success my-2 my-sm-0"
								type="submit">
								LogIn
							</button>
						</form>
					</div>
				</nav>

				<br />

				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">MobileMechs</h1>
						<p className="lead">
							Bringing top notch service to your front door. More
							text and information will go here.
						</p>
					</div>
				</div>
				<div className="card col-sm-4 d-inline-block">
					<img
						src="https://cdn.road.cc/sites/default/files/styles/main_width/public/190110sramlaunch-1374_0.jpg?itok=t80FBZ8a"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Road Bikes</h5>
						<p className="card-text">
							Some card text so that is shows text in this area.
							Also another line as well to show multiple lines of
							text.
						</p>
						<a href="#" className="btn btn-primary">
							More Info{" "}
						</a>
					</div>
				</div>
				<div className="card col-sm-4 d-inline-block">
					<img
						src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/11/2019/02/SM2_AXS_Tucson_Launch_MR-6657.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Mountain Bikes</h5>
						<p className="card-text">
							Some card text so that is shows text in this area.
							Also another line as well to show multiple lines of
							text.
						</p>
						<a href="#" className="btn btn-primary">
							More Info{" "}
						</a>
					</div>
				</div>
				<div className="card col-sm-4 d-inline-block">
					<img
						src="https://bikepacking.com/wp-content/uploads/2014/07/bikes-troll-log-00.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Bike Builds</h5>
						<p className="card-text">
							Some card text so that is shows text in this area.
							Also another line as well to show multiple lines of
							text.
						</p>
						<a href="#" className="btn btn-primary">
							More Info{" "}
						</a>
					</div>
				</div>
				<footer className="page-footer font-small cyan darken-3">
					<div className="container">
						<div className="row">
							<div className="col-md-12 py-5">
								<div className="mb-5 flex-center">
									<a className="fb-ic">
										<i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
											{" "}
										</i>
									</a>
									<a className="tw-ic">
										<i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
											{" "}
										</i>
									</a>
									<a className="gplus-ic">
										<i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x">
											{" "}
										</i>
									</a>
									<a className="li-ic">
										<i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
											{" "}
										</i>
									</a>
									<a className="ins-ic">
										<i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
											{" "}
										</i>
									</a>
									<a className="pin-ic">
										<i className="fab fa-pinterest fa-lg white-text fa-2x">
											{" "}
										</i>
									</a>
								</div>
							</div>
						</div>
					</div>

					<br />

					<div className="footer-copyright text-center py-3">
						© 2018 Copyright:
						<a href="https://mdbootstrap.com/education/bootstrap/">
							{" "}
							MDBootstrap.com
						</a>
					</div>
				</footer>
			</div>
		);
	}
}
