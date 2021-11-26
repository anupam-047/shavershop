import React from 'react';
import { Modal } from "react-bootstrap";

const LearnMore = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h4 className=" text-uppercase fw-bold text-warning">Types of Holiday Tourism</h4>
          <p className="fw-bold text-secondary">
            <li>
              Beach tourism Many tourists spend their holidays on beaches. They
              relax, go bathing or just enjoy the salty sea breeze and the
              ocean. Spending holidays on beaches has had a long tradition for
              over one and a half centuries.
            </li>
            <li>
              Winter tourism Winter tourism started out in the middle of the
              19th century when wealthy Europeans went to St. Moritz and other
              alpine resorts. In Europe and in the American Rockies skiing
              resorts attract millions of people every year. Various lifts bring
              skiers to altitudes of over 3,000 meters.
            </li>
            <li>
              Medical tourism People go to other countries for medical treatment
              and operations. Irish women, for example, go to the UK because
              abortions are forbidden in their country. West Europeans go to
              Eastern Europe for dental treatment. Americans go to Mexico for
              plastic surgery and other operations.
            </li>
            <li>
              Educational tourism Young people live as exchange students in
              other countries, where they go to school and study the language
              and culture of the host country.
            </li>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide} className=" btn fw-bold btn-warning">Close</button>
        </Modal.Footer>
      </Modal>
    );
};

export default LearnMore;