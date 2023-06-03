import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants/colors';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }
  @font-face {
    font-family: FotRodin-M;
    src: url('/Fonts/fot-rodin-pro/FOTpro-m.otf');
}
@font-face {
    font-family: FotRodin-EB;
    src: url('/Fonts/fot-rodin-pro/FOTRodin-Pro-EB.otf');
}
@font-face {
    font-family: Red-Seven;
    src: url('/Fonts/red-seven/Red-Seven.otf');
}
@font-face {
    font-family: Digital7;
    src: url('/Fonts/digital_7/digital-7.ttf');
}
  img{
    display: block;
    max-width: 100%;
  }
  body{
    position: relative;
    margin: 0;
    font-family:FotRodin-M ;
    color: ${COLORS.WHITE};
   
  }
  body::before{
      content: '';
      position: fixed;
      
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      background: linear-gradient(180deg, #000000 0%, #151515 78.44%, #39C5BB 100%);
      z-index: -10;
  }
 

  a{
    text-decoration: none;
    color: inherit;
  }
  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
  /* width */
::-webkit-scrollbar {
  height: 3px;
  width: 5px;
  
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
 
  background: ${COLORS.MAIN};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
input:-webkit-autofill
{
  border: none;
  border-bottom: 1px solid ${COLORS.MAIN};
  -webkit-text-fill-color: ${COLORS.WHITE};
  -webkit-box-shadow: 0 0 0px 1000px #000 inset;
  transition: background-color 5000s ease-in-out 0s;
  outline: none;
  
}

/* input[type="range"] { 
    margin: 0;
    -webkit-appearance: none;
    position: relative;
    overflow: hidden;
    height: 10px;
    width: 70px;
    border: 2px solid #39C5BB;
    cursor: pointer;
    border-radius: 0.2rem; 
    background: transparent;
}

::-webkit-slider-runnable-track {
    background: transparent;
   
} */

/*
 * 1. Set to 0 width and remove border for a slider without a thumb
 * 2. Shadow is negative the full width of the input and has a spread 
 *    of the width of the input.
 */
/* ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 5px; 
    height: 10px;
    background: #fff;
    box-shadow: -200px 0 0 200px #39C5BB;
    border-radius: 0.5rem;
    
}

::-moz-range-track {
    height: 10px;
    background: transparent;
}

::-moz-range-thumb {
    background: #fff;
    height: 40px;
    width: 10px;
    box-shadow: -200px 0 0 200px #39C5BB;
    box-sizing: border-box;
}

::-ms-fill-lower { 
    background: #39C5BB;
}

::-ms-thumb { 
    background: #fff;
    border: 2px solid #999;
    height: 40px;
    width: 20px;
    box-sizing: border-box;
}

::-ms-ticks-after { 
    display: none; 
}

::-ms-ticks-before { 
    display: none; 
}

::-ms-track { 
    background: #39C5BB;
    color: transparent;
    height: 40px;
    border: none;
}

::-ms-tooltip { 
    display: none;
} */

`;

export { GlobalStyles };
