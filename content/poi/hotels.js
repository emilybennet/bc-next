const hotels = [
  {
    id: 2,
    hash: "marriott",
    name: "Baltimore Marriott Inner Harbor at Camden Yards",
    address: "110 S Eutaw St",
    phone: "410-962-0202",
    url:
      "https://www.marriott.com/hotels/travel/bwiih-baltimore-marriott-inner-harbor-at-camden-yards/",
    urlSpecial:
      "https://book.passkey.com/gt/217239669?gtid=c452aa6194dd5dcc905a800efe4e14a8",
    price: 139,
    distance: 0.51,
    walkTime: 0,
    coordinates: {
      lat: 39.290947,
      lng: -76.62108
    }
  },
  {
    id: 1,
    hash: "hilton",
    name: "Hilton Baltimore",
    address: "401 W Pratt St",
    phone: "443-573-8700",
    url:
      "https://www3.hilton.com/en/hotels/maryland/hilton-baltimore-inner-harbor-BWICCHH/index.html",
    urlSpecial: "https://book.passkey.com/event/49756644/owner/61726/home",
    price: 158,
    distance: 0.5,
    walkTime: 0,
    coordinates: {
      lat: 39.286255,
      lng: -76.620865
    }
  },
  {
    id: 3,
    hash: "sheraton",
    name: "Sheraton Inner Harbor Hotel",
    address: "300 S Charles St",
    phone: "410-962-8300",
    url:
      "https://www.marriott.com/hotels/travel/bwiis-sheraton-inner-harbor-hotel/",
    urlSpecial:
      "https://book.passkey.com/event/49842558/owner/295/home?utm_campaign=281961119",
    price: 159,
    distance: 0.15,
    walkTime: 0,
    coordinates: {
      lat: 39.28547,
      lng: -76.61482
    }
  },
  {
    id: 12,
    hash: "hyatt",
    name: "Hyatt Regency Baltimore Inner Harbor",
    address: "300 Light Street",
    phone: "410-528-1234",
    url:
      "https://www.hyatt.com/en-US/hotel/maryland/hyatt-regency-baltimore-inner-harbor/bwirb",
    urlSpecial: "https://www.hyatt.com/en-US/group-booking/BWIRB/G-BYCO",
    price: 165,
    distance: 0.19,
    walkTime: 0,
    coordinates: {
      lat: 39.285076,
      lng: -76.613833
    }
  },
  {
    id: 4,
    hash: "daysinn",
    name: "Days Inn by Wyndham Baltimore Inner Harbor",
    address: "100 Hopkins Place",
    phone: "410-576-1000",
    url:
      "https://www.wyndhamhotels.com/days-inn/baltimore-maryland/days-inn-baltimore-inner-harbor-hotel/overview",
    urlSpecial:
      "https://www.wyndhamhotels.com/en-uk/days-inn/baltimore-maryland/days-inn-baltimore-inner-harbor-hotel/rooms-rates?checkin_date=8/1/19&checkout_date=8/5/19&group_code=CG01BR",
    price: 139,
    distance: 0.25,
    walkTime: 0,
    coordinates: {
      lat: 39.287563,
      lng: -76.6177
    }
  },
  {
    id: 10,
    hash: "brookshire",
    name: "Brookshire Suites Inner Harbor",
    address: "120 E Lombard St",
    phone: "410-625-1300",
    url:
      "https://www.bestwestern.com/en_US/book/baltimore/hotel-rooms/brookshire-suites-inner-harbor-bw-premier-collection/propertyCode.21061.html",
    urlSpecial:
      "https://www.bestwestern.com/en_US/book/hotel-rooms.21061.html?groupId=6M4AA5T8",
    price: 169,
    distance: 0.36,
    walkTime: 0,
    coordinates: {
      lat: 39.287915,
      lng: -76.612404
    }
  },
  {
    id: 11,
    hash: "sonesta",
    name: "Royal Sonesta Harbor Court Baltimore",
    address: "550 Light St",
    phone: "410-234-0550",
    url:
      "https://www.sonesta.com/us/maryland/baltimore/royal-sonesta-harbor-court-baltimore",
    urlSpecial: "https://tinyurl.com/Bronycon2019",
    price: 139,
    distance: 0.4,
    walkTime: 0,
    coordinates: {
      lat: 39.282751,
      lng: -76.613539
    }
  },
  {
    id: 5,
    hash: "renaissance",
    name: "Renaissance Baltimore Harborplace Hotel",
    address: "202 E Pratt St",
    phone: "410-547-1200",
    url:
      "https://www.marriott.com/hotels/travel/bwish-renaissance-baltimore-harborplace-hotel/",
    urlSpecial:
      "https://book.passkey.com/gt/217257556?gtid=577d4818262a5bbcb590ac6aaadc517c",
    price: 135,
    distance: 0.4,
    walkTime: 0,
    coordinates: {
      lat: 39.286606,
      lng: -76.61204
    }
  },
  {
    id: 6,
    hash: "holidayinn",
    name: "Holiday Inn: Baltimore Inner Harbor",
    address: "301 W Lombard St",
    phone: "410-685-3500",
    url:
      "https://www.ihg.com/holidayinn/hotels/us/en/baltimore/baldt/hoteldetail",
    urlSpecial:
      "https://www.ihg.com/redirect?path=hd&brandCode=6C&localeCode=en&regionCode=1&hotelCode=BALDT&_PMID=99801505&GPC=ONY&viewfullsite=true",
    price: 129,
    distance: 0.41,
    walkTime: 0,
    coordinates: {
      lat: 39.286939,
      lng: -76.620314
    }
  },
  {
    id: 7,
    hash: "lordbaltimore",
    name: "Lord Baltimore Hotel",
    address: "20 W Baltimore St",
    phone: "410-539-8400",
    url: "https://www.lordbaltimorehotel.com/",
    urlSpecial: "https://reservations.travelclick.com/85390?groupID=1400840",
    price: 129,
    distance: 0.43,
    walkTime: 0,
    coordinates: {
      lat: 39.28952,
      lng: -76.61552
    }
  },
  {
    id: 8,
    hash: "monaco",
    name: "Kimpton Hotel Monaco Baltimore Inner Harbor",
    address: "2 N Charles St",
    phone: "443-692-6170",
    url: "https://www.monaco-baltimore.com/",
    urlSpecial:
      "https://www.ihg.com/kimptonhotels/hotels/us/en/find-hotels/hotel/rooms?qDest=2%20N.%20Charles%20Street,%20Baltimore,%20MD,%20US&qCiMy=72019&qCiD=1&qCoMy=72019&qCoD=4&qAdlt=1&qChld=0&qRms=1&qRtP=6CBARC&qIta=99801505&qGrpCd=X76&qSlH=BALMN&qAkamaiCC=US&qBrs=re.ic.in.vn.cp.vx.hi.ex.rs.cv.sb.cw.ma.ul.ki.va&qAAR=6CBARC&qWch=0&qSmP=1&setPMCookies=true&qRad=30&qRdU=mi&srb_u=1&icdv=99801505",
    price: 159,
    distance: 0.43,
    walkTime: 0,
    coordinates: {
      lat: 39.289562,
      lng: -76.61523
    }
  },
  {
    id: 9,
    hash: "marriottwaterfront",
    name: "Baltimore Marriott Waterfront",
    address: "700 Aliceanna St",
    phone: "410-385-3000",
    url:
      "https://www.marriott.com/hotels/travel/bwiwf-baltimore-marriott-waterfront/",
    urlSpecial: "https://book.passkey.com/e/49789037",
    price: 139,
    distance: 1.13,
    walkTime: 0,
    coordinates: {
      lat: 39.28307,
      lng: -76.60245
    }
  }
];

export default hotels;
