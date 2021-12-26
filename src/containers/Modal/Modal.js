import React from 'react'
import './Modal.css';
export default function Modal({Content}) {
    return (
        <div className="modal" >
            <button className="modal-close-button" > <i class="fas fa-times"></i> </button>
            <Content/>
        </div>
    )
}
