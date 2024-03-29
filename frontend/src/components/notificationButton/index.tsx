
import axios from 'axios';
import { toast } from 'react-toastify';
import icone from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';
import './styles.css'

type Props = {
  salesId: number;
}

function handleClick(id: number){
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then(response => {
    toast.info("SMS enviado com sucesso");
  } )
}

function NotificationButton({salesId} : Props) {    
    return (
        <div className="dsmeta-red-btn" onClick={()=> handleClick(salesId)}>
        <img src={icone} alt="Notificar" />
      </div>
    )
  }
  
  export default NotificationButton
  