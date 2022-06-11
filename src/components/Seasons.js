import React from 'react'


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
 const text=seasons==='winter'?'Burr , it is chilly':'Lets hit the beach'
 console.log(seasons);
  return (
    <div>
    <h1>{text}</h1>
    </div>
  )
}

export default Seasons
