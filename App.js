import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./public/logo.jpg"
import "./index.css"

const resList = [
    {
        "type": "restaurant",
        "info": {
            "resId": 21489900,
            "name": "Incanto",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/0/21489900/769d715f82943a833cae6adaba1d4dbc_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/0/21489900/769d715f82943a833cae6adaba1d4dbc_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": false
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.5",
                "rating_text": "4.5",
                "rating_subtitle": "Excellent",
                "rating_color": "3F7E00",
                "votes": "164",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.5",
                        "reviewCount": "164",
                        "reviewTextSmall": "164 Reviews",
                        "subtext": "164 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.5",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "800"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹1,500 for two"
            },
            "cfo": {
                "text": "₹600 for one"
            },
            "locality": {
                "name": "Civil Lines, Agra",
                "address": "6th Floor, Ram Raghu Palazzo, Ramnagar Colony, Church Road, Civil Lines, Agra",
                "localityUrl": "agra/civil-lines-restaurants"
            },
            "timing": {
                "text": "Opens at 1pm",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/continental/",
                    "name": "Continental"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzNcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/mexican/",
                    "name": "Mexican"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc3XCJdfSJd",
                    "url": "https://www.zomato.com/agra/restaurants/sushi/",
                    "name": "Sushi"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹1,500 for two"
            }
        },
        "order": [],
        "gold": {
            "instant": 10,
            "welcome_offer": false,
            "gold_offer": false,
            "text": "Flat",
            "offerValue": "10% OFF",
            "isGoldIcon": false
        },
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/agra/incanto-civil-lines/info",
            "clickActionDeeplink": ""
        },
        "distance": "3.2 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f46fd266-2411-4419-ad97-e5bce18b2193\",\"location_type\":\"delivery_cell\",\"location_id\":\"4140058016516931584\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21489900\",\"element_type\":\"listing\",\"rank\":10}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20222729,
            "name": "Biryani By Kilo",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/9/20222729/f3caffbbce8999500d021f636a1db150_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/chains/9/20222729/f3caffbbce8999500d021f636a1db150_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/9/20222729/09e8a8c41bdca7aabd893e055417ff58_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.3",
                "rating_text": "4.3",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "7,759",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.5",
                        "reviewCount": "1,342",
                        "reviewTextSmall": "1,342 Reviews",
                        "subtext": "1,342 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.5",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "800"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.1",
                        "reviewCount": "6,417",
                        "reviewTextSmall": "6,417 Reviews",
                        "subtext": "6,417 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.1",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹1,000 for two"
            },
            "cfo": {
                "text": "₹400 for one"
            },
            "locality": {
                "name": "Civil Lines, Agra",
                "address": "2, Upper Ground Floor, Shanti Avenue, Swadeshi Bima Nagar, Mauza Sarjepur, Church Road, Civil Lines, Agra",
                "localityUrl": "agra/civil-lines-restaurants"
            },
            "timing": {
                "text": "Opens at 10am",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/agra/restaurants/biryani/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDlcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/hyderabadi/",
                    "name": "Hyderabadi"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
                    "url": "https://www.zomato.com/agra/restaurants/kebab/",
                    "name": "Kebab"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                    "url": "https://www.zomato.com/agra/restaurants/ice-cream/",
                    "name": "Ice Cream"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/agra/restaurants/desserts/",
                    "name": "Desserts"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹1,000 for two"
            }
        },
        "order": [],
        "gold": {
            "instant": 20,
            "welcome_offer": false,
            "gold_offer": false,
            "text": "Flat",
            "offerValue": "20% OFF",
            "isGoldIcon": false
        },
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/agra/biryani-by-kilo-civil-lines/info",
            "clickActionDeeplink": ""
        },
        "distance": "3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f46fd266-2411-4419-ad97-e5bce18b2193\",\"location_type\":\"delivery_cell\",\"location_id\":\"4140058016516931584\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20222729\",\"element_type\":\"listing\",\"rank\":11}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 3400114,
            "name": "The Restaurant - Trident Hotel",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/4/3400114/31401317839e1b708a446f5c12385e56_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/4/3400114/31401317839e1b708a446f5c12385e56_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/4/3400114/798c8f525327ac6d431b55f9083fef05_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.0",
                "rating_text": "4.0",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "74",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.0",
                        "reviewCount": "74",
                        "reviewTextSmall": "74 Reviews",
                        "subtext": "74 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.0",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹2,000 for two"
            },
            "cfo": {
                "text": "₹800 for one"
            },
            "locality": {
                "name": "Tajganj, Agra",
                "address": "Trident Hotel, Fatehabad Road, Tajganj, Agra",
                "localityUrl": "agra/tajganj-restaurants"
            },
            "timing": {
                "text": "Opens at 6am",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/continental/",
                    "name": "Continental"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹2,000 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/agra/the-restaurant-trident-hotel-tajganj/info",
            "clickActionDeeplink": ""
        },
        "distance": "4.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f46fd266-2411-4419-ad97-e5bce18b2193\",\"location_type\":\"delivery_cell\",\"location_id\":\"4140058016516931584\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"3400114\",\"element_type\":\"listing\",\"rank\":12}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 3400106,
            "name": "Bellevue - The Oberoi Amarvilas",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/6/3400106/264ba913cd4d11db0befd50424dfe47d_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/6/3400106/264ba913cd4d11db0befd50424dfe47d_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": false
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.1",
                "rating_text": "4.1",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "175",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.1",
                        "reviewCount": "175",
                        "reviewTextSmall": "175 Reviews",
                        "subtext": "175 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.1",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹4,500 for two"
            },
            "cfo": {
                "text": "₹1,800 for one"
            },
            "locality": {
                "name": "Tajganj, Agra",
                "address": "The Oberoi Amarvilas, Taj East Gate Road, Fatehabad Road, Tajganj, Agra",
                "localityUrl": "agra/tajganj-restaurants"
            },
            "timing": {
                "text": "Opens at 6:30am",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/continental/",
                    "name": "Continental"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/agra/restaurants/desserts/",
                    "name": "Desserts"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹4,500 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/agra/bellevue-the-oberoi-amarvilas-tajganj/info",
            "clickActionDeeplink": ""
        },
        "distance": "3.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f46fd266-2411-4419-ad97-e5bce18b2193\",\"location_type\":\"delivery_cell\",\"location_id\":\"4140058016516931584\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"3400106\",\"element_type\":\"listing\",\"rank\":13}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20931573,
            "name": "Modernplexx Bite",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/3/20931573/1283809479cf30dd1fa94a10702bc145_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/3/20931573/1283809479cf30dd1fa94a10702bc145_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/3/20931573/62253cde03a3e329e2880c654ee75c46_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.6",
                "rating_text": "3.6",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "22",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.9",
                        "reviewCount": "6",
                        "reviewTextSmall": "6 Reviews",
                        "subtext": "6 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.9",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.2",
                        "reviewCount": "16",
                        "reviewTextSmall": "16 Reviews",
                        "subtext": "16 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "yellow",
                            "tint": "400"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹400 for two"
            },
            "cfo": {
                "text": "₹200 for one"
            },
            "locality": {
                "name": "Tajganj, Agra",
                "address": "Sewla Jat, Gwalior Road, Tajganj, Agra",
                "localityUrl": "agra/tajganj-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/italian/",
                    "name": "Italian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/agra/restaurants/pasta/",
                    "name": "Pasta"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                    "url": "https://www.zomato.com/agra/restaurants/burger/",
                    "name": "Burger"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                    "url": "https://www.zomato.com/agra/restaurants/sandwich/",
                    "name": "Sandwich"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹400 for two"
            }
        },
        "order": [],
        "gold": {
            "instant": 10,
            "welcome_offer": false,
            "gold_offer": false,
            "text": "Flat",
            "offerValue": "10% OFF",
            "isGoldIcon": false
        },
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/agra/modernplexx-bite-tajganj/info",
            "clickActionDeeplink": ""
        },
        "distance": "5.7 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f46fd266-2411-4419-ad97-e5bce18b2193\",\"location_type\":\"delivery_cell\",\"location_id\":\"4140058016516931584\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20931573\",\"element_type\":\"listing\",\"rank\":14}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19633307,
            "name": "Palm Burj",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/7/19633307/c2ad3e8901e0c930f7c2eed4a6b0f622_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/7/19633307/c2ad3e8901e0c930f7c2eed4a6b0f622_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/7/19633307/bccff7bfb2458470d8200a7d4fda7911_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.4",
                "rating_text": "4.4",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "1,671",
                "subtext": "REVIEW",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.4",
                        "reviewCount": "1,012",
                        "reviewTextSmall": "1,012 Reviews",
                        "subtext": "1,012 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.4",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.3",
                        "reviewCount": "659",
                        "reviewTextSmall": "659 Reviews",
                        "subtext": "659 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.3",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹1,500 for two"
            },
            "cfo": {
                "text": "₹600 for one"
            },
            "locality": {
                "name": "Rakabganj, Agra",
                "address": "6 B, Mall Road, Rakabganj, Agra",
                "localityUrl": "agra/rakabganj-restaurants"
            },
            "timing": {
                "text": "Opens at 4pm",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/continental/",
                    "name": "Continental"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc3XCJdfSJd",
                    "url": "https://www.zomato.com/agra/restaurants/sushi/",
                    "name": "Sushi"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
                    "url": "https://www.zomato.com/agra/restaurants/sichuan/",
                    "name": "Sichuan"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/agra/restaurants/beverages/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/agra/restaurants/desserts/",
                    "name": "Desserts"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹1,500 for two"
            }
        },
        "order": [],
        "gold": {
            "instant": 10,
            "welcome_offer": false,
            "gold_offer": false,
            "text": "Flat",
            "offerValue": "10% OFF",
            "isGoldIcon": false
        },
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/agra/palm-burj-rakabganj/info",
            "clickActionDeeplink": ""
        },
        "distance": "1.9 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f46fd266-2411-4419-ad97-e5bce18b2193\",\"location_type\":\"delivery_cell\",\"location_id\":\"4140058016516931584\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19633307\",\"element_type\":\"listing\",\"rank\":15}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 21140293,
            "name": "LONDON COFFEE CLUB",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/3/21140293/4157d3c1b76cf11301d4c1e2049b4dfd_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/3/21140293/4157d3c1b76cf11301d4c1e2049b4dfd_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/3/21140293/a83213623428c7001d30996f6a58a715_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.5",
                "rating_text": "4.5",
                "rating_subtitle": "Excellent",
                "rating_color": "3F7E00",
                "votes": "447",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.9",
                        "reviewCount": "238",
                        "reviewTextSmall": "238 Reviews",
                        "subtext": "238 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.9",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "800"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.1",
                        "reviewCount": "209",
                        "reviewTextSmall": "209 Reviews",
                        "subtext": "209 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.1",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹1,500 for two"
            },
            "cfo": {
                "text": "₹600 for one"
            },
            "locality": {
                "name": "Tajganj, Agra",
                "address": "HIG 52, Tajnagri Phase 1, Tajganj, Agra",
                "localityUrl": "agra/tajganj-restaurants"
            },
            "timing": {
                "text": "Opens at 7:30am",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/cafes/",
                    "name": "Cafe"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/agra/restaurants/coffee/",
                    "name": "Coffee"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                    "url": "https://www.zomato.com/agra/restaurants/sandwich/",
                    "name": "Sandwich"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/italian/",
                    "name": "Italian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTM2XCJdfSJd",
                    "url": "https://www.zomato.com/agra/restaurants/latin-american/",
                    "name": "Latin American"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTQyXCJdfSJd",
                    "url": "https://www.zomato.com/agra/restaurants/turkish/",
                    "name": "Turkish"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/continental/",
                    "name": "Continental"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹1,500 for two"
            }
        },
        "order": [],
        "gold": {
            "instant": 10,
            "welcome_offer": false,
            "gold_offer": false,
            "text": "Flat",
            "offerValue": "10% OFF",
            "isGoldIcon": false
        },
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/agra/london-coffee-club-tajganj/info",
            "clickActionDeeplink": ""
        },
        "distance": "4.4 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f46fd266-2411-4419-ad97-e5bce18b2193\",\"location_type\":\"delivery_cell\",\"location_id\":\"4140058016516931584\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21140293\",\"element_type\":\"listing\",\"rank\":16}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 3400059,
            "name": "Peshawri - ITC Mughal",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/9/3400059/6af4eb4da99e01d72badc71afa16b6ee_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/9/3400059/6af4eb4da99e01d72badc71afa16b6ee_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/9/3400059/d44785d99ede725ac9749530c61178ea_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.6",
                "rating_text": "4.6",
                "rating_subtitle": "Excellent",
                "rating_color": "3F7E00",
                "votes": "405",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.6",
                        "reviewCount": "405",
                        "reviewTextSmall": "405 Reviews",
                        "subtext": "405 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.6",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "800"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹6,000 for two"
            },
            "cfo": {
                "text": "₹2,400 for one"
            },
            "locality": {
                "name": "Tajganj, Agra",
                "address": "ITC Mughal, Fatehabad Road, Tajganj, Agra",
                "localityUrl": "agra/tajganj-restaurants"
            },
            "timing": {
                "text": "Opens at 12:30pm",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/mughlai/",
                    "name": "Mughlai"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹6,000 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/agra/peshawri-itc-mughal-tajganj/info",
            "clickActionDeeplink": ""
        },
        "distance": "3.2 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f46fd266-2411-4419-ad97-e5bce18b2193\",\"location_type\":\"delivery_cell\",\"location_id\":\"4140058016516931584\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"3400059\",\"element_type\":\"listing\",\"rank\":17}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20551316,
            "name": "The Nawaabs",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/6/20551316/300a1ff77226e8ea9b9c3cc0e8eae6e1_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/6/20551316/300a1ff77226e8ea9b9c3cc0e8eae6e1_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/6/20551316/d1eff3cfecf98c528c757bb96a44efbd_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.4",
                "rating_text": "4.4",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "4,535",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.4",
                        "reviewCount": "788",
                        "reviewTextSmall": "788 Reviews",
                        "subtext": "788 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.4",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.3",
                        "reviewCount": "3,747",
                        "reviewTextSmall": "3,747 Reviews",
                        "subtext": "3,747 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.3",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹1,100 for two"
            },
            "cfo": {
                "text": "₹450 for one"
            },
            "locality": {
                "name": "Tajganj, Agra",
                "address": "Shop 18A, 7B/A, Ground Floor, Bansal Nagar, Fatehabad Road, Tajganj, Agra",
                "localityUrl": "agra/tajganj-restaurants"
            },
            "timing": {
                "text": "Opens at 12noon",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/mughlai/",
                    "name": "Mughlai"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/agra/restaurants/biryani/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
                    "url": "https://www.zomato.com/agra/restaurants/kebab/",
                    "name": "Kebab"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/agra/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹1,100 for two"
            }
        },
        "order": [],
        "gold": {
            "instant": 10,
            "welcome_offer": false,
            "gold_offer": false,
            "text": "Flat",
            "offerValue": "10% OFF",
            "isGoldIcon": false
        },
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/agra/the-nawaabs-tajganj/info",
            "clickActionDeeplink": ""
        },
        "distance": "2.7 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f46fd266-2411-4419-ad97-e5bce18b2193\",\"location_type\":\"delivery_cell\",\"location_id\":\"4140058016516931584\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20551316\",\"element_type\":\"listing\",\"rank\":18}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 3400868,
            "name": "Hichkee",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/8/3400868/131dd81abd4cdc25d8d6fc4d3899f1bd_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/8/3400868/131dd81abd4cdc25d8d6fc4d3899f1bd_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/8/3400868/3cb0126d400784a3f5a1f6791879a797_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "4,551",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.2",
                        "reviewCount": "1,042",
                        "reviewTextSmall": "1,042 Reviews",
                        "subtext": "1,042 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.2",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "3,509",
                        "reviewTextSmall": "3,509 Reviews",
                        "subtext": "3,509 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹1,700 for two"
            },
            "cfo": {
                "text": "₹700 for one"
            },
            "locality": {
                "name": "Civil Lines, Agra",
                "address": "6/27/1A, Hotel Alleviate, Yamuna Kinara Road, Belanganj, Civil Lines, Agra",
                "localityUrl": "agra/civil-lines-restaurants"
            },
            "timing": {
                "text": "Opens at 3pm",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/continental/",
                    "name": "Continental"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/chinese/",
                    "name": "Chinese"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹1,700 for two"
            }
        },
        "order": [],
        "gold": {
            "instant": 15,
            "welcome_offer": false,
            "gold_offer": false,
            "text": "Flat",
            "offerValue": "15% OFF",
            "isGoldIcon": false
        },
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/agra/hichkee-civil-lines/info",
            "clickActionDeeplink": ""
        },
        "distance": "1.2 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f46fd266-2411-4419-ad97-e5bce18b2193\",\"location_type\":\"delivery_cell\",\"location_id\":\"4140058016516931584\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"3400868\",\"element_type\":\"listing\",\"rank\":19}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20771269,
            "name": "Mansion- Tapas & CL Club",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/9/20771269/908426b8c4493cb56ad23414b11e6d84_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/9/20771269/908426b8c4493cb56ad23414b11e6d84_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": false
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.8",
                "rating_text": "3.8",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "50",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.8",
                        "reviewCount": "50",
                        "reviewTextSmall": "50 Reviews",
                        "subtext": "50 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.8",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹3,500 for two"
            },
            "cfo": {
                "text": "₹1,400 for one"
            },
            "locality": {
                "name": "Rakabganj, Agra",
                "address": "6 B, Mall Road, Rakabganj, Agra",
                "localityUrl": "agra/rakabganj-restaurants"
            },
            "timing": {
                "text": "Opens at 1pm",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/agra/restaurants/asian/",
                    "name": "Asian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/italian/",
                    "name": "Italian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc3XCJdfSJd",
                    "url": "https://www.zomato.com/agra/restaurants/sushi/",
                    "name": "Sushi"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/agra/restaurants/biryani/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/agra/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/agra/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹3,500 for two"
            }
        },
        "order": [],
        "gold": {
            "instant": 15,
            "welcome_offer": false,
            "gold_offer": false,
            "text": "Flat",
            "offerValue": "15% OFF",
            "isGoldIcon": false
        },
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/agra/mansion-tapas-cl-club-rakabganj/info",
            "clickActionDeeplink": ""
        },
        "distance": "1.8 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f46fd266-2411-4419-ad97-e5bce18b2193\",\"location_type\":\"delivery_cell\",\"location_id\":\"4140058016516931584\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20771269\",\"element_type\":\"listing\",\"rank\":20}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19527813,
            "name": "Karchi",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/3/19527813/9ecc8ad6dd0e609a6c05a3383bbe00eb_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/chains/3/19527813/9ecc8ad6dd0e609a6c05a3383bbe00eb_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/3/19527813/27073d230a6a19bd4c5667aa3e1338e8_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.3",
                "rating_text": "4.3",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "11.6K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.4",
                        "reviewCount": "69",
                        "reviewTextSmall": "69 Reviews",
                        "subtext": "69 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.4",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.1",
                        "reviewCount": "11.6K",
                        "reviewTextSmall": "11.6K Reviews",
                        "subtext": "11.6K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.1",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹600 for two"
            },
            "cfo": {
                "text": "₹250 for one"
            },
            "locality": {
                "name": "Kamla Nagar, Agra",
                "address": "C-1/1-12, Avas Vikas Complex, Kamla Nagar, Agra",
                "localityUrl": "agra/kamla-nagar-restaurants"
            },
            "timing": {
                "text": "Opens at 12noon",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/mughlai/",
                    "name": "Mughlai"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
                    "url": "https://www.zomato.com/agra/restaurants/kebab/",
                    "name": "Kebab"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/agra/restaurants/biryani/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1MVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/agra/restaurants/momos/",
                    "name": "Momos"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/agra/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwNVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/agra/restaurants/roast-chicken/",
                    "name": "Roast Chicken"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹600 for two"
            }
        },
        "order": [],
        "gold": {
            "instant": 10,
            "welcome_offer": false,
            "gold_offer": false,
            "text": "Flat",
            "offerValue": "10% OFF",
            "isGoldIcon": false
        },
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/agra/karchi-kamla-nagar/info",
            "clickActionDeeplink": ""
        },
        "distance": "3.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f46fd266-2411-4419-ad97-e5bce18b2193\",\"location_type\":\"delivery_cell\",\"location_id\":\"4140058016516931584\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19527813\",\"element_type\":\"listing\",\"rank\":21}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    }
]


const RestaurantCard = (props) => {
    const {data} = props
    console.log(data)
    return(
        <div className="res-card">
            <img
                className="res-card-img"
                src={data.info.image.url}
            />
            <h3>{data.info.name}</h3>
            <h4>{data.info.cuisine.map((e)=>e.name).join(", ")}</h4>
            <h4>{data.info.rating.aggregate_rating}</h4>
            <h4>{data.distance}</h4>
        </div>
    )
}

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo"
                    src="/public/logo-main-wtext.png"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>

                </ul>
            </div>
        </div>
    )
}

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* {resList.map((ind,data)=>(
                    <div key={ind}>
                        <RestaurantCard data = {data}/>
                    </div>
                    
                ))} */}
                {resList.map((data)=><div key={data.info.resId}><RestaurantCard data = {data}/></div>)}
                {/* <RestaurantCard  data = {resList[3]}/> */}
                
            </div>
        </div>
    )
}

const Footer = () => {
    return(
        <div>

        </div>
    )
}

const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
