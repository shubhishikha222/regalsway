import React from 'react';
import first from '../image/first.png';
import second from '../image/second.png';
import third from '../image/third.png';
import fourth from '../image/fourth.png';


const Algo = () => {
    return (
    <>
    <div className="algo">
        <div className="algohead">
            <h1>ALGO SERVICES</h1>
        </div>
        <div className="algocontent">
        <div>
            <img src={first}/>
            <h3>API BRIDGE</h3>
            <p>API Bridge is a set of programming interface, pincode and Places is first programming<br></br> interface right now. APIBridge permits you to algo trade with various stages like<br></br> Amibroker, MT4, TradingView, Python, Excel, NinjaTrader and so on.

</p>
        </div>
        <div>
            <img src={second}/>
            <h3>ALGO TRADING</h3>
            <p>Algo Trading is a type of automated trading that utilizes PC programs to examine market<br></br> data dependent on pre-characterized parameters. It places trades on the terminal and<br></br> submits to exchange directly thereby reducing human or manual invention.

</p>
        </div>
        </div>
        <div className="algocontent1">
        <div>
            <img src={third}/>
            <h3>AUTO BUY & SELL SIGNALS</h3>
            <p>You could know precisely when to purchase, hold or sell stocks or commodities. Auto<br></br> Buy Sell signal programming software is an interesting and extraordinary tool for the<br></br> brokers, investors and examiners in Financial markets.

</p>
        </div>
        <div>
            <img src={fourth}/>
            <h3>STRATEGY DEVELOPMENT</h3>
            <p>MT4 and MT5 indicators, master advisors, calculators, and even money management<br></br> formulas are the main Trading tools. Most of these tools are special indicators. These<br></br> tools have one main objective, to assist brokers with estimating future value changes.<br></br> We at Richway with a group of expert MT4/MT5 software engineers to build up your<br></br> trading strategy</p>
        </div>
        </div>
        
    </div>

    
    </>
    );
}
export default Algo;