import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


class List extends React.Component {
  render() {
    return (
      <Ul>
        <Li>{this.props.firstArgument}</Li>
        <Li>{this.props.secondArgument}</Li>
      </Ul>
    );
  }
}

List.propTypes = {
  firstArgument: PropTypes.string,
  secondArgument: PropTypes.string,
};

const Ul = styled.ul`
  text-decoration: none;
`;

const Li = styled.li`
  list-style: decimal;
  list-style-position: inside;
  text-decoration: underline;
  font-family: cursive;
  font-style: italic;
  :nth-child(2) {
   background-color: bisque;
  }
`;

export default List;
