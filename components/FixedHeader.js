import React from 'react';

import {View, StyleSheet} from 'react-native';

const FixedHeader = ({children}) => {
    return(
        <View style={styles.container}>
            {children && React.cloneElement(children, { style: styles.footer})}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        
        padding: 20,
        height: 80,
        top: 25
    
    },
    footer: {
        alignItems: 'center'
    }
    
});
export default FixedHeader;