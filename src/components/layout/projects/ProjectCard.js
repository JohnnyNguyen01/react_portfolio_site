import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Card, Button, Badge } from "react-bootstrap";
import "./ProjectCard.css";

const ProjectCard = ({
  projectLink,
  completionYear,
  imagePath,
  title,
  subtitle,
  text,
  badges,
}) => {
  /**
   * Maps all the badges that I put in
   */
  const mapBadges = () =>
    badges.map((badgeText) => {
      return (
        <Badge pill variant="success" key='badgeText'>
          {badgeText}
        </Badge>
      );
    });

  return (
    <Fragment>
      <Card style={{ width: "18rem" }} className="mg-l10 mg-t10 card">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"> {subtitle}</Card.Subtitle>
          <Card.Text className='card-text'>{text}</Card.Text>
          {badges != null ? mapBadges() : null}
        </Card.Body>
        <Button block href={projectLink} className="mg-t10 button">
          View More{" "}
          <span role="img" aria-label="projectCardBtnImg" className="emoji">
            🧐
          </span>
        </Button>
        <Card.Footer>{completionYear}</Card.Footer>
      </Card>
    </Fragment>
  );
};

ProjectCard.propTypes = {
  projectLink: PropTypes.string.isRequired,
  imagePath: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  badges: PropTypes.array,
};

export default ProjectCard;
