
import axios from 'axios';
import icone from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';
import './styles.css'

type Props = {
  salesId: number;
}

function handleClick(id: number){
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then(response => {
    console.log("Sucesso "  );
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
  