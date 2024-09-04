
let mid = 1616;
      let snapmint = document.createElement("script");
      snapmint.type = "text/javascript";
      snapmint.async = true;
      snapmint.src =
        ("https:" == document.location.protocol ? "https://" : "http://") +
        "assets.snapmint.com/assets/merchant/1616/snapmint_emi_new.js";
      let s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(snapmint, s);



!function(e,t,n,r){e.eedl||(e.mpDl=e.mpDl||[],e.eedl=e.eedl||function(){e.mpDl.push(Array.from(arguments))})}(window,document),function(e){function t(e,t,n){e[t]||(e[t]=n)}e._mp=e._mp||{},t(e._mp,"triggerEvent",(function(t,n,r){e._mp.safeExecute("triggerEvent",(function(e,t,n){if(t=t||{},n=n||window,e){var r=new CustomEvent(e,{detail:t});n.dispatchEvent(r)}}))(t,n,r)})),t(e._mp,"onDocumentReady",(function(t){/in/.test(document.readyState)?setTimeout(e._mp.onDocumentReady,9,t):t()})),t(e._mp,"waitUntil",(function(e,t,n,r){var o=n,a=setInterval((function(){try{var i=e.call(this);void 0===i||!1===i?o<t?o+=n:clearInterval(a):(clearInterval(a),r())}catch(e){}}),n)})),t(e._mp,"addScript",(function(t,n,r){e._mp.safeExecute("triggerEvent",(function(e,t,n){var r=document.createElement("script");r.id=e,r.async=n,r.src=t;var o=document.getElementsByTagName("script")[0]||document.getElementsByTagName("head")[0];o?o.parentNode.insertBefore(r,o):console&&console.error&&console.error("Could not append script with id: ",e," because no appendTo element was found")}))(t,n,r)})),t(e._mp,"safeExecute",(function(t,n){return function(){try{return n.apply(this,arguments)}catch(n){e._mp.mpReportErr(t,n.message,n&&n.stack?n.stack.toString():"")}}})),t(e._mp,"mpReportErr",(function(t,n,r,o){var a={errKey:t,errMessage:n,errStack:r,errLang:o||"js"};e._mp.triggerEvent("mp_log_err",{msg:n||"EEDL Err",payload:a}),e._mp.triggerEvent("mp_rpt_err",{err:a})})),t(e._mp,"mpReportMsg",(function(){e._mp.triggerEvent("mp_log_msg",{payload:arguments})})),t(e._mp,"setSessionVar",(function(t,n){return e._mp.safeExecute("setSessionVar",(function(e,t){return window.sessionStorage.setItem(e,t)}))(t,n)})),t(e._mp,"getSessionVar",(function(t){return e._mp.safeExecute("getSessionVar",(function(e){return window.sessionStorage.getItem(e)||null}))(t)})),t(e._mp,"getCookie",(function(e){var t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)"));return t?t[2]:null}))}(window);
(function() {
  try {
    var mpProjectId = 'NG9N5iw686';
    var idlFile = "https://mp.getketch.com/idl/ketch/idl.js";
    var isProd = /www\.getketch\.com/.test(window.location.href);
    var scriptFile = 'https://mp.getketch.com/c-sdk/' + mpProjectId + (!isProd ? '-staging' : '') + '.js';
    var shouldExecuteIdl = !window._mp.getCookie('_mplidl');
    if (shouldExecuteIdl) {
      _mp.addScript('mp-idl-sdk', idlFile, false);
    }
    var hasBeenAdded = document.getElementById('mp-sdk');
    if (!hasBeenAdded) {
      _mp.addScript('mp-sdk', scriptFile, true);
    }
  } catch(err) {
    if (console && console.error) {
      console.error(err);
    }
  }
})();


window._mp.waitUntil(function() { return _mp && _mp.eedlInstance; }, 15000, 100, function () {
  _mp.eedlInstance().ready();
  window._mp.safeExecute('evPageLoad', function() {
    var isProd = /www\.ahujasons\.com/.test(window.location.href);
    var payload = {
      'page.pageInfo.pageName': document.title,
      'env.pageUrl': window.location.href,
      'env.referrer': document.referrer,
      'env.pathName': window.location.pathname,
      'env.rs': isProd ? 'prd' : 'stg',
      'env.app_version': '<git_hash or app_version automated>',
    };

    eedl('page_load', payload);
  })();
});
  //initialization end
  const cart_id = getCookie( window.location.hostname.substring(10, 4)+'_cart');

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }



  window.kartmaxEventHandlerbeginCheckout = function (data) {
    console.log('kartmaxEventHandlerbeginCheckout', data);
    // return
    if (data) {
      var price = data.value

      var productsArray = setItemsArray(data)

      window._mp.safeExecute('evBeginCheckout', function () {
        eedl('mp_begin_checkout', {
          currency: data.currency ?? "INR", /* Currency of website */
          cart_id: data.cart_id, // mandatory
          value: price, // float value of the item being viewed
          coupon: data.coupon ?? "", // Leave this undefined if there is no coupon
          items: productsArray,
          ev_source: 'gtm'
        });
      })();


      console.log('magicpixel beginCheckout event data', {
        currency: 'INR',
        cart_id: cart_id,
        value: price,
        items: productsArray,
        ev_source: 'gtm'
      });

    }
  }

  window.kartmaxEventHandlePaymentMethod = function (data) {
    console.log('kartmaxEventHandleraddPaymentInfo', data);
    // return
    // return
    if (data) {
      var price = data.value

      var productsArray = setItemsArray(data)

      window._mp.safeExecute('evAddPaymentInfo', function () {
        eedl('mp_add_payment_info', {
          currency: data.currency ?? "INR", // mandatory
          cart_id: cart_id, // mandatory
          value: price, // float value of order
          coupon: data.coupon ?? "", // Leave this undefined if there is no coupon
          payment_type: data.payment_type ?? "", // optional
          shipping: data.shipping ?? 0.00, // total shipping value in float
          items: productsArray,
          ev_source: 'gtm'
        });
      })();


      console.log('magicpixel PaymentInfo event data', {
        currency: data.currency ?? "INR", // mandatory
        cart_id: cart_id, // mandatory
        value: price, // float value of order
        coupon: data.coupon ?? "", // Leave this undefined if there is no coupon
        payment_type: data.payment_type ?? "", // optional
        shipping: data.shipping ?? 0.00, // total shipping value in float
        items: productsArray,
        ev_source: 'gtm'
      });

    }
  }

  window.kartmaxEventHandlerAddToCart = function (data) {
    console.log('kartmaxEventHandlerAddToCart_Alll', data);

    if (data && data.length) {
      var price = data[0].price

      var productsArray = data

      window._mp.safeExecute('evAddToCart', function () {
        eedl('mp_add_to_cart', {
          currency: 'INR', /* Currency of website */
          cart_id: cart_id, // mandatory
          value: price, // float value of the item being viewed
          items: productsArray,
          ev_source: 'gtm'
        });
      })();

      console.log('magicpixel AddToCart event data', {
        currency: 'INR',
        cart_id: cart_id,
        value: price,
        items: productsArray,
        ev_source: 'gtm'
      });

    }

    console.log('kartmaxEventHandlerAddToCart', data);
  }

  window.kartmaxEventHandlerRemoveFromCart = function (data) {
    console.log('kartmaxEventHandlerRemoveFromCart', data);

    if (data && data.length) {
      var price = data[0].price

      var productsArray = data
      window._mp.safeExecute('evRemoveFromCart', function () {
        eedl('mp_remove_from_cart', {
          currency: 'INR', /* Currency of website */
          cart_id: cart_id, // mandatory
          value: price, // float value of the item being viewed
          items: productsArray,
          ev_source: 'gtm'
        });
      })();

      console.log('magicpixel RemoveFromCart event data', {
        currency: 'INR',
        cart_id: cart_id,
        value: price,
        items: productsArray,
        ev_source: 'gtm'
      });

    }

  }


  window.kartmaxEventHandlerViewWishList = function (data) {

    console.log('evViewWishlist', data);
    // return
    if (data && data.length) {
      var price = viewTotalPrice(data)

      var productsArray = setWishlistItemsArray(data)
      window._mp.safeExecute('evViewWishlist', function () {
        eedl('mp_view_wish_list', {
          currency: 'INR',
          value: price,
          items: productsArray,
          ev_source: 'gtm'
        });
      })();

      console.log('magicpixel evViewWishlist event data', {
        currency: 'INR',
        value: price,
        items: productsArray,
        ev_source: 'gtm'
      });

    }
  }

  window.kartmaxEventHandlerAddToWishlist = function (data) {


    console.log('evAddToWishlist', data);

    if (data && data.length) {
      var price = AddToWishPrice(data)
      console.log(price,"priceprice")
      var productsArray = [setWishlistItemsArray(data)[0]]
      window._mp.safeExecute('evAddToWishlist', function () {
        eedl('mp_add_to_wishlist', {
          currency: 'INR',
          value: price,
          items: productsArray,
          ev_source: 'gtm'
        });
      })();

      console.log('magicpixel AddToWishlist event data', {
        currency: 'INR',
        value: price,
        items: productsArray,
        ev_source: 'gtm'
      });
    }
  }

  window.kartmaxEventHandleraddShippingInfo = function (data) {

    console.log('evAddShippingInfo', data);
     //return
    // var price = totalPrice(data)
    var price = data.value

    var productsArray = setItemsArray(data)
    window._mp.safeExecute('evAddShippingInfo', function () {
      eedl('mp_add_shipping_info', {
        currency: 'INR',
        cart_id: cart_id,
        value: price,
        coupon: '',
        items: productsArray,
        ev_source: 'gtm'
      });
    })();

    console.log('magicpixel evAddShippingInfo event data', {
      currency: 'INR',
      cart_id: cart_id,
      value: price,
      coupon: '',
      items: productsArray,
      ev_source: 'gtm'
    });



    localStorage.setItem('newCart', cart_id)


  }

  window.kartmaxEventHandlerLogin = function (data) {
    console.log("loginUserData", data)
    if (data) {

      window._mp.safeExecute('mpOnUserLogin', function () {

        // var userInfo = data.customer_details
        var nameArray = data.user_name.split(" ");

        var fname = nameArray[0] ?? data.user_name
        var lname = nameArray[1] ?? ""

        eedl('user_info', {
          pid: data.user_id,
          email: data.email,
          phone: data.mobile, // mandatory
          country: "IN", // mandatory
          city: data.city, // leave as undefined if not available
          state: data.state, // leave as undefined if not available
          fName: fname, // leave as undefined if not available
          lName: lname, // leave as undefined if not available
          zip: data.zip, // leave as undefined if not available
        });

        eedl('mp_login', {
          method: 'phone',
          ev_source: 'gtm'
        });

        console.log("magicpixel evLogin User Info event data", {
          pid: data.user_id,
          email: data.email,
          phone: data.mobile, // mandatory
          country: "IN", // mandatory
          city: data.city, // leave as undefined if not available
          state: data.state, // leave as undefined if not available
          fName: fname, // leave as undefined if not available
          lName: lname, // leave as undefined if not available
          zip: data.zip, // leave as undefined if not available
        })

      })();

    }
  }

  window.kartmaxEventHandlerLogout = function (data) {
    console.log("logout", data)

  }


  window.kartmaxEventHandlerPurchase = function (data) {

    console.log('evPurchasedata', data);

    if (data && data.length) {

      var getData = data[0]

      var price = getData.value

      var productsArray = []
      getData.items.forEach((item, index) => {

        var items = {
          group_id: item.group_id,
          item_id: item.item_id,
          item_name: item.item_name,
          item_sku: item.item_list_id ?? item.group_id,
          index: index,
          price: item.price,
          quantity: item.quantity ?? 1,
          item_brand: item.item_brand ?? "",
          item_category: item.item_category ?? "",
          sub_group_id: item.sub_group_id || item.group_id || ""
        }

        productsArray.push(items)

      })
      var userInfo = getData.customer_details

      var nameArray = userInfo.full_name.split(" ");

      var fname = nameArray[0] ?? userInfo.full_name
      var lname = nameArray[1] ?? ""

      window._mp.safeExecute('evPurchase', function () {



        eedl('user_info', {
          pid: userInfo.id,
          email: userInfo.email ?? "",
          phone: userInfo.phone ?? "",
          country: 'IN',
          city: userInfo.city ?? "",
          state: userInfo.state ?? "",
          fName: fname,
          lName: lname,
          zip: userInfo.pin_code ?? "",
        });

        eedl('mp_purchase', {
          currency: 'INR',
          transaction_id: getData.transaction_id,
          cart_id: localStorage.getItem('newCart') ?? cart_id,
          value: price,
          coupon: getData.coupon ?? '',
          shipping: getData.shipping ?? 0,
          tax: getData.tax ?? 0,
          items: productsArray,
          ev_source: 'gtm'
        });
      })();


      console.log('magicpixel evPurchase event data', 'user_info', {
        pid: userInfo.id,
        email: userInfo.email ?? "",
        phone: userInfo.phone ?? "",
        country: 'IN',
        city: userInfo.city ?? "",
        state: userInfo.state ?? "",
        fName: fname,
        lName: lname,
        zip: userInfo.pin_code ?? "",
      }, {
        currency: 'INR',
        transaction_id: getData.transaction_id,
        cart_id: localStorage.getItem('newCart') ?? cart_id,
        value: price,
        coupon: getData.coupon ?? '',
        shipping: getData.shipping ?? 0,
        tax: getData.tax ?? 0,
        items: productsArray,
        ev_source: 'gtm'
      });

      localStorage.setItem('newCart', "")

    }

  }

  window.kartmaxEventHandlerViewProduct = function (data) {

    console.log('kartmaxEventHandlerViewProduct',data);
    if (data) {

      var productsArray = []
      data.forEach((data, index) => {

        var items = {
          group_id: data.group_id || "",
          sub_group_id: data.sub_group_id || "",
          item_id: data.product_id,
          item_name: data.name,
          item_sku: data.master_sku ?? data.group_id,
          index: 0,
          price: data.selling_price ?? data.price,
          quantity: data.quantity ?? 1,
          item_brand: data.item_brand ?? "",
          item_category: data.item_category ?? "",
        }

        productsArray.push(items)

      })


      window._mp.safeExecute('evViewItem', function () {
        eedl('mp_view_item', {
          currency: 'INR', /* Currency of website */
          value: data.selling_price, // float value of the item being viewed
          items: productsArray,
          ev_source: 'gtm'
        });
      })();

      console.log('magicpixel ViewItem event data', {
        currency: 'INR', /* Currency of website */
        value: data[0].selling_price, // float value of the item being viewed
        items: productsArray,
        ev_source: 'gtm'
      });
    }
  }

  window.kartmaxEventHandlerViewItemList = function (data) {
    console.log('kartmaxEventHandlerViewItemList', data);

    if (data) {
      var productsArray = setItemsListArray(data)

      window._mp.safeExecute('evViewItemList', function () {
        eedl('mp_view_item_list', {
          currency: 'INR',
          item_list_name: 'williampenn_itemlist',
          items: productsArray,
          ev_source: 'gtm'
        });
      })();
      console.log('magicpixel ViewItemList event data', {
        currency: 'INR',
        item_list_name: 'williampenn_itemlist',
        items: productsArray,
        ev_source: 'gtm'
      });
    }

  }

  window.kartmaxEventHandlerProductSearch = function (data) {

    console.log('evSearch', data);

    window._mp.safeExecute('evSearch', function () {
      eedl('mp_search', {
        search_term: data[0].search_term,
        search_result_count: data[0].count,
        ev_source: 'gtm'
      });
    })();

    console.log("MegicPix search Event", {
      search_term: data[0].search_term,
      search_result_count: data[0].count,
      ev_source: 'gtm'
    })



  }

  window.kartmaxEventHandlerSimilarProducts = function (data) {

    if (data && data.length> 0) {
      var price = totalPrice(data)
      var productsArray = setItemsArray(data)
      window._mp.safeExecute('evViewSimilarItems', function () {
        eedl('mp_view_similar_items', {
          currency: 'INR',
          value: price,
          items: productsArray,
          ev_source: 'gtm'
        });
      })();
      console.log("MegicPix search Event", {
        currency: 'INR',
        value: price,
        items: productsArray,
        ev_source: 'gtm'
      })
    }
   
  }


  window.kartmaxEventHandlerViewCart = function (data) {

    console.log('evViewCart',data);

    var price = totalPrice(data)

    var productsArray = setItemsArray(data)

    window._mp.safeExecute('evViewCart', function () {
      eedl('mp_view_cart', {
        currency: data.currency,
        cart_id: cart_id,
        value: data.value,
        items: productsArray,
        ev_source: 'gtm'
      });
    })();

    console.log('magicpixel ViewCart event data', {
      currency: data.currency,
      cart_id: cart_id,
      value: data.value,
      items: productsArray,
      ev_source: 'gtm'
    });

  }

 
  function setWishlistItemsArray(data) {
    var productsArray = []
    data.forEach((item, index) => {

      var items = {
        item_id: item.id_product,
        item_name: item.name,
        item_sku: item.sku ?? item.group_id,
        item_sub_group_id:item?.sub_group_id,
        item_group_id:item?.group_id,
        index: index,
        price: item.selling_price ?? item.price,
        quantity: 1,
        item_brand: item.brand ?? "",
        item_category: item.item_category ?? "",
      }

      productsArray.push(items)

    })
    return productsArray
  }

  function setItemsArray(data) {
    console.log(data, "datadata")
    var productsArray = []
    data.items.forEach((item, index) => {

      var items = {
        group_id: item.group_id || "",
        sub_group_id: item.sub_group_id || "",
        item_id: item.item_id,
        item_name: item.item_name,
        item_sku: item.item_list_id ?? item.group_id,
        index: index,
        price: item.selling_price * item.qty || item.price,
        quantity: item.qty ?? 1,
        item_brand: item.item_brand ?? "",
        item_category: item.item_category ?? item.category,
      }

      productsArray.push(items)

    })
    return productsArray
  }


  function setItemsListArray(data) {
    console.log(data, "datadata")
    var productsArray = []
    data.forEach((item, index) => {

      var items = {
        group_id: item.group_id || "",
        sub_group_id: item.sub_group_id || "",
        item_id: item.item_id,
        item_name: item.item_name,
        item_sku: item.item_list_id ?? item.group_id,
        index: index,
        price: item.price * item.quantity || item.price,
        quantity: item.quantity ?? 1,
        item_brand: item.item_brand ?? "",
        item_category: item.item_category ?? item.category,
      }

      productsArray.push(items)

    })
    return productsArray
  }

  function totalPrice(data) {
    console.log(data, "totalPricedata")
    return data.items.reduce((function (previousValue, currentValue) {
      return previousValue + currentValue.price * currentValue.quantity
    }), 0).toFixed(2);
  }
  function viewTotalPrice(data) {
    console.log(data, "totalPricedata")
    return data.reduce((function (previousValue, currentValue) {
      return previousValue + currentValue.selling_price * 1
    }), 0).toFixed(2);
  }
  function AddToWishPrice(data) {
    console.log(data, "totalPricedata")
    return data[0].selling_price;
  }

// ============= js for place holder text ==================//

let autotypetext = [
  { id: "1", keyword: "Casual Shirts" },
  { id: "2", keyword: "Tops" },
  { id: "3", keyword: "Saree" },
  { id: "4", keyword: "Tshirts" },
  { id: "5", keyword: "Black Jeans" },
];
(function placeholderkeyword() {
  console.log('>>>>>>>>>>>>in plcae holder')
  fetch(
    "https://getketchpim.getketch.com/pim/pimresponse.php/?service=search_placeholder"
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.response.success) {
        console.log('in plcae holder sucess')
        autotypetext = data.result
        this.autotype();
      }
    })

    .catch((error) => {
      console.log(">>>>>>>>>>placeholder error",error);
    });
})()

function autotype() {
  console.log('>>>>>>>>>>>in autotype sucess')

  let changetext = 0;
  const inputEL = document.getElementById("search");
  // let that = this;
  let subindex = 0;
  setInterval(() => {
    if (changetext == autotypetext.length - 1) {
      console.log("if");
      changetext = 0;
      let text = autotypetext[changetext].keyword;
      if (inputEL) {
        inputEL.placeholder = "Search For " + text;
      }

      this.autoText = "Search For " + text;
    } else {
      let text = autotypetext[changetext].keyword;
      let finaltext = text.substring(0, subindex + 1);

      if (finaltext.length == text.length) {
        changetext++;
        subindex = 0;
      } else {
        subindex++;
      }
      if (inputEL) {
        inputEL.placeholder = "Search For " + finaltext;
      }

      this.autoText = "Search For " + finaltext;
    }
  }, 300);
}

(function mobileFooterAccordian() {
    console.log('clicked footer')
    if (window.innerWidth <= 767) {
        const mobileItems = document.querySelectorAll('.mobile-footer-item')
        mobileItems.forEach((element, index) => {
            element.addEventListener('click', (e) => {
    console.log('clicked')

                element.classList.toggle('active')
            })


        })
    }
})()


