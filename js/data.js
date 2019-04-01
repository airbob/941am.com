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
        ]
    } //end of data
});