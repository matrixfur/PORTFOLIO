import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ansar Hussain</span> from <span className="purple">India.</span>
            <br />
            I am a passionate Web3 developer with expertise in blockchain technologies and decentralized applications.
           
            <br />
            I have worked on various impactful blockchain projects, including "AnonXpose" and "Land Wallet," which leverage blockchain for social good and real-world applications.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Mentoring and Sharing Knowledge
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building decentralized futures with innovation and code!"
          </p>
          <footer className="blockquote-footer">Ansar Hussain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
