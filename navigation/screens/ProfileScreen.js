import * as React from 'react';
import { View, Text } from 'react-native';
import { SignOut } from '../../Auth.js'

export default function ProfileScreen({navigation}) {
    return(
        <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
                onPress={() => alert('This is the "Profile" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold'}}>Profile
            </Text>

            <SignOut/>
        </View>
    )

}