import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux'; //Communication glue, it is what makes them play nicely together
import {createStore} from 'redux';
import reducers from './reducers'; //to import index file
import {Header} from './components/common';
import LibraryList from './components/LibraryList';


const App =() =>{
return(
  <Provider store={createStore(reducers)}>
    <View style={{flex:1}}>
      <Header headerText="Tech Stack" />
      <LibraryList />
    </View>
  </Provider>
  );
};

export default App;
