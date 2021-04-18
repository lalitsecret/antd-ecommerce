import reducer from './reducer'
import App from '../components/App'
import {Provider}from 'react-redux'
import {createStore} from 'redux'
import 'antd/dist/antd.css';
import '../assets/style.css'
const store=createStore(reducer)
function Main()
{
  return <Provider store={store}><App/></Provider>
}
export default Main