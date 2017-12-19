import React from 'react';

class Article extends React.Component {
   render() {
        const {_id, title, body, created_by, belongs_to, votes} = this.props.articleObj;

       return (
         <div className="Article">

           <p>{title}</p>
           <p>{body}</p>
           <p>{created_by}</p>
           <p>{belongs_to}</p>
           <p>{votes}</p>
           <p>{_id}</p>
           
         </div>
       );  
   }
}

export default Article;