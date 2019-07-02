import React from "react";
import "./styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";
import PageError from "../components/PageError";
import PageLoading from "../components/PageLoading";
import api from "../api";
import Badge from "../components/Badge";
import { Link } from "react-router-dom";

class BadgeDetails extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.statement.error} />;
    }

    const badge = this.state.data;
    return (
      <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="Logo PlatziConf" />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>
                  {badge.firstName}
                  {badge.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={badge.firstName}
                lastName={badge.lastName}
                email={badge.email}
                jobTitle={badge.jobTitle}
                twitter={badge.twitter}
              />
            </div>
            <div className="col">
              <h1>Actions</h1>
              <div>
                <div>
                  <Link
                    className="btn btn-primary mb-2"
                    to={`/badges/${badge.id}/edit`}
                  >
                     - Edit -
                  </Link>
                </div>
                <div>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BadgeDetails;
