import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './ProductPage.module.css';
import prod from '../../assets/Images/ts.jpg'
import Modal from '../../Component/Modal/Modal';
import { SaveTitle } from '../../Store/Product/ProductCreator';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';




const ContactPage = () => {

    const protitle = useSelector(state => state.ProductReducer.title);
    const [show,SetShow] = useState(false);
    const dispatch = useDispatch();

    const ModalOpne = (e) => {
        e.preventDefault();
        SetShow(true)
    }
    const ModalClose = (e) => {
        e.preventDefault();
        SetShow(false)
    }
    const sendTitle = (e,title) => {
        e.preventDefault();
        dispatch(SaveTitle(title));
        SetShow(false)
    }
    const [position, updatePosition] = useState('');

    
    const dragHndeler  = (result) => {
        console.log(result);
    }



    return (
        <DragDropContext
            OnDragEnd={dragHndeler }
        >
            <Modal shown={show} clicked={ModalClose} titleReq={sendTitle}/>
            <h2 className={style.colorHeading}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={style.productWrapper}>
                                <div className={style.imageWrapper}>
                                    <img src={prod} alt=""/>
                                    <Droppable droppableId="shoikot" >                               
                                        {provided => (
                                            <div className={style.title} {...provided.droppableProps} ref={provided.innerRef}>
                                                <Draggable key="shoikot" draggableId="shoikot" index={3}>
                                                    {(provided) => (
                                                        <h6 ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}> {protitle} </h6>
                                                    )}
                                                </Draggable>
                                                {provided.placeholder}
                                                
                                            </div>
                                        )}    
                                    </Droppable>
                                </div>
                                <div className="editTitle">
                                    <button className="LinkBtn" onClick={(e)=>ModalOpne(e)}>Add Title</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </h2>
        </DragDropContext>
    );
};

export default ContactPage;


// App -> Task
// Task -> Item 
// Item 