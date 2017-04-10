import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux'; //Communication glue, it is what makes them play nicely together
import {createStore} from 'redux';
import reducers from './reducers'; //to import index file
import {Header} from './components/common';


const App =() =>{
return(
  <Provider store={createStore(reducers)}>
    <View>
      <Header headerText="Tech Stack" />
    </View>
  </Provider>
  );
};

export default App;
