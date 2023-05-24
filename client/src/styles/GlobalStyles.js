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
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
input:-webkit-autofill
{
  border: none;
  border-bottom: 1px solid ${COLORS.MAIN};
  -webkit-text-fill-color: ${COLORS.MAIN};
  -webkit-box-shadow: 0 0 0px 1000px #000 inset;
  transition: background-color 5000s ease-in-out 0s;
  outline: none;
}
`;

export { GlobalStyles };
