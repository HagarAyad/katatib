import * as React from 'react';
import { View, StyleSheet, Dimensions,Text } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import {colors,Fonts} from '../utils/appTheme';
import i18n from '../locals/i18n';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: colors.white }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: colors.white }]} />
);

const ThirdRoute = () => (
    <View style={[styles.scene, { backgroundColor: colors.white }]} />
  )

const initialLayout = { width: Dimensions.get('window').width };

const StudentSessions=()=>{
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: `${i18n.t('learning-sessions')}` },
    { key: 'second', title: `${i18n.t('online-sessions')}`},
    { key: 'third', title: `${i18n.t('scheduled-sessions')}`},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: colors.primary }}
      style={{ backgroundColor: colors.white }}
      renderLabel={({ route, focused, color }) => (
        <Text style={focused?styles.labelFocused:styles.label}>
          {route.title}
        </Text>
      )}
    />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third:ThirdRoute
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={initialLayout}
    />
  );
}

export default StudentSessions

const styles = StyleSheet.create({
  scene: {
      flex: 1,
  },
  label:{
        color:colors.gray,
        fontSize:12,
        fontFamily:Fonts.Regular
   },
  labelFocused:{
        color:colors.black,
        fontSize:12,
        fontFamily:Fonts.Regular
    }
});