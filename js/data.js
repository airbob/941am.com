var app = new Vue({


    el: '#app',
    data: {
        lists: [
        {
            'year': '2019',
            'events': [{
                'id': '20190320',
                'caption': {
                    'title': 'Apple AirPods (2nd Gen)',
                    'day': '20',
                    'month': 'Mar'
                },
                'detail': {
                    'head': {
                        'image': 'airpods_2.png',
                        'title': 'Apple AirPods (2nd Gen)'
                    }
                }
            }, 
            {
                'id': '20190319',
                'caption': {
                    'title': 'iMac with Retina 5K display (27") (Early 2019)',
                    'day': '19',
                    'month': 'Mar',
                },
                'detail': {
                    'head': {
                        'image': 'imac_5k_early_2019.jpg',
                        'title': 'iMac with Retina 5K display (27") (Early 2019)'
                    }
                }
            },
            {
                'id': '20190318',
                'caption': {
                    'title': 'iPad Air, iPad Mini (2019)',
                    'day': '18',
                    'month': 'Mar',
                },
                'detail': {
                    'head': {
                        'image': 'ipad_air_2019.jpg',
                        'title': 'iPad Air (2019)'
                    },
                    'rest': [{
                        'image': 'ipad_mini_2019.jpg',
                        'title': 'iPad Mini (2019)'
                    }]
                }
            },
            ]
        }, //end of 2019
        {
            'year': '2018',
            'events': [{
                'id': '20181107',
                'caption': {
                    'title': 'iPad Pro (3rd Gen)',
                    'day': '07',
                    'month': 'Nov'
                },
                'detail': {
                    'head': {
                        'image': 'ipad_pro_3.png',
                        'title': 'iPad Pro (3rd Gen)'
                    },
                    'rest': [{
                        'image': 'macbook_air_2018.jpg',
                        'title': 'MacBook Air (13") (2018)'
                    },{
                        'image': 'macmini_late_2018.jpg',
                        'title': 'Mac Mini (Late 2018)'
                    }]
                }
            }, 
            {
                'id': '20181030',
                'caption': {
                    'title': 'Apple Pencil (2nd Gen)',
                    'day': '30',
                    'month': 'Oct',
                },
                'detail': {
                    'head': {
                        'image': 'apple_pencil_2.jpg',
                        'title': 'Apple Pencil (2nd Gen)'
                    }
                }
            },
            {
                'id': '20181026',
                'caption': {
                    'title': 'iPhone XR',
                    'day': '26',
                    'month': 'Oct',
                },
                'detail': {
                    'head': {
                        'image': 'iphone_xr.png',
                        'title': 'iPhone XR'
                    }
                }
            },
            {
                'id': '20180921',
                'caption': {
                    'title': 'iPhone XS',
                    'day': '21',
                    'month': 'Sep',
                },
                'detail': {
                    'head': {
                        'image': 'iphone_xs.png',
                        'title': 'iPhone XS'
                    },
                    'rest': [{
                        'image': 'iphone_xs_max.jpg',
                        'title': 'iPhone XS Max'
                    }, {
                        'image': 'apple_watch_4.png',
                        'title': 'Apple Watch Series 4'
                    }]
                }
            },
            {
                'id': '20180712',
                'caption': {
                    'title': 'MacBook Pro with Touch Bar (4th gen)',
                    'day': '12',
                    'month': 'Jul',
                },
                'detail': {
                    'head': {
                        'image': 'macbook_pro_touchbar_mid_2018.jpg',
                        'title': 'MacBook Pro with Touch Bar (4th gen)'
                    }
                }
            },
            {
                'id': '20180604',
                'caption': {
                    'title': 'WWDC 2018',
                    'day': '04',
                    'month': 'Jun',
                },
                'detail': {
                    'head': {
                        'image': 'wwdc_2018.jpg',
                        'title': 'WWDC 2018'
                    }
                }
            },
            {
                'id': '20180327',
                'caption': {
                    'title': 'iPad (2018)',
                    'day': '27',
                    'month': 'Mar',
                },
                'detail': {
                    'head': {
                        'image': 'ipad_2018.png',
                        'title': 'iPad (2018)'
                    }
                }
            },
            {
                'id': '20180209',
                'caption': {
                    'title': 'Home Pod',
                    'day': '09',
                    'month': 'Feb',
                },
                'detail': {
                    'head': {
                        'image': 'homepod.jpg',
                        'title': 'Home Pod'
                    }
                }
            },
            ]
        }, //end of 2018
        {
            'year': '2017',
            'events': [{
                'id': '20171214',
                'caption': {
                    'title': 'iMac Pro (27") (Late 2017)',
                    'day': '14',
                    'month': 'Dec'
                },
                'detail': {
                    'head': {
                        'image': 'imac_pro_late_2017.jpg',
                        'title': 'iMac Pro (27") (Late 2017)'
                    }
                }
            }, 
            {
                'id': '20171103',
                'caption': {
                    'title': 'iPhone X',
                    'day': '03',
                    'month': 'Nov',
                },
                'detail': {
                    'head': {
                        'image': 'iphonex.jpg',
                        'title': 'iPhone X'
                    }
                }
            },
            {
                'id': '20170922',
                'caption': {
                    'title': 'iPhone 8',
                    'day': '22',
                    'month': 'Sep',
                },
                'detail': {
                    'head': {
                        'image': 'iphone8.jpg',
                        'title': 'iPhone 8'
                    },
                    'rest': [{
                        'image': 'iphone8_plus.png',
                        'title': 'iPhone 8 Plus'
                    }, {
                        'image': 'apple_watch_3.jpg',
                        'title': 'Apple Watch Series 3'
                    }, {
                        'image': 'apple_tv_5.png',
                        'title': 'Apple TV 4K (5th generation)'
                    }]
                }
            },
            {
                'id': '20170605',
                'caption': {
                    'title': 'WWDC 2017',
                    'day': '05',
                    'month': 'Jun',
                },
                'detail': {
                    'head': {
                        'image': 'wwdc_2017.jpg',
                        'title': 'WWDC 2017'
                    },
                    'rest': [{
                        'image': 'ipad_pro_2.png',
                        'title': 'iPad Pro (12.9") (2nd Gen)'
                    }]
                }
            },
            {
                'id': '20170324',
                'caption': {
                    'title': 'iPad (2017)',
                    'day': '24',
                    'month': 'Mar',
                },
                'detail': {
                    'head': {
                        'image': 'ipad_2017.jpg',
                        'title': 'iPad (2017)'
                    }
                }
            },
            {
                'id': '20170321',
                'caption': {
                    'title': 'iPhone SE',
                    'day': '21',
                    'month': 'Mar',
                },
                'detail': {
                    'head': {
                        'image': 'iphone_se.png',
                        'title': 'iPhone SE'
                    }
                }
            }
            ]
        }, //end of 2017
        {
            'year': '2016',
            'events': [{
                'id': '20161219',
                'caption': {
                    'title': 'Apple AirPods',
                    'day': '19',
                    'month': 'Dec'
                },
                'detail': {
                    'head': {
                        'image': 'airpods.jpg',
                        'title': 'Apple AirPods'
                    }
                }
            }, 
            {
                'id': '20161028',
                'caption': {
                    'title': 'Apple Watch Nike+ Series 2',
                    'day': '28',
                    'month': 'Oct',
                },
                'detail': {
                    'head': {
                        'image': 'apple_watch_nike_2.jpg',
                        'title': 'Apple Watch Nike+ Series 2'
                    }
                }
            },
            {
                'id': '20161027',
                'caption': {
                    'title': 'MacBook Pro (4th gen)',
                    'day': '20',
                    'month': 'Oct',
                },
                'detail': {
                    'head': {
                        'image': 'macbook_pro_4.jpg',
                        'title': 'MacBook Pro (4th gen)'
                    }
                }
            },
            {
                'id': '20160916',
                'caption': {
                    'title': 'iPhone 7',
                    'day': '16',
                    'month': 'Sep',
                },
                'detail': {
                    'head': {
                        'image': 'iphone7_1.png',
                        'title': 'iPhone 7'
                    },
                    'rest': [{
                        'image': 'iphone7_2.jpg',
                        'title': 'iPhone 7'
                    }]
                }
            },
            {
                'id': '20160907',
                'caption': {
                    'title': 'iPad Air 2',
                    'day': '07',
                    'month': 'Sep',
                },
                'detail': {
                    'head': {
                        'image': 'ipad_air_2.png',
                        'title': 'iPad Air 2'
                    }
                }
            },
            {
                'id': '20160419',
                'caption': {
                    'title': 'MacBook (Early 2016)',
                    'day': '19',
                    'month': 'Apr',
                },
                'detail': {
                    'head': {
                        'image': 'macbook_2016.jpg',
                        'title': 'MacBook (Early 2016)'
                    }
                }
            },
            {
                'id': '20160331',
                'caption': {
                    'title': 'iPad Pro (9.7")',
                    'day': '31',
                    'month': 'Mar',
                },
                'detail': {
                    'head': {
                        'image': 'ipad_pro_97.jpg',
                        'title': 'iPad Pro (9.7")'
                    }
                }
            }
            ]
        }, //end of 2016
        {
            'year': '2015',
            'events': [{
                'id': '20151111',
                'caption': {
                    'title': 'Apple Pencil',
                    'day': '11',
                    'month': 'Nov'
                },
                'detail': {
                    'head': {
                        'image': 'apple_pencil.jpg',
                        'title': 'Apple Pencil'
                    },
                    'rest': [{
                        'image': 'ipad_pro_129.png',
                        'title': 'iPad Pro (12.9")'
                    }]
                }
            }, 
            {
                'id': '20151026',
                'caption': {
                    'title': 'Apple TV (4th generation)',
                    'day': '26',
                    'month': 'Oct',
                },
                'detail': {
                    'head': {
                        'image': 'apple_tv_4.jpg',
                        'title': 'Apple TV (4th generation)'
                    }
                }
            },
            {
                'id': '20151013',
                'caption': {
                    'title': 'Magic Mouse 2',
                    'day': '13',
                    'month': 'Oct',
                },
                'detail': {
                    'head': {
                        'image': 'magic_mouse_2.jpg',
                        'title': 'Magic Mouse 2'
                    },
                    'rest': [{
                        'image': 'magic_trackpad_2.jpg',
                        'title': 'Magic Trackpad 2'
                    }]
                }
            },
            {
                'id': '20150925',
                'caption': {
                    'title': 'iPhone 6S',
                    'day': '25',
                    'month': 'Sep',
                },
                'detail': {
                    'head': {
                        'image': 'iphone_6s.jpg',
                        'title': 'iPhone 6S'
                    },
                    'rest': [{
                        'image': 'iphone_6s_plus.jpg',
                        'title': 'iPhone 6S Plus'
                    }]
                }
            },
            {
                'id': '20150909',
                'caption': {
                    'title': 'iPad Mini 4',
                    'day': '09',
                    'month': 'Sep',
                },
                'detail': {
                    'head': {
                        'image': 'ipad_mini_4.jpg',
                        'title': 'iPad Mini 4 '
                    }
                }
            },
            {
                'id': '20150715',
                'caption': {
                    'title': 'iPod Touch (6th gen)',
                    'day': '15',
                    'month': 'Jul',
                },
                'detail': {
                    'head': {
                        'image': 'ipod_touch_6.jpg',
                        'title': 'iPod Touch (6th gen)'
                    }
                }
            },
            {
                'id': '20150424',
                'caption': {
                    'title': 'Apple Watch',
                    'day': '24',
                    'month': 'Apr',
                },
                'detail': {
                    'head': {
                        'image': 'apple_watch_1.jpg',
                        'title': 'Apple Watch'
                    }
                }
            },
            {
                'id': '20150309',
                'caption': {
                    'title': 'MacBook Air (Early 2015)',
                    'day': '24',
                    'month': 'Apr',
                },
                'detail': {
                    'head': {
                        'image': 'mac_book_air_2015.jpg',
                        'title': 'MacBook Air (Early 2015)'
                    }
                }
            }
            ]
        }, //end of 2015
        {
            'year': '2014',
            'events': [
            {
                'id': '20141022',
                'caption': {
                    'title': 'iPad Air 2',
                    'day': '22',
                    'month': 'Oct'
                },
                'detail': {
                    'head': {
                        'image': 'ipad_air_2.jpg',
                        'title': 'iPad Air 2'
                    }
                }
            },
            {
                'id': '20140919',
                'caption': {
                    'title': 'iPhone 6',
                    'day': '19',
                    'month': 'Sep'
                },
                'detail': {
                    'head': {
                        'image': 'iphone6.png',
                        'title': 'iPhone 6'
                    },
                    'rest': [{
                        'image': 'iphone_6_plus.jpg',
                        'title': 'iPhone 6 Plus'
                    }]
                }
            },
            {
                'id': '20140602',
                'caption': {
                    'title': 'WWDC 2014',
                    'day': '02',
                    'month': 'Jun',
                    'isVideo': true,
                    'link': 'http://www.youtube.com/watch?v=w87fOAG8fjk'
                },
                'detail': {
                    'head': {
                        'image': 'wwdc2014.jpg',
                        'title': 'WWDC 2014'
                    },
                    'rest': [{
                        'image': 'wwdc2014_yosemite.jpg',
                        'title': 'OS X Yosemite'
                    }, {
                        'image': 'wwdc2014_ios8.jpg',
                        'title': 'iOS 8'
                    }, {
                        'image': 'wwdc2014_swift.jpg',
                        'title': 'Swift Language'
                    }]
                }
            },
            {
                'id': '20140429',
                'caption': {
                    'title': 'MacBook Air (Mid 2014)',
                    'day': '29',
                    'month': 'Apr',
                },
                'detail': {
                    'head': {
                        'image': 'mba-2014mid.jpg',
                        'title': 'MacBook Air (Mid 2014)'
                    }
                }
            }]
        }, //end of 2014
        {
            'year': '2013',
            'events': [
            {
                'id': '20131219',
                'caption': {
                    'title': 'Mac Pro (Late 2013)',
                    'day': '19',
                    'month': 'Dec',
                    'isVideo': true,
                    'link': 'http://www.youtube.com/watch?v=IbWOQWw1wkM'
                },
                'detail': {
                    'head': {
                        'image': 'macpro_main.jpg',
                        'title': 'Mac pro (late 2013)'
                    },
                    'rest': [{
                        'image': 'macpro_1.jpg',
                        'title': 'The new power structure'
                    }, {
                        'image': 'macpro_2.jpg',
                        'title': 'Processor: up to 2X faster'
                    }, {
                        'image': 'macpro_3.jpg',
                        'title': 'Memory bandwidth: 60GB/s'
                    }, {
                        'image': 'macpro_4.jpg',
                        'title': 'Graphics: up to 7 teraflops'
                    }, {
                        'image': 'macpro_5.jpg',
                        'title': 'PCIe flash storage 1200MB/s'
                    }, {
                        'image': 'macpro_6.jpg',
                        'title': 'A unified thermal core'
                    }, {
                        'image': 'macpro_7.jpg',
                        'title': 'A single breakthrough fan'
                    }]
                }}, 
                {
                'id': '20131112',
                'caption': {
                    'title': 'iPad Mini(Retina)',
                    'day': '12',
                    'month': 'Nov',
                    'isVideo': true,
                    'link': 'http://www.youtube.com/watch?v=d54q4ORm--w'
                },
                'detail': {
                    'head': {
                        'image': 'ipadmini2_main.jpg',
                        'title': 'iPad Mini(Retina)'
                    },
                    'rest': [{
                        'image': 'ipadmini2_1.jpg',
                        'title': 'Small Wonder'
                    }, {
                        'image': 'ipadmini2_2.jpg',
                        'title': '7.9inch Retina display'
                    }, {
                        'image': 'ipadmini2_3.jpg',
                        'title': 'A7 Chip'
                    }, {
                        'image': 'ipadmini2_4.jpg',
                        'title': 'powerful apps'
                    }, {
                        'image': 'ipadmini2_5.jpg',
                        'title': 'Advanced wireless'
                    }, {
                        'image': 'ipadmini2_6.jpg',
                        'title': 'iPad Mini and iOS7'
                    }]
                }}, 
                {
                'id': '20131101',
                'caption': {
                    'title': 'iPad Air',
                    'day': '01',
                    'month': 'Nov',
                    'isVideo': true,
                    'link': 'http://www.youtube.com/watch?v=o9gLqh8tmPA'
                },
                'detail': {
                    'head': {
                        'image': 'ipadair_main.jpg',
                        'title': 'iPad Air'
                    },
                    'rest': [{
                        'image': 'ipadair_1.jpg',
                        'title': 'the power of lightness'
                    }, {
                        'image': 'ipadair_2.jpg',
                        'title': 'All New Design'
                    }, {
                        'image': 'ipadair_3.jpg',
                        'title': 'A7 Chip'
                    }, {
                        'image': 'ipadair_4.jpg',
                        'title': 'Advanced wireless'
                    }, {
                        'image': 'ipadair_5.jpg',
                        'title': 'powerful apps'
                    }, {
                        'image': 'ipadair_6.jpg',
                        'title': 'iPad Air and iOS7'
                    }]
                }}, 
                {
                'id': '20131022',
                'caption': {
                    'title': 'Apple Special Event',
                    'day': '22',
                    'month': 'Oct',
                    'isVideo': true,
                    'link': 'http://www.youtube.com/watch?v=4FunXnJQxYU'
                },
                'detail': {
                    'head': {
                        'image': 'osx_main.jpg',
                        'title': 'OSX Mavericks'
                    },
                    'rest': [{
                        'image': 'osx_1.jpg',
                        'title': 'The world\'s most advanced desktop operation system: Free'
                    }, {
                        'image': 'osx_2.jpg',
                        'title': 'OSX'
                    }]
                }}, 
                {
                'id': '20130920',
                'caption': {
                    'title': 'iPhone 5S & iPhone5C',
                    'day': '20',
                    'month': 'Sep',
                    'isVideo': true,
                    'link': 'http://www.youtube.com/watch?v=TJkmc8-eyvE'
                },
                'detail': {
                    'head': {
                        'image': 'iPhone5s_main.jpg',
                        'title': 'iPhone5s & iPhone5C'
                    },
                    'rest': [{
                        'image': 'iphone5s_1.jpg',
                        'title': 'iPhone5s & iPhone5C'
                    }, {
                        'image': 'iphone5s_2.jpg',
                        'title': 'iPhone5s & iPhone5C'
                    },{
                        'image': 'iphone5s_3.jpg',
                        'title': 'the most advanced technology'
                    }, {
                        'image': 'iphone5s_4.jpg',
                        'title': 'iOS7'
                    },{
                        'image': 'iphone5s_5.jpg',
                        'title': 'iPhone5S case'
                    }, {
                        'image': 'iphone5c_1.jpg',
                        'title': 'Colorful'
                    }, {
                        'image': 'iphone5c_2.jpg',
                        'title': 'Colorful'
                    }, {
                        'image': 'iphone5c_3.jpg',
                        'title': 'brightest specification'
                    }, {
                        'image': 'iphone5c_4.jpg',
                        'title': 'iOS7'
                    }, {
                        'image': 'iphone5c_5.jpg',
                        'title': 'iOS7'
                    }]
                }},
                {'id': '20130918',
                'caption': {
                    'title': 'iOS 7',
                    'day': '18',
                    'month': 'Sep',
                    'isVideo': true,
                    'link': 'http://www.youtube.com/watch?v=F0ErUMeT7uE'
                },
                'detail': {
                    'head': {
                        'image': 'ios7_main.jpg',
                        'title': 'iOS7'
                    },
                    'rest': [{
                        'image': 'ios7_1.jpg',
                        'title': 'it creates a sense of dimension'
                    }, {
                        'image': 'ios7_2.jpg',
                        'title': 'phone'
                    },{
                        'image': 'ios7_3.jpg',
                        'title': 'mail'
                    }, {
                        'image': 'ios7_4.jpg',
                        'title': 'safari'
                    },{
                        'image': 'ios7_5.jpg',
                        'title': 'music'
                    }, {
                        'image': 'ios7_6.jpg',
                        'title': 'messages'
                    }, {
                        'image': 'ios7_7.jpg',
                        'title': 'calendar'
                    }, {
                        'image': 'ios7_8.jpg',
                        'title': 'photos'
                    }, {
                        'image': 'ios7_9.jpg',
                        'title': 'camera'
                    }, {
                        'image': 'ios7_10.jpg',
                        'title': 'weather'
                    }, {
                        'image': 'ios7_11.jpg',
                        'title': 'clock'
                    }, {
                        'image': 'ios7_12.jpg',
                        'title': 'maps'
                    }, {
                        'image': 'ios7_13.jpg',
                        'title': 'videos'
                    }, {
                        'image': 'ios7_14.jpg',
                        'title': 'reminders'
                    }, {
                        'image': 'ios7_15.jpg',
                        'title': 'game center'
                    }, {
                        'image': 'ios7_16.jpg',
                        'title': 'notes'
                    }, {
                        'image': 'ios7_17.jpg',
                        'title': 'news stand'
                    }, {
                        'image': 'ios7_18.jpg',
                        'title': 'itunes store'
                    }, {
                        'image': 'ios7_19.jpg',
                        'title': 'stocks'
                    }, {
                        'image': 'ios7_20.jpg',
                        'title': 'app store'
                    }, {
                        'image': 'ios7_21.jpg',
                        'title': 'pass book'
                    }, {
                        'image': 'ios7_22.jpg',
                        'title': 'compass'
                    }, {
                        'image': 'ios7_23.jpg',
                        'title': 'contacts'
                    }, {
                        'image': 'ios7_24.jpg',
                        'title': 'calculator'
                    }, {
                        'image': 'ios7_25.jpg',
                        'title': 'facetime'
                    }]
                }},
                {
                'id': '20130610',
                'caption': {
                    'title': 'WWDC 2013',
                    'day': '10',
                    'month': 'Jun',
                    'isVideo': true,
                    'link': 'http://www.youtube.com/watch?v=Wxe_0-rttIw'
                },
                'detail': {
                    'head': {
                        'image': 'wwdc2013_main.jpg',
                        'title': 'WWDC 2013'
                    },
                    'rest': [{
                        'image': 'wwdc2013_1.jpg',
                        'title': 'OSX Mavericks'
                    }, {
                        'image': 'wwdc2013_2.jpg',
                        'title': 'Safari now sports a sidebar bookmark, which actually lets you go through your Reading List as you read.'
                    }, {
                        'image': 'wwdc2013_3.jpg',
                        'title': 'Your Finder is going the way of Tabs'
                    }, {
                        'image': 'wwdc2013_4.jpg',
                        'title': 'Users can assign multiple tags to the same document, making all their files easy to search and retrieve.'
                    }, {
                        'image': 'wwdc2013_5.jpg',
                        'title': 'Multiple Display'
                    }, {
                        'image': 'wwdc2013_6.jpg',
                        'title': 'Password Management With KeyChain'
                    }, {
                        'image': 'wwdc2013_7.jpg',
                        'title': 'Respond Via Notifications'
                    }, {
                        'image': 'wwdc2013_8.jpg',
                        'title': 'Smarter Calendar'
                    }, {
                        'image': 'wwdc2013_9.jpg',
                        'title': 'Smoother Maps'
                    }, {
                        'image': 'wwdc2013_10.jpg',
                        'title': 'IBooks On Your Mac'
                    }, {
                        'image': 'wwdc2013_11.jpg',
                        'title': 'IOS 7'
                    }]
                }}, 
                {
                'id': '20130530',
                'caption': {
                    'title': 'iPod Touch (5th gen)',
                    'day': '30',
                    'month': 'May',
                    'isVideo': true,
                    'link': 'http://www.youtube.com/watch?v=e_41b4pM9AI'
                },
                'detail': {
                    'head': {
                        'image': 'ipodtouch5h_main.jpg',
                        'title': 'iPod Touch (5th gen)'
                    }
                }},
                {
                'id': '20130213',
                'caption': {
                    'title': 'Mac Book Pro (early 2013)',
                    'day': '13',
                    'month': 'Feb'
                },
                'detail': {
                    'head': {
                        'image': 'mbp_e2013_main.jpg',
                        'title': 'Mac Book Pro (early 2013)'
                    }
                }}, 
                ]
        }, //end of 2013
        {
            'year': '2012',
            'events': [{
                'id': '20121130',
                'caption': {
                    'title': 'iMac (late 2013)',
                    'day': '30',
                    'month': 'Nov',
                    'isVideo': true,
                    'link': 'http://www.youtube.com/watch?v=w87fOAG8fjk'
                },
                'detail': {
                    'head': {
                        'image': 'imaclate2012_main.jpg',
                        'title': 'iMac (late 2013)'
                    },
                    'rest': [{
                        'image': 'imaclate2012_1.jpg',
                        'title': 'iMac (late 2013)'
                    }, {
                        'image': 'imaclate2012_2.jpg',
                        'title': 'iMac (late 2013)'
                    }]
                }
            }, {
                'id': '20121102',
                'caption': {
                    'title': 'iPad Mini (Wi-Fi)',
                    'day': '02',
                    'month': 'Nov',
                },
                'detail': {
                    'head': {
                        'image': 'ipadmini_main.jpg',
                        'title': 'iPad Mini (Wi-Fi)'
                    },
                    'rest': [{
                        'image': 'apple_inano7.jpg',
                        'title': 'Nano'
                    }]
                }
            }, 
            {
                'id': '20121023',
                'caption': {
                    'title': 'Mac Mini (Late 2012)',
                    'day': '23',
                    'month': 'Oct',
                },
                'detail': {
                    'head': {
                        'image': 'apple_mml2012_main.jpg',
                        'title': 'Mac Mini (Late 2012)'
                    },
                    'rest': [{
                        'image': 'apple_inano7.jpg',
                        'title': 'Nano'
                    }]
                }
            },
            {
                'id': '20121011',
                'caption': {
                    'title': 'iPod Touch (5th gen)',
                    'day': '11',
                    'month': 'Oct',
                },
                'detail': {
                    'head': {
                        'image': 'apple_it6th_main.jpg',
                        'title': 'iPod Touch (5th gen)'
                    }
                }
            },
            {
                'id': '20120921',
                'caption': {
                    'title': 'iPhone 5',
                    'day': '21',
                    'month': 'Sep',
                },
                'detail': {
                    'head': {
                        'image': 'apple_iphone5_main.jpg',
                        'title': 'iPhone 5'
                    },
                    'rest': [{
                        'image': 'apple_airport_graphite.jpg',
                        'title': 'Airport Graphite'
                    }]
                }
            },
            {
                'id': '20120919',
                'caption': {
                    'title': 'iOS 6',
                    'day': '21',
                    'month': 'Sep',
                    'isVideo': true,
                    'link': 'http://www.youtube.com/watch?v=cC1TIis-cmI'
                },
                'detail': {
                    'head': {
                        'image': 'apple_ios6_main.jpg',
                        'title': 'iOS 6'
                    }
                }
            },
            {
                'id': '20120912',
                'caption': {
                    'title': 'Apple EarPods',
                    'day': '12',
                    'month': 'Sep',
                    'isVideo': true,
                    'link': 'http://www.youtube.com/watch?v=8Rme3uZ_abc'
                },
                'detail': {
                    'head': {
                        'image': 'apple_ep_main.jpg',
                        'title': 'Apple EarPods'
                    }
                }
            },
            {
                'id': '20120611',
                'caption': {
                    'title': 'WWDC 2012',
                    'day': '11',
                    'month': 'Jun',
                    'isVideo': true,
                    'link': 'http://www.youtube.com/watch?v=LlkCXg38VvY'
                },
                'detail': {
                    'head': {
                        'image': 'apple_macml_main.jpg',
                        'title': 'Mac Mini'
                    },
                    'rest': [{
                        'image': 'apple_airport_graphite.jpg',
                        'title': 'Airport Graphite'
                    }]
                }
            },
            {
                'id': '20120317',
                'caption': {
                    'title': 'iPad (3rd gen)',
                    'day': '17',
                    'month': 'Mar',
                    'isVideo': true,
                    'link': 'http://www.youtube.com/watch?v=5GvTdsY-HpQ'
                },
                'detail': {
                    'head': {
                        'image': 'apple_ipad3_main.jpg',
                        'title': 'iPad (3rd gen)'
                    }
                }
            },
            ]
        }, //end of 2012
        {
            'year': '2011',
            'events': [{
                'id': '20111024',
                'caption': {
                    'title': 'MacBook Pro (Late 2011)',
                    'day': '24',
                    'month': 'Oct'
                },
                'detail': {
                    'head': {
                        'image': 'apple_mbpl2011_main.jpg',
                        'title': 'MacBook Pro (Late 2011)'
                    }
                }
            }, {
                'id': '20111014',
                'caption': {
                    'title': 'iPhone 4S',
                    'day': '14',
                    'month': 'Oct',
                },
                'detail': {
                    'head': {
                        'image': 'apple_iphone4s_main.jpg',
                        'title': 'iPhone 4S'
                    }
                }
            }, 
            {
                'id': '20111012',
                'caption': {
                    'title': 'iOS 5',
                    'day': '12',
                    'month': 'Oct',
                },
                'detail': {
                    'head': {
                        'image': 'apple_ios5_main.jpg',
                        'title': 'iOS 5'
                    }
                }
            },
            {
                'id': '20110720',
                'caption': {
                    'title': 'Mac OSX Lion',
                    'day': '20',
                    'month': 'Jul',
                },
                'detail': {
                    'head': {
                        'image': 'apple_maclion_main.jpg',
                        'title': 'Mac OSX Lion'
                    }
                }
            },
            {
                'id': '20110606',
                'caption': {
                    'title': 'WWDC 2011',
                    'day': '06',
                    'month': 'Jun',
                    'isVideo': true,
                    'link': 'http://www.youtube.com/watch?v=LPMjUtfQPks'
                },
                'detail': {
                    'head': {
                        'image': 'apple_wwdc2011_main.jpg',
                        'title': 'WWDC 2011'
                    }
                }
            },
            {
                'id': '20110503',
                'caption': {
                    'title': 'iMac (Mid 2011)',
                    'day': '03',
                    'month': 'May'
                },
                'detail': {
                    'head': {
                        'image': 'apple_imacmid2011_main.jpg',
                        'title': 'iMac (Mid 2011)'
                    }
                }
            },
            {
                'id': '20110311',
                'caption': {
                    'title': 'iPad 2',
                    'day': '11',
                    'month': 'Mar'
                },
                'detail': {
                    'head': {
                        'image': 'apple_ipad2_main.jpg',
                        'title': 'iPad 2'
                    }
                }
            },
            {
                'id': '20110224',
                'caption': {
                    'title': 'MacBook Pro (Early 2011)',
                    'day': '24',
                    'month': 'Feb'
                },
                'detail': {
                    'head': {
                        'image': 'apple_mbpe2011_main.jpg',
                        'title': 'MacBook Pro (Early 2011)'
                    }
                }
            },
            {
                'id': '20110210',
                'caption': {
                    'title': 'iPhone 4 (CDMA) (16 & 32 GB)',
                    'day': '10',
                    'month': 'Feb'
                },
                'detail': {
                    'head': {
                        'image': 'apple_iphone4cdma_main.jpg',
                        'title': 'iPhone 4 (CDMA) (16 & 32 GB)'
                    }
                }
            },
            ]
        }, //end of 2011
        {
            'year': '2010',
            'events': [{
                'id': '20101020',
                'caption': {
                    'title': 'MacBook Air (Late 2010)',
                    'day': '20',
                    'month': 'Oct'
                },
                'detail': {
                    'head': {
                        'image': 'apple_mba2010_main.jpg',
                        'title': 'MacBook Air (Late 2010)'
                    }
                }
            }, {
                'id': '20100901',
                'caption': {
                    'title': 'iPod Touch (4th gen)',
                    'day': '01',
                    'month': 'Sep',
                },
                'detail': {
                    'head': {
                        'image': 'apple_it4th_main.jpg',
                        'title': 'iPod Touch (4th gen)'
                    }
                }
            }, 
            {
                'id': '20100809',
                'caption': {
                    'title': 'Mac Pro (Mid 2010)',
                    'day': '09',
                    'month': 'Aug',
                },
                'detail': {
                    'head': {
                        'image': 'apple_mp2010_main.jpg',
                        'title': 'Mac Pro (Mid 2010)'
                    }
                }
            },
            {
                'id': '20100727',
                'caption': {
                    'title': 'Magic Trackpad',
                    'day': '27',
                    'month': 'Jul',
                },
                'detail': {
                    'head': {
                        'image': 'apple_mt_main.jpg',
                        'title': 'Magic Trackpad'
                    }
                }
            },
            {
                'id': '20100624',
                'caption': {
                    'title': 'iPhone 4',
                    'day': '24',
                    'month': 'Jun'
                },
                'detail': {
                    'head': {
                        'image': 'apple_iphone4_main.jpg',
                        'title': 'iPhone 4'
                    }
                }
            },
            {
                'id': '20100615',
                'caption': {
                    'title': 'Mac Mini (Mid 2010)',
                    'day': '15',
                    'month': 'Jun'
                },
                'detail': {
                    'head': {
                        'image': 'apple_macmini2010_main.jpg',
                        'title': 'Mac Mini (Mid 2010)'
                    }
                }
            },
            {
                'id': '20100607',
                'caption': {
                    'title': 'WWDC 2010',
                    'day': '07',
                    'month': 'Jun'
                },
                'detail': {
                    'head': {
                        'image': 'apple_wwdc2010_main.jpg',
                        'title': 'WWDC 2010'
                    }
                }
            },
            {
                'id': '20100430',
                'caption': {
                    'title': 'iPad (Wi-Fi + 3G)',
                    'day': '30',
                    'month': 'Apr'
                },
                'detail': {
                    'head': {
                        'image': 'apple_ipadwifi3g_main.jpg',
                        'title': 'iPad (Wi-Fi + 3G)'
                    }
                }
            },
            {
                'id': '20100413',
                'caption': {
                    'title': 'MacBook Pro (Mid 2010)',
                    'day': '13',
                    'month': 'Apr'
                },
                'detail': {
                    'head': {
                        'image': 'apple_mbpm2010_main.jpg',
                        'title': 'MacBook Pro (Mid 2010)'
                    }
                }
            },
            {
                'id': '20100403',
                'caption': {
                    'title': 'iPad (Wi-Fi)',
                    'day': '03',
                    'month': 'Apr'
                },
                'detail': {
                    'head': {
                        'image': 'apple_ipad1st_main.jpg',
                        'title': 'iPad (Wi-Fi)'
                    }
                }
            },
            ]
        }, //end of 2010
        {
            'year': '2009',
            'events': [{
                'id': '20091020',
                'caption': {
                    'title': 'iMac (Late 2009)',
                    'day': '20',
                    'month': 'Oct'
                },
                'detail': {
                    'head': {
                        'image': 'apple_imacl2009_main.jpg',
                        'title': 'iMac (Late 2009)'
                    }
                }
            }, {
                'id': '20090909',
                'caption': {
                    'title': 'iPod Nano (5th gen)',
                    'day': '09',
                    'month': 'Sep',
                },
                'detail': {
                    'head': {
                        'image': 'apple_ipodnano5h_main.jpg',
                        'title': 'iPod Nano (5th gen)'
                    }
                }
            }, 
            {
                'id': '20090828',
                'caption': {
                    'title': 'Mac OS X Snow Leopard',
                    'day': '28',
                    'month': 'Aug',
                },
                'detail': {
                    'head': {
                        'image': 'apple_snow_main.jpg',
                        'title': 'Mac OS X Snow Leopard'
                    }
                }
            },
            {
                'id': '20090619',
                'caption': {
                    'title': 'iPhone 3GS',
                    'day': '19',
                    'month': 'Jun',
                },
                'detail': {
                    'head': {
                        'image': 'apple_iphone3gs_main.jpg',
                        'title': 'iPhone 3GS'
                    }
                }
            },
            {
                'id': '20090608',
                'caption': {
                    'title': 'WWDC 2009',
                    'day': '08',
                    'month': 'Jun'
                },
                'detail': {
                    'head': {
                        'image': 'apple_wwdc2009_main.jpg',
                        'title': 'WWDC 2009'
                    },
                    'rest': [{
                        'image': 'apple_mbpmid2009_main.jpg',
                        'title': 'MacBook Pro (Mid 2009)'
                    }
                    ]
                }
            },
            {
                'id': '20090407',
                'caption': {
                    'title': 'Xserve (2009)',
                    'day': '07',
                    'month': 'Apr'
                },
                'detail': {
                    'head': {
                        'image': 'apple_xserve2009_main.jpg',
                        'title': 'Xserve (2009)'
                    }
                }
            },
            {
                'id': '20090311',
                'caption': {
                    'title': 'iPod Shuffle (3rd gen)',
                    'day': '11',
                    'month': 'Mar'
                },
                'detail': {
                    'head': {
                        'image': 'apple_ipodsf3rd_main.jpg',
                        'title': 'iPod Shuffle (3rd gen)'
                    }
                }
            },
            {
                'id': '20090303',
                'caption': {
                    'title': 'Mac Mini (Early 2009)',
                    'day': '03',
                    'month': 'Mar'
                },
                'detail': {
                    'head': {
                        'image': 'apple_macminie2009_main.jpg',
                        'title': 'Mac Mini (Early 2009)'
                    }
                }
            },
            {
                'id': '20090129',
                'caption': {
                    'title': 'MacBook (Early 2009) (White)',
                    'day': '29',
                    'month': 'Jan'
                },
                'detail': {
                    'head': {
                        'image': 'apple_mbe2009_main.jpg',
                        'title': 'MacBook (Early 2009) (White)'
                    }
                }
            },
            {
                'id': '20090106',
                'caption': {
                    'title': 'iWork 09',
                    'day': '06',
                    'month': 'Jan'
                },
                'detail': {
                    'head': {
                        'image': 'apple_iwork09_main.jpg',
                        'title': 'iWork 09'
                    }
                }
            },
            ]
        }, //end of 2009
        {
            'year': '2008',
            'events': [{
                'id': '20081014',
                'caption': {
                    'title': 'MacBook Air (Late 2008)',
                    'day': '14',
                    'month': 'Oct'
                },
                'detail': {
                    'head': {
                        'image': 'apple_mba_l2008_main.jpg',
                        'title': 'MacBook Air (Late 2008)'
                    }
                }
            }, {
                'id': '20080909',
                'caption': {
                    'title': 'iPod Nano',
                    'day': '09',
                    'month': 'Sep',
                },
                'detail': {
                    'head': {
                        'image': 'apple_ipodnano4th_main.jpg',
                        'title': 'iPod Nano'
                    }
                }
            }, 
            {
                'id': '20080711',
                'caption': {
                    'title': 'iPhone 3G',
                    'day': '11',
                    'month': 'Jul',
                },
                'detail': {
                    'head': {
                        'image': 'apple_iphone3g_main.jpg',
                        'title': 'iPhone 3G'
                    }
                }
            },
            {
                'id': '20080229',
                'caption': {
                    'title': 'Time Capsule (1st gen)',
                    'day': '29',
                    'month': 'Sep',
                },
                'detail': {
                    'head': {
                        'image': 'apple_tc_main.jpg',
                        'title': 'Time Capsule (1st gen)'
                    }
                }
            },
            {
                'id': '20080226',
                'caption': {
                    'title': 'MacBook (Early 2008)',
                    'day': '26',
                    'month': 'Feb'
                },
                'detail': {
                    'head': {
                        'image': 'apple_mb_e2008_main.jpg',
                        'title': 'MacBook (Early 2008)'
                    }
                }
            },
            {
                'id': '20080205',
                'caption': {
                    'title': 'iPhone (1st generation) (16 GB)',
                    'day': '05',
                    'month': 'Feb'
                },
                'detail': {
                    'head': {
                        'image': 'apple_iphone1_16gb_main.jpg',
                        'title': 'iPhone (1st generation) (16 GB)'
                    }
                }
            },
            {
                'id': '20080115',
                'caption': {
                    'title': 'MacBook Air (Early 2008)',
                    'day': '15',
                    'month': 'Jan'
                },
                'detail': {
                    'head': {
                        'image': 'apple_mba1st_main.jpg',
                        'title': 'MacBook Air (Early 2008)'
                    }
                }
            },
            {
                'id': '20090108',
                'caption': {
                    'title': 'Mac Pro (Early 2008)',
                    'day': '08',
                    'month': 'Jan'
                },
                'detail': {
                    'head': {
                        'image': 'apple_mp_e2008_main.jpg',
                        'title': 'Mac Pro (Early 2008)'
                    }
                }
            }
            ]
        }, //end of 2008
        {
            'year': '2007',
            'events': [{
                'id': '20071027',
                'caption': {
                    'title': 'Mac OS X Leopard (10.5)',
                    'day': '27',
                    'month': 'Oct'
                },
                'detail': {
                    'head': {
                        'image': 'apple_leopard_main.jpg',
                        'title': 'Mac OS X Leopard (10.5)'
                    }
                }
            }, {
                'id': '20070905',
                'caption': {
                    'title': 'iPod Touch (1st gen)',
                    'day': '05',
                    'month': 'Sep',
                },
                'detail': {
                    'head': {
                        'image': 'apple_ipodtouch1st_main.jpg',
                        'title': 'iPod Touch (1st gen)'
                    }
                }
            }, 
            {
                'id': '20070807',
                'caption': {
                    'title': 'Apple Mighty Mouse',
                    'day': '07',
                    'month': 'Aug',
                },
                'detail': {
                    'head': {
                        'image': 'apple_mtmouse_main.jpg',
                        'title': 'Apple Mighty Mouse'
                    }
                }
            },
            {
                'id': '20070629',
                'caption': {
                    'title': 'iPhone (1st gen)',
                    'day': '29',
                    'month': 'Jun',
                },
                'detail': {
                    'head': {
                        'image': 'apple_iphone1_main.jpg',
                        'title': 'iPhone (1st gen, 4GB/8GB)'
                    }
                }
            },
            {
                'id': '20070321',
                'caption': {
                    'title': 'Apple TV (1st gen)',
                    'day': '21',
                    'month': 'Mar'
                },
                'detail': {
                    'head': {
                        'image': 'apple_tv1st_main.jpg',
                        'title': 'Apple TV (1st gen)'
                    }
                }
            }
            ]
        }, //end of 2007
        {
            'year': '2006',
            'events': [{
                'id': '20060925',
                'caption': {
                    'title': 'iPod Nano (2nd gen)',
                    'day': '25',
                    'month': 'Sep'
                },
                'detail': {
                    'head': {
                        'image': 'apple_ipodnano2nd_main.jpg',
                        'title': 'iPod Nano (2nd gen)'
                    }
                }
            }, {
                'id': '20060912',
                'caption': {
                    'title': 'iPod Shuffle (2nd gen)',
                    'day': '05',
                    'month': 'Sep',
                },
                'detail': {
                    'head': {
                        'image': 'apple_ipodsf2nd_main.jpg',
                        'title': 'iPod Shuffle (2nd gen)'
                    }
                }
            }, 
            {
                'id': '20060906',
                'caption': {
                    'title': 'iMac (Mid 2006)',
                    'day': '06',
                    'month': 'Sep',
                },
                'detail': {
                    'head': {
                        'image': 'apple_imaclate2006_main.jpg',
                        'title': 'iMac (Mid 2006)'
                    }
                }
            },
            {
                'id': '20060807',
                'caption': {
                    'title': 'Mac Pro',
                    'day': '07',
                    'month': 'Aug',
                },
                'detail': {
                    'head': {
                        'image': 'apple_mp1st_main.jpg',
                        'title': 'Mac Pro'
                    }
                }
            },
            {
                'id': '20060713',
                'caption': {
                    'title': 'Nike + iPod',
                    'day': '13',
                    'month': 'Jul'
                },
                'detail': {
                    'head': {
                        'image': 'apple_ipodnike_main.jpg',
                        'title': 'Nike + iPod'
                    }
                }
            },
            {
                'id': '20060516',
                'caption': {
                    'title': 'Mac Book',
                    'day': '16',
                    'month': 'May'
                },
                'detail': {
                    'head': {
                        'image': 'apple_mb1st_main.jpg',
                        'title': 'Mac Book'
                    }
                }
            },
            {
                'id': '20060424',
                'caption': {
                    'title': 'MacBook Pro (17")',
                    'day': '24',
                    'month': 'Apr'
                },
                'detail': {
                    'head': {
                        'image': 'apple_mbp17_2006_main.jpg',
                        'title': 'MacBook Pro (17")'
                    }
                }
            },
            {
                'id': '20060228',
                'caption': {
                    'title': 'iPod HIFI',
                    'day': '28',
                    'month': 'Feb'
                },
                'detail': {
                    'head': {
                        'image': 'apple_ipodhifi_main.jpg',
                        'title': 'iPod HIFI'
                    }
                }
            },
            {
                'id': '20060110',
                'caption': {
                    'title': 'Pod Radio Remote',
                    'day': '10',
                    'month': 'Jan'
                },
                'detail': {
                    'head': {
                        'image': 'apple_ipodrr_main.jpg',
                        'title': 'Pod Radio Remote'
                    }
                }
            }
            ]
        }, //end of 2006
        {
            'year': '2005',
            'events': [{
                'id': '20051012',
                'caption': {
                    'title': 'iPod (5th gen)',
                    'day': '12',
                    'month': 'Oct'
                },
                'detail': {
                    'head': {
                        'image': 'apple_ipod5th_main.jpg',
                        'title': 'iPod (5th gen)'
                    }
                }
            }, {
                'id': '20050907',
                'caption': {
                    'title': 'iPod Nano (1st gen)',
                    'day': '07',
                    'month': 'Sep',
                },
                'detail': {
                    'head': {
                        'image': 'apple_ipodnano1st_main.jpg',
                        'title': 'iPod Nano (1st gen)'
                    }
                }
            }, 
            {
                'id': '20050223',
                'caption': {
                    'title': 'iPod Mini (2nd gen)',
                    'day': '23',
                    'month': 'Feb',
                },
                'detail': {
                    'head': {
                        'image': 'apple_ipodmini2nd_main.jpg',
                        'title': 'iPod Mini (2nd gen)'
                    }
                }
            },
            {
                'id': '20050111',
                'caption': {
                    'title': 'iPod Shuffle (1st gen)',
                    'day': '11',
                    'month': 'Jan',
                },
                'detail': {
                    'head': {
                        'image': 'apple_ipodsf1st_main.jpg',
                        'title': 'iPod Shuffle (1st gen)'
                    }
                }
            }
            ]
        }, //end of 2005
        {
            'year': '2004',
            'events': [{
                'id': '20040926',
                'caption': {
                    'title': 'iPod Photo',
                    'day': '26',
                    'month': 'Sep'
                },
                'detail': {
                    'head': {
                        'image': 'apple_ipodphoto_main.jpg',
                        'title': 'iPod Photo'
                    }
                }
            }, {
                'id': '20040831',
                'caption': {
                    'title': 'iMac G5',
                    'day': '31',
                    'month': 'Aug',
                },
                'detail': {
                    'head': {
                        'image': 'apple_imacg5_main.jpg',
                        'title': 'iMac G5'
                    }
                }
            }, 
            {
                'id': '20040719',
                'caption': {
                    'title': 'iPod (4th gen)',
                    'day': '19',
                    'month': 'Jul',
                },
                'detail': {
                    'head': {
                        'image': 'apple_ipod4th_main.jpg',
                        'title': 'iPod (4th gen)'
                    }
                }
            },
            {
                'id': '20040607',
                'caption': {
                    'title': 'AirPort Express (802.11g)',
                    'day': '07',
                    'month': 'Jun',
                },
                'detail': {
                    'head': {
                        'image': 'apple_apexpress1st_main.jpg',
                        'title': 'AirPort Express (802.11g)'
                    }
                }
            },
            {
                'id': '20040106',
                'caption': {
                    'title': 'iPod Mini',
                    'day': '06',
                    'month': 'Jan',
                },
                'detail': {
                    'head': {
                        'image': 'apple_ipodmini1st_main.jpg',
                        'title': 'iPod Mini'
                    }
                }
            }
            ]
        }, //end of 2004
        {
            'year': '2003',
            'events': [{
                'id': '20031022',
                'caption': {
                    'title': 'iBook G4',
                    'day': '22',
                    'month': 'Oct'
                },
                'detail': {
                    'head': {
                        'image': 'apple_ibookg4_main.jpg',
                        'title': 'iBook G4'
                    }
                }
            }, {
                'id': '20030623',
                'caption': {
                    'title': 'Power Macintosh G5',
                    'day': '23',
                    'month': 'Jun',
                },
                'detail': {
                    'head': {
                        'image': 'apple_macg5_main.jpg',
                        'title': 'Power Macintosh G5'
                    }
                }
            }, 
            {
                'id': '20030428',
                'caption': {
                    'title': 'iPod (3rd gen)',
                    'day': '28',
                    'month': 'Apr',
                },
                'detail': {
                    'head': {
                        'image': 'apple_ipod3rd_main.jpg',
                        'title': 'iPod (3rd gen)'
                    }
                }
            },
            {
                'id': '20030107',
                'caption': {
                    'title': 'iMac PowerBook G4 Aluminum',
                    'day': '07',
                    'month': 'Jan',
                },
                'detail': {
                    'head': {
                        'image': 'apple_pbg4al_main.jpg',
                        'title': 'iMac PowerBook G4 Aluminum'
                    }
                }
            }
            ]
        }, //end of 2003
        {
            'year': '2002',
            'events': [{
                'id': '20020617',
                'caption': {
                    'title': 'iMac G4 17" & iPod (2nd gen)',
                    'day': '17',
                    'month': 'Jun'
                },
                'detail': {
                    'head': {
                        'image': 'apple_imacg417inch_main.jpg',
                        'title': 'iMac G4 17" & iPod (2nd gen)'
                    }
                }
            }, {
                'id': '20020514',
                'caption': {
                    'title': 'Xserve',
                    'day': '14',
                    'month': 'May',
                },
                'detail': {
                    'head': {
                        'image': 'apple_xserve_main.jpg',
                        'title': 'Xserve'
                    }
                }
            }, 
            {
                'id': '20020429',
                'caption': {
                    'title': 'eMac',
                    'day': '29',
                    'month': 'Apr',
                },
                'detail': {
                    'head': {
                        'image': 'apple_emac_main.jpg',
                        'title': 'eMac'
                    }
                }
            },
            {
                'id': '20020107',
                'caption': {
                    'title': 'iMac G4 15"',
                    'day': '07',
                    'month': 'Jan',
                },
                'detail': {
                    'head': {
                        'image': 'apple_imacg4_main.jpg',
                        'title': 'iMac G4 15"'
                    }
                }
            }
            ]
        }, //end of 2002
        {
            'year': '2001',
            'events': [{
                'id': '20011022',
                'caption': {
                    'title': 'iPod(1st generation)',
                    'day': '22',
                    'month': 'Oct'
                },
                'detail': {
                    'head': {
                        'image': 'apple_ipod1st_main.jpg',
                        'title': 'iPod(1st generation)'
                    }
                }
            }, {
                'id': '20010718',
                'caption': {
                    'title': 'Power Macintosh G4 Quicksilver',
                    'day': '18',
                    'month': 'Jul',
                },
                'detail': {
                    'head': {
                        'image': 'apple_macg4_qs_main.jpg',
                        'title': 'Power Macintosh G4 Quicksilver'
                    }
                }
            }, 
            {
                'id': '20010501',
                'caption': {
                    'title': 'iBook (white)',
                    'day': '01',
                    'month': 'May',
                },
                'detail': {
                    'head': {
                        'image': 'apple_ibookw_main.jpg',
                        'title': 'iBook (white)'
                    }
                }
            },
            {
                'id': '20010101',
                'caption': {
                    'title': 'PowerBook G4 Titanium',
                    'day': '07',
                    'month': 'Jan',
                },
                'detail': {
                    'head': {
                        'image': 'apple_pbg4tt_main.jpg',
                        'title': 'PowerBook G4 Titanium'
                    }
                }
            }
            ]
        }, //end of 2001
        {
            'year': '2000',
            'events': [{
                'id': '20000913',
                'caption': {
                    'title': 'iBook (FireWire)',
                    'day': '13',
                    'month': 'Sep'
                },
                'detail': {
                    'head': {
                        'image': 'apple_ibookfw_main.jpg',
                        'title': 'iBook (FireWire)'
                    }
                }
            }, {
                'id': '20000719',
                'caption': {
                    'title': 'Power Macintosh G4 Cube',
                    'day': '19',
                    'month': 'Jul',
                },
                'detail': {
                    'head': {
                        'image': 'apple_macg4cube_main.jpg',
                        'title': 'Power Macintosh G4 Cube'
                    }
                }
            }, 
            {
                'id': '20000216',
                'caption': {
                    'title': 'PowerBook ("Pismo")',
                    'day': '16',
                    'month': 'Feb',
                },
                'detail': {
                    'head': {
                        'image': 'apple_pbpismo_main.jpg',
                        'title': 'PowerBook ("Pismo")'
                    }
                }
            }
            ]
        }, //end of 2000
        {
            'year': '1999',
            'events': [{
                'id': '19991013',
                'caption': {
                    'title': 'Power Macintosh G4 Graphite',
                    'day': '13',
                    'month': 'Oct'
                },
                'detail': {
                    'head': {
                        'image': 'apple_macg4_gra_main.jpg',
                        'title': 'Power Macintosh G4 Graphite'
                    }
                }
            }, {
                'id': '19991005',
                'caption': {
                    'title': 'iMac (slot loading)',
                    'day': '05',
                    'month': 'Oct',
                },
                'detail': {
                    'head': {
                        'image': 'apple_imac_main.jpg',
                        'title': 'iMac (slot loading)'
                    }
                }
            }, 
            {
                'id': '19990901',
                'caption': {
                    'title': 'Cinema Display (22")',
                    'day': '01',
                    'month': 'Sep',
                },
                'detail': {
                    'head': {
                        'image': 'apple_cdisplay_main.jpg',
                        'title': 'Cinema Display (22")'
                    }
                }
            },
            {
                'id': '19990831',
                'caption': {
                    'title': 'Macintosh Server G4',
                    'day': '31',
                    'month': 'Aug',
                },
                'detail': {
                    'head': {
                        'image': 'apple_msg4_main.jpg',
                        'title': 'Macintosh Server G4'
                    }
                }
            },
            {
                'id': '19990721',
                'caption': {
                    'title': 'iBOOK',
                    'day': '21',
                    'month': 'Jul',
                },
                'detail': {
                    'head': {
                        'image': 'apple_ibook_main.jpg',
                        'title': 'iBOOK'
                    }
                }
            },
            {
                'id': '19990105',
                'caption': {
                    'title': 'Power Macintosh G3 (Blue & White)',
                    'day': '05',
                    'month': 'Jan',
                },
                'detail': {
                    'head': {
                        'image': 'apple_macg3blue_main.jpg',
                        'title': 'Power Macintosh G3 (Blue & White)'
                    }
                }
            }
            ]
        }, //end of 1999
        {
            'year': '1998',
            'events': [{
                'id': '19980815',
                'caption': {
                    'title': 'iMac G3',
                    'day': '15',
                    'month': 'Aug'
                },
                'detail': {
                    'head': {
                        'image': 'apple_imacg3_main.jpg',
                        'title': 'iMac G3'
                    }
                }
            }, {
                'id': '19980506',
                'caption': {
                    'title': 'PowerBook G3 series',
                    'day': '06',
                    'month': 'May',
                },
                'detail': {
                    'head': {
                        'image': 'apple_pbg3s_main.jpg',
                        'title': 'PowerBook G3 series'
                    }
                }
            }, 
            {
                'id': '19980131',
                'caption': {
                    'title': 'Power Macintosh G3 AIO',
                    'day': '31',
                    'month': 'Jan',
                },
                'detail': {
                    'head': {
                        'image': 'apple_macg3aio_main.jpg',
                        'title': 'Power Macintosh G3 AIO'
                    }
                }
            }
            ]
        }, //end of 1998
        {
            'year': '1997',
            'events': [{
                'id': '19971110',
                'caption': {
                    'title': 'PowerBook G3',
                    'day': '10',
                    'month': 'Nov'
                },
                'detail': {
                    'head': {
                        'image': 'apple_pbg3_main.jpg',
                        'title': 'PowerBook G3'
                    }
                }
            }, {
                'id': '19970508',
                'caption': {
                    'title': 'PowerBook 2400c',
                    'day': '06',
                    'month': 'May',
                },
                'detail': {
                    'head': {
                        'image': 'apple_pb2400c_main.jpg',
                        'title': 'PowerBook 2400c'
                    },
                    'rest': [
                    {
                        'image': 'apple_mac7300.jpg',
                        'title': '7300'
                    },
                    {
                        'image': 'apple_mac8600.jpg',
                        'title': '8600'
                    },
                    {
                        'image': 'apple_mac9600.jpg',
                        'title': '9600'
                    },{
                        'image': 'apple_pb3400.jpg',
                        'title': '3400'
                    }]
                }
            }, 
            {
                'id': '19970320',
                'caption': {
                    'title': 'Twentieth Anniversary Macintosh',
                    'day': '20',
                    'month': 'Mar',
                },
                'detail': {
                    'head': {
                        'image': 'apple_20thmac_main.jpg',
                        'title': 'Twentieth Anniversary Macintosh'
                    }
                }
            },
            {
                'id': '19970307',
                'caption': {
                    'title': 'eMate 300',
                    'day': '07',
                    'month': 'Mar',
                },
                'detail': {
                    'head': {
                        'image': 'apple_emate300_main.jpg',
                        'title': 'eMate 300'
                    }
                }
            },
            {
                'id': '19970217',
                'caption': {
                    'title': 'Power Macintosh 6500',
                    'day': '17',
                    'month': 'Feb',
                },
                'detail': {
                    'head': {
                        'image': 'apple_pb6500_main.jpg',
                        'title': 'Power Macintosh 6500'
                    }
                }
            }
            ]
        }, //end of 1997
        {
            'year': '1996',
            'events': [{
                'id': '19961120',
                'caption': {
                    'title': 'PowerBook 1400',
                    'day': '20',
                    'month': 'Nov'
                },
                'detail': {
                    'head': {
                        'image': 'apple_pb1400_main.jpg',
                        'title': 'PowerBook 1400'
                    }
                }
            }, {
                'id': '19961115',
                'caption': {
                    'title': 'Power Macintosh 4400',
                    'day': '15',
                    'month': 'Nov',
                },
                'detail': {
                    'head': {
                        'image': 'apple_mac4400_main.jpg',
                        'title': 'Power Macintosh 4400'
                    }
                }
            }, 
            {
                'id': '19961023',
                'caption': {
                    'title': 'Performa 6400',
                    'day': '23',
                    'month': 'Oct',
                },
                'detail': {
                    'head': {
                        'image': 'apple_pf6400_main.jpg',
                        'title': 'Performa 6400'
                    }
                }
            },
            {
                'id': '19961016',
                'caption': {
                    'title': 'Apple Network Server 700/200',
                    'day': '07',
                    'month': 'Mar',
                },
                'detail': {
                    'head': {
                        'image': 'apple_ns700_main.jpg',
                        'title': 'Apple Network Server 700/200'
                    }
                }
            },
            {
                'id': '19960401',
                'caption': {
                    'title': 'Power Macintosh 7600',
                    'day': '01',
                    'month': 'Apr',
                },
                'detail': {
                    'head': {
                        'image': 'apple_mac7600_main.jpg',
                        'title': 'Power Macintosh 7600'
                    }
                }
            },
            {
                'id': '19960226',
                'caption': {
                    'title': 'Workgroup Server 7250,8550',
                    'day': '26',
                    'month': 'Feb',
                },
                'detail': {
                    'head': {
                        'image': 'apple_mac7250_main.jpg',
                        'title': 'Workgroup Server 7250,8550'
                    }
                }
            },
            {
                'id': '19960215',
                'caption': {
                    'title': 'Apple Network Server 500',
                    'day': '15',
                    'month': 'Feb',
                },
                'detail': {
                    'head': {
                        'image': 'apple_ns500_main.jpg',
                        'title': 'Apple Network Server 500'
                    }
                }
            }
            ]
        }, //end of 1996
        {
            'year': '1995',
            'events': [{
                'id': '19950828',
                'caption': {
                    'title': 'PowerBook 190',
                    'day': '28',
                    'month': 'Aug'
                },
                'detail': {
                    'head': {
                        'image': 'apple_pb190_main.jpg',
                        'title': 'PowerBook 190'
                    },
                    'rest': [
                    {
                        'image': 'apple_pb5300cs.jpg',
                        'title': '5300'
                    },
                    {
                        'image': 'apple_pbduo2300c.jpg',
                        'title': '2300c'
                    }]
                }
            }, {
                'id': '19950807',
                'caption': {
                    'title': 'Power Macintosh 7200/7500/8500',
                    'day': '07',
                    'month': 'Aug',
                },
                'detail': {
                    'head': {
                        'image': 'apple_mac7500_main.jpg',
                        'title': 'Power Macintosh 7200/7500/8500'
                    },
                    'rest': [
                    {
                        'image': 'apple_mac8500.jpg',
                        'title': '8500'
                    }]
                }
            }, 
            {
                'id': '19950619',
                'caption': {
                    'title': 'Power Macintosh 9500',
                    'day': '19',
                    'month': 'Jun',
                },
                'detail': {
                    'head': {
                        'image': 'apple_mac9500_main.jpg',
                        'title': 'Power Macintosh 9500'
                    },
                    'rest': [
                    {
                        'image': 'apple_mac7100.jpg',
                        'title': '7100'
                    },{
                        'image': 'apple_mac8100.jpg',
                        'title': '8100'
                    }]
                }
            },
            {
                'id': '19950403',
                'caption': {
                    'title': 'Macintosh LC 580',
                    'day': '03',
                    'month': 'Apr',
                },
                'detail': {
                    'head': {
                        'image': 'apple_macLC580_main.jpg',
                        'title': 'Macintosh LC 580'
                    }
                }
            },
            {
                'id': '19950128',
                'caption': {
                    'title': 'Power Macintosh 6200 / 6300',
                    'day': '28',
                    'month': 'Jan',
                },
                'detail': {
                    'head': {
                        'image': 'apple_mac6300_main.jpg',
                        'title': 'Power Macintosh 6200 / 6300'
                    }
                }
            }
            ]
        }, //end of 1995
        {
            'year': '1994',
            'events': [{
                'id': '19941201',
                'caption': {
                    'title': 'Pippin',
                    'day': '01',
                    'month': 'Dec'
                },
                'detail': {
                    'head': {
                        'image': 'apple_pippin_main.jpg',
                        'title': 'Pippin'
                    }
                }
            }, {
                'id': '19940718',
                'caption': {
                    'title': 'PowerBook 150',
                    'day': '18',
                    'month': 'Jul',
                },
                'detail': {
                    'head': {
                        'image': 'apple_pb150_main.jpg',
                        'title': 'PowerBook 150'
                    }
                }
            }, 
            {
                'id': '19940516',
                'caption': {
                    'title': 'PowerBook 520/c',
                    'day': '16',
                    'month': 'May',
                },
                'detail': {
                    'head': {
                        'image': 'apple_pb520c_main.jpg',
                        'title': 'PowerBook 520/c'
                    }
                }
            },
            {
                'id': '19940426',
                'caption': {
                    'title': 'Workgroup Server 6150,8150,9150',
                    'day': '26',
                    'month': 'Apr',
                },
                'detail': {
                    'head': {
                        'image': 'apple_wg9150_main.jpg',
                        'title': 'Workgroup Server 6150,8150,9150'
                    }
                }
            },
            {
                'id': '19940314',
                'caption': {
                    'title': 'Power Macintosh 6100,7100,8100',
                    'day': '14',
                    'month': 'Mar',
                },
                'detail': {
                    'head': {
                        'image': 'apple_mac6100_main.jpg',
                        'title': 'Power Macintosh 6100,7100,8100'
                    }
                }
            },
            {
                'id': '19940202',
                'caption': {
                    'title': 'Apple QuickTake 100',
                    'day': '02',
                    'month': 'Feb',
                },
                'detail': {
                    'head': {
                        'image': 'apple_quicktake100_main.jpg',
                        'title': 'Apple QuickTake 100'
                    }
                }
            }
            ]
        }, //end of 1994
        {
            'year': '1993',
            'events': [{
                'id': '19931021',
                'caption': {
                    'title': 'Macintosh TV',
                    'day': '21',
                    'month': 'Oct'
                },
                'detail': {
                    'head': {
                        'image': 'apple_mactv_main.jpg',
                        'title': 'Macintosh TV'
                    }
                }
            }, {
                'id': '19931010',
                'caption': {
                    'title': 'color classic II',
                    'day': '10',
                    'month': 'Oct',
                },
                'detail': {
                    'head': {
                        'image': 'apple_colorclassicII_main.jpg',
                        'title': 'color classic II'
                    }
                }
            }, 
            {
                'id': '19930816',
                'caption': {
                    'title': 'Newton Message Pad',
                    'day': '16',
                    'month': 'Aug',
                },
                'detail': {
                    'head': {
                        'image': 'apple_newtonpad_main.jpg',
                        'title': 'Newton Message Pad'
                    }
                }
            },
            {
                'id': '19930729',
                'caption': {
                    'title': 'Quadra 840AV',
                    'day': '29',
                    'month': 'Jul',
                },
                'detail': {
                    'head': {
                        'image': 'apple_quadra840av_main.jpg',
                        'title': 'Quadra 840AV'
                    }
                }
            },
            {
                'id': '19930726',
                'caption': {
                    'title': 'Workgroup Server 60',
                    'day': '26',
                    'month': 'Jul',
                },
                'detail': {
                    'head': {
                        'image': 'apple_wg60_main.jpg',
                        'title': 'Workgroup Server 60'
                    }
                }
            },
            {
                'id': '19930607',
                'caption': {
                    'title': 'PowerBook 145b,180c',
                    'day': '07',
                    'month': 'Jun',
                },
                'detail': {
                    'head': {
                        'image': 'apple_pb145b_main.jpg',
                        'title': 'PowerBook 145b,180c'
                    }
                }
            },
            {
                'id': '19930322',
                'caption': {
                    'title': 'PowerCD',
                    'day': '22',
                    'month': 'Mar',
                },
                'detail': {
                    'head': {
                        'image': 'apple_powercd_main.jpg',
                        'title': 'PowerCD'
                    }
                }
            },
            {
                'id': '19930210',
                'caption': {
                    'title': 'Centris 610,650,800',
                    'day': '10',
                    'month': 'Feb',
                },
                'detail': {
                    'head': {
                        'image': 'apple_quadra800_main.jpg',
                        'title': 'Centris 610,650,800'
                    }
                }
            }
            ]
        }, //end of 1993
        {
            'year': '1992',
            'events': [{
                'id': '19931019',
                'caption': {
                    'title': 'PowerBook 160,180,duo210,duo230',
                    'day': '19',
                    'month': 'Oct'
                },
                'detail': {
                    'head': {
                        'image': 'apple_pbduo210_main.jpg',
                        'title': 'PowerBook 160,180,duo210,duo230'
                    }
                }
            }, {
                'id': '19920803',
                'caption': {
                    'title': 'PowerBook 145',
                    'day': '03',
                    'month': 'Aug',
                },
                'detail': {
                    'head': {
                        'image': 'apple_pb145_main.jpg',
                        'title': 'PowerBook 145'
                    }
                }
            }, 
            {
                'id': '19920518',
                'caption': {
                    'title': 'Quadra 950',
                    'day': '18',
                    'month': 'May',
                },
                'detail': {
                    'head': {
                        'image': 'apple_quadra950_main.jpg',
                        'title': 'Quadra 950'
                    }
                }
            },
            {
                'id': '19920323',
                'caption': {
                    'title': 'Macintosh LC II',
                    'day': '23',
                    'month': 'Mar',
                },
                'detail': {
                    'head': {
                        'image': 'apple_mac_LCII_main.jpg',
                        'title': 'Macintosh LC II'
                    }
                }
            }
            ]
        }, //end of 1992
        {
            'year': '1991',
            'events': [{
                'id': '19911021',
                'caption': {
                    'title': 'PowerBook 100&140&170, Quadra 700&900',
                    'day': '21',
                    'month': 'Oct'
                },
                'detail': {
                    'head': {
                        'image': 'apple_pb100_main.jpg',
                        'title': 'PowerBook 100&140&170, Quadra 700&900'
                    }
                }
            }, {
                'id': '19910301',
                'caption': {
                    'title': 'Apple IIe Card',
                    'day': '01',
                    'month': 'Mar',
                },
                'detail': {
                    'head': {
                        'image': 'apple_IIEcard_main.jpg',
                        'title': 'Apple IIe Card'
                    }
                }
            }, 
            {
                'id': '19910211',
                'caption': {
                    'title': 'Macintosh Portable (backlit screen)',
                    'day': '11',
                    'month': 'Feb',
                },
                'detail': {
                    'head': {
                        'image': 'apple_macportable_black_main.jpg',
                        'title': 'Macintosh Portable (backlit screen)'
                    }
                }
            }
            ]
        }, //end of 1991
        {
            'year': '1990',
            'events': [{
                'id': '19901015',
                'caption': {
                    'title': 'Macintosh Classic',
                    'day': '15',
                    'month': 'Oct'
                },
                'detail': {
                    'head': {
                        'image': 'apple_mac_classic_main.jpg',
                        'title': 'Macintosh Classic'
                    }
                }
            }, {
                'id': '19900319',
                'caption': {
                    'title': 'Macintosh IIfx',
                    'day': '19',
                    'month': 'Mar',
                },
                'detail': {
                    'head': {
                        'image': 'apple_mac2fx_main.jpg',
                        'title': 'Macintosh IIfx'
                    }
                }
            }
            ]
        }, //end of 1990
        {
            'year': '1989',
            'events': [{
                'id': '19890920',
                'caption': {
                    'title': 'Macintosh IIci',
                    'day': '15',
                    'month': 'Oct'
                },
                'detail': {
                    'head': {
                        'image': 'apple_mac2ci_main.jpg',
                        'title': 'Macintosh IIci'
                    }
                }
            }, 
            {
                'id': '19890801',
                'caption': {
                    'title': 'Macintosh SE FDHD',
                    'day': '01',
                    'month': 'Aug',
                },
                'detail': {
                    'head': {
                        'image': 'apple_macsehdsd_main.jpg',
                        'title': 'Macintosh SE FDHD'
                    }
                }
            },
            {
                'id': '19890701',
                'caption': {
                    'title': 'Modem 2400',
                    'day': '01',
                    'month': 'Jul',
                },
                'detail': {
                    'head': {
                        'image': 'apple_modem2400_main.jpg',
                        'title': 'Modem 2400'
                    }
                }
            },
            {
                'id': '19890119',
                'caption': {
                    'title': 'Macintosh SE/30',
                    'day': '19',
                    'month': 'Jan',
                },
                'detail': {
                    'head': {
                        'image': 'mac_macse30_main.jpg',
                        'title': 'Macintosh SE/30'
                    }
                }
            }
            ]
        }, //end of 1989
        {
            'year': '1988',
            'events': [{
                'id': '19880919',
                'caption': {
                    'title': 'Macintosh IIx',
                    'day': '19',
                    'month': 'Sep'
                },
                'detail': {
                    'head': {
                        'image': 'apple_mac_IIx_main.jpg',
                        'title': 'Macintosh IIx'
                    }
                }
            }, 
            {
                'id': '19880901',
                'caption': {
                    'title': 'Apple IIc Plus',
                    'day': '01',
                    'month': 'Aug',
                },
                'detail': {
                    'head': {
                        'image': 'apple_2c_plus_main.jpg',
                        'title': 'Apple IIc Plus'
                    }
                }
            },
            {
                'id': '19880801',
                'caption': {
                    'title': 'Apple Scanner',
                    'day': '01',
                    'month': 'Aug',
                },
                'detail': {
                    'head': {
                        'image': 'apple_scanner_main.jpg',
                        'title': 'Apple Scanner'
                    }
                }
            },
            {
                'id': '19880301',
                'caption': {
                    'title': 'Apple CD SC',
                    'day': '01',
                    'month': 'Mar',
                },
                'detail': {
                    'head': {
                        'image': 'apple_cdsc_main.jpg',
                        'title': 'Apple CD SC'
                    }
                }
            },
            {
                'id': '19880101',
                'caption': {
                    'title': 'Apple Laser Writer family',
                    'day': '01',
                    'month': 'Jan',
                },
                'detail': {
                    'head': {
                        'image': 'apple_laserwriter2_main.jpg',
                        'title': 'Apple Laser Writer family'
                    }
                }
            }
            ]
        }, //end of 1988
        {
            'year': '1987',
            'events': [{
                'id': '19870302',
                'caption': {
                    'title': 'Macintosh II & Macintosh SE',
                    'day': '02',
                    'month': 'Mar'
                },
                'detail': {
                    'head': {
                        'image': 'mac_mac2_main.jpg',
                        'title': 'Macintosh II & Macintosh SE'
                    }
                }
            }, 
            {
                'id': '19870101',
                'caption': {
                    'title': 'Apple IIe Platinum',
                    'day': '01',
                    'month': 'Jan',
                },
                'detail': {
                    'head': {
                        'image': 'apple_2e_platnium_main.jpg',
                        'title': 'Apple IIe Platinum'
                    }
                }
            }
            ]
        }, //end of 1987
        {
            'year': '1986',
            'events': [{
                'id': '19860901',
                'caption': {
                    'title': 'Apple IIGS',
                    'day': '01',
                    'month': 'Sep'
                },
                'detail': {
                    'head': {
                        'image': 'apple_2gs_main.jpg',
                        'title': 'Apple IIGS'
                    }
                }
            }, 
            {
                'id': '19860414',
                'caption': {
                    'title': 'Macintosh 512Ke',
                    'day': '14',
                    'month': 'Apr',
                },
                'detail': {
                    'head': {
                        'image': 'apple_512ke_main.jpg',
                        'title': 'Macintosh 512Ke'
                    }
                }
            },
            {
                'id': '19860116',
                'caption': {
                    'title': 'Macintosh Plus',
                    'day': '16',
                    'month': 'Jan',
                },
                'detail': {
                    'head': {
                        'image': 'apple_macIntosh_plus_main.jpg',
                        'title': 'Macintosh Plus'
                    }
                }
            }
            ]
        }, //end of 1986
        {
            'year': '1985',
            'events': [{
                'id': '19850601',
                'caption': {
                    'title': 'Apple UniDisk 5.25',
                    'day': '01',
                    'month': 'Jun'
                },
                'detail': {
                    'head': {
                        'image': 'apple_unidisk525_main.jpg',
                        'title': 'Apple UniDisk 5.25'
                    }
                }
            }, 
            {
                'id': '19850401',
                'caption': {
                    'title': 'Apple Personal Modem',
                    'day': '01',
                    'month': 'Apr',
                },
                'detail': {
                    'head': {
                        'image': 'mac_personalmodem_main.jpg',
                        'title': 'Apple Personal Modem'
                    }
                }
            },
            {
                'id': '19850301',
                'caption': {
                    'title': 'Apple IIe Enhanced',
                    'day': '01',
                    'month': 'Mar',
                },
                'detail': {
                    'head': {
                        'image': 'apple2e_enhanced_main.jpg',
                        'title': 'Apple IIe Enhanced'
                    }
                }
            },
            {
                'id': '19850101',
                'caption': {
                    'title': 'Macintosh XL',
                    'day': '01',
                    'month': 'Jan',
                },
                'detail': {
                    'head': {
                        'image': 'apple_macintoshxl_main.jpg',
                        'title': 'Macintosh XL'
                    }
                }
            }
            ]
        }, //end of 1985
        {
            'year': '1984',
            'events': [{
                'id': '19841201',
                'caption': {
                    'title': 'AppleColor 100',
                    'day': '01',
                    'month': 'Dec'
                },
                'detail': {
                    'head': {
                        'image': 'apple_color100_main.jpg',
                        'title': 'AppleColor 100'
                    }
                }
            }, 
            {
                'id': '19840601',
                'caption': {
                    'title': 'Apple Color Plotter',
                    'day': '01',
                    'month': 'Jun',
                },
                'detail': {
                    'head': {
                        'image': 'applecolorploter_main.jpg',
                        'title': 'Apple Color Plotter'
                    }
                }
            },
            {
                'id': '19840501',
                'caption': {
                    'title': 'Apple DuoDisk 5.25',
                    'day': '01',
                    'month': 'May',
                },
                'detail': {
                    'head': {
                        'image': 'appleduodisk_main.jpg',
                        'title': 'Apple DuoDisk 5.25'
                    }
                }
            },
            {
                'id': '19840401',
                'caption': {
                    'title': 'Apple IIc',
                    'day': '01',
                    'month': 'Apr',
                },
                'detail': {
                    'head': {
                        'image': 'apple_iic_main.jpg',
                        'title': 'Apple IIc'
                    }
                }
            },
            {
                'id': '19840124',
                'caption': {
                    'title': 'Macintosh(128K)',
                    'day': '24',
                    'month': 'Jan',
                },
                'detail': {
                    'head': {
                        'image': 'apple_macintosh_main.jpg',
                        'title': 'Macintosh(128K)'
                    }
                }
            },
            {
                'id': '19840101',
                'caption': {
                    'title': 'Apple Lisa 2',
                    'day': '01',
                    'month': 'Jan',
                },
                'detail': {
                    'head': {
                        'image': 'applelisa2_main.jpg',
                        'title': 'Apple Lisa 2'
                    }
                }
            }
            ]
        }, //end of 1984
        {
            'year': '1983',
            'events': [{
                'id': '19831201',
                'caption': {
                    'title': 'Apple III Plus & Image Writer',
                    'day': '01',
                    'month': 'Dec'
                },
                'detail': {
                    'head': {
                        'image': 'apple3plus_main.jpg',
                        'title': 'Apple III Plus & Image Writer'
                    }
                }
            }, 
            {
                'id': '19830101',
                'caption': {
                    'title': 'Apple Lisa',
                    'day': '01',
                    'month': 'Jan',
                },
                'detail': {
                    'head': {
                        'image': 'applelisa_main.jpg',
                        'title': 'Apple Lisa'
                    }
                }
            }
            ]
        }, //end of 1983
        {
            'year': '1982',
            'events': [{
                'id': '19821001',
                'caption': {
                    'title': 'Apple DotMatrix printer & letter quality printer',
                    'day': '01',
                    'month': 'Oct'
                },
                'detail': {
                    'head': {
                        'image': 'apple_dotmatrix_letter_main.jpg',
                        'title': 'Apple DotMatrix printer & letter quality printer'
                    }
                }
            }
            ]
        }, //end of 1982
        ]
    } //end of data
});