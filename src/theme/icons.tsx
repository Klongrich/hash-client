import { chakra, Icon } from '@chakra-ui/react';

export default function getIcons(
  name: string,
  boxSize = 6,
): JSX.Element | undefined {
  const MetaMask = (props: any) => (
    <Icon viewBox="30 0 260 260" {...props}>
      <path
        fill="#e2761b"
        stroke="#e2761b"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M274.1 35.5l-99.5 73.9L193 65.8z"
      />
      <path
        className="st1"
        fill="#e4761b"
        stroke="#e4761b"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M44.4 35.5l98.7 74.6-17.5-44.3zM238.3 206.8l-26.5 40.6 56.7 15.6 16.3-55.3zM33.9 207.7L50.1 263l56.7-15.6-26.5-40.6z"
      />
      <path
        className="st1"
        fill="#e4761b"
        stroke="#e4761b"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M103.6 138.2l-15.8 23.9 56.3 2.5-2-60.5zM214.9 138.2l-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zM177.9 230.9l33.9 16.5-4.7-39.3z"
      />
      <path
        className="st2"
        fill=" #d7c1b3"
        stroke=" #d7c1b3"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M211.8 247.4l-33.9-16.5 2.7 22.1-.3 9.3zM106.8 247.4l31.5 14.9-.2-9.3 2.5-22.1z"
      />
      <path
        className="st3"
        fill=" #233447"
        stroke=" #233447"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M138.8 193.5l-28.2-8.3 19.9-9.1zM179.7 193.5l8.3-17.4 20 9.1z"
      />
      <path
        className="st4"
        fill=" #cd6116"
        stroke=" #cd6116"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M106.8 247.4l4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zM230.8 162.1l-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zM110.6 185.2l20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z"
      />
      <g>
        <path
          className="st5"
          fill=" #e4751f"
          stroke=" #e4751f"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M87.8 162.1l23.6 46-.8-22.9zM208.1 185.2l-1 22.9 23.7-46zM144.1 164.6l-5.3 28.9 6.6 34.1 1.5-44.9zM174.6 164.6l-2.7 18 1.2 45 6.7-34.1z"
        />
      </g>
      <path
        className="st6"
        fill=" #f6851b"
        stroke=" #f6851b"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M179.8 193.5l-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zM110.6 185.2l.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z"
      />
      <path
        fill="#c0ad9e"
        stroke="#c0ad9e"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M180.3 262.3l.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z"
      />
      <path
        fill="#161616"
        stroke="#161616"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M177.9 230.9l-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z"
      />
      <g>
        <path
          className="st9"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill=" #763d16"
          stroke=" #763d16"
          d="M278.3 114.2l8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z"
        />
      </g>
      <path
        className="st6"
        fill=" #f6851b"
        stroke=" #f6851b"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M267.2 153.5l-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zM103.6 138.2l-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zM174.6 164.6l3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z"
      />
    </Icon>
  );
  const WalletConnect = (props: any) => (
    <Icon viewBox="0 0 300 185" {...props}>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="walletconnect-logo-alt" fill="#3B99FC" fillRule="nonzero">
          <path
            d="M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z"
            id="WalletConnect"
          ></path>
        </g>
      </g>
    </Icon>
  );
  const MagicIcon = (props: any) => (
    <Icon width="100" height="121" viewBox="0 0 100 121" {...props}>
      <path
        d="M49.924 0C55.1338 6.38079 60.8799 12.3065 67.0936 17.7082C62.9533 31.1371 60.7243 45.4043 60.7243 60.192C60.7243 74.9798 62.9533 89.2469 67.0936 102.676C60.8799 108.078 55.1338 114.003 49.924 120.384C44.7143 114.003 38.9681 108.078 32.7544 102.676C36.8948 89.2469 39.1237 74.9798 39.1237 60.192C39.1237 45.4043 36.8948 31.1371 32.7544 17.7082C38.9681 12.3065 44.7142 6.38079 49.924 0Z"
        fill="#6851FF"
      />
      <path
        d="M20.8776 93.3914C14.3004 88.7814 7.32005 84.7073 5.78998e-06 81.2325C2.03055 74.5769 3.12287 67.512 3.12287 60.192C3.12287 52.872 2.03055 45.8072 0 39.1516C7.32005 35.6768 14.3004 31.6026 20.8776 26.9926C23.3926 37.6506 24.7234 48.7659 24.7234 60.192C24.7234 71.6181 23.3926 82.7334 20.8776 93.3914Z"
        fill="#6851FF"
      />
      <path
        d="M75.1246 60.192C75.1246 71.6181 76.4554 82.7335 78.9704 93.3914C85.5476 88.7814 92.528 84.7073 99.848 81.2325C97.8175 74.5769 96.7252 67.512 96.7252 60.192C96.7252 52.872 97.8175 45.8072 99.848 39.1516C92.528 35.6767 85.5476 31.6026 78.9704 26.9926C76.4554 37.6506 75.1246 48.7659 75.1246 60.192Z"
        fill="#6851FF"
      />
    </Icon>
  );
  const Etherscan = (props: any) => (
    <Icon viewBox="0 0 293 293" color="#fff" {...props}>
      <g transform="translate(-219.378 -213.33)">
        <path d="M280.433,353.152A12.45,12.45,0,0,1,292.941,340.7l20.737.068a12.467,12.467,0,0,1,12.467,12.467v78.414c2.336-.692,5.332-1.43,8.614-2.2a10.389,10.389,0,0,0,8.009-10.11V322.073a12.469,12.469,0,0,1,12.468-12.47h20.778a12.469,12.469,0,0,1,12.467,12.467v90.279s5.2-2.106,10.269-4.245a10.408,10.408,0,0,0,6.353-9.577V290.9a12.466,12.466,0,0,1,12.466-12.467h20.778A12.468,12.468,0,0,1,450.815,290.9v88.625c18.014-13.055,36.271-28.758,50.759-47.639a20.926,20.926,0,0,0,3.185-19.537,146.6,146.6,0,0,0-136.644-99.006c-81.439-1.094-148.744,65.385-148.736,146.834a146.371,146.371,0,0,0,19.5,73.45,18.56,18.56,0,0,0,17.707,9.173c3.931-.346,8.825-.835,14.643-1.518a10.383,10.383,0,0,0,9.209-10.306V353.152" />
        <path
          d="M244.417,398.641A146.808,146.808,0,0,0,477.589,279.9c0-3.381-.157-6.724-.383-10.049-53.642,80-152.686,117.4-232.79,128.793"
          transform="translate(35.564 80.269)"
        />
      </g>
    </Icon>
  );
  const CoinbaseWallet = (props: any) => (
    <Icon viewBox="0 0 180 180" {...props}>
      <g>
        <rect
          fill="none"
          id="canvas_background"
          height="402"
          width="582"
          y="-1"
          x="-1"
        />
      </g>
      <g>
        <ellipse
          ry="53.999997"
          rx="53.5"
          id="svg_4"
          cy="90.453126"
          cx="90.999997"
          strokeWidth="1.5"
          fill="#fff"
        />
        <g
          id="svg_1"
          fill="#245cef"
          transform="translate(0,180) scale(0.10000000149011612,-0.10000000149011612) "
        >
          <path
            id="svg_2"
            d="m785,1789c-140,-18 -307,-85 -415,-164c-84,-61 -202,-196 -252,-286c-308,-557 36,-1242 667,-1330c417,-58 837,207 969,613c77,237 45,516 -83,738c-58,100 -220,261 -314,312c-187,102 -385,142 -572,117zm205,-369c190,-31 358,-181 418,-374c22,-73 21,-226 -2,-296c-59,-174 -177,-295 -344,-351c-87,-30 -231,-32 -312,-5c-174,59 -295,177 -351,344c-18,51 -23,89 -23,162c1,155 45,263 154,372c126,126 282,176 460,148z"
          />
          <path
            id="svg_3"
            d="m746,1054c-23,-23 -23,-285 0,-308c23,-23 285,-23 308,0c23,23 23,285 0,308c-23,23 -285,23 -308,0z"
          />
        </g>
      </g>
    </Icon>
  );
  const WalletIcon = (props: any) => (
    <Icon viewBox="0 0 890 890" {...props}>
      <path
        fill="currentColor"
        d="M208.1 180.56l355-96.9-18.8-38c-12.3-24.7-42.3-34.9-67-22.6l-317.8 157.5h48.6zM673.3 86.46c-4.399 0-8.8.6-13.2 1.8l-83.399 22.8L322 180.56h415.1l-15.6-57.2c-6-22.3-26.2-36.9-48.2-36.9zM789.2 215.56H50.1c-15.8 0-29.9 7.3-39.1 18.8-4.2 5.3-7.4 11.4-9.2 18.1-1.1 4.2-1.8 8.6-1.8 13.1v557.1c0 27.601 22.4 50 50 50h739.1c27.601 0 50-22.399 50-50v-139.5H542.4c-46.9 0-85-38.1-85-85V486.96c0-23 9.199-43.899 24.1-59.199 13.2-13.601 30.9-22.801 50.7-25.101 3.3-.399 6.7-.6 10.1-.6h296.8v-136.5c.1-27.6-22.3-50-49.9-50z"
      />
      <path
        fill="currentColor"
        d="M874.2 449.86c-5-4.6-10.9-8.1-17.5-10.4-5.101-1.699-10.5-2.699-16.2-2.699H542.4c-27.601 0-50 22.399-50 50V598.06c0 27.6 22.399 50 50 50h298.1c5.7 0 11.1-1 16.2-2.7 6.6-2.2 12.5-5.8 17.5-10.4 10-9.1 16.3-22.3 16.3-36.899v-111.3c0-14.601-6.3-27.802-16.3-36.901zm-227.4 102.5c0 13.8-11.2 25-25 25h-16.6c-13.8 0-25-11.2-25-25v-16.6c0-8 3.7-15.101 9.6-19.601 4.3-3.3 9.601-5.399 15.4-5.399h16.6c13.8 0 25 11.199 25 25v16.6z"
      />
    </Icon>
  );
  const Avatar = (props: any) => (
    <chakra.svg viewBox="0 0 128 128" color="#fff" width="100%" height="100%">
      <path
        fill="currentColor"
        d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"
      />
      <path
        fill="currentColor"
        d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"
      />
    </chakra.svg>
  );

  switch (name) {
    case 'MetaMask':
      return <MetaMask boxSize={boxSize} />;

    case 'WalletConnect':
      return <WalletConnect boxSize={boxSize} />;

    case 'Coinbase':
      return <CoinbaseWallet boxSize={boxSize} />;

    case 'Magic':
      return <MagicIcon boxSize={boxSize} />;

    case 'Injected':
      return <WalletIcon boxSize={boxSize} />;

    case 'Etherscan':
      return <Etherscan boxSize={boxSize} />;

    case 'Avatar':
      return <Avatar boxSize={boxSize} />;

    default:
      break;
  }
}
