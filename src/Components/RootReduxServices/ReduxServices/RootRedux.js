import React from 'react'
// import ReduxServices from '../../ReduxServices/ReduxServices'
import { Provider } from 'react-redux'
import store from './Stores/countStores'
import ReduxServices from './ReduxServices'
// import store from '../../ReduxServices/Stores/countStores'

const RootRedux = () => {
  return (
    <div>
        <Provider store={store}>
            <ReduxServices/>
        </Provider>
     
    </div>
  )
}

export default RootRedux
