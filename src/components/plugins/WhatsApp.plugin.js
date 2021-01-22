import React from 'react';
import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css'
const WhatsAppPluginWidget = () => {
    return <WhatsAppWidget 
    textReplyTime='Typically replies within an hour'
    message='Hello! 👋🏼 What can I do for you?'
    companyName='George Ouma'
    phoneNumber='+254719751690' />
}


export default WhatsAppPluginWidget;