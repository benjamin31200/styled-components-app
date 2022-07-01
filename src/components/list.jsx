import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const Ul = styled.ul`
text-decoration: none;
`;

const Li = styled.li`
font-family: Arial, Helvetica, sans-serif;
list-style: decimal;
`;

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
    secondArgument: PropTypes.string
}
export default List;

