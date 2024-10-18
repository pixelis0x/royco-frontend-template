import React from "react";
import { cn } from "@/lib/utils";

export const HashedLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="167"
      height="112"
      viewBox="0 0 167 112"
      fill="none"
      className={cn("", className)}
    >
      <g clipPath="url(#clip0_2107_26311)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.2885 40.2277C36.0677 41.2233 35.7021 42.9319 35.1452 45.5671C34.7833 47.2823 35.0414 47.1168 32.7294 47.1168C31.6359 47.1168 30.7134 47.162 30.6793 47.2176C30.6449 47.2732 30.5191 47.792 30.4004 48.3709C30.2813 48.9494 30.1514 49.5516 30.112 49.7084L30.0406 49.994H32.038C33.2216 49.994 34.0628 50.0379 34.1023 50.1023C34.1641 50.2023 33.9404 51.3336 33.3358 53.978L33.0955 55.0292L31.0279 55.0595C28.9919 55.0889 28.96 55.0931 28.9052 55.3363C28.8064 55.7757 28.4043 57.8288 28.4043 57.8939C28.4043 57.9288 29.3132 57.9707 30.4241 57.9873C32.141 58.0126 32.4414 58.0421 32.4277 58.1832C32.4074 58.3907 31.936 60.6827 31.5512 62.444C30.8308 65.7432 30.6557 66.726 30.7789 66.7733C30.847 66.7994 31.7434 66.8073 32.7709 66.7903L34.6393 66.76L34.7808 66.2068C34.8584 65.9022 35.1016 64.7817 35.3211 63.7168C35.5406 62.6515 35.7934 61.4563 35.8834 61.0608C35.9731 60.6649 36.1573 59.8183 36.2926 59.1792L36.5383 58.0172H38.9179H41.2971L41.2859 58.294C41.2797 58.4463 41.1149 59.3178 40.9195 60.2308C40.724 61.1438 40.4414 62.4635 40.2916 63.1632C39.9687 64.6684 39.5819 66.6143 39.5819 66.7322C39.5819 66.7778 40.4733 66.8152 41.5627 66.8152H43.5435L43.6635 66.2898C43.8195 65.6025 44.3515 63.0922 44.7827 61.0052C44.9715 60.0922 45.2031 59.0352 45.2981 58.6559L45.4704 57.967L47.5267 57.9367L49.5834 57.9068L49.6839 57.5192C49.7391 57.3063 49.8719 56.6713 49.9785 56.1082L50.1727 55.0848H48.1417C45.8252 55.0848 46.0086 55.1939 46.2784 53.978C46.3664 53.5825 46.5631 52.6537 46.7154 51.9146C46.8681 51.1755 47.0424 50.4409 47.1026 50.2824L47.2121 49.994H49.2481H51.2837L51.5294 48.8041C51.6647 48.1501 51.8008 47.5027 51.8323 47.3658L51.8896 47.1168H49.8922C48.7937 47.1168 47.8666 47.0707 47.8321 47.0147C47.7973 46.9591 47.918 46.2245 48.1002 45.3825C48.282 44.5408 48.5327 43.3788 48.6572 42.8007C48.7812 42.2222 49.0062 41.1926 49.1572 40.5124C49.3079 39.8318 49.4311 39.2467 49.4311 39.2118C49.4311 39.177 48.5202 39.1487 47.4068 39.1487H45.3824L45.1985 40.0617C44.9807 41.1437 44.6968 42.4907 44.2245 44.6819C44.0341 45.5647 43.8448 46.4611 43.8033 46.6739L43.7282 47.0611L41.3229 47.091L38.9179 47.1209L38.9196 46.8698C38.9204 46.7316 38.9993 46.2951 39.0947 45.8991C39.2902 45.0911 39.7031 43.1626 40.0193 41.5831C40.1351 41.005 40.304 40.2207 40.3941 39.8401L40.558 39.1487H38.5428H36.5275L36.2885 40.2277ZM89.5098 46.9039C86.0371 47.3541 83.6176 50.0247 83.6019 53.4248C83.5932 55.3446 84.38 56.4107 87.2647 58.3861C90.0273 60.2785 90.4851 61.0724 89.731 62.6664C89.1737 63.845 88.5736 64.2148 87.219 64.2148C85.6827 64.2148 85.2341 63.4678 85.5399 61.4202L85.6267 60.8392H83.6396H81.6522L81.526 61.2218C80.4661 64.4339 81.8527 66.7355 85.0494 67.07C90.5096 67.6414 94.2475 64.8946 94.2848 60.2827C94.3027 58.113 93.5851 57.2328 89.88 54.8773C88.0797 53.7327 87.5921 52.8292 88.0258 51.4423C88.4503 50.0853 89.9252 49.3229 91.2396 49.7811C91.8372 49.9894 91.9841 50.348 91.9724 51.5734L91.9625 52.6549L93.908 52.6246L95.8531 52.5948L96 51.82C96.7329 47.9575 94.489 46.2577 89.5098 46.9039ZM54.4082 47.4006C54.3489 47.5567 54.3003 47.7608 54.3003 47.8538C54.3003 47.9472 54.1509 48.7158 53.9683 49.5619C53.7857 50.4081 53.4857 51.8104 53.301 52.6778C53.1163 53.5451 52.8694 54.703 52.7524 55.2508C52.6349 55.7986 52.3859 56.9689 52.1988 57.8512C52.012 58.7339 51.763 59.9042 51.6464 60.452C51.5294 60.9998 51.302 62.0705 51.1405 62.8312C50.9791 63.5923 50.728 64.7464 50.5819 65.3963C50.4359 66.0462 50.3163 66.6326 50.3163 66.699C50.3163 66.7836 50.9256 66.811 52.3254 66.7903L54.3344 66.76L54.6556 65.266C55.2133 62.6689 55.63 60.7093 55.867 59.5668C56.2401 57.7694 55.913 57.962 58.5956 57.962C59.8651 57.962 60.9291 57.9877 60.9603 58.0188C61.0217 58.0802 60.8175 59.1788 60.2714 61.7248C60.0821 62.6071 59.8365 63.779 59.7256 64.3285C59.6144 64.8784 59.4737 65.5258 59.4132 65.7673C59.3526 66.0088 59.2716 66.3437 59.2343 66.511L59.1658 66.8152H61.1993H63.2328L63.4245 65.9022C63.53 65.4 63.7325 64.4414 63.874 63.772C64.0159 63.1026 64.2579 61.9572 64.4118 61.2268C64.5658 60.4964 64.8202 59.3012 64.9771 58.5708C65.1339 57.8404 65.358 56.7697 65.4755 56.1912C65.5925 55.6131 65.8419 54.4428 66.0295 53.5908C66.5844 51.0713 67.3579 47.3512 67.3588 47.1998C67.3592 47.1541 66.4694 47.1168 65.3817 47.1168H63.4038L63.2772 47.587C63.2079 47.8455 63.0784 48.4306 62.9896 48.8871C62.9012 49.3436 62.6734 50.4393 62.4842 51.322C62.2945 52.2047 62.0675 53.3003 61.9799 53.7568C61.6994 55.2176 61.9687 55.0848 59.2895 55.0848C58.0134 55.0848 56.9476 55.0474 56.9211 55.0018C56.8733 54.9204 57.2004 53.2463 57.781 50.6028C57.9416 49.8724 58.1449 48.9013 58.2333 48.4448C58.3213 47.9883 58.4196 47.5027 58.452 47.3658L58.5101 47.1168H56.5131H54.5161L54.4082 47.4006ZM73.8473 47.3873C73.7481 47.5384 73.6672 47.6832 73.6672 47.7085C73.6672 47.7596 70.8568 53.5181 66.5848 62.2228C65.6585 64.1094 64.7961 65.8773 64.6683 66.1512C64.5405 66.4251 64.4168 66.6878 64.3936 66.7347C64.3703 66.782 65.2642 66.8069 66.3806 66.7903L68.4104 66.76L69.1246 65.3212C69.9882 63.5815 73.3302 56.7647 74.425 54.5108C74.8591 53.6169 75.2587 52.8583 75.3131 52.8247C75.4517 52.7392 75.5226 53.5646 75.7692 58.128C76.0862 63.9865 76.2252 66.2869 76.2792 66.5662C76.3273 66.8144 76.3373 66.8152 78.438 66.8152H80.5483L80.4823 65.9022C80.4458 65.4 80.367 64.0181 80.3064 62.8312C80.2462 61.6443 80.1715 60.4491 80.1404 60.1752C80.1097 59.9013 79.9818 57.7848 79.8565 55.472C79.7312 53.1592 79.5697 50.3455 79.4975 49.2192L79.3664 47.172L76.6967 47.1425L74.027 47.1126L73.8473 47.3873ZM99.0727 47.3658C99.0441 47.5027 98.8664 48.3618 98.678 49.2748C98.4896 50.1878 98.2663 51.2336 98.1821 51.5988C98.0974 51.964 97.8742 53.0098 97.6849 53.9228C97.4961 54.8358 97.2454 56.031 97.128 56.5788C97.0106 57.1266 96.7616 58.2969 96.5752 59.1792C96.3889 60.0619 96.1382 61.2322 96.0183 61.78C95.3788 64.7037 95.1472 65.8146 95.0779 66.2898L95.0007 66.8152H96.9525C99.2528 66.8152 98.9474 67.0795 99.4479 64.6572C99.6367 63.7442 99.889 62.549 100.009 62.0012C100.129 61.4534 100.355 60.4076 100.51 59.6772C100.666 58.9468 100.819 58.262 100.85 58.1558C100.942 57.8375 105.65 57.8603 105.65 58.179C105.65 58.3745 105.421 59.4867 104.772 62.444C104.534 63.5288 104.041 65.8789 103.93 66.4583L103.861 66.8206L105.885 66.7903L107.909 66.76L108.161 65.5428C108.676 63.0503 108.846 62.2448 109.809 57.7408C109.959 57.0407 110.201 55.8953 110.348 55.1952C110.496 54.4955 110.745 53.3252 110.903 52.5948C111.248 51.0016 111.715 48.8004 111.854 48.1128C111.909 47.8389 111.981 47.5027 112.014 47.3658L112.073 47.1168H110.037H108.002L107.827 48.0298C107.73 48.5319 107.496 49.6649 107.306 50.5472C107.116 51.4299 106.87 52.6018 106.759 53.1513C106.648 53.7007 106.5 54.3606 106.431 54.6175L106.305 55.0848H103.982C101.265 55.0848 101.443 55.1927 101.762 53.7352C101.886 53.1687 102.119 52.0827 102.281 51.322C102.442 50.5613 102.693 49.4067 102.839 48.7568C103.249 46.9333 103.441 47.1168 101.114 47.1168C99.1403 47.1168 99.1246 47.1184 99.0727 47.3658ZM114.563 47.255C114.539 47.3309 114.438 47.7915 114.339 48.2788C114.24 48.7656 114.036 49.7367 113.886 50.4368C113.598 51.7809 113.189 53.7057 112.84 55.3612C112.535 56.8103 111.988 59.375 111.673 60.8392C111.522 61.5393 111.302 62.5851 111.185 63.1632C111.067 63.7417 110.85 64.7725 110.703 65.454C110.555 66.1358 110.462 66.721 110.495 66.7546C110.529 66.7878 112.979 66.8152 115.939 66.8152H121.322L121.622 65.4598C121.787 64.714 121.921 64.0666 121.92 64.021C121.919 63.9753 120.399 63.938 118.542 63.938H115.167L115.164 63.689C115.161 63.447 115.615 61.1973 116.097 59.0688L116.335 58.0172L119.39 57.9881L122.445 57.9587L122.684 56.9236C122.815 56.3543 122.952 55.7077 122.988 55.4865L123.054 55.0848H120.058C118.41 55.0848 117.038 55.0453 117.008 54.9976C116.978 54.9499 117.1 54.2402 117.278 53.4206C117.715 51.4141 117.939 50.4202 118.005 50.1878C118.055 50.0089 118.311 49.994 121.354 49.994H124.65L124.885 49.0258C125.014 48.4929 125.153 47.8455 125.193 47.587L125.266 47.1168H119.936C115.77 47.1168 114.597 47.1466 114.563 47.255ZM127.061 47.2321C127.022 47.2956 126.842 48.0551 126.662 48.9199C126.481 49.7844 126.21 51.0647 126.059 51.7648C125.908 52.4645 125.688 53.5103 125.57 54.0888C125.452 54.6669 125.202 55.8372 125.015 56.6892C124.828 57.5416 124.555 58.8115 124.409 59.5112C124.262 60.2113 124.015 61.3816 123.858 62.112C123.423 64.1409 123.023 66.0561 122.95 66.4558L122.885 66.8152H126.537C130.743 66.8152 131.654 66.7131 132.965 66.0943C135.704 64.8016 137.108 62.366 138.223 56.966C139.571 50.4326 138.914 47.9712 135.636 47.2815C134.675 47.0794 127.182 47.0362 127.061 47.2321ZM42.9729 50.1612C43.0082 50.2529 42.9351 50.7883 42.8102 51.3506C42.6857 51.9129 42.4786 52.8712 42.3504 53.48C41.9723 55.2703 42.2919 55.0848 39.584 55.0848H37.2579L37.2588 54.7802C37.2592 54.6129 37.3546 54.0776 37.4708 53.5908C37.587 53.1036 37.7389 52.3815 37.8082 51.986C37.8771 51.5905 38.0124 50.9804 38.1083 50.6302L38.283 49.994H40.5958C42.5562 49.994 42.9185 50.0193 42.9729 50.1612ZM133.253 50.0998C135.034 50.5131 135.199 52.2242 133.978 57.63C132.813 62.7814 131.973 63.8355 129 63.8678L127.617 63.8828L127.629 63.606C127.641 63.32 127.969 61.7015 128.558 59.0132C128.745 58.1612 129.023 56.8664 129.176 56.136C129.329 55.4056 129.581 54.2104 129.736 53.48C129.891 52.7496 130.103 51.7274 130.207 51.2082C130.311 50.6891 130.433 50.2035 130.48 50.1292C130.58 49.9666 132.587 49.9454 133.253 50.0998Z"
          fill="#2A2A27"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.4458 39.1185C36.4167 39.1654 37.3177 39.1894 38.4477 39.1716C40.033 39.1463 40.5261 39.1716 40.6041 39.282C40.6817 39.3924 40.6945 39.387 40.6597 39.2591C40.6103 39.0778 36.5549 38.9425 36.4458 39.1185ZM45.2645 39.2064C45.228 39.3015 45.2293 39.4106 45.267 39.4484C45.3052 39.4866 45.3359 39.4347 45.3359 39.333C45.3359 39.0184 49.3946 39.0562 49.4656 39.3716C49.5071 39.5571 49.5129 39.5525 49.5009 39.3438C49.4814 39.013 45.3895 38.8802 45.2645 39.2064ZM89.907 46.752C90.0439 46.7785 90.268 46.7785 90.405 46.752C90.5419 46.7258 90.4299 46.7043 90.156 46.7043C89.8821 46.7043 89.7701 46.7258 89.907 46.752ZM92.2866 46.7503C92.3929 46.7781 92.5672 46.7781 92.6738 46.7503C92.7805 46.7225 92.6933 46.6997 92.48 46.6997C92.2671 46.6997 92.18 46.7225 92.2866 46.7503ZM95.0256 47.594C95.0256 47.6131 95.1875 47.775 95.385 47.9534L95.7448 48.2788L95.4199 47.919C95.1169 47.5836 95.0256 47.5085 95.0256 47.594ZM73.39 48.002C73.2958 48.1846 73.2435 48.334 73.2738 48.334C73.3041 48.334 73.4062 48.1846 73.5008 48.002C73.5954 47.8194 73.6477 47.67 73.617 47.67C73.5867 47.67 73.4846 47.8194 73.39 48.002ZM79.5623 48.998C79.5623 49.2719 79.5839 49.3839 79.6104 49.247C79.6366 49.11 79.6366 48.8859 79.6104 48.749C79.5839 48.612 79.5623 48.7241 79.5623 48.998ZM30.0498 50.1351C30.0971 50.182 31.0284 50.2069 32.1194 50.1898L34.1035 50.1595L32.0335 50.1044C30.8951 50.0741 30.0025 50.0878 30.0498 50.1351ZM121.364 50.1048L117.989 50.1649L121.33 50.1903C123.466 50.206 124.696 50.1753 124.74 50.1048C124.777 50.0438 124.792 50.0052 124.774 50.0193C124.755 50.033 123.221 50.0716 121.364 50.1048ZM39.0279 50.1811C41.0784 50.2604 42.987 50.2637 42.9397 50.1878C42.9115 50.1421 41.8329 50.1147 40.5431 50.1268C39.2533 50.1392 38.5714 50.1637 39.0279 50.1811ZM47.1789 50.1878C47.1503 50.2334 47.7325 50.2575 48.4725 50.2417C50.9957 50.1874 51.2592 50.1479 49.2436 50.1263C48.1363 50.1143 47.2072 50.1421 47.1789 50.1878ZM88.6554 50.4642L88.33 50.824L88.6898 50.499C88.8878 50.3202 89.0496 50.1583 89.0496 50.1392C89.0496 50.0537 88.9583 50.1288 88.6554 50.4642ZM131.19 50.1865C131.573 50.2085 132.171 50.2081 132.518 50.1861C132.866 50.1645 132.552 50.1467 131.822 50.1467C131.092 50.1471 130.807 50.1649 131.19 50.1865ZM79.6685 51.1008C79.6685 51.3137 79.6913 51.4008 79.7191 51.2942C79.7469 51.1879 79.7469 51.0136 79.7191 50.907C79.6913 50.8003 79.6685 50.8875 79.6685 51.1008ZM134.677 52.65C134.677 52.9849 134.698 53.1218 134.723 52.9542C134.749 52.7869 134.749 52.513 134.723 52.3458C134.698 52.1781 134.677 52.3151 134.677 52.65ZM91.8019 52.6803C91.8492 52.7272 92.8054 52.7521 93.9271 52.7355L95.966 52.7048L93.8412 52.6496C92.6722 52.6193 91.7546 52.633 91.8019 52.6803ZM79.7793 53.2032C79.7793 53.4165 79.8017 53.5036 79.8295 53.397C79.8578 53.2903 79.8578 53.116 79.8295 53.0098C79.8017 52.9031 79.7793 52.9903 79.7793 53.2032ZM75.2998 53.2588C75.3288 53.4107 75.3716 53.5352 75.3948 53.5352C75.4185 53.5352 75.4376 53.4107 75.4376 53.2588C75.4376 53.1065 75.3944 52.982 75.3421 52.982C75.2898 52.982 75.2708 53.1065 75.2998 53.2588ZM83.4355 53.4248C83.4355 53.6987 83.4571 53.8107 83.4836 53.6738C83.5098 53.5368 83.5098 53.3127 83.4836 53.1758C83.4571 53.0388 83.4355 53.1509 83.4355 53.4248ZM88.662 53.8672C88.8998 54.1108 89.1193 54.31 89.1496 54.31C89.1803 54.31 89.0106 54.1108 88.7728 53.8672C88.535 53.624 88.3155 53.4248 88.2852 53.4248C88.2549 53.4248 88.4242 53.624 88.662 53.8672ZM79.8997 54.7528C79.8997 55.1483 79.9196 55.3101 79.9441 55.1122C79.9686 54.9146 79.9686 54.5909 79.9441 54.393C79.9196 54.195 79.8997 54.3569 79.8997 54.7528ZM33.0519 54.6764C33.0519 54.8374 32.8191 54.8619 31.0325 54.891L29.0127 54.9238L31.0358 54.9491C33.0411 54.9736 33.4549 54.8972 33.1212 54.5635C33.083 54.5254 33.0519 54.5764 33.0519 54.6764ZM37.2592 54.7802C37.2571 54.9848 41.8188 55.0927 41.9437 54.891C41.9719 54.8453 40.9709 54.8225 39.7185 54.8399C37.9518 54.8652 37.4219 54.8403 37.3513 54.7295C37.2845 54.6237 37.2604 54.637 37.2592 54.7802ZM61.6039 54.7341C61.6039 54.8279 60.9561 54.8702 59.2526 54.8885L56.9007 54.9138L59.2169 54.9462C61.3749 54.9765 61.9169 54.9179 61.6799 54.6806C61.638 54.6391 61.6039 54.6631 61.6039 54.7341ZM117.057 54.7802C117.049 54.9603 117.264 54.974 120.097 54.974H123.145L123.085 55.389C123.029 55.7836 123.031 55.7878 123.135 55.472C123.339 54.8528 123.391 54.8632 120.16 54.8632C117.877 54.8632 117.164 54.8308 117.121 54.725C117.088 54.6424 117.062 54.6648 117.057 54.7802ZM46.1995 54.886C46.2427 54.9287 47.1839 54.9785 48.2916 54.9968C49.3992 55.0146 50.2703 54.9943 50.2271 54.9511C50.1844 54.9084 49.2427 54.8586 48.1351 54.8408C47.0275 54.8225 46.1564 54.8433 46.1995 54.886ZM101.651 54.8935C101.698 54.9404 102.779 54.9648 104.053 54.9482L106.369 54.9184L103.967 54.8632C102.646 54.8329 101.604 54.8466 101.651 54.8935ZM75.4654 55.3612C75.4666 55.6048 75.489 55.6915 75.5156 55.5537C75.5422 55.4159 75.5413 55.2167 75.5135 55.1109C75.4857 55.0051 75.4641 55.118 75.4654 55.3612ZM80.008 56.4128C80.008 56.7473 80.0287 56.8842 80.0541 56.717C80.0794 56.5497 80.0794 56.2758 80.0541 56.1082C80.0287 55.9409 80.008 56.0779 80.008 56.4128ZM84.8996 56.7448C85.1992 57.049 85.4694 57.298 85.4997 57.298C85.5304 57.298 85.31 57.049 85.01 56.7448C84.7104 56.4402 84.4402 56.1912 84.4099 56.1912C84.3792 56.1912 84.5996 56.4402 84.8996 56.7448ZM75.5824 57.2428C75.5828 57.608 75.6036 57.7441 75.6285 57.5449C75.653 57.3461 75.6526 57.0473 75.6272 56.8809C75.6019 56.7149 75.5816 56.8776 75.5824 57.2428ZM80.1155 58.4048C80.1155 58.6787 80.1371 58.7907 80.1636 58.6538C80.1898 58.5168 80.1898 58.2927 80.1636 58.1558C80.1371 58.0188 80.1155 58.1309 80.1155 58.4048ZM75.694 58.958C75.694 59.3535 75.7144 59.5153 75.7389 59.3178C75.7634 59.1198 75.7634 58.7961 75.7389 58.5982C75.7144 58.4006 75.694 58.5625 75.694 58.958ZM89.045 59.871C89.316 60.1602 89.5526 60.3968 89.5704 60.3968C89.6534 60.3968 89.5659 60.2972 89.077 59.8386L88.5516 59.3452L89.045 59.871ZM94.3977 60.2308C94.3981 60.6566 94.4185 60.8176 94.4421 60.5877C94.4662 60.3582 94.4658 60.0096 94.4413 59.8133C94.4168 59.6166 94.3973 59.8046 94.3977 60.2308ZM137.474 60.2387C137.433 60.4009 137.421 60.5549 137.447 60.581C137.474 60.6068 137.528 60.4956 137.569 60.3333C137.61 60.171 137.622 60.0171 137.596 59.9909C137.569 59.9652 137.515 60.0764 137.474 60.2387ZM75.7953 60.5072C75.7953 60.7205 75.8177 60.8076 75.8455 60.701C75.8737 60.5943 75.8737 60.42 75.8455 60.3138C75.8177 60.2071 75.7953 60.2943 75.7953 60.5072ZM80.2217 60.5072C80.2217 60.7205 80.2445 60.8076 80.2723 60.701C80.3001 60.5943 80.3001 60.42 80.2723 60.3138C80.2445 60.2071 80.2217 60.2943 80.2217 60.5072ZM82.6528 60.7002C83.1823 60.7205 84.0787 60.7205 84.6448 60.7006C85.2109 60.6802 84.7776 60.6636 83.682 60.6636C82.5864 60.6636 82.1232 60.6802 82.6528 60.7002ZM85.5437 62.4992C85.5437 62.8951 85.5636 63.0569 85.5881 62.859C85.6126 62.661 85.6126 62.3373 85.5881 62.1398C85.5636 61.9418 85.5437 62.1037 85.5437 62.4992ZM75.9057 62.61C75.9057 62.8229 75.9285 62.91 75.9563 62.8038C75.9841 62.6971 75.9841 62.5228 75.9563 62.4162C75.9285 62.3099 75.9057 62.3971 75.9057 62.61ZM80.3325 62.61C80.3325 62.8229 80.3553 62.91 80.3831 62.8038C80.411 62.6971 80.411 62.5228 80.3831 62.4162C80.3553 62.3099 80.3325 62.3971 80.3325 62.61ZM81.1177 63.3292C81.1181 63.7554 81.1385 63.916 81.1621 63.6865C81.1862 63.457 81.1858 63.1084 81.1613 62.9117C81.1368 62.7154 81.1173 62.9034 81.1177 63.3292ZM104.391 63.5093C104.352 63.7035 104.34 63.8832 104.366 63.9081C104.391 63.9334 104.445 63.7973 104.488 63.606C104.53 63.4147 104.541 63.235 104.513 63.2068C104.484 63.1785 104.43 63.3147 104.391 63.5093ZM80.4529 64.27C80.4529 64.6655 80.4728 64.8273 80.4977 64.6298C80.5222 64.4318 80.5222 64.1081 80.4977 63.9102C80.4728 63.7126 80.4529 63.8745 80.4529 64.27ZM116.329 63.7948C119.394 63.8732 122.028 63.8753 122.028 63.7998C122.028 63.7541 120.472 63.7272 118.57 63.7404C116.668 63.7533 115.659 63.7778 116.329 63.7948ZM128.253 63.7985C128.603 63.8205 129.176 63.8205 129.526 63.7985C129.876 63.7766 129.589 63.7587 128.89 63.7587C128.19 63.7587 127.903 63.7766 128.253 63.7985ZM76.0211 64.7128C76.0211 64.9867 76.0427 65.0987 76.0688 64.9618C76.0954 64.8248 76.0954 64.6007 76.0688 64.4638C76.0427 64.3268 76.0211 64.4389 76.0211 64.7128ZM134.976 64.768C134.708 65.0419 134.513 65.266 134.543 65.266C134.573 65.266 134.818 65.0419 135.087 64.768C135.356 64.4941 135.551 64.27 135.52 64.27C135.49 64.27 135.245 64.4941 134.976 64.768ZM80.5624 65.8748C80.5628 66.24 80.5836 66.3761 80.6085 66.1769C80.633 65.9781 80.6326 65.6793 80.6072 65.5129C80.5819 65.3469 80.5616 65.5096 80.5624 65.8748ZM76.1016 66.4213C76.1016 66.6309 76.1398 66.826 76.1867 66.8546C76.2331 66.8837 76.2531 66.7123 76.2302 66.4741C76.1792 65.9387 76.1016 65.9072 76.1016 66.4213ZM50.2313 66.594C50.2313 66.8069 50.2537 66.894 50.2815 66.7878C50.3097 66.6811 50.3097 66.5068 50.2815 66.4002C50.2537 66.2939 50.2313 66.3811 50.2313 66.594ZM85.0378 67.2256C85.1747 67.2518 85.3988 67.2518 85.5358 67.2256C85.6728 67.1991 85.5607 67.1775 85.2868 67.1775C85.0129 67.1775 84.9008 67.1991 85.0378 67.2256ZM86.8086 67.2273C87.0061 67.2518 87.3298 67.2518 87.5278 67.2273C87.7258 67.2028 87.5639 67.1829 87.168 67.1829C86.7725 67.1829 86.6106 67.2028 86.8086 67.2273Z"
          fill="#2A2A27"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M90.9591 46.7545C91.1873 46.7785 91.5608 46.7785 91.7891 46.7545C92.0173 46.7308 91.8306 46.7113 91.3741 46.7113C90.9176 46.7113 90.7308 46.7308 90.9591 46.7545ZM91.953 51.322C91.953 51.5349 91.9758 51.622 92.0036 51.5158C92.0314 51.4091 92.0314 51.2348 92.0036 51.1282C91.9758 51.0219 91.953 51.1091 91.953 51.322ZM110.604 66.8936C110.741 66.9202 110.941 66.9189 111.046 66.8915C111.152 66.8637 111.039 66.8422 110.796 66.8434C110.553 66.8446 110.466 66.8671 110.604 66.8936ZM113.819 66.8982C115.239 66.9156 117.53 66.9156 118.91 66.8982C120.291 66.8808 119.129 66.8662 116.329 66.8662C113.529 66.8662 112.4 66.8808 113.819 66.8982ZM124.941 66.8982C125.903 66.9164 127.447 66.9164 128.371 66.8982C129.296 66.8795 128.508 66.8646 126.621 66.8646C124.734 66.8646 123.978 66.8795 124.941 66.8982ZM85.9247 67.2256C86.0625 67.2522 86.2617 67.2509 86.3675 67.2235C86.4733 67.1957 86.3609 67.1742 86.1173 67.1754C85.8737 67.1766 85.7873 67.1991 85.9247 67.2256Z"
          fill="#2A2A27"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.6757 46.8769C43.6757 46.9707 43.0146 47.013 41.2687 47.0313L38.8617 47.0566L41.2334 47.089C43.4433 47.1189 43.9895 47.0616 43.7517 46.8234C43.7097 46.7819 43.6757 46.8059 43.6757 46.8769ZM30.6891 47.089C30.6609 47.1346 31.2431 47.1591 31.9831 47.1429C34.5059 47.089 34.7694 47.0496 32.7541 47.0276C31.6469 47.0159 30.7177 47.0433 30.6891 47.089ZM48.8495 47.0886C49.4127 47.1085 50.334 47.1085 50.8967 47.0886C51.4599 47.0682 50.9992 47.052 49.8733 47.052C48.747 47.052 48.2864 47.0682 48.8495 47.0886ZM54.4828 47.089C54.4541 47.1346 55.0364 47.1591 55.7763 47.1429C58.2995 47.089 58.563 47.0496 56.5474 47.0276C55.4402 47.0159 54.511 47.0433 54.4828 47.089ZM63.3032 47.1741C63.2667 47.2695 63.2675 47.3786 63.3057 47.4164C63.3434 47.4546 63.3746 47.4027 63.3746 47.301C63.3746 47.0823 67.2888 47.013 67.3963 47.2301C67.4275 47.2923 67.4399 47.2799 67.4241 47.2023C67.3772 46.969 63.3924 46.9421 63.3032 47.1741ZM73.9604 47.089C73.9322 47.1346 75.1444 47.172 76.6546 47.172C78.1648 47.172 79.377 47.1346 79.3488 47.089C79.3205 47.0433 78.1083 47.006 76.6546 47.006C75.2008 47.006 73.9886 47.0433 73.9604 47.089ZM101.052 47.0877C102.461 47.1118 103.067 47.1616 103.135 47.2575C103.205 47.3558 103.219 47.3475 103.186 47.2272C103.148 47.0877 102.818 47.0608 101.103 47.0574L99.0646 47.0533L101.052 47.0877ZM109.003 47.0886C109.599 47.1085 110.546 47.1085 111.105 47.0886C111.665 47.0682 111.177 47.052 110.021 47.052C108.864 47.052 108.406 47.0686 109.003 47.0886ZM114.576 47.0877C114.547 47.1342 116.918 47.1587 119.845 47.1421C124.046 47.1189 125.187 47.1421 125.266 47.2529C125.34 47.3587 125.354 47.3525 125.32 47.2272C125.27 47.0462 114.686 46.9089 114.576 47.0877ZM127.03 47.1388C126.957 47.2118 126.901 47.3488 126.905 47.443C126.91 47.5617 126.939 47.5463 126.999 47.3932C127.083 47.1799 127.216 47.1699 130.671 47.1143L134.257 47.0566L130.71 47.0313C128.07 47.0126 127.129 47.04 127.03 47.1388ZM79.4529 48.6108C79.4538 48.915 79.4753 49.0262 79.5007 48.8581C79.526 48.69 79.5256 48.441 79.499 48.3049C79.4729 48.1688 79.4521 48.3062 79.4529 48.6108ZM79.565 50.2152C79.565 50.5501 79.5857 50.687 79.611 50.5198C79.6364 50.3521 79.6364 50.0782 79.611 49.911C79.5857 49.7437 79.565 49.8807 79.565 50.2152ZM96.1675 50.4368C96.1675 50.8323 96.1874 50.9941 96.2119 50.7962C96.2364 50.5986 96.2364 50.2749 96.2119 50.077C96.1874 49.879 96.1675 50.0409 96.1675 50.4368ZM32.0482 50.0757C33.9261 50.1077 34.0357 50.1214 34.083 50.3301C34.1232 50.5094 34.1299 50.5036 34.1178 50.2998C34.1033 50.0492 34.1029 50.0492 32.0835 50.0454L30.0637 50.0417L32.0482 50.0757ZM39.3875 50.0766C40.042 50.0961 41.1127 50.0961 41.7667 50.0766C42.4212 50.0571 41.8858 50.0409 40.5773 50.0409C39.2684 50.0409 38.7331 50.0571 39.3875 50.0766ZM48.1855 50.0766C48.7487 50.0965 49.67 50.0965 50.2327 50.0766C50.7959 50.0562 50.3352 50.04 49.2093 50.04C48.083 50.04 47.6224 50.0562 48.1855 50.0766ZM119.676 50.0766C120.604 50.0952 122.123 50.0952 123.052 50.0766C123.98 50.0583 123.221 50.043 121.364 50.043C119.508 50.043 118.748 50.0583 119.676 50.0766ZM130.511 50.077C130.482 50.1226 130.865 50.1467 131.362 50.1301C132.913 50.0791 133.089 50.0317 131.801 50.0127C131.12 50.0023 130.539 50.0313 130.511 50.077ZM87.8621 52.318C87.8621 52.5919 87.8837 52.7039 87.9102 52.567C87.9364 52.43 87.9364 52.2059 87.9102 52.069C87.8837 51.932 87.8621 52.0441 87.8621 52.318ZM75.4706 54.0888C75.4706 54.4233 75.4913 54.5602 75.5166 54.393C75.542 54.2257 75.542 53.9518 75.5166 53.7842C75.4913 53.6169 75.4706 53.7539 75.4706 54.0888ZM88.2746 53.57C88.2746 53.5891 88.4365 53.751 88.6344 53.9294L88.9938 54.2548L88.6688 53.895C88.3659 53.5597 88.2746 53.4846 88.2746 53.57ZM79.7791 53.978C79.7791 54.1909 79.8015 54.278 79.8293 54.1718C79.8576 54.0651 79.8576 53.8908 79.8293 53.7842C79.8015 53.6779 79.7791 53.7651 79.7791 53.978ZM56.8736 54.8632C56.9234 55.0454 61.4423 55.1794 61.6183 55.0039C61.6656 54.957 60.6522 54.9329 59.3669 54.9507C57.5554 54.9756 57.0072 54.9507 56.9292 54.8399C56.852 54.7304 56.8387 54.7362 56.8736 54.8632ZM116.966 54.8632C117.004 55.0047 117.452 55.0338 119.984 55.0587C122.187 55.0806 122.983 55.1238 123.055 55.2247C123.125 55.3243 123.139 55.3164 123.106 55.1952C123.068 55.0541 122.62 55.025 120.088 54.9997C117.885 54.9781 117.089 54.935 117.017 54.8337C116.947 54.7345 116.933 54.7424 116.966 54.8632ZM31.0045 54.974L28.9017 55.0367L30.9705 55.0607C32.2566 55.0757 33.0646 55.0429 33.1073 54.974C33.1447 54.913 33.16 54.874 33.1413 54.8873C33.1227 54.9005 32.1611 54.9395 31.0045 54.974ZM101.651 55.0039C101.698 55.0508 102.778 55.0757 104.053 55.0591L106.369 55.0288L103.967 54.974C102.646 54.9433 101.604 54.957 101.651 55.0039ZM38.3915 55.0566C39.046 55.0761 40.1167 55.0761 40.7707 55.0566C41.4252 55.0371 40.8898 55.0209 39.5813 55.0209C38.2724 55.0209 37.7371 55.0371 38.3915 55.0566ZM47.1401 55.0566C47.7365 55.0765 48.6827 55.0765 49.2425 55.0566C49.8024 55.0362 49.3143 55.0201 48.1577 55.0201C47.0015 55.0201 46.5434 55.0367 47.1401 55.0566ZM75.581 55.638C75.581 55.9729 75.6017 56.1098 75.627 55.9422C75.6524 55.7749 75.6524 55.501 75.627 55.3338C75.6017 55.1661 75.581 55.3031 75.581 55.638ZM79.892 56.136C79.8932 56.3796 79.9157 56.4659 79.9422 56.3286C79.9688 56.1908 79.9675 55.9916 79.9401 55.8857C79.9123 55.7799 79.8908 55.8924 79.892 56.136ZM84.8438 56.558C84.8438 56.5771 85.0056 56.739 85.2036 56.9174L85.5634 57.2428L85.238 56.883C84.9351 56.5477 84.8438 56.4726 84.8438 56.558ZM75.6864 57.5748C75.6876 57.818 75.7105 57.9047 75.737 57.7669C75.7632 57.6296 75.7623 57.4304 75.7345 57.3246C75.7067 57.2187 75.6851 57.3312 75.6864 57.5748ZM80.0061 58.0172C80.007 58.3218 80.0285 58.433 80.0539 58.2649C80.0796 58.0965 80.0788 57.8475 80.0526 57.7113C80.026 57.5752 80.0053 57.713 80.0061 58.0172ZM28.3215 57.8512C28.3593 57.9894 28.6979 58.0226 30.3447 58.0475C31.7507 58.0691 32.3508 58.1172 32.4192 58.2135C32.4885 58.3118 32.5031 58.3035 32.4703 58.1832C32.4325 58.045 32.0939 58.0122 30.4467 57.9869C29.0411 57.9653 28.441 57.9176 28.3726 57.8209C28.3028 57.723 28.2887 57.7313 28.3215 57.8512ZM47.4937 57.962L45.3913 58.0247L47.4597 58.0487C48.7458 58.0637 49.5542 58.0309 49.5965 57.962C49.6343 57.901 49.6497 57.862 49.6306 57.8753C49.6119 57.8885 48.6503 57.9275 47.4937 57.962ZM36.5564 58.0359C36.5157 58.0765 36.4833 58.1637 36.4842 58.2293C36.4854 58.3023 36.5199 58.2961 36.5722 58.2135C36.6352 58.1147 37.2943 58.0682 38.9775 58.045L41.2965 58.0126L38.9634 57.9873C37.6802 57.9732 36.5971 57.9952 36.5564 58.0359ZM57.0665 58.0388C59.1171 58.1176 61.0257 58.1209 60.9783 58.045C60.9501 57.9993 59.8715 57.972 58.5817 57.9844C57.2919 57.9964 56.61 58.0209 57.0665 58.0388ZM102.019 58.0446C102.67 58.0641 103.765 58.0641 104.453 58.0446C105.141 58.0251 104.609 58.0093 103.27 58.0093C101.931 58.0089 101.368 58.0251 102.019 58.0446ZM116.346 58.045C116.317 58.0906 117.223 58.1151 118.359 58.0998C122.172 58.0475 122.547 58.0085 119.461 57.9852C117.776 57.9724 116.374 57.9993 116.346 58.045ZM80.1169 59.6772C80.1178 59.9818 80.1393 60.093 80.1647 59.9249C80.19 59.7565 80.1896 59.5075 80.163 59.3713C80.1369 59.2352 80.1161 59.373 80.1169 59.6772ZM89.1046 59.8432C89.3424 60.0868 89.5619 60.286 89.5922 60.286C89.6225 60.286 89.4532 60.0868 89.2154 59.8432C88.9776 59.6 88.7581 59.4008 88.7278 59.4008C88.6971 59.4008 88.8668 59.6 89.1046 59.8432ZM81.5748 60.8467C81.5346 60.9114 81.5317 60.9944 81.5682 61.0313C81.6047 61.0679 81.6346 61.0396 81.6346 60.9683C81.6346 60.7284 85.59 60.7923 85.653 61.033C85.6912 61.1787 85.7066 61.165 85.7165 60.9778L85.7294 60.7288H83.6884C82.3625 60.7288 81.6221 60.7699 81.5748 60.8467ZM80.2215 61.3928C80.2215 61.6057 80.2443 61.6928 80.2721 61.5862C80.2999 61.48 80.2999 61.3057 80.2721 61.199C80.2443 61.0923 80.2215 61.1795 80.2215 61.3928ZM89.9661 61.5588C89.967 61.863 89.9886 61.9742 90.0139 61.8061C90.0396 61.6381 90.0388 61.3891 90.0126 61.253C89.9861 61.1168 89.9653 61.2542 89.9661 61.5588ZM75.9055 61.7248C75.9055 61.9377 75.9283 62.0249 75.9561 61.9182C75.9839 61.812 75.9839 61.6377 75.9561 61.531C75.9283 61.4243 75.9055 61.5115 75.9055 61.7248ZM85.4273 62.4992C85.4273 62.7731 85.4489 62.8851 85.4754 62.7482C85.5016 62.6112 85.5016 62.3871 85.4754 62.2502C85.4489 62.1132 85.4273 62.2253 85.4273 62.4992ZM131.761 63.025L131.379 63.44L131.794 63.0586C132.18 62.7038 132.26 62.61 132.176 62.61C132.157 62.61 131.97 62.7968 131.761 63.025ZM76.0238 63.4952C76.0238 63.8301 76.0445 63.9671 76.0698 63.7998C76.0952 63.6321 76.0952 63.3582 76.0698 63.191C76.0445 63.0238 76.0238 63.1607 76.0238 63.4952ZM80.3323 63.4952C80.3323 63.7085 80.3551 63.7957 80.3829 63.689C80.4108 63.5823 80.4108 63.408 80.3829 63.3018C80.3551 63.1952 80.3323 63.2823 80.3323 63.4952ZM127.659 63.8596C127.708 63.9073 128.216 63.9322 128.789 63.9139L129.83 63.8811L128.701 63.8268C128.08 63.7965 127.611 63.8114 127.659 63.8596ZM116.861 63.9102C117.823 63.9285 119.367 63.9285 120.292 63.9102C121.216 63.8915 120.429 63.8766 118.542 63.8766C116.655 63.8766 115.899 63.8915 116.861 63.9102ZM76.1329 65.1C76.1338 65.4042 76.1553 65.5158 76.1806 65.3473C76.206 65.1793 76.2055 64.9303 76.179 64.7942C76.1528 64.658 76.1321 64.7958 76.1329 65.1ZM92.1964 65.2938L91.8714 65.6532L92.2308 65.3283C92.4288 65.1494 92.5906 64.9875 92.5906 64.9685C92.5906 64.883 92.4993 64.9585 92.1964 65.2938ZM80.4431 65.598C80.4431 65.8109 80.4655 65.8981 80.4933 65.7918C80.5216 65.6852 80.5216 65.5109 80.4933 65.4042C80.4655 65.298 80.4431 65.3851 80.4431 65.598ZM39.5058 66.6492C39.5278 66.8613 39.6116 66.8708 41.4916 66.8746L43.4545 66.8787L41.5256 66.8443C39.8112 66.814 39.59 66.7891 39.5398 66.6193C39.4971 66.4745 39.4888 66.482 39.5058 66.6492ZM99.0094 66.5791C99.0094 66.6521 98.8974 66.7567 98.7604 66.8119C98.5919 66.8795 98.5695 66.9144 98.6915 66.919C98.8961 66.9268 99.1883 66.6256 99.0804 66.5177C99.0414 66.4786 99.0094 66.506 99.0094 66.5791ZM68.4015 66.7019C68.3421 66.7613 67.4233 66.8248 66.3597 66.843L64.4258 66.8762L66.3767 66.9011C67.9973 66.9219 68.3508 66.8978 68.4654 66.76C68.6181 66.5758 68.5708 66.5326 68.4015 66.7019ZM32.0283 66.8974C32.4695 66.9185 33.1916 66.9185 33.6327 66.8974C34.0743 66.8766 33.7132 66.8592 32.8305 66.8592C31.9478 66.8592 31.5867 66.8766 32.0283 66.8974ZM51.2287 66.8978C51.7616 66.9181 52.6331 66.9181 53.1655 66.8978C53.698 66.8775 53.2622 66.8609 52.1973 66.8609C51.132 66.8609 50.6963 66.8775 51.2287 66.8978ZM60.8057 66.8974C61.1887 66.919 61.7864 66.919 62.1337 66.897C62.4815 66.875 62.1682 66.8575 61.4378 66.8575C60.7073 66.858 60.4231 66.8758 60.8057 66.8974ZM77.573 66.8978C78.1087 66.9181 78.9553 66.9181 79.4542 66.8978C79.9534 66.877 79.5152 66.8604 78.4806 66.8604C77.446 66.8609 77.0376 66.8775 77.573 66.8978ZM96.2704 66.8974C96.6813 66.9185 97.3536 66.9185 97.7644 66.8974C98.1753 66.8762 97.8391 66.8588 97.0174 66.8588C96.1957 66.8588 95.8596 66.8762 96.2704 66.8974ZM105.238 66.8974C105.591 66.9194 106.138 66.919 106.456 66.897C106.773 66.8745 106.485 66.8563 105.815 66.8567C105.146 66.8571 104.886 66.8754 105.238 66.8974Z"
          fill="#2A2A27"
        />
      </g>
      <defs>
        <clipPath id="clip0_2107_26311">
          <rect
            width="166"
            height="110.667"
            fill="white"
            transform="translate(0.626953 0.525879)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
