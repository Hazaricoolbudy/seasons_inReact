import React from 'react'
import '../../src/seasonsDisplay.css'


const seasonConfig={summer:{
  text:'Let\'s hit the beach',
  iconName:'sun'
},
winter:{
  text:'Burr, it is chilly',
  iconName:'snowflake'
}
}


const getSeasons =(lat,month)=>{
  if(month>2 && month<9){
     return lat>0? 'summer':'winter';
  
  }
  else{
   return lat> 0 ?'winter':'summer';   
  }

}

const Seasons = (props) => {
 const seasons=getSeasons(props.lat, new Date().getMonth());
 const {text, iconName}=seasonConfig[seasons]
 console.log(seasons);
  return (
    <div className={`seasons-display ${seasons}`}>
    <i className={`${iconName} icon massive icon-left`}></i>
    <h1>{text}</h1>
    <i className={`${iconName} icon massive icon-right`}></i>

    
    </div>
  )
}

export default Seasons
