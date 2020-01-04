import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Contact from "./Contact";


class Globalmap extends React.Component {
  constructor(props) {
    super(props);
    this.changeCircle = this.changeCircle.bind(this);
    this.changeCircleNormal = this.changeCircleNormal.bind(this);
  }
    changeCircle(e) {
      if(e.target.id === "Ellipse_636") {
          e.currentTarget.setAttribute('cy', '180');
          e.currentTarget.setAttribute('r', '160');
          e.currentTarget.setAttribute('fill', '#fff'); 
          document.getElementById("Path_3").setAttribute("fill", "#194D99");      
          document.getElementById("Path_4").setAttribute("fill", "rgb(109, 205, 247)");     
          document.getElementById("Path_5").setAttribute("fill", "rgb(109, 205, 247)");     
          document.getElementById("Path_6").setAttribute("fill", "rgb(109, 205, 247)");     
          document.getElementById("Path_7").setAttribute("fill", "rgb(109, 205, 247)");  
      } else if (e.target.id === "Ellipse_638") {
          e.currentTarget.setAttribute('cy', '150');
          e.currentTarget.setAttribute('r', '180');
          e.currentTarget.setAttribute('fill', '#fff');          
          document.getElementById("Path_3-2").setAttribute("fill", "#194D99");      
          document.getElementById("Path_4-2").setAttribute("fill", "rgb(109, 205, 247)");     
          document.getElementById("Path_5-2").setAttribute("fill", "rgb(109, 205, 247)");     
          document.getElementById("Path_6-2").setAttribute("fill", "rgb(109, 205, 247)");     
          document.getElementById("Path_7-2").setAttribute("fill", "rgb(109, 205, 247)");   
      } else if(e.target.id === "Ellipse_640") {
        e.currentTarget.setAttribute('cy', '150');
        e.currentTarget.setAttribute('r', '150');
        e.currentTarget.setAttribute('fill', '#fff');
        document.getElementById("Path_31-4").setAttribute("fill", "#194D99");      
        document.getElementById("Path_41-4").setAttribute("fill", "rgb(109, 205, 247)");     
        document.getElementById("Path_51-4").setAttribute("fill", "rgb(109, 205, 247)");     
        document.getElementById("Path_61-4").setAttribute("fill", "rgb(109, 205, 247)");     
        document.getElementById("Path_71-4").setAttribute("fill", "rgb(109, 205, 247)");  
      } else if(e.target.id === "Path_4680") {
        e.currentTarget.setAttribute('cy', '100');
        e.currentTarget.setAttribute('r', '100');
        e.currentTarget.setAttribute('fill', '#fff');
        document.getElementById("Path_3-4").setAttribute("fill", "#194D99");      
        document.getElementById("Path_4-4").setAttribute("fill", "rgb(109, 205, 247)");     
        document.getElementById("Path_5-4").setAttribute("fill", "rgb(109, 205, 247)");     
        document.getElementById("Path_6-4").setAttribute("fill", "rgb(109, 205, 247)");     
        document.getElementById("Path_7-4").setAttribute("fill", "rgb(109, 205, 247)"); 
      }
      else if(e.target.id === "Ellipse_505") {
        e.currentTarget.setAttribute('cy', '100');
        e.currentTarget.setAttribute('r', '100');
        e.currentTarget.setAttribute('fill', '#fff');
        document.getElementById("Path_32-4").setAttribute("fill", "#194D99");      
        document.getElementById("Path_42-4").setAttribute("fill", "rgb(109, 205, 247)");     
        document.getElementById("Path_52-4").setAttribute("fill", "rgb(109, 205, 247)");     
        document.getElementById("Path_62-4").setAttribute("fill", "rgb(109, 205, 247)");     
        document.getElementById("Path_72-4").setAttribute("fill", "rgb(109, 205, 247)"); 
      }      
    }

    changeCircleNormal(e) {
      if(e.target.id === "Ellipse_636" || e.target.id === "Group_378") {
        e.currentTarget.setAttribute('cy', '65');
        e.currentTarget.setAttribute('r', '65');
        e.currentTarget.setAttribute('fill', '#06ff59');
        document.getElementById("Path_3").setAttribute("fill", "#fff");
        document.getElementById("Path_4").setAttribute("fill", "#fff");     
        document.getElementById("Path_5").setAttribute("fill", "#fff");     
        document.getElementById("Path_6").setAttribute("fill", "#fff");     
        document.getElementById("Path_7").setAttribute("fill", "#fff"); 
      } else if (e.target.id === "Ellipse_638") {
          e.currentTarget.setAttribute('cy', '54.5');
          e.currentTarget.setAttribute('r', '54.5');
          e.currentTarget.setAttribute('fill', '#06ff59');
          document.getElementById("Path_3-2").setAttribute("fill", "#fff");      
          document.getElementById("Path_4-2").setAttribute("fill", "#fff");     
          document.getElementById("Path_5-2").setAttribute("fill", "#fff");     
          document.getElementById("Path_6-2").setAttribute("fill", "#fff");     
          document.getElementById("Path_7-2").setAttribute("fill", "#fff");  
      } else if(e.target.id === "Ellipse_640") {
        e.currentTarget.setAttribute('cy', '22');
        e.currentTarget.setAttribute('r', '22');
        e.currentTarget.setAttribute('fill', '#06ff59');
        document.getElementById("Path_31-4").setAttribute("fill", "#fff");      
        document.getElementById("Path_41-4").setAttribute("fill", "#fff");     
        document.getElementById("Path_51-4").setAttribute("fill", "#fff");     
        document.getElementById("Path_61-4").setAttribute("fill", "#fff");     
        document.getElementById("Path_71-4").setAttribute("fill", "#fff");  
      } else if(e.target.id === "Path_4680") {
        e.currentTarget.setAttribute('cy', '22');
        e.currentTarget.setAttribute('r', '22');
        e.currentTarget.setAttribute('fill', '#06ff59');
        document.getElementById("Path_3-4").setAttribute("fill", "#fff");      
        document.getElementById("Path_4-4").setAttribute("fill", "#fff");     
        document.getElementById("Path_5-4").setAttribute("fill", "#fff");     
        document.getElementById("Path_6-4").setAttribute("fill", "#fff");     
        document.getElementById("Path_7-4").setAttribute("fill", "#fff"); 
      }
      else if(e.target.id === "Ellipse_505") {
        e.currentTarget.setAttribute('cy', '40');
        e.currentTarget.setAttribute('r', '40');
        e.currentTarget.setAttribute('fill', '#06ff59');
        document.getElementById("Path_32-4").setAttribute("fill", "#fff");      
        document.getElementById("Path_42-4").setAttribute("fill", "#fff");     
        document.getElementById("Path_52-4").setAttribute("fill", "#fff");     
        document.getElementById("Path_62-4").setAttribute("fill", "#fff");     
        document.getElementById("Path_72-4").setAttribute("fill", "#fff"); 
      }
    }

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1787 1053">
  <g id="Group_483" data-name="Group 483" transform="translate(-73 -1824)">
    <circle id="Ellipse_350" data-name="Ellipse 350" cx="12.5" cy="12.5" r="12.5" transform="translate(1835 2039)" fill="#194d99"/>
    <circle id="Ellipse_351" data-name="Ellipse 351" cx="33.5" cy="33.5" r="33.5" transform="translate(1750 1996)" fill="#194d99"/>
    <circle id="Ellipse_352" data-name="Ellipse 352" cx="14.5" cy="14.5" r="14.5" transform="translate(1720 2044)" fill="#194d99"/>
    <circle id="Ellipse_353" data-name="Ellipse 353" cx="9" cy="9" r="9" transform="translate(1722 2005)" fill="#194d99"/>
    <circle id="Ellipse_354" data-name="Ellipse 354" cx="45.5" cy="45.5" r="45.5" transform="translate(1626 1994)" fill="#194d99"/>
    <circle id="Ellipse_355" data-name="Ellipse 355" cx="34" cy="34" r="34" transform="translate(1547 1970)" fill="#194d99"/>
    <circle id="Ellipse_356" data-name="Ellipse 356" cx="22.5" cy="22.5" r="22.5" transform="translate(1581 2076)" fill="#194d99"/>
    <circle id="Ellipse_365" data-name="Ellipse 365" cx="7.5" cy="7.5" r="7.5" transform="translate(1625 2159)" fill="#194d99"/>
    <circle id="Ellipse_366" data-name="Ellipse 366" cx="49.5" cy="49.5" r="49.5" transform="translate(1506 2132)" fill="#194d99"/>
    <circle id="Ellipse_404" data-name="Ellipse 404" cx="40" cy="10" r="10" transform="translate(1639 2801)" fill="#194d99"/>
    <circle id="Ellipse_405" data-name="Ellipse 405" cx="30.5" cy="30.5" r="30.5" transform="translate(1610 2731)" fill="#194d99"/>
    <circle id="Ellipse_406" data-name="Ellipse 406" cx="26" cy="26" r="26" transform="translate(1589 2645)" fill="#194d99"/>
    <circle id="Ellipse_408" data-name="Ellipse 408" cx="51" cy="51" r="51" transform="translate(1470 2663)" fill="#194d99"/>
    <circle id="Ellipse_409" data-name="Ellipse 409" cx="6.5" cy="6.5" r="6.5" transform="translate(1519 2629)" fill="#194d99"/>
    <circle id="Ellipse_412" data-name="Ellipse 412" cx="15" cy="15" r="15" transform="translate(1487 2383)" fill="#194d99"/>
    <circle id="Ellipse_410" data-name="Ellipse 410" cx="6.5" cy="6.5" r="6.5" transform="translate(1648 2657)" fill="#194d99"/>
    <circle id="Ellipse_367" data-name="Ellipse 367" cx="12.5" cy="12.5" r="12.5" transform="translate(1550 2297)" fill="#194d99"/>
    <circle id="Ellipse_368" data-name="Ellipse 368" cx="19.5" cy="19.5" r="19.5" transform="translate(1463 2201)" fill="#194d99"/>
    <circle id="Ellipse_369" data-name="Ellipse 369" cx="19.5" cy="19.5" r="19.5" transform="translate(1408 2085)" fill="#194d99"/>
    <circle id="Ellipse_370" data-name="Ellipse 370" cx="7.5" cy="7.5" r="7.5" transform="translate(1447 2065)" fill="#194d99"/>
    <circle id="Ellipse_371" data-name="Ellipse 371" cx="22.5" cy="22.5" r="22.5" transform="translate(1461 1974)" fill="#194d99"/>
    <circle id="Ellipse_416" data-name="Ellipse 416" cx="6.5" cy="6.5" r="6.5" transform="translate(1206 1942)" fill="#194d99"/>
    <circle id="Ellipse_417" data-name="Ellipse 417" cx="10.5" cy="10.5" r="10.5" transform="translate(1180 1946)" fill="#194d99"/>
    <circle id="Ellipse_418" data-name="Ellipse 418" cx="14.5" cy="14.5" r="14.5" transform="translate(1233 2027)" fill="#194d99"/>
    <circle id="Ellipse_419" data-name="Ellipse 419" cx="25.5" cy="25.5" r="25.5" transform="translate(1264 2041)" fill="#194d99"/>
    <circle id="Ellipse_420" data-name="Ellipse 420" cx="14" cy="14" r="14" transform="translate(1014 1993)" fill="#194d99"/>
    <circle id="Ellipse_443" data-name="Ellipse 443" cx="32" cy="32" r="32" transform="translate(1029 2022)" fill="#194d99"/>
    <circle id="Ellipse_444" data-name="Ellipse 444" cx="49" cy="49" r="49" transform="translate(1126 2015)" fill="#194d99"/>
    <circle id="Ellipse_445" data-name="Ellipse 445" cx="32" cy="32" r="32" transform="translate(951 2149)" fill="#194d99"/>
    <circle id="Ellipse_446" data-name="Ellipse 446" cx="66" cy="66" r="66" transform="translate(822 2359)" fill="#194d99"/>
    <circle id="Ellipse_493" data-name="Ellipse 493" cx="17" cy="17" r="17" transform="translate(521 2818)" fill="#194d99"/>
    <circle id="Ellipse_494" data-name="Ellipse 494" cx="17" cy="17" r="17" transform="translate(614 2622)" fill="#194d99"/>
    <circle id="Ellipse_496" data-name="Ellipse 496" cx="6.5" cy="6.5" r="6.5" transform="translate(642 2700)" fill="#194d99"/>
    <circle id="Ellipse_497" data-name="Ellipse 497" cx="6.5" cy="6.5" r="6.5" transform="translate(559 2641)" fill="#194d99"/>
    <circle id="Ellipse_498" data-name="Ellipse 498" cx="40.5" cy="40.5" r="40.5" transform="translate(644 2504)" fill="#194d99"/>
    <circle id="Ellipse_499" data-name="Ellipse 499" cx="25.5" cy="25.5" r="25.5" transform="translate(558 2453)" fill="#194d99"/>
    <circle id="Ellipse_519" data-name="Ellipse 519" cx="13" cy="13" r="13" transform="translate(528 2443)" fill="#194d99"/>
    <circle id="Ellipse_520" data-name="Ellipse 520" cx="10.5" cy="10.5" r="10.5" transform="translate(435 2404)" fill="#6dcdf7"/>
    <circle id="Ellipse_521" data-name="Ellipse 521" cx="8" cy="8" r="8" transform="translate(547 2390)" fill="#194d99"/>
    <circle id="Ellipse_522" data-name="Ellipse 522" cx="8" cy="8" r="8" transform="translate(484 2444)" fill="#194d99"/>
    <circle id="Ellipse_523" data-name="Ellipse 523" cx="14" cy="14" r="14" transform="translate(464 2415)" fill="#194d99"/>
    <circle id="Ellipse_500" data-name="Ellipse 500" cx="33.5" cy="33.5" r="33.5" transform="translate(342 2305)" fill="#194d99"/>
    <circle id="Ellipse_501" data-name="Ellipse 501" cx="18" cy="18" r="18" transform="translate(393 2381)" fill="#194d99"/>
    <circle id="Ellipse_502" data-name="Ellipse 502" cx="23" cy="23" r="23" transform="translate(511 2212)" fill="#6dcdf7"/>
    <circle id="Ellipse_503" data-name="Ellipse 503" cx="23" cy="23" r="23" transform="translate(430 2124)" fill="#194d99"/>
    <circle id="Ellipse_504" data-name="Ellipse 504" cx="23" cy="23" r="23" transform="translate(500 2159)" fill="#194d99"/>
    <circle id="Ellipse_547" data-name="Ellipse 547" cx="6.5" cy="6.5" r="6.5" transform="translate(560 2207)" fill="#194d99"/>
    <defs>
      <filter id="Ellipse_505" x="-175" y="-50" width="500" height="500" filterUnits="userSpaceOnUse">
        <feOffset input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="20" result="blur"/>
        <feFlood floodColor="#06f455"/>
        <feComposite operator="in" in2="blur"/>
        <feComposite in="SourceGraphic"/>
      </filter>
    </defs>
    <g id="Component_19_1" data-name="Component 19 – 1" transform="translate(547 2107)" filter="url(#Ellipse_505)">
    <circle id="Ellipse_505" data-name="Ellipse 505" cx="40" cy="40" r="40" fill="#06ff59"
      style={{transition: "ease-in 0.2s"}}
        onMouseOver={e =>this.changeCircle(e)}
        onMouseOut={e =>this.changeCircleNormal(e)}
      />
      <text id="_United_Kingdom_EC1V_2NX_2" 
      data-name=" United Kingdom Cloobot TechLabs UK Kemp House, 160 City Road, London, United Kingdom, EC1V 2NX" 
      transform="translate(12 13)" 
      fill="#212121" 
      fontSize="20" 
      fontFamily="Lato-Regular, Lato" 
      letterSpacing="0.055em"
      textAnchor="middle" y="40">
      <tspan x="20" dy="25">Dubai</tspan>
      <tspan x="20" dy="25">Cloobot TechLabs</tspan>
      </text>
      <g id="Group_481" data-name="Group 481" transform="translate(-1234.413 -236.5)">
        <g id="Group_373-4" data-name="Group 373" transform="translate(1252.894 262.754)">
          <g id="Group_11-4" data-name="Group 11">
            <g id="Group_10-4" data-name="Group 10">
              <path id="Path_42-4" data-name="Path 4" d="M498.334,38.054h0a.228.228,0,1,0-.244-.209A.228.228,0,0,0,498.335,38.054Z" transform="translate(-498.09 -37.599)" fill="#fff"/>
            </g>
          </g>
        </g>
        <g id="Group_374-4" data-name="Group 374" transform="translate(1253.637 263.703)">
          <g id="Group_14-4" data-name="Group 14">
            <g id="Group_13-4" data-name="Group 13">
              <path id="Path_52-4" data-name="Path 5" d="M499.938,40.245h0a.456.456,0,1,0-.49-.419A.456.456,0,0,0,499.94,40.245Z" transform="translate(-499.448 -39.335)" fill="#fff"/>
            </g>
          </g>
        </g>
        <g id="Group_375-4" data-name="Group 375" transform="translate(1254.98 264.767)">
          <g id="Group_17-4" data-name="Group 17">
            <g id="Group_16-4" data-name="Group 16">
              <path id="Path_62-4" data-name="Path 6" d="M502.641,42.647h0a.683.683,0,1,0-.734-.627A.684.684,0,0,0,502.643,42.647Z" transform="translate(-501.906 -41.283)" fill="#fff"/>
            </g>
          </g>
        </g>
        <g id="Group_376-4" data-name="Group 376" transform="translate(1257.203 265.45)">
          <g id="Group_20-4" data-name="Group 20">
            <g id="Group_19-4" data-name="Group 19">
              <path id="Path_72-4" data-name="Path 7" d="M506.954,44.352h0a.911.911,0,1,0-.979-.837A.911.911,0,0,0,506.956,44.352Z" transform="translate(-505.975 -42.533)" fill="#fff"/>
            </g>
          </g>
        </g>
        <g id="Group_377-4" data-name="Group 377" transform="translate(1240.833 251)">
          <g id="Group_8-4" data-name="Group 8">
            <g id="Group_7-4" data-name="Group 7">
              <path id="Path_32-4" data-name="Path 3" d="M539.461,34.48c0,.22,0,.443-.009.665l-.041.659-.021.329-.011.165-.02.163-.078.65c-.048.425-.128.885-.217,1.331a18.035,18.035,0,0,1-1.883,5.067,19.167,19.167,0,0,1-3.188,4.269,20.167,20.167,0,0,1-4.2,3.25,18.216,18.216,0,0,1-2.4,1.171,18.636,18.636,0,0,1-2.563.816,17.343,17.343,0,0,1-2.64.425l-.028,0h-.009a2.736,2.736,0,0,1-.491-5.449,12.848,12.848,0,0,0,1.828-.344,14.079,14.079,0,0,0,6.432-3.846,13.382,13.382,0,0,0,3.524-6.516c.058-.3.111-.59.145-.924l.062-.483.015-.121.007-.122.016-.24.033-.48c.01-.16,0-.319.008-.477s0-.319,0-.477l-.026-.473a13.966,13.966,0,0,0-.234-1.851c-.031-.151-.072-.3-.106-.449s-.064-.3-.115-.446c-.094-.292-.17-.59-.288-.872a12.361,12.361,0,0,0-4.526-5.763,14.917,14.917,0,0,0-3.4-1.788c-.3-.122-.609-.211-.915-.315l-.467-.131c-.079-.02-.155-.044-.234-.064l-.235-.053a13.52,13.52,0,0,0-1.9-.315l-.474-.042-.473-.018c-.15-.01-.334,0-.5,0s-.347,0-.518,0c-.687.018-1.364.057-2.025.134a17.168,17.168,0,0,0-1.923.337,12.653,12.653,0,0,0-1.8.591,11.587,11.587,0,0,0-1.686.863c-.272.171-.543.346-.809.541-.136.092-.264.192-.391.291s-.257.195-.383.3-.254.206-.377.319l-.371.334c-.241.234-.488.462-.72.713s-.465.5-.694.756c-.115.129-.223.265-.335.4s-.224.265-.331.4a32.169,32.169,0,0,0-2.4,3.512c-.731,1.241-1.394,2.528-2.013,3.865-.324.706-.675,1.437-1.049,2.148s-.776,1.415-1.2,2.1-.867,1.355-1.331,2.008c-.112.158-.241.34-.37.509s-.26.336-.393.5c-.266.326-.543.644-.828.952a16.434,16.434,0,0,1-3.975,3.183,12.76,12.76,0,0,1-1.18.579,12.328,12.328,0,0,1-1.254.454,10.194,10.194,0,0,1-2.66.422,10.985,10.985,0,0,1-2.622-.257,13.265,13.265,0,0,1-2.446-.784,13.737,13.737,0,0,1-4.2-2.821,11.926,11.926,0,0,1-2.788-4.252,11.793,11.793,0,0,1-.632-2.478,12.407,12.407,0,0,1-.1-2.538,12.035,12.035,0,0,1,1.38-4.863,12.513,12.513,0,0,1,3.207-3.893c.167-.128.332-.262.5-.387s.344-.246.523-.36a12.37,12.37,0,0,1,1.1-.635c.19-.094.378-.193.575-.275s.388-.174.589-.248l.3-.112.3-.1c.1-.032.2-.066.3-.1l.31-.084a11.25,11.25,0,0,1,2.543-.36,12.47,12.47,0,0,1,2.516.191,10.266,10.266,0,0,1,2.46.775,8.19,8.19,0,0,1,2.165,1.483,7.6,7.6,0,0,1,1.538,2.093,8.138,8.138,0,0,1,.5,1.241.227.227,0,0,1-.01.164l-.7,1.521a.227.227,0,0,1-.415-.006c-.178-.424-.394-.919-.489-1.111a8.112,8.112,0,0,0-.507-.882,7.3,7.3,0,0,0-.611-.781,5.925,5.925,0,0,0-.713-.66,6.271,6.271,0,0,0-1.681-.951,8.007,8.007,0,0,0-1.924-.472c-.334-.038-.671-.068-1.012-.076s-.687,0-1.026.015a9.446,9.446,0,0,0-1.963.335l-.241.066c-.08.025-.159.053-.238.079l-.239.08-.234.092c-.158.055-.312.124-.466.192s-.3.143-.456.217c-.3.15-.592.32-.879.5-.144.089-.281.187-.422.28s-.272.2-.41.3a10.239,10.239,0,0,0-2.654,3.039,8.889,8.889,0,0,0-1.155,3.84,8.71,8.71,0,0,0,.667,3.939,9.352,9.352,0,0,0,2.316,3.24,10.662,10.662,0,0,0,1.616,1.213,10.4,10.4,0,0,0,3.744,1.4c.161.033.325.046.486.068s.324.027.485.039a7.9,7.9,0,0,0,.952-.01,7.036,7.036,0,0,0,1.823-.384,8.755,8.755,0,0,0,1.719-.851,12.992,12.992,0,0,0,2.979-2.689c.219-.262.428-.533.628-.809.1-.137.2-.277.289-.416s.18-.273.278-.432q.578-.916,1.09-1.866t.96-1.926c.3-.655.572-1.314.845-2.011a39.5,39.5,0,0,1,4.511-8.523c.116-.169.242-.335.367-.5s.247-.332.378-.5c.264-.325.522-.653.8-.968s.568-.629.858-.938l.456-.454c.153-.153.318-.3.474-.443s.325-.291.494-.432.336-.281.509-.411c.34-.27.7-.525,1.06-.773a16.48,16.48,0,0,1,2.325-1.315,17.842,17.842,0,0,1,2.5-.938,21.494,21.494,0,0,1,2.555-.557c.85-.127,1.692-.2,2.526-.251.209-.012.416-.015.625-.023s.407-.018.636-.014l.67,0,.665.037a20.276,20.276,0,0,1,9.874,3.414c.182.126.361.257.542.387l.271.195c.089.066.175.138.263.207l.521.42.5.446.249.224.24.238.477.477.454.5.224.252.213.264.424.531.4.554.2.28.182.288.359.58.328.6.161.3c.052.1.1.207.147.31l.287.621c.09.209.169.424.253.635.176.421.3.858.443,1.292.074.217.118.438.177.658s.113.441.161.661a18.9,18.9,0,0,1,.36,2.675l.037.67C539.464,34.037,539.46,34.258,539.461,34.48Z" transform="translate(-476.02 -16.091)" fill="#fff"/>
            </g>
          </g>
        </g>
      </g>
    </g>


    <circle id="Ellipse_538" data-name="Ellipse 538" cx="28" cy="28" r="28" transform="translate(455 1849)" fill="#194d99"/>
    <circle id="Ellipse_539" data-name="Ellipse 539" cx="12" cy="12" r="12" transform="translate(523 1857)" fill="#194d99"/>
    <circle id="Ellipse_555" data-name="Ellipse 555" cx="7.5" cy="7.5" r="7.5" transform="translate(419 1893)" fill="#194d99"/>
    <circle id="Ellipse_568" data-name="Ellipse 568" cx="7.5" cy="7.5" r="7.5" transform="translate(121 1994)" fill="#194d99"/>
    <circle id="Ellipse_569" data-name="Ellipse 569" cx="9" cy="9" r="9" transform="translate(89 2117)" fill="#194d99"/>
    <circle id="Ellipse_556" data-name="Ellipse 556" cx="8.5" cy="8.5" r="8.5" transform="translate(324 1898)" fill="#6dcdf7"/>
    <circle id="Ellipse_562" data-name="Ellipse 562" cx="16.5" cy="16.5" r="16.5" transform="translate(237 1999)" fill="#194d99"/>
    <circle id="Ellipse_557" data-name="Ellipse 557" cx="8.5" cy="8.5" r="8.5" transform="translate(533 1901)" fill="#194d99"/>
    <circle id="Ellipse_563" data-name="Ellipse 563" cx="8.5" cy="8.5" r="8.5" transform="translate(241 2060)" fill="#194d99"/>
    <circle id="Ellipse_564" data-name="Ellipse 564" cx="8.5" cy="8.5" r="8.5" transform="translate(207 2011)" fill="#6dcdf7"/>
    <circle id="Ellipse_565" data-name="Ellipse 565" cx="29.5" cy="29.5" r="29.5" transform="translate(140 1986)" fill="#194d99"/>
    <circle id="Ellipse_566" data-name="Ellipse 566" cx="39.5" cy="39.5" r="39.5" transform="translate(73 2029)" fill="#194d99"/>
    <circle id="Ellipse_567" data-name="Ellipse 567" cx="16.5" cy="16.5" r="16.5" transform="translate(80 1991)" fill="#6dcdf7"/>
    <circle id="Ellipse_542" data-name="Ellipse 542" cx="15" cy="15" r="15" transform="translate(492 1968)" fill="#194d99"/>
    <circle id="Ellipse_553" data-name="Ellipse 553" cx="25" cy="25" r="25" transform="translate(583 1973)" fill="#194d99"/>
    <circle id="Ellipse_560" data-name="Ellipse 560" cx="22" cy="22" r="22" transform="translate(342 1962)" fill="#6dcdf7"/>
    <circle id="Ellipse_554" data-name="Ellipse 554" cx="16.5" cy="16.5" r="16.5" transform="translate(412 1948)" fill="#194d99"/>
    <circle id="Ellipse_561" data-name="Ellipse 561" cx="19" cy="19" r="19" transform="translate(274 1956)" fill="#194d99"/>
    <circle id="Ellipse_559" data-name="Ellipse 559" cx="21.5" cy="21.5" r="21.5" transform="translate(329 1912)" fill="#194d99"/>
    <circle id="Ellipse_544" data-name="Ellipse 544" cx="19.5" cy="19.5" r="19.5" transform="translate(553 2022)" fill="#194d99"/>
    <circle id="Ellipse_541" data-name="Ellipse 541" cx="12" cy="12" r="12" transform="translate(649 1983)" fill="#194d99"/>
    <circle id="Ellipse_507" data-name="Ellipse 507" cx="57" cy="57" r="57" transform="translate(523 2519)" fill="#6dcdf7"/>
    <circle id="Ellipse_508" data-name="Ellipse 508" cx="42" cy="42" r="42" transform="translate(554 2669)" fill="#6dcdf7"/>
    <circle id="Ellipse_509" data-name="Ellipse 509" cx="12.5" cy="12.5" r="12.5" transform="translate(547 2852)" fill="#6dcdf7"/>
    <circle id="Ellipse_510" data-name="Ellipse 510" cx="15.5" cy="15.5" r="15.5" transform="translate(556 2798)" fill="#6dcdf7"/>
    <circle id="Ellipse_511" data-name="Ellipse 511" cx="21.5" cy="21.5" r="21.5" transform="translate(545 2752)" fill="#6dcdf7"/>
    <circle id="Ellipse_512" data-name="Ellipse 512" cx="6.5" cy="6.5" r="6.5" transform="translate(539 2796)" fill="#6dcdf7"/>
    <circle id="Ellipse_513" data-name="Ellipse 513" cx="6.5" cy="6.5" r="6.5" transform="translate(595 2756)" fill="#6dcdf7"/>
    <circle id="Ellipse_514" data-name="Ellipse 514" cx="6.5" cy="6.5" r="6.5" transform="translate(642 2659)" fill="#6dcdf7"/>
    <circle id="Ellipse_516" data-name="Ellipse 516" cx="9" cy="9" r="9" transform="translate(505 2526)" fill="#6dcdf7"/>
    <circle id="Ellipse_524" data-name="Ellipse 524" cx="9" cy="9" r="9" transform="translate(509 2371)" fill="#6dcdf7"/>
    <circle id="Ellipse_526" data-name="Ellipse 526" cx="9" cy="9" r="9" transform="translate(437 2348)" fill="#6dcdf7"/>
    <circle id="Ellipse_525" data-name="Ellipse 525" cx="12" cy="12" r="12" transform="translate(472 2361)" fill="#6dcdf7"/>
    <circle id="Ellipse_527" data-name="Ellipse 527" cx="15" cy="15" r="15" transform="translate(500 2407)" fill="#6dcdf7"/>
    <circle id="Ellipse_551" data-name="Ellipse 551" cx="7.5" cy="7.5" r="7.5" transform="translate(364 2160)" fill="#6dcdf7"/>
    <circle id="Ellipse_517" data-name="Ellipse 517" cx="21" cy="21" r="21" transform="translate(509 2475)" fill="#6dcdf7"/>
    <circle id="Ellipse_518" data-name="Ellipse 518" cx="15.5" cy="15.5" r="15.5" transform="translate(611 2483)" fill="#6dcdf7"/>
    <circle id="Ellipse_515" data-name="Ellipse 515" cx="6.5" cy="6.5" r="6.5" transform="translate(697 2591)" fill="#6dcdf7"/>
    <circle id="Ellipse_495" data-name="Ellipse 495" cx="26.5" cy="26.5" r="26.5" transform="translate(652 2603)" fill="#194d99"/>
    <circle id="Ellipse_467" data-name="Ellipse 467" cx="16" cy="16" r="16" transform="translate(977 2274)" fill="#194d99"/>
    <circle id="Ellipse_468" data-name="Ellipse 468" cx="27" cy="27" r="27" transform="translate(919 2304)" fill="#194d99"/>
    <circle id="Ellipse_469" data-name="Ellipse 469" cx="12.5" cy="12.5" r="12.5" transform="translate(893 2188)" fill="#194d99"/>
    <circle id="Ellipse_470" data-name="Ellipse 470" cx="12.5" cy="12.5" r="12.5" transform="translate(917 2168)" fill="#194d99"/>
    <circle id="Ellipse_471" data-name="Ellipse 471" cx="12.5" cy="12.5" r="12.5" transform="translate(881 2111)" fill="#194d99"/>
    <circle id="Ellipse_472" data-name="Ellipse 472" cx="12.5" cy="12.5" r="12.5" transform="translate(861 2325)" fill="#194d99"/>
    <circle id="Ellipse_473" data-name="Ellipse 473" cx="5.5" cy="5.5" r="5.5" transform="translate(840 2346)" fill="#194d99"/>
    <circle id="Ellipse_492" data-name="Ellipse 492" cx="54.5" cy="54.5" r="54.5" transform="translate(692 1906)" fill="#194d99"/>
    <circle id="Ellipse_447" data-name="Ellipse 447" cx="27" cy="27" r="27" transform="translate(992 2660)" fill="#194d99"/>
    <circle id="Ellipse_448" data-name="Ellipse 448" cx="14.5" cy="14.5" r="14.5" transform="translate(1044 2643)" fill="#194d99"/>
    <circle id="Ellipse_449" data-name="Ellipse 449" cx="18.5" cy="18.5" r="18.5" transform="translate(1105 2468)" fill="#194d99"/>
    <circle id="Ellipse_464" data-name="Ellipse 464" cx="14.5" cy="14.5" r="14.5" transform="translate(1062 2385)" fill="#194d99"/>
    <circle id="Ellipse_465" data-name="Ellipse 465" cx="40.5" cy="40.5" r="40.5" transform="translate(980 2318)" fill="#194d99"/>
    <circle id="Ellipse_466" data-name="Ellipse 466" cx="21.5" cy="21.5" r="21.5" transform="translate(1121 2263)" fill="#194d99"/>
    <circle id="Ellipse_450" data-name="Ellipse 450" cx="40" cy="10" r="10" transform="translate(1103 2509)" fill="#194d99"/>
    <circle id="Ellipse_451" data-name="Ellipse 451" cx="40" cy="10" r="10" transform="translate(1105 2443)" fill="#194d99"/>
    <circle id="Ellipse_452" data-name="Ellipse 452" cx="7" cy="7" r="7" transform="translate(971 2552)" fill="#194d99"/>
    <circle id="Ellipse_453" data-name="Ellipse 453" cx="7" cy="7" r="7" transform="translate(944 2475)" fill="#194d99"/>
    <circle id="Ellipse_421" data-name="Ellipse 421" cx="18" cy="18" r="18" transform="translate(1014 2098)" fill="#194d99"/>
    <circle id="Ellipse_530" data-name="Ellipse 530" cx="18" cy="18" r="18" transform="translate(1138 2190)" fill="#194d99"/>
    <circle id="Ellipse_639" data-name="Ellipse 639" cx="18" cy="18" r="18" transform="translate(1079 2083)" fill="#194d99"/>
    <circle id="Ellipse_422" data-name="Ellipse 422" cx="11.5" cy="11.5" r="11.5" transform="translate(1261 2435)" fill="#194d99"/>
    <circle id="Ellipse_426" data-name="Ellipse 426" cx="9.5" cy="9.5" r="9.5" transform="translate(1328 2380)" fill="#194d99"/>
    <circle id="Ellipse_427" data-name="Ellipse 427" cx="7.5" cy="7.5" r="7.5" transform="translate(1275 2417)" fill="#194d99"/>
    <circle id="Ellipse_430" data-name="Ellipse 430" cx="16.5" cy="16.5" r="16.5" transform="translate(1216 2290)" fill="#194d99"/>
    <circle id="Ellipse_424" data-name="Ellipse 424" cx="16.5" cy="16.5" r="16.5" transform="translate(1232 2378)" fill="#194d99"/>
    <circle id="Ellipse_425" data-name="Ellipse 425" cx="20" cy="20" r="20" transform="translate(1197 2340)" fill="#6dcdf7"/>
    <circle id="Ellipse_432" data-name="Ellipse 432" cx="37" cy="37" r="37" transform="translate(1116 2341)" fill="#6dcdf7"/>
    <circle id="Ellipse_454" data-name="Ellipse 454" cx="37" cy="37" r="37" transform="translate(964 2464)" fill="#6dcdf7"/>
    <circle id="Ellipse_455" data-name="Ellipse 455" cx="47" cy="47" r="47" transform="translate(1009 2538)" fill="#6dcdf7"/>
    <circle id="Ellipse_456" data-name="Ellipse 456" cx="14.5" cy="14.5" r="14.5" transform="translate(984 2627)" fill="#6dcdf7"/>
    <circle id="Ellipse_457" data-name="Ellipse 457" cx="17" cy="17" r="17" transform="translate(969 2580)" fill="#6dcdf7"/>
    <circle id="Ellipse_458" data-name="Ellipse 458" cx="21" cy="21" r="21" transform="translate(981 2410)" fill="#6dcdf7"/>
    <circle id="Ellipse_475" data-name="Ellipse 475" cx="21" cy="21" r="21" transform="translate(874 2279)" fill="#6dcdf7"/>
    <circle id="Ellipse_476" data-name="Ellipse 476" cx="13.5" cy="13.5" r="13.5" transform="translate(920 2272)" fill="#6dcdf7"/>
    <circle id="Ellipse_477" data-name="Ellipse 477" cx="8" cy="8" r="8" transform="translate(991 2249)" fill="#6dcdf7"/>
    <circle id="Ellipse_478" data-name="Ellipse 478" cx="8" cy="8" r="8" transform="translate(1024 2226)" fill="#6dcdf7"/>
    <circle id="Ellipse_479" data-name="Ellipse 479" cx="11" cy="11" r="11" transform="translate(963 2223)" fill="#6dcdf7"/>
    <circle id="Ellipse_480" data-name="Ellipse 480" cx="17" cy="17" r="17" transform="translate(919 2202)" fill="#6dcdf7"/>
    <circle id="Ellipse_481" data-name="Ellipse 481" cx="25.5" cy="25.5" r="25.5" transform="translate(861 2221)" fill="#6dcdf7"/>
    <circle id="Ellipse_482" data-name="Ellipse 482" cx="25.5" cy="25.5" r="25.5" transform="translate(969 2017)" fill="#6dcdf7"/>
    <circle id="Ellipse_483" data-name="Ellipse 483" cx="22" cy="22" r="22" transform="translate(933 2069)" fill="#6dcdf7"/>
    <circle id="Ellipse_528" data-name="Ellipse 528" cx="22" cy="22" r="22" transform="translate(732 1824)" fill="#6dcdf7"/>
    <circle id="Ellipse_532" data-name="Ellipse 532" cx="32" cy="32" r="32" transform="translate(641 2022)" fill="#6dcdf7"/>
    <circle id="Ellipse_545" data-name="Ellipse 545" cx="22" cy="22" r="22" transform="translate(588 2056)" fill="#6dcdf7"/>
    <circle id="Ellipse_548" data-name="Ellipse 548" cx="38" cy="38" r="38" transform="translate(270 2203)" fill="#6dcdf7"/>
    <circle id="Ellipse_550" data-name="Ellipse 550" cx="33.5" cy="33.5" r="33.5" transform="translate(468 2286)" fill="#194d99"/>
    <circle id="Ellipse_549" data-name="Ellipse 549" cx="65" cy="65" r="65" transform="translate(297 2015)" fill="#194d99"/>
    <circle id="Ellipse_570" data-name="Ellipse 570" cx="23" cy="23" r="23" transform="translate(176 2045)" fill="#6dcdf7"/>
    <circle id="Ellipse_573" data-name="Ellipse 573" cx="32" cy="32" r="32" transform="translate(209 2091)" fill="#6dcdf7"/>
    <circle id="Ellipse_534" data-name="Ellipse 534" cx="34.5" cy="34.5" r="34.5" transform="translate(585 1849)" fill="#6dcdf7"/>
    <circle id="Ellipse_637" data-name="Ellipse 637" cx="43.5" cy="43.5" r="43.5" transform="translate(451 2032)" fill="#6dcdf7"/>
    <circle id="Ellipse_535" data-name="Ellipse 535" cx="24.5" cy="24.5" r="24.5" transform="translate(660 1846)" fill="#6dcdf7"/>
    <circle id="Ellipse_536" data-name="Ellipse 536" cx="22.5" cy="22.5" r="22.5" transform="translate(631 1931)" fill="#6dcdf7"/>
    <circle id="Ellipse_529" data-name="Ellipse 529" cx="14.5" cy="14.5" r="14.5" transform="translate(797 1857)" fill="#6dcdf7"/>
    <circle id="Ellipse_484" data-name="Ellipse 484" cx="13.5" cy="13.5" r="13.5" transform="translate(971 2111)" fill="#6dcdf7"/>
    <circle id="Ellipse_485" data-name="Ellipse 485" cx="15" cy="15" r="15" transform="translate(879 2143)" fill="#6dcdf7"/>
    <circle id="Ellipse_486" data-name="Ellipse 486" cx="10.5" cy="10.5" r="10.5" transform="translate(851 2141)" fill="#6dcdf7"/>
    <circle id="Ellipse_487" data-name="Ellipse 487" cx="7.5" cy="7.5" r="7.5" transform="translate(886 2090)" fill="#6dcdf7"/>
    <circle id="Ellipse_533" data-name="Ellipse 533" cx="7.5" cy="7.5" r="7.5" transform="translate(711 2025)" fill="#6dcdf7"/>
    <circle id="Ellipse_537" data-name="Ellipse 537" cx="7.5" cy="7.5" r="7.5" transform="translate(717 1859)" fill="#6dcdf7"/>
    <circle id="Ellipse_540" data-name="Ellipse 540" cx="7.5" cy="7.5" r="7.5" transform="translate(551 1846)" fill="#6dcdf7"/>
    <circle id="Ellipse_543" data-name="Ellipse 543" cx="7.5" cy="7.5" r="7.5" transform="translate(539 1997)" fill="#6dcdf7"/>
    <circle id="Ellipse_558" data-name="Ellipse 558" cx="7.5" cy="7.5" r="7.5" transform="translate(548 1956)" fill="#6dcdf7"/>
    <circle id="Ellipse_572" data-name="Ellipse 572" cx="7.5" cy="7.5" r="7.5" transform="translate(266 2177)" fill="#6dcdf7"/>
    <circle id="Ellipse_552" data-name="Ellipse 552" cx="15.5" cy="15.5" r="15.5" transform="translate(460 1939)" fill="#6dcdf7"/>
    <circle id="Ellipse_574" data-name="Ellipse 574" cx="15.5" cy="15.5" r="15.5" transform="translate(444 1981)" fill="#6dcdf7"/>
    <circle id="Ellipse_571" data-name="Ellipse 571" cx="15.5" cy="15.5" r="15.5" transform="translate(287 2128)" fill="#194d99"/>
    <circle id="Ellipse_459" data-name="Ellipse 459" cx="14.5" cy="14.5" r="14.5" transform="translate(1066 2492)" fill="#6dcdf7"/>
    <circle id="Ellipse_460" data-name="Ellipse 460" cx="27.5" cy="27.5" r="27.5" transform="translate(1046 2422)" fill="#6dcdf7"/>
    <circle id="Ellipse_461" data-name="Ellipse 461" cx="6" cy="6" r="6" transform="translate(1092 2534)" fill="#6dcdf7"/>
    <circle id="Ellipse_462" data-name="Ellipse 462" cx="6" cy="6" r="6" transform="translate(1141 2460)" fill="#6dcdf7"/>
    <circle id="Ellipse_463" data-name="Ellipse 463" cx="6" cy="6" r="6" transform="translate(1128 2426)" fill="#6dcdf7"/>
    <circle id="Ellipse_433" data-name="Ellipse 433" cx="22" cy="22" r="22" transform="translate(1081 2302)" fill="#6dcdf7"/>
    <circle id="Ellipse_434" data-name="Ellipse 434" cx="29" cy="29" r="29" transform="translate(1037 2255)" fill="#6dcdf7"/>
    <circle id="Ellipse_435" data-name="Ellipse 435" cx="8.5" cy="8.5" r="8.5" transform="translate(1129 2228)" fill="#6dcdf7"/>
    <circle id="Ellipse_436" data-name="Ellipse 436" cx="18.5" cy="18.5" r="18.5" transform="translate(1201 2114)" fill="#6dcdf7"/>
    <circle id="Ellipse_437" data-name="Ellipse 437" cx="34.5" cy="34.5" r="34.5" transform="translate(1249 2103)" fill="#6dcdf7"/>
    <circle id="Ellipse_438" data-name="Ellipse 438" cx="55.5" cy="55.5" r="55.5" transform="translate(1178 2167)" fill="#6dcdf7"/>
    <circle id="Ellipse_439" data-name="Ellipse 439" cx="22" cy="22" r="22" transform="translate(1251 1980)" fill="#6dcdf7"/>
    <circle id="Ellipse_440" data-name="Ellipse 440" cx="12.5" cy="12.5" r="12.5" transform="translate(1162 1972)" fill="#6dcdf7"/>
    <circle id="Ellipse_441" data-name="Ellipse 441" cx="7.5" cy="7.5" r="7.5" transform="translate(1213 2007)" fill="#6dcdf7"/>
    <circle id="Ellipse_442" data-name="Ellipse 442" cx="11.5" cy="11.5" r="11.5" transform="translate(1097 2016)" fill="#6dcdf7"/>
    <circle id="Ellipse_531" data-name="Ellipse 531" cx="11.5" cy="11.5" r="11.5" transform="translate(1172 2138)" fill="#6dcdf7"/>
    <circle id="Ellipse_431" data-name="Ellipse 431" cx="22" cy="22" r="22" transform="translate(1165 2295)" fill="#194d99"/>
    <circle id="Ellipse_429" data-name="Ellipse 429" cx="20" cy="20" r="20" transform="translate(1241 2331)" fill="#194d99"/>
    <circle id="Ellipse_428" data-name="Ellipse 428" cx="9" cy="9" r="9" transform="translate(1250 2416)" fill="#6dcdf7"/>
    <circle id="Ellipse_379" data-name="Ellipse 379" cx="68" cy="68" r="68" transform="translate(1313 1943)" fill="#194d99"/>
    <circle id="Ellipse_380" data-name="Ellipse 380" cx="22" cy="22" r="22" transform="translate(1338 2092)" fill="#194d99"/>
    <circle id="Ellipse_381" data-name="Ellipse 381" cx="25" cy="25" r="25" transform="translate(1317 2146)" fill="#194d99"/>
    <circle id="Ellipse_382" data-name="Ellipse 382" cx="19" cy="19" r="19" transform="translate(1304 2212)" fill="#194d99"/>
    <circle id="Ellipse_383" data-name="Ellipse 383" cx="6" cy="6" r="6" transform="translate(1353 2208)" fill="#194d99"/>
    <circle id="Ellipse_357" data-name="Ellipse 357" cx="8.5" cy="8.5" r="8.5" transform="translate(1602 2048)" fill="#194d99"/>
    <circle id="Ellipse_358" data-name="Ellipse 358" cx="8.5" cy="8.5" r="8.5" transform="translate(1615 1954)" fill="#6dcdf7"/>
    <circle id="Ellipse_359" data-name="Ellipse 359" cx="7" cy="7" r="7" transform="translate(1634 2086)" fill="#6dcdf7"/>
    <circle id="Ellipse_360" data-name="Ellipse 360" cx="6.5" cy="6.5" r="6.5" transform="translate(1722 2091)" fill="#6dcdf7"/>
    <circle id="Ellipse_361" data-name="Ellipse 361" cx="14.5" cy="14.5" r="14.5" transform="translate(1748 2073)" fill="#6dcdf7"/>
    <circle id="Ellipse_362" data-name="Ellipse 362" cx="10.5" cy="10.5" r="10.5" transform="translate(1708 2110)" fill="#6dcdf7"/>
    <circle id="Ellipse_363" data-name="Ellipse 363" cx="14.5" cy="14.5" r="14.5" transform="translate(1695 2138)" fill="#6dcdf7"/>
    <circle id="Ellipse_372" data-name="Ellipse 372" cx="20.5" cy="20.5" r="20.5" transform="translate(1590 2256)" fill="#6dcdf7"/>
    <circle id="Ellipse_373" data-name="Ellipse 373" cx="13.5" cy="13.5" r="13.5" transform="translate(1527 2247)" fill="#6dcdf7"/>
    <circle id="Ellipse_374" data-name="Ellipse 374" cx="23.5" cy="23.5" r="23.5" transform="translate(1453 2106)" fill="#6dcdf7"/>
    <circle id="Ellipse_384" data-name="Ellipse 384" cx="42.5" cy="42.5" r="42.5" transform="translate(1379 2142)" fill="#6dcdf7"/>
    <circle id="Ellipse_385" data-name="Ellipse 385" cx="67.5" cy="67.5" r="67.5" transform="translate(1377 2247)" fill="#6dcdf7"/>
    <circle id="Ellipse_386" data-name="Ellipse 386" cx="15" cy="15" r="15" transform="translate(1351 2236)" fill="#6dcdf7"/>
    <circle id="Ellipse_387" data-name="Ellipse 387" cx="43.5" cy="43.5" r="43.5" transform="translate(1271 2261)" fill="#194d99"/>
    <circle id="Ellipse_388" data-name="Ellipse 388" cx="17.5" cy="17.5" r="17.5" transform="translate(1334 2344)" fill="#6dcdf7"/>
    <circle id="Ellipse_389" data-name="Ellipse 389" cx="14.5" cy="14.5" r="14.5" transform="translate(1392 2388)" fill="#6dcdf7"/>
    <circle id="Ellipse_391" data-name="Ellipse 391" cx="21.5" cy="21.5" r="21.5" transform="translate(1416 2416)" fill="#6dcdf7"/>
    <circle id="Ellipse_396" data-name="Ellipse 396" cx="19.5" cy="19.5" r="19.5" transform="translate(1537 2612)" fill="#6dcdf7"/>
    <circle id="Ellipse_397" data-name="Ellipse 397" cx="15" cy="15" r="15" transform="translate(1624 2614)" fill="#6dcdf7"/>
    <circle id="Ellipse_398" data-name="Ellipse 398" cx="7" cy="7" r="7" transform="translate(1587 2602)" fill="#6dcdf7"/>
    <circle id="Ellipse_399" data-name="Ellipse 399" cx="11" cy="11" r="11" transform="translate(1591 2720)" fill="#6dcdf7"/>
    <circle id="Ellipse_400" data-name="Ellipse 400" cx="14" cy="14" r="14" transform="translate(1645 2695)" fill="#6dcdf7"/>
    <circle id="Ellipse_401" data-name="Ellipse 401" cx="6.5" cy="6.5" r="6.5" transform="translate(1662 2725)" fill="#6dcdf7"/>
    <circle id="Ellipse_390" data-name="Ellipse 390" cx="6" cy="6" r="6" transform="translate(1375 2375)" fill="#6dcdf7"/>
    <circle id="Ellipse_375" data-name="Ellipse 375" cx="41.5" cy="41.5" r="41.5" transform="translate(1480 2025)" fill="#6dcdf7"/>
    <circle id="Ellipse_376" data-name="Ellipse 376" cx="25.5" cy="25.5" r="25.5" transform="translate(1425 1911)" fill="#6dcdf7"/>
    <circle id="Ellipse_377" data-name="Ellipse 377" cx="8.5" cy="8.5" r="8.5" transform="translate(1515 1980)" fill="#6dcdf7"/>
    <circle id="Ellipse_364" data-name="Ellipse 364" cx="40" cy="10" r="10" transform="translate(1622 2215)" fill="#6dcdf7"/>
    <defs>
    <filter id="Ellipse_636" x="-140" y="-50" width="500" height="500" filterUnits="userSpaceOnUse">
      <feOffset input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="20" result="blur"/>
      <feFlood floodColor="#06f455"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
    <g id="Component_20_1" data-name="Component 20 – 1" transform="translate(358 2175)" filter="url(#Ellipse_636)" style={{transition: "ease-in 0.2s"}}
        onMouseOver={e =>this.changeCircle(e)}
        onMouseOut={e =>this.changeCircleNormal(e)}>
      <circle id="Ellipse_636" 
        data-name="Ellipse 636" 
        cx="65" cy="65" r="65" 
        fill="#06ff59" 
        style={{transition: "ease-in 0.2s"}}
        onMouseOver={e =>this.changeCircle(e)}
        onMouseOut={e =>this.changeCircleNormal(e)} />
      <g id="Group_378" data-name="Group 378" transform="translate(-1226.338 -215.245)" >
        <g id="Group_373" data-name="Group 373" transform="translate(1284.531 293.584)">
          <g id="Group_11" data-name="Group 11">
            <g id="Group_10" data-name="Group 10">
              <path id="Path_4" data-name="Path 4" d="M498.975,39.247h0a.825.825,0,1,0-.885-.758A.825.825,0,0,0,498.977,39.247Z" transform="translate(-498.09 -37.599)" fill="#fff"/>
            </g>
          </g>
        </g>
        <g id="Group_374" data-name="Group 374" transform="translate(1287.221 297.023)">
          <g id="Group_14" data-name="Group 14">
            <g id="Group_13" data-name="Group 13">
              <path id="Path_5" data-name="Path 5" d="M501.222,42.631h.006a1.792,1.792,0,1,0-.006,0Z" transform="translate(-499.448 -39.335)" fill="#fff"/>
            </g>
          </g>
        </g>
        <g id="Group_375" data-name="Group 375" transform="translate(1292.087 300.879)">
          <g id="Group_17" data-name="Group 17">
            <g id="Group_16" data-name="Group 16">
              <path id="Path_6" data-name="Path 6" d="M504.567,46.225h.008a2.69,2.69,0,1,0-.008,0Z" transform="translate(-501.906 -41.283)" fill="#fff"/>
            </g>
          </g>
        </g>
        <g id="Group_376" data-name="Group 376" transform="translate(1300.143 303.354)">
          <g id="Group_20" data-name="Group 20">
            <g id="Group_19" data-name="Group 19">
              <path id="Path_7" data-name="Path 7" d="M509.521,49.122h.01a3.584,3.584,0,1,0-.01,0Z" transform="translate(-505.975 -42.533)" fill="#fff"/>
            </g>
          </g>
        </g>
        <g id="Group_377" data-name="Group 377" transform="translate(1240.833 251)">
          <g id="Group_8" data-name="Group 8">
            <g id="Group_7" data-name="Group 7">
              <path id="Path_3" data-name="Path 3" d="M578.024,45.658c-.006.354,0,.713-.014,1.069l-.065,1.059-.034.529-.018.265-.032.261-.125,1.045c-.077.683-.206,1.424-.348,2.14a29,29,0,0,1-3.027,8.148,30.814,30.814,0,0,1-5.126,6.865,32.421,32.421,0,0,1-6.746,5.225,29.291,29.291,0,0,1-3.865,1.883,29.948,29.948,0,0,1-4.12,1.313,27.889,27.889,0,0,1-4.245.683l-.046,0H550.2a4.4,4.4,0,0,1-.79-8.761,20.649,20.649,0,0,0,2.938-.552,22.636,22.636,0,0,0,10.341-6.183,21.514,21.514,0,0,0,5.667-10.476c.093-.483.178-.948.234-1.485l.1-.776.024-.194.012-.2.026-.386.053-.772c.016-.257.006-.513.012-.766s.008-.513.006-.766l-.042-.76A22.439,22.439,0,0,0,568.4,41.1c-.05-.244-.115-.481-.17-.723s-.1-.485-.184-.717c-.15-.469-.273-.948-.463-1.4a19.872,19.872,0,0,0-7.278-9.266,23.981,23.981,0,0,0-5.469-2.875c-.481-.2-.98-.339-1.471-.507l-.75-.21c-.127-.032-.249-.071-.376-.1l-.378-.085a21.739,21.739,0,0,0-3.047-.507l-.762-.067-.76-.03c-.242-.016-.537-.006-.812-.008s-.558,0-.834,0c-1.1.03-2.194.091-3.255.216a27.6,27.6,0,0,0-3.093.543,20.345,20.345,0,0,0-2.893.95A18.629,18.629,0,0,0,533.7,27.7c-.438.275-.873.556-1.3.869-.218.148-.424.309-.628.467s-.414.313-.616.485-.408.331-.606.513l-.6.537c-.388.376-.784.742-1.158,1.146-.384.388-.748.8-1.117,1.216-.184.208-.358.426-.539.64s-.36.426-.533.649a51.719,51.719,0,0,0-3.857,5.647c-1.176,2-2.241,4.065-3.237,6.215-.521,1.135-1.085,2.311-1.687,3.453s-1.247,2.275-1.924,3.378-1.394,2.178-2.14,3.229c-.18.253-.388.546-.594.818s-.418.541-.632.8c-.428.525-.873,1.036-1.331,1.531a26.418,26.418,0,0,1-6.391,5.118,20.522,20.522,0,0,1-1.9.931,19.836,19.836,0,0,1-2.016.731,16.39,16.39,0,0,1-4.277.679,17.662,17.662,0,0,1-4.215-.414,21.33,21.33,0,0,1-3.932-1.261,22.086,22.086,0,0,1-6.76-4.536,19.172,19.172,0,0,1-4.483-6.837,18.951,18.951,0,0,1-1.016-3.984,19.954,19.954,0,0,1-.154-4.081,19.342,19.342,0,0,1,2.219-7.819,20.116,20.116,0,0,1,5.156-6.259c.269-.206.535-.422.812-.622s.552-.4.842-.578a19.867,19.867,0,0,1,1.772-1.022c.3-.15.608-.311.925-.442s.624-.279.946-.4l.483-.18.489-.158c.162-.051.325-.107.489-.156l.5-.135a18.088,18.088,0,0,1,4.089-.578,20.052,20.052,0,0,1,4.045.307,16.506,16.506,0,0,1,3.956,1.245,13.167,13.167,0,0,1,3.481,2.384,12.211,12.211,0,0,1,2.473,3.366,13.05,13.05,0,0,1,.808,2,.366.366,0,0,1-.016.263L508.408,39.3a.365.365,0,0,1-.667-.01c-.287-.681-.633-1.477-.786-1.786a13.069,13.069,0,0,0-.816-1.418,11.734,11.734,0,0,0-.982-1.255,9.517,9.517,0,0,0-1.146-1.061,10.081,10.081,0,0,0-2.7-1.529,12.876,12.876,0,0,0-3.093-.758c-.537-.061-1.079-.109-1.628-.123s-1.1-.006-1.649.024a15.192,15.192,0,0,0-3.156.539l-.388.107c-.129.04-.255.085-.382.127l-.384.129-.376.148c-.253.089-.5.2-.748.309s-.489.23-.733.348c-.483.242-.952.515-1.414.8-.232.143-.451.3-.679.449s-.438.323-.659.481a16.461,16.461,0,0,0-4.267,4.887,14.294,14.294,0,0,0-1.857,6.174,14,14,0,0,0,1.073,6.334,15.039,15.039,0,0,0,3.724,5.209,17.152,17.152,0,0,0,2.6,1.95,16.716,16.716,0,0,0,6.019,2.257c.259.053.523.073.782.109s.521.044.78.063a12.7,12.7,0,0,0,1.531-.016,11.312,11.312,0,0,0,2.93-.618A14.075,14.075,0,0,0,502.1,59.8a20.888,20.888,0,0,0,4.79-4.324c.352-.422.689-.857,1.01-1.3.158-.22.317-.445.465-.669s.289-.44.447-.695q.93-1.473,1.752-3t1.544-3.1c.479-1.053.919-2.113,1.358-3.233a63.528,63.528,0,0,1,7.253-13.7c.186-.271.39-.539.59-.8s.4-.535.608-.8c.424-.523.839-1.049,1.291-1.556.436-.517.913-1.012,1.38-1.509l.733-.731c.245-.246.511-.475.762-.713s.523-.467.794-.695.541-.451.818-.661c.546-.434,1.123-.843,1.7-1.243a26.5,26.5,0,0,1,3.738-2.115,28.687,28.687,0,0,1,4.023-1.509,34.566,34.566,0,0,1,4.108-.895c1.366-.2,2.721-.327,4.061-.4.337-.02.669-.024,1-.038s.655-.03,1.024-.022l1.077.008,1.069.059a32.6,32.6,0,0,1,15.875,5.488c.293.2.58.414.871.622l.435.313c.143.107.281.222.422.333l.838.675.808.717.4.36.386.382.766.766.731.808.36.406.342.424.681.853.636.891.315.449.293.463.578.933.527.966.259.483c.083.166.156.333.236.5l.461,1c.145.337.271.681.406,1.022.283.677.489,1.38.713,2.077.119.348.19.7.285,1.057s.182.709.26,1.063a30.392,30.392,0,0,1,.578,4.3l.059,1.077C578.028,44.945,578.022,45.3,578.024,45.658Z" transform="translate(-476.02 -16.091)" fill="#fff"/>
            </g>
          </g>
        </g>
      </g>
      <text id="_America_" 
                data-name="Americas
                Cloobot TechLabs Americas
                Cheyenne 30 N Gould St, STE 4000 Sheridan, Wyoming" 
                transform="translate(31 29)" 
                fill="#000" 
                fontSize="20" 
                fontFamily="Lato-Bold, Lato" 
                fontWeight="700" textAnchor="middle" y="115">
                <tspan x="40">Americas</tspan>
                <tspan x="40" dy="25">Cloobot TechLabs Americas</tspan>
                <tspan x="40" dy="25">Cheyenne 30 N Gould St, </tspan>
                <tspan x="40" dy="25">STE 4000 Sheridan,</tspan> 
                <tspan x="40" dy="25">Wyoming</tspan>
                <tspan x="31.5" y="20"></tspan></text>
    </g>
    <defs>
      <filter id="Ellipse_638" x="-140" y="-50" width="500" height="500" filterUnits="userSpaceOnUse">
        <feOffset input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="20" result="blur"/>
        <feFlood floodColor="#06f455"/>
        <feComposite operator="in" in2="blur"/>
        <feComposite in="SourceGraphic"/>
      </filter>
    </defs>
    <g id="Component_17_1" data-name="Component 17 – 1" 
          transform="translate(1027 2133)" 
          filter="url(#Ellipse_638)" 
          style={{transition: "ease-in 0.2s"}}
          onMouseOver={e =>this.changeCircle(e)}
          onMouseOut={e =>this.changeCircleNormal(e)}>
      <g id="Group_382" data-name="Group 382" transform="translate(13 13)">
        <circle id="Ellipse_638" data-name="Ellipse 638" cx="54.5" cy="54.5" r="54.5" transform="translate(-13 -13)" fill="#06ff59" 
          style={{transition: "ease-in 0.2s"}}
          onMouseOver={e =>this.changeCircle(e)}
          onMouseOut={e =>this.changeCircleNormal(e)}
        />
        <g id="Group_380" data-name="Group 380" transform="translate(9.707 23)">
          <g id="Group_373-2" data-name="Group 373" transform="translate(27.177 26.485)">
            <g id="Group_11-2" data-name="Group 11">
              <g id="Group_10-2" data-name="Group 10">
                <path id="Path_4-2" data-name="Path 4" d="M498.641,38.624h0a.513.513,0,1,0-.551-.472A.513.513,0,0,0,498.642,38.624Z" transform="translate(-498.09 -37.599)" fill="#fff"/>
              </g>
            </g>
          </g>
          <g id="Group_374-2" data-name="Group 374" transform="translate(28.851 28.624)">
            <g id="Group_14-2" data-name="Group 14">
              <g id="Group_13-2" data-name="Group 13">
                <path id="Path_5-2" data-name="Path 5" d="M500.551,41.385h0a1.026,1.026,0,1,0-1.1-.943A1.027,1.027,0,0,0,500.555,41.385Z" transform="translate(-499.448 -39.335)" fill="#fff"/>
              </g>
            </g>
          </g>
          <g id="Group_375-2" data-name="Group 375" transform="translate(31.877 31.022)">
            <g id="Group_17-2" data-name="Group 17">
              <g id="Group_16-2" data-name="Group 16">
                <path id="Path_6-2" data-name="Path 6" d="M503.561,44.357h0a1.539,1.539,0,1,0-1.655-1.414A1.54,1.54,0,0,0,503.566,44.357Z" transform="translate(-501.906 -41.283)" fill="#fff"/>
              </g>
            </g>
          </g>
          <g id="Group_376-2" data-name="Group 376" transform="translate(36.887 32.561)">
            <g id="Group_20-2" data-name="Group 20">
              <g id="Group_19-2" data-name="Group 19">
                <path id="Path_7-2" data-name="Path 7" d="M508.18,46.631h.006a2.229,2.229,0,1,0-.006,0Z" transform="translate(-505.975 -42.533)" fill="#fff"/>
              </g>
            </g>
          </g>
          <g id="Group_377-2" data-name="Group 377" transform="translate(0 0)">
            <g id="Group_8-2" data-name="Group 8">
              <g id="Group_7-2" data-name="Group 7">
                <path id="Path_3-2" data-name="Path 3" d="M539.461,34.48c0,.22,0,.443-.009.665l-.041.659-.021.329-.011.165-.02.163-.078.65c-.048.425-.128.885-.217,1.331a18.035,18.035,0,0,1-1.883,5.067,19.167,19.167,0,0,1-3.188,4.269,20.167,20.167,0,0,1-4.2,3.25,18.216,18.216,0,0,1-2.4,1.171,18.636,18.636,0,0,1-2.563.816,17.343,17.343,0,0,1-2.64.425l-.028,0h-.009a2.736,2.736,0,0,1-.491-5.449,12.848,12.848,0,0,0,1.828-.344,14.079,14.079,0,0,0,6.432-3.846,13.382,13.382,0,0,0,3.524-6.516c.058-.3.111-.59.145-.924l.062-.483.015-.121.007-.122.016-.24.033-.48c.01-.16,0-.319.008-.477s0-.319,0-.477l-.026-.473a13.966,13.966,0,0,0-.234-1.851c-.031-.151-.072-.3-.106-.449s-.064-.3-.115-.446c-.094-.292-.17-.59-.288-.872a12.361,12.361,0,0,0-4.526-5.763,14.917,14.917,0,0,0-3.4-1.788c-.3-.122-.609-.211-.915-.315l-.467-.131c-.079-.02-.155-.044-.234-.064l-.235-.053a13.52,13.52,0,0,0-1.9-.315l-.474-.042-.473-.018c-.15-.01-.334,0-.5,0s-.347,0-.518,0c-.687.018-1.364.057-2.025.134a17.168,17.168,0,0,0-1.923.337,12.653,12.653,0,0,0-1.8.591,11.587,11.587,0,0,0-1.686.863c-.272.171-.543.346-.809.541-.136.092-.264.192-.391.291s-.257.195-.383.3-.254.206-.377.319l-.371.334c-.241.234-.488.462-.72.713s-.465.5-.694.756c-.115.129-.223.265-.335.4s-.224.265-.331.4a32.169,32.169,0,0,0-2.4,3.512c-.731,1.241-1.394,2.528-2.013,3.865-.324.706-.675,1.437-1.049,2.148s-.776,1.415-1.2,2.1-.867,1.355-1.331,2.008c-.112.158-.241.34-.37.509s-.26.336-.393.5c-.266.326-.543.644-.828.952a16.434,16.434,0,0,1-3.975,3.183,12.76,12.76,0,0,1-1.18.579,12.328,12.328,0,0,1-1.254.454,10.194,10.194,0,0,1-2.66.422,10.985,10.985,0,0,1-2.622-.257,13.265,13.265,0,0,1-2.446-.784,13.737,13.737,0,0,1-4.2-2.821,11.926,11.926,0,0,1-2.788-4.252,11.793,11.793,0,0,1-.632-2.478,12.407,12.407,0,0,1-.1-2.538,12.035,12.035,0,0,1,1.38-4.863,12.513,12.513,0,0,1,3.207-3.893c.167-.128.332-.262.5-.387s.344-.246.523-.36a12.37,12.37,0,0,1,1.1-.635c.19-.094.378-.193.575-.275s.388-.174.589-.248l.3-.112.3-.1c.1-.032.2-.066.3-.1l.31-.084a11.25,11.25,0,0,1,2.543-.36,12.47,12.47,0,0,1,2.516.191,10.266,10.266,0,0,1,2.46.775,8.19,8.19,0,0,1,2.165,1.483,7.6,7.6,0,0,1,1.538,2.093,8.138,8.138,0,0,1,.5,1.241.227.227,0,0,1-.01.164l-.7,1.521a.227.227,0,0,1-.415-.006c-.178-.424-.394-.919-.489-1.111a8.112,8.112,0,0,0-.507-.882,7.3,7.3,0,0,0-.611-.781,5.925,5.925,0,0,0-.713-.66,6.271,6.271,0,0,0-1.681-.951,8.007,8.007,0,0,0-1.924-.472c-.334-.038-.671-.068-1.012-.076s-.687,0-1.026.015a9.446,9.446,0,0,0-1.963.335l-.241.066c-.08.025-.159.053-.238.079l-.239.08-.234.092c-.158.055-.312.124-.466.192s-.3.143-.456.217c-.3.15-.592.32-.879.5-.144.089-.281.187-.422.28s-.272.2-.41.3a10.239,10.239,0,0,0-2.654,3.039,8.889,8.889,0,0,0-1.155,3.84,8.71,8.71,0,0,0,.667,3.939,9.352,9.352,0,0,0,2.316,3.24,10.662,10.662,0,0,0,1.616,1.213,10.4,10.4,0,0,0,3.744,1.4c.161.033.325.046.486.068s.324.027.485.039a7.9,7.9,0,0,0,.952-.01,7.036,7.036,0,0,0,1.823-.384,8.755,8.755,0,0,0,1.719-.851,12.992,12.992,0,0,0,2.979-2.689c.219-.262.428-.533.628-.809.1-.137.2-.277.289-.416s.18-.273.278-.432q.578-.916,1.09-1.866t.96-1.926c.3-.655.572-1.314.845-2.011a39.5,39.5,0,0,1,4.511-8.523c.116-.169.242-.335.367-.5s.247-.332.378-.5c.264-.325.522-.653.8-.968s.568-.629.858-.938l.456-.454c.153-.153.318-.3.474-.443s.325-.291.494-.432.336-.281.509-.411c.34-.27.7-.525,1.06-.773a16.48,16.48,0,0,1,2.325-1.315,17.842,17.842,0,0,1,2.5-.938,21.494,21.494,0,0,1,2.555-.557c.85-.127,1.692-.2,2.526-.251.209-.012.416-.015.625-.023s.407-.018.636-.014l.67,0,.665.037a20.276,20.276,0,0,1,9.874,3.414c.182.126.361.257.542.387l.271.195c.089.066.175.138.263.207l.521.42.5.446.249.224.24.238.477.477.454.5.224.252.213.264.424.531.4.554.2.28.182.288.359.58.328.6.161.3c.052.1.1.207.147.31l.287.621c.09.209.169.424.253.635.176.421.3.858.443,1.292.074.217.118.438.177.658s.113.441.161.661a18.9,18.9,0,0,1,.36,2.675l.037.67C539.464,34.037,539.46,34.258,539.461,34.48Z" transform="translate(-476.02 -16.091)" fill="#fff"/>
              </g>
            </g>
          </g>
        </g>
      </g>
      <text id="_United_Kingdom_" 
      data-name="United Kingdom Cloobot TechLabs UK Kemp House, 160 City Road, London, United Kingdom, EC1V 2NX" 
      transform="translate(13 36)" 
      fill="#003a8e" 
      fontSize="20" 
      fontFamily="Lato-Regular, Lato" 
      letterSpacing="0.055em" textAnchor="middle" y="60">
      <tspan x="40" dy="25">United Kingdom</tspan>
      <tspan x="40" dy="25">Cloobot TechLabs UK</tspan>
      <tspan x="40" dy="25">Kemp House, </tspan>
      <tspan x="40" dy="25">160 City Road, </tspan>
      <tspan x="40" dy="25">London, </tspan>
      <tspan x="40" dy="25">United Kingdom, </tspan>
      <tspan x="40" dy="25">EC1V 2NX</tspan></text>
    </g>

    <defs>
      <filter id="Path_4680" x="-175" y="-50" width="500" height="500" filterUnits="userSpaceOnUse">
        <feOffset input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="20" result="blur"/>
        <feFlood floodColor="#06f455"/>
        <feComposite operator="in" in2="blur"/>
        <feComposite in="SourceGraphic"/>
      </filter>
    </defs>

    <g id="Component_18_1" data-name="Component 18 – 1" 
        transform="translate(1272 2365)" 
        style={{transition: "ease-in 0.2s"}}
        onMouseOver={e =>this.changeCircle(e)}
        onMouseOut={e =>this.changeCircleNormal(e)}
        filter="url(#Path_4680)">
      <circle id="Path_4680" data-name="Path 4680" cx="22" cy="22" r="22" fill="#06ff59"
        style={{transition: "ease-in 0.2s"}}
        onMouseOver={e =>this.changeCircle(e)}
        onMouseOut={e =>this.changeCircleNormal(e)}
      />
      <text id="_Asia_Cloobot_TechLabs_India_" data-name="Asia Cloobot TechLabs India"
      transform="translate(12 13)" 
      fill="#212121" 
      fontSize="20" 
      fontFamily="Lato-Regular, Lato" 
      letterSpacing="0.055em"
      textAnchor="middle" y="40">
      <tspan x="12" dy="25">Asia</tspan>
      <tspan x="12" dy="25">Cloobot TechLabs</tspan>
      <tspan x="12" dy="25">India</tspan>
      </text>
      <g id="Group_481" data-name="Group 481" transform="translate(-1234.413 -236.5)">
        <g id="Group_373-4" data-name="Group 373" transform="translate(1252.894 262.754)">
          <g id="Group_11-4" data-name="Group 11">
            <g id="Group_10-4" data-name="Group 10">
              <path id="Path_4-4" data-name="Path 4" d="M498.334,38.054h0a.228.228,0,1,0-.244-.209A.228.228,0,0,0,498.335,38.054Z" transform="translate(-498.09 -37.599)" fill="#fff"/>
            </g>
          </g>
        </g>
        <g id="Group_374-4" data-name="Group 374" transform="translate(1253.637 263.703)">
          <g id="Group_14-4" data-name="Group 14">
            <g id="Group_13-4" data-name="Group 13">
              <path id="Path_5-4" data-name="Path 5" d="M499.938,40.245h0a.456.456,0,1,0-.49-.419A.456.456,0,0,0,499.94,40.245Z" transform="translate(-499.448 -39.335)" fill="#fff"/>
            </g>
          </g>
        </g>
        <g id="Group_375-4" data-name="Group 375" transform="translate(1254.98 264.767)">
          <g id="Group_17-4" data-name="Group 17">
            <g id="Group_16-4" data-name="Group 16">
              <path id="Path_6-4" data-name="Path 6" d="M502.641,42.647h0a.683.683,0,1,0-.734-.627A.684.684,0,0,0,502.643,42.647Z" transform="translate(-501.906 -41.283)" fill="#fff"/>
            </g>
          </g>
        </g>
        <g id="Group_376-4" data-name="Group 376" transform="translate(1257.203 265.45)">
          <g id="Group_20-4" data-name="Group 20">
            <g id="Group_19-4" data-name="Group 19">
              <path id="Path_7-4" data-name="Path 7" d="M506.954,44.352h0a.911.911,0,1,0-.979-.837A.911.911,0,0,0,506.956,44.352Z" transform="translate(-505.975 -42.533)" fill="#fff"/>
            </g>
          </g>
        </g>
        <g id="Group_377-4" data-name="Group 377" transform="translate(1240.833 251)">
          <g id="Group_8-4" data-name="Group 8">
            <g id="Group_7-4" data-name="Group 7">
              <path id="Path_3-4" data-name="Path 3" d="M504.174,24.252c0,.1,0,.2,0,.3l-.018.292-.009.146,0,.073-.009.072-.034.289c-.021.189-.057.393-.1.591a8,8,0,0,1-.836,2.249,8.5,8.5,0,0,1-1.415,1.895,8.947,8.947,0,0,1-1.862,1.442,8.081,8.081,0,0,1-1.067.52,8.265,8.265,0,0,1-1.137.362,7.7,7.7,0,0,1-1.172.189h-.016a1.214,1.214,0,0,1-.218-2.418,5.7,5.7,0,0,0,.811-.152,6.248,6.248,0,0,0,2.854-1.707,5.938,5.938,0,0,0,1.564-2.891c.026-.133.049-.262.064-.41l.027-.214.007-.054,0-.054.007-.107.015-.213c0-.071,0-.142,0-.211s0-.142,0-.211l-.012-.21a6.19,6.19,0,0,0-.1-.821c-.014-.067-.032-.133-.047-.2s-.028-.134-.051-.2c-.042-.13-.075-.262-.128-.387a5.485,5.485,0,0,0-2.009-2.558,6.62,6.62,0,0,0-1.509-.793c-.133-.054-.271-.093-.406-.14l-.207-.058-.1-.028-.1-.024a6,6,0,0,0-.841-.14l-.21-.019-.21-.008c-.067,0-.148,0-.224,0s-.154,0-.23,0c-.3.008-.606.025-.9.06a7.619,7.619,0,0,0-.854.15,5.616,5.616,0,0,0-.8.262,5.141,5.141,0,0,0-.748.383c-.121.076-.241.154-.359.24-.06.041-.117.085-.173.129s-.114.086-.17.134-.113.091-.167.142l-.165.148c-.107.1-.216.2-.32.316s-.207.222-.308.336c-.051.057-.1.117-.149.177s-.1.117-.147.179a14.274,14.274,0,0,0-1.065,1.559c-.325.551-.619,1.122-.894,1.715-.144.313-.3.638-.466.953s-.344.628-.531.932-.385.6-.591.891c-.05.07-.107.151-.164.226s-.115.149-.174.222c-.118.145-.241.286-.367.422a7.292,7.292,0,0,1-1.764,1.413,5.665,5.665,0,0,1-.524.257,5.476,5.476,0,0,1-.556.2,4.524,4.524,0,0,1-1.18.187,4.875,4.875,0,0,1-1.163-.114,5.888,5.888,0,0,1-1.085-.348,6.1,6.1,0,0,1-1.866-1.252,5.291,5.291,0,0,1-1.237-1.887,5.233,5.233,0,0,1-.28-1.1,5.51,5.51,0,0,1-.043-1.126,5.339,5.339,0,0,1,.613-2.158,5.552,5.552,0,0,1,1.423-1.727c.074-.057.148-.116.224-.172s.152-.109.232-.16a5.48,5.48,0,0,1,.489-.282c.084-.042.168-.086.255-.122s.172-.077.261-.11l.133-.05.135-.044.135-.043.138-.037a4.992,4.992,0,0,1,1.129-.16,5.534,5.534,0,0,1,1.116.085,4.556,4.556,0,0,1,1.092.344,3.635,3.635,0,0,1,.961.658,3.37,3.37,0,0,1,.683.929,3.6,3.6,0,0,1,.223.551.1.1,0,0,1,0,.073l-.309.675a.1.1,0,0,1-.184,0c-.079-.188-.175-.408-.217-.493a3.6,3.6,0,0,0-.225-.391,3.24,3.24,0,0,0-.271-.346,2.626,2.626,0,0,0-.316-.293,2.783,2.783,0,0,0-.746-.422,3.554,3.554,0,0,0-.854-.209c-.148-.017-.3-.03-.449-.034s-.3,0-.455.007a4.193,4.193,0,0,0-.871.149l-.107.03-.105.035-.106.036-.1.041c-.07.025-.138.055-.207.085s-.135.063-.2.1c-.133.067-.263.142-.39.222-.064.039-.125.083-.187.124s-.121.089-.182.133A4.543,4.543,0,0,0,477.6,22.61a3.945,3.945,0,0,0-.513,1.7,3.865,3.865,0,0,0,.3,1.748,4.15,4.15,0,0,0,1.028,1.438,4.732,4.732,0,0,0,.717.538,4.614,4.614,0,0,0,1.661.623c.072.015.144.02.216.03s.144.012.215.017a3.5,3.5,0,0,0,.422,0,3.122,3.122,0,0,0,.809-.171,3.885,3.885,0,0,0,.763-.378,5.765,5.765,0,0,0,1.322-1.194c.1-.116.19-.237.279-.359.044-.061.087-.123.128-.185s.08-.121.124-.192q.257-.407.484-.828t.426-.855c.132-.291.254-.583.375-.892a17.532,17.532,0,0,1,2-3.782c.051-.075.108-.149.163-.222s.11-.148.168-.22c.117-.144.232-.29.356-.43s.252-.279.381-.416l.2-.2c.068-.068.141-.131.21-.2s.144-.129.219-.192.149-.125.226-.183c.151-.12.31-.233.47-.343a7.313,7.313,0,0,1,1.032-.584,7.917,7.917,0,0,1,1.11-.416,9.539,9.539,0,0,1,1.134-.247c.377-.056.751-.09,1.121-.111.093-.005.185-.007.277-.01s.181-.008.283-.006l.3,0,.3.016a9,9,0,0,1,4.382,1.515c.081.056.16.114.24.172l.12.086c.039.03.078.061.116.092l.231.186.223.2.11.1.107.105.212.211.2.223.1.112.095.117.188.236.175.246.087.124.081.128.16.257.145.267.072.133c.023.046.043.092.065.138l.127.275c.04.093.075.188.112.282.078.187.135.381.2.573.033.1.052.195.079.292s.05.2.072.293a8.387,8.387,0,0,1,.16,1.187l.016.3C504.175,24.055,504.173,24.153,504.174,24.252Z" transform="translate(-476.02 -16.091)" fill="#fff"/>
            </g>
          </g>
        </g>
      </g>
    </g>
    <defs>
      <filter id="Ellipse_640" x="-175" y="-50" width="500" height="500" filterUnits="userSpaceOnUse">
        <feOffset input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="20" result="blur"/>
        <feFlood floodColor="#06f455"/>
        <feComposite operator="in" in2="blur"/>
        <feComposite in="SourceGraphic"/>
      </filter>
    </defs>
    <g id="Component_19_1" data-name="Component 19 – 1" transform="translate(911 2116)" filter="url(#Ellipse_640)" 
    style={{transition: "ease-in 0.2s"}}
        onMouseOver={e =>this.changeCircle(e)}
        onMouseOut={e =>this.changeCircleNormal(e)}>
      <circle id="Ellipse_640" data-name="Ellipse 640" cx="22" cy="22" r="22" fill="#06ff59"
        style={{transition: "ease-in 0.2s"}}
        onMouseOver={e =>this.changeCircle(e)}
        onMouseOut={e =>this.changeCircleNormal(e)} />
      <text id="_United_Kingdom_EC1V_2NX_2" 
      data-name=" United Kingdom Cloobot TechLabs UK Kemp House, 160 City Road, London, United Kingdom, EC1V 2NX" 
      transform="translate(12 13)" 
      fill="#212121" 
      fontSize="20" 
      fontFamily="Lato-Regular, Lato" 
      letterSpacing="0.055em"
      textAnchor="middle" y="40">
      <tspan x="20" dy="25">United Kingdom</tspan>
      <tspan x="20" dy="25">Cloobot TechLabs UK</tspan>
      <tspan x="20" dy="25">Kemp House, </tspan>
      <tspan x="20" dy="25">160 City Road, </tspan>
      <tspan x="20" dy="25">London, </tspan>
      <tspan x="20" dy="25">United Kingdom, </tspan>
      <tspan x="20" dy="25">EC1V 2NX</tspan>
      </text>
      <g id="Group_481" data-name="Group 481" transform="translate(-1234.413 -236.5)">
        <g id="Group_373-4" data-name="Group 373" transform="translate(1252.894 262.754)">
          <g id="Group_11-4" data-name="Group 11">
            <g id="Group_10-4" data-name="Group 10">
              <path id="Path_41-4" data-name="Path 4" d="M498.334,38.054h0a.228.228,0,1,0-.244-.209A.228.228,0,0,0,498.335,38.054Z" transform="translate(-498.09 -37.599)" fill="#fff"/>
            </g>
          </g>
        </g>
        <g id="Group_374-4" data-name="Group 374" transform="translate(1253.637 263.703)">
          <g id="Group_14-4" data-name="Group 14">
            <g id="Group_13-4" data-name="Group 13">
              <path id="Path_51-4" data-name="Path 5" d="M499.938,40.245h0a.456.456,0,1,0-.49-.419A.456.456,0,0,0,499.94,40.245Z" transform="translate(-499.448 -39.335)" fill="#fff"/>
            </g>
          </g>
        </g>
        <g id="Group_375-4" data-name="Group 375" transform="translate(1254.98 264.767)">
          <g id="Group_17-4" data-name="Group 17">
            <g id="Group_16-4" data-name="Group 16">
              <path id="Path_61-4" data-name="Path 6" d="M502.641,42.647h0a.683.683,0,1,0-.734-.627A.684.684,0,0,0,502.643,42.647Z" transform="translate(-501.906 -41.283)" fill="#fff"/>
            </g>
          </g>
        </g>
        <g id="Group_376-4" data-name="Group 376" transform="translate(1257.203 265.45)">
          <g id="Group_20-4" data-name="Group 20">
            <g id="Group_19-4" data-name="Group 19">
              <path id="Path_71-4" data-name="Path 7" d="M506.954,44.352h0a.911.911,0,1,0-.979-.837A.911.911,0,0,0,506.956,44.352Z" transform="translate(-505.975 -42.533)" fill="#fff"/>
            </g>
          </g>
        </g>
        <g id="Group_377-4" data-name="Group 377" transform="translate(1240.833 251)">
          <g id="Group_8-4" data-name="Group 8">
            <g id="Group_7-4" data-name="Group 7">
              <path id="Path_31-4" data-name="Path 3" d="M504.174,24.252c0,.1,0,.2,0,.3l-.018.292-.009.146,0,.073-.009.072-.034.289c-.021.189-.057.393-.1.591a8,8,0,0,1-.836,2.249,8.5,8.5,0,0,1-1.415,1.895,8.947,8.947,0,0,1-1.862,1.442,8.081,8.081,0,0,1-1.067.52,8.265,8.265,0,0,1-1.137.362,7.7,7.7,0,0,1-1.172.189h-.016a1.214,1.214,0,0,1-.218-2.418,5.7,5.7,0,0,0,.811-.152,6.248,6.248,0,0,0,2.854-1.707,5.938,5.938,0,0,0,1.564-2.891c.026-.133.049-.262.064-.41l.027-.214.007-.054,0-.054.007-.107.015-.213c0-.071,0-.142,0-.211s0-.142,0-.211l-.012-.21a6.19,6.19,0,0,0-.1-.821c-.014-.067-.032-.133-.047-.2s-.028-.134-.051-.2c-.042-.13-.075-.262-.128-.387a5.485,5.485,0,0,0-2.009-2.558,6.62,6.62,0,0,0-1.509-.793c-.133-.054-.271-.093-.406-.14l-.207-.058-.1-.028-.1-.024a6,6,0,0,0-.841-.14l-.21-.019-.21-.008c-.067,0-.148,0-.224,0s-.154,0-.23,0c-.3.008-.606.025-.9.06a7.619,7.619,0,0,0-.854.15,5.616,5.616,0,0,0-.8.262,5.141,5.141,0,0,0-.748.383c-.121.076-.241.154-.359.24-.06.041-.117.085-.173.129s-.114.086-.17.134-.113.091-.167.142l-.165.148c-.107.1-.216.2-.32.316s-.207.222-.308.336c-.051.057-.1.117-.149.177s-.1.117-.147.179a14.274,14.274,0,0,0-1.065,1.559c-.325.551-.619,1.122-.894,1.715-.144.313-.3.638-.466.953s-.344.628-.531.932-.385.6-.591.891c-.05.07-.107.151-.164.226s-.115.149-.174.222c-.118.145-.241.286-.367.422a7.292,7.292,0,0,1-1.764,1.413,5.665,5.665,0,0,1-.524.257,5.476,5.476,0,0,1-.556.2,4.524,4.524,0,0,1-1.18.187,4.875,4.875,0,0,1-1.163-.114,5.888,5.888,0,0,1-1.085-.348,6.1,6.1,0,0,1-1.866-1.252,5.291,5.291,0,0,1-1.237-1.887,5.233,5.233,0,0,1-.28-1.1,5.51,5.51,0,0,1-.043-1.126,5.339,5.339,0,0,1,.613-2.158,5.552,5.552,0,0,1,1.423-1.727c.074-.057.148-.116.224-.172s.152-.109.232-.16a5.48,5.48,0,0,1,.489-.282c.084-.042.168-.086.255-.122s.172-.077.261-.11l.133-.05.135-.044.135-.043.138-.037a4.992,4.992,0,0,1,1.129-.16,5.534,5.534,0,0,1,1.116.085,4.556,4.556,0,0,1,1.092.344,3.635,3.635,0,0,1,.961.658,3.37,3.37,0,0,1,.683.929,3.6,3.6,0,0,1,.223.551.1.1,0,0,1,0,.073l-.309.675a.1.1,0,0,1-.184,0c-.079-.188-.175-.408-.217-.493a3.6,3.6,0,0,0-.225-.391,3.24,3.24,0,0,0-.271-.346,2.626,2.626,0,0,0-.316-.293,2.783,2.783,0,0,0-.746-.422,3.554,3.554,0,0,0-.854-.209c-.148-.017-.3-.03-.449-.034s-.3,0-.455.007a4.193,4.193,0,0,0-.871.149l-.107.03-.105.035-.106.036-.1.041c-.07.025-.138.055-.207.085s-.135.063-.2.1c-.133.067-.263.142-.39.222-.064.039-.125.083-.187.124s-.121.089-.182.133A4.543,4.543,0,0,0,477.6,22.61a3.945,3.945,0,0,0-.513,1.7,3.865,3.865,0,0,0,.3,1.748,4.15,4.15,0,0,0,1.028,1.438,4.732,4.732,0,0,0,.717.538,4.614,4.614,0,0,0,1.661.623c.072.015.144.02.216.03s.144.012.215.017a3.5,3.5,0,0,0,.422,0,3.122,3.122,0,0,0,.809-.171,3.885,3.885,0,0,0,.763-.378,5.765,5.765,0,0,0,1.322-1.194c.1-.116.19-.237.279-.359.044-.061.087-.123.128-.185s.08-.121.124-.192q.257-.407.484-.828t.426-.855c.132-.291.254-.583.375-.892a17.532,17.532,0,0,1,2-3.782c.051-.075.108-.149.163-.222s.11-.148.168-.22c.117-.144.232-.29.356-.43s.252-.279.381-.416l.2-.2c.068-.068.141-.131.21-.2s.144-.129.219-.192.149-.125.226-.183c.151-.12.31-.233.47-.343a7.313,7.313,0,0,1,1.032-.584,7.917,7.917,0,0,1,1.11-.416,9.539,9.539,0,0,1,1.134-.247c.377-.056.751-.09,1.121-.111.093-.005.185-.007.277-.01s.181-.008.283-.006l.3,0,.3.016a9,9,0,0,1,4.382,1.515c.081.056.16.114.24.172l.12.086c.039.03.078.061.116.092l.231.186.223.2.11.1.107.105.212.211.2.223.1.112.095.117.188.236.175.246.087.124.081.128.16.257.145.267.072.133c.023.046.043.092.065.138l.127.275c.04.093.075.188.112.282.078.187.135.381.2.573.033.1.052.195.079.292s.05.2.072.293a8.387,8.387,0,0,1,.16,1.187l.016.3C504.175,24.055,504.173,24.153,504.174,24.252Z" transform="translate(-476.02 -16.091)" fill="#fff"/>
            </g>
          </g>
        </g>
      </g>
    </g>
  </g>
</svg> )}
}

class Gallery extends React.Component {
    responsive = {
        0: { items: 1 },
        1024: { items: 5 },
    }

    render() {
        return (
            <AliceCarousel
                showSlideInfo={false}
                responsive={this.responsive}
                infinite={false}
                buttonsDisabled={false}
                dotsDisabled={true}
                fadeOutAnimation={true}
                stagePadding={this.stagePadding} >
                <div className="item">
                    <div className="card">
                        <img className="card-img-top" alt="text" src="../../images/About_us/harishan-kobalasingam-8PMvB4VyVXA-unsplash.png" />
                        <div className="card-body ">
                            <h5 className="card-title">Name Surname</h5>
                            <h6 className="card-subtitle">Card subtitle</h6>
                            <p className="card-text">Description, in detail, etc. etc. and other details relevant to the profession of this person.</p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                        <img className="card-img-top" alt="text" src="../../images/About_us/stefan-stefancik-QXevDflbl8A-unsplash.png" />
                        <div className="card-body ">
                            <h5 className="card-title">Name Surname</h5>
                            <h6 className="card-subtitle">Card subtitle</h6>
                            <p className="card-text">Description, in detail, etc. etc. and other details relevant to the profession of this person.</p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                        <img className="card-img-top" alt="text" src="../../images/About_us/reza-biazar-eSjmZW97cH8-unsplash.png" />
                        <div className="card-body ">
                            <h5 className="card-title">Name Surname</h5>
                            <h6 className="card-subtitle">Card subtitle</h6>
                            <p className="card-text">Description, in detail, etc. etc. and other details relevant to the profession of this person.</p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                        <img className="card-img-top" alt="text" src="../../images/About_us/radu-florin-JyVcAIUAcPM-unsplash.png" />
                        <div className="card-body ">
                            <h5 className="card-title">Name Surname</h5>
                            <h6 className="card-subtitle">Card subtitle</h6>
                            <p className="card-text">Description, in detail, etc. etc. and other details relevant to the profession of this person.</p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                        <img className="card-img-top" alt="text" src="../../images/About_us/lindie-wilton-OhpBXJYMxpo-unsplash.png" />
                        <div className="card-body">
                            <h5 className="card-title">Name Surname</h5>
                            <h6 className="card-subtitle">Card subtitle</h6>
                            <p className="card-text">Description, in detail, etc. etc. and other details relevant to the profession of this person.</p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                        <img className="card-img-top" alt="text" src="../../images/About_us/stefan-stefancik-QXevDflbl8A-unsplash.png" />
                        <div className="card-body ">
                            <h5 className="card-title">Name Surname</h5>
                            <h6 className="card-subtitle">Card subtitle</h6>
                            <p className="card-text">Description, in detail, etc. etc. and other details relevant to the profession of this person.</p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                        <img className="card-img-top" alt="text" src="../../images/About_us/reza-biazar-eSjmZW97cH8-unsplash.png" />
                        <div className="card-body ">
                            <h5 className="card-title">Name Surname</h5>
                            <h6 className="card-subtitle">Card subtitle</h6>
                            <p className="card-text">Description, in detail, etc. etc. and other details relevant to the profession of this person.</p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                        <img className="card-img-top" alt="text" src="../../images/About_us/radu-florin-JyVcAIUAcPM-unsplash.png" />
                        <div className="card-body ">
                            <h5 className="card-title">Name Surname</h5>
                            <h6 className="card-subtitle">Card subtitle</h6>
                            <p className="card-text">Description, in detail, etc. etc. and other details relevant to the profession of this person.</p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                        <img className="card-img-top" alt="text" src="../../images/About_us/lindie-wilton-OhpBXJYMxpo-unsplash.png" />
                        <div className="card-body ">
                            <h5 className="card-title">Name Surname</h5>
                            <h6 className="card-subtitle">Card subtitle</h6>
                            <p className="card-text">Description, in detail, etc. etc. and other details relevant to the profession of this person.</p>
                        </div>
                    </div>
                </div>
            </AliceCarousel>
        )
    }
}

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideNav:null
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({
        hideNav: window.innerWidth <= 768
    });
}
    render() {
        return (
            <React.Fragment>
                <section className="pro-about-bg d-flex align-items-center">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-xl-6 col-lg-6 col-sm-12">
                            </div>
                            <div className="col-xl-6 col-lg-6 col-sm-12">
                                <div className="pro-about-right">
                                    <img src="../../images/About_us/about_logo.svg" className="img-fluid rounded" alt="About Logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pro-about-2 d-flex align-items-center">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-xl-6 col-lg-6 col-sm-12">
                              <div className="pro-about-details">
                                <h4 className="pro-about-title col">Welcome to</h4>
                                <h4 className="pro-about-title">Cloobot TechLabs</h4>
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-sm-12">
                                <div className="pro-about-details">
                                    <p className="pro-about-descriptions">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus. Aliquam volutpat ex eget elit venenatis, vel luctus arcu pulvinar.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pro-about-global d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-sm-12">
                                <div className="pro-map">
                                  <h2 className="title">We are global.</h2>
                                    <Globalmap />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="pro-about-team d-flex align-items-center">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-xl-12 col-lg-12 col-sm-12">
                                <h5 className="team-title">We Are Team</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-sm-12">
                                <Gallery />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pro-about-contact">
                    <Contact />
                </section>
            </React.Fragment>
        )
    }
}

export default About;