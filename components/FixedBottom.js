import React from 'react';

import {View, StyleSheet} from 'react-native';

const FixedBottom = ({children}) => {
    return(
        <View style={styles.container}>
            {children && React.cloneElement(children, { style: styles.footer})}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 10,
        padding: 20,
        height: 80,
    
    },
    footer: {
        alignItems: 'center'
    }
    
});
export default FixedBottom;