import React from 'react';


const GrouupBox = () => {
    
    //status 
    const [status1, setStatus1] = React.useState(false);
    const [status2, setStatus2] = React.useState(true);
    const [status3, setStatus3] = React.useState(true);

        return(
            <div style={{display:'flex', justifyContent:'space-between'}}>
                {!status1 && (
                <div style={{backgroundColor: status3 ? '#606060':'none',width:'40vh',display:'flex', justifyContent:'space-between'}}>
                    <div style={{color:'#EFEFEF', fontSize:'20px', marginLeft:35, marginTop:15}}>
                        GROUP1
                    </div>
                    {status2 && (
                <div style={{color:'#EFEFEF', fontSize:'20px', marginLeft:35, marginTop:15}}>
                    unread
                </div>
                
                )
                }
                </div>

                )
                }
               

            </div>
            
            
        )
    
    
}


export default GrouupBox;