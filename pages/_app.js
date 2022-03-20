import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Footer from "../src/component/Footer";
import Top from "../src/component/Top";
import React, { useRef } from 'react';
import SockJsClient from 'react-stomp';

function MyApp({ Component, pageProps }) {
  const $websocket = useRef(null);

  const handleMsg = msg => {
    console.log(msg);
  };

  const handleClickSendTo = () => {
    $websocket.current.sendMessage('/sendTo');
  };

  const handleClickSendTemplate = () => {
    $websocket.current.sendMessage('/Template');
  }

  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
      <SockJsClient
        url="http://localhost:8080/test"
        topics={['/topics/sendTo', '/topics/template', '/topics/api']}
        onMessage={msg => {
          console.log(msg);
        }}
        ref={$websocket}
      />
      <button onClick={handleClickSendTo}>SendTo</button>
      <button onClick={handleClickSendTemplate}>SendTemplate</button>
      {/* <Top />
      <Component {...pageProps} />
      <Footer /> */}
    </div>
  );
}

export default MyApp;


