import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ texts, content, actions, onDismiss }) => {
    console.log(texts)
    return (
        ReactDOM.createPortal(
            <div
            onClick={ onDismiss }  
            className="ui dimmer modals visible active">
                <div
                onClick={(e)=> e.stopPropagation()}
                className="ui standard modal visible active">
                    <div className="header">{texts}</div>
                        <div className="content">
                            {content}
                        </div>
                        <div className="actions">
                            { actions }
                            
                        </div>
                </div>
            </div>, 
            document.getElementById('modal')
        )
    )
}

export default Modal