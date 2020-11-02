//獲取元素
let getElem = function (selector) {
  return document.querySelector(selector);
};
let getAllElem = function (selector) {
  return document.querySelectorAll(selector);
};

//獲取元素的樣式
let getCls = function (element) {
  return element.getAttribute("class");
};

//設置元素的樣式
let setCls = function (element, cls) {
  return element.setAttribute("class", cls);
};
//為元素添加樣式  ex  A => A_init
let addCls = function (element, cls) {
  let baseCls = getCls(element);
  if (baseCls.indexOf(cls) === -1)
    //如果還沒添加上
    setCls(element, baseCls + " " + cls); //注意空格
  return;
};
//為元素刪減樣式
let delCls = function (element, cls) {
  let baseCls = getCls(element);
  if (baseCls.indexOf(cls) > -1)
    //如果要被刪除者存在
    setCls(element, baseCls.split(cls).join(" ").replace(/\s+/g, " "));
  //將元素本來擁有的所有class類名通過split()方法把需要刪除的樣式刪除了，得到一個新的數組， 然後再通過join(）方法將數組拼接成字符串，最後替換字符串中多餘的空白字符。達到實現刪除指定類名的方法
  return;
};
var screenAnimateElements = {
  ".screen-1": [".header", ".screen-1__heading", ".screen-1__subheading"],
  ".screen-2": [
    ".screen-2__heading",
    ".screen-2__subheading-1",
    ".screen-2__subheading-2",
    ".screen-2__img-teacher",
    ".screen-2__img-rocket",
    ".screen-2__tip",
  ],
  ".screen-3": [
    ".screen-3__heading",
    ".screen-3__img-flower",
    ".screen-3__subheading",
    ".screen-3__language",
    ".screen-3__tip",

  ],
  ".screen-4": [
    ".screen-4__heading",
    ".screen-4__subheading",
    ".screen-4__img-item-1",
    ".screen-4__img-item-2",
    ".screen-4__img-item-3",
    ".screen-4__img-item-4",
    ".screen-4__tip",

  ],
  ".screen-5": [
    ".screen-5__heading",
    ".screen-5__subheading",
    ".screen-5__img",
    ".screen-5__tip",

  ],
};

// 添加初始化樣式 _init
function setScreenAnimateInit(screenCls) {
  let animateElements = screenAnimateElements[screenCls]; //需要設置動畫的元素
  for (var i = 0; i < animateElements.length; i++) {
    var element = document.querySelector(animateElements[i]);
    var baseCls = element.getAttribute("class");
    element.setAttribute(
      "class",
      baseCls + " " + animateElements[i].substr(1) + "_animate_init"
    ); //substr(1) => 扣掉前面的點
  }
}

//step1_初始化設置
window.onload = function () {
  //!相等於 function onload(){...}  聲明全局函數
  // 為所有元素設置init
  for (k in screenAnimateElements) {
    if (k == '.screen-1' || k == '.screen-2')
      continue
    setScreenAnimateInit(k);
  }
  console.log("onload");
};
//step2_滾動條設置
// init -> done
function palyScreenAnimateDone(screenCls) {
  let animateElements = screenAnimateElements[screenCls];
  for (let i = 0; i < animateElements.length; i++) {
    let element = document.querySelector(animateElements[i]);
    let basecls = element.getAttribute("class");
    element.setAttribute(
      "class",
      basecls.replace("_animate_init", "_animate_done")
    );
  }
}


// 第二步附加：初始化第一屏的動畫（1. skipScreenAnimateInit 2.跳過 init ）

setTimeout(function () {
  palyScreenAnimateDone(".screen-1");
}, 1000);

// 導航條移動
var navItems = getAllElem(".header__nav-item");
var outLineItems = getAllElem(".outline-item");

var switchNavItemsActive = function (idx) {
  for (var i = 0; i < navItems.length; i++) {
    console.log(navItems[i]);
    delCls(navItems[i], "header__nav-item_status_active");
    navTip.style.left = 0 + "px";
  }
  addCls(navItems[idx], "header__nav-item_status_active");
  navTip.style.left = idx * 96 + "px";

  for (var i = 0; i < outLineItems.length; i++) {
    delCls(outLineItems[i], "outline__item_status_active");
  }
  addCls(outLineItems[idx], "outline__item_status_active");
};

// 導航條樣式變動

let nav = getElem(".header__nav");

window.onscroll = function () {
  var top = document.documentElement.scrollTop || document.body.scrollTop;
    //<!DOCTYPE html> h5方式                      //<html>
  if (top < 640 * 1 - 60) {
    palyScreenAnimateDone(".screen-1");
    switchNavItemsActive(0);
    
  }

  if (top > 640 * 1 - 60) {
    palyScreenAnimateDone(".screen-2");
    switchNavItemsActive(1);
  }
  if (top > 640 * 2 - 60) {
    palyScreenAnimateDone(".screen-3");
    switchNavItemsActive(2);
  }
  if (top > 640 * 3 - 60) {
    palyScreenAnimateDone(".screen-4");
    switchNavItemsActive(3);
  }
  if (top > 640 * 4 - 60) {
    palyScreenAnimateDone(".screen-5");
    switchNavItemsActive(4);
  }
  
  if (top > 640) {
    getElem('.header').style.color = "black"
    addCls(getElem('.outline'), 'outline_show')
    

  } else {
    getElem('.header').style.color = "white"
    delCls(getElem('.outline'), 'outline_show')
  }


};

// step3_ 導航條雙向定位
// 1導航條 點擊頁面跳轉
let setNavJump = function (i, lib) {
  let elem = lib[i];
  elem.onclick = function () {
    document.documentElement.scrollTop = i * 640 + 1;
  };
};

for (var i = 0; i < navItems.length; i++) {
  setNavJump(i, navItems);
}
// 2  大綱 點擊跳轉

for (var i = 0; i < outLineItems.length; i++) {
  setNavJump(i, outLineItems);
}

//滑動門
var navTip = getElem(".header__nav-tip");
var setTip = function (idx, lib) {
  lib[idx].onmouseover = function () {
    console.log(this, idx);
    navTip.style.left = idx * 96 + "px";
  };
  var currentIdx = 0;
  lib[idx].onmouseout = function () {
    console.log(currentIdx);
    for (var i = 0; i < lib.length; i++) {
      if (getCls(lib[i]).indexOf("header__nav-item_status_active") > -1) {
        currentIdx = i;
        break;
      }
    }
    navTip.style.left = currentIdx * 96 + "px";
  };
};

//滑動TIP
for (var i = 0; i < navItems.length-1; i++) {
  setTip(i, navItems);
}

//點擊回到頁首
let btn = getElem(".continue__btn");
console.log(btn)
btn.onclick = function () {
  document.documentElement.scrollTop = 0
}
