import * as React from 'react';
import { View, Platform, Button, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {} from 'react-native-screens';
import 'expo-asset';
import { Icon } from 'react-native-elements';

import { Center, FlexStart } from '../../components/Wrapper';

const Center1 = Center({ flex: 1 });
const FlexStart1 = FlexStart({ flex: 1 });
const Stack = createStackNavigator();

const LogoTitle = () => {
  return (
    <FlexStart1>
      <Icon type="ionicon" name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} color="white" />
    </FlexStart1>
  );
};

const CreatePostScreen = (props) => {
  const { navigation } = props;
  const [postText, setPostText] = React.useState('');

  return (
    <Center1>
      <TextInput
        multiline
        textAlign="center"
        textAlignVertical="center"
        placeholder="What's on your mind?"
        style={{ flex: 1, width: '100%', backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          setPostText('');
          navigation.navigate('Home', { post: postText });
        }}
      />
    </Center1>
  );
};

const HomeScreen = (props) => {
  const { navigation, route } = props;

  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <Center1>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: '101',
            otherParam: route.params?.post || 'anything you wnat here',
          })
        }
      />
    </Center1>
  );
};

const DetailsScreen = (props) => {
  const { navigation, route } = props;
  const itemId = route.params?.itemId;
  const otherParam = route.params?.otherParam;

  return (
    <Center1>
      <Text>DetailsScreen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button title="Go to Details... again" onPress={() => navigation.push('Details')} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
    </Center1>
  );
};

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => <Button onPress={() => alert('This is a button!')} title="Info" color="white" />,
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} initialParams={{ itemId: 21, otherParam: 'jjanggu' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
