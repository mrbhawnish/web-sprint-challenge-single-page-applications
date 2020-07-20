import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import * as yup from "yup";
import { Redirect } from "react-router-dom";

const formSchema = yup.object().shape({
    name: yup.string()
   .min(3, 'Too Short!')
   .max(50, 'Too Long!')
   .required('Required')
  })

const defaultState = {
    name:"",
    size:"Small",
    toppings: {
       Pepperoni: false,
       Sausage: false,
       BellPepper: false,
       Mushrooms: false
    },
    instructions: "",
  };

  const errorsDefaultState = {
    name:""
  };


function Form() {
    

  const [isDisabled, setIsDisabled] = useState(true)
  const [formState, setFormState] = useState(defaultState);
  const [errors, setErrorsState] = useState(errorsDefaultState);

  
  useEffect(() => {
    formSchema.isValid(formState).then(valid => setIsDisabled(!valid))


  }, [formState, formSchema])
    
   
   const validation = (e) => {
    yup.reach(formSchema, e.target.name)
    .validate(e.target.value)
    .then(valid => {
       setErrorsState({
           ...errors, 
           [e.target.name]: ""
    })
  })
      .catch(err => {
        setErrorsState({
            ...errors, 
            [e.target.name]: err.errors[0]
     })
    })

   }


  const handleInputChange = (e) => {
    e.persist();

    if(e.target.type === "checkbox"){
        setFormState({
            ...formState, 
              toppings: {
            ...formState.toppings,   
            [e.target.name]: e.target.checked
       } 
     })
    } else {
        setFormState({ 
          ...formState,
          [e.target.name]: e.target.value
        })
    }
   if(e.target.name === "name"){
       validation(e)
   }
  }
   
  const handleSubmit = (e) => {
   e.preventDefault();

   axios
   .post("https://reqres.in/api/users", formState)
   .then((res) => {
    console.log(res.data);
   })
   .catch(err => {
     console.log(err); 
   });

  }

    return(
    <FormWrapper>
    <div className="myDiv">
     
    <form onSubmit={handleSubmit}>
     <label htmlFor="name">
         Name:     
         <input type="text" name="name" onChange={handleInputChange} data-cy="name" value={formState.name}></input>
         </label>
         {errors.name.length > 0 ? <p style={{color: 'red'}}>The name is too short. Please add more.</p> : null}
     <br />
     <label>
    Select Size:
       <select name="size" onChange={handleInputChange}>
           <option value="Small">Small</option>
           <option value="Medium">Medium</option>
           <option value="Grande">Grande</option>
          
       </select>
     </label>

     <label>
         Toppings:
     </label>
     <label>
         Pepperoni
         <input name="Pepperoni" type="checkbox" value={formState.toppings.Pepperoni} data-cy="Pepperoni" onChange={handleInputChange}></input>
     </label>

     <label>
         Sausage
         <input name="Sausage" type="checkbox" value={formState.toppings.Sausage} data-cy="Sausage" onChange={handleInputChange}></input>
     </label>

     <label>
        Bell Pepper
         <input name="BellPepper" type="checkbox" value={formState.toppings.BellPepper} data-cy="BellPepper" onChange={handleInputChange}></input>
     </label>

     <label>
         Mushrooms
         <input name="Mushrooms" type="checkbox" value={formState.toppings.Mushrooms} data-cy="Mushrooms" onChange={handleInputChange}></input>
     </label>

     <br />
     <label htmlFor="instructions">

         Special Instructions:

         <textarea type="text" name="instructions" value={formState.instructions}  data-cy="instructions" onChange={handleInputChange} ></textarea>
     </label>
    
     <br />
     <button type="submit" disabled={isDisabled} data-cy="submit">Order Now</button>

    </form>
     
    </div>
    </FormWrapper>
    )
};

const FormWrapper = styled.section`
width: 100%;
height: 800px;
display: flex;
align-items: center;
justify-content: center;
background: darkgoldenrod;

  .myDiv{
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 60%;
    height: 60%;
    box-sizing: border-box;
  }

  form{
    width: 600px;
    height: 600px;
    border: 8px solid #d4af37;
    border-radius: 4%;
    background: lightgray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;

     label{
       font-size: 22px;
       margin-top: 2px;
       margin-bottom: 2px;
      }

      input[type=text], select, textarea{
        width: 50%;
        padding: 8px 0 9px 0;  
        margin: 4px 8px 0 8px;
        display: inline-block;
        border-radius: 4px;
        box-sizing: border-box;
      }

     button{
     padding: 20px;
     font-size: 20px;
     cursor: pointer;

     :hover{
         background: gray;
         color: lightgray;
     }
    
    }
   
}

`;
export default Form;




