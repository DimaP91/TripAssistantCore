import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import './HistoryCard.scss';

class HistoryCard extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { modalIsOpen } = this.state;
    const { routeName, routeDate, isActive } = this.props;
    return (
      <div className={`historyCard ${isActive ? 'is-active' : ''}`}>
        <p className="historyCard__p">
          {routeName} &nbsp;
          <span className="historyCard__p--date">{routeDate}</span>
          {isActive && <span className="historyCard__p--is-active">Active</span>}
        </p>
        <button type="submit" onClick={this.openModal} className="historyCard__btn">VIEW</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          ariaHideApp={false}
          contentLabel="Trip details"
        >
          <h3>Some text</h3>
          {routeName && <p>{routeName}</p>}
        </Modal>
      </div>
    );
  }
}


HistoryCard.defaultProps = {
  isActive: false
};

HistoryCard.propTypes = {
  routeName: PropTypes.string.isRequired,
  routeDate: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

export default HistoryCard;
