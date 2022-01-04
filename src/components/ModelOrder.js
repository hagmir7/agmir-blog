import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import { FormOreder } from './FormOreder';
const ModalOrder = (props) => {
 const {
  buttonLabel,
  className
 } = props;
 const [modal, setModal] = useState(false);
 const [backdrop, setBackdrop] = useState(true);
 const [keyboard, setKeyboard] = useState(true);

 const toggle = () => setModal(!modal);

 const changeBackdrop = e => {
  let value = e.target.value;
  if (value !== 'static') {
   value = JSON.parse(value);
  }
  setBackdrop(value);
 }

 const changeKeyboard = e => {
  setKeyboard(e.currentTarget.checked);
 }

 return (
  <div>
   <Form inline onSubmit={(e) => e.preventDefault()}>
    <Button className="w-100 mt-3 text-white" color="info" onClick={toggle}>{buttonLabel}Buy Now</Button>
   </Form>
   <Modal isOpen={modal} toggle={toggle} className={className} backdrop={backdrop} keyboard={keyboard}>
    <ModalHeader toggle={toggle}>Enter Your Info For Order</ModalHeader>
    <ModalBody>
     <FormOreder />
    </ModalBody>
    <ModalFooter>
     <Button color="primary" onClick={toggle}>Order Now</Button>{' '}
     <Button color="secondary" onClick={toggle}>Cancel</Button>
    </ModalFooter>
   </Modal>
  </div>
 );
}

export default ModalOrder;