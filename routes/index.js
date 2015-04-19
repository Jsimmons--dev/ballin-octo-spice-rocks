var express = require('express');
var jade = require('jade');
var jsonParams = require('./example1/JSONparams');
var router = express.Router();
//var example1 = require('../example1/boilerplate.json');
//console.log(example1);
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Josh!' });
});

var params = {
logo:'text',
title:'<?php echo $data-title; ?>'
}

//boilerplate
var b1 = ' OVER 30,000 POSITIVE FEEDBACKS (20,000+ UNIQUE)'; 
var b2 = 'OVER 40,000 SALES ON EBAY';
var b3 = '100% Positive Feedback and we maintain a great rating'; 
var feedbackButton = 'http://feedback.ebay.com/ws/eBayISAPI.dll?ViewFeedback2&userid=estateauctionsinc&&_trksid=p4340.l2560&rt=nc&iid=290762637397&sspagename=VIP:feedback&ftab=FeedbackAsSeller'; 

var b4 = 'OVER 10,000 REPEAT BUYERS';
var b5 = 'YOU CAN BID WITH CONFIDENCE!!';
var b6 ="Please note: We put up a very ecclectic collection of items and are not experts in every area, so descriptions are our best guess as to what something is. While we try to research each item to the best of our ability, it is the buyer's responsibility to know what they are buying.";
var b7 = 'TERMS OF SERVICE';
var b8 = 'EBAY is ALL we do for a living, husband and wife (Norb & Marie) working together, while we home school our kids on our farmette in Rural Delmarva. We have worked very hard to build our little business and it is very important to us. We try and do business the old fashioned way and have a rather simple outlook.';
var b9 = 'Treat all of your customers as if they are family.';
var b10 = 'Be courteous, answer emails, be fair in all your deallings and try and make friends of each and every customer.';
var b11 = "BUT... with eBay's new star rating and the rate increases in the U.S. Postal rates we needed to define and explain our methods of business. ";
var b12 = 'ONE - Who We Deal With';

var b13 = 'We sell and ship world wide to anywhere, so please email us for a quote to wherever you happen to be. ';
var b14 = 'TWO - Shipping Charges';
var b15 = 'We charge shipping based on the USPS system, we will sometimes ship via courier if we can get it to you within the same time frame or faster. We add a reasonable cost for materials, normally that is $2.00 for regular sized packages. For small flat items $1.00. That covers the expense of boxes, envelopes, bubble wrap, peanuts, (We only use new packing materials, life is too short to scrounge through dumpsters). For larger items that take a larger more expensive box, we charge a little more, to cover the special box, example paintings or lamps. For oversized items or items that will take special attention to package, (Build a crate, wrap a zillion things individually, etc.), we ask you to email us for a quote on shipping prior to the auction ending. If you do not, we charge the same amount as if you did. In other words WE NEVER GOUGE OUR CLIENTS SHIPPING COSTS!! ';
var b16 = 'THREE - International Shipping';
var b17 = 'We charge shipping based on the USPS international system. The rates follow the same guidelines as number two above, though for international customers we add an additional $1.00 to cover the extra paperwork involved in international shipping. If an amount goes over $50 in value we will only ship it with Priority or Express Mail, regardless how small an item. That allows for us to have international tracking. There is no tracking available on First Class Mail. ';
var b18='FOUR - Insurance';
var b19="eBay's policies no longer allows us to charge the client for insurance. But... we still apply insurance to any item that goes over $27.00 in value. We reserve the right to use the insurance carrier of our choice. Sometimes that is Postal or the Carrier's Insurance and sometimes that is a private insurance company such as DSI or U-PIC/Shipsurance. If we use a private insurance company the package will not be marked insured, but it will be.";
var b20='FIVE - Methods of Payment Accepted';
var b21="We abide by eBay's rules and try and stay abreast of their changes. We accept Paypal. Paypal also accepts the major credit cards, or we also take Credit Cards Directly over the phone, (MC, VISA, DISCOVER, AMERICAN EXPRESS, CARTE BLANCHE, DINERS CLUB, JCB) Bottom line, whatever method is most convenient for you. ";
var b22='SIX - Time Frame To Pay';
var b23='We ask all auctions to be paid for in the fastest possible time frame. (This is all we do for a living and we need the money to pay the bills and buy more unique and fun items to put up on eBay) ';
var b24='SEVEN - Shipping Time Frame';
var b25='We make every effort to ship in a timely manner. We are home schooling the boys, listing tons of items, and as like any of us are just plain swamped, so we have to schedule a special time to pack and ship. We ship on a first paid, first shipped basis. (We do not ship any item until it has been paid and the funds have cleared.) With the ebb and flow of payments we manage to get everything out of the door within one week. If there is a rush, we will make every effort to work with you in getting it out of the door faster. As you can see from our feedback, we do not disappoint. OF COURSE, items that need special attention, crating, etc adds to the time frame of those items. ';
var b26='EIGHT  - Local Pickup';
var b27="Sometimes it makes sense to come by and pickup your items.  Sometimes an item is just too big for any other option.  If you've arranged local pickup with us, you must pickup the item within 30 days otherwise it will be subject to storage fees or relisting.";
var b28='NINE  - Communication';
var b29='Please feel free to contact us at anytime, with any question or comment. Unless we are out of town we make an effort to answer all emails as quickly as possible.';

var exampleParams = {
logo :'http://misc.estateauctionpics.com/eai_header2.jpg',
book : 'http://misc.estateauctionpics.com/buyourbook.jpg',
welcomeTextTitle:'Welcome to EstateAuctionsInc!',
welcomeTextBody: 'We are one of the Leading Sellers of Antiques, Collectibles and Quirky items on eBay. We have been selling since 1998 and ALL of our auctions start at .99 cents. We are proud to announce that we maintain a "FIVE STAR Detailed Seller Rating" and our staff strives for 100% customer satisfaction, our 100% feedback rating will vouch for that. We work with consigners from Coast-To-Coast and work hard to make sure we have top quality items.',
yqzplug:'We are "Your Quality Zone" - search "YQZ" to see our other listings',
yqzother:'http://www.ebay.com/sch/estateauctionsinc/m.html?hash=item43b2cdc055&item=290762637397&pt=Art_Paintings&rt=nc&_trksid=p4340.l2562',
title:'Mid Century Modern American Geometric Abstact Oil Painting SIGNED Paster',
subtitle: 'Pennsylvania Artist from Bala Cynwld PA',
description:' In this auction, we have a mid century modern geometric abstract serigraph by Pennsylvania artist ,L Paster. The artist uses bold, contrasting colors and precise lines to create depth. The design is futuristic, in line with what was popular at the time of the space age. The signature of the artist is found on the bottom left, "Paster." The back has the address info for the artist, in Bala Cynwyd, PA.', 
pics:'http://201503.estateauctionpics.com/20150326165101_4.jpg',
facts:'FACTS ABOUT ESTATEAUCTIONSINC',
factss1:'(Norb & Marie Novocin)',
auctionsline:'Estate Auctions, Inc.',
years:'In our 17th year on Ebay!',
applet:'',
b1 : b1,b2 : b2,b3 : b3,feedbackButton : feedbackButton,b4 : b4,b5 : b5,b6 : b6,b7 : b7,b8 : b8,b9 : b9,b10 : b10,b11 : b11,b12 : b12,b13 : b13,b14 : b14,b15 : b15,b16 : b16,b17 : b17,b18 : b18,b19 : b19,b20 : b20,b21 : b21,b22 : b22,b23 : b23,b24 : b24,b25 : b25,b26 : b26,b27 : b27,b28 : b28,b29 : b29,
logoC:'logoC1',
bookC: 'bookC1',
welcomeC: 'welcomeC1'
}


router.get('/frame',function(req,res){
	res.render('frameDiv', jsonParams);
});
module.exports = router;

