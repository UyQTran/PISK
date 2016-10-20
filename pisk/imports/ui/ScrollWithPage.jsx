import React from 'react';
import {$} from 'meteor/jquery';
import {uniqueId} from 'lodash';


class ScrollWithPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sticky: false
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    this.wrapperId = uniqueId('scrollWithPage_');
  }

  componentDidMount() {
    const offset = $(`#${this.wrapperId}`).offset().top;
    $(window).scroll(this.handleScroll);
    const originalElement = document.querySelector(`#${this.wrapperId}:first-child > *:first-child`);

    this.wrapperWidth = $(originalElement).width();
    this.offset = offset;

    this.handleScroll();
  }

  componentWillUnmount() {
    $(window).off('scroll', this.handleScroll);
  }

  handleScroll() {
    const top = $(window).scrollTop();

    const isBelow = top > this.offset;
    if(this.state.sticky !== isBelow) {
      this.setState({sticky: isBelow});
    }
  }

  render() {
    const style = this.state.sticky ? {
      position: 'fixed',
      top: '0px',
      width: `${this.wrapperWidth}px`,
      zIndex: 1000
    } : {display: 'none'};

    return(
      <div
        id={this.wrapperId}>
        {this.props.children}

        <div
          style={{...style, backgroundColor: '#fff'}}>
            {this.props.children}
        </div>
      </div>
    );
  }
}

ScrollWithPage.propTypes = {
  children: React.PropTypes.node.isRequired
};

export default ScrollWithPage;
