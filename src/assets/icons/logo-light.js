import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
    width: 100%;
    height: 100%;
`

export const LogoLight = () => (
    <LogoWrapper aria-hidden="true">
       <svg width="147" height="46" viewBox="0 0 147 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M63.1568 30.2783H53.1248L51.2176 36H45.1335L55.4707 8.23078H60.7728L71.1671 36H65.0831L63.1568 30.2783ZM54.6696 25.6438H61.6119L58.1217 15.2494L54.6696 25.6438ZM79.2156 36H73.6847V15.3638H79.2156V36ZM73.3605 10.0236C73.3605 9.19711 73.6338 8.51686 74.1806 7.98284C74.74 7.44882 75.4966 7.18181 76.4502 7.18181C77.3911 7.18181 78.1412 7.44882 78.7007 7.98284C79.2601 8.51686 79.5399 9.19711 79.5399 10.0236C79.5399 10.8628 79.2538 11.5494 78.6816 12.0834C78.1222 12.6174 77.3784 12.8844 76.4502 12.8844C75.522 12.8844 74.7718 12.6174 74.1996 12.0834C73.6402 11.5494 73.3605 10.8628 73.3605 10.0236ZM82.9157 25.5293C82.9157 22.3125 83.6341 19.7504 85.0708 17.8432C86.5203 15.936 88.4975 14.9824 91.0023 14.9824C93.0113 14.9824 94.6705 15.7325 95.9802 17.2329V6.705H101.511V36H96.5333L96.2663 33.8067C94.8931 35.5232 93.1257 36.3814 90.9642 36.3814C88.5356 36.3814 86.5839 35.4278 85.109 33.5206C83.6468 31.6007 82.9157 28.9369 82.9157 25.5293ZM88.4276 25.9298C88.4276 27.8625 88.7645 29.3438 89.4384 30.3737C90.1123 31.4036 91.0913 31.9185 92.3755 31.9185C94.0793 31.9185 95.2809 31.2001 95.9802 29.7634V21.6195C95.2936 20.1827 94.1047 19.4643 92.4137 19.4643C89.7563 19.4643 88.4276 21.6195 88.4276 25.9298ZM115.281 36.3814C112.255 36.3814 109.788 35.4533 107.881 33.5969C105.987 31.7405 105.039 29.2675 105.039 26.1778V25.6438C105.039 23.5712 105.44 21.7212 106.241 20.0937C107.042 18.4535 108.174 17.1947 109.636 16.3174C111.111 15.4274 112.789 14.9824 114.671 14.9824C117.494 14.9824 119.712 15.8724 121.327 17.6525C122.955 19.4326 123.768 21.9565 123.768 25.2242V27.4747H110.628C110.806 28.8225 111.34 29.9032 112.23 30.717C113.132 31.5307 114.27 31.9376 115.644 31.9376C117.767 31.9376 119.426 31.1684 120.622 29.6299L123.33 32.6624C122.503 33.8321 121.384 34.7476 119.973 35.4088C118.562 36.0572 116.998 36.3814 115.281 36.3814ZM114.652 19.4453C113.558 19.4453 112.668 19.814 111.982 20.5515C111.308 21.2889 110.876 22.3443 110.685 23.7175H118.352V23.2788C118.327 22.0582 117.996 21.1173 117.36 20.4561C116.724 19.7822 115.822 19.4453 114.652 19.4453ZM131.989 15.3638L132.16 17.7478C133.635 15.9042 135.612 14.9824 138.092 14.9824C140.279 14.9824 141.906 15.6245 142.974 16.9087C144.042 18.1929 144.589 20.1128 144.614 22.6685V36H139.103V22.802C139.103 21.6322 138.848 20.7867 138.34 20.2654C137.831 19.7314 136.986 19.4643 135.803 19.4643C134.252 19.4643 133.088 20.1255 132.313 21.4479V36H126.801V15.3638H131.989Z" fill="#1D2366"/>
<path d="M17.1392 10.7804C17.3362 10.6024 17.5262 10.4264 17.7212 10.2594C19.1382 9.04241 20.7632 8.28041 22.6252 8.07941C25.8032 7.73741 28.4392 8.8374 30.5742 11.1664C31.9822 12.7054 32.7892 14.5434 33.1252 16.5984C33.3162 17.7754 33.3102 18.9504 33.1712 20.1304C32.8302 23.0134 31.7672 25.6174 30.1462 28.0074C28.9012 29.8434 27.3872 31.4324 25.6852 32.8474C23.3182 34.8134 20.6882 36.3534 17.9092 37.6504C17.8532 37.6764 17.7982 37.7034 17.7442 37.7324C17.3532 37.9344 16.9732 37.9334 16.5672 37.7444C14.3362 36.7094 12.1922 35.5244 10.1942 34.0834C8.33316 32.7424 6.64016 31.2184 5.19216 29.4304C3.71516 27.6084 2.56316 25.6044 1.82616 23.3714C1.48116 22.3254 1.24016 21.2564 1.11416 20.1604C1.01016 19.2604 0.95616 18.3604 1.04416 17.4594C1.29916 14.8024 2.29916 12.4834 4.23816 10.6104C5.60216 9.2914 7.22316 8.45141 9.09316 8.13241C11.0612 7.79641 12.9412 8.10341 14.7202 9.01341C15.5552 9.44141 16.3032 9.98441 16.9772 10.6354C17.0262 10.6814 17.0782 10.7264 17.1392 10.7804ZM3.17616 18.8044C3.20516 19.1244 3.23216 19.7624 3.32816 20.3874C3.64916 22.4464 4.39916 24.3474 5.49316 26.1164C6.90116 28.3914 8.74116 30.2654 10.8592 31.8774C12.7552 33.3194 14.8042 34.5034 16.9502 35.5284C17.0882 35.5944 17.2032 35.5964 17.3362 35.5254C18.3782 34.9684 19.4432 34.4494 20.4622 33.8544C22.8502 32.4594 25.0242 30.7894 26.8592 28.7064C28.4682 26.8804 29.7142 24.8414 30.4512 22.5094C30.9722 20.8634 31.2192 19.1834 31.0472 17.4584C30.8842 15.8094 30.3312 14.3004 29.2852 13.0064C27.6422 10.9704 25.5322 9.9604 22.8892 10.2354C21.2702 10.4024 19.9122 11.1314 18.7472 12.2524C18.5922 12.4014 18.5862 12.5024 18.7122 12.6734C19.7892 14.1544 20.5672 15.7644 20.7422 17.6154C20.8232 18.4904 20.7562 19.3494 20.3422 20.1504C19.6052 21.5774 18.1672 22.3664 16.6142 22.1214C14.8292 21.8374 13.5602 20.2994 13.5142 18.4874C13.4872 17.4104 13.6842 16.3814 14.0682 15.3834C14.4452 14.4094 14.9432 13.5004 15.5732 12.6654C15.6922 12.5064 15.7062 12.3934 15.5392 12.2604C15.3312 12.0944 15.1482 11.8974 14.9382 11.7334C13.2712 10.4284 11.3962 9.91741 9.30316 10.3114C7.51916 10.6464 6.09616 11.5934 4.98716 13.0084C3.72916 14.6134 3.18516 16.4654 3.17616 18.8044ZM17.1622 12.2804C17.0912 12.3624 17.0482 12.3964 17.0182 12.4424C16.0272 13.9364 15.2602 15.5314 14.9212 17.3044C14.7482 18.1974 14.6712 19.1014 14.9672 19.9904C15.2792 20.9194 16.1502 21.6064 17.0192 21.6214C18.2872 21.6414 19.3042 20.7114 19.4572 19.4254C19.6032 18.2114 19.3712 17.0534 18.9952 15.9104C18.5742 14.6234 17.9412 13.4414 17.1622 12.2804Z" fill="#6C63FF" stroke="#6C63FF" strokeWidth="1.618" strokeMiterlimit="10"/>
</svg>
    </LogoWrapper>
)