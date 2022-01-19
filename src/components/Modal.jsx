import React, {useEffect} from 'react';
import ReactDOM from 'react-dom'
import { Modal,Button } from 'react-bootstrap';
import "./Modals.css"

export default function GameModal({isOpen, onClose,text}) {


    // useEffect(()=>{
    //     //this useEffect adds an event listener which makes it so pressing any key will close the modal
    //     if(isOpen){
    //         setTimeout(()=>{
    //             document.addEventListener('keyup', (event)=>{
    //                 console.log('called, key listneer')
    //                 event.preventDefault()
    //                 if(document.getElementById("closeModal")){
    //                     console.log("GOT THE MODAL")
    //                     document.getElementById('closeModal').click();
    //                 }
    //                 return true
    //             })
    //         }, 400)
    //       }
    //     }

    //         , [isOpen])

    if(!isOpen){
        return null
    }
    return ReactDOM.createPortal(
        <>
        <div className='overLay' />
        <div className="modalDiv">
            <h2>GameOver</h2>
            <p className="GOText">{text}</p>
            <button id="closeModal" className="GOModalBtn" onClick={onClose}>Close</button>
        </div>
        </>,
        document.getElementById('portal')
    )
}
