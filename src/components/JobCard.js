import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JobCard = ({ backgroundColor, renderComponent }) => {
  return (
    <View style={[styles.container,{ backgroundColor}]}>
      {typeof renderComponent === 'function' ? renderComponent() : renderComponent}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 16,
      width:280,
      height:186,
      borderRadius:20,
      margin:6,
    
      
    },
  }
);
  

export default JobCard;