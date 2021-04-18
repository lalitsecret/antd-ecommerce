import reducer from './reducer'
import App from '../components/App'
import {Provider}from 'react-redux'
import {createStore} form 'redux'
import 'antd/dist/antd.css';
const store=createStore(reducer)
function Main()
{
  return <Provider store={store}><App/></Provider>
}
export default Main