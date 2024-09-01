import exp from "constants";
import React from "react";
import { useState } from "react";
import {Button, Modal, ModalBody} from 'react-bootstrap';

function ModalWindow() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <Button variant="primary" onClick={handleShow}>
            Launch static backdrop modal
        </Button>

        <Modal
            show = {show}
            onHide = {handleClose}
            backdrop = "static"
            keyboard = {false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    I will not close if you click outside me. Don't even try to press escape key.
                </ModalBody>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary ">
                        Understood
                    </Button>
                </Modal.Footer>
        </Modal>
        </>
    );
}

export default ModalWindow;