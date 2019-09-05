import React from 'react'
import Modal from 'react-modal'

const MassageModel = (props) => {


    return (

        <Modal
            isOpen={props.show}
            contentLabel="Saved Wether"
            onRequestClose={props.closeFunc}
            ariaHideApp={false}
            className="model"
        >
            <h3>Saves!</h3>
            <button onClick={props.closeFunc}>OK</button>
        </Modal>

    )
}

export default MassageModel