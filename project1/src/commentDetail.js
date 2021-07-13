import React from 'react'


const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
               <img src={ props.avatar } alt="Avatar" />
            </a>
               
            <div className="content">
                <div className="nameTime">
                    <a href="/" className="author">
                        { props.name }
                    </a>
                    <div className="metadata">
                        <span className="date">{ props.timeDate }</span>
                    </div>
                </div>
                
                <div className="text">
                    { props.comment }
                </div>
            </div>
        </div>
    )
}

export default CommentDetail

