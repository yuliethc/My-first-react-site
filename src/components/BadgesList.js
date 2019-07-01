import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/Badge.css";
import logotwitter from "../pages/images/twitter.svg";
import Gravatar from "../components/Gravatar";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length == 0) {
      return (
        <div>
          <h3>¡No Badges were found!</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create New Badge
          </Link>
        </div>
      );
    }
    return (
      <div className="Badges__container-list">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-4 ">
                      <Gravatar
                        className="Badge__avatar-list"
                        email={badge.email}
                        alt="Avatar"
                      />
                    </div>
                    <div className="col-8">
                      <li key={badge.id}>
                        <Link to = {`/badges/${badge.id}/edit`}>
                        <h3 className="Badge__section-name-list">
                          <span>{badge.firstName}</span>{" "}
                          <span>{badge.lastName}</span>
                        </h3>
                        </Link>
                      </li>
                      <div>
                        <h6 className="Badge__section-job-list">
                          {badge.jobTitle}
                        </h6>
                      </div>
                      <div>
                        <h6 className="Badge__section-twitter-list">
                          <img
                            className="Badge__logo-twitter-list"
                            src={logotwitter}
                            alt="twitterlogo"
                          />
                          <a href="https://twitter.com/">@{badge.twitter}</a>
                        </h6>
                      </div>
                    </div>
                  </div>

                  {/* <div className="row justify-content-center">
                    <div className="col-12">{badge.jobTitle}</div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-12">@{badge.twitter}</div>
                  </div> */}
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
