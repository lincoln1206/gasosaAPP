import React from 'react';
import {Text} from 'react-native';

//ABSTRACT FACTORY
export class MonoText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}
