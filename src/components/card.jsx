import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class Card extends React.Component {
  render() {
    return (
      <Picture>
        <Img src={this.props.img} alt={this.props.name}></Img>
        <Title backgroundColor={this.props.backgroundColor} className="figcaption">{this.props.title}</Title>
      </Picture>
    );
  }
}

Card.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  backgroundColor: PropTypes.string
};

const Picture = styled.figure`
  border: 1px #cccccc solid;
  padding: 4px;
  margin: auto;
`;

const Title = styled.figcaption`
  background-color: ${props => props.backgroundColor};
  color: white;
  font-style: italic;
  padding: 2px;
  text-shadow: 1px -1px 2px black;
  text-align: center;
  width: fit-content;
  display: inline-block;
  border: 1px solid black;
`;
const Img = styled.img`
  border: 2px solid black;
  width: 400px;
  height: 300px;
`;
export default Card;
