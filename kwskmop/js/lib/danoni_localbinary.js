﻿'use strict';
/**
 * Dancing☆Onigiri (CW Edition)
 * ローカル起動用バイナリファイル定義
 *
 * Source by tickle
 * Created : 2020/03/22
 * Revised : 2020/05/21 (v15.1.0)
 *
 * https://github.com/cwtickle/danoniplus
 */

function loadBinary() {
    if (location.href.match(`^file`)) {
        C_IMG_ARROW = `data:image/svg+xml,${encodeURIComponent('<svg id="arrow" data-name="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:20px;}</style></defs><polygon class="cls-1" points="288.91 42.76 32.94 249.83 288.91 456.9 249.87 314.02 466.8 314.02 466.8 187.71 249.87 187.71 288.91 42.76"/></svg>')}`
        C_IMG_ARROWSD = `data:image/svg+xml,${encodeURIComponent('<svg id="arrowShadow" data-name="arrowShadow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><style>.cls-1{stroke:#000;stroke-miterlimit:10;stroke-width:30px;}</style></defs><polygon class="cls-1" points="288.91 42.76 32.94 249.83 288.91 456.9 249.87 314.02 466.8 314.02 466.8 187.71 249.87 187.71 288.91 42.76"/></svg>')}`;
        C_IMG_ONIGIRI = `data:image/svg+xml,${encodeURIComponent('<svg id="onigiri" data-name="onigiri" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><style>.cls-1{fill:none;stroke-width:12px;}.cls-1,.cls-2{stroke:#000;stroke-miterlimit:10;}.cls-2{stroke-width:10px;}</style></defs><line class="cls-1" x1="160.22" y1="238.02" x2="124.03" y2="275.84"/><line class="cls-1" x1="354.94" y1="238.9" x2="391.19" y2="277"/><polyline class="cls-1" points="190.92 262 256.82 433 322.73 262"/><line class="cls-1" x1="205.47" y1="309" x2="308.18" y2="308"/><rect class="cls-2" x="192.63" y="42" width="128.39" height="150"/><line class="cls-1" x1="181.5" y1="42" x2="59.96" y2="195"/><line class="cls-1" x1="331.29" y1="42" x2="444.27" y2="183"/><path class="cls-1" d="M66,213c-81.9,97.55-79.69,176.84,7.71,277"/><path class="cls-1" d="M422,483.88c85.52-95,87.73-172.58,7.71-270.88"/></svg>')}`;
        C_IMG_AASD = `data:image/svg+xml,${encodeURIComponent('<svg id="aaShadow" data-name="aaShadow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><style>.cls-1{stroke:#000;stroke-miterlimit:10;}</style></defs><polygon class="cls-1" points="177.5 25.5 49.5 180.5 6.5 274.5 -0.5 347.5 13.5 416.5 82 500 410.85 499 479.85 418 500 332 480 250 438 162 333 25 177.5 25.5"/></svg>')}`;
        C_IMG_GIKO = `data:image/svg+xml,${encodeURIComponent('<svg id="giko" data-name="giko" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:12px;}</style></defs><line class="cls-1" x1="118.5" y1="42" x2="62.41" y2="195"/><line class="cls-1" x1="388.1" y1="42.64" x2="445.06" y2="189.64"/><path class="cls-1" d="M68.45,213c-82.58,97.55-80.36,176.84,7.76,277"/><path class="cls-1" d="M427.46,483.88c86.24-95,88.46-172.58,7.77-270.88"/><path d="M262.56,262.91h80.73V416.82l10,.22-.95,54H342l-.79-39.36H249L248,471H237.76l-.95-54,8.85-.22c11.37-31.18,16.9-51.08,16.9-111.45Zm12.33,15.26v33.39c0,55.28-7.27,81.82-15.64,104.82H330.5V278.17Z"/><ellipse class="cls-1" cx="394.24" cy="248.5" rx="12.95" ry="15"/><ellipse class="cls-1" cx="209.12" cy="249" rx="12.95" ry="15"/><line class="cls-1" x1="388.6" y1="39.28" x2="332.51" y2="192.28"/><line class="cls-1" x1="116.25" y1="44.64" x2="173.2" y2="191.64"/><line class="cls-1" x1="49.46" y1="295" x2="152.16" y2="294"/><line class="cls-1" x1="38.24" y1="387" x2="138.35" y2="387"/><line class="cls-1" x1="97.79" y1="225" x2="53.78" y2="449"/><line class="cls-1" x1="144.39" y1="225" x2="102.11" y2="449"/></svg>')}`;
        C_IMG_IYO = `data:image/svg+xml,${encodeURIComponent('<svg id="iyo" data-name="iyo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:12px;}</style></defs><line class="cls-1" x1="116.37" y1="42" x2="60.85" y2="195"/><line class="cls-1" x1="383.19" y1="42.64" x2="439.56" y2="189.64"/><path class="cls-1" d="M66.83,213C-14.9,310.55-12.7,389.84,74.52,490"/><path class="cls-1" d="M422.15,483.88c85.34-95,87.55-172.58,7.69-270.88"/><ellipse class="cls-1" cx="389.27" cy="248.5" rx="12.81" ry="15"/><ellipse class="cls-1" cx="206.05" cy="249" rx="12.81" ry="15"/><line class="cls-1" x1="383.69" y1="39.28" x2="328.17" y2="192.28"/><line class="cls-1" x1="114.13" y1="44.64" x2="170.51" y2="191.64"/><line class="cls-1" x1="48.04" y1="295" x2="149.68" y2="294"/><line class="cls-1" x1="36.93" y1="387" x2="136.01" y2="387"/><path d="M303.57,373.7c-.59,5.76-1,10.13-1,14.28.15,10.6,2.36,23,14.57,23,13.69,0,27.08-30.64,27.08-68,0-16.82-3.23-34.79-10.45-46.54l.15-.7h10.89c5.15,7.15,10.75,25.35,10.75,47,0,45.62-16.78,83.18-38.27,83.18-12.07,0-19.13-9-21.49-22.81H295C290.32,416.55,283.11,426,270.6,426c-13.1,0-25.9-15.21-25.9-48.39,0-38.48,14.72-71.43,24.43-81.8H281.2l-.15.7c-10.15,12-25,42.39-25,80.41,0,25.35,9.13,34.1,17.66,34.1,10.45,0,17.22-15,19.14-34.33l5.44-46.77H309Z"/></svg>')}`;
        C_IMG_C = `data:image/svg+xml,${encodeURIComponent('<svg id="c" data-name="c" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:12px;}</style></defs><line class="cls-1" x1="115.62" y1="42" x2="59.84" y2="195"/><line class="cls-1" x1="383.69" y1="42.64" x2="440.33" y2="189.64"/><path class="cls-1" d="M65.85,213c-82.12,97.55-79.91,176.84,7.72,277"/><path class="cls-1" d="M422.84,483.88c85.75-95,88-172.58,7.72-270.88"/><ellipse class="cls-1" cx="389.8" cy="248.5" rx="12.87" ry="15"/><ellipse class="cls-1" cx="205.73" cy="249" rx="12.87" ry="15"/><line class="cls-1" x1="384.2" y1="39.28" x2="328.42" y2="192.28"/><line class="cls-1" x1="113.37" y1="44.64" x2="170.01" y2="191.64"/><line class="cls-1" x1="75.29" y1="277" x2="161.1" y2="365"/><line class="cls-1" x1="68.42" y1="364" x2="156.81" y2="278"/><line class="cls-1" x1="113.9" y1="379" x2="115.62" y2="264"/><line class="cls-1" x1="229.75" y1="326" x2="368.78" y2="326"/><line class="cls-1" x1="228.9" y1="316" x2="234.05" y2="327"/></svg>')}`;
        C_IMG_MORARA = `data:image/svg+xml,${encodeURIComponent('<svg id="morara" data-name="morara" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:12px;}</style></defs><line class="cls-1" x1="117.96" y1="42" x2="61.63" y2="195"/><line class="cls-1" x1="388.66" y1="42.64" x2="445.86" y2="189.64"/><path class="cls-1" d="M67.7,213C-15.22,310.55-13,389.84,75.49,490"/><path class="cls-1" d="M428.19,483.88C514.78,388.84,517,311.3,436,213"/><ellipse cx="160.42" cy="333" rx="13" ry="15"/><line class="cls-1" x1="389.17" y1="39.28" x2="332.84" y2="192.28"/><line class="cls-1" x1="115.69" y1="44.64" x2="172.88" y2="191.64"/><polyline class="cls-1" points="219.35 261 286.07 432 352.8 261"/><line class="cls-1" x1="234.08" y1="308" x2="338.07" y2="307"/><ellipse cx="400.46" cy="333" rx="13" ry="15"/><line class="cls-1" x1="172.55" y1="192" x2="332.87" y2="192"/></svg>')}`;
        C_IMG_MONAR = `data:image/svg+xml,${encodeURIComponent('<svg id="monar" data-name="monar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:12px;}</style></defs><line class="cls-1" x1="163.22" y1="238.02" x2="127.03" y2="275.84"/><line class="cls-1" x1="357.94" y1="238.9" x2="394.19" y2="277"/><polyline class="cls-1" points="193.92 262 259.82 433 325.73 262"/><line class="cls-1" x1="208.47" y1="309" x2="311.18" y2="308"/><path class="cls-1" d="M69,213c-81.9,97.55-79.69,176.84,7.71,277"/><path class="cls-1" d="M425,483.88c85.52-95,87.73-172.58,7.71-270.88"/><line class="cls-1" x1="121.16" y1="45" x2="65.53" y2="198"/><line class="cls-1" x1="388.54" y1="45.64" x2="445.03" y2="192.64"/><line class="cls-1" x1="389.04" y1="42.28" x2="333.4" y2="195.28"/><line class="cls-1" x1="118.92" y1="47.64" x2="175.41" y2="194.64"/><line class="cls-1" x1="175.09" y1="195" x2="333.43" y2="195"/></svg>')}`;
        C_IMG_CURSOR = `data:image/svg+xml,${encodeURIComponent('<svg id="cursor" data-name="cursor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 100"><defs><style>.cls-1{fill:#f7931e;stroke:#999;stroke-miterlimit:10;}</style></defs><polygon class="cls-1" points="7.5 5.5 7.5 92.5 44.5 48.5 7.5 5.5"/></svg>')}`;
        C_IMG_FRZBAR = `data:image/svg+xml,${encodeURIComponent('<svg id="frzbar" data-name="frzbar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><rect width="500" height="500"/></svg>')}`;
        C_IMG_LIFEBAR = C_IMG_FRZBAR;
        C_IMG_LIFEBORDER = `data:image/svg+xml,${encodeURIComponent('<svg id="borderline" data-name="borderline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 160"><path d="M400,160H80L0,80,80.8,0H400Z"/></svg>')}`;
    }
}
