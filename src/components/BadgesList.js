import React from "react";
import "../components/styles/Badge.css";
import logotwitter from '../pages/images/twitter.svg';
class BadgesList extends React.Component {
  render() {
    return (
      <div className="Badges__container-list">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <div class="container">
                  <div className="row justify-content-start">
                    <div className="col-4 ">
                      <img
                        className="Badge__avatar-list"
                        src={badge.avatarUrl}
                        alt="Avatar"
                      />
                    </div>
                    <div className="col-8">
                      <li key={badge.id}>
                        <h3 className="Badge__section-name-list">
                          <span>{badge.firstName}</span>{" "}
                          <span>{badge.lastName}</span>
                        </h3>
                      </li>
                      <div><h6 className="Badge__section-job-list">{badge.jobTitle}</h6></div>
                      <div><h6 className="Badge__section-twitter-list"> 
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
