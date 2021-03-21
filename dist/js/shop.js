let line=document.querySelector(".js-slider-line"),arrRightMain=document.querySelector(".js-arrow-right"),arrLeftMain=document.querySelector(".js-arrow-left"),objects=document.querySelectorAll(".js-slider-object"),objectWidth=objects[0].getBoundingClientRect().width,lineWidth=Math.round(line.getBoundingClientRect().width),mainImg=document.querySelectorAll(".js-slider-object img"),lineS=document.querySelector(".additional-photo"),innerStringImg="",basketButton=document.querySelector(".basket"),basketPopup=document.querySelector(".basket-popup"),productShopAdd=document.querySelector(".donate-button"),productShopPlus=document.querySelector(".button-plus"),productShopMinus=document.querySelector(".button-minus"),productShopQuantify=document.querySelector(".score input"),productShopPrice=document.querySelector(".product-price-on-img span"),productShopImg=document.querySelector(".collage img"),productShopName=document.querySelector(".product-section h2"),productShopDescription=document.querySelector(".about-us-text");if(objects.length>1){for(let t=0;t<mainImg.length;t++)innerStringImg=`${innerStringImg}${mainImg[t].outerHTML}`,mainImg[t].dataset.imgNumber=t;lineS.innerHTML=innerStringImg;let t=document.querySelector(".switch-arrow-right"),e=document.querySelector(".switch-arrow-left"),o=Math.round(lineS.getBoundingClientRect().width),n=document.querySelectorAll(".additional-photo img"),r=n[1].getBoundingClientRect().width;for(let t=0;t<n.length;t++)n[t].dataset.switchNumber=t;if(n.length<=3&&(t.style.opacity="0",e.style.opacity="0",2==n.length))for(let t=0;t<n.length;t++)n[t].style.width="45%";function leftS(t){lineLeft(t,lineS,r)}function rightS(t){lineRight(t,lineS,o,r)}e.onclick=leftS,t.onclick=rightS,e.ondblclick=falseS,t.ondblclick=falseS,n.forEach(t=>{t.onclick=()=>{console.log(objects[t.getAttribute("data-switch-number")].offsetLeft),line.scrollTo(objects[t.getAttribute("data-switch-number")].scrollWidth*t.getAttribute("data-switch-number"),0)}})}else arrRightMain.style.display="none",arrLeftMain.style.display="none",document.querySelector(".switch-slider-line").style.display="none",line.style.display="inline-block",line.classList.add("alone-img");function left(t){lineLeft(t,line,objectWidth)}function right(t){lineRight(t,line,lineWidth,objectWidth)}function basketOpen(t){popupOpen(t,basketPopup)}function productAdd(t){if(t.preventDefault(),void 0===orderProducts[0])basketProducts.innerHTML=`<figure class="product">${productShopImg.outerHTML}<figcaption> <p class="product-name">${productShopName.textContent}</p><div class="product-info"><div class="product-description">${productShopDescription.outerHTML}</div><div class="product-order-info"> <form class="product-quantity"> <button class="product-minus">-</button><label><input class="product-amount" type="number" name="product-quantity" value="${productShopQuantify.value}"/></label><button class="product-plus">+</button></form><div class="price-wrap"> <p class="product-price">${productShopPrice.textContent.slice(0,productShopPrice.textContent.length-1)*productShopQuantify.value}$</p><span class="delete-product"></span></div></div></div></figcaption></figure>`;else{for(let t=0;t<orderProducts.length;t++)innerString=`${innerString}${orderProducts[t].outerHTML}`;basketProducts.innerHTML=`${innerString}<figure class="product">${productShopImg.outerHTML}<figcaption> <p class="product-name">${productShopName.textContent}</p><div class="product-info"><div class="product-description">${productShopDescription.outerHTML}</div><div class="product-order-info"> <form class="product-quantity"> <button class="product-minus">-</button><label><input class="product-amount" type="number" name="product-quantity" value="${productShopQuantify.value}"/></label><button class="product-plus">+</button></form><div class="price-wrap"> <p class="product-price">${productShopPrice.textContent.slice(0,productShopPrice.textContent.length-1)*productShopQuantify.value}$</p><span class="delete-product"></span></div></div></div></figcaption></figure>`,innerString=""}refreshProducts()}function prShopMinus(t){if(t.preventDefault(),!(productShopQuantify.value>0))return!1;productShopQuantify.value=productShopQuantify.value-1,productShopQuantify.setAttribute("value",productShopQuantify.value)}function prShopPlus(t){t.preventDefault(),productShopQuantify.value=parseInt(productShopQuantify.value)+1,productShopQuantify.setAttribute("value",productShopQuantify.value)}arrLeftMain.onclick=left,arrRightMain.onclick=right,arrLeftMain.ondblclick=falseS,arrRightMain.ondblclick=falseS,basketButton.onclick=basketOpen,productShopAdd.onclick=productAdd,productShopMinus.onclick=prShopMinus,productShopPlus.onclick=prShopPlus;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuanMiXSwibmFtZXMiOlsibGluZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFyclJpZ2h0TWFpbiIsImFyckxlZnRNYWluIiwib2JqZWN0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvYmplY3RXaWR0aCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwibGluZVdpZHRoIiwiTWF0aCIsInJvdW5kIiwibWFpbkltZyIsImxpbmVTIiwiaW5uZXJTdHJpbmdJbWciLCJiYXNrZXRCdXR0b24iLCJiYXNrZXRQb3B1cCIsInByb2R1Y3RTaG9wQWRkIiwicHJvZHVjdFNob3BQbHVzIiwicHJvZHVjdFNob3BNaW51cyIsInByb2R1Y3RTaG9wUXVhbnRpZnkiLCJwcm9kdWN0U2hvcFByaWNlIiwicHJvZHVjdFNob3BJbWciLCJwcm9kdWN0U2hvcE5hbWUiLCJwcm9kdWN0U2hvcERlc2NyaXB0aW9uIiwibGVuZ3RoIiwiaSIsIm91dGVySFRNTCIsImRhdGFzZXQiLCJpbWdOdW1iZXIiLCJpbm5lckhUTUwiLCJhcnJSaWdodFMiLCJhcnJMZWZ0UyIsImxpbmVTV2lkdGgiLCJzd2l0Y2hlcyIsInN3aXRjaFdpZHRoIiwic3dpdGNoTnVtYmVyIiwic3R5bGUiLCJvcGFjaXR5IiwibGVmdFMiLCJldmVudCIsImxpbmVMZWZ0IiwicmlnaHRTIiwibGluZVJpZ2h0Iiwib25jbGljayIsIm9uZGJsY2xpY2siLCJmYWxzZVMiLCJmb3JFYWNoIiwiZWxlbSIsImNvbnNvbGUiLCJsb2ciLCJnZXRBdHRyaWJ1dGUiLCJvZmZzZXRMZWZ0Iiwic2Nyb2xsVG8iLCJzY3JvbGxXaWR0aCIsImRpc3BsYXkiLCJjbGFzc0xpc3QiLCJhZGQiLCJsZWZ0IiwicmlnaHQiLCJiYXNrZXRPcGVuIiwicG9wdXBPcGVuIiwicHJvZHVjdEFkZCIsInByZXZlbnREZWZhdWx0IiwidW5kZWZpbmVkIiwib3JkZXJQcm9kdWN0cyIsImJhc2tldFByb2R1Y3RzIiwidGV4dENvbnRlbnQiLCJ2YWx1ZSIsInNsaWNlIiwiaW5uZXJTdHJpbmciLCJyZWZyZXNoUHJvZHVjdHMiLCJwclNob3BNaW51cyIsInNldEF0dHJpYnV0ZSIsInByU2hvcFBsdXMiLCJwYXJzZUludCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsS0FBT0MsU0FBU0MsY0FBYyxtQkFDOUJDLGFBQWVGLFNBQVNDLGNBQWMsbUJBQ3RDRSxZQUFjSCxTQUFTQyxjQUFjLGtCQUNyQ0csUUFBVUosU0FBU0ssaUJBQWlCLHFCQUNwQ0MsWUFBY0YsUUFBUSxHQUFHRyx3QkFBd0JDLE1BQ2pEQyxVQUFZQyxLQUFLQyxNQUFNWixLQUFLUSx3QkFBd0JDLE9BQ3BESSxRQUFVWixTQUFTSyxpQkFBaUIseUJBRXBDUSxNQUFRYixTQUFTQyxjQUFjLHFCQUMvQmEsZUFBaUIsR0FFakJDLGFBQWVmLFNBQVNDLGNBQWMsV0FDdENlLFlBQWNoQixTQUFTQyxjQUFjLGlCQUNyQ2dCLGVBQWlCakIsU0FBU0MsY0FBYyxrQkFDeENpQixnQkFBa0JsQixTQUFTQyxjQUFjLGdCQUN6Q2tCLGlCQUFtQm5CLFNBQVNDLGNBQWMsaUJBQzFDbUIsb0JBQXNCcEIsU0FBU0MsY0FBYyxnQkFDN0NvQixpQkFBbUJyQixTQUFTQyxjQUFjLDhCQUMxQ3FCLGVBQWlCdEIsU0FBU0MsY0FBYyxnQkFDeENzQixnQkFBa0J2QixTQUFTQyxjQUFjLHVCQUN6Q3VCLHVCQUF5QnhCLFNBQVNDLGNBQWMsa0JBRXBELEdBQUdHLFFBQVFxQixPQUFTLEVBQUUsQ0FDcEIsSUFBSSxJQUFJQyxFQUFJLEVBQUdBLEVBQUlkLFFBQVFhLE9BQVFDLElBQ2pDWixlQUFpQixHQUFHQSxpQkFBaUJGLFFBQVFjLEdBQUdDLFlBQ2hEZixRQUFRYyxHQUFHRSxRQUFRQyxVQUFZSCxFQUdqQ2IsTUFBTWlCLFVBQVloQixlQUVsQixJQUFJaUIsRUFBWS9CLFNBQVNDLGNBQWMsdUJBQ25DK0IsRUFBV2hDLFNBQVNDLGNBQWMsc0JBQ2xDZ0MsRUFBYXZCLEtBQUtDLE1BQU1FLE1BQU1OLHdC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QVVrQixXQWdCekIzQyxpQkFBaUJ5QixRQUFVNEIsWUFZM0J0RCxnQkFBZ0IwQixRQUFVOEIiLCJmaWxlIjoic2hvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1zbGlkZXItbGluZVwiKSxcclxuICAgIGFyclJpZ2h0TWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtYXJyb3ctcmlnaHRcIiksXHJcbiAgICBhcnJMZWZ0TWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtYXJyb3ctbGVmdFwiKSxcclxuICAgIG9iamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLXNsaWRlci1vYmplY3RcIiksXHJcbiAgICBvYmplY3RXaWR0aCA9IG9iamVjdHNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXHJcbiAgICBsaW5lV2lkdGggPSBNYXRoLnJvdW5kKGxpbmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpLFxyXG4gICAgbWFpbkltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtc2xpZGVyLW9iamVjdCBpbWdcIiksXHJcbiAgICAvL3N3aXRjaGVzIChTKVxyXG4gICAgbGluZVMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZGl0aW9uYWwtcGhvdG9cIiksXHJcbiAgICBpbm5lclN0cmluZ0ltZyA9IFwiXCIsXHJcbiAgICAvL2Jhc2tldCBwb3B1cCBcclxuICAgIGJhc2tldEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0XCIpLFxyXG4gICAgYmFza2V0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldC1wb3B1cFwiKSxcclxuICAgIHByb2R1Y3RTaG9wQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kb25hdGUtYnV0dG9uXCIpLFxyXG4gICAgcHJvZHVjdFNob3BQbHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tcGx1c1wiKSxcclxuICAgIHByb2R1Y3RTaG9wTWludXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1taW51c1wiKSxcclxuICAgIHByb2R1Y3RTaG9wUXVhbnRpZnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjb3JlIGlucHV0XCIpLFxyXG4gICAgcHJvZHVjdFNob3BQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdC1wcmljZS1vbi1pbWcgc3BhblwiKSxcclxuICAgIHByb2R1Y3RTaG9wSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb2xsYWdlIGltZ1wiKSxcclxuICAgIHByb2R1Y3RTaG9wTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdC1zZWN0aW9uIGgyXCIpLFxyXG4gICAgcHJvZHVjdFNob3BEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXQtdXMtdGV4dFwiKVxyXG5cclxuaWYob2JqZWN0cy5sZW5ndGggPiAxKXtcclxuICBmb3IobGV0IGkgPSAwOyBpIDwgbWFpbkltZy5sZW5ndGg7IGkrKyl7XHJcbiAgICBpbm5lclN0cmluZ0ltZyA9IGAke2lubmVyU3RyaW5nSW1nfSR7bWFpbkltZ1tpXS5vdXRlckhUTUx9YFxyXG4gICAgbWFpbkltZ1tpXS5kYXRhc2V0LmltZ051bWJlciA9IGlcclxuICB9XHJcbiAgXHJcbiAgbGluZVMuaW5uZXJIVE1MID0gaW5uZXJTdHJpbmdJbWdcclxuICBcclxuICBsZXQgYXJyUmlnaHRTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zd2l0Y2gtYXJyb3ctcmlnaHRcIiksXHJcbiAgICAgIGFyckxlZnRTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zd2l0Y2gtYXJyb3ctbGVmdFwiKSxcclxuICAgICAgbGluZVNXaWR0aCA9IE1hdGgucm91bmQobGluZVMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpLFxyXG4gICAgICBzd2l0Y2hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRkaXRpb25hbC1waG90byBpbWdcIiksXHJcbiAgICAgIHN3aXRjaFdpZHRoID0gc3dpdGNoZXNbMV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcclxuICBcclxuICBmb3IobGV0IGkgPSAwOyBpIDwgc3dpdGNoZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgc3dpdGNoZXNbaV0uZGF0YXNldC5zd2l0Y2hOdW1iZXIgPSBpXHJcbiAgfVxyXG5cclxuICBpZihzd2l0Y2hlcy5sZW5ndGggPD0gMyl7XHJcbiAgICBhcnJSaWdodFMuc3R5bGUub3BhY2l0eSA9IFwiMFwiXHJcbiAgICBhcnJMZWZ0Uy5zdHlsZS5vcGFjaXR5ID0gXCIwXCJcclxuICAgIGlmKHN3aXRjaGVzLmxlbmd0aCA9PSAyKXtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHN3aXRjaGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBzd2l0Y2hlc1tpXS5zdHlsZS53aWR0aCA9IFwiNDUlXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXJyTGVmdFMub25jbGljayA9IGxlZnRTXHJcbiAgYXJyUmlnaHRTLm9uY2xpY2sgPSByaWdodFNcclxuICBhcnJMZWZ0Uy5vbmRibGNsaWNrID0gZmFsc2VTXHJcbiAgYXJyUmlnaHRTLm9uZGJsY2xpY2sgPSBmYWxzZVNcclxuXHJcbiAgZnVuY3Rpb24gbGVmdFMgKGV2ZW50KXtcclxuICAgIGxpbmVMZWZ0KGV2ZW50LCBsaW5lUywgc3dpdGNoV2lkdGgpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByaWdodFMgKGV2ZW50KXtcclxuICAgIGxpbmVSaWdodChldmVudCwgbGluZVMsIGxpbmVTV2lkdGgsIHN3aXRjaFdpZHRoKVxyXG4gIH1cclxuXHJcbiAgc3dpdGNoZXMuZm9yRWFjaCgoZWxlbSk9PntcclxuICAgIGVsZW0ub25jbGljayA9ICgpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKG9iamVjdHNbZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN3aXRjaC1udW1iZXJcIildLm9mZnNldExlZnQpXHJcbiAgICAgIGxpbmUuc2Nyb2xsVG8ob2JqZWN0c1tlbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtc3dpdGNoLW51bWJlclwiKV0uc2Nyb2xsV2lkdGggKiBlbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtc3dpdGNoLW51bWJlclwiKSwgMClcclxuICAgIH1cclxuICB9KVxyXG59ZWxzZXtcclxuICBhcnJSaWdodE1haW4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgYXJyTGVmdE1haW4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zd2l0Y2gtc2xpZGVyLWxpbmVcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgbGluZS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIlxyXG4gIGxpbmUuY2xhc3NMaXN0LmFkZChcImFsb25lLWltZ1wiKVxyXG59XHJcblxyXG4vL3NsaWRlclxyXG5cclxuYXJyTGVmdE1haW4ub25jbGljayA9IGxlZnRcclxuYXJyUmlnaHRNYWluLm9uY2xpY2sgPSByaWdodFxyXG5hcnJMZWZ0TWFpbi5vbmRibGNsaWNrID0gZmFsc2VTXHJcbmFyclJpZ2h0TWFpbi5vbmRibGNsaWNrID0gZmFsc2VTXHJcblxyXG5mdW5jdGlvbiBsZWZ0IChldmVudCl7XHJcbiAgbGluZUxlZnQoZXZlbnQsIGxpbmUsIG9iamVjdFdpZHRoKVxyXG59XHJcblxyXG5mdW5jdGlvbiByaWdodCAoZXZlbnQpe1xyXG4gIGxpbmVSaWdodChldmVudCwgbGluZSwgbGluZVdpZHRoLCBvYmplY3RXaWR0aClcclxufVxyXG5cclxuLy9iYXNrZXQgcG9wdXAgXHJcbmJhc2tldEJ1dHRvbi5vbmNsaWNrID0gYmFza2V0T3BlblxyXG5cclxuZnVuY3Rpb24gYmFza2V0T3BlbiAoZXZlbnQpe1xyXG4gIHBvcHVwT3BlbiAoZXZlbnQsIGJhc2tldFBvcHVwKVxyXG59XHJcblxyXG5cclxuXHJcbnByb2R1Y3RTaG9wQWRkLm9uY2xpY2sgPSBwcm9kdWN0QWRkIFxyXG5cclxuZnVuY3Rpb24gcHJvZHVjdEFkZCAoZXZlbnQpe1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICBpZihvcmRlclByb2R1Y3RzWzBdID09PSB1bmRlZmluZWQpe1xyXG4gICAgYmFza2V0UHJvZHVjdHMuaW5uZXJIVE1MID0gYDxmaWd1cmUgY2xhc3M9XCJwcm9kdWN0XCI+JHtwcm9kdWN0U2hvcEltZy5vdXRlckhUTUx9PGZpZ2NhcHRpb24+IDxwIGNsYXNzPVwicHJvZHVjdC1uYW1lXCI+JHtwcm9kdWN0U2hvcE5hbWUudGV4dENvbnRlbnR9PC9wPjxkaXYgY2xhc3M9XCJwcm9kdWN0LWluZm9cIj48ZGl2IGNsYXNzPVwicHJvZHVjdC1kZXNjcmlwdGlvblwiPiR7cHJvZHVjdFNob3BEZXNjcmlwdGlvbi5vdXRlckhUTUx9PC9kaXY+PGRpdiBjbGFzcz1cInByb2R1Y3Qtb3JkZXItaW5mb1wiPiA8Zm9ybSBjbGFzcz1cInByb2R1Y3QtcXVhbnRpdHlcIj4gPGJ1dHRvbiBjbGFzcz1cInByb2R1Y3QtbWludXNcIj4tPC9idXR0b24+PGxhYmVsPjxpbnB1dCBjbGFzcz1cInByb2R1Y3QtYW1vdW50XCIgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJwcm9kdWN0LXF1YW50aXR5XCIgdmFsdWU9XCIke3Byb2R1Y3RTaG9wUXVhbnRpZnkudmFsdWV9XCIvPjwvbGFiZWw+PGJ1dHRvbiBjbGFzcz1cInByb2R1Y3QtcGx1c1wiPis8L2J1dHRvbj48L2Zvcm0+PGRpdiBjbGFzcz1cInByaWNlLXdyYXBcIj4gPHAgY2xhc3M9XCJwcm9kdWN0LXByaWNlXCI+JHtwcm9kdWN0U2hvcFByaWNlLnRleHRDb250ZW50LnNsaWNlKDAsIHByb2R1Y3RTaG9wUHJpY2UudGV4dENvbnRlbnQubGVuZ3RoLTEpKnByb2R1Y3RTaG9wUXVhbnRpZnkudmFsdWV9JDwvcD48c3BhbiBjbGFzcz1cImRlbGV0ZS1wcm9kdWN0XCI+PC9zcGFuPjwvZGl2PjwvZGl2PjwvZGl2PjwvZmlnY2FwdGlvbj48L2ZpZ3VyZT5gXHJcbiAgfWVsc2V7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgb3JkZXJQcm9kdWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIGlubmVyU3RyaW5nID0gYCR7aW5uZXJTdHJpbmd9JHtvcmRlclByb2R1Y3RzW2ldLm91dGVySFRNTH1gXHJcbiAgICB9XHJcbiAgICBiYXNrZXRQcm9kdWN0cy5pbm5lckhUTUwgPSBgJHtpbm5lclN0cmluZ308ZmlndXJlIGNsYXNzPVwicHJvZHVjdFwiPiR7cHJvZHVjdFNob3BJbWcub3V0ZXJIVE1MfTxmaWdjYXB0aW9uPiA8cCBjbGFzcz1cInByb2R1Y3QtbmFtZVwiPiR7cHJvZHVjdFNob3BOYW1lLnRleHRDb250ZW50fTwvcD48ZGl2IGNsYXNzPVwicHJvZHVjdC1pbmZvXCI+PGRpdiBjbGFzcz1cInByb2R1Y3QtZGVzY3JpcHRpb25cIj4ke3Byb2R1Y3RTaG9wRGVzY3JpcHRpb24ub3V0ZXJIVE1MfTwvZGl2PjxkaXYgY2xhc3M9XCJwcm9kdWN0LW9yZGVyLWluZm9cIj4gPGZvcm0gY2xhc3M9XCJwcm9kdWN0LXF1YW50aXR5XCI+IDxidXR0b24gY2xhc3M9XCJwcm9kdWN0LW1pbnVzXCI+LTwvYnV0dG9uPjxsYWJlbD48aW5wdXQgY2xhc3M9XCJwcm9kdWN0LWFtb3VudFwiIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicHJvZHVjdC1xdWFudGl0eVwiIHZhbHVlPVwiJHtwcm9kdWN0U2hvcFF1YW50aWZ5LnZhbHVlfVwiLz48L2xhYmVsPjxidXR0b24gY2xhc3M9XCJwcm9kdWN0LXBsdXNcIj4rPC9idXR0b24+PC9mb3JtPjxkaXYgY2xhc3M9XCJwcmljZS13cmFwXCI+IDxwIGNsYXNzPVwicHJvZHVjdC1wcmljZVwiPiR7cHJvZHVjdFNob3BQcmljZS50ZXh0Q29udGVudC5zbGljZSgwLCBwcm9kdWN0U2hvcFByaWNlLnRleHRDb250ZW50Lmxlbmd0aC0xKSpwcm9kdWN0U2hvcFF1YW50aWZ5LnZhbHVlfSQ8L3A+PHNwYW4gY2xhc3M9XCJkZWxldGUtcHJvZHVjdFwiPjwvc3Bhbj48L2Rpdj48L2Rpdj48L2Rpdj48L2ZpZ2NhcHRpb24+PC9maWd1cmU+YFxyXG4gICAgaW5uZXJTdHJpbmcgPSBcIlwiXHJcbiAgfVxyXG4gIHJlZnJlc2hQcm9kdWN0cyAoKVxyXG59XHJcblxyXG5wcm9kdWN0U2hvcE1pbnVzLm9uY2xpY2sgPSBwclNob3BNaW51c1xyXG5cclxuZnVuY3Rpb24gcHJTaG9wTWludXMgKGV2ZW50KXtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgaWYocHJvZHVjdFNob3BRdWFudGlmeS52YWx1ZSA+IDApe1xyXG4gICAgcHJvZHVjdFNob3BRdWFudGlmeS52YWx1ZSA9IHByb2R1Y3RTaG9wUXVhbnRpZnkudmFsdWUgLSAxXHJcbiAgICBwcm9kdWN0U2hvcFF1YW50aWZ5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByb2R1Y3RTaG9wUXVhbnRpZnkudmFsdWUpIFxyXG4gIH1lbHNle1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG5wcm9kdWN0U2hvcFBsdXMub25jbGljayA9IHByU2hvcFBsdXNcclxuXHJcbmZ1bmN0aW9uIHByU2hvcFBsdXMgKGV2ZW50KXtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgcHJvZHVjdFNob3BRdWFudGlmeS52YWx1ZSA9IHBhcnNlSW50KHByb2R1Y3RTaG9wUXVhbnRpZnkudmFsdWUpICsgMVxyXG4gIHByb2R1Y3RTaG9wUXVhbnRpZnkuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgcHJvZHVjdFNob3BRdWFudGlmeS52YWx1ZSlcclxufSJdfQ==
