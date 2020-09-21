const oneSocket=io();

// Parse QueryString coming from login page
let parsed= new URLSearchParams(location.search);
let moniker=parsed.get('moniker');
if(!moniker) moniker='Anonymous'
const room=parsed.get('room');
document.querySelector('.moniker').value=moniker;
const payload={moniker, room}
oneSocket.emit('admin_message',payload);


//FUNCTION TO SEND CHAT MESSAGE
const send_function=(e)=>{
let message=document.querySelector('.message').value;
    if(!moniker || !message) return;
 oneSocket.emit('chat_message',{ moniker,message})
 document.querySelector('.message').value='';
 document.querySelector('.message').focus();

 }

 //FUNCTION TO EMIT ISTYPING MESSAGE
 const typing_function=(e)=>{
    const moniker=document.querySelector('.moniker').value;
    oneSocket.emit('is_typing', moniker);        
}


oneSocket.on('admin_message', (body)=>{
    document.querySelector('.typing_message').innerHTML=''
    document.querySelector('.chat_window').innerHTML+=`<p style='background-color:white; margin:3px 10%; color:black' class='chat_text'><span class='name'>Admin: </span> ${body}</p>`
       })
   

oneSocket.on('chat_message', (body)=>{
const date=new Date;
const formatted_date=date.toTimeString().substring(0,5)
 document.querySelector('.typing_message').innerHTML=''
 document.querySelector('.chat_window').innerHTML+=`<div style='font-size:20px; padding:2px 5px; margin-bottom:5px; font-family:Roboto; background-color:azure' class='chat_text'><span class='name'><div style='font-size:15px'>${body.moniker}: ${formatted_date}<div></span> <div style='color:black; margin-top:2px'>${body.message}</div></div>`
})

oneSocket.on('show_typing_message', (body)=>{
    document.querySelector('.typing_message').innerHTML=`${body} is typing...`;
})