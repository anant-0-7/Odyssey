import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import Mail from "../../assets/material-symbols_mail-rounded.svg"
import logo from "../../assets/odyssey2.svg";
import Footer from "../Footer";


const Map = () => (
    <section className="flex flex-col justify-center md:w-[800px] md:mx-auto py-8 items-start relative z-10">
        <div className="md:w-[1200px] md:mx-auto max-w-4xl aspect-[16/9] bg-gray-100 rounded-3xl border-2 border-[#E0E0E0] overflow-hidden">
            <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d876.1868692322348!2d77.271162!3d28.547309!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMyJzUwLjYiTiA3N8KwMTYnMTYuOCJF!5e0!3m2!1sen!2sus!4v1739805379202!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>


        <article className="text-[#AD3535] mt-6 space-y-1 pb-4 text-left  mx-1">
            <p className="font-bold text-4xl font-custom">
                INDRAPRASTHA INSTITUTE OF INFORMATION TECHNOLOGY DELHI
            </p>
            <p className="text-2xl font-semibold font-custom">OKHLA INDUSTRIAL ESTATE PHASE III</p>
            <p className="text-2xl font-semibold font-custom" >NEAR GOVIND PURI METRO STATION</p>
            <p className="text-2xl font-semibold font-custom">NEW DELHI, INDIA</p>
        </article>
    </section>
);

export default function Contact() {
    return (
        <>
            <div className="bg-[#FDFEC4]">
                <div className="h-5/6 relative flex flex-col items-center">
                    <div className="text-center z-10 flex-grow flex flex-col mb-16 justify-start">
                        <img src={logo} alt="Logo" className="mx-auto mb-2 top-0 w-32" />
                        <h1 className="text-5xl md:text-5xl font-bold text-blue-950 font-playfair mb-2">Odyssey'25</h1>
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mt-1 mb-15 font-playfair">8-9th March</h2>
                    </div>
                    <h1 className="text-6xl md:text-8xl text-[#AD3535] font-custom  animate-slideFromBottom">CONTACT US</h1>
                </div>
                <div>
                    <section className="">
                        <div className="flex flex-col justify-center py-8">
                            <h1 className="text-4xl font-normal text-[#AD3535] text-center font-custom md:mx-0 mx-2 uppercase">Follow us on social media to stay updated on all the exciting</h1>
                            <h1 className="text-4xl font-normal text-[#AD3535] text-center font-custom uppercase">developments and sneak peeks leading up to the grand event.</h1>
                        </div>
                        <div className="flex mt-4 justify-center gap-28 py-5">

                            <a
                                href="https://x.com/odyssey_iiitd"
                                target="_blank"
                                className="p-2"
                            >
                                <img src={twitter} className="w-auto h-16" alt="Twitter" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/iiitdodyssey/posts/?feedView=all"
                                target="_blank"
                                className="p-2"
                            >
                                <img src={linkedin} className="w-auto h-16" alt="LinkedIn" />
                            </a>
                            <a
                                href="https://www.instagram.com/iiitdodyssey/?hl=en"
                                target="_blank"
                                className="p-2"
                            >
                                <img src={instagram} className="w-auto h-16" alt="Instagram" />
                            </a>
                        </div>
                        <div className="flex flex-col justify-center py-8">
                            <h1 className="text-3xl font-normal text-[#AD3535] text-center font-custom">@IIITDODYSSEY</h1>
                            <div className="flex justify-center items-center text-3xl font-normal text-[#AD3535]">
                                <img src={Mail} alt="" className="w-8 h-8 mr-2" />
                                <span className="font-custom ">odyssey@iiitd.ac.in</span>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="relative overflow-hidden">

                    <div className="absolute w-full bottom-0 right-0 translate-y-10 z-5">
                        <BC />
                    </div>

                    <Map />
                </div>

            </div>
        </>
    );
}


export function BC() {
    return <svg className="w-full h-auto justify-center relative" width="1080" height="824" viewBox="0 0 1080 824" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1044.76 977.054C1053.83 976.976 1062.98 977.133 1072.07 977.054C1072.42 973.903 1071.6 971.103 1069.9 968.48C1068.07 965.641 1027.1 941.013 1020.74 937.568C1013.39 933.594 1002.09 927.114 994.507 924.745C964.59 915.368 920.943 916.112 892.645 905.619C882.582 901.899 882.192 891.562 890.013 885.298C918.701 862.354 1012.74 867.972 1055.57 849.844C1072.61 842.62 1083.26 827.957 1098.81 818.854C1112.2 811.004 1127.73 807.871 1140.64 800.158C1151.91 793.424 1159.34 782.167 1168.96 775.726C1176.06 770.989 1189.65 769.011 1193 766.584C1195.42 764.822 1211.71 719.384 1215.72 711.083C1229.39 682.756 1252.58 653.841 1262.18 624.593C1268.22 606.171 1269 586.496 1273.94 567.879C1278.87 549.261 1293.6 524.908 1294.42 506.134C1295.04 491.843 1287.98 479.803 1286.58 467.078C1284.29 446.405 1292.78 427.024 1288.02 406.899C1285.11 394.585 1278.07 382.154 1275.48 368.587C1269.75 338.732 1273.04 301.34 1260.68 273.815C1250.34 250.812 1235.25 232.371 1233.94 204.65C1232.92 183.155 1246.75 188.754 1247.71 184.839C1249.7 176.655 1242.17 167.631 1241.93 159.487C1241.6 148.073 1248.8 133.312 1244.18 121.997C1242.97 119.021 1224.28 99.601 1222.26 101.931C1221.05 111.21 1211.02 164.89 1206.73 167.591C1204.57 168.962 1202.89 168.923 1200.73 167.591C1195.05 164.087 1190.37 104.515 1188.61 93.6105C1187.48 86.6412 1182.08 55.9838 1179.49 52.3621C1174.2 45.0012 1151.66 45.4515 1150.02 26.462C1149.26 17.6915 1155.54 20.2757 1154 16.7714C1153.28 15.127 1130.52 -1.51334 1128.66 0.111533C1125.7 8.72534 1127.75 18.0243 1126.5 26.3445C1122.64 51.8335 1121.18 56.4145 1121 83.3522C1120.84 107.686 1113.65 130.944 1111.09 154.769C1115.52 154.044 1117.04 156.198 1119.95 158.606C1149.08 182.861 1155.34 219.392 1165.15 254.18C1182.32 315.122 1193.84 383.328 1213.5 442.528C1216.74 452.258 1224.36 461.459 1225.69 469.447C1228.87 488.475 1221.93 504.822 1222.2 521.736C1222.35 531.544 1228.44 544.328 1227.33 554.175C1225.67 568.819 1185.3 622.812 1171.47 627.471C1166.75 629.057 1156.47 627.941 1155.95 628.528C1155.01 629.585 1159.01 636.652 1151.03 638.277C1145.81 639.354 1147.85 624.691 1149.12 622.655C1150.14 621.03 1152.96 620.678 1153.9 619.64C1160.98 611.809 1144.21 603.959 1136.56 610.067C1125.54 618.857 1138.94 622.694 1140.03 625.905C1143.15 635.067 1141.26 643.857 1131.34 645.951C1124.69 647.361 1132.9 634.734 1130.6 632.463H1120.84C1118.89 627.255 1128.7 628.998 1123.87 622.577C1121.53 619.483 1114.56 620.071 1111.83 622.479C1109.47 624.554 1109.9 628.685 1108.6 629.957C1106.26 632.228 1099 629.644 1101.65 638.923C1102.65 642.408 1108.09 643.504 1107.17 648.105C1102.06 646.597 1096.84 649.064 1097.3 654.761C1097.4 655.818 1110.96 662.22 1109.12 667.662C1096.33 669.267 1103.53 672.38 1102.86 679.956C1101.91 690.958 1088.18 714.255 1078.56 720.206C1063.86 729.329 1052.39 721.772 1037.92 722.36C1012.86 723.358 980.797 758.499 958.837 770.48C932.82 772.946 946.492 742.739 947.33 727.469C948.832 700.199 944.717 663.257 943.371 635.36C942.767 622.694 939.237 601.806 939.373 592.232C939.451 587.045 943.449 583.658 943.469 578.607C943.527 569.151 930.617 553.725 931.611 535.597C931.787 532.386 937.15 510.264 943.332 514.963C947.759 518.33 956.36 596.089 951.172 606.954L960.924 605.995C960.612 614.942 947.701 614.589 949.222 624.573C966.365 622.244 974.77 615.666 976.487 598.125C977.384 589.022 979.47 556.955 978.32 549.32C977.384 543.036 972.157 536.125 970.772 529.508C968.003 516.196 966.17 493.017 964.824 478.706C964.083 470.876 966.443 458.249 964.434 451.69C962.952 446.796 955.463 446.953 954.936 441.51C954.468 436.714 970.636 407.271 974.497 402.337C977.052 399.087 989.553 394.193 978.437 388.692C967.32 383.191 972.04 391.472 969.583 397.384C967.125 403.296 960.397 411.617 956.672 417.725C955.034 420.407 951.523 430.156 950.919 430.547C947.428 432.76 935.395 426.554 935.785 422.364C936.058 419.389 950.139 388.947 952.713 384.405C955.56 379.374 971.299 366.003 955.658 364.534C949.261 363.947 947.935 377.984 945.634 383.171C942.084 391.178 937.677 400.203 932.469 407.271C930.831 407.623 914.742 395.466 913.182 393.508C910.861 390.552 910.861 386.637 909.027 383.974C901.285 372.717 885.995 368.665 874.04 375.928C872.285 376.985 864.289 385.364 863.762 387.146C860.876 396.914 867.253 423.226 866.395 424.909C862.729 432.133 830.432 442.998 828.541 449.811C827.39 453.903 829.828 457.446 829.496 460.813C826.123 494.427 807.79 528.706 805.118 559.265C803.266 580.447 800.262 622.048 830.218 620.697L826.337 638.297C831.525 639.374 829.691 636.966 831.174 634.44C835.328 627.334 837.922 619.444 842.719 612.632C844.357 610.322 842.778 607.835 847.77 608.951L838 637.298C840.827 640.117 844.513 626.218 847.77 630.486C849.408 632.62 844.864 677.92 843.733 684.165C841.9 694.247 837.063 703.351 836.108 715.664C835.25 726.765 836.615 770.401 831.252 777.351C830.082 778.878 812.958 781.345 809.76 781.384C783.607 781.638 763.715 753.546 743.9 739.646C707.411 714.059 667.138 708.656 623.511 706.816C626.515 735.985 619.494 764.548 619.494 791.975C619.494 802.116 623.589 814.116 623.511 823.298C623.453 830.385 619.435 839.508 619.474 846.81C619.513 855.169 624.35 859.907 625.364 866.504C626.671 875.039 623.414 907.224 629.791 912.001C633.555 914.82 659.493 914.252 669.732 917.893C688.923 924.745 695.807 939.682 709.907 948.042C718.761 953.268 730.736 954.424 740.507 958.437C751.779 963.076 765.879 974.451 777.074 976.545C793.67 979.658 823.607 976.859 841.958 976.996C837.453 962.039 816.371 965.798 805.469 959.788C799.014 956.225 797.707 948.883 791.993 945.908C786.688 943.167 782.32 944.42 777.503 942.834C764.066 938.39 763.559 916.953 760.165 905.423C758.468 899.648 753.047 896.809 754.938 890.818C759.463 876.488 778.244 871.711 785.44 862.53C790.628 855.913 790.199 846.007 796.518 839.938C823.139 839.977 851.495 839.096 877.511 833.595C881.431 832.773 884.474 829.465 888.199 828.662C899.861 826.156 911.816 831.657 923.752 830.287C926.502 840.369 925.663 847.005 916.672 853.388L835.094 847.71C828.112 848.2 831.213 856.383 830.16 857.499C828.794 858.947 811.379 855.13 805.43 860.102C803.597 861.629 796.693 873.415 797.317 875.764C798.273 879.386 813.699 895.341 817.522 898.747C872.519 947.611 961.177 942.952 1027.23 964.271C1033.63 966.326 1043.87 969.028 1044.78 976.996L1044.76 977.054ZM836.069 595.286C836.693 588.493 829.886 584.343 828.697 578.176C826.864 568.721 832.812 561.282 835.133 552.237C836.868 545.483 841.627 514.943 848.726 514.924C862.807 514.884 849.428 537.417 849.584 543.486C849.701 548.067 853.523 550.103 853.562 554.841C853.602 560.557 836.478 611.007 833.923 612.671C827.546 616.86 820.486 598.673 822.437 593.329L836.069 595.267V595.286ZM859.491 769.54C861.871 747.868 868.95 727.058 872.909 705.68C874.118 699.181 872.499 691.918 873.65 684.89C875.756 671.871 886.171 631.856 892.255 621.343C893.309 619.523 895.863 614.824 898.477 616.86C900.661 618.563 911.602 664.784 912.128 670.716C913.65 688.453 907.682 702.548 908.13 717.681C908.501 730.053 914.391 745.539 914.254 758.596C907.682 761.063 861.871 771.87 859.511 769.54H859.491Z" fill="#FFCC6D" />
        <path d="M-643.101 766.085C-640.658 754.22 -657.334 715.905 -652.478 707.596C-647.285 698.703 -637.239 708.045 -630.344 708.343C-610.807 709.149 -606.909 695.938 -595.093 684.552C-590.617 694.464 -562.209 716.567 -552.966 716.662C-540.095 716.787 -542.805 684.506 -528.369 687.5C-473.42 698.711 -419.186 713.916 -363.653 720.687C-325.188 717.135 -290.481 677.787 -249.472 689.37C-241.879 691.504 -232.871 700.074 -225.885 698.925C-216.789 697.45 -206.509 688.881 -197.236 685.528C-65.4552 637.849 99.0565 609.899 232.209 681.241C265.416 699.034 287.216 730.311 325.475 736.563L638.921 706.688C695.607 726.982 664.834 795.768 659.772 837.589C658.26 850.01 663.41 868.606 655.731 881.295C648.679 892.897 592.558 933.382 577.473 944.979C551.473 965.01 524.971 984.811 497.39 1002.61C498.633 1007.67 501.544 1007.45 505.393 1008.78C530.947 1017.6 567.347 1022.14 593.672 1027.63C605.051 1036.22 628.107 1034.72 637.968 1045.26C668.811 1078.29 632.755 1135.71 602.859 1154.2C567.403 1176.12 493.649 1168.61 450.99 1180.06C441.29 1182.66 439.315 1182.53 434.03 1183.62C409.77 1188.61 318.283 1226.16 299.138 1240.12C285.546 1250.03 278.411 1282.81 273.746 1298.4C270.068 1310.6 260.722 1323.79 266.867 1337.5C256.625 1335.93 236.515 1316.24 227.542 1324.19C212.7 1337.37 228.216 1375.27 237.016 1389.65C235.307 1396.05 195.977 1381.4 189.702 1381.57C157.19 1382.48 181.319 1421.98 175.259 1426.95C145.506 1424.56 108.425 1400.79 137.222 1452.53C136.715 1455.68 93.2053 1436.55 88.7514 1476.58C88.1615 1481.92 91.0974 1490.89 90.6732 1491.9C89.8247 1493.93 83.9622 1495.42 81.8739 1498.75C78.3856 1504.27 76.0009 1521.15 68.5403 1511.97C62.6386 1504.67 50.4442 1482.2 38.5866 1487.7C21.9885 1495.39 25.5094 1535.3 21.5461 1540.03C15.6314 1547.1 11.5851 1537.51 5.45032 1536.03C-13.4442 1531.45 -28.0851 1556.89 -30.834 1555.92C-34.8572 1551.22 -30.9476 1545.29 -31.7161 1541.01C-34.0456 1528.18 -50.9674 1557.17 -52.4547 1560.02C-53.9419 1562.88 -55.4183 1582.45 -60.7207 1575.03C-62.9558 1571.9 -62.3647 1566.32 -67.6317 1570.77C-73.2954 1575.57 -75.7439 1593.23 -83.2201 1598.89C-92.6675 1606.06 -89.9394 1573.42 -97.9468 1582.3C-107.17 1592.53 -110.767 1621.77 -120.187 1630.51C-125.372 1635.31 -131.619 1620.72 -134.656 1617.41C-146.051 1621.49 -147.082 1635.85 -156.68 1642.11C-168.045 1649.51 -180.415 1645.2 -187.652 1650.86C-194.973 1656.59 -196.608 1671.97 -207.963 1677.58C-210.796 1678.98 -244.724 1680.53 -246.419 1679.57C-252.091 1676.43 -266.012 1640.37 -263.554 1634.89C-259.666 1626.19 -254.53 1633.33 -252.986 1633.49C-249.599 1633.88 -245.519 1632.04 -242.928 1633.36C-238.222 1635.76 -235.957 1644.76 -230.292 1646.74C-226.647 1648.02 -209.377 1647.25 -207.056 1642.88C-213.361 1639.49 -231.357 1622.99 -229.768 1616.71C-229.39 1615.24 -221.851 1616.12 -219.233 1614.59C-216.027 1612.74 -215.693 1608.39 -213.072 1606.2C-207.878 1601.91 -202.153 1611.08 -212.853 1591.35C-193.838 1591.04 -204.735 1567.75 -181.405 1568.98L-189.402 1559.38C-185.495 1556.16 -171.609 1556.89 -170.08 1552.85C-168.551 1548.87 -173.043 1532.82 -178.174 1529.2C-181.979 1526.51 -202.519 1532.26 -206.984 1534.35C-209.36 1535.46 -202.968 1540.43 -208.121 1541.36L-212.26 1526.44C-220.215 1527.5 -214.856 1537.76 -217.606 1539.38C-223.959 1543.14 -238.715 1539.44 -242.544 1541.24C-243.288 1541.61 -240.372 1552.11 -251.642 1552.69C-260.354 1535.41 -267.713 1529.69 -258.679 1511.95C-268.899 1520.51 -268.755 1508.53 -270.679 1507.84C-280.718 1504.2 -290.011 1542.16 -296.697 1540.9C-300.481 1536.32 -303.844 1533.56 -306.028 1527.56C-309.536 1517.97 -299.576 1518.43 -304.987 1510.98C-324.88 1514.47 -327.204 1526.58 -341.715 1535.89C-344.397 1512.19 -367.089 1512.8 -366.035 1486.69C-382.256 1490.9 -373.571 1508.98 -375.539 1514.55C-376.608 1517.53 -387.302 1520.12 -390.775 1522.7L-401.657 1494.06L-417.356 1508.59C-424.402 1500.37 -420.629 1492.95 -422.907 1484.16C-428.996 1485.38 -439.841 1499.03 -438.792 1504.72C-438.082 1508.64 -432.902 1514.18 -433.464 1516.42C-433.855 1517.99 -440.554 1519.18 -440.979 1520.31C-441.477 1521.72 -427.537 1542.34 -427.528 1547.68C-442.983 1561.19 -452.631 1532.39 -459.461 1519.28C-461.168 1516.01 -459.441 1513.03 -466.25 1512.37C-471.656 1522.95 -493.149 1560.94 -471.446 1564.14C-469.137 1564.46 -455.802 1560.32 -459.024 1570.01C-459.352 1570.97 -466.183 1572.2 -466.575 1573.94C-467.163 1576.5 -461.299 1581.91 -462.008 1584.77C-462.314 1586.02 -467.252 1586.97 -468.124 1589.07C-473.821 1602.69 -468.52 1615.12 -468.074 1628.6C-467.608 1642.92 -478.632 1644.6 -466.571 1660.32C-462.8 1665.23 -450.664 1670.95 -449.563 1675.72C-447.548 1684.4 -475.354 1692.3 -481.495 1696.86C-485.514 1684.3 -494.42 1674.36 -500.472 1663.68C-510.31 1646.35 -520.042 1624.7 -537.952 1612.49C-542.176 1609.62 -546.904 1611.66 -549.399 1610.29C-555.131 1607.15 -559.447 1596.47 -569.122 1591.99C-576.588 1588.54 -590.854 1589.64 -598.307 1586.1C-613.847 1578.75 -631.141 1553.58 -649.577 1548.41L-709 1428.04C-698.8 1423.6 -703.527 1406.65 -699.393 1401.17C-694.884 1395.19 -687.052 1394.9 -681.208 1385.27C-672.43 1370.81 -679.769 1361.21 -678.676 1355.86C-678.001 1352.57 -657.359 1343.1 -656.306 1329.08C-655.883 1323.65 -659.208 1318.25 -658.639 1314.68C-657.897 1310.02 -646.858 1307.64 -653.003 1296.46C-656.74 1289.68 -664.739 1294.46 -668.776 1290.28C-674.541 1284.28 -671.765 1265.72 -679.555 1255.44C-681.696 1252.61 -691.732 1264.88 -692.32 1246.39C-693.481 1210.78 -652.967 1190.39 -642.175 1158.85L-633.02 1065.5C-615.326 1049.57 -610.232 1088.62 -608.151 1089.09C-607.446 1089.25 -604.077 1086.15 -600.799 1086.62C-585.699 1088.72 -571.7 1114.06 -560.777 1125.17C-555.083 1130.96 -553.706 1131.03 -546.908 1126.96C-540.892 1132.97 -534.349 1138.85 -528.202 1144.95C-528.094 1145.05 -529.508 1145.09 -526.851 1147.69C-495.78 1178.27 -482.916 1168.04 -450.581 1183.16C-418.246 1198.28 -418.025 1216.02 -375.977 1206.97C-355.815 1202.63 -341.74 1182.45 -326.37 1169.13L-387.158 1053.44L-423.873 1011.85C-411.847 1006.21 -400.905 992.507 -386.422 993.419C-382.855 993.628 -380.901 997.889 -376.243 997.769C-367.142 997.516 -339.09 990.773 -331.791 994.007C-329.103 995.218 -328.578 1002.69 -325.89 1003.9C-324.732 1004.44 -321.233 1001.48 -318.816 1001.96C-300.312 1005.52 -291.348 999.361 -273.861 995.774C-271.452 995.271 -269.786 999.733 -267.569 999.266C-255.511 996.717 -242.705 981.348 -231.836 981.894C-228.987 982.04 -227.202 986.504 -225.761 985.673C-222.447 983.798 -222.111 979.034 -219.489 976.665C-206.703 965.127 -187.317 957.826 -170.847 951.875C-163.458 949.183 -153.262 952.659 -148.85 944.36C-147.254 941.363 -149.449 937.341 -146.352 933.393C-144.423 930.949 -138.43 929.542 -138.065 928.526C-137.227 926.172 -144.028 916.75 -147.92 914.551C-154.164 911.035 -168.724 913.356 -175.705 911.249C-182.687 909.143 -187.227 902.546 -193.112 901.271C-207.177 898.183 -227.054 903.099 -242.789 891.908C-250.689 893.628 -241.968 899.982 -242.745 901.977C-248.168 916.03 -276.957 890.98 -283.853 888.502C-300.381 882.54 -322.823 871.434 -339.485 861.149C-346.17 857.044 -349.037 853.413 -354.255 848.226C-328.069 834.135 -355.941 833.623 -355.729 831.995C-346.749 813.111 -343.358 831.531 -337.333 826.258L-334.803 811.424C-321.085 823.85 -318.367 807.4 -312.629 804.568C-306.892 801.735 -296.75 806.372 -293.373 803.899C-280.862 794.827 -294.743 786.184 -292.022 780.75C-285.732 768.269 -253.314 771.643 -266.755 747.197C-275.446 758.623 -278.969 749.733 -280.145 750.194C-283.408 751.507 -287.365 759.58 -293.043 760.114C-296.007 756.711 -295.953 743.696 -298.508 742.45C-305.257 739.183 -301.648 750.001 -302.549 750.595C-306.105 752.888 -317.272 759.177 -320.715 760.609C-324.711 762.253 -325.819 758.739 -329.587 758.121C-331.621 757.811 -334.642 760.825 -335.323 760.594C-338.825 759.427 -333.146 744.561 -338.148 741.626C-359.543 746.068 -347.325 763.982 -348.455 767.137C-349.487 770.065 -369.895 768.645 -371.008 778.122C-371.935 786.163 -359.585 789.77 -377.236 794.901C-380.581 790.969 -373.267 791.389 -374.087 787.793C-375.142 783.297 -383.759 770.742 -387.394 767.55C-391.03 764.359 -407.673 759.796 -408.607 764.497C-407.096 768.707 -399.53 780.707 -399.837 782.262C-401.545 790.838 -406.638 777.498 -411.71 781.316C-414.931 783.742 -407.186 786.368 -406.372 788.862C-411.178 794.429 -417.226 785.323 -418.48 782.299C-421.224 775.592 -416.732 765.821 -421.234 758.818C-431.248 764.239 -425.705 780.85 -438.138 784.151C-443.043 776.391 -434.623 771.07 -433.476 764.503C-433.07 762.302 -432.137 741.389 -433.321 740.988L-450.285 759.544L-457.041 745.861C-458.582 745.338 -476.903 762.115 -477.412 763.382C-478.564 766.19 -469.542 771.947 -479.214 773.825C-483.84 767.6 -479.065 754.046 -481.508 749.46C-483.05 746.579 -487.535 745.478 -490.083 742.676C-491.393 741.232 -490.718 738.123 -492.112 736.691C-492.791 735.981 -500.902 739.448 -500.904 723.356C-515.778 731.027 -500.185 751.544 -512.403 759.636C-517.527 749.924 -518.379 741 -522.466 732.358C-527.003 722.745 -537.064 742.162 -538.429 746.956C-539.209 749.67 -537.339 753.882 -537.727 757.269C-538.592 765.011 -542.279 762.502 -537.328 775.375C-544.533 781.947 -541.581 792.463 -552.954 796.703C-555.44 795.781 -566.427 773.706 -569.604 769.93C-570.854 768.428 -579.161 770.229 -579.815 762.312L-586.179 782.442C-590.722 778.803 -593.905 757.175 -595.722 756.58C-603.695 753.917 -605.626 778.249 -602.085 783.487C-607.244 785.616 -608.709 774.605 -612.364 770.588C-618.496 763.852 -627.257 765.519 -627.117 775.661C-627.04 781.684 -619.395 787.494 -628.422 789.711C-633.332 782.73 -638.369 772.707 -643.222 766.384L-643.101 766.085Z" fill="#FFCC6D" />
    </svg>
}