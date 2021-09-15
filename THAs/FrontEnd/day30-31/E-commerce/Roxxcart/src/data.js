//if size array is empty, it means the product is out of stock
//shoes sub-category has 3 images and fit is not included.
// If the fit has empty string, then it means there's no fit for the given item. check for the empty string and render only the ones with non-empty string

const data = [
  {
    id: 0,
    name: "Regular Fit Flannel shirt",
    price: 1499,
    category: "Men",
    sub_category: "shirt",
    description:
      "Checked shirt in soft cotton flannel with a turn-down collar, classic front, yoke at the back and open chest pockets. Long sleeves with buttoned cuffs and a sleeve placket with a link button. Rounded hem. Regular Fit – a classic fit with good room for movement and a gently tapered waist to create a comfortable, tailored silhouette.",
    composition: "Cotton 100%",
    fit: "Regular fit",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbc%2Fc8%2Fbcc864f577a8d684aa86bc2dc59b3aa0979dd395.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff6%2F1a%2Ff61a9a2a6a515ee2e3a4cdbe2d99c8f57c9e6ab3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F52%2Fb1%2F52b110ecfcbddf1de5f4ac11da1e248f9bf382ba.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1d%2Fd6%2F1dd673b9c4150f33907cc4418dbd33b1d289ffcc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["XS", "S", "L", "XL"],
  },
  {
    id: 1,
    name: "Denim shirt jacket",
    price: 2299,
    category: "Men",
    sub_category: "shirt",
    description:
      "Shirt jacket in sturdy cotton denim with a collar, yoke at the back and metal buttons down the front. Open chest pocket, long sleeves with plackets and buttoned cuffs, and a gently rounded hem.",
    composition: "Cotton 100%",
    fit: "Regular fit",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbc%2Ff9%2Fbcf982e203aa2d4cccb839f9b82a3ee1b1b2eeb0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F80%2Fce%2F80ce570580e7b4ec3d959120994c6176c0c01af8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fcf%2F04%2Fcf040c87b714a7d5a39b717285ab0f0f3454345d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fef%2F15%2Fef15714d4697bea3c5780320982ea25c6aeaae2d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["L", "XL"],
  },
  {
    id: 2,
    name: "Regular Fit Flannel shirt",
    price: 1499,
    category: "Men",
    sub_category: "shirt",
    description:
      "Checked shirt in soft cotton flannel with a turn-down collar, classic front, yoke at the back and open chest pockets. Long sleeves with buttoned cuffs and a sleeve placket with a link button. Rounded hem. Regular Fit – a classic fit with good room for movement and a gently tapered waist to create a comfortable, tailored silhouette.",
    composition: "Cotton 100%",
    fit: "Regular fit",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd0%2Fc1%2Fd0c1bc622793d7b2ad8771e36f209a83b88de946.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb3%2F04%2Fb304fff2e3199d40bd1f1d106c4ff9d511512bc2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F9c%2F9e%2F9c9ef076ebfd3250742a1d8c86179f329c20e98e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F31%2F83%2F3183bdac6996736d9d54507c6515fff96b577d4b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["XS", "S", "XL"],
  },
  {
    id: 3,
    name: "Twill shirt jacket",
    price: 2299,
    category: "Men",
    sub_category: "shirt",
    description:
      "Shirt jacket in twill with a collar, buttons down the front and a yoke at the back. Flap chest pockets with a button, and long sleeves with buttoned cuffs.",
    composition: "Polyester 71%, Acrylic 29%",
    fit: "Regular fit",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F52%2Fba%2F52ba4e34470c3a6f70683f096c0c6316fe17bbe5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_jackets%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F3a%2F30%2F3a30d8a116220fb374806a491300f8a512143464.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_jackets%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6e%2F8b%2F6e8b87553e80f72af0b3c2fa5a2d09ae025d5756.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_jackets%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F96%2F2f%2F962ffedc6fa2bc87e968ce0b3bbbbc89ab8bf6db.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_jackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["XS", "S", "L", "XL"],
  },
  {
    id: 4,
    name: "Regular Fit Flannel shirt",
    price: 1499,
    category: "Men",
    sub_category: "shirt",
    description:
      "Checked shirt in soft cotton flannel with a turn-down collar, classic front, yoke at the back and open chest pockets. Long sleeves with buttoned cuffs and a sleeve placket with a link button. Rounded hem. Regular Fit – a classic fit with good room for movement and a gently tapered waist to create a comfortable, tailored silhouette.",
    composition: "Cotton 100%",
    fit: "Regular fit",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F73%2F1d%2F731d3a27d5983f9eb6216e8e69569c9186253db3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fad%2Ffc%2Fadfcb83aeab8db865dd7c4f4e0090fee425ea7af.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fac%2Ff3%2Facf3e30a8072574f6e8c83d45b3008f3db02371e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F77%2Fac%2F77ac6eb70a874ff7aaac74b9644210f562d38535.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    size: ["L", "XL"],
  },
  {
    id: 5,
    name: "Relaxed Fit T-shirt",
    price: 799,
    category: "Men",
    sub_category: "T-shirt",
    description:
      "T-shirt in soft cotton jersey with a print motif front and back and a round, rib-trimmed neckline. Relaxed fit with dropped shoulders.",
    composition: "Cotton 100%",
    fit: "Relaxed fit",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7a%2F57%2F7a57158b28a0946130c41827d3738cf0537e74b6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa6%2F4a%2Fa64a75901a2bfbc34acfefec8f6b61d0454b9493.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8c%2F05%2F8c051a5fca7b72772f621c6f6ce271b39520251f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F48%2F5a%2F485a2c47eef2b196c77e686cf4626b1f3d1ca350.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["XS", "S"],
  },
  {
    id: 6,
    name: "3-pack Regular Fit T-shirts",
    price: 1299,
    category: "Men",
    sub_category: "T-shirt",
    description: "Round-necked T-shirts in soft cotton jersey.",
    composition: "Cotton 100%",
    fit: "Regular fit",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F48%2Ff7%2F48f7665646945f7c922b5e56dd30d55b07bd59ae.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F26%2Fe7%2F26e7f957c4947c05b0a2678e7d0122d69b65c87c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F65%2Fd9%2F65d9088db382aa60dc9a8b453b22ffe5dcb5d70c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa9%2Fe4%2Fa9e47aae0110a62b02e40ea21b1e0ae62e769d67.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 7,
    name: "Relaxed Fit Jersey top",
    price: 1499,
    category: "Men",
    sub_category: "T-shirt",
    description:
      "Long-sleeved top in soft, printed cotton jersey. Relaxed fit with dropped shoulders and ribbing around the neckline and cuffs.",
    composition: "Shell: Cotton 100%",
    fit: "Relaxed fit",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fff%2F5d%2Fff5dcb13a7425d2a9588355c54c571b82aa5ceba.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0a%2F87%2F0a8746b8dfb4b52e6e0781129154c4f0ab3adbdb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F59%2Fd5%2F59d5930f7b0fb7d02102ef68b18cb32f14f2cb6e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7f%2F1a%2F7f1a007d4ae73dcdd00d425e17c2c06a7828848d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "Regular Fit T-shirt",
    price: 399,
    category: "Men",
    sub_category: "T-shirt",
    description:
      "Round-necked T-shirt in soft cotton jersey with a print motif.",
    composition: "Cotton 100%",
    fit: "Regular fit",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Feb%2F87%2Feb879800b9601059bc274271f0a734aa70415834.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F79%2Fdf%2F79dff2db545ba88dce5a6eda93913b09a47fbe73.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff6%2F66%2Ff6665fbfe4a74fe8ad79991b561f1c52b7640891.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B3%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F93%2Fac%2F93ac8057ae09b5fc91e05b7e714b3c1c11285f30.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["XS", "S", "M", "L"],
  },
  {
    id: 9,
    name: "Regular Fit T-shirt",
    price: 1299,
    category: "Men",
    sub_category: "T-shirt",
    description:
      "T-shirt in soft, printed cotton jersey. Round neckline with a narrow trim.",
    composition: "Cotton 100%",
    fit: "Regular fit",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc1%2F6a%2Fc16acb005217ac0df67f0379e120d348f53eb9f6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F9e%2F96%2F9e96414a0600b3809e1047b2ee935cb5d9283383.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F01%2F29%2F01291ac4fc1d0e4abc4b4a0cdcb07f7d018fcc71.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F45%2F44%2F4544cd9ab6c57e1e323052ad137290ce4b7fc870.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["XS", "XL"],
  },
  {
    id: 10,
    name: "Twill trousers Slim Fit",
    price: 1999,
    category: "Men",
    sub_category: "Trousers",
    description:
      "Chinos in extra-stretchy cotton twill with a zip fly, side pockets, a coin pocket and welt back pockets with a button. Slim Fit – a fit that is close-fitting at the thighs, knees and ankles to create a fitted silhouette.",
    composition: "Pocket lining: Cotton 100%, Cotton 98%, Elastane 2%",
    fit: "Slim fit",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F61%2Fe0%2F61e0ebeaffa2cfe6e494f727d589642c4787dcc7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_trousers_slim_all%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F98%2Fdf%2F98df05abac4166ed45139ffdcc731e914546f8f3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_trousers_slim_all%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff7%2Fa5%2Ff7a54badc467f0a8f3beb1a512541f5aeb2f4ea1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_trousers_slim_all%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Faf%2Feb%2Fafebe8e2c1e6dafd75f02c64a0374086585dc689.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_trousers_slim_all%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    size: ["28", "29", "30", "31", "32"],
  },
  {
    id: 11,
    name: "Cargo joggers",
    price: 2699,
    category: "Men",
    sub_category: "Trousers",
    description:
      "Cargo joggers in stretch cotton twill with an elasticated drawstring waist, side pockets and flap back and leg pockets with press-studs. Fake fly, shaping seams at the knees and ribbed hems.",
    composition: "Cotton 98%, Elastane 2%, Pocket lining: Cotton 100%",
    fit: "Slim fit",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdc%2F17%2Fdc1709026780f590e1f1088a522a764c7e1f2102.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_joggers%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7b%2F47%2F7b47acd9d4bb4e18c5faf1c37c5db5aeabc84a3a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_joggers%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fcd%2Ff5%2Fcdf57b42bf20ca7b7f705b802b336363e47e49a5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_joggers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F11%2F7e%2F117ef36e9d7d8e03456e6fc009ec93b8ee1557ab.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_joggers%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    size: ["30", "31", "32"],
  },
  {
    id: 12,
    name: "Cargo trousers Regular Fit",
    price: 2299,
    category: "Men",
    sub_category: "Trousers",
    description:
      "Trousers in a cotton weave with a zip fly and button, diagonal side pockets and flap leg and back pockets with concealed press-studs. Concealed drawstring at the hems. Regular Fit – a classic fit with good room for movement over the thighs and knees to create a comfortable, straight silhouette.",
    composition: "Pocket lining: Cotton 80%, Polyester 20%, Shell: Cotton 100%",
    fit: "Regular fit",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff6%2F6b%2Ff66b1551eacdd3b4e22934839a0fe68ea95d8583.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_trousers_regular_all%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4d%2Ff9%2F4df9e0bfdbe83e7f29af576b1939108fbdd0c852.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_trousers_regular_all%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F26%2F5b%2F265b9e0025b12277e7cca1b31d0b9c4035e00eea.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_trousers_regular_all%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F50%2F3c%2F503c6226f76df04826594f2c963a7bf798c3f6d5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_trousers_regular_all%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["28", "29", "30", "31", "32"],
  },
  {
    id: 13,
    name: "Cargo joggers",
    price: 2699,
    category: "Men",
    sub_category: "Trousers",
    description:
      "Joggers in a cotton weave with covered elastication and a drawstring at the waist, diagonal side pockets and flap back and leg pockets with concealed press-studs. Tapered legs with seams and darts at the knees and covered elastication at the hems.",
    composition: "Shell: Cotton 98%, Elastane 2%, Pocket lining: Cotton 100%",
    fit: "Slim fit",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F35%2F8d%2F358d398bb65376f08fab43e262cebdfe9736ac86.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1a%2F6d%2F1a6d816bd2c2e351a863498a7c55108c128d91c4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F25%2F02%2F25029f860edd4d40bcde7e5d07b2a8bbbb4ac1b1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F77%2F89%2F7789fd9d3e09add8e1752a8f68e101a50b97a73d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["31", "32"],
  },
  {
    id: 14,
    name: "Regular Fit Cargo trousers",
    price: 1299,
    category: "Men",
    sub_category: "Trousers",
    description:
      "Trousers in cotton twill with an elasticated, drawstring waist, zip fly and button, flap side and back pockets with a concealed press-stud, and bellows leg pockets with a flap and concealed press-studs. Legs with shaping seams at the knees for added mobility and covered elastication at the hems. Regular Fit – a classic fit with good room for movement over the thighs and knees to create a comfortable, straight silhouette.",
    composition: "Pocket: Cotton 100%, Shell: Cotton 98%, Elastane 2%",
    fit: "Regular fit",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F71%2Fc1%2F71c1b0fd0d92a212307aca4d9c0bbd823651d987.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F28%2F33%2F2833ce4fc770074b37668cfd17e7121d984ab17a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B3%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F10%2Fb7%2F10b735af43f4d77a1102201ca278c1f36f10f841.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F3f%2F10%2F3f10da74c7ce1dea6fcadfbe17d7dd2fbb579c95.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    size: ["XS", "M"],
  },
  {
    id: 15,
    name: "Trainers",
    price: 1999,
    category: "Men",
    sub_category: "Shoes",
    description:
      "Trainers with a padded top edge and lacing at the front. Mesh linings and insoles and rubber soles.",
    composition:
      "Lining and sock: Polyester 100%, Upper: Polyester 100%, Outer sole: Rubber 100%",
    fit: "",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fda%2F13%2Fda132ab119cd61e62d281cd77452d424342e3e0c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shoes_sneakers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fcf%2F4c%2Fcf4cfdc2f4ef697de2930aa853b9af5bc8a0ac59.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shoes_sneakers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7d%2Fb2%2F7db22da4516f9e6d8e68a20c2103b1e3b81d9e49.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shoes_sneakers%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["6.5", "7.5", "10.5"],
  },
  {
    id: 16,
    name: "Low profile trainers",
    price: 1499,
    category: "Men",
    sub_category: "Shoes",
    description:
      "Low profile trainers in cotton canvas with a padded top edge, lacing at the front and a loop at the back. Piqué linings and canvas insoles. Smooth-edged soles with a patterned underneath. Height of soles 3 cm.",
    composition:
      "Outer sole: Rubber 100%, Lining and sock: Polyester 100%, Upper: Cotton 100%",
    fit: "",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F53%2F5b%2F535b3fc8ff89fd9d87e05f27e0ce94791593e0d2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0f%2F98%2F0f985a840eefaa6c3de85d5e394203a643f29f74.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdb%2Fc5%2Fdbc5e01cc47869b9a59dfa229fa3b72139b7c532.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["6.5", "7.5", "8", "9", "10.5"],
  },
  {
    id: 17,
    name: "Hi-top trainers",
    price: 2299,
    category: "Men",
    sub_category: "Shoes",
    description:
      "Hi-top trainers in sturdy cotton canvas with a print motif, eyelets in the sides and a tongue and lacing at the front. Linings and insoles in cotton canvas and rubber soles that are patterned underneath. Height of soles 3 cm.",
    composition:
      "Upper: Cotton 100%, Lining and sock: Cotton 100%, Outer sole: Rubber 100%",
    fit: "",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff8%2Fb2%2Ff8b2c89a277e608070b37ba884411c78cd431b37.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fec%2Fd9%2Fecd987ea0bd0966fa23dcc19ea5947831bf0f8cc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fec%2Ff8%2Fecf8badf9655000543676aa8d1a031f158f2d986.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["6.5", "7.5", "8", "9", "10.5"],
  },
  {
    id: 18,
    name: "Low profile printed trainers",
    price: 1999,
    category: "Men",
    sub_category: "Shoes",
    description:
      "Low profile trainers in patterned cotton canvas with a padded top edge, lacing at the front and a loop at the back. Piqué linings and canvas insoles. Smooth-edged rubber soles with a patterned underneath. Height of soles 3 cm.",
    composition:
      "Outer sole: Rubber 100%, Upper: Cotton 100%, Lining and sock: Polyester 100%",
    fit: "",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe8%2F5e%2Fe85ea06ef8be9337e460902586b2c1c52c8534b6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F57%2F7a%2F577a25fa5adb0b8029b12380827bab544a7f408e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F55%2Fc0%2F55c0428f79681e8cd2fc88e4cbca0a85129dadbe.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["7.5", "8", "9", "10.5"],
  },
  {
    id: 19,
    name: "Canvas hi-top trainers",
    price: 1999,
    category: "Men",
    sub_category: "Shoes",
    description:
      "Hi-tops in sturdy cotton canvas with a tongue and lacing at the front. Cotton canvas linings and insoles and rubber soles that are patterned underneath. Height of soles 3.1 cm.",
    composition:
      "Lining and sock: Cotton 100%, Outer sole: Rubber 100%, Upper: Cotton 100%",
    fit: "",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F10%2F25%2F102539311666ad19c0ba7a8fdf0fecd64e80d999.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1f%2F50%2F1f50fbb1997ed1ec976ce86d267e901fa2b7bbb5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4d%2F12%2F4d1206302d0d8e26b5fd8c1f4d19ed74531361b2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    size: ["7.5", "8", "9", "10.5"],
  },
  {
    id: 20,
    name: "Patterned trainers",
    price: 1999,
    category: "Men",
    sub_category: "Shoes",
    description:
      "Low profile trainers in patterned cotton canvas with a padded top edge, lacing at the front and a loop at the back. Piqué linings and canvas insoles. Smooth-edged rubber soles with a patterned underneath. Height of soles 3 cm.",
    composition:
      "Lining and sock: Polyester 100%, Outer sole: Rubber 100%, Upper: Cotton 100%",
    fit: "",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4f%2Fab%2F4fab81019f1602109367194000f1b641bde20af5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7e%2F5d%2F7e5d2045c1bfc46d330c40e51ce1b5dfc599cc06.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe0%2Ff4%2Fe0f4f8177d0cd0fbcb4e0334a7968bf8ce09bcb6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["7.5", "8", "9", "10.5"],
  },
  {
    id: 21,
    name: "Slim Jeans",
    price: 1499,
    category: "Men",
    sub_category: "Jeans",
    description:
      "5-pocket jeans in stretch cotton denim with a regular waist, zip fly and button, and slim legs.",
    fit: "Slim fit",
    composition: "Pocket lining: Cotton 100%, Shell: Cotton 98%, Elastane 2%",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6a%2F6a%2F6a6adf7dede242a98b194fee7cc8f60e4737ae0a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb4%2F75%2Fb47583f7d70d4122b4912bee3e518d50a37fb5ef.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fec%2F2a%2Fec2ab2a2f3fad8537ed725159e711715584e1665.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb6%2F26%2Fb626e8a76cc287928788b5edc8d1fa2679440a88.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["32", "34", "36", "38", "40"],
  },
  {
    id: 22,
    name: "Relaxed Jeans",
    price: 1999,
    category: "Men",
    sub_category: "Jeans",
    description:
      "5-pocket jeans in washed cotton denim with a regular waist, zip fly and button and wide, straight legs. The cotton content of the jeans is partly recycled.",
    composition: "Cotton 100%",
    fit: "Relaxed fit",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5e%2F57%2F5e57048175c9811bd8620408789ca1bdbc2be646.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jeans%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F59%2Fb9%2F59b90a7a1f58e374201a2fefe3aa2fa4cfcc0dd0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jeans%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fea%2Fac%2Feaacabc2ec17ad8264d829bdad683557d36ee4cd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jeans%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F28%2F68%2F2868fb6b3959ee3693c69f5b20bd0267a7040b61.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jeans%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["38"],
  },
  {
    id: 23,
    name: "Hybrid Regular Tapered Joggers",
    price: 2699,
    category: "Men",
    sub_category: "Jeans",
    description:
      "5-pocket joggers in stretch denim. Regular waist with covered elastication and a drawstring, and a zip fly with a button. Gently tapered legs with good room for movement over the thighs and knees, and covered elastication at the hems. Made using Lycra® Hybrid Technology for exceptional softness and comfort without compromising the authentic denim look.",
    composition: "Cotton 78%, Polyester 21%, Elastane 1%",
    fit: "Regular fit",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc0%2Fae%2Fc0aeaa120dc257f474d3fb13ee9450770912cb34.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0c%2Ffc%2F0cfccd16076badfa5c3fd46e46c73bcc99173e45.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6c%2F20%2F6c20d19c051aeabfce8e5ade9065def1f57902e1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fac%2Ffa%2Facfa61049be5b881ea343af9ccc0c1b72a00268c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    size: ["36", "38", "40"],
  },
  {
    id: 24,
    name: "Regular Jeans",
    price: 1499,
    category: "Men",
    sub_category: "Jeans",
    description:
      "5-pocket jeans in stretch cotton denim with a regular waist, zip fly and button and gently tapered legs with good room for movement over the thighs and knees.",
    composition: "Pocket lining: Cotton 100%, Shell: Cotton 98%, Elastane 2%",
    fit: "Regular fit",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0f%2Ffa%2F0ffa61e8c22512cbaa800fb7076c00beb5b5aaa1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc9%2F92%2Fc9922b6e0dc0928c67aba40ca037074c50438fa6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F55%2F11%2F5511326fa766ff0c58d91ecc6677e08ab5a5ff64.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbb%2Fdc%2Fbbdce96d8592344e398e26046475033882a67ac1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["34", "36", "38", "40"],
  },
  {
    id: 25,
    name: "Relaxed Jeans",
    price: 1999,
    category: "Men",
    sub_category: "Jeans",
    description:
      "5-pocket jeans in washed cotton denim with a regular waist, zip fly and button and wide, straight legs. The cotton content of the jeans is partly recycled.",
    composition: "Pocket lining: Polyester 65%, Cotton 35%, Shell: Cotton 100%",
    fit: "Relaxed fit",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe9%2Fa8%2Fe9a8712fb9624dfd3ec32a91b83fe1cfd87be31a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7d%2Fd0%2F7dd0e4d7d7ee3e9d23bf079921c71c9db5fc6810.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F24%2F30%2F24303b8f21732d41622f6a42e91af7fe4296ba73.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff3%2Fb7%2Ff3b78d9edd125a66dc8e48cb3f338f267270325e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["32", "34", "36", "38", "40"],
  },
  {
    id: 26,
    name: "Cropped top",
    price: 399,
    category: "Women",
    sub_category: "Tops and T-shirt",
    description:
      "Cropped top in cotton jersey with a round neckline and short sleeves.",
    composition: "Cotton 95%, Elastane 5%",
    fit: "",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F62%2F48%2F62482f54281d21cbc44a59ba765b08df24bc89bf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F08%2Ff8%2F08f8662ad2d1ebb448fe9af9d393f4f9fd0e1f7a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F22%2F6d%2F226d27bcaed22f4fafb74e40fa56740c6b90f158.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5b%2F13%2F5b1344b8072bc18f6170af43f6e7cbdb715a448d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["XS", "S", "M", "L"],
  },
  {
    id: 27,
    name: "Print-motif T-shirt",
    price: 1299,
    category: "Women",
    sub_category: "Tops and T-shirt",
    description:
      "Slightly oversized T-shirt in cotton jersey with a print motif, dropped shoulders and ribbing around the neckline.",
    composition: "Cotton 100%",
    fit: "Oversized",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe4%2F2a%2Fe42ad4cbfd5e0aea4c307af312cc49ceaaefe7d2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fde%2F68%2Fde68af3620c0494fc571ce805bd870c1cd702b26.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fff%2F75%2Fff75cfcaccbe834bf73eb73ca6710ecd599d8534.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F78%2Ff4%2F78f4389648abaf75ec67033f7a2adb791764ffc3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_tops_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["XS", "S", "M", "L"],
  },
  {
    id: 28,
    name: "Ribbed thong body",
    price: 799,
    category: "Women",
    sub_category: "Tops and T-shirt",
    description:
      "Fitted thong body in ribbed cotton jersey with a deep neckline, long sleeves and concealed press-studs at the crotch.",
    composition: "Cotton 95%, Elastane 5%",
    fit: "Fitted",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F27%2Fb5%2F27b51b5c5504f0a1b9f63980c976aa1bff86e325.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdc%2F0d%2Fdc0db8895c592390776bfe18c7717f5c28f80e18.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6f%2F36%2F6f361693d221a26d8e2cfa620e71b47a5fe62df7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_tops_bodys%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F13%2F3d%2F133d4f12889e837b138710c8fc58c5df06334f6a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_tops_bodys%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 29,
    name: "Lacing-detail cropped top",
    price: 799,
    category: "Women",
    sub_category: "Tops and T-shirt",
    description:
      "Fitted, cropped top in ribbed cotton jersey with contrasting colour flatlock seams. Round neckline, a cut-out panel with lacing down the front, and short sleeves.",
    composition: "Cotton 100%",
    fit: "Fitted",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff5%2Fbc%2Ff5bc5cbe606ea615e2c861c37c2ff109a84e66eb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fcf%2Fa3%2Fcfa3c77452fe5addbf188f26103f0d5ff23db95e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb9%2F05%2Fb9056bc71e8d51a10c2b515236cf55b13a2b79f9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_tops_croppedtops%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F20%2Ff9%2F20f929cbfe96fecec00cbc852b9f4ec0f79d423d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_tops_croppedtops%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["M", "L", "XL"],
  },
  {
    id: 30,
    name: "Ribbed vest top",
    price: 599,
    category: "Women",
    sub_category: "Tops and T-shirt",
    description: "Fitted vest top in ribbed cotton jersey with a round neck.",
    composition: "Cotton 95%, Elastane 5%",
    fit: "Fitted",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F16%2F65%2F166547cd374ee86e33c8462181f4143d1ae0a53b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F50%2Fea%2F50ea27987142568f729f6485e28990c6514bc9ed.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F78%2F6f%2F786f194e5aa13ee42cd3a42e3d10055d8432aed1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F64%2F51%2F6451292f16a2d9d608730232174a7f24ac0c78d0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 31,
    name: "Mom Loose-fit Ultra High Jeans",
    price: 1499,
    category: "Women",
    sub_category: "Jeans",
    description:
      "5-pocket, ankle-length jeans in washed denim with an extra-high waist and zip fly and button. Loose fit with gently tapered legs. The cotton content of the jeans is partly recycled.",
    composition: "Cotton 100%",
    fit: "Loose fit",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F85%2Fa1%2F85a1a62ceb79f9cba00f8d887cc0a9a017e2036e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_loose%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F11%2F3c%2F113c30b069b0efd0ce83fcde3c5860935eeb0e4d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_loose%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fcb%2F45%2Fcb45b9f067e462cb28a9fd63461549701e58333b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_loose%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F40%2Fe5%2F40e5f70ff7268943b8afbf27cb0801182559eb47.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_loose%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    size: ["32", "34", "36"],
  },
  {
    id: 32,
    name: "Loose Mom Ultra High Jeans",
    price: 1499,
    category: "Women",
    sub_category: "Jeans",
    description:
      "5-pocket, ankle-length jeans in washed denim containing some recycled cotton with an extra-high waist and zip fly with a button. Slightly looser fit with straight legs and worn holes at the knees.",
    composition: "Pocket lining: Cotton 100%, Shell: Cotton 100%",
    fit: "Loose fit",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5d%2Fcc%2F5dcc1e6e0eb74d358def638f6088b453d3e36c5c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdf%2Fd7%2Fdfd7120a9c46630d9d7cbec59e0d89e4f646c9e3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0a%2F07%2F0a073444e2e7107694afc8b31f3004db72436bb6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Feb%2Ffb%2Febfbc89b3fc5743cd7fa02696b1986016ee644f4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    size: [],
  },
  {
    id: 33,
    name: "Skinny High Ankle Jeans",
    price: 1999,
    category: "Women",
    sub_category: "Jeans",
    description:
      "5-pocket, ankle-length jeans in sturdy cotton denim with hard-worn details. High waist, a zip fly and button and skinny legs with holes at the knees.",
    composition: "Cotton 100%",
    fit: "Skinny fit",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F16%2F18%2F1618035c82c4eaf0e59c140d39d57869c1b5568b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F60%2F7d%2F607da4aa2501e485baf26162912441e161145ef5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8b%2Fa1%2F8ba11b60c6562c6f88ab4341bfaf775a9552012b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F96%2F63%2F966380125034f22c490c4d24ebf5f0df169401da.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["32", "34", "36", "38", "40", "42"],
  },
  {
    id: 34,
    name: "Mom High Ankle Jeans",
    price: 1999,
    category: "Women",
    sub_category: "Jeans",
    description:
      "5-pocket, ankle-length jeans in washed, stretch cotton denim with an extra-high waist. Slightly looser fit with straight legs. The cotton content of the jeans is partly recycled.",
    composition: "Cotton 99%, Elastane 1%",
    fit: "Loose fit",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F82%2F27%2F82271a05ac3a44247b9dc09238cb5a9468d261b7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_loose%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ffe%2F12%2Ffe127fe101db4d22ee99a2d9711e1b85aabd22a7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_loose%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fae%2Ffe%2Faefefb1799845931cbad50f5cd760c1a53bd4f27.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_loose%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff3%2F10%2Ff3105a12b4e78a9e8114ed45ee8779ac804eb46d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_loose%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    size: ["32", "34", "36"],
  },
  {
    id: 35,
    name: "90’s Straight Baggy Jeans",
    price: 2299,
    category: "Women",
    sub_category: "Jeans",
    description:
      "5-pocket jeans in sturdy, washed denim. Relaxed fit with a high waist, diagonal zip fly and button and extra-long, straight legs.",
    composition: "Cotton 100%",
    fit: "Relaxed fit",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0c%2F4f%2F0c4fbcb5970e8610db06bf2817b78fe8e4c11ce3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1f%2F2a%2F1f2a71a82b29689bc1a1fce5792114acdd20fdcf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6a%2Fc1%2F6ac1583e04eb7189ce6ac8f9b1c09c617b713eb8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F16%2F09%2F1609eba6018de918bffd7e437d91ac563ad09bb9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["32", "34", "36", "38", "40", "42"],
  },
  {
    id: 36,
    name: "Oversized lyocell jacket",
    price: 5499,
    category: "Women",
    sub_category: "Jackets",
    description:
      "Straight-cut jacket in lightweight Tencel™ lyocell twill. Relaxed fit with notch lapels, two buttons at the front, a chest pocket and flap front pockets. Decorative buttons at the cuffs and a single back vent. Lined.",
    composition: "Shell: Lyocell 100%, Lining: Polyester 100%",
    fit: "",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff9%2F43%2Ff94347ffb81c1fb18fc2dadf01862f1540dc9fa6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd2%2Fa5%2Fd2a5d8e9759dd3d4164b1e63d3257ec5893bc492.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F00%2F29%2F0029ff5b600e5f6ff1ed3339884f3432de4e220a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd6%2Fb0%2Fd6b06d5829518a1b539f93562683db29a3326859.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 37,
    name: "Short-sleeved jacket",
    price: 2699,
    category: "Women",
    sub_category: "Jackets",
    description:
      "Short-sleeved jacket in a woven viscose blend with a single button at the front and diagonal welt pockets. V-shaped opening with shaped horizontal panels that button together at the front. Lined.",
    composition: "Shell: Viscose 72%, Polyamide 28%, Linings: Polyester 100%",
    fit: "",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fae%2Fd5%2Faed532b0bbd458059b29db31d94e5b79f6408200.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6e%2F58%2F6e587c96aa53fe603b1e9d1900d25fc65a33d5ed.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe0%2F2e%2Fe02e323b46896b7d1e994bf72ebd2952cfa2eb2b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F63%2Fbe%2F63be4b3ddc05368d86a8f07ce3ea406f39908197.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["XS", "S", "M", "L"],
  },
  {
    id: 38,
    name: "Oversized jacket",
    price: 2999,
    category: "Women",
    sub_category: "Jackets",
    description:
      "Straight-cut, oversized, single-breasted jacket in a woven viscose blend with notch lapels, dropped shoulders, a chest pocket and jetted front pockets. Lined.",
    composition: "Lining: Polyester 100%Shell: Viscose 92%, Polyester 8%",
    fit: "Oversized",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7e%2Ff6%2F7ef626217894cdf6353855ab4a5633398fed572c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F48%2F64%2F486499fc4e75746c773b68563945a81620bff68f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F60%2F6b%2F606b0e69c18c5ed84443c6cb76edd4f5a775cb88.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0f%2Fe6%2F0fe60e44b29ae72ad4567e0fca1558f0400db671.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["XS", "S", "L", "XL"],
  },
  {
    id: 39,
    name: "Gathered-sleeve jacket",
    price: 2999,
    category: "Women",
    sub_category: "Jackets",
    description:
      "Straight-cut jacket in woven fabric containing some linen with peak lapels, welt front pockets and 3/4-length, gathered sleeves. No fasteners. Lined.",
    composition:
      "Lining: Polyester 100%Shell: Polyester 65%, Viscose 32%, Elastane 3%",
    fit: "",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5a%2Fbd%2F5abd803afc6d33eda44026d2b0dc95d57a00fe88.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2c%2Fe9%2F2ce99fd8d18d34c50dd29301415833c4d0ebd1e0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fca%2F40%2Fca4059337f5a3a76cf0955b66a7cc8f4fe4108dc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F9c%2F83%2F9c83e163db283f08722b339fd1c14f3d69285a20.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 40,
    name: "Oversized jacket",
    price: 1499,
    category: "Women",
    sub_category: "Jackets",
    description:
      "Oversized, double-breasted jacket in woven fabric. Relaxed fit with large shoulder pads and notch lapels with an embroidered detail. Fake flap front pockets and a single back vent. Unlined.",
    composition: "Polyester 98%, Elastane 2%",
    fit: "Oversized",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F12%2Ff9%2F12f9431f5ba7aa0fa7a403b3b6551b5d4018bd29.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5f%2F51%2F5f51bb4e511ac7233ca92e37a829827676dac32c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc2%2F4a%2Fc24a4fc667587e2db09b14f9e66d00b0ca12d9f6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_blazers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F48%2F90%2F489049846dc6b95ee0a508655b81dacfd3de6c53.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_blazers%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["XL"],
  },
  {
    id: 41,
    name: "Cotton-blend sweatpants",
    price: 1299,
    category: "Women",
    sub_category: "Trousers",
    description:
      "Sweatpants in soft sweatshirt fabric made from a cotton blend. High waist with covered elastication and a drawstring, side pockets, and covered elastication at the hems. Soft brushed inside. The polyester content of the sweatpants is recycled.",
    composition: "Cotton 60%, Polyester 40%",
    fit: "",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbe%2F3d%2Fbe3d15e5e5cc65353ca09910bf390459b09dfbab.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbd%2F8c%2Fbd8c8a973dce14913435304119007f692bd79db8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff8%2F4b%2Ff84b891b4b54843cbcaff6a77c000bbe0eee5db6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd7%2F8e%2Fd78e58307d86faf1efe2ac5f10f0fa6a0f6f3982.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["XL"],
  },
  {
    id: 42,
    name: "Crease-leg trousers",
    price: 1999,
    category: "Women",
    sub_category: "Trousers",
    description:
      "Ankle-length trousers in woven fabric. High waist with covered elastication at the back, a zip fly and concealed hook-and-eye fasteners. Pleats at the front, shaping darts at the back, diagonal side pockets, fake back pockets and legs with creases.",
    composition: "Linen 53%, Viscose 47%",
    fit: "",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F08%2F7b%2F087bdad62ccebb34fae0935938c7ff112d8c3104.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_trousers_highwaisted%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1f%2F31%2F1f318b55018990641e1034cf8ef34a8b2767c384.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_trousers_highwaisted%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F64%2F76%2F64766549f3c9cde3c811faacd86e0e0030b56790.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_trousers_highwaisted%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F97%2Fbb%2F97bb753e9e217892c74e7759554d7614e8b5cb10.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_trousers_highwaisted%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["M", "L", "XL"],
  },
  {
    id: 43,
    name: "Wide lyocell-blend trousers",
    price: 2299,
    category: "Women",
    sub_category: "Trousers",
    description:
      "Trousers woven in a soft lyocell blend. High waist with covered elastication, diagonal side pockets and wide, straight legs.",
    composition:
      "Pocket lining: Polyester 100%, Shell: Lyocell 52%, Polyester 48%",
    fit: "",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F9a%2F05%2F9a05a24f34697fe298f517c4b03fbb2a6c3c9fbd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F86%2Fa1%2F86a1178505bd6efcf45ab5056d65722b031083e0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F50%2Fc9%2F50c9d7563ec475af5bf77f0840b5a5da94817e5b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F99%2F24%2F992461def8ae8b09f5618294d7bddf0faa439b6b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["M", "L", "XL"],
  },
  {
    id: 44,
    name: "Ribbed jazz trousers",
    price: 799,
    category: "Women",
    sub_category: "Trousers",
    description:
      "Flared leggings in ribbed heavy jersey. High waist with covered elastication.",
    composition: "Polyester 85%, Elastane 15%",
    fit: "",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0e%2Ff5%2F0ef5a372db440b5cab853d24ada6e401d237b707.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe0%2F7a%2Fe07af963032cdd46ce94c1cfb029e08b594e1990.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb0%2F04%2Fb0049d4b29024a351d3206f6383e16f0aa563f2e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F18%2F24%2F18247ea865fec226ac496ab997e5ca5440388654.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["S", "M", "L"],
  },
  {
    id: 45,
    name: "Jersey joggers",
    price: 799,
    category: "Women",
    sub_category: "Trousers",
    description:
      "Joggers in heavy jersey made from a cotton blend. Elasticated, ribbed waistband with a drawstring, and slim legs with ribbed hems.",
    composition:
      "Waist: Cotton 55%, Polyester 40%, Elastane 5%, Shell: Cotton 60%, Polyester 40%",
    fit: "",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F47%2F1a%2F471a8bcb447d1182943b917093dcf2a9ff3d5c8f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1c%2F51%2F1c51ed7b26d15cae63e7eaebded14f895a10e63f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F55%2F99%2F5599b3c1f32d7241c20e194486f7dc7261acb4e9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_basics_trousersleggings%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1f%2F8b%2F1f8bc78d082da7d20f9613f3479c533bbbafbb0c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_basics_trousersleggings%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["M", "L"],
  },
  {
    id: 46,
    name: "Wide trousers",
    price: 1999,
    category: "Women",
    sub_category: "Trousers",
    description:
      "High-waisted trousers in woven fabric with pleats at the front and a zip fly and button. Side pockets, fake back pockets and wide, straight legs with creases.",
    composition:
      "Shell: Viscose 93%, Polyester 7%Pocket lining: Polyester 100%",
    fit: "",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1d%2Fa5%2F1da594c2a643ca785df64eb1c8fe2cdc63bf48ef.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F62%2F0d%2F620d2e733f31002b02f450d5a218a6c33c4d58eb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F44%2Fc4%2F44c4263ecd2a7541068d199709fef27222477e82.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_3:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F22%2Fb1%2F22b1a766fa3f39115af7d306c55b5f786e8b14dd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["S", "M", "L", "XL"],
  },
  {
    id: 47,
    name: "Mules",
    price: 2299,
    category: "Women",
    sub_category: "Shoes",
    description:
      "Mules in imitation leather with open, square toes, a wide, padded foot strap with quilted seams, and partially covered heels. Imitation leather linings and insoles. Heel 7.5 cm.",
    composition:
      "Lining: Imitation Leather 100%, Sole: Thermoplastic rubber 100%, Upper: Imitation Leather 100%",
    fit: "",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fac%2F00%2Fac0070df680f1fbd0b01f5968b9e97ebfbbcc34b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb3%2Fa4%2Fb3a4691d977beb3f4d10362375854163721356d4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7f%2Fb5%2F7fb51add0cb48a100189439f21c5947d477424d1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["5", "6", "6.5", "7", "8"],
  },
  {
    id: 48,
    name: "Platform trainers",
    price: 1999,
    category: "Women",
    sub_category: "Shoes",
    description:
      "Platform trainers with lacing at the front, cotton canvas linings and insoles and rubber soles. Platform 3.5 cm.",
    composition:
      "Upper: Cotton 100%Outer sole: Rubber 100%Lining and sock: Cotton 100%",
    fit: "",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F80%2F0a%2F800a2ab8feb4f4e3923a6e312048322b64423961.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_shoes_sneakers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F27%2F89%2F2789fc02e72092afb1affd7c7b71385ba72f4718.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_shoes_sneakers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0e%2Fbf%2F0ebf8adb9f4f7301375058a1324c9340c0b3babd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_shoes_sneakers%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["7", "8"],
  },
  {
    id: 49,
    name: "Low profile trainers",
    price: 799,
    category: "Women",
    sub_category: "Shoes",
    description:
      "Trainers in cotton canvas with lacing at the front and a loop at the back. Cotton canvas linings and insoles. Height of soles 2.5 cm.",
    composition:
      "Outer sole: Thermoplastic rubber 100%, Upper: Cotton 100%, Lining and sock: Cotton 100%",
    fit: "",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F61%2Fe9%2F61e9d39df8f1895e13a63039a701995227d30c4a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa6%2Fae%2Fa6ae3ac8bf9eaa0c0f9dfb71fa51546d369dceb9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F25%2Fdb%2F25dba92a347a312298fc3ebb73f00f8e02967499.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["3.5", "4", "5", "6"],
  },
  {
    id: 50,
    name: "Chelsea boots",
    price: 2699,
    category: "Women",
    sub_category: "Shoes",
    description:
      "Chelsea boots in imitation leather with platform soles, elastic gores in the sides and a loop at the back. Satin linings, imitation leather insoles and chunky soles that are patterned underneath. Height of soles 6.5 cm.",
    composition:
      "Sole: Thermoplastic rubber 100%Upper: Polyurethane 100%Lining: Polyester 100%",
    fit: "",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4a%2Fa4%2F4aa4aa3a6bb9030c6f9011d7196fa686ba0e1657.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbc%2Ffc%2Fbcfc3addcf834157ca794927501999f36738c2e7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fec%2F04%2Fec04463775c0e1c9b24f115689a2fbce642dadac.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_shoes%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["5", "6", "6.5", "7", "8"],
  },
  {
    id: 51,
    name: "Platform espadrilles",
    price: 1999,
    category: "Women",
    sub_category: "Shoes",
    description:
      "Espadrilles in cotton canvas containing some linen. Elastic gores in the sides and platform soles with braided jute trims. Cotton canvas linings and insoles and soles that are fluted underneath.",
    composition:
      "Sole: Thermoplastic rubber 100%, Sock: Cotton 90%, Linen 10%, Lining: Cotton 100%, Upper: Cotton 90%",
    fit: "",
    main_img:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1b%2F9c%2F1b9ced1fe30172aa0ec547415fd06bedb8b3a9ad.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_shoes_sandals_espandrillos%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_1:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb2%2Fa4%2Fb2a4de8150ce70be4c5b76c7ce306f9c4e54add8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_shoes_sandals_espandrillos%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    other_img_2:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdf%2F0b%2Fdf0ba5e5c635897ded2b2f74dc221228bd42e88f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_shoes_sandals_espandrillos%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    size: ["5", "6", "6.5", "7", "8"],
  },
];

export default data;
