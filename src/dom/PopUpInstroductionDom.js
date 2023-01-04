import ReactDom from 'react-dom';

const PopUpInstroductionDom = ({children}) =>{
    const el = document.getElementById('popupDom');
    return ReactDom.createPortal(children, el);
}

export default PopUpInstroductionDom;