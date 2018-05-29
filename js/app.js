var regionDiv=document.getElementById("region-radio-wrapper");
    productDiv=document.getElementById("product-radio-wrapper");
    tableWrap=document.getElementById("table-wrapper");
    color=["#60acfc","#32d3eb","#5bc49f","#feb64d","#ff7c7c","#9287e7","#d4ec59","#d660a8","#6370de"]

window.onload=function(){
  makeCheckBox(regionDiv,["华东","华北","华南"]);
  makeCheckBox(productDiv,["手机","笔记本","智能音箱"]);
  drawCtxBg();
  drawSvgBg();
}