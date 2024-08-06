// function ParseVideoDuration(duration){
//   console.log(duration);
//   return(

//   <>
//   </>)
// }

// export default ParseVideoDuration;

// parseVideoDuration.js
export const ParseVideoDuration = (duration) => {
  
  const durationParts = duration
  .replace("PT"," ")
  .replace("H",":")
  .replace("M",":")
  .replace("S",":")
  .split(":")
  // console.log(durationParts)

  if(durationParts.length===3){

    return `${durationParts[0]}:${parseInt(durationParts[1])<10 ? `0${durationParts[1]}`:durationParts[1]}
  `;
  }
  if(durationParts.length===1){

    return `0:${durationParts[0]}:${parseInt(durationParts[0])<10 ? `0${durationParts[0]}`:durationParts[0]}
  `;
  }



  return "";

  
}
