import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const Picture = styled.figure`
  border: 1px #cccccc solid;
  padding: 4px;
  margin: auto;
`;

const Title = styled.figcaption`
  background-color: black;
  color: white;
  font-style: italic;
  padding: 2px;
  text-align: center;
`;

const Img = styled.img`
  border: 2px solid black;
`;

class Card extends React.Component {
  render() {
    return (
      <Picture>
        <Img src={this.props.img} alt={this.props.name}></Img>
        <Title>{this.props.title}</Title>
      </Picture>
    );
  }
}
Card.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string
}
export default Card;

