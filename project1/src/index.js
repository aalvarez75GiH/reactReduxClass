import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './commentDetail'
import faker from 'faker'
import ApprovalCard from './approvalCard'


// import App from './components/app'
const App = () => {

    return (
        <React.Fragment>
            <div className="ui container comments">
            <ApprovalCard>
                "Are you sure you wanna close the App??"    
            </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail
                     name = "Sam" 
                     comment="Great Blog Posts..." 
                     timeDate="Today at 12:00PM" 
                     avatar={ faker.image.avatar() }   
                    />
                 </ApprovalCard>
            
                <ApprovalCard>
                    <CommentDetail 
                     name = "Sam" 
                     comment="This is Nice..." 
                     timeDate="Today at 08:00PM" 
                     avatar={ faker.image.avatar() }  
                     />
                
                </ApprovalCard>  
                 <ApprovalCard>
                    <CommentDetail 
                    name = "Sam" 
                    comment="i loved it, it is super..." 
                    timeDate="Today at 09:00PM" 
                    avatar={ faker.image.avatar() }  
                    />
                 </ApprovalCard>
                 
            </div>

        </React.Fragment>
     
) 
    
}

const container = document.getElementById('root')
ReactDOM.render(<App/>,container)

