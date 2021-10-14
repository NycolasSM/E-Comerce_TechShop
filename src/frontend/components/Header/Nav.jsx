import './Nav.css'
import { faGripVertical, faTags, faBars, faStar, faComment, faSearchLocation} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';

export default function Nav() {
  return (
    <nav className="navigation">
      <ul>
        <li className="categories"><FontAwesomeIcon className="iconBorder" icon={faBars} />{" "}Categorias</li>
        <li><FontAwesomeIcon icon={faTags} />{" "}Ofertas Hoje</li>
        <li><FontAwesomeIcon icon={faStar} />{" "}Lançamentos</li>
        <li><FontAwesomeIcon icon={faGripVertical} />{" "}Marcas</li>
        <li><FontAwesomeIcon icon={faComment} />{" "}Contato</li>
        <li><FontAwesomeIcon icon={faSearchLocation} />{" "}Localização</li>
      </ul>
    </nav>
  );
}