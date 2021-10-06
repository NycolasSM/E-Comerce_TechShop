import React from 'react';
import { Link } from 'react-router-dom';

import './TopBarInfo.css'

import { faUser, faComment } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TopBar() {
  return (
    <div className="topBar">
      <ul>
        <Link className="link" to="/formtest">
          <li className="socialIcons"><FontAwesomeIcon icon={faFacebookSquare} />{" "}</li>
        </Link>
        <li className="socialIcons"><FontAwesomeIcon icon={faTwitterSquare} />{" "}</li>
        <li className="socialIcons"><FontAwesomeIcon icon={faInstagramSquare} />{" "}</li>
        <Link className="link" to="/tests">
          <li className="socialIcons"><FontAwesomeIcon icon={faYoutubeSquare} />{" "}</li>
        </Link>
      </ul>
      <ul>
        <Link className="link" to="/sigin">
          <li className="socialIcons"><FontAwesomeIcon icon={faUser} />{" "}<span>Minha conta</span></li>
        </Link>
        <Link className="link" to="/">
          <li className="socialIcons"><FontAwesomeIcon icon={faComment} />{" "}<span>Central de Atendimento</span></li>
        </Link>
      </ul>
    </div>
  );
}