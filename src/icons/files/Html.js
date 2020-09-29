import React from 'react';
import File from './File';

export default ({ color = '#1E3868' }) => (
  <File>
    <path
      fill={color}
      fillRule="evenodd"
      d="M6.58255 20.9949h.6156v1.3913h.0108c.0756-.1225.1878-.2252.3372-.3074.1494-.0823.3162-.1237.4998-.1237.306 0 .5478.077.7242.2316.1758.154.264.3844.264.6924v1.8643h-.615v-1.7062c-.0078-.2135-.0546-.3687-.141-.4649-.0858-.0963-.2214-.1447-.405-.1447-.1038 0-.198.0187-.2802.0554-.0834.0368-.1536.0875-.2112.1528-.0576.0642-.1026.1406-.135.2275-.0324.0881-.0486.1809-.0486.2789v1.6012h-.6156v-3.7485zM9.53622 22.0289h.46438v-.8138h.6162v.8138h.5562v.4462h-.5562v1.449c0 .063.0024.1173.0078.1628s.018.084.0378.1161c.0198.0309.0492.0542.0888.0705.0402.0158.0942.0234.1626.0234.0426 0 .0858-.0006.1296-.0024.0426-.0017.0858-.0081.1296-.018v.462c-.069.0064-.135.0134-.1998.0204-.0654.007-.1314.0105-.1998.0105-.1626 0-.2928-.0146-.3918-.0449-.099-.0298-.1764-.0735-.2328-.1313-.0552-.0572-.093-.1301-.1128-.2176-.0198-.0875-.0318-.1872-.0354-.2992v-1.6013h-.46438v-.4462zM11.7505 22.0289h.5832v.378h.0162c.0462-.0665.0972-.1278.1512-.1838.054-.056.114-.1032.1806-.1417.0666-.0385.1434-.0688.2298-.0916s.1854-.0344.297-.0344c.1692 0 .327.0373.4722.1102.1458.0735.2496.1873.3102.3413.1044-.14.225-.2503.3624-.3308.1362-.0805.3078-.1207.5124-.1207.2958 0 .525.07.6888.21.1638.1406.246.3745.246.7035v1.8742h-.6156v-1.5849c0-.1091-.0036-.2082-.0108-.2969-.0078-.0898-.0282-.1662-.0618-.2316-.0348-.0641-.0858-.1143-.1542-.1493-.069-.035-.162-.0525-.2808-.0525-.2094 0-.3606.063-.4536.189-.0936.126-.1404.3045-.1404.5355v1.5907h-.6162v-1.743c0-.189-.0348-.3313-.1044-.4275-.0708-.0963-.1998-.1447-.3864-.1447-.0792 0-.156.0157-.2298.0472s-.1386.077-.1944.1365c-.0558.0601-.1008.1336-.135.2205-.0342.0875-.0516.1873-.0516.2993v1.6117h-.615v-2.7142zM16.5996 24.7433h.615v-3.7485h-.615v3.7485zM14.7001 16.5972c-.069 0-.1386-.0234-.195-.0706-.126-.105-.141-.2888-.033-.4107l1.6332-1.8521-1.6332-1.852c-.108-.1225-.093-.3063.033-.4113.1248-.1044.3144-.0904.423.0321l1.8 2.0417c.096.1085.096.27 0 .3791l-1.8 2.0417c-.06.0671-.1434.1021-.228.1021zM9.30013 16.5972c-.0846 0-.168-.035-.228-.1021l-1.8-2.0417c-.096-.1091-.096-.2706 0-.3791l1.8-2.0417c.1092-.1225.2988-.1365.423-.0321.126.105.141.2888.033.4113l-1.6332 1.852 1.6332 1.8521c.108.1219.093.3057-.033.4107-.0564.0472-.126.0706-.195.0706zM10.2001 18.0549c-.045 0-.0906-.0099-.1344-.0309-.14818-.0717-.20758-.2473-.13378-.3908l3.59998-7c.075-.1447.2538-.2013.4026-.1307.1482.0723.2076.2473.1338.392l-3.6 7c-.0528.1015-.1584.1604-.2682.1604z"
      clipRule="evenodd"
    />
  </File>
);