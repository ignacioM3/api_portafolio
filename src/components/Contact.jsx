import React from 'react'
import emailjs from '@emailjs/browser';
import useForm from '../hooks/useForm';
import Swal from 'sweetalert2'

export const Contact = () => {

    const [{user_name, user_email, user_message}, handleInputChange, reset] = useForm({
        user_name: "",
        user_email: "",
        user_message: ""
    })




    const handleSendEmail = (e)=>{
        e.preventDefault()


            console.log("mensaje enviado")
            emailjs.sendForm('service_jeykd5l', 'template_nyx5boi', e.target, 'iIVzQ6op2Oc7zNmSx')
           .then(response => {
               console.log(response)
               Swal.fire('Mensaje enviado con exito')
               reset()
           })
           
           .catch(error => console.log(error))  
        

    }

    


    
    return (
        <div className='contact-container' id='contacto'>
            <div className="contact-headings">
                <h2>Contacto</h2>
                <div className='divider'></div>
            </div>
            <div className="container-form">
                <div className="form-control">
                    <h4>Send a message...</h4>
                    <form className='form' onSubmit={handleSendEmail} >
                        <input type="text" placeholder='Nombre' id='nameForm' required name='user_name' onChange={handleInputChange} value={user_name}/>
                       
                        <input type="email" placeholder='Email' id='emailForm' required name='user_email' onChange={handleInputChange} value={user_email} />

                        <textarea placeholder='Escribe tu mensaje aquí' id='textForm' required name='user_message'onChange={handleInputChange} value={user_message} ></textarea>
                        <button className='btn-submit'>Enviar Mensaje</button>
                    </form>
                </div>
                <div className="info-control">
                    <h4>ignaciomarquez.developer@gmail.com  <i class="fa-solid fa-envelope"></i></h4>
                    
                    <a href="https://www.linkedin.com/in/marquez-ignacio"target="__blank"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/ignacioM3" target="__blank">  <i class="fa-brands fa-github"></i></a>
                </div> 
            </div>
        </div>
    )
}
