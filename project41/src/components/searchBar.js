import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
    const [ term, setTerm ] = useState('') 
    

    const onFormSubmit = e => {
        e.preventDefault()
        onSearch(term)
    }

        return (
            <div className="search-bar ui segment">
                <form 
                className="ui form" 
                action=""
                onSubmit={(e) => onFormSubmit(e) }
                //onFormSubmit(e) }
                >
                    <div className="field">
                        <label> Video Search - Powered by YouTube </label>
                        <input 
                        onChange={(e) => setTerm(e.target.value)} 
                        type="text"
                        value={ term }
                        />
                        <i className="search icon"></i>
                    </div>
                </form>
                
            </div>
        )
    
}

export default SearchBar


import * as redux from "https://cdn.skypack.dev/redux@4.1.0";
console.clear()

// people dropping off the form (action creators)
// const createPolicy = (name, amount) => {
//   //action
//   return {
//     type: 'CREATE_POLICY',
//     payload: {
//       name: name,
//       amount: amount
//     }
//   }
// }

// const deletePolicy = (name) => {
//   return {
//     type: 'DELETE_POLICY',
//     payload: {
//       name: name
//     }
//   } 
// }

// const createClaim = (name, amountOfClaim) => {
//   return {
//     type: 'CREATE_CLAIM',
//     payload: {
//       name: name,
//       amount: amountOfClaim
//     }
//   }
// }

// Reducers (Departments)

//Claim Reducer
// const claimsHistory = (oldListOfClaims = [], action) => {
//   if ( action.type === 'CREATE_CLAIM' ){
//     return (
//       [...oldListOfClaims, action.payload]
//     )
//   }
//   return oldListOfClaims
// }

//Policy Reducer
// const policies = (listOfPolicies = [], action) => {  
//   if (action.type === 'CREATE_POLICY'){
//       return [...listOPolicies, action.payload.name]
//     }else if (action.type === 'DELETE_POLICY'){ 
//       return  listOfPolicies.filter(name => name !== action.payload.name)   
//     }
//   return listOfPolicies
//  }
 
//Accounting Reducer
// const accounting = (bagOfMoney = 1000, action) => {
//   if (action.type === 'CREATE_CLAIM') {
//     return bagOfMoney - action.payload.amount
//   }
//   if (action.type === 'CREATE_POLICY'){
//     return bagOfMoney + action.payload.amount
//   }
//   return bagOfMoney
// }

// Dispatcher

console.log(redux)

