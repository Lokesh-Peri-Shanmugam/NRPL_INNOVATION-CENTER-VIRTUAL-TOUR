TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "viewerArea": "this.MainViewer",
  "id": "MainViewerVideoPlayer",
  "class": "VideoPlayer",
  "displayPlaybackBar": true
 },
 {
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "class": "ImageResourceLevel",
       "width": 6080,
       "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "hfov": 45,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false,
      "inertia": false,
      "id": "panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
        }
       ]
      },
      "angle": 0
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_t.jpg",
  "id": "panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE",
  "class": "Panorama",
  "pitch": 0,
  "hfovMax": 120,
  "label": "HOME",
  "hfovMin": 120,
  "hfov": 360,
  "cardboardMenu": {
   "opacity": 0.4,
   "fontFamily": "Arial",
   "id": "Menu_73C1F46F_5695_2FF4_41B1_82E115958A0A",
   "label": "Media",
   "rollOverBackgroundColor": "#000000",
   "rollOverOpacity": 0.8,
   "backgroundColor": "#404040",
   "class": "Menu",
   "selectedFontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "rollOverFontColor": "#FFFFFF",
   "fontColor": "#FFFFFF",
   "children": [
    {
     "label": "HOME",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "label": "PHYTOCHEMISTRY",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "label": "5",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "label": "CENTRAL INSTRUMENTATION FACILITY",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "label": "8",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "label": "9",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    },
    {
     "label": "10",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 6)"
    },
    {
     "label": "11",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 7)"
    },
    {
     "label": "12",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 8)"
    },
    {
     "label": "13",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 9)"
    },
    {
     "label": "micro biology",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 10)"
    },
    {
     "label": "GLP",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 11)"
    }
   ]
  },
  "partial": false
 },
 {
  "gyroscopeVerticalDraggingEnabled": true,
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "buttonCardboardView": {
   "transparencyActive": false,
   "toolTipBorderSize": 1,
   "toolTipPaddingTop": 4,
   "maxWidth": 70,
   "toolTipFontFamily": "Arial",
   "id": "IconButton_136600B2_305F_CBFA_41B8_B6C386FD826B",
   "maxHeight": 100,
   "shadow": false,
   "toolTipFontStyle": "normal",
   "mode": "push",
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipFontSize": 12,
   "toolTipBorderRadius": 3,
   "toolTipShadowSpread": 0,
   "toolTipPaddingBottom": 4,
   "paddingLeft": 0,
   "toolTipPaddingLeft": 6,
   "toolTipPaddingRight": 6,
   "toolTipFontWeight": "normal",
   "minHeight": 50,
   "toolTipFontColor": "#606060",
   "toolTipShadowVerticalLength": 0,
   "horizontalAlign": "center",
   "borderRadius": 0,
   "toolTipBorderColor": "#767676",
   "iconURL": "skin/IconButton_136600B2_305F_CBFA_41B8_B6C386FD826B.png",
   "cursor": "hand",
   "paddingTop": 0,
   "minWidth": 50,
   "width": "80%",
   "verticalAlign": "middle",
   "borderSize": 0,
   "class": "IconButton",
   "toolTip": "Enable VR",
   "height": "100%",
   "toolTipTextShadowColor": "#000000",
   "paddingRight": 0,
   "toolTipShadowOpacity": 1,
   "toolTipShadowBlurRadius": 3,
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "toolTipShadowHorizontalLength": 0,
   "toolTipOpacity": 1,
   "toolTipShadowColor": "#333333",
   "toolTipTextShadowBlurRadius": 3,
   "toolTipTextShadowOpacity": 0
  },
  "mouseControlMode": "drag_acceleration",
  "gyroscopeEnabled": true,
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "touchControlMode": "drag_rotation"
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_camera",
  "automaticRotationSpeed": 4,
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "class": "ImageResourceLevel",
       "width": 6080,
       "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 10.49,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -170.64,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 96,
           "class": "ImageResourceLevel",
           "width": 118,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -41.57
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_25DA8B0C_2AFA_7B00_41C2_6A03F63F0461",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE, {'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'borderColor':'#000000','pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'backgroundColorDirection':'vertical','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','iconWidth':20,'rollOverIconHeight':20,'pressedIconWidth':20,'iconHeight':20,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20}, this.ImageResource_3B6D458C_2B0E_6F00_4137_F60375F9E4C8, null, null, 10000, null, false)"
       }
      ],
      "items": [
       {
        "yaw": -170.64,
        "pitch": -41.57,
        "hfov": 10.49,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 192,
           "class": "ImageResourceLevel",
           "width": 236,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_1_0.png"
          }
         ]
        }
       }
      ]
     },
     {
      "rotationZ": 0,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 640,
         "class": "ImageResourceLevel",
         "width": 1024,
         "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_2.jpg"
        }
       ]
      },
      "yaw": -170.64,
      "popupMaxWidth": "65%",
      "id": "popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE",
      "showEasing": "cubic_in",
      "hfov": 10.49,
      "class": "PopupPanoramaOverlay",
      "popupMaxHeight": "65%",
      "hideDuration": 500,
      "rotationX": 0,
      "hideEasing": "cubic_out",
      "showDuration": 500,
      "rotationY": 0,
      "pitch": -41.57
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 9.3,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 128.9,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "class": "ImageResourceLevel",
           "width": 89,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": -28.55
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_24CAE2F7_2B0F_E500_41C4_A18761875ECF",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_21C1904E_2894_713C_41B0_21CD9585DC33, this.camera_73F5B497_5695_2F54_41BA_336780392E7C); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "items": [
       {
        "yaw": 128.9,
        "pitch": -28.55,
        "hfov": 9.3,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 88,
           "class": "ImageResourceLevel",
           "width": 178,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_3_0.png"
          }
         ]
        }
       }
      ]
     },
     {
      "hfov": 45,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false,
      "inertia": false,
      "id": "panorama_21C17A97_2894_712C_41B7_9CFB64799D98_tcap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
        }
       ]
      },
      "angle": 0
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 40.98,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -170.63,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 40,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_4_0_map.gif"
          }
         ]
        },
        "pitch": -38.53
       }
      ],
      "rollOverDisplay": true,
      "id": "overlay_70B12732_55AB_AC15_41C4_E938DA1C7449",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "yaw": -170.63,
        "pitch": -38.53,
        "hfov": 40.98,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 351,
           "class": "ImageResourceLevel",
           "width": 884,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_4_0.png"
          }
         ]
        }
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_t.jpg",
  "id": "panorama_21C17A97_2894_712C_41B7_9CFB64799D98",
  "class": "Panorama",
  "pitch": 0,
  "hfovMax": 120,
  "label": "PHYTOCHEMISTRY",
  "hfovMin": 120,
  "hfov": 360,
  "cardboardMenu": "this.Menu_73C1F46F_5695_2FF4_41B1_82E115958A0A",
  "adjacentPanoramas": [
   {
    "backwardYaw": -45.16,
    "class": "AdjacentPanorama",
    "panorama": {
     "vfov": 180,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3040,
          "class": "ImageResourceLevel",
          "width": 6080,
          "url": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33.jpeg"
         }
        ]
       },
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 14.72,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -45.16,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 44,
              "class": "ImageResourceLevel",
              "width": 130,
              "url": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -18.35
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_2479695E_2B38_D0EA_41AD_DC4172FC61AB",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98, this.camera_73157585_5695_2934_41B3_76DF9E406205); this.mainPlayList.set('selectedIndex', 1)"
          }
         ],
         "items": [
          {
           "yaw": -45.16,
           "pitch": -18.35,
           "hfov": 14.72,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 88,
              "class": "ImageResourceLevel",
              "width": 261,
              "url": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_0_HS_0_0.png"
             }
            ]
           }
          }
         ]
        },
        {
         "hfov": 45,
         "class": "TripodCapPanoramaOverlay",
         "rotate": false,
         "inertia": false,
         "id": "panorama_21C1904E_2894_713C_41B0_21CD9585DC33_tcap0",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "height": 850,
            "class": "ImageResourceLevel",
            "width": 850,
            "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
           }
          ]
         },
         "angle": 0
        }
       ]
      }
     ],
     "thumbnailUrl": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_t.jpg",
     "id": "panorama_21C1904E_2894_713C_41B0_21CD9585DC33",
     "class": "Panorama",
     "pitch": 0,
     "hfovMax": 120,
     "label": "5",
     "hfovMin": 120,
     "hfov": 360,
     "cardboardMenu": "this.Menu_73C1F46F_5695_2FF4_41B1_82E115958A0A",
     "adjacentPanoramas": [
      {
       "backwardYaw": 128.9,
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98",
       "distance": 1,
       "yaw": -45.16
      }
     ],
     "partial": false
    },
    "distance": 1,
    "yaw": 128.9
   }
  ],
  "partial": false
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -6.15,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 23.88,
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -43.37,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -168.93,
     "pitchSpeed": 17.05,
     "path": "shortest",
     "yawSpeed": 33.25,
     "end": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "targetPitch": 7.45,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 131.45,
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 14.65,
   "pitch": -6.12
  },
  "id": "panorama_21C17A97_2894_712C_41B7_9CFB64799D98_camera",
  "automaticRotationSpeed": 4,
  "automaticZoomSpeed": 10
 },
 "this.panorama_21C1904E_2894_713C_41B0_21CD9585DC33",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -1.18,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -137.72,
     "pitchSpeed": 22.4,
     "path": "shortest",
     "yawSpeed": 44,
     "end": "this.mainPlayList.set('selectedIndex', 1)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 130.11,
   "pitch": -2.82
  },
  "id": "panorama_21C1904E_2894_713C_41B0_21CD9585DC33_camera",
  "automaticRotationSpeed": 4,
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "class": "ImageResourceLevel",
       "width": 6080,
       "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 41.52,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 48.71,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 195,
           "class": "ImageResourceLevel",
           "width": 200,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_4_1_0_map.gif"
          }
         ]
        },
        "pitch": -9.05
       }
      ],
      "rollOverDisplay": true,
      "id": "overlay_4F20F8D9_50A5_873F_4185_24C8DB425224",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "yaw": 48.71,
        "pitch": -9.05,
        "hfov": 41.52,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 717,
           "class": "ImageResourceLevel",
           "width": 733,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_4_0.png"
          }
         ]
        }
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 11.04,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 12.85,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 27,
           "class": "ImageResourceLevel",
           "width": 96,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -14.56
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_3FEDAE92_2B28_707A_41C2_E8EBF519B4F5",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7, this.camera_70AFD5DC_5695_28D5_41C2_A62D9142DCD2); this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "items": [
       {
        "yaw": 12.85,
        "pitch": -14.56,
        "hfov": 11.04,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 54,
           "class": "ImageResourceLevel",
           "width": 192,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_0_0.png"
          }
         ]
        }
       }
      ]
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 5.28,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 12.33,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 15,
           "class": "ImageResourceLevel",
           "width": 44,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -6.88
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_3F761D72_2B28_D0BA_41C3_6C15AF70AE2D",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "items": [
       {
        "yaw": 12.33,
        "pitch": -6.88,
        "hfov": 5.28,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 30,
           "class": "ImageResourceLevel",
           "width": 89,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_1_0.png"
          }
         ]
        }
       }
      ]
     },
     {
      "hfov": 45,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false,
      "inertia": false,
      "id": "panorama_21C1854F_2894_533C_41B2_3F2795CC3254_tcap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
        }
       ]
      },
      "angle": 0
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 7.7,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 49.63,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": -13.33
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_1B37166D_50D8_881A_41D0_15E8E78F99B1",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_654F705B_50BD_8733_41D0_F63243597D98, {'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'borderColor':'#000000','pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'backgroundColorDirection':'vertical','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','iconWidth':20,'rollOverIconHeight':20,'pressedIconWidth':20,'iconHeight':20,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20}) } else { this.showPopupMedia(this.window_5D41F965_5675_39F4_41B0_7B01300FC8D9, this.video_76330817_51F1_1E5A_41C8_BAE5158F0B37, this.PlayList_5A76566C_5674_EBF4_41CF_3F6D4D2D1E92, '65%', '65%', true, true); this.PlayList_5A76566C_5674_EBF4_41CF_3F6D4D2D1E92.set('selectedIndex', 0); ; this.viewer_uid5B40B619_5674_EB5F_4191_0E2B128E898DVideoPlayer.play();  }"
       }
      ],
      "items": [
       {
        "yaw": 49.63,
        "pitch": -13.33,
        "hfov": 7.7,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 119,
           "class": "ImageResourceLevel",
           "width": 133,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_3_0.png"
          }
         ]
        }
       }
      ]
     },
     {
      "rotationZ": 0,
      "yaw": 49.63,
      "popupMaxWidth": "65%",
      "video": {
       "height": 1080,
       "class": "VideoResource",
       "mp4Url": "media/video_76330817_51F1_1E5A_41C8_BAE5158F0B37.mp4",
       "width": 1920,
       "webmUrl": "media/video_76330817_51F1_1E5A_41C8_BAE5158F0B37.webm"
      },
      "showEasing": "cubic_in",
      "showDuration": 500,
      "loop": false,
      "id": "popup_654F705B_50BD_8733_41D0_F63243597D98",
      "hfov": 7.7,
      "class": "PopupPanoramaOverlay",
      "popupMaxHeight": "65%",
      "hideDuration": 500,
      "rotationX": 0,
      "hideEasing": "cubic_out",
      "autoplay": true,
      "rotationY": 0,
      "pitch": -13.33
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 37.74,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 48.64,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 15,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_5_0_map.gif"
          }
         ]
        },
        "pitch": -8.67
       }
      ],
      "rollOverDisplay": true,
      "id": "overlay_7F84E2BA_55BA_6415_41CF_752037C33378",
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "yaw": 48.64,
        "pitch": -8.67,
        "hfov": 37.74,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 671,
           "class": "ImageResourceLevel",
           "width": 644,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_5_0.png"
          }
         ]
        }
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_t.jpg",
  "id": "panorama_21C1854F_2894_533C_41B2_3F2795CC3254",
  "class": "Panorama",
  "pitch": 0,
  "hfovMax": 120,
  "label": "CENTRAL INSTRUMENTATION FACILITY",
  "hfovMin": 120,
  "hfov": 360,
  "cardboardMenu": "this.Menu_73C1F46F_5695_2FF4_41B1_82E115958A0A",
  "adjacentPanoramas": [
   {
    "backwardYaw": -90.53,
    "class": "AdjacentPanorama",
    "panorama": {
     "vfov": 180,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3040,
          "class": "ImageResourceLevel",
          "width": 6080,
          "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7.jpeg"
         }
        ]
       },
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 47.31,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -156.14,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "class": "ImageResourceLevel",
              "width": 152,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_8_1_0_map.gif"
             }
            ]
           },
           "pitch": -8.2
          }
         ],
         "rollOverDisplay": true,
         "id": "overlay_700D2974_50A2_F9F5_41C1_F0B652530DF3",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "yaw": -156.14,
           "pitch": -8.2,
           "hfov": 47.31,
           "class": "HotspotPanoramaOverlayImage",
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 1108,
              "class": "ImageResourceLevel",
              "width": 847,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_8_0.png"
             }
            ]
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 34.41,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 136.13,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "class": "ImageResourceLevel",
              "width": 142,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_9_1_0_map.gif"
             }
            ]
           },
           "pitch": -8.21
          }
         ],
         "rollOverDisplay": true,
         "id": "overlay_4E373B42_50A6_B90D_41C0_72107BA985FE",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "yaw": 136.13,
           "pitch": -8.21,
           "hfov": 34.41,
           "class": "HotspotPanoramaOverlayImage",
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 840,
              "class": "ImageResourceLevel",
              "width": 599,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_9_0.png"
             }
            ]
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 19.57,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 70.36,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 167,
              "class": "ImageResourceLevel",
              "width": 166,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_10_1_0_map.gif"
             }
            ]
           },
           "pitch": -0.24
          }
         ],
         "rollOverDisplay": true,
         "id": "overlay_705F2532_50A7_890D_4150_A2D46E19681C",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "yaw": 70.36,
           "pitch": -0.24,
           "hfov": 19.57,
           "class": "HotspotPanoramaOverlayImage",
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 334,
              "class": "ImageResourceLevel",
              "width": 333,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_10_0.png"
             }
            ]
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 10.85,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -90.53,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 29,
              "class": "ImageResourceLevel",
              "width": 97,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -20.53
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_3E9F6432_2B58_70BA_419F_5306AE486F84",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254, this.camera_70C245A8_5695_297C_41CF_E798E9EA47DB); this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "items": [
          {
           "yaw": -90.53,
           "pitch": -20.53,
           "hfov": 10.85,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 58,
              "class": "ImageResourceLevel",
              "width": 195,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_0_0.png"
             }
            ]
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 9.42,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -145.01,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 82,
              "class": "ImageResourceLevel",
              "width": 87,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -24.53
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_3C29AFBA_2B58_4FAA_418A_EF7FAC3F6BC3",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.showPopupPanoramaOverlay(this.popup_5E84A72B_5062_8913_41D3_2E436895D709, {'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'borderColor':'#000000','pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'backgroundColorDirection':'vertical','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','iconWidth':20,'rollOverIconHeight':20,'pressedIconWidth':20,'iconHeight':20,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20}, this.ImageResource_4617CE97_507D_BB33_41CC_277230F4FDD7, null, null, null, null, false)"
          }
         ],
         "items": [
          {
           "yaw": -145.01,
           "pitch": -24.53,
           "hfov": 9.42,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 164,
              "class": "ImageResourceLevel",
              "width": 174,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_1_0.png"
             }
            ]
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 9.86,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 86.03,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 25,
              "class": "ImageResourceLevel",
              "width": 85,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -12.6
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_3C08EAB3_2B68_71BA_41C3_88B21B58A8A3",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283, this.camera_733EE597_5695_2954_41D1_D303D068033F); this.mainPlayList.set('selectedIndex', 5)"
          }
         ],
         "items": [
          {
           "yaw": 86.03,
           "pitch": -12.6,
           "hfov": 9.86,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 50,
              "class": "ImageResourceLevel",
              "width": 170,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_2_0.png"
             }
            ]
           }
          }
         ]
        },
        {
         "hfov": 45,
         "class": "TripodCapPanoramaOverlay",
         "rotate": false,
         "inertia": false,
         "id": "panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_tcap0",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "height": 850,
            "class": "ImageResourceLevel",
            "width": 850,
            "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
           }
          ]
         },
         "angle": 0
        },
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 4.52,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 75.22,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 37,
              "class": "ImageResourceLevel",
              "width": 38,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_7_0_0_map.gif"
             }
            ]
           },
           "pitch": -1.82
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_1B6D99BB_50D8_F87E_41A8_78212ADAD698",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_65BD6281_50A2_8B0E_41D1_6A6A3A214872, {'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'borderColor':'#000000','pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'backgroundColorDirection':'vertical','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','iconWidth':20,'rollOverIconHeight':20,'pressedIconWidth':20,'iconHeight':20,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20}) } else { this.showPopupMedia(this.window_5D45E95E_5675_39D4_41BF_85EB21D2176F, this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F, this.PlayList_5A71A66C_5674_EBF4_41D1_C0904051AD56, '65%', '65%', true, true); this.PlayList_5A71A66C_5674_EBF4_41D1_C0904051AD56.set('selectedIndex', 0); ; this.viewer_uid5B4DF61D_5674_EB54_41C1_243197D08BDAVideoPlayer.play();  }"
          }
         ],
         "items": [
          {
           "yaw": 75.22,
           "pitch": -1.82,
           "hfov": 4.52,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 74,
              "class": "ImageResourceLevel",
              "width": 76,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_7_0.png"
             }
            ]
           }
          }
         ]
        },
        {
         "rotationZ": 0,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "height": 640,
            "class": "ImageResourceLevel",
            "width": 1024,
            "url": "media/popup_5E84A72B_5062_8913_41D3_2E436895D709_0_2.jpg"
           }
          ]
         },
         "yaw": -145.01,
         "popupMaxWidth": "65%",
         "id": "popup_5E84A72B_5062_8913_41D3_2E436895D709",
         "showEasing": "cubic_in",
         "hfov": 9.42,
         "class": "PopupPanoramaOverlay",
         "popupMaxHeight": "65%",
         "hideDuration": 500,
         "rotationX": 0,
         "hideEasing": "cubic_out",
         "showDuration": 500,
         "rotationY": 0,
         "pitch": -24.53
        },
        {
         "rotationZ": 0,
         "yaw": 75.22,
         "popupMaxWidth": "65%",
         "video": {
          "height": 1080,
          "class": "VideoResource",
          "mp4Url": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F.mp4",
          "width": 1920,
          "webmUrl": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F.webm"
         },
         "showEasing": "cubic_in",
         "showDuration": 500,
         "loop": false,
         "id": "popup_65BD6281_50A2_8B0E_41D1_6A6A3A214872",
         "hfov": 4.52,
         "class": "PopupPanoramaOverlay",
         "popupMaxHeight": "65%",
         "hideDuration": 500,
         "rotationX": 0,
         "hideEasing": "cubic_out",
         "autoplay": true,
         "rotationY": 0,
         "pitch": -1.82
        },
        {
         "rotationZ": 0,
         "yaw": 137.93,
         "popupMaxWidth": "65%",
         "video": {
          "height": 1080,
          "class": "VideoResource",
          "mp4Url": "media/video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6.mp4",
          "width": 1920,
          "webmUrl": "media/video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6.webm"
         },
         "showEasing": "cubic_in",
         "showDuration": 500,
         "loop": false,
         "id": "popup_654154AD_50A7_8F17_41CC_033E6CF6538E",
         "hfov": 6.77,
         "class": "PopupPanoramaOverlay",
         "popupMaxHeight": "65%",
         "hideDuration": 500,
         "rotationX": 0,
         "hideEasing": "cubic_out",
         "autoplay": true,
         "rotationY": 0,
         "pitch": -15.94
        },
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 6.77,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 137.93,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 59,
              "class": "ImageResourceLevel",
              "width": 59,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_11_0_0_map.gif"
             }
            ]
           },
           "pitch": -15.94
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_67818DCD_50A7_7917_41B3_206D6A17D08A",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_654154AD_50A7_8F17_41CC_033E6CF6538E, {'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'borderColor':'#000000','pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'backgroundColorDirection':'vertical','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','iconWidth':20,'rollOverIconHeight':20,'pressedIconWidth':20,'iconHeight':20,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20}) } else { this.showPopupMedia(this.window_5D44F95F_5675_39D4_41D4_E4C2ECE86D1A, this.video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6, this.PlayList_5A71666D_5674_EBF4_4181_91AE77033B38, '65%', '65%', true, true); this.PlayList_5A71666D_5674_EBF4_4181_91AE77033B38.set('selectedIndex', 0); ; this.viewer_uid5B4D561E_5674_EB54_41BF_5B0CD18A4B50VideoPlayer.play();  }"
          }
         ],
         "items": [
          {
           "yaw": 137.93,
           "pitch": -15.94,
           "hfov": 6.77,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 119,
              "class": "ImageResourceLevel",
              "width": 119,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_11_0.png"
             }
            ]
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 61.11,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -161.22,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 15,
              "class": "ImageResourceLevel",
              "width": 16,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_12_0_map.gif"
             }
            ]
           },
           "pitch": -7.41
          }
         ],
         "rollOverDisplay": true,
         "id": "overlay_7A16AEFE_5599_BC0D_41C5_F81A67ACC610",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "yaw": -161.22,
           "pitch": -7.41,
           "hfov": 61.11,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 1002,
              "class": "ImageResourceLevel",
              "width": 1040,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_12_0.png"
             }
            ]
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 33.27,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 137.64,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 22,
              "class": "ImageResourceLevel",
              "width": 16,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_13_0_map.gif"
             }
            ]
           },
           "pitch": -8.59
          }
         ],
         "rollOverDisplay": true,
         "id": "overlay_6091554F_559F_EC0B_41D5_721D732FC14C",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "yaw": 137.64,
           "pitch": -8.59,
           "hfov": 33.27,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 786,
              "class": "ImageResourceLevel",
              "width": 568,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_13_0.png"
             }
            ]
           }
          }
         ]
        },
        {
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "hfov": 23.54,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 71.65,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 18,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_14_0_map.gif"
             }
            ]
           },
           "pitch": -0.17
          }
         ],
         "rollOverDisplay": true,
         "id": "overlay_632176B1_5596_AC17_41C7_79D4D7F1A4DC",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "yaw": 71.65,
           "pitch": -0.17,
           "hfov": 23.54,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 337,
              "class": "ImageResourceLevel",
              "width": 397,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_14_0.png"
             }
            ]
           }
          }
         ]
        }
       ]
      }
     ],
     "thumbnailUrl": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_t.jpg",
     "id": "panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7",
     "class": "Panorama",
     "pitch": 0,
     "hfovMax": 120,
     "label": "8",
     "hfovMin": 120,
     "hfov": 360,
     "cardboardMenu": "this.Menu_73C1F46F_5695_2FF4_41B1_82E115958A0A",
     "adjacentPanoramas": [
      {
       "backwardYaw": -89.79,
       "class": "AdjacentPanorama",
       "panorama": {
        "vfov": 180,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3040,
             "class": "ImageResourceLevel",
             "width": 6080,
             "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_hq.jpeg"
            },
            {
             "height": 1608,
             "class": "ImageResourceLevel",
             "width": 3217,
             "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283.jpeg"
            }
           ]
          },
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 83.7,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 35.97,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 132,
                 "class": "ImageResourceLevel",
                 "width": 200,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_8_1_0_map.gif"
                }
               ]
              },
              "pitch": -5.37
             }
            ],
            "rollOverDisplay": true,
            "id": "overlay_4DC82B90_50A2_990D_41D2_364DA84C6CC2",
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "yaw": 35.97,
              "pitch": -5.37,
              "hfov": 83.7,
              "class": "HotspotPanoramaOverlayImage",
              "roll": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 1150,
                 "class": "ImageResourceLevel",
                 "width": 1733,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_8_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 9.57,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 102.3,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 63,
                 "class": "ImageResourceLevel",
                 "width": 81,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_9_1_0_map.gif"
                }
               ]
              },
              "pitch": -6.19
             }
            ],
            "rollOverDisplay": true,
            "id": "overlay_71A486BE_50BE_8B75_41CC_0933C5D197EA",
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "yaw": 102.3,
              "pitch": -6.19,
              "hfov": 9.57,
              "class": "HotspotPanoramaOverlayImage",
              "roll": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 127,
                 "class": "ImageResourceLevel",
                 "width": 162,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_9_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 46.53,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 154.43,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 200,
                 "class": "ImageResourceLevel",
                 "width": 132,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_10_1_0_map.gif"
                }
               ]
              },
              "pitch": -7.57
             }
            ],
            "rollOverDisplay": true,
            "id": "overlay_4FE1B952_50BD_790D_41CE_96900BBBAB6A",
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "yaw": 154.43,
              "pitch": -7.57,
              "hfov": 46.53,
              "class": "HotspotPanoramaOverlayImage",
              "roll": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 1253,
                 "class": "ImageResourceLevel",
                 "width": 832,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_10_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 10.82,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 86.11,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 26,
                 "class": "ImageResourceLevel",
                 "width": 94,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -13.9
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_31185C58_2B78_B0F6_41B4_28B9C2F6EC48",
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB, this.camera_7356A518_5695_295C_41A4_2B18D3AC6403); this.mainPlayList.set('selectedIndex', 6)"
             }
            ],
            "items": [
             {
              "yaw": 86.11,
              "pitch": -13.9,
              "hfov": 10.82,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 52,
                 "class": "ImageResourceLevel",
                 "width": 188,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_1_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 13.74,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -89.79,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 44,
                 "class": "ImageResourceLevel",
                 "width": 130,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_4_0_0_map.gif"
                }
               ]
              },
              "pitch": -27.59
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_31B9ED69_2B68_D0D6_41BA_E574FC153520",
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7, this.camera_734B24ED_5695_28F4_41CA_140E74255286); this.mainPlayList.set('selectedIndex', 4)"
             }
            ],
            "items": [
             {
              "yaw": -89.79,
              "pitch": -27.59,
              "hfov": 13.74,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 88,
                 "class": "ImageResourceLevel",
                 "width": 261,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_4_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "hfov": 45,
            "class": "TripodCapPanoramaOverlay",
            "rotate": false,
            "inertia": false,
            "id": "panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_tcap0",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "height": 850,
               "class": "ImageResourceLevel",
               "width": 850,
               "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
              }
             ]
            },
            "angle": 0
           },
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 10.31,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 150.4,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 94,
                 "class": "ImageResourceLevel",
                 "width": 96,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_5_0_0_map.gif"
                }
               ]
              },
              "pitch": -25.31
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_1B537871_50DB_B80A_41BB_6691B31B4B6D",
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_65155EA1_50A6_9B0F_41A2_DA50D7C2A9FC, {'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'borderColor':'#000000','pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'backgroundColorDirection':'vertical','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','iconWidth':20,'rollOverIconHeight':20,'pressedIconWidth':20,'iconHeight':20,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20}) } else { this.showPopupMedia(this.window_5D479960_5675_39EC_41BC_5CEBD017DFE0, this.video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6, this.PlayList_5A71266E_5674_EBF4_41B5_CDC28585DBC3, '65%', '65%', true, true); this.PlayList_5A71266E_5674_EBF4_41B5_CDC28585DBC3.set('selectedIndex', 0); ; this.viewer_uid5B4FB621_5674_EB6C_41A2_3A90F4D6928EVideoPlayer.play();  }"
             }
            ],
            "items": [
             {
              "yaw": 150.4,
              "pitch": -25.31,
              "hfov": 10.31,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 188,
                 "class": "ImageResourceLevel",
                 "width": 192,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_5_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 4.75,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 101.85,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 44,
                 "class": "ImageResourceLevel",
                 "width": 40,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_6_0_0_map.gif"
                }
               ]
              },
              "pitch": -6.66
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_1B004E27_50DB_F816_41C7_2B709D4218B7",
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_6A02F7F5_50A2_88F7_41CF_48C2226BE573, {'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'borderColor':'#000000','pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'backgroundColorDirection':'vertical','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','iconWidth':20,'rollOverIconHeight':20,'pressedIconWidth':20,'iconHeight':20,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20}) } else { this.showPopupMedia(this.window_5D46A960_5675_39EC_41AE_C09C8A98295C, this.video_79E6AF2E_51F1_724B_41D0_772ED7CFF496, this.PlayList_5A70F66E_5674_EBF4_41C3_5BB4281CC7F8, '65%', '65%', true, true); this.PlayList_5A70F66E_5674_EBF4_41C3_5BB4281CC7F8.set('selectedIndex', 0); ; this.viewer_uid5B4F3622_5674_EB6C_419D_4D734B0AB41DVideoPlayer.play();  }"
             }
            ],
            "items": [
             {
              "yaw": 101.85,
              "pitch": -6.66,
              "hfov": 4.75,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 88,
                 "class": "ImageResourceLevel",
                 "width": 80,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_6_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 6.86,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 48.94,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 59,
                 "class": "ImageResourceLevel",
                 "width": 59,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_7_0_0_map.gif"
                }
               ]
              },
              "pitch": -13.07
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_1C1EDF6C_50DB_B81B_417E_8CD5BB4FD66B",
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_67FA235E_50A5_8935_41D0_DC909E301520, {'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'borderColor':'#000000','pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'backgroundColorDirection':'vertical','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','iconWidth':20,'rollOverIconHeight':20,'pressedIconWidth':20,'iconHeight':20,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20}) } else { this.showPopupMedia(this.window_5D474961_5675_39EC_41A7_723D20DEB171, this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F, this.PlayList_5A70B66F_5674_EBF4_41D3_5C49F74520E4, '65%', '65%', true, true); this.PlayList_5A70B66F_5674_EBF4_41D3_5C49F74520E4.set('selectedIndex', 0); ; this.viewer_uid5B4ED623_5674_EB6C_41C0_D3EB410DE360VideoPlayer.play();  }"
             }
            ],
            "items": [
             {
              "yaw": 48.94,
              "pitch": -13.07,
              "hfov": 6.86,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 119,
                 "class": "ImageResourceLevel",
                 "width": 119,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_7_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "rotationZ": 0,
            "yaw": 150.4,
            "popupMaxWidth": "65%",
            "video": {
             "height": 1080,
             "class": "VideoResource",
             "mp4Url": "media/video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6.mp4",
             "width": 1920,
             "webmUrl": "media/video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6.webm"
            },
            "showEasing": "cubic_in",
            "showDuration": 500,
            "loop": false,
            "id": "popup_65155EA1_50A6_9B0F_41A2_DA50D7C2A9FC",
            "hfov": 10.31,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "65%",
            "hideDuration": 500,
            "rotationX": 0,
            "hideEasing": "cubic_out",
            "autoplay": true,
            "rotationY": 0,
            "pitch": -25.31
           },
           {
            "rotationZ": 0,
            "yaw": 48.94,
            "popupMaxWidth": "65%",
            "video": {
             "height": 1080,
             "class": "VideoResource",
             "mp4Url": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F.mp4",
             "width": 1920,
             "webmUrl": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F.webm"
            },
            "showEasing": "cubic_in",
            "showDuration": 500,
            "loop": false,
            "id": "popup_67FA235E_50A5_8935_41D0_DC909E301520",
            "hfov": 6.86,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "65%",
            "hideDuration": 500,
            "rotationX": 0,
            "hideEasing": "cubic_out",
            "autoplay": true,
            "rotationY": 0,
            "pitch": -13.07
           },
           {
            "rotationZ": 0,
            "yaw": 101.85,
            "popupMaxWidth": "65%",
            "video": {
             "height": 1080,
             "class": "VideoResource",
             "mp4Url": "media/video_79E6AF2E_51F1_724B_41D0_772ED7CFF496.mp4",
             "width": 1920,
             "webmUrl": "media/video_79E6AF2E_51F1_724B_41D0_772ED7CFF496.webm"
            },
            "showEasing": "cubic_in",
            "showDuration": 500,
            "loop": false,
            "id": "popup_6A02F7F5_50A2_88F7_41CF_48C2226BE573",
            "hfov": 4.75,
            "class": "PopupPanoramaOverlay",
            "popupMaxHeight": "65%",
            "hideDuration": 500,
            "rotationX": 0,
            "hideEasing": "cubic_out",
            "autoplay": true,
            "rotationY": 0,
            "pitch": -6.66
           },
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 83.97,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 36.65,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 31,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_11_0_map.gif"
                }
               ]
              },
              "pitch": -6.19
             }
            ],
            "rollOverDisplay": true,
            "id": "overlay_604B53F8_556A_6415_41C6_A6A76CC85C61",
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "yaw": 36.65,
              "pitch": -6.19,
              "hfov": 83.97,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 728,
                 "class": "ImageResourceLevel",
                 "width": 1426,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_11_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 44.66,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 154.63,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 23,
                 "class": "ImageResourceLevel",
                 "width": 16,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_12_0_map.gif"
                }
               ]
              },
              "pitch": -6.8
             }
            ],
            "rollOverDisplay": true,
            "id": "overlay_11F39650_556B_EC15_41C6_67197B84684D",
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "yaw": 154.63,
              "pitch": -6.8,
              "hfov": 44.66,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 1105,
                 "class": "ImageResourceLevel",
                 "width": 759,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_12_0.png"
                }
               ]
              }
             }
            ]
           },
           {
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "hfov": 12.43,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 101.59,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 19,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_13_0_map.gif"
                }
               ]
              },
              "pitch": -4.14
             }
            ],
            "rollOverDisplay": true,
            "id": "overlay_1C751C7D_5576_7C0F_41C1_79D06A2F7978",
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "yaw": 101.59,
              "pitch": -4.14,
              "hfov": 12.43,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 173,
                 "class": "ImageResourceLevel",
                 "width": 210,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_13_0.png"
                }
               ]
              }
             }
            ]
           }
          ]
         }
        ],
        "thumbnailUrl": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_t.jpg",
        "id": "panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283",
        "class": "Panorama",
        "pitch": 0,
        "hfovMax": 120,
        "label": "9",
        "hfovMin": 120,
        "hfov": 360,
        "cardboardMenu": "this.Menu_73C1F46F_5695_2FF4_41B1_82E115958A0A",
        "adjacentPanoramas": [
         {
          "backwardYaw": 86.03,
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7",
          "distance": 1,
          "yaw": -89.79
         },
         {
          "backwardYaw": 158.9,
          "class": "AdjacentPanorama",
          "panorama": {
           "vfov": 180,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3040,
                "class": "ImageResourceLevel",
                "width": 6080,
                "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_hq.jpeg"
               },
               {
                "height": 1608,
                "class": "ImageResourceLevel",
                "width": 3217,
                "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB.jpeg"
               }
              ]
             },
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 30.09,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 139.67,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 71,
                    "class": "ImageResourceLevel",
                    "width": 200,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_4_1_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -8.48
                }
               ],
               "rollOverDisplay": true,
               "id": "overlay_4B34AF87_50A2_F913_41CE_9C309C78BCE3",
               "enabledInCardboard": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "yaw": 139.67,
                 "pitch": -8.48,
                 "hfov": 30.09,
                 "class": "HotspotPanoramaOverlayImage",
                 "roll": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 187,
                    "class": "ImageResourceLevel",
                    "width": 520,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_4_0.png"
                   }
                  ]
                 }
                }
               ]
              },
              {
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 11.36,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 158.9,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 31,
                    "class": "ImageResourceLevel",
                    "width": 104,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -23.27
                }
               ],
               "rollOverDisplay": false,
               "id": "overlay_35AAC376_2B68_D0BA_41BB_7923190EDEF6",
               "enabledInCardboard": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283, this.camera_739464BB_5695_2F5C_41AE_CE08DF712F68); this.mainPlayList.set('selectedIndex', 5)"
                }
               ],
               "items": [
                {
                 "yaw": 158.9,
                 "pitch": -23.27,
                 "hfov": 11.36,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 63,
                    "class": "ImageResourceLevel",
                    "width": 208,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_1_0.png"
                   }
                  ]
                 }
                }
               ]
              },
              {
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 13.63,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -140.96,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 44,
                    "class": "ImageResourceLevel",
                    "width": 130,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -28.46
                }
               ],
               "rollOverDisplay": false,
               "id": "overlay_35999D8F_2B69_B069_41A3_BFD7D3419C03",
               "enabledInCardboard": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3, this.camera_738604A9_5695_2F7C_41BD_52D9D5B1BCC9); this.mainPlayList.set('selectedIndex', 7)"
                }
               ],
               "items": [
                {
                 "yaw": -140.96,
                 "pitch": -28.46,
                 "hfov": 13.63,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 88,
                    "class": "ImageResourceLevel",
                    "width": 261,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_2_0.png"
                   }
                  ]
                 }
                }
               ]
              },
              {
               "hfov": 45,
               "class": "TripodCapPanoramaOverlay",
               "rotate": false,
               "inertia": false,
               "id": "panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_tcap0",
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "height": 850,
                  "class": "ImageResourceLevel",
                  "width": 850,
                  "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
                 }
                ]
               },
               "angle": 0
              },
              {
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 6.74,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 147.92,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 57,
                    "class": "ImageResourceLevel",
                    "width": 57,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_3_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -6.49
                }
               ],
               "rollOverDisplay": false,
               "id": "overlay_1DDF29D8_50D8_B83A_41D0_BAC83EF14B05",
               "enabledInCardboard": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_66D14DEA_50A2_F91D_41C8_77D742AED913, {'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'borderColor':'#000000','pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'backgroundColorDirection':'vertical','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','iconWidth':20,'rollOverIconHeight':20,'pressedIconWidth':20,'iconHeight':20,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20}) } else { this.showPopupMedia(this.window_5D475963_5675_39EC_41C5_EDCF1D1801D0, this.video_79E6AF2E_51F1_724B_41D0_772ED7CFF496, this.PlayList_5A70866F_5674_EBF3_41AC_95E00F7268B1, '95%', '95%', true, true); this.PlayList_5A70866F_5674_EBF3_41AC_95E00F7268B1.set('selectedIndex', 0); ; this.viewer_uid5B48D625_5674_EB74_41CC_C373B4E16637VideoPlayer.play();  }"
                }
               ],
               "items": [
                {
                 "yaw": 147.92,
                 "pitch": -6.49,
                 "hfov": 6.74,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 114,
                    "class": "ImageResourceLevel",
                    "width": 114,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_3_0.png"
                   }
                  ]
                 }
                }
               ]
              },
              {
               "rotationZ": 0,
               "yaw": 147.92,
               "popupMaxWidth": "95%",
               "video": {
                "height": 1080,
                "class": "VideoResource",
                "mp4Url": "media/video_79E6AF2E_51F1_724B_41D0_772ED7CFF496.mp4",
                "width": 1920,
                "webmUrl": "media/video_79E6AF2E_51F1_724B_41D0_772ED7CFF496.webm"
               },
               "showEasing": "cubic_in",
               "showDuration": 500,
               "loop": false,
               "id": "popup_66D14DEA_50A2_F91D_41C8_77D742AED913",
               "hfov": 6.74,
               "class": "PopupPanoramaOverlay",
               "popupMaxHeight": "95%",
               "hideDuration": 500,
               "rotationX": 0,
               "hideEasing": "cubic_out",
               "autoplay": true,
               "rotationY": 0,
               "pitch": -6.49
              },
              {
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "hfov": 29,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 139.29,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 48,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_5_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -8.06
                }
               ],
               "rollOverDisplay": true,
               "id": "overlay_1E0E8B5C_5579_A40D_41B3_4D2DA6A0E55F",
               "enabledInCardboard": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "yaw": 139.29,
                 "pitch": -8.06,
                 "hfov": 29,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 164,
                    "class": "ImageResourceLevel",
                    "width": 494,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_5_0.png"
                   }
                  ]
                 }
                }
               ]
              }
             ]
            }
           ],
           "thumbnailUrl": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_t.jpg",
           "id": "panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB",
           "class": "Panorama",
           "pitch": 0,
           "hfovMax": 120,
           "label": "10",
           "hfovMin": 120,
           "hfov": 360,
           "cardboardMenu": "this.Menu_73C1F46F_5695_2FF4_41B1_82E115958A0A",
           "adjacentPanoramas": [
            {
             "backwardYaw": 99.8,
             "class": "AdjacentPanorama",
             "panorama": {
              "vfov": 180,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3040,
                   "class": "ImageResourceLevel",
                   "width": 6080,
                   "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "class": "ImageResourceLevel",
                   "width": 3217,
                   "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3.jpeg"
                  }
                 ]
                },
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "hfov": 13.67,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 99.8,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 44,
                       "class": "ImageResourceLevel",
                       "width": 130,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_6_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -28.11
                   }
                  ],
                  "rollOverDisplay": false,
                  "id": "overlay_1A3D2BE2_2B3B_F7DA_41B0_43BE97FE8F12",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB, this.camera_708B75CB_5695_293C_41A4_01FB9C87137C); this.mainPlayList.set('selectedIndex', 6)"
                   }
                  ],
                  "items": [
                   {
                    "yaw": 99.8,
                    "pitch": -28.11,
                    "hfov": 13.67,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 88,
                       "class": "ImageResourceLevel",
                       "width": 261,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_6_0.png"
                      }
                     ]
                    }
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "hfov": 10.7,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -95.11,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 27,
                       "class": "ImageResourceLevel",
                       "width": 102,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_7_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -28.68
                   }
                  ],
                  "rollOverDisplay": false,
                  "id": "overlay_1AB8B966_2B38_70DB_41B4_EE57D7A8147E",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B, this.camera_70E6B5BA_5695_295C_41CF_87F215445751); this.mainPlayList.set('selectedIndex', 8)"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -95.11,
                    "pitch": -28.68,
                    "hfov": 10.7,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 54,
                       "class": "ImageResourceLevel",
                       "width": 205,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_7_0.png"
                      }
                     ]
                    }
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "hfov": 5.04,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -92.84,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 14,
                       "class": "ImageResourceLevel",
                       "width": 44,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_8_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -14.95
                   }
                  ],
                  "rollOverDisplay": false,
                  "id": "overlay_18D981A3_2B28_F05A_41B7_CFB6BC709F32",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 9)"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -92.84,
                    "pitch": -14.95,
                    "hfov": 5.04,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 29,
                       "class": "ImageResourceLevel",
                       "width": 88,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_8_0.png"
                      }
                     ]
                    }
                   }
                  ]
                 },
                 {
                  "hfov": 45,
                  "class": "TripodCapPanoramaOverlay",
                  "rotate": false,
                  "inertia": false,
                  "id": "panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_tcap0",
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "height": 850,
                     "class": "ImageResourceLevel",
                     "width": 850,
                     "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
                    }
                   ]
                  },
                  "angle": 0
                 },
                 {
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "hfov": 27.06,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -54.35,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 200,
                       "class": "ImageResourceLevel",
                       "width": 168,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_11_1_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -13.03
                   }
                  ],
                  "rollOverDisplay": true,
                  "id": "overlay_024F0E0F_5696_BC0B_41D1_5B7597DBDC1C",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -54.35,
                    "pitch": -13.03,
                    "hfov": 27.06,
                    "class": "HotspotPanoramaOverlayImage",
                    "roll": 0,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 553,
                       "class": "ImageResourceLevel",
                       "width": 465,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_11_0.png"
                      }
                     ]
                    }
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "hfov": 8.04,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -53.75,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 68,
                       "class": "ImageResourceLevel",
                       "width": 68,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_12_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -6.36
                   }
                  ],
                  "rollOverDisplay": false,
                  "id": "overlay_181AEE71_569A_9C17_41A1_24B8AF035558",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.showPopupPanoramaOverlay(this.popup_19B07CA2_569A_9C35_41C1_C421D3075B18, {'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'borderColor':'#000000','pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'backgroundColorDirection':'vertical','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','iconWidth':20,'rollOverIconHeight':20,'pressedIconWidth':20,'iconHeight':20,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20}, this.ImageResource_2D7F042F_56B9_AC0A_41C5_A957BBD74718, null, null, null, null, false)"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -53.75,
                    "pitch": -6.36,
                    "hfov": 8.04,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 136,
                       "class": "ImageResourceLevel",
                       "width": 136,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_12_0.png"
                      }
                     ]
                    }
                   }
                  ]
                 },
                 {
                  "rotationZ": 0,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "height": 640,
                     "class": "ImageResourceLevel",
                     "width": 1024,
                     "url": "media/popup_19B07CA2_569A_9C35_41C1_C421D3075B18_0_2.jpg"
                    }
                   ]
                  },
                  "yaw": -53.75,
                  "popupMaxWidth": "45%",
                  "id": "popup_19B07CA2_569A_9C35_41C1_C421D3075B18",
                  "showEasing": "cubic_in",
                  "hfov": 8.04,
                  "class": "PopupPanoramaOverlay",
                  "popupMaxHeight": "45%",
                  "hideDuration": 500,
                  "rotationX": 0,
                  "hideEasing": "cubic_out",
                  "showDuration": 500,
                  "rotationY": 0,
                  "pitch": -6.36
                 },
                 {
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "hfov": 28.51,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -54.35,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 18,
                       "class": "ImageResourceLevel",
                       "width": 16,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_13_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -13.95
                   }
                  ],
                  "rollOverDisplay": true,
                  "id": "overlay_06CE67FE_569B_AC0D_41BC_CE75F7D68477",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -54.35,
                    "pitch": -13.95,
                    "hfov": 28.51,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 575,
                       "class": "ImageResourceLevel",
                       "width": 496,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_13_0.png"
                      }
                     ]
                    }
                   }
                  ]
                 }
                ]
               }
              ],
              "thumbnailUrl": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_t.jpg",
              "id": "panorama_21C19075_2894_B1EC_41C2_706B0713E1F3",
              "class": "Panorama",
              "pitch": 0,
              "hfovMax": 120,
              "label": "11",
              "hfovMin": 120,
              "hfov": 360,
              "cardboardMenu": "this.Menu_73C1F46F_5695_2FF4_41B1_82E115958A0A",
              "adjacentPanoramas": [
               {
                "backwardYaw": 85.77,
                "class": "AdjacentPanorama",
                "panorama": {
                 "vfov": 180,
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3040,
                      "class": "ImageResourceLevel",
                      "width": 6080,
                      "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_hq.jpeg"
                     },
                     {
                      "height": 1608,
                      "class": "ImageResourceLevel",
                      "width": 3217,
                      "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B.jpeg"
                     }
                    ]
                   },
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "hfov": 45,
                     "class": "TripodCapPanoramaOverlay",
                     "rotate": false,
                     "inertia": false,
                     "id": "panorama_21C35B31_2894_D764_41B0_8E768B049B9B_tcap0",
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "height": 850,
                        "class": "ImageResourceLevel",
                        "width": 850,
                        "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
                       }
                      ]
                     },
                     "angle": 0
                    },
                    {
                     "rotationZ": 0,
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "height": 640,
                        "class": "ImageResourceLevel",
                        "width": 1024,
                        "url": "media/popup_0690991F_50C8_9836_41B5_3F1A35404AF0_0_2.jpg"
                       }
                      ]
                     },
                     "yaw": -34.31,
                     "popupMaxWidth": "65%",
                     "id": "popup_0690991F_50C8_9836_41B5_3F1A35404AF0",
                     "showEasing": "cubic_in",
                     "hfov": 6,
                     "class": "PopupPanoramaOverlay",
                     "popupMaxHeight": "65%",
                     "hideDuration": 500,
                     "rotationX": 0,
                     "hideEasing": "cubic_out",
                     "showDuration": 500,
                     "rotationY": 0,
                     "pitch": -31.55
                    },
                    {
                     "rotationZ": 0,
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "height": 640,
                        "class": "ImageResourceLevel",
                        "width": 1024,
                        "url": "media/popup_0375FAC7_50CF_F816_41A2_8895EB06B570_0_2.jpg"
                       }
                      ]
                     },
                     "yaw": -74.75,
                     "popupMaxWidth": "65%",
                     "id": "popup_0375FAC7_50CF_F816_41A2_8895EB06B570",
                     "showEasing": "cubic_in",
                     "hfov": 4.37,
                     "class": "PopupPanoramaOverlay",
                     "popupMaxHeight": "65%",
                     "hideDuration": 500,
                     "rotationX": 0,
                     "hideEasing": "cubic_out",
                     "showDuration": 500,
                     "rotationY": 0,
                     "pitch": -9.15
                    },
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "hfov": 30.37,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -150.57,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 141,
                          "class": "ImageResourceLevel",
                          "width": 200,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_11_1_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -14.57
                      }
                     ],
                     "rollOverDisplay": true,
                     "id": "overlay_4867AA68_5062_BB1D_41BF_C26299F50422",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -150.57,
                       "pitch": -14.57,
                       "hfov": 30.37,
                       "class": "HotspotPanoramaOverlayImage",
                       "roll": 0,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 373,
                          "class": "ImageResourceLevel",
                          "width": 525,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_11_0.png"
                         }
                        ]
                       }
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "hfov": 28.98,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -33.09,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 146,
                          "class": "ImageResourceLevel",
                          "width": 200,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_12_1_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -25.53
                      }
                     ],
                     "rollOverDisplay": true,
                     "id": "overlay_48558740_505D_890D_41B6_2F030622A51A",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -33.09,
                       "pitch": -25.53,
                       "hfov": 28.98,
                       "class": "HotspotPanoramaOverlayImage",
                       "roll": 0,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 366,
                          "class": "ImageResourceLevel",
                          "width": 500,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_12_0.png"
                         }
                        ]
                       }
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "hfov": 22.4,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -76.02,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 116,
                          "class": "ImageResourceLevel",
                          "width": 191,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_13_1_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -12.46
                      }
                     ],
                     "rollOverDisplay": true,
                     "id": "overlay_484C769E_505F_8B35_41BB_C7F774ED6BF5",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -76.02,
                       "pitch": -12.46,
                       "hfov": 22.4,
                       "class": "HotspotPanoramaOverlayImage",
                       "roll": 0,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 232,
                          "class": "ImageResourceLevel",
                          "width": 383,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_13_0.png"
                         }
                        ]
                       }
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "hfov": 70.36,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 131.05,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 112,
                          "class": "ImageResourceLevel",
                          "width": 200,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_14_1_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -5.96
                      }
                     ],
                     "rollOverDisplay": true,
                     "id": "overlay_478F55C9_50A2_891F_41CF_19F27DE6B1BE",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "yaw": 131.05,
                       "pitch": -5.96,
                       "hfov": 70.36,
                       "class": "HotspotPanoramaOverlayImage",
                       "roll": 0,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 766,
                          "class": "ImageResourceLevel",
                          "width": 1364,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_14_0.png"
                         }
                        ]
                       }
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "hfov": 6.9,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 123.46,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 59,
                          "class": "ImageResourceLevel",
                          "width": 59,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_10_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -11.76
                      }
                     ],
                     "rollOverDisplay": false,
                     "id": "overlay_4720C492_506F_8F0D_41CE_57EC0985FAAA",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_673AFF1D_50AD_B937_41CD_D84791F4B91A, {'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'borderColor':'#000000','pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'backgroundColorDirection':'vertical','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','iconWidth':20,'rollOverIconHeight':20,'pressedIconWidth':20,'iconHeight':20,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20}) } else { this.showPopupMedia(this.window_5D469964_5675_39F4_41C0_34AFBA74F3AC, this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F, this.PlayList_5A704670_5674_EBEC_41B9_156CA3DB792C, '95%', '95%', true, true); this.PlayList_5A704670_5674_EBEC_41B9_156CA3DB792C.set('selectedIndex', 0); ; this.viewer_uid5B35962A_5674_EB7C_41D5_503FB53730E9VideoPlayer.play();  }"
                      }
                     ],
                     "items": [
                      {
                       "yaw": 123.46,
                       "pitch": -11.76,
                       "hfov": 6.9,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 119,
                          "class": "ImageResourceLevel",
                          "width": 119,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_10_0.png"
                         }
                        ]
                       }
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "hfov": 6.93,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -146.58,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 59,
                          "class": "ImageResourceLevel",
                          "width": 59,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_9_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -10.28
                      }
                     ],
                     "rollOverDisplay": false,
                     "id": "overlay_5E157E3E_5065_9B75_41CA_60C9EAA501D8",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_6AC20B05_50AE_F917_41AF_5EBBE7A3AAC3, {'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'borderColor':'#000000','pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'backgroundColorDirection':'vertical','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','iconWidth':20,'rollOverIconHeight':20,'pressedIconWidth':20,'iconHeight':20,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20}) } else { this.showPopupMedia(this.window_5D410964_5675_39F4_41D1_A91997E498C1, this.video_76174C24_51F1_167E_41CF_523D5490D758, this.PlayList_5A701671_5674_EBEC_41D0_4F17A125285D, '65%', '65%', true, true); this.PlayList_5A701671_5674_EBEC_41D0_4F17A125285D.set('selectedIndex', 0); ; this.viewer_uid5B35462B_5674_EB7C_419F_8D1A3288EC58VideoPlayer.play();  }"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -146.58,
                       "pitch": -10.28,
                       "hfov": 6.93,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 119,
                          "class": "ImageResourceLevel",
                          "width": 119,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_9_0.png"
                         }
                        ]
                       }
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "hfov": 11.18,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -104.48,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 27,
                          "class": "ImageResourceLevel",
                          "width": 102,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_8_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -22.58
                      }
                     ],
                     "rollOverDisplay": false,
                     "id": "overlay_6B17C17C_2B6B_B0AE_41A3_BBAAB5D8D8B2",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB, this.camera_730B456F_5695_29F4_41D2_F0B0C9B30287); this.mainPlayList.set('selectedIndex', 9)"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -104.48,
                       "pitch": -22.58,
                       "hfov": 11.18,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 54,
                          "class": "ImageResourceLevel",
                          "width": 204,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_8_0.png"
                         }
                        ]
                       }
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "hfov": 13.35,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 85.77,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 33,
                          "class": "ImageResourceLevel",
                          "width": 117,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_7_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -16.65
                      }
                     ],
                     "rollOverDisplay": false,
                     "id": "overlay_6AE36307_2B69_F05A_41C0_F5F22EC988E1",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3, this.camera_7362F544_5695_2934_41A0_559471BF54EE); this.mainPlayList.set('selectedIndex', 7)"
                      }
                     ],
                     "items": [
                      {
                       "yaw": 85.77,
                       "pitch": -16.65,
                       "hfov": 13.35,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 66,
                          "class": "ImageResourceLevel",
                          "width": 235,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_7_0.png"
                         }
                        ]
                       }
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "hfov": 4.37,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -74.75,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 41,
                          "class": "ImageResourceLevel",
                          "width": 37,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -9.15
                      }
                     ],
                     "rollOverDisplay": false,
                     "id": "overlay_19088C1E_2B58_506A_41C1_5D847567D393",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.showPopupPanoramaOverlay(this.popup_0375FAC7_50CF_F816_41A2_8895EB06B570, {'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'borderColor':'#000000','pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'backgroundColorDirection':'vertical','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','iconWidth':20,'rollOverIconHeight':20,'pressedIconWidth':20,'iconHeight':20,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20}, this.ImageResource_47E090CC_5062_8715_41B8_632E16047E40, null, null, null, null, false)"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -74.75,
                       "pitch": -9.15,
                       "hfov": 4.37,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 83,
                          "class": "ImageResourceLevel",
                          "width": 74,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_1_0.png"
                         }
                        ]
                       }
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "hfov": 6,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -34.31,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 59,
                          "class": "ImageResourceLevel",
                          "width": 59,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -31.55
                      }
                     ],
                     "rollOverDisplay": false,
                     "id": "overlay_185C2515_2B58_D07E_41A1_5BD0044513B5",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.showPopupPanoramaOverlay(this.popup_0690991F_50C8_9836_41B5_3F1A35404AF0, {'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'borderColor':'#000000','pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'backgroundColorDirection':'vertical','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','iconWidth':20,'rollOverIconHeight':20,'pressedIconWidth':20,'iconHeight':20,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20}, this.ImageResource_47E190CB_5062_8713_41B0_E16DED267F7E, null, null, null, null, false)"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -34.31,
                       "pitch": -31.55,
                       "hfov": 6,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 119,
                          "class": "ImageResourceLevel",
                          "width": 119,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_0_0.png"
                         }
                        ]
                       }
                      }
                     ]
                    },
                    {
                     "rotationZ": 0,
                     "yaw": -146.58,
                     "popupMaxWidth": "65%",
                     "video": {
                      "height": 1080,
                      "class": "VideoResource",
                      "mp4Url": "media/video_76174C24_51F1_167E_41CF_523D5490D758.mp4",
                      "width": 1920,
                      "webmUrl": "media/video_76174C24_51F1_167E_41CF_523D5490D758.webm"
                     },
                     "showEasing": "cubic_in",
                     "showDuration": 500,
                     "loop": false,
                     "id": "popup_6AC20B05_50AE_F917_41AF_5EBBE7A3AAC3",
                     "hfov": 6.93,
                     "class": "PopupPanoramaOverlay",
                     "popupMaxHeight": "65%",
                     "hideDuration": 500,
                     "rotationX": 0,
                     "hideEasing": "cubic_out",
                     "autoplay": true,
                     "rotationY": 0,
                     "pitch": -10.28
                    },
                    {
                     "rotationZ": 0,
                     "yaw": 123.46,
                     "popupMaxWidth": "95%",
                     "video": {
                      "height": 1080,
                      "class": "VideoResource",
                      "mp4Url": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F.mp4",
                      "width": 1920,
                      "webmUrl": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F.webm"
                     },
                     "showEasing": "cubic_in",
                     "showDuration": 500,
                     "loop": false,
                     "id": "popup_673AFF1D_50AD_B937_41CD_D84791F4B91A",
                     "hfov": 6.9,
                     "class": "PopupPanoramaOverlay",
                     "popupMaxHeight": "95%",
                     "hideDuration": 500,
                     "rotationX": 0,
                     "hideEasing": "cubic_out",
                     "autoplay": true,
                     "rotationY": 0,
                     "pitch": -11.76
                    },
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "hfov": 28.17,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -32.56,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 16,
                          "class": "ImageResourceLevel",
                          "width": 23,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_15_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -25.15
                      }
                     ],
                     "rollOverDisplay": true,
                     "id": "overlay_0307122E_5696_E40D_41D3_2741A1A4E18C",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -32.56,
                       "pitch": -25.15,
                       "hfov": 28.17,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 359,
                          "class": "ImageResourceLevel",
                          "width": 525,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_15_0.png"
                         }
                        ]
                       }
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "hfov": 30.1,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -150.93,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 16,
                          "class": "ImageResourceLevel",
                          "width": 28,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_16_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -13.38
                      }
                     ],
                     "rollOverDisplay": true,
                     "id": "overlay_0AAD43D2_56AA_A415_41D4_708A8855CC7E",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -150.93,
                       "pitch": -13.38,
                       "hfov": 30.1,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 294,
                          "class": "ImageResourceLevel",
                          "width": 522,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_16_0.png"
                         }
                        ]
                       }
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "hfov": 69.37,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 130.84,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 16,
                          "class": "ImageResourceLevel",
                          "width": 39,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_17_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -4.27
                      }
                     ],
                     "rollOverDisplay": true,
                     "id": "overlay_33D41721_56AE_EC37_41C2_E1FC27E961F7",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "yaw": 130.84,
                       "pitch": -4.27,
                       "hfov": 69.37,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 481,
                          "class": "ImageResourceLevel",
                          "width": 1174,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_17_0.png"
                         }
                        ]
                       }
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "hfov": 22.73,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -74.83,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 16,
                          "class": "ImageResourceLevel",
                          "width": 27,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_18_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -12.42
                      }
                     ],
                     "rollOverDisplay": true,
                     "id": "overlay_328D4ED9_56AB_9C17_41D0_3ED0B653A221",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -74.83,
                       "pitch": -12.42,
                       "hfov": 22.73,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 232,
                          "class": "ImageResourceLevel",
                          "width": 393,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_18_0.png"
                         }
                        ]
                       }
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "thumbnailUrl": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_t.jpg",
                 "id": "panorama_21C35B31_2894_D764_41B0_8E768B049B9B",
                 "class": "Panorama",
                 "pitch": 0,
                 "hfovMax": 120,
                 "label": "12",
                 "hfovMin": 120,
                 "hfov": 360,
                 "cardboardMenu": "this.Menu_73C1F46F_5695_2FF4_41B1_82E115958A0A",
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": -95.11,
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3",
                   "distance": 1,
                   "yaw": 85.77
                  },
                  {
                   "backwardYaw": 97.27,
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "vfov": 180,
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_t.jpg",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 3040,
                         "class": "ImageResourceLevel",
                         "width": 6080,
                         "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_hq.jpeg"
                        },
                        {
                         "height": 1608,
                         "class": "ImageResourceLevel",
                         "width": 3217,
                         "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB.jpeg"
                        }
                       ]
                      },
                      "class": "SphericPanoramaFrame",
                      "overlays": [
                       {
                        "hfov": 45,
                        "class": "TripodCapPanoramaOverlay",
                        "rotate": false,
                        "inertia": false,
                        "id": "panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_tcap0",
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "height": 850,
                           "class": "ImageResourceLevel",
                           "width": 850,
                           "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
                          }
                         ]
                        },
                        "angle": 0
                       },
                       {
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "hfov": 49.75,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 34.17,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 144,
                             "class": "ImageResourceLevel",
                             "width": 200,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_5_1_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -29.38
                         }
                        ],
                        "rollOverDisplay": true,
                        "id": "overlay_4CE89025_50AD_8717_41D1_2E46E1B20F01",
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 34.17,
                          "pitch": -29.38,
                          "hfov": 49.75,
                          "class": "HotspotPanoramaOverlayImage",
                          "roll": 0,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 646,
                             "class": "ImageResourceLevel",
                             "width": 897,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_5_0.png"
                            }
                           ]
                          }
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "hfov": 7.43,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 35.64,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 64,
                             "class": "ImageResourceLevel",
                             "width": 66,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -18.34
                         }
                        ],
                        "rollOverDisplay": false,
                        "id": "overlay_6928B388_2B78_B06C_41B5_18CB7580BD03",
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.showPopupPanoramaOverlay(this.popup_036D5CA5_50C8_980A_41CF_D8D8C98B1FAE, {'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'borderColor':'#000000','pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'backgroundColorDirection':'vertical','rollOverBorderSize':0,'iconLineWidth':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'paddingRight':5,'paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','iconWidth':20,'rollOverIconHeight':20,'pressedIconWidth':20,'iconHeight':20,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20}, this.ImageResource_47E390D7_5062_8733_41D3_D5B5D084F5CB, null, null, null, null, false)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 35.64,
                          "pitch": -18.34,
                          "hfov": 7.43,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 129,
                             "class": "ImageResourceLevel",
                             "width": 132,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_1_0.png"
                            }
                           ]
                          }
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "hfov": 13.58,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 97.27,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 44,
                             "class": "ImageResourceLevel",
                             "width": 130,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_3_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -28.81
                         }
                        ],
                        "rollOverDisplay": false,
                        "id": "overlay_693DF350_2B78_D0F6_41B0_DB0ADA44B1DD",
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B, this.camera_73A074CD_5695_2F34_41C7_958A7EB21AB2); this.mainPlayList.set('selectedIndex', 8)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 97.27,
                          "pitch": -28.81,
                          "hfov": 13.58,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 88,
                             "class": "ImageResourceLevel",
                             "width": 261,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_3_0.png"
                            }
                           ]
                          }
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "hfov": 11.37,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -129.67,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 33,
                             "class": "ImageResourceLevel",
                             "width": 105,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_4_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -24.1
                         }
                        ],
                        "rollOverDisplay": false,
                        "id": "overlay_69FB3384_2B78_B05E_41B7_FF964E937B13",
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.mainPlayList.set('selectedIndex', 3)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": -129.67,
                          "pitch": -24.1,
                          "hfov": 11.37,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 67,
                             "class": "ImageResourceLevel",
                             "width": 210,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_4_0.png"
                            }
                           ]
                          }
                         }
                        ]
                       },
                       {
                        "rotationZ": 0,
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "height": 640,
                           "class": "ImageResourceLevel",
                           "width": 1024,
                           "url": "media/popup_036D5CA5_50C8_980A_41CF_D8D8C98B1FAE_0_2.jpg"
                          }
                         ]
                        },
                        "yaw": 35.64,
                        "popupMaxWidth": "65%",
                        "id": "popup_036D5CA5_50C8_980A_41CF_D8D8C98B1FAE",
                        "showEasing": "cubic_in",
                        "hfov": 7.43,
                        "class": "PopupPanoramaOverlay",
                        "popupMaxHeight": "65%",
                        "hideDuration": 500,
                        "rotationX": 0,
                        "hideEasing": "cubic_out",
                        "showDuration": 500,
                        "rotationY": 0,
                        "pitch": -18.34
                       },
                       {
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "hfov": 45.04,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 33.73,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 16,
                             "class": "ImageResourceLevel",
                             "width": 23,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_7_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -28.15
                         }
                        ],
                        "rollOverDisplay": true,
                        "id": "overlay_3BDDA151_56B7_E417_41D3_9E722758A972",
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 33.73,
                          "pitch": -28.15,
                          "hfov": 45.04,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 599,
                             "class": "ImageResourceLevel",
                             "width": 862,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_7_0.png"
                            }
                           ]
                          }
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "thumbnailUrl": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_t.jpg",
                    "id": "panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB",
                    "class": "Panorama",
                    "pitch": 0,
                    "hfovMax": 120,
                    "label": "13",
                    "hfovMin": 120,
                    "hfov": 360,
                    "cardboardMenu": "this.Menu_73C1F46F_5695_2FF4_41B1_82E115958A0A",
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": -104.48,
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B",
                      "distance": 1,
                      "yaw": 97.27
                     }
                    ],
                    "partial": false
                   },
                   "distance": 1,
                   "yaw": -104.48
                  }
                 ],
                 "partial": false
                },
                "distance": 1,
                "yaw": -95.11
               },
               {
                "backwardYaw": -140.96,
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB",
                "distance": 1,
                "yaw": 99.8
               }
              ],
              "partial": false
             },
             "distance": 1,
             "yaw": -140.96
            },
            {
             "backwardYaw": 86.11,
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283",
             "distance": 1,
             "yaw": 158.9
            }
           ],
           "partial": false
          },
          "distance": 1,
          "yaw": 86.11
         }
        ],
        "partial": false
       },
       "distance": 1,
       "yaw": 86.03
      },
      {
       "backwardYaw": 12.85,
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254",
       "distance": 1,
       "yaw": -90.53
      }
     ],
     "partial": false
    },
    "distance": 1,
    "yaw": 12.85
   }
  ],
  "partial": false
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -1.35,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -26.5,
     "pitchSpeed": 11.7,
     "path": "shortest",
     "yawSpeed": 22.5,
     "end": "this.mainPlayList.set('selectedIndex', 4)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 42.81,
   "pitch": -11.51
  },
  "id": "panorama_21C1854F_2894_533C_41B2_3F2795CC3254_camera",
  "automaticRotationSpeed": 4,
  "automaticZoomSpeed": 10
 },
 "this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -12.25,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 129.44,
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -7.71,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 105.73,
     "pitchSpeed": 11.7,
     "yawSpeed": 22.5
    },
    {
     "targetPitch": -2.48,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 74,
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -1.53,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 86.03,
     "pitchSpeed": 11.7,
     "path": "shortest",
     "yawSpeed": 22.5,
     "end": "this.mainPlayList.set('selectedIndex', 5)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -143.38,
   "pitch": -17.19
  },
  "id": "panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_camera",
  "automaticRotationSpeed": 4,
  "automaticZoomSpeed": 10
 },
 "this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -9.72,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 109.66,
     "pitchSpeed": 11.7,
     "yawSpeed": 22.5
    },
    {
     "targetPitch": -5.1,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 99.81,
     "pitchSpeed": 9.56,
     "yawSpeed": 18.2
    },
    {
     "targetPitch": -5.45,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 63.28,
     "pitchSpeed": 11.7,
     "yawSpeed": 22.5
    },
    {
     "targetPitch": -10.94,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 6.8,
     "pitchSpeed": 17.05,
     "path": "shortest",
     "yawSpeed": 33.25,
     "end": "this.mainPlayList.set('selectedIndex', 6)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 146.25,
   "pitch": -22.61
  },
  "id": "panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_camera",
  "automaticRotationSpeed": 4,
  "automaticZoomSpeed": 10
 },
 "this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -2.48,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 171.02,
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -4.14,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -143.83,
     "pitchSpeed": 17.05,
     "path": "shortest",
     "yawSpeed": 33.25,
     "end": "this.mainPlayList.set('selectedIndex', 7)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 111.34,
   "pitch": -1.19
  },
  "id": "panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_camera",
  "automaticRotationSpeed": 4,
  "automaticZoomSpeed": 10
 },
 "this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -3.44,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -105.73,
     "pitchSpeed": 11.7,
     "yawSpeed": 22.5
    },
    {
     "targetPitch": -5.45,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -85.95,
     "pitchSpeed": 11.7,
     "yawSpeed": 22.5
    },
    {
     "targetPitch": -8.93,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -75.23,
     "pitchSpeed": 8.49,
     "yawSpeed": 16.05
    },
    {
     "targetPitch": -11.99,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -61.71,
     "pitchSpeed": 11.7,
     "path": "shortest",
     "yawSpeed": 22.5,
     "end": "this.mainPlayList.set('selectedIndex', 8)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -129.18,
   "pitch": -6.21
  },
  "id": "panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_camera",
  "automaticRotationSpeed": 4,
  "automaticZoomSpeed": 10
 },
 "this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -7.71,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -174.16,
     "pitchSpeed": 8.49,
     "yawSpeed": 16.05
    },
    {
     "targetPitch": -11.55,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -141.91,
     "pitchSpeed": 9.56,
     "yawSpeed": 18.2
    },
    {
     "targetPitch": -5.01,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -121.16,
     "pitchSpeed": 8.49,
     "yawSpeed": 16.05
    },
    {
     "targetPitch": -10.5,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -85.77,
     "pitchSpeed": 11.7,
     "yawSpeed": 22.5
    },
    {
     "targetPitch": -26.63,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -37.83,
     "pitchSpeed": 9.56,
     "path": "shortest",
     "yawSpeed": 18.2,
     "end": "this.mainPlayList.set('selectedIndex', 9)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 155.54,
   "pitch": -10.32
  },
  "id": "panorama_21C35B31_2894_D764_41B0_8E768B049B9B_camera",
  "automaticRotationSpeed": 4,
  "automaticZoomSpeed": 10
 },
 "this.panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -7.98,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 74.7,
     "pitchSpeed": 10.63,
     "yawSpeed": 20.35
    },
    {
     "targetPitch": -6.49,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 125.43,
     "pitchSpeed": 10.63,
     "yawSpeed": 20.35
    },
    {
     "targetPitch": -10.94,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 162.83,
     "pitchSpeed": 7.42,
     "path": "shortest",
     "yawSpeed": 13.9,
     "end": "this.mainPlayList.set('selectedIndex', 3)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 45.58,
   "pitch": -28.38
  },
  "id": "panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_camera",
  "automaticRotationSpeed": 4,
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DA745E41_569A_FC77_41BC_DB4EF5925F5C_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "class": "ImageResourceLevel",
       "width": 6080,
       "url": "media/panorama_DA745E41_569A_FC77_41BC_DB4EF5925F5C_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_DA745E41_569A_FC77_41BC_DB4EF5925F5C.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "thumbnailUrl": "media/panorama_DA745E41_569A_FC77_41BC_DB4EF5925F5C_t.jpg",
  "id": "panorama_DA745E41_569A_FC77_41BC_DB4EF5925F5C",
  "class": "Panorama",
  "pitch": 0,
  "hfovMax": 120,
  "label": "micro biology",
  "hfovMin": 120,
  "hfov": 360,
  "cardboardMenu": "this.Menu_73C1F46F_5695_2FF4_41B1_82E115958A0A",
  "partial": false
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_DA745E41_569A_FC77_41BC_DB4EF5925F5C_camera",
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_5CBFE6CE_564D_7B0D_41CB_D08DFA721F49_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "class": "ImageResourceLevel",
       "width": 6080,
       "url": "media/panorama_5CBFE6CE_564D_7B0D_41CB_D08DFA721F49_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_5CBFE6CE_564D_7B0D_41CB_D08DFA721F49.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "thumbnailUrl": "media/panorama_5CBFE6CE_564D_7B0D_41CB_D08DFA721F49_t.jpg",
  "id": "panorama_5CBFE6CE_564D_7B0D_41CB_D08DFA721F49",
  "class": "Panorama",
  "pitch": 0,
  "hfovMax": 120,
  "label": "GLP",
  "hfovMin": 120,
  "hfov": 360,
  "cardboardMenu": "this.Menu_73C1F46F_5695_2FF4_41B1_82E115958A0A",
  "partial": false
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_5CBFE6CE_564D_7B0D_41CB_D08DFA721F49_camera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3', this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E', this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.get('visible')); this.registerKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8', this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8.get('visible')); this.registerKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54', this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.get('visible')); this.registerKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863', this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F', this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F.get('visible')); this.registerKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F', this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F.get('visible')); this.registerKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D', this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D.get('visible')); this.registerKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D', this.Container_3FB65883_2894_7124_41B7_81A73B20B38D.get('visible')); this.registerKey('visibility_Image_227442D1_2F53_0813_41B3_7271F7D70452', this.Image_227442D1_2F53_0813_41B3_7271F7D70452.get('visible')); this.registerKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03', this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03.get('visible')); this.registerKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0', this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0.get('visible')); this.registerKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6', this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6.get('visible')); this.registerKey('visibility_Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0', this.Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0.get('visible')); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, 500, this.effect_66A993C7_2B68_57DA_41B2_04B39F4CD777, 'showEffect', false); this.setComponentVisibility(this.Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0, true, -1, this.effect_5C8C0876_400D_056C_4197_4D21DD837174, 'showEffect', false); this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, true, -1, this.effect_5C8C2877_400D_056D_41A8_5F85BCABA018, 'showEffect', false); this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, true, -1, this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298, 'showEffect', false); this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, true, -1, this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F, 'showEffect', false); this.setComponentVisibility(this.Image_227442D1_2F53_0813_41B3_7271F7D70452, true, -1, this.effect_5C8CB878_400D_0563_41C1_590C1BFEAD69, 'showEffect', false); this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, true, -1, this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40, 'showEffect', false); this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, true, -1, this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1, 'showEffect', false); this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, true, -1, this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407, 'showEffect', false); this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, true, -1, this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32, 'showEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_7646B174_4217_6060_41B9_177997DC3A13, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_5E00948A_556A_ECF5_41D0_CA74D0EF60E9, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_4C3F9A90_5161_25ED_41CA_C5B4E91434E4, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_02AE32EF_5065_8B13_41CC_5B661BAA48A8, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_778DEF13_553A_895E_41C7_531A1BBC730F, 'hideEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_778C5F13_553A_895E_41C3_5DFDD9378F1A, 'hideEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_778C2F14_553A_895A_41BA_F8C3C2D139FB, 'showEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_412FD659_5507_FBCA_41C7_2E3CE75E45C5, 'showEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_778F4F15_553A_895A_41CF_3DECCD75F153, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_778FDF15_553A_895A_41B6_9A7094958640, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_778FEF16_553A_8946_41CA_99E4CF26B253, 'hideEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_778E1F16_553A_8946_4194_90289CC41BB5, 'hideEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_25102BD5_2B28_B7FE_41C4_041AFE0F0BAC, 'hideEffect', false)",
    "camera": "this.panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_25100BD5_2B28_B7FE_41C3_A604D65396B1, 'hideEffect', false); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_25100BD5_2B28_B7FE_41C3_A604D65396B1, 'hideEffect', false); if(this.existsKey('visibility_Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0')){ if(this.getKey('visibility_Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0')) { this.setComponentVisibility(this.Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0, true, -1, this.effect_5C8C0876_400D_056C_4197_4D21DD837174, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0, false, -1, this.effect_70BF15E6_5695_28F4_41D4_C2B56D5C27DB, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0'); if(this.existsKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6')){ if(this.getKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6')) { this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, true, -1, this.effect_5C8C2877_400D_056D_41A8_5F85BCABA018, 'showEffect', false); } else { this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, false, -1, this.effect_70BF45E6_5695_28F4_41D5_3840B60BECE5, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6'); if(this.existsKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0')){ if(this.getKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0')) { this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, true, -1, this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298, 'showEffect', false); } else { this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, false, -1, this.effect_70BF75E6_5695_28F4_41C2_9D3B7CF6B8E3, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0'); if(this.existsKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03')){ if(this.getKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03')) { this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, true, -1, this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, false, -1, this.effect_70BFB5E7_5695_28F4_41CC_E84DE3FDA4D5, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03'); if(this.existsKey('visibility_Image_227442D1_2F53_0813_41B3_7271F7D70452')){ if(this.getKey('visibility_Image_227442D1_2F53_0813_41B3_7271F7D70452')) { this.setComponentVisibility(this.Image_227442D1_2F53_0813_41B3_7271F7D70452, true, -1, this.effect_5C8CB878_400D_0563_41C1_590C1BFEAD69, 'showEffect', false); } else { this.setComponentVisibility(this.Image_227442D1_2F53_0813_41B3_7271F7D70452, false, -1, this.effect_70BFE5E7_5695_28F4_41A6_97F44D65DF84, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_227442D1_2F53_0813_41B3_7271F7D70452'); if(this.existsKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D')){ if(this.getKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D')) { this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, true, -1, this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, false, -1, this.effect_70BE05E7_5695_28F4_41C4_C034B8A904CD, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D'); if(this.existsKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D')){ if(this.getKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D')) { this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, true, -1, this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, false, -1, this.effect_70A0D5E8_5695_28FC_41C4_B2A20566EE93, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D'); if(this.existsKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F')){ if(this.getKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F')) { this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, true, -1, this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407, 'showEffect', false); } else { this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, false, -1, this.effect_70BF05E8_5695_28FC_41B2_D87EE5970C0B, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F'); if(this.existsKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F')){ if(this.getKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F')) { this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, true, -1, this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32, 'showEffect', false); } else { this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, false, -1, this.effect_70BF45E8_5695_28FC_41C0_4BC3002F6DD7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_70BF95E9_5695_28FC_41D2_09983575A225, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_7646B174_4217_6060_41B9_177997DC3A13, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_269A2071_2B29_F0B6_41B4_001C61C97291, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_269A2071_2B29_F0B6_41B4_001C61C97291, 'hideEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7, 'hideEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F, 'hideEffect', false); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_02AE32EF_5065_8B13_41CC_5B661BAA48A8, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_70BE05E9_5695_28FC_41C2_2427A44C1F5B, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')){ if(this.getKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')) { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_70BE55EA_5695_28FC_4140_17296FD9DDC6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_778DEF13_553A_895E_41C7_531A1BBC730F, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863'); if(this.existsKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')){ if(this.getKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')) { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_70BE85EA_5695_28FC_41D3_03FDFF1A07EA, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_778C5F13_553A_895E_41C3_5DFDD9378F1A, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54'); if(this.existsKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')){ if(this.getKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')) { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_778C2F14_553A_895A_41BA_F8C3C2D139FB, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_70BEB5EA_5695_28FC_41AE_F7D808C3FF0C, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8'); if(this.existsKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')){ if(this.getKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')) { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_412FD659_5507_FBCA_41C7_2E3CE75E45C5, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_70BD15EB_5695_28FC_41B5_98B381B080BD, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E'); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_70BD35EB_5695_28FC_41D3_1BE414B9E188, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_778F4F15_553A_895A_41CF_3DECCD75F153, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); if(this.existsKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')){ if(this.getKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')) { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_70BD65EB_5695_28FC_41D3_153CB39CEBDD, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_778FDF15_553A_895A_41B6_9A7094958640, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_70BDB5EC_5695_28F4_41B5_20A99B5FE57A, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_778FEF16_553A_8946_41CA_99E4CF26B253, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_70BDD5EC_5695_28F4_41CF_C67D89396619, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_778E1F16_553A_8946_4194_90289CC41BB5, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_70BC05EC_5695_28F4_41BE_75D028EDBC80, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_70BC55ED_5695_28F4_41BF_0B0444B5955B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_70BCA5ED_5695_28F4_41A5_90CE0D2BD1C8, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_70BCB5ED_5695_28F4_41C6_2187960F3430, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_25103BD5_2B28_B7FE_41C1_45F7C799132C, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_25103BD5_2B28_B7FE_41C1_45F7C799132C, 'showEffect', false)",
    "media": "this.panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0', this.Container_77D4607B_4271_6060_41A3_CF43634A36B0.get('visible')); this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3', this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E', this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.get('visible')); this.registerKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8', this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8.get('visible')); this.registerKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54', this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.get('visible')); this.registerKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863', this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71AE157E_4211_A060_41C1_A6FA728B9FF8, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_5E071490_556A_EC15_4193_60B7692BC205, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CFC3C8C_4232_A0A1_4198_B405D8F24CB7, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_77896F1A_553A_894E_41AD_345755A2712A, 'hideEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_7789DF1A_553A_894E_41D0_912F029A4173, 'hideEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_77885F1B_553A_894E_41A0_3F248053A945, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_77881F1C_553A_894A_41A5_2ADD685F2322, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_412A2661_5507_FBFA_41C8_9A2D1C8C8213, 'showEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_412B8661_5507_FBFA_41D0_0BAD895CD944, 'showEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_7274D1DE_4FC9_8836_41CB_C35126518752, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_727441DF_4FC9_8836_41CC_0D0B18042478, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_6E6DDC4B_4272_E7A0_41C7_5048D0BE34B9, 'showEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_2517ABD6_2B28_B7FA_41B9_E118F143094B, 'showEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7, 'hideEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_71B18581_4211_A0A0_41C4_C43629A7BC76, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA, 'showEffect', false)",
    "camera": "this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71AE157E_4211_A060_41C1_A6FA728B9FF8, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_70BBE5EE_5695_28F4_41CE_F9B3B877206E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_70BA35EE_5695_28F4_41CA_E127EC131E10, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_70BA55EF_5695_28F4_41D0_C7FA06CE379C, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_5E071490_556A_EC15_4193_60B7692BC205, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CFC3C8C_4232_A0A1_4198_B405D8F24CB7, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_70BA95EF_5695_28F4_41D2_1E8EAAE70ACA, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')){ if(this.getKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')) { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_70BAC5EF_5695_28F4_4199_FDAC32A18771, 'showEffect', false); } else { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_77896F1A_553A_894E_41AD_345755A2712A, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863'); if(this.existsKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')){ if(this.getKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')) { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_70BAF5F0_5695_28EC_41C2_3B74C095FFB3, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_7789DF1A_553A_894E_41D0_912F029A4173, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54'); if(this.existsKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')){ if(this.getKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')) { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_70B935F0_5695_28EC_41D3_B9C77FABEBE3, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_77885F1B_553A_894E_41A0_3F248053A945, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8'); if(this.existsKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')){ if(this.getKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')) { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_70B965F0_5695_28EC_4173_E192062EB398, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_77881F1C_553A_894A_41A5_2ADD685F2322, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E'); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_412A2661_5507_FBFA_41C8_9A2D1C8C8213, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_70BA25F1_5695_28EC_41D3_715A7A0CE426, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); if(this.existsKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')){ if(this.getKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')) { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_412B8661_5507_FBFA_41D0_0BAD895CD944, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_70BA45F1_5695_28EC_41D0_B7620C48AD50, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_7274D1DE_4FC9_8836_41CB_C35126518752, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_70BA95F1_5695_28EF_41D2_0A6FE6DEE00C, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_727441DF_4FC9_8836_41CC_0D0B18042478, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_70BAC5F2_5695_28EC_41A9_2A57BEF07FDB, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_6E6DDC4B_4272_E7A0_41C7_5048D0BE34B9, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, this.effect_70BAF5F2_5695_28EC_41C7_DC856CEBCD88, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F, 'hideEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F, 'hideEffect', false); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_70B945F2_5695_28ED_41B5_118EB7F78B49, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_70B975F3_5695_28EC_419C_47E4F912D461, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_70B9B5F3_5695_28EC_41D1_4873723382E2, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); if(this.existsKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')){ if(this.getKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')) { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_71B18581_4211_A0A0_41C4_C43629A7BC76, 'showEffect', false); } else { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, -1, this.effect_70B9F5F4_5695_28D4_41C0_24C5A3DA2F6F, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_70B845F4_5695_28D4_41D4_7B6A21AE42C1, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3', this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E', this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.get('visible')); this.registerKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8', this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8.get('visible')); this.registerKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54', this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.get('visible')); this.registerKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863', this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Image_6F475BB5_2994_D76C_418F_CE09ACD35F01', this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01.get('visible')); this.registerKey('visibility_Image_61372758_2994_5F24_41C3_CE568D87E54A', this.Image_61372758_2994_5F24_41C3_CE568D87E54A.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_3F2159CF_2B1A_A700_41BE_5406D4BE81FC, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B0E584_4211_A0A1_41C9_43847D46138C, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3BB158BB_2B38_D1AA_41B0_BC6D70FE94E6, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_3098B1C3_2B3A_E700_41B4_232B931F0113, 'hideEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_3098F1C3_2B3A_E700_41B3_98DAFF8001BC, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_3099A1C4_2B3A_E700_4170_E65033069B39, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE0DC93_4232_A0A0_41B9_FD0551C24AD5, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_7795BF22_553A_897E_41AF_306CC8CD7EB1, 'hideEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_77946F23_553A_897E_41CD_D517F5F45082, 'hideEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_7794CF24_553A_897A_41D1_47406777A3C3, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_7794AF24_553A_897A_41D4_D93AD6342D8A, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_77976F25_553A_897A_41B2_877CF8B52EE2, 'showEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_7797FF25_553A_897A_41D2_19DB1CF5232F, 'showEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_726861E4_4FC9_880A_41B3_661275BA1317, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_7269E1E5_4FC9_880A_41BA_3D5DD30BE06D, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_09C2DBC5_2FAE_5D9E_41A9_065ECAF2AF19, 'showEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_309861C8_2B3A_E700_41C1_6120ED54C917, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_309821C7_2B3A_E700_41C0_E75CD3F76820, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_309881C6_2B3A_E701_41C0_5AB081857C81, 'hideEffect', false)",
    "camera": "this.panorama_21C1904E_2894_713C_41B0_21CD9585DC33_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_70B735F5_5695_28D4_418A_53817E803EE8, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_3F2159CF_2B1A_A700_41BE_5406D4BE81FC, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B0E584_4211_A0A1_41C9_43847D46138C, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_70B795F5_5695_28D4_41C9_8A185F1762C1, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3BB158BB_2B38_D1AA_41B0_BC6D70FE94E6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_70B7A5F5_5695_28D4_41BB_04DB85BAE4FC, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_70B7E5F6_5695_28D4_41B9_FF1C5B270983, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_3098B1C3_2B3A_E700_41B4_232B931F0113, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Image_61372758_2994_5F24_41C3_CE568D87E54A')){ if(this.getKey('visibility_Image_61372758_2994_5F24_41C3_CE568D87E54A')) { this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, true, -1, this.effect_70B635F6_5695_28D4_41C2_C2C18AFE9B2B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_3098F1C3_2B3A_E700_41B3_98DAFF8001BC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_61372758_2994_5F24_41C3_CE568D87E54A'); if(this.existsKey('visibility_Image_6F475BB5_2994_D76C_418F_CE09ACD35F01')){ if(this.getKey('visibility_Image_6F475BB5_2994_D76C_418F_CE09ACD35F01')) { this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, true, -1, this.effect_70B655F6_5695_28D4_418A_72B331E74D81, 'showEffect', false); } else { this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_3099A1C4_2B3A_E700_4170_E65033069B39, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_6F475BB5_2994_D76C_418F_CE09ACD35F01'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE0DC93_4232_A0A0_41B9_FD0551C24AD5, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_70B695F7_5695_28D4_41CB_014658DDF046, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')){ if(this.getKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')) { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_70B6C5F7_5695_28D4_41CC_F2940629AA2A, 'showEffect', false); } else { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_7795BF22_553A_897E_41AF_306CC8CD7EB1, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863'); if(this.existsKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')){ if(this.getKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')) { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_70B505F7_5695_28D3_41D1_EBB3942E7679, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_77946F23_553A_897E_41CD_D517F5F45082, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54'); if(this.existsKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')){ if(this.getKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')) { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_70B535F8_5695_28DC_41A8_8DD566B9A245, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_7794CF24_553A_897A_41D1_47406777A3C3, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8'); if(this.existsKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')){ if(this.getKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')) { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_70B565F8_5695_28DC_41C0_266F17FE8597, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_7794AF24_553A_897A_41D4_D93AD6342D8A, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E'); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_77976F25_553A_897A_41B2_877CF8B52EE2, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_70B5C5F8_5695_28DD_41D3_DB2EBF2AA724, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); if(this.existsKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')){ if(this.getKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')) { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_7797FF25_553A_897A_41D2_19DB1CF5232F, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_70B5F5F9_5695_28DC_41B6_CEDB718F77F1, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_726861E4_4FC9_880A_41B3_661275BA1317, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_70B455F9_5695_28DC_41D3_DEA0E54E87AF, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_7269E1E5_4FC9_880A_41BA_3D5DD30BE06D, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_70B495F9_5695_28DF_41CA_ADB77A672105, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_31459F67_2FAE_D69A_4164_37DF78EF38D3, 'hideEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_31459F67_2FAE_D69A_4164_37DF78EF38D3, 'hideEffect', false); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_70B545FA_5695_28DC_41CC_0EE91A9D0562, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_309861C8_2B3A_E700_41C1_6120ED54C917, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_70B585FA_5695_28DC_41B2_DB78237755B5, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_309821C7_2B3A_E700_41C0_E75CD3F76820, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_70B5D5FB_5695_28DC_41BA_EFDE195E7A02, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_309881C6_2B3A_E701_41C0_5AB081857C81, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')",
    "media": "this.panorama_21C1904E_2894_713C_41B0_21CD9585DC33"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0', this.Container_77D4607B_4271_6060_41A3_CF43634A36B0.get('visible')); this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604', this.Container_6E17E57D_4213_6060_41A1_9148D02E3604.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3', this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E', this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.get('visible')); this.registerKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8', this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8.get('visible')); this.registerKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54', this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.get('visible')); this.registerKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863', this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726B41E9_4FC9_881A_41C1_5CBE79CAE174, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B1A588_4211_A0A1_41C3_CBB8DE955D82, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_5E05549E_556A_EC0D_41A0_BEC64BE8CB09, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE05C95_4232_A0A0_418B_A9B5C6046C60, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_4127866E_5507_FBC7_41C3_B9D790BCA70F, 'showEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_4127466F_5507_FBC6_41D0_B25742EA3070, 'showEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_7791BF2A_553A_894E_41B6_9A12571B0D3B, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_77906F2B_553A_894E_41D1_5217E8D2C693, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_41270670_5507_FBDA_41CE_6B98C7CD6BCB, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_4124E670_5507_FBDA_41D1_F1F1733DD227, 'hideEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_726C61EB_4FC9_881E_41D1_58E533222243, 'showEffect', false); this.setComponentVisibility(this.Container_6E17E57D_4213_6060_41A1_9148D02E3604, true, -1, this.effect_726DD1EB_4FC9_881E_418F_866B7958A526, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_6E562C55_4272_E7A0_41CC_0ED70CE160C3, 'showEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B691C0_5695_692C_41B1_11572F01AB2A, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA, 'showEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B6D1C1_5695_692C_41B4_15B2D2584FF8, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B531C1_5695_692C_41BB_8382320E97CB, 'hideEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_71B1258A_4211_A0A0_4180_984D30BC8BF8, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200, 'showEffect', false)",
    "camera": "this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_70B4E5FB_5695_28DC_41D0_1450AA5A4CFE, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726B41E9_4FC9_881A_41C1_5CBE79CAE174, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B1A588_4211_A0A1_41C3_CBB8DE955D82, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_70B315FC_5695_28D4_41B7_1B644EF0B173, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_70B355FC_5695_28D4_41A0_9D8DBE81BF41, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_70B395FC_5695_28D4_41D3_40130F93FC30, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_5E05549E_556A_EC0D_41A0_BEC64BE8CB09, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE05C95_4232_A0A0_418B_A9B5C6046C60, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_70B3C5FD_5695_28D4_41BF_77C9D30511FC, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')){ if(this.getKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')) { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_4127866E_5507_FBC7_41C3_B9D790BCA70F, 'showEffect', false); } else { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_70B205FD_5695_28D4_41D3_9B5261F63E9F, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863'); if(this.existsKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')){ if(this.getKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')) { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_4127466F_5507_FBC6_41D0_B25742EA3070, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_70B235FD_5695_28D4_41B0_D6F688A20954, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54'); if(this.existsKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')){ if(this.getKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')) { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_70B275FE_5695_28D4_41D2_8070AFE65773, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_7791BF2A_553A_894E_41B6_9A12571B0D3B, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8'); if(this.existsKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')){ if(this.getKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')) { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_70B2B5FE_5695_28D4_41B5_D1DED7911226, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_77906F2B_553A_894E_41D1_5217E8D2C693, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E'); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_70B2F5FE_5695_28D4_41D2_71FC06703A64, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_41270670_5507_FBDA_41CE_6B98C7CD6BCB, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); if(this.existsKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')){ if(this.getKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')) { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_70B125FF_5695_28D4_41CA_D4B6793A4366, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_4124E670_5507_FBDA_41D1_F1F1733DD227, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_726C61EB_4FC9_881E_41D1_58E533222243, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_70B165FF_5695_28D4_4193_CEBF3661949C, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604')){ if(this.getKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604')) { this.setComponentVisibility(this.Container_6E17E57D_4213_6060_41A1_9148D02E3604, true, -1, this.effect_726DD1EB_4FC9_881E_418F_866B7958A526, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6E17E57D_4213_6060_41A1_9148D02E3604, false, -1, this.effect_70B1A5FF_5695_28D4_41BE_20080E113869, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_6E562C55_4272_E7A0_41CC_0ED70CE160C3, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, this.effect_70B1D600_5695_2B2C_41D3_13E441DD4B2D, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_70B02600_5695_2B2C_41C6_B6675709141E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B691C0_5695_692C_41B1_11572F01AB2A, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_70B06600_5695_2B2C_41CE_1C2C8C436B3E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_70B08601_5695_2B2C_41CA_CC2365C23312, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B6D1C1_5695_692C_41B4_15B2D2584FF8, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_70B0F601_5695_2B2C_41AF_978E1AA38750, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B531C1_5695_692C_41BB_8382320E97CB, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); if(this.existsKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')){ if(this.getKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')) { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_71B1258A_4211_A0A0_4180_984D30BC8BF8, 'showEffect', false); } else { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, -1, this.effect_704F0601_5695_2B2C_418A_12A84D0DE348, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_70B1A602_5695_2B2C_41D2_E13CDFDF9648, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3', this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E', this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.get('visible')); this.registerKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8', this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8.get('visible')); this.registerKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54', this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.get('visible')); this.registerKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863', this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726FF1ED_4FC9_881A_41D3_46E1C42560D7, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B0F58C_4211_A0A0_41AB_6FC57BF9CE23, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_083FF036_2B68_50BA_41B2_BA99A13F9561, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_0A8D711D_2FA6_4AA9_41B3_1698FA0FACCA, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE7AC97_4232_A0A0_41BD_683EA2897E03, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_41225675_5507_FBDA_41D4_83EED0E7A5BA, 'showEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_41223675_5507_FBDA_4181_E233D89ED9D6, 'showEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_779F4F31_553A_895A_41C9_F611A827B3B4, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_779F3F31_553A_895A_41CA_F4B2075198EF, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_779C6F32_553A_895E_41C2_3348EBACAD75, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_779CDF32_553A_895F_41C8_52E0B2F6CB6A, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_726F91EF_4FC9_8815_41C6_FEB96EF4ED62, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_726FC1F0_4FC9_880A_41CE_1908D478796F, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B521C7_5695_6933_41C9_F4F4755C65CF, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_083FA037_2B68_50BA_41C5_535FB194808D, 'showEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B561C8_5695_693C_41BE_5B728623950D, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B541C9_5695_693C_41D2_D5DBF933655C, 'hideEffect', false)",
    "camera": "this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_70B09602_5695_2B2C_41B6_D642736997AE, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726FF1ED_4FC9_881A_41D3_46E1C42560D7, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B0F58C_4211_A0A0_41AB_6FC57BF9CE23, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_70B0F603_5695_2B2C_41B5_F9B543190E3B, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_083FF036_2B68_50BA_41B2_BA99A13F9561, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_704F2603_5695_2B2C_41C5_5F6A359FB4B7, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_704F6603_5695_2B2C_41D2_9442B52AB1FF, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_0A8D711D_2FA6_4AA9_41B3_1698FA0FACCA, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE7AC97_4232_A0A0_41BD_683EA2897E03, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_704FC604_5695_2B34_41CD_4357B9F823CC, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')){ if(this.getKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')) { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_41225675_5507_FBDA_41D4_83EED0E7A5BA, 'showEffect', false); } else { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_704FF604_5695_2B34_41CD_3961158C73FE, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863'); if(this.existsKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')){ if(this.getKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')) { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_41223675_5507_FBDA_4181_E233D89ED9D6, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_704E3604_5695_2B34_41B1_EDD1410F0EB9, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54'); if(this.existsKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')){ if(this.getKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')) { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_704E9605_5695_2B34_419A_3F3EB71FB2DA, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_779F4F31_553A_895A_41C9_F611A827B3B4, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8'); if(this.existsKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')){ if(this.getKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')) { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_704EB605_5695_2B34_41D4_A2697C8B2C1F, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_779F3F31_553A_895A_41CA_F4B2075198EF, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E'); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_704ED605_5695_2B34_419D_BE5740F8C75A, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_779C6F32_553A_895E_41C2_3348EBACAD75, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); if(this.existsKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')){ if(this.getKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')) { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_704D1606_5695_2B34_41B3_F08275F54A29, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_779CDF32_553A_895F_41C8_52E0B2F6CB6A, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_726F91EF_4FC9_8815_41C6_FEB96EF4ED62, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_704D4606_5695_2B34_41D0_36AB6D113534, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_726FC1F0_4FC9_880A_41CE_1908D478796F, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_704D9606_5695_2B35_41B1_9CAB7A3504D2, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_704DF607_5695_2B34_418F_EB1B983FC536, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B521C7_5695_6933_41C9_F4F4755C65CF, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_083FA037_2B68_50BA_41C5_535FB194808D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_704C1607_5695_2B34_41D2_4449C4CF32CF, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_704C5608_5695_2B3C_41D4_43255928628A, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B561C8_5695_693C_41BE_5B728623950D, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_704CA608_5695_2B3C_41CD_D887D6DB8606, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B541C9_5695_693C_41D2_D5DBF933655C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')",
    "media": "this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3', this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E', this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.get('visible')); this.registerKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8', this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8.get('visible')); this.registerKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54', this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.get('visible')); this.registerKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863', this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726051F1_4FC9_880A_41D1_6185001C10DB, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B1F58E_4211_A0A0_4193_15907AE6E948, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_083EA038_2B68_50B6_41C3_0BE33D67069D, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_0A8BD120_2FA6_4A96_41A2_A9BE1252574A, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE5CC9A_4232_A0A0_41C9_BFE43E88A8F1, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_4123B679_5507_FBCA_41B6_7A65B0727BCB, 'showEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_4123067A_5507_FBCE_41A4_A6CF223F2093, 'showEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_77984F37_553A_8946_41A3_E7B051EC6579, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_77980F38_553A_894A_41C0_A9313A6F49FE, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_7798CF38_553A_894A_41A7_7568B600AA9C, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_779B4F39_553A_894A_41BA_C60C009E96C4, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_7262A1F3_4FC9_880E_41C3_259FDFF86250, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_7262E1F4_4FC9_880A_41D1_55FAFDDF5D8C, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B531CE_5695_6934_41D0_CFB9F0962160, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_083E6039_2B68_50B6_41C1_ECDB68119909, 'showEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B541CF_5695_6934_41BC_437899351995, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B5B1D0_5695_692C_41CF_E97741C8159A, 'hideEffect', false)",
    "camera": "this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_704B9609_5695_2B3C_41A3_09CADB53342C, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726051F1_4FC9_880A_41D1_6185001C10DB, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B1F58E_4211_A0A0_4193_15907AE6E948, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_704BD609_5695_2B3C_41CC_BF609A828930, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_083EA038_2B68_50B6_41C3_0BE33D67069D, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_704A1609_5695_2B3C_41A3_00222D19C401, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_704A460A_5695_2B3C_4152_45F4AE04038E, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_0A8BD120_2FA6_4A96_41A2_A9BE1252574A, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE5CC9A_4232_A0A0_41C9_BFE43E88A8F1, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_704A660A_5695_2B3C_41D1_7508BB86E915, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')){ if(this.getKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')) { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_4123B679_5507_FBCA_41B6_7A65B0727BCB, 'showEffect', false); } else { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_704AC60A_5695_2B3D_41B1_8C037C6A76AC, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863'); if(this.existsKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')){ if(this.getKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')) { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_4123067A_5507_FBCE_41A4_A6CF223F2093, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_704AF60B_5695_2B3C_41C8_FCD29A286BF8, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54'); if(this.existsKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')){ if(this.getKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')) { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_7049260B_5695_2B3C_41D3_44983E6499C3, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_77984F37_553A_8946_41A3_E7B051EC6579, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8'); if(this.existsKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')){ if(this.getKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')) { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_7049660B_5695_2B3C_41B2_1E0DB284EFC4, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_77980F38_553A_894A_41C0_A9313A6F49FE, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E'); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_704A360C_5695_2B34_419D_52660FDD9AEA, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_7798CF38_553A_894A_41A7_7568B600AA9C, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); if(this.existsKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')){ if(this.getKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')) { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_704A760C_5695_2B34_41D3_34B7DA73A08A, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_779B4F39_553A_894A_41BA_C60C009E96C4, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_7262A1F3_4FC9_880E_41C3_259FDFF86250, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_704AC60C_5695_2B35_41CE_DC8B6C6505F8, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_7262E1F4_4FC9_880A_41D1_55FAFDDF5D8C, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_704AF60D_5695_2B34_41C8_DE2DFDC7B19C, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_7049260D_5695_2B34_41A9_6A9CC5B5B577, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B531CE_5695_6934_41D0_CFB9F0962160, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_083E6039_2B68_50B6_41C1_ECDB68119909, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_7049860E_5695_2B34_41CC_B82C39E35494, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_7049B60E_5695_2B34_41CB_FC8EDC030922, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B541CF_5695_6934_41BC_437899351995, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_7049E60E_5695_2B34_418B_767ADB9788DD, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B5B1D0_5695_692C_41CF_E97741C8159A, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')",
    "media": "this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3', this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E', this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.get('visible')); this.registerKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8', this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8.get('visible')); this.registerKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54', this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.get('visible')); this.registerKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863', this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726311F5_4FC9_880A_41B4_030414259793, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B11592_4211_A0A0_41CE_905A6104BD57, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_5E1B94AE_556A_EC0D_41D2_7F5E6534CF32, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_5E1BB4AF_556A_EC0B_41D1_C9D283206AE1, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE4FC9B_4232_A0A0_41C7_BEB34AD7E39A, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_41DED67D_5507_FBCA_41D1_8C3BF73507F8, 'showEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_41DE967D_5507_FBC5_41D4_AEC0F414A77F, 'showEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_779AFF3D_553A_894A_41B6_ABA840537EE1, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_779AAF3D_553A_894A_41D3_E298C3D38F3B, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_76650F3E_553A_8946_41C2_7E9FE84BB636, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_7665CF3E_553A_8946_41CA_38626EF15A12, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_7264C1F6_4FC9_8BF6_41D3_3406BD33533A, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_726461F7_4FC9_8BF6_41C5_73FA0E92B63A, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B551D5_5695_68D4_41BA_B22B99BE53D5, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_40B5B1D6_5695_68D4_41BE_E930F5807F1E, 'showEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B5F1D6_5695_68D4_41B3_5F75C52C7C8E, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B5D1D7_5695_68D4_41C5_3CFF9D0F8075, 'hideEffect', false)",
    "camera": "this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_7048E60F_5695_2B34_41A3_9CE93F7EFAA0, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726311F5_4FC9_880A_41B4_030414259793, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B11592_4211_A0A0_41CE_905A6104BD57, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_7047260F_5695_2B34_41C4_49B8588B1516, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_5E1B94AE_556A_EC0D_41D2_7F5E6534CF32, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_70475610_5695_2B2C_41C8_4C603C0C93C5, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_70479610_5695_2B2C_41D2_ECD29F595FDC, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_5E1BB4AF_556A_EC0B_41D1_C9D283206AE1, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE4FC9B_4232_A0A0_41C7_BEB34AD7E39A, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_7047E610_5695_2B2C_41D5_16C2AF1EE3EE, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')){ if(this.getKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')) { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_41DED67D_5507_FBCA_41D1_8C3BF73507F8, 'showEffect', false); } else { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_70463611_5695_2B2C_41D1_8BCAFB4C82C8, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863'); if(this.existsKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')){ if(this.getKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')) { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_41DE967D_5507_FBC5_41D4_AEC0F414A77F, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_70467611_5695_2B2C_41D5_968CAEF0E097, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54'); if(this.existsKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')){ if(this.getKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')) { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_7046E611_5695_2B2C_41D2_B33B81AEDD35, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_779AFF3D_553A_894A_41B6_ABA840537EE1, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8'); if(this.existsKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')){ if(this.getKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')) { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_7046F612_5695_2B2C_41D3_C683F3A135A8, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_779AAF3D_553A_894A_41D3_E298C3D38F3B, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E'); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_70452612_5695_2B2C_41D1_0F81325BEEA4, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_76650F3E_553A_8946_41C2_7E9FE84BB636, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); if(this.existsKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')){ if(this.getKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')) { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_70456612_5695_2B2C_41CB_0AA3CCB6A9C2, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_7665CF3E_553A_8946_41CA_38626EF15A12, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_7264C1F6_4FC9_8BF6_41D3_3406BD33533A, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_70459613_5695_2B2C_41BF_8C991E60FEDE, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_726461F7_4FC9_8BF6_41C5_73FA0E92B63A, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_7045C613_5695_2B2C_41AC_01AEE6675C71, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_70443613_5695_2B2C_41C8_01F7A18424DF, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B551D5_5695_68D4_41BA_B22B99BE53D5, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_40B5B1D6_5695_68D4_41BE_E930F5807F1E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_70447614_5695_2B54_41A4_3659620E13F6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_7044D614_5695_2B54_41CC_34929A766FA2, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B5F1D6_5695_68D4_41B3_5F75C52C7C8E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_70430614_5695_2B54_41B0_26B9C35269B3, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B5D1D7_5695_68D4_41C5_3CFF9D0F8075, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')",
    "media": "this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3', this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E', this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.get('visible')); this.registerKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8', this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8.get('visible')); this.registerKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54', this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.get('visible')); this.registerKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863', this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726431F8_4FC9_8BFA_41CA_55EA2BE0E8C6, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B0F593_4211_A0A0_418E_AFD082FA622B, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_5E19C4B4_556A_EC1D_41D1_A2A708D8EAA3, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_5E1994B4_556A_EC1D_41BA_6E287D4B2DC5, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CEB9C9D_4232_A0A0_4182_47BCA14283F7, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_41DE1680_5507_FB3A_41D5_191A2AC8DF50, 'showEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_41DFF681_5507_FB3A_41CA_29611E76A119, 'showEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_7666EF42_553A_893E_41C0_918A27244B84, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_76615F42_553A_893E_41CA_F9F9CB909ECA, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_76678F43_553A_893E_41CF_230AFDC24DDC, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_76664F43_553A_893D_41CD_281B8D1C914E, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_726591F9_4FC9_8BFA_41AD_697A944F3807, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_7265C1FA_4FC9_8BFE_41D0_249438D9ACE6, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B5D1DC_5695_68D4_41C1_E888CB003076, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6392BA53_2B78_F0F9_4157_C9F7F4676B34, 'showEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B401DD_5695_68D4_41B7_5BFD96443315, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B471DE_5695_68D4_41C4_215F0D1DFFA2, 'hideEffect', false)",
    "camera": "this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_70447615_5695_2B54_41C7_229BD97FABC1, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726431F8_4FC9_8BFA_41CA_55EA2BE0E8C6, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B0F593_4211_A0A0_418E_AFD082FA622B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_7044C615_5695_2B54_4193_D8A3A2CF7F3C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_5E19C4B4_556A_EC1D_41D1_A2A708D8EAA3, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_7044F616_5695_2B54_419A_212C04656F7A, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_70432616_5695_2B54_41A5_DED703B11FF7, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_5E1994B4_556A_EC1D_41BA_6E287D4B2DC5, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CEB9C9D_4232_A0A0_4182_47BCA14283F7, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_70434616_5695_2B55_41B9_C63AF6528873, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')){ if(this.getKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')) { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_41DE1680_5507_FB3A_41D5_191A2AC8DF50, 'showEffect', false); } else { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_7043A617_5695_2B54_41C6_E67F00FEBAA6, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863'); if(this.existsKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')){ if(this.getKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')) { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_41DFF681_5507_FB3A_41CA_29611E76A119, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_7043F617_5695_2B54_41D3_E356A38C78CB, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54'); if(this.existsKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')){ if(this.getKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')) { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_70421618_5695_2B5C_41C7_D346E0B99EEA, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_7666EF42_553A_893E_41C0_918A27244B84, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8'); if(this.existsKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')){ if(this.getKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')) { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_70426618_5695_2B5C_41D5_5C77C4965272, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_76615F42_553A_893E_41CA_F9F9CB909ECA, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E'); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_7042A618_5695_2B5C_41B5_3B5BAC7B105B, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_76678F43_553A_893E_41CF_230AFDC24DDC, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); if(this.existsKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')){ if(this.getKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')) { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_7042C619_5695_2B5C_41C5_C144877C0112, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_76664F43_553A_893D_41CD_281B8D1C914E, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_726591F9_4FC9_8BFA_41AD_697A944F3807, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_70411619_5695_2B5C_4158_59A07F608645, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_7265C1FA_4FC9_8BFE_41D0_249438D9ACE6, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_70414619_5695_2B5C_41D2_1848C4006F55, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_7041A61A_5695_2B5C_41C8_D5E0405BB603, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B5D1DC_5695_68D4_41C1_E888CB003076, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6392BA53_2B78_F0F9_4157_C9F7F4676B34, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_7040161A_5695_2B5C_41D0_020C20786E06, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_7040261A_5695_2B5C_41CC_3F575AE427C3, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B401DD_5695_68D4_41B7_5BFD96443315, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_7040661B_5695_2B5C_41AC_EE865BEAFC53, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B471DE_5695_68D4_41C4_215F0D1DFFA2, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')",
    "media": "this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3', this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E', this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.get('visible')); this.registerKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8', this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8.get('visible')); this.registerKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54', this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.get('visible')); this.registerKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863', this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726651FB_4FC9_8BFE_41B0_507650F7FA47, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B06595_4211_A0A0_41AF_5A05C1CE96AC, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_5E1834B9_556A_EC17_41D2_9430EB548F52, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_5E18C4BA_556A_EC15_41B0_993036CBA4D3, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CEB3C9F_4232_A0A0_419A_6B51F183C876, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_41DD6684_5507_FB3A_41D3_DD4B57C8BB93, 'showEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_41DD0684_5507_FB3A_41CD_43AD81E812D7, 'showEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_76631F47_553A_89C6_41CE_1E3AAAF846A7, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_7663FF48_553A_89CA_41CF_8F6414C201B4, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_76627F48_553A_89CA_41BE_08724A507BBD, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_76622F49_553A_89CA_4193_06F419E1E872, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_726711FC_4FC9_8BFA_41B4_84CA982A4B68, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_726751FD_4FC9_8BFA_41CC_B39E07B66A99, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B3B1E3_5695_68EC_41C7_C902A56D8A5C, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6391DA55_2B78_F0FE_41B8_AEF165F124F7, 'showEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B451E4_5695_68F4_41C3_8E61F5DD4411, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B481E4_5695_68F5_41D1_1E48168FD3C5, 'hideEffect', false)",
    "camera": "this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_705F361B_5695_2B5C_41BD_9C422FB1E283, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726651FB_4FC9_8BFE_41B0_507650F7FA47, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B06595_4211_A0A0_41AF_5A05C1CE96AC, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_705FA61C_5695_2B54_4196_DE9450D5525F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_5E1834B9_556A_EC17_41D2_9430EB548F52, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_705FC61C_5695_2B54_41A3_1640FC7DC3FE, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_705FF61C_5695_2B54_41CE_07A96BAC3F3D, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_5E18C4BA_556A_EC15_41B0_993036CBA4D3, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CEB3C9F_4232_A0A0_419A_6B51F183C876, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_705E461D_5695_2B54_41CD_36B2D8711207, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')){ if(this.getKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')) { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_41DD6684_5507_FB3A_41D3_DD4B57C8BB93, 'showEffect', false); } else { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_705E861D_5695_2B54_41B3_7E3204F8673C, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863'); if(this.existsKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')){ if(this.getKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')) { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_41DD0684_5507_FB3A_41CD_43AD81E812D7, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_705F461D_5695_2B57_41D5_A4E9D97658D2, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54'); if(this.existsKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')){ if(this.getKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')) { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_705F961E_5695_2B54_41C9_258EAEC26BBC, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_76631F47_553A_89C6_41CE_1E3AAAF846A7, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8'); if(this.existsKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')){ if(this.getKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')) { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_705FC61E_5695_2B54_41D4_FEB9A8A55068, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_7663FF48_553A_89CA_41CF_8F6414C201B4, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E'); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_705E061E_5695_2B55_41B6_5C721735FF34, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_76627F48_553A_89CA_41BE_08724A507BBD, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); if(this.existsKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')){ if(this.getKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')) { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_705E461F_5695_2B54_41C9_31C4B8F035E4, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_76622F49_553A_89CA_4193_06F419E1E872, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_726711FC_4FC9_8BFA_41B4_84CA982A4B68, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_705E861F_5695_2B54_41CD_7BF50C5A18C9, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_726751FD_4FC9_8BFA_41CC_B39E07B66A99, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_705ED61F_5695_2B53_41B3_179BE88AA530, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_705D3620_5695_2B6C_41D3_1FBA47EBEA56, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B3B1E3_5695_68EC_41C7_C902A56D8A5C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6391DA55_2B78_F0FE_41B8_AEF165F124F7, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_705D8620_5695_2B6C_41CE_1390A5B0F062, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_705DB621_5695_2B6C_41D0_01EBB3D532C5, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B451E4_5695_68F4_41C3_8E61F5DD4411, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_705DF621_5695_2B6C_41D4_465AE85DD248, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B481E4_5695_68F5_41D1_1E48168FD3C5, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')",
    "media": "this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3', this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E', this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.get('visible')); this.registerKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8', this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8.get('visible')); this.registerKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54', this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.get('visible')); this.registerKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863', this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_7259D1FE_4FC9_8BF6_41CF_DB27A5C12535, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B38597_4211_A0A0_4180_89B4D6D90C2E, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_5E1E14BF_556A_EC0B_41C8_3FCB5AED267C, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_5E1ED4C0_556A_EC75_41C5_8ED0EF18D6DF, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CEAFCA0_4232_A0E1_41C6_589373582369, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_41DAA688_5507_FB4A_41C7_B00D12B1851C, 'showEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_41DA6688_5507_FB4A_41C7_96F748C2664C, 'showEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_766DBF4D_553A_89CA_41C1_6179891B36AF, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_766C6F4D_553A_89CA_41D0_B1E056BC8D9B, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_766C2F4E_553A_89C6_41D5_2DB544CB9DBD, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_766C8F4E_553A_89C6_41CD_09EA7ADE4415, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_725A91FF_4FC9_8BF5_41B7_502D2AAEEB51, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_725AE200_4FC9_880A_41AA_CF59DBED9A80, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B231EA_5695_68FC_41BA_C901C332A906, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_63900A57_2B78_F0FA_416E_CE3D049A5BE1, 'showEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B261EB_5695_68FC_41D4_AFBF40731950, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B251EB_5695_68FC_41C5_DA3C7FB2FC27, 'hideEffect', false)",
    "camera": "this.panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_705CF622_5695_2B6C_41BF_DAD5970F1E54, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_7259D1FE_4FC9_8BF6_41CF_DB27A5C12535, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B38597_4211_A0A0_4180_89B4D6D90C2E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_705B3622_5695_2B6C_41BF_FA0748DD1D96, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_5E1E14BF_556A_EC0B_41C8_3FCB5AED267C, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_705B5622_5695_2B6C_41D0_085F80BB4BA0, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_705BA623_5695_2B6C_41D3_8C42552DD066, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_5E1ED4C0_556A_EC75_41C5_8ED0EF18D6DF, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CEAFCA0_4232_A0E1_41C6_589373582369, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_705BC623_5695_2B6C_41CF_45AA1A225ADA, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')){ if(this.getKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')) { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_41DAA688_5507_FB4A_41C7_B00D12B1851C, 'showEffect', false); } else { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_705A1623_5695_2B6C_41CC_24DD68581425, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863'); if(this.existsKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')){ if(this.getKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')) { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_41DA6688_5507_FB4A_41C7_96F748C2664C, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_705A8624_5695_2B74_41C5_D82F83D7112E, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54'); if(this.existsKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')){ if(this.getKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')) { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_705AA624_5695_2B74_41C2_1C2FED476CA1, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_766DBF4D_553A_89CA_41C1_6179891B36AF, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8'); if(this.existsKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')){ if(this.getKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')) { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_705AE624_5695_2B74_41D4_97A3674FB2A1, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_766C6F4D_553A_89CA_41D0_B1E056BC8D9B, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E'); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_70592625_5695_2B74_41D2_90FCBEA4E645, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_766C2F4E_553A_89C6_41D5_2DB544CB9DBD, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); if(this.existsKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')){ if(this.getKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')) { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_70595625_5695_2B74_41A4_0329C79AA139, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_766C8F4E_553A_89C6_41CD_09EA7ADE4415, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_725A91FF_4FC9_8BF5_41B7_502D2AAEEB51, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_70597625_5695_2B74_41D3_248901B1B939, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_725AE200_4FC9_880A_41AA_CF59DBED9A80, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_7059C626_5695_2B74_41D2_7F63B9E85FAB, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_7059F626_5695_2B74_41C0_9C6D56F0C27B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_40B231EA_5695_68FC_41BA_C901C332A906, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_63900A57_2B78_F0FA_416E_CE3D049A5BE1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_705AC626_5695_2B74_41CE_337F2E269F2D, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_70590627_5695_2B74_41CE_8F5CCD91F6CB, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_40B261EB_5695_68FC_41D4_AFBF40731950, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_70595627_5695_2B74_41BF_ABDB71B1A944, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_40B251EB_5695_68FC_41C5_DA3C7FB2FC27, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')",
    "media": "this.panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0', this.Container_77D4607B_4271_6060_41A3_CF43634A36B0.get('visible')); this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356', this.IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356.get('visible')); this.registerKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604', this.Container_6E17E57D_4213_6060_41A1_9148D02E3604.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3', this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E', this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.get('visible')); this.registerKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8', this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8.get('visible')); this.registerKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54', this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.get('visible')); this.registerKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863', this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setEndToItemIndex(this.mainPlayList, 10, 11); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_71C44C38_5675_6F14_41C9_81C041298B77, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71C42C38_5675_6F14_41D1_94887A8CF8D1, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_71C40C39_5675_6F14_41C9_F19C41041CD7, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_64CAC37F_5677_990B_41BC_3ED16ECB47B4, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_71CBFC39_5675_6F14_41C4_44E0D31CAC52, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_71C53C3A_5675_6F14_41D2_D494E87C35E6, 'hideEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_71C4EC3B_5675_6F14_41B6_DFD422A44844, 'hideEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_71C4CC3B_5675_6F14_41A1_6C19A8EE6BAE, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_71C4AC3C_5675_6F0C_41D2_FB34B665FF51, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_71C48C3C_5675_6F0C_41BF_5344818BB903, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_71C47C3D_5675_6F0C_41CF_1C7196C6DE79, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_71C40C3D_5675_6F0C_41CA_221F8D99D9A6, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_71CBCC3E_5675_6F0C_41BB_AA9EC38FA333, 'showEffect', false); this.setComponentVisibility(this.Container_6E17E57D_4213_6060_41A1_9148D02E3604, true, -1, this.effect_71CBAC3F_5675_6F0C_41C3_4BC30C9FECC4, 'showEffect', false); this.setComponentVisibility(this.IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356, true, -1, this.effect_71CB6C3F_5675_6F0C_41D0_854FD3D4AAB0, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_41CE9BF1_567B_38EC_4194_6A36FD27C15F, 'showEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_71CB3C40_5675_6F74_41C9_03F106DB52FC, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_71CACC41_5675_6F74_41B6_52F4F2B26322, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_71C45C41_5675_6F74_41D5_7BFE4EFCAC53, 'showEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_71C43C42_5675_6F74_41CA_30D59D0D6443, 'hideEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_71CBEC42_5675_6F75_41BB_8AB9D428F376, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_71CBCC43_5675_6F74_41C5_5446C930C092, 'showEffect', false)",
    "camera": "this.panorama_DA745E41_569A_FC77_41BC_DB4EF5925F5C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_70583628_5695_2B7C_41C6_EB4D331F3A3F, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_71C44C38_5675_6F14_41C9_81C041298B77, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71C42C38_5675_6F14_41D1_94887A8CF8D1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_70589628_5695_2B7C_41AB_B7B3FCE2DFEE, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_71C40C39_5675_6F14_41C9_F19C41041CD7, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_7058C629_5695_2B7C_41A4_48567C42656D, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_7058E629_5695_2B7C_41CC_B824D581C16A, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_64CAC37F_5677_990B_41BC_3ED16ECB47B4, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_71CBFC39_5675_6F14_41C4_44E0D31CAC52, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_70574629_5695_2B7C_41AA_41B75A54100B, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')){ if(this.getKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')) { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_7057762A_5695_2B7C_419D_58FDAAFF6580, 'showEffect', false); } else { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_71C53C3A_5675_6F14_41D2_D494E87C35E6, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863'); if(this.existsKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')){ if(this.getKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')) { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_7057A62A_5695_2B7C_41D4_D978E9FA41D2, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_71C4EC3B_5675_6F14_41B6_DFD422A44844, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54'); if(this.existsKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')){ if(this.getKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')) { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_7057F62A_5695_2B7C_41C1_16C4325FF978, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_71C4CC3B_5675_6F14_41A1_6C19A8EE6BAE, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8'); if(this.existsKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')){ if(this.getKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')) { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_7056062B_5695_2B7C_41C8_CFE98AAB2891, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_71C4AC3C_5675_6F0C_41D2_FB34B665FF51, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E'); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_7056362B_5695_2B7C_4191_A26ADAA51E8D, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_71C48C3C_5675_6F0C_41BF_5344818BB903, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); if(this.existsKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')){ if(this.getKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')) { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_7056A62B_5695_2B7C_41C9_B43FC1A3130A, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_71C47C3D_5675_6F0C_41CF_1C7196C6DE79, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_71C40C3D_5675_6F0C_41CA_221F8D99D9A6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_7056E62C_5695_2B74_41CC_3E46E2D8BCFC, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_71CBCC3E_5675_6F0C_41BB_AA9EC38FA333, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_7055262C_5695_2B74_41BF_A946BB80A678, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604')){ if(this.getKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604')) { this.setComponentVisibility(this.Container_6E17E57D_4213_6060_41A1_9148D02E3604, true, -1, this.effect_71CBAC3F_5675_6F0C_41C3_4BC30C9FECC4, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6E17E57D_4213_6060_41A1_9148D02E3604, false, -1, this.effect_7055562C_5695_2B74_41B8_A13700508F82, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604'); if(this.existsKey('visibility_IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356')){ if(this.getKey('visibility_IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356')) { this.setComponentVisibility(this.IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356, true, -1, this.effect_71CB6C3F_5675_6F0C_41D0_854FD3D4AAB0, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356, false, -1, this.effect_7055962D_5695_2B74_41D5_044ECDDCDD79, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_41CE9BF1_567B_38EC_4194_6A36FD27C15F, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, this.effect_7055C62D_5695_2B74_41D3_4231236B46F9, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_7054162D_5695_2B74_41A4_01F675A63642, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_71CB3C40_5675_6F74_41C9_03F106DB52FC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_7054462E_5695_2B74_41D0_A7EA2C60FD4C, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_71CACC41_5675_6F74_41B6_52F4F2B26322, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_71C45C41_5675_6F74_41D5_7BFE4EFCAC53, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_7054762E_5695_2B74_41C6_16E344F22234, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_7054D62E_5695_2B74_41CC_E8B3DA860DD7, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_71C43C42_5675_6F74_41CA_30D59D0D6443, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); if(this.existsKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')){ if(this.getKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')) { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_71CBEC42_5675_6F75_41BB_8AB9D428F376, 'showEffect', false); } else { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, -1, this.effect_7054F62F_5695_2B74_41D2_72FF32494069, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_71CBCC43_5675_6F74_41C5_5446C930C092, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_7053262F_5695_2B74_41D4_C0C412710576, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_DA745E41_569A_FC77_41BC_DB4EF5925F5C"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0', this.Container_77D4607B_4271_6060_41A3_CF43634A36B0.get('visible')); this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356', this.IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356.get('visible')); this.registerKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604', this.Container_6E17E57D_4213_6060_41A1_9148D02E3604.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3', this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E', this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.get('visible')); this.registerKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8', this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8.get('visible')); this.registerKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54', this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.get('visible')); this.registerKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863', this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setEndToItemIndex(this.mainPlayList, 11, 0); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_71CB8C44_5675_6F7C_41BB_33B02D6F19F5, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71CB4C44_5675_6F7D_41D4_A56DF9412857, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_71CB3C45_5675_6F7C_41D2_95CAA49CBA82, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_64CB4387_5677_99FB_41C0_5E9ABA4BE93A, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_71CAFC46_5675_6F7C_417E_DDE9F7FA378C, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_71CAAC46_5675_6F7C_41A3_D2180B2ED0EA, 'hideEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_71CA8C47_5675_6F7C_41BB_AEAB1454686A, 'hideEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_71CA6C47_5675_6F7C_41D0_C11256CAF3B8, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_71CA2C48_5675_6F74_41C3_76BA544887DF, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_71CB8C48_5675_6F75_41D0_BA164D8AACEA, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_71CB6C49_5675_6F74_41D0_22BF2B45AC93, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_71CB5C4A_5675_6F74_41BB_8190A3209C1F, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_71CB0C4A_5675_6F74_41B7_AB47F38F2527, 'showEffect', false); this.setComponentVisibility(this.Container_6E17E57D_4213_6060_41A1_9148D02E3604, true, -1, this.effect_71CAFC4B_5675_6F74_41CA_8A7752BEB6D3, 'showEffect', false); this.setComponentVisibility(this.IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356, true, -1, this.effect_71CABC4B_5675_6F74_41C7_F18911B6E65A, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_41CAABF9_567B_38DC_4198_B99575EB9FCA, 'showEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_71CA3C4C_5675_6F0C_41B8_EA963742928E, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_71C9EC4D_5675_6F0C_41C3_7A98842B70D2, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_71C9AC4D_5675_6F0F_41D3_2C350CFFB2F2, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_4CE7BAF0_569B_38EC_41B6_8C7B91E08C40, 'showEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_71C94C4F_5675_6F0C_41D3_622785F10B00, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_71C92C4F_5675_6F0C_41C7_4547646F281E, 'showEffect', false)",
    "camera": "this.panorama_5CBFE6CE_564D_7B0D_41CB_D08DFA721F49_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_70548630_5695_2B6C_41BB_13A6D7D0258B, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_71CB8C44_5675_6F7C_41BB_33B02D6F19F5, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71CB4C44_5675_6F7D_41D4_A56DF9412857, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_70530630_5695_2B6C_419B_1CFC0F967BA7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_71CB3C45_5675_6F7C_41D2_95CAA49CBA82, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_70533630_5695_2B6C_41B5_2C8A66FEC0B6, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_70535631_5695_2B6C_41CD_374221782868, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_64CB4387_5677_99FB_41C0_5E9ABA4BE93A, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_71CAFC46_5675_6F7C_417E_DDE9F7FA378C, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_7053B631_5695_2B6C_41B9_23EF7E6A650A, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')){ if(this.getKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863')) { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_7053F631_5695_2B6F_419D_F29A8AF56790, 'showEffect', false); } else { this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_71CAAC46_5675_6F7C_41A3_D2180B2ED0EA, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_41E00F2C_5161_7B35_41C6_BC2399CBF863'); if(this.existsKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')){ if(this.getKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54')) { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_70522632_5695_2B6C_41BC_CF11FF928757, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_71CA8C47_5675_6F7C_41BB_AEAB1454686A, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_41096450_516F_2D6D_41C6_3B86CF181E54'); if(this.existsKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')){ if(this.getKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8')) { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_70527632_5695_2B6C_41AA_59F6CC9F242B, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_71CA6C47_5675_6F7C_41D0_C11256CAF3B8, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8'); if(this.existsKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')){ if(this.getKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E')) { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_7052A633_5695_2B6C_41D4_D9BAFE7067B8, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_71CA2C48_5675_6F74_41C3_76BA544887DF, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E'); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_7052D633_5695_2B6C_41D3_6DBE3333008F, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_71CB8C48_5675_6F75_41D0_BA164D8AACEA, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); if(this.existsKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')){ if(this.getKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3')) { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_70514633_5695_2B6C_41D1_C17613020DCE, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_71CB6C49_5675_6F74_41D0_22BF2B45AC93, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_71CB5C4A_5675_6F74_41BB_8190A3209C1F, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_70517634_5695_2B54_41B2_4C7AB4BA11CF, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_71CB0C4A_5675_6F74_41B7_AB47F38F2527, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_7051B634_5695_2B54_41C0_4DD4FE75C550, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604')){ if(this.getKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604')) { this.setComponentVisibility(this.Container_6E17E57D_4213_6060_41A1_9148D02E3604, true, -1, this.effect_71CAFC4B_5675_6F74_41CA_8A7752BEB6D3, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6E17E57D_4213_6060_41A1_9148D02E3604, false, -1, this.effect_7051F634_5695_2B54_4164_64D41569E2C9, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604'); if(this.existsKey('visibility_IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356')){ if(this.getKey('visibility_IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356')) { this.setComponentVisibility(this.IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356, true, -1, this.effect_71CABC4B_5675_6F74_41C7_F18911B6E65A, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356, false, -1, this.effect_70503634_5695_2B55_41C2_8B215CB89F8C, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_41CAABF9_567B_38DC_4198_B99575EB9FCA, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, this.effect_70506635_5695_2B54_41CC_158A67B73310, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_7050A635_5695_2B54_4196_5706E025BC1A, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_71CA3C4C_5675_6F0C_41B8_EA963742928E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_7050F635_5695_2B57_41CE_2BD994BDE608, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_71C9EC4D_5675_6F0C_41C3_7A98842B70D2, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_706F2636_5695_2B54_41D1_FD526478E87C, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_71C9AC4D_5675_6F0F_41D3_2C350CFFB2F2, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_4CE7BAF0_569B_38EC_41B6_8C7B91E08C40, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_706F8636_5695_2B54_41BC_6D60087553FA, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); if(this.existsKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')){ if(this.getKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')) { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_71C94C4F_5675_6F0C_41D3_622785F10B00, 'showEffect', false); } else { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, -1, this.effect_706FC637_5695_2B54_41CD_ABCF6FE0F1D4, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_71C92C4F_5675_6F0C_41C7_4547646F281E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_706FE637_5695_2B54_41B8_EF7E4468A7EA, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_5CBFE6CE_564D_7B0D_41CB_D08DFA721F49"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_4CCAE62B_55FA_AC0B_41D3_6531A82AC554_t.jpg",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_4CCAE62B_55FA_AC0B_41D3_6531A82AC554.mp4",
   "width": 1920,
   "webmUrl": "media/video_4CCAE62B_55FA_AC0B_41D3_6531A82AC554.webm"
  },
  "label": "MB",
  "width": 1920,
  "loop": false,
  "id": "video_4CCAE62B_55FA_AC0B_41D3_6531A82AC554",
  "height": 1080,
  "class": "Video",
  "scaleMode": "fit_inside"
 },
 {
  "id": "playList_7EF08442_5695_2F2C_41C5_DD3924CE0A38",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0', this.Container_77D4607B_4271_6060_41A3_CF43634A36B0.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_4BD8F14B_5597_E40A_41B3_55F825C95BBB, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_4BD8B14C_5597_E40D_4190_117674B71D23, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_4BD8114D_5597_E40F_41D1_34C7BBE707C6, 'hideEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_4BD8214D_5597_E40F_41B9_D50CF2B4F416, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_4BD9E14E_5597_E40D_41CB_5F7E3FC7FC6D, 'showEffect', false)",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7EF08442_5695_2F2C_41C5_DD3924CE0A38, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7EF08442_5695_2F2C_41C5_DD3924CE0A38, 0, this.video_4CCAE62B_55FA_AC0B_41D3_6531A82AC554)",
    "class": "VideoPlayListItem",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_706EE638_5695_2B5C_41D1_3BEE93A7E79E, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_4BD8F14B_5597_E40A_41B3_55F825C95BBB, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_706D2638_5695_2B5C_41BF_B22B50DC8BA9, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_4BD8B14C_5597_E40D_4190_117674B71D23, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_706D5638_5695_2B5C_41D3_29E025861DCC, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_4BD8114D_5597_E40F_41D1_34C7BBE707C6, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')){ if(this.getKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')) { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_4BD8214D_5597_E40F_41B9_D50CF2B4F416, 'showEffect', false); } else { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, -1, this.effect_706E1639_5695_2B5C_41C6_EE4D23B83BF1, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_4BD9E14E_5597_E40D_41CB_5F7E3FC7FC6D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_706E4639_5695_2B5C_4196_1317C1CCC6D2, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.video_4CCAE62B_55FA_AC0B_41D3_6531A82AC554"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_7AB00E25_51F3_127E_41C7_17B52509A472_t.jpg",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_7AB00E25_51F3_127E_41C7_17B52509A472.mp4",
   "width": 1920,
   "webmUrl": "media/video_7AB00E25_51F3_127E_41C7_17B52509A472.webm"
  },
  "label": "DM",
  "width": 1920,
  "loop": false,
  "id": "video_7AB00E25_51F3_127E_41C7_17B52509A472",
  "height": 1080,
  "class": "Video",
  "scaleMode": "fit_inside"
 },
 {
  "id": "playList_7E8F1443_5695_2F2C_41D1_344E519571DE",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_4BDAC14F_5597_E40B_41B7_A26869342FF3, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_7E316332_51AF_2B2D_419B_C1E4901A999F, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_7675FF57_553A_89C6_41A9_CE1353BBF600, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_7E309333_51AF_2B13_41C7_2F13138DBABC, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_76741F58_553A_89CA_41D3_03D1D15ED197, 'hideEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_40DF16C5_5161_6D76_41CE_23717A708B39, 'hideEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_40DF46C6_5161_6D75_4178_022F57B6BB96, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_3C287B3E_51A2_9972_41B7_656605B0E8B4, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_02AA32EA_5065_8B1D_41D3_7CCD4EFB78A2, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_386801D4_51E2_8935_417D_BAC8BBA751DE, 'hideEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_5C2ABBF4_5161_7B15_41C5_B9136ACE46A5, 'hideEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, this.effect_7D08104C_51A1_2575_41B6_6337FC1F9382, 'hideEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_77794990_5161_67ED_41B0_94BBED414FC4, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_4C3D4A8B_5161_25F3_41C3_4B9594B0BE8F, 'showEffect', false)",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.playList_7E8F1443_5695_2F2C_41D1_344E519571DE, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7E8F1443_5695_2F2C_41D1_344E519571DE, 0, this.video_7AB00E25_51F3_127E_41C7_17B52509A472)",
    "class": "VideoPlayListItem",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_706D563A_5695_2B5C_41D1_B25397A71083, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_4BDAC14F_5597_E40B_41B7_A26869342FF3, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_706D763A_5695_2B5C_41D1_C80776E15324, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_7E316332_51AF_2B2D_419B_C1E4901A999F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_706DC63A_5695_2B5D_41CA_AA078FE00D85, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_7675FF57_553A_89C6_41A9_CE1353BBF600, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_706C063B_5695_2B5C_41B3_20550D51E974, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_7E309333_51AF_2B13_41C7_2F13138DBABC, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_706C463B_5695_2B5C_41D2_914022222CD8, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_76741F58_553A_89CA_41D3_03D1D15ED197, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_40DF66C6_5161_6D75_4191_1EB238710CC7, 'hideEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_40DF66C6_5161_6D75_4191_1EB238710CC7, 'hideEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_40DFB6C6_5161_6D75_4100_CA059BCAE420, 'hideEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_40DFB6C6_5161_6D75_4100_CA059BCAE420, 'hideEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_3C286B3E_51A2_9975_41C0_005CB61B26B7, 'hideEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_3C286B3E_51A2_9975_41C0_005CB61B26B7, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_02ADB2EB_5065_8B13_41C8_6FDF308C307F, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_02ADB2EB_5065_8B13_41C8_6FDF308C307F, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_5C2A3BF3_5161_7B13_41C8_BD6DC8221933, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_5C2A3BF3_5161_7B13_41C8_BD6DC8221933, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_02ADF2EA_5065_8B1D_41D2_CEA58E6CE320, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_02ADF2EA_5065_8B1D_41D2_CEA58E6CE320, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_5C2AABF4_5161_7B15_41D3_D6AE4A0ECFC1, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_5C2AABF4_5161_7B15_41D3_D6AE4A0ECFC1, 'hideEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_5C2A8BF4_5161_7B15_41D4_11BB99605814, 'hideEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_5C2A8BF4_5161_7B15_41D4_11BB99605814, 'hideEffect', false); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_706CF63C_5695_2B54_41B2_B03745EBF73A, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, this.effect_7D08104C_51A1_2575_41B6_6337FC1F9382, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, -1, this.effect_777EB990_5161_67ED_41A9_907A812EB140, 'hideEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, -1, this.effect_777EB990_5161_67ED_41A9_907A812EB140, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_777EA990_5161_67EE_41C3_34CC041F734E, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_777EA990_5161_67EE_41C3_34CC041F734E, 'hideEffect', false)",
    "media": "this.video_7AB00E25_51F3_127E_41C7_17B52509A472"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_4D3A5613_55F6_6C1B_41D3_6631A644011A_t.jpg",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_4D3A5613_55F6_6C1B_41D3_6631A644011A.mp4",
   "width": 1920,
   "webmUrl": "media/video_4D3A5613_55F6_6C1B_41D3_6631A644011A.webm"
  },
  "label": "PDZ",
  "width": 1920,
  "loop": false,
  "id": "video_4D3A5613_55F6_6C1B_41D3_6631A644011A",
  "height": 1080,
  "class": "Video",
  "scaleMode": "fit_inside"
 },
 {
  "id": "playList_7E8FC444_5695_2F34_41BA_521C098B3139",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0', this.Container_77D4607B_4271_6060_41A3_CF43634A36B0.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_4BDCA151_5597_E416_41CA_282652C6B398, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_4BDC4152_5597_E415_41A5_7C0E67C18C40, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_4BDB8153_5597_E41B_41C8_D92EADDDA0D3, 'hideEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_4BDB4153_5597_E41B_41CE_618C89EAE4E5, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_4BDB6154_5597_E41D_41A2_44336346A7AA, 'showEffect', false)",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7E8FC444_5695_2F34_41BA_521C098B3139, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7E8FC444_5695_2F34_41BA_521C098B3139, 0, this.video_4D3A5613_55F6_6C1B_41D3_6631A644011A)",
    "class": "VideoPlayListItem",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_706A363D_5695_2B54_41CD_2E20C1371525, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_4BDCA151_5597_E416_41CA_282652C6B398, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_706A663D_5695_2B54_4191_2A46B7164BE7, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_4BDC4152_5597_E415_41A5_7C0E67C18C40, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_706AA63D_5695_2B54_41B2_DAA799CA8487, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_4BDB8153_5597_E41B_41C8_D92EADDDA0D3, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')){ if(this.getKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')) { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_4BDB4153_5597_E41B_41CE_618C89EAE4E5, 'showEffect', false); } else { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, -1, this.effect_706AF63E_5695_2B54_41BA_F571D85F7F69, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_4BDB6154_5597_E41D_41A2_44336346A7AA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_7069363E_5695_2B54_41CB_564D857D048C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.video_4D3A5613_55F6_6C1B_41D3_6631A644011A"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_76330817_51F1_1E5A_41C8_BAE5158F0B37_t.jpg",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_76330817_51F1_1E5A_41C8_BAE5158F0B37.mp4",
   "width": 1920,
   "webmUrl": "media/video_76330817_51F1_1E5A_41C8_BAE5158F0B37.webm"
  },
  "label": "05 Nikitha",
  "width": 1920,
  "loop": false,
  "id": "video_76330817_51F1_1E5A_41C8_BAE5158F0B37",
  "height": 1080,
  "class": "Video",
  "scaleMode": "fit_inside"
 },
 {
  "id": "PlayList_5A76566C_5674_EBF4_41CF_3F6D4D2D1E92",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid5B40B619_5674_EB5F_4191_0E2B128E898DVideoPlayer)",
    "player": {
     "viewerArea": {
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "toolTipShadowColor": "#333333",
      "toolTipFontFamily": "Arial",
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "playbackBarBackgroundOpacity": 1,
      "progressHeight": 0,
      "toolTipTextShadowBlurRadius": 3,
      "progressBottom": 2,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "toolTipPaddingLeft": 6,
      "progressBorderSize": 0,
      "minHeight": 50,
      "playbackBarHeight": 0,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadBorderSize": 0,
      "playbackBarHeadWidth": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarProgressBorderSize": 0,
      "borderSize": 0,
      "height": "100%",
      "width": "100%",
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "paddingRight": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarRight": 0,
      "progressBarBorderRadius": 0,
      "playbackBarHeadHeight": 30,
      "progressBarBorderSize": 0,
      "playbackBarLeft": 0,
      "progressOpacity": 1,
      "toolTipOpacity": 1,
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "transitionMode": "blending",
      "paddingBottom": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "playbackBarHeadShadowOpacity": 0,
      "progressBorderRadius": 0,
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingRight": 6,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "shadow": false,
      "toolTipFontStyle": "normal",
      "id": "viewer_uid723F444F_5695_2F34_41C5_8C2F1390AC24",
      "toolTipPaddingBottom": 4,
      "toolTipPaddingTop": 4,
      "toolTipShadowSpread": 0,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "toolTipFontWeight": "normal",
      "toolTipFontColor": "#606060",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadShadow": true,
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderColor": "#AAAAAA",
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarBorderRadius": 0,
      "class": "ViewerArea",
      "progressBackgroundColorDirection": "vertical",
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "toolTipShadowHorizontalLength": 0,
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBorderColor": "#AAAAAA",
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarOpacity": 1
     },
     "id": "viewer_uid5B40B619_5674_EB5F_4191_0E2B128E898DVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true
    },
    "media": "this.video_76330817_51F1_1E5A_41C8_BAE5158F0B37",
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid5B40B619_5674_EB5F_4191_0E2B128E898DVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_5A76566C_5674_EBF4_41CF_3F6D4D2D1E92, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_5A76566C_5674_EBF4_41CF_3F6D4D2D1E92, 0, this.video_76330817_51F1_1E5A_41C8_BAE5158F0B37)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F_t.jpg",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F.mp4",
   "width": 1920,
   "webmUrl": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F.webm"
  },
  "label": "03 Ramprasad",
  "width": 1920,
  "loop": false,
  "id": "video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F",
  "height": 1080,
  "class": "Video",
  "scaleMode": "fit_inside"
 },
 {
  "id": "PlayList_5A71A66C_5674_EBF4_41D1_C0904051AD56",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid5B4DF61D_5674_EB54_41C1_243197D08BDAVideoPlayer)",
    "player": {
     "viewerArea": {
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "toolTipShadowColor": "#333333",
      "toolTipFontFamily": "Arial",
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "playbackBarBackgroundOpacity": 1,
      "progressHeight": 0,
      "toolTipTextShadowBlurRadius": 3,
      "progressBottom": 2,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "toolTipPaddingLeft": 6,
      "progressBorderSize": 0,
      "minHeight": 50,
      "playbackBarHeight": 0,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadBorderSize": 0,
      "playbackBarHeadWidth": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarProgressBorderSize": 0,
      "borderSize": 0,
      "height": "100%",
      "width": "100%",
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "paddingRight": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarRight": 0,
      "progressBarBorderRadius": 0,
      "playbackBarHeadHeight": 30,
      "progressBarBorderSize": 0,
      "playbackBarLeft": 0,
      "progressOpacity": 1,
      "toolTipOpacity": 1,
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "transitionMode": "blending",
      "paddingBottom": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "playbackBarHeadShadowOpacity": 0,
      "progressBorderRadius": 0,
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingRight": 6,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "shadow": false,
      "toolTipFontStyle": "normal",
      "id": "viewer_uid723D9451_5695_2F2F_41C4_8DAE38B48F9A",
      "toolTipPaddingBottom": 4,
      "toolTipPaddingTop": 4,
      "toolTipShadowSpread": 0,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "toolTipFontWeight": "normal",
      "toolTipFontColor": "#606060",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadShadow": true,
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderColor": "#AAAAAA",
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarBorderRadius": 0,
      "class": "ViewerArea",
      "progressBackgroundColorDirection": "vertical",
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "toolTipShadowHorizontalLength": 0,
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBorderColor": "#AAAAAA",
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarOpacity": 1
     },
     "id": "viewer_uid5B4DF61D_5674_EB54_41C1_243197D08BDAVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true
    },
    "media": "this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F",
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid5B4DF61D_5674_EB54_41C1_243197D08BDAVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_5A71A66C_5674_EBF4_41D1_C0904051AD56, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_5A71A66C_5674_EBF4_41D1_C0904051AD56, 0, this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6_t.jpg",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6.mp4",
   "width": 1920,
   "webmUrl": "media/video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6.webm"
  },
  "label": "06 Usha T",
  "width": 1920,
  "loop": false,
  "id": "video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6",
  "height": 1080,
  "class": "Video",
  "scaleMode": "fit_inside"
 },
 {
  "id": "PlayList_5A71666D_5674_EBF4_4181_91AE77033B38",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid5B4D561E_5674_EB54_41BF_5B0CD18A4B50VideoPlayer)",
    "player": {
     "viewerArea": {
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "toolTipShadowColor": "#333333",
      "toolTipFontFamily": "Arial",
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "playbackBarBackgroundOpacity": 1,
      "progressHeight": 0,
      "toolTipTextShadowBlurRadius": 3,
      "progressBottom": 2,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "toolTipPaddingLeft": 6,
      "progressBorderSize": 0,
      "minHeight": 50,
      "playbackBarHeight": 0,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadBorderSize": 0,
      "playbackBarHeadWidth": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarProgressBorderSize": 0,
      "borderSize": 0,
      "height": "100%",
      "width": "100%",
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "paddingRight": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarRight": 0,
      "progressBarBorderRadius": 0,
      "playbackBarHeadHeight": 30,
      "progressBarBorderSize": 0,
      "playbackBarLeft": 0,
      "progressOpacity": 1,
      "toolTipOpacity": 1,
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "transitionMode": "blending",
      "paddingBottom": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "playbackBarHeadShadowOpacity": 0,
      "progressBorderRadius": 0,
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingRight": 6,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "shadow": false,
      "toolTipFontStyle": "normal",
      "id": "viewer_uid723C5452_5695_2F2C_4192_5E109F9BB66C",
      "toolTipPaddingBottom": 4,
      "toolTipPaddingTop": 4,
      "toolTipShadowSpread": 0,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "toolTipFontWeight": "normal",
      "toolTipFontColor": "#606060",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadShadow": true,
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderColor": "#AAAAAA",
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarBorderRadius": 0,
      "class": "ViewerArea",
      "progressBackgroundColorDirection": "vertical",
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "toolTipShadowHorizontalLength": 0,
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBorderColor": "#AAAAAA",
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarOpacity": 1
     },
     "id": "viewer_uid5B4D561E_5674_EB54_41BF_5B0CD18A4B50VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true
    },
    "media": "this.video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6",
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid5B4D561E_5674_EB54_41BF_5B0CD18A4B50VideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_5A71666D_5674_EBF4_4181_91AE77033B38, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_5A71666D_5674_EBF4_4181_91AE77033B38, 0, this.video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6)"
   }
  ]
 },
 {
  "id": "PlayList_5A71266E_5674_EBF4_41B5_CDC28585DBC3",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid5B4FB621_5674_EB6C_41A2_3A90F4D6928EVideoPlayer)",
    "player": {
     "viewerArea": {
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "toolTipShadowColor": "#333333",
      "toolTipFontFamily": "Arial",
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "playbackBarBackgroundOpacity": 1,
      "progressHeight": 0,
      "toolTipTextShadowBlurRadius": 3,
      "progressBottom": 2,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "toolTipPaddingLeft": 6,
      "progressBorderSize": 0,
      "minHeight": 50,
      "playbackBarHeight": 0,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadBorderSize": 0,
      "playbackBarHeadWidth": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarProgressBorderSize": 0,
      "borderSize": 0,
      "height": "100%",
      "width": "100%",
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "paddingRight": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarRight": 0,
      "progressBarBorderRadius": 0,
      "playbackBarHeadHeight": 30,
      "progressBarBorderSize": 0,
      "playbackBarLeft": 0,
      "progressOpacity": 1,
      "toolTipOpacity": 1,
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "transitionMode": "blending",
      "paddingBottom": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "playbackBarHeadShadowOpacity": 0,
      "progressBorderRadius": 0,
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingRight": 6,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "shadow": false,
      "toolTipFontStyle": "normal",
      "id": "viewer_uid723A9455_5695_2FD4_41B1_75190097BE4C",
      "toolTipPaddingBottom": 4,
      "toolTipPaddingTop": 4,
      "toolTipShadowSpread": 0,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "toolTipFontWeight": "normal",
      "toolTipFontColor": "#606060",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadShadow": true,
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderColor": "#AAAAAA",
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarBorderRadius": 0,
      "class": "ViewerArea",
      "progressBackgroundColorDirection": "vertical",
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "toolTipShadowHorizontalLength": 0,
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBorderColor": "#AAAAAA",
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarOpacity": 1
     },
     "id": "viewer_uid5B4FB621_5674_EB6C_41A2_3A90F4D6928EVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true
    },
    "media": "this.video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6",
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid5B4FB621_5674_EB6C_41A2_3A90F4D6928EVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_5A71266E_5674_EBF4_41B5_CDC28585DBC3, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_5A71266E_5674_EBF4_41B5_CDC28585DBC3, 0, this.video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_79E6AF2E_51F1_724B_41D0_772ED7CFF496_t.jpg",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_79E6AF2E_51F1_724B_41D0_772ED7CFF496.mp4",
   "width": 1920,
   "webmUrl": "media/video_79E6AF2E_51F1_724B_41D0_772ED7CFF496.webm"
  },
  "label": "12 Angela Paulson",
  "width": 1920,
  "loop": false,
  "id": "video_79E6AF2E_51F1_724B_41D0_772ED7CFF496",
  "height": 1080,
  "class": "Video",
  "scaleMode": "fit_inside"
 },
 {
  "id": "PlayList_5A70F66E_5674_EBF4_41C3_5BB4281CC7F8",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid5B4F3622_5674_EB6C_419D_4D734B0AB41DVideoPlayer)",
    "player": {
     "viewerArea": {
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "toolTipShadowColor": "#333333",
      "toolTipFontFamily": "Arial",
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "playbackBarBackgroundOpacity": 1,
      "progressHeight": 0,
      "toolTipTextShadowBlurRadius": 3,
      "progressBottom": 2,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "toolTipPaddingLeft": 6,
      "progressBorderSize": 0,
      "minHeight": 50,
      "playbackBarHeight": 0,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadBorderSize": 0,
      "playbackBarHeadWidth": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarProgressBorderSize": 0,
      "borderSize": 0,
      "height": "100%",
      "width": "100%",
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "paddingRight": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarRight": 0,
      "progressBarBorderRadius": 0,
      "playbackBarHeadHeight": 30,
      "progressBarBorderSize": 0,
      "playbackBarLeft": 0,
      "progressOpacity": 1,
      "toolTipOpacity": 1,
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "transitionMode": "blending",
      "paddingBottom": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "playbackBarHeadShadowOpacity": 0,
      "progressBorderRadius": 0,
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingRight": 6,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "shadow": false,
      "toolTipFontStyle": "normal",
      "id": "viewer_uid72390456_5695_2FD4_41D0_179112771AE0",
      "toolTipPaddingBottom": 4,
      "toolTipPaddingTop": 4,
      "toolTipShadowSpread": 0,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "toolTipFontWeight": "normal",
      "toolTipFontColor": "#606060",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadShadow": true,
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderColor": "#AAAAAA",
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarBorderRadius": 0,
      "class": "ViewerArea",
      "progressBackgroundColorDirection": "vertical",
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "toolTipShadowHorizontalLength": 0,
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBorderColor": "#AAAAAA",
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarOpacity": 1
     },
     "id": "viewer_uid5B4F3622_5674_EB6C_419D_4D734B0AB41DVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true
    },
    "media": "this.video_79E6AF2E_51F1_724B_41D0_772ED7CFF496",
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid5B4F3622_5674_EB6C_419D_4D734B0AB41DVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_5A70F66E_5674_EBF4_41C3_5BB4281CC7F8, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_5A70F66E_5674_EBF4_41C3_5BB4281CC7F8, 0, this.video_79E6AF2E_51F1_724B_41D0_772ED7CFF496)"
   }
  ]
 },
 {
  "id": "PlayList_5A70B66F_5674_EBF4_41D3_5C49F74520E4",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid5B4ED623_5674_EB6C_41C0_D3EB410DE360VideoPlayer)",
    "player": {
     "viewerArea": {
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "toolTipShadowColor": "#333333",
      "toolTipFontFamily": "Arial",
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "playbackBarBackgroundOpacity": 1,
      "progressHeight": 0,
      "toolTipTextShadowBlurRadius": 3,
      "progressBottom": 2,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "toolTipPaddingLeft": 6,
      "progressBorderSize": 0,
      "minHeight": 50,
      "playbackBarHeight": 0,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadBorderSize": 0,
      "playbackBarHeadWidth": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarProgressBorderSize": 0,
      "borderSize": 0,
      "height": "100%",
      "width": "100%",
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "paddingRight": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarRight": 0,
      "progressBarBorderRadius": 0,
      "playbackBarHeadHeight": 30,
      "progressBarBorderSize": 0,
      "playbackBarLeft": 0,
      "progressOpacity": 1,
      "toolTipOpacity": 1,
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "transitionMode": "blending",
      "paddingBottom": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "playbackBarHeadShadowOpacity": 0,
      "progressBorderRadius": 0,
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingRight": 6,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "shadow": false,
      "toolTipFontStyle": "normal",
      "id": "viewer_uid7239A456_5695_2FD4_41B1_E4CB05D4A41A",
      "toolTipPaddingBottom": 4,
      "toolTipPaddingTop": 4,
      "toolTipShadowSpread": 0,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "toolTipFontWeight": "normal",
      "toolTipFontColor": "#606060",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadShadow": true,
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderColor": "#AAAAAA",
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarBorderRadius": 0,
      "class": "ViewerArea",
      "progressBackgroundColorDirection": "vertical",
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "toolTipShadowHorizontalLength": 0,
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBorderColor": "#AAAAAA",
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarOpacity": 1
     },
     "id": "viewer_uid5B4ED623_5674_EB6C_41C0_D3EB410DE360VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true
    },
    "media": "this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F",
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid5B4ED623_5674_EB6C_41C0_D3EB410DE360VideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_5A70B66F_5674_EBF4_41D3_5C49F74520E4, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_5A70B66F_5674_EBF4_41D3_5C49F74520E4, 0, this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F)"
   }
  ]
 },
 {
  "id": "PlayList_5A70866F_5674_EBF3_41AC_95E00F7268B1",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid5B48D625_5674_EB74_41CC_C373B4E16637VideoPlayer)",
    "player": {
     "viewerArea": {
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "toolTipShadowColor": "#333333",
      "toolTipFontFamily": "Arial",
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "playbackBarBackgroundOpacity": 1,
      "progressHeight": 0,
      "toolTipTextShadowBlurRadius": 3,
      "progressBottom": 2,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "toolTipPaddingLeft": 6,
      "progressBorderSize": 0,
      "minHeight": 50,
      "playbackBarHeight": 0,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadBorderSize": 0,
      "playbackBarHeadWidth": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarProgressBorderSize": 0,
      "borderSize": 0,
      "height": "100%",
      "width": "100%",
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "paddingRight": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarRight": 0,
      "progressBarBorderRadius": 0,
      "playbackBarHeadHeight": 30,
      "progressBarBorderSize": 0,
      "playbackBarLeft": 0,
      "progressOpacity": 1,
      "toolTipOpacity": 1,
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "transitionMode": "blending",
      "paddingBottom": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "playbackBarHeadShadowOpacity": 0,
      "progressBorderRadius": 0,
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingRight": 6,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "shadow": false,
      "toolTipFontStyle": "normal",
      "id": "viewer_uid7237E459_5695_2FDC_41D1_5AA5473CB1AD",
      "toolTipPaddingBottom": 4,
      "toolTipPaddingTop": 4,
      "toolTipShadowSpread": 0,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "toolTipFontWeight": "normal",
      "toolTipFontColor": "#606060",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadShadow": true,
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderColor": "#AAAAAA",
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarBorderRadius": 0,
      "class": "ViewerArea",
      "progressBackgroundColorDirection": "vertical",
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "toolTipShadowHorizontalLength": 0,
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBorderColor": "#AAAAAA",
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarOpacity": 1
     },
     "id": "viewer_uid5B48D625_5674_EB74_41CC_C373B4E16637VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true
    },
    "media": "this.video_79E6AF2E_51F1_724B_41D0_772ED7CFF496",
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid5B48D625_5674_EB74_41CC_C373B4E16637VideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_5A70866F_5674_EBF3_41AC_95E00F7268B1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_5A70866F_5674_EBF3_41AC_95E00F7268B1, 0, this.video_79E6AF2E_51F1_724B_41D0_772ED7CFF496)"
   }
  ]
 },
 {
  "id": "PlayList_5A704670_5674_EBEC_41B9_156CA3DB792C",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid5B35962A_5674_EB7C_41D5_503FB53730E9VideoPlayer)",
    "player": {
     "viewerArea": {
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "toolTipShadowColor": "#333333",
      "toolTipFontFamily": "Arial",
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "playbackBarBackgroundOpacity": 1,
      "progressHeight": 0,
      "toolTipTextShadowBlurRadius": 3,
      "progressBottom": 2,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "toolTipPaddingLeft": 6,
      "progressBorderSize": 0,
      "minHeight": 50,
      "playbackBarHeight": 0,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadBorderSize": 0,
      "playbackBarHeadWidth": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarProgressBorderSize": 0,
      "borderSize": 0,
      "height": "100%",
      "width": "100%",
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "paddingRight": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarRight": 0,
      "progressBarBorderRadius": 0,
      "playbackBarHeadHeight": 30,
      "progressBarBorderSize": 0,
      "playbackBarLeft": 0,
      "progressOpacity": 1,
      "toolTipOpacity": 1,
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "transitionMode": "blending",
      "paddingBottom": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "playbackBarHeadShadowOpacity": 0,
      "progressBorderRadius": 0,
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingRight": 6,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "shadow": false,
      "toolTipFontStyle": "normal",
      "id": "viewer_uid7233F45E_5695_2FD4_41D5_67AD3774FFAA",
      "toolTipPaddingBottom": 4,
      "toolTipPaddingTop": 4,
      "toolTipShadowSpread": 0,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "toolTipFontWeight": "normal",
      "toolTipFontColor": "#606060",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadShadow": true,
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderColor": "#AAAAAA",
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarBorderRadius": 0,
      "class": "ViewerArea",
      "progressBackgroundColorDirection": "vertical",
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "toolTipShadowHorizontalLength": 0,
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBorderColor": "#AAAAAA",
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarOpacity": 1
     },
     "id": "viewer_uid5B35962A_5674_EB7C_41D5_503FB53730E9VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true
    },
    "media": "this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F",
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid5B35962A_5674_EB7C_41D5_503FB53730E9VideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_5A704670_5674_EBEC_41B9_156CA3DB792C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_5A704670_5674_EBEC_41B9_156CA3DB792C, 0, this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_76174C24_51F1_167E_41CF_523D5490D758_t.jpg",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_76174C24_51F1_167E_41CF_523D5490D758.mp4",
   "width": 1920,
   "webmUrl": "media/video_76174C24_51F1_167E_41CF_523D5490D758.webm"
  },
  "label": "07 Smriti",
  "width": 1920,
  "loop": false,
  "id": "video_76174C24_51F1_167E_41CF_523D5490D758",
  "height": 1080,
  "class": "Video",
  "scaleMode": "fit_inside"
 },
 {
  "id": "PlayList_5A701671_5674_EBEC_41D0_4F17A125285D",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid5B35462B_5674_EB7C_419F_8D1A3288EC58VideoPlayer)",
    "player": {
     "viewerArea": {
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "toolTipShadowColor": "#333333",
      "toolTipFontFamily": "Arial",
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "playbackBarBackgroundOpacity": 1,
      "progressHeight": 0,
      "toolTipTextShadowBlurRadius": 3,
      "progressBottom": 2,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipFontSize": 12,
      "toolTipPaddingLeft": 6,
      "progressBorderSize": 0,
      "minHeight": 50,
      "playbackBarHeight": 0,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadBorderSize": 0,
      "playbackBarHeadWidth": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarProgressBorderSize": 0,
      "borderSize": 0,
      "height": "100%",
      "width": "100%",
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "paddingRight": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarRight": 0,
      "progressBarBorderRadius": 0,
      "playbackBarHeadHeight": 30,
      "progressBarBorderSize": 0,
      "playbackBarLeft": 0,
      "progressOpacity": 1,
      "toolTipOpacity": 1,
      "progressBarBackgroundColorDirection": "horizontal",
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "transitionMode": "blending",
      "paddingBottom": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "playbackBarHeadShadowOpacity": 0,
      "progressBorderRadius": 0,
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingRight": 6,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "shadow": false,
      "toolTipFontStyle": "normal",
      "id": "viewer_uid7232845E_5695_2FD4_41CA_817EBC0E8438",
      "toolTipPaddingBottom": 4,
      "toolTipPaddingTop": 4,
      "toolTipShadowSpread": 0,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "paddingLeft": 0,
      "progressBarBorderColor": "#000000",
      "toolTipFontWeight": "normal",
      "toolTipFontColor": "#606060",
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadShadow": true,
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderColor": "#AAAAAA",
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarBorderRadius": 0,
      "class": "ViewerArea",
      "progressBackgroundColorDirection": "vertical",
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "toolTipShadowHorizontalLength": 0,
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBorderColor": "#AAAAAA",
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarOpacity": 1
     },
     "id": "viewer_uid5B35462B_5674_EB7C_419F_8D1A3288EC58VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true
    },
    "media": "this.video_76174C24_51F1_167E_41CF_523D5490D758",
    "class": "VideoPlayListItem",
    "start": "this.viewer_uid5B35462B_5674_EB7C_419F_8D1A3288EC58VideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_5A701671_5674_EBEC_41D0_4F17A125285D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_5A701671_5674_EBEC_41D0_4F17A125285D, 0, this.video_76174C24_51F1_167E_41CF_523D5490D758)"
   }
  ]
 },
 "this.Menu_73C1F46F_5695_2FF4_41B1_82E115958A0A",
 {
  "id": "effect_50BC88D7_41F1_A0A0_41C2_DFCE679DE04B",
  "easing": "cubic_in",
  "class": "FadeInEffect",
  "duration": 500
 },
 {
  "id": "effect_4973D6BD_51D1_324E_41C0_AE2C94232344",
  "easing": "cubic_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 {
  "id": "effect_6D7BCD74_41B0_373F_41C7_FB9965B99C07",
  "easing": "cubic_in",
  "class": "FadeInEffect",
  "duration": 500
 },
 {
  "id": "effect_4816F7BE_51D1_124A_41BA_7B4660D3C5D1",
  "easing": "cubic_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 {
  "id": "effect_510D3286_41F6_E0A0_41B7_0837F6E6C079",
  "easing": "cubic_in",
  "class": "FadeInEffect",
  "duration": 500
 },
 {
  "id": "effect_510A6C97_41F1_A0A0_41C6_75677DDAAB42",
  "easing": "cubic_in",
  "class": "FadeInEffect",
  "duration": 500
 },
 {
  "id": "effect_49156269_51D3_12F6_41D4_4641DC2CB11A",
  "easing": "cubic_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 {
  "id": "effect_57E45C73_4F2F_1F2F_41D0_D80D434D627C",
  "easing": "cubic_in",
  "class": "FadeInEffect",
  "duration": 500
 },
 {
  "id": "effect_5F766399_51D7_3256_41C8_8058BFACBDFC",
  "easing": "cubic_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 {
  "id": "effect_58318646_4F2F_2B69_41AC_962A6ED82AEE",
  "easing": "cubic_in",
  "class": "FadeInEffect",
  "duration": 500
 },
 {
  "id": "effect_5F7E6C20_51D1_3677_41A7_5A242A038A1A",
  "easing": "cubic_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 {
  "id": "effect_74D59241_4213_63A0_41CB_DA1C684AF71F",
  "easing": "cubic_in",
  "class": "FadeOutEffect",
  "duration": 100
 },
 {
  "id": "effect_15430EDE_505D_7B35_41CA_3F5C176FC215",
  "easing": "cubic_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 {
  "id": "effect_6CABAB38_5657_6914_4191_06C77603C80F",
  "easing": "cubic_in",
  "class": "FadeOutEffect",
  "duration": 500
 },
 {
  "id": "effect_5DF89728_4233_E1E0_41BE_006FEAB9CB13",
  "easing": "cubic_in",
  "class": "FadeInEffect",
  "duration": 500
 },
 "this.popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE",
 {
  "id": "ImageResource_3B6D458C_2B0E_6F00_4137_F60375F9E4C8",
  "class": "ImageResource",
  "levels": [
   {
    "height": 2500,
    "class": "ImageResourceLevel",
    "width": 4000,
    "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_0.jpg"
   },
   {
    "height": 1280,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_1.jpg"
   },
   {
    "height": 640,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_2.jpg"
   },
   {
    "height": 320,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_3.jpg"
   }
  ]
 },
 {
  "scrollBarWidth": 10,
  "closeButtonPressedIconLineWidth": 5,
  "backgroundColor": [],
  "titlePaddingLeft": 5,
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPaddingTop": 5,
  "bodyPaddingTop": 0,
  "modal": true,
  "shadowSpread": 1,
  "titlePaddingRight": 5,
  "closeButtonIconWidth": 20,
  "bodyPaddingRight": 0,
  "shadowOpacity": 0.5,
  "closeButtonBorderRadius": 0,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "minHeight": 20,
  "children": [
   "this.viewer_uid723F444F_5695_2F34_41C5_8C2F1390AC24"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "overflow": "scroll",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "footerBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "paddingTop": 0,
  "minWidth": 20,
  "borderSize": 0,
  "bodyPaddingLeft": 0,
  "headerPaddingLeft": 10,
  "closeButtonIconHeight": 20,
  "shadowColor": "#000000",
  "layout": "vertical",
  "gap": 10,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingRight": 0,
  "backgroundOpacity": 1,
  "paddingBottom": 0,
  "titlePaddingBottom": 5,
  "headerPaddingTop": 10,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonIconLineWidth": 5,
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "veilOpacity": 0.4,
  "shadowBlurRadius": 6,
  "titleFontFamily": "Arial",
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "scrollBarMargin": 2,
  "closeButtonBorderColor": "#000000",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "scrollBarVisible": "rollOver",
  "headerVerticalAlign": "middle",
  "contentOpaque": false,
  "backgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#666666",
  "shadow": true,
  "id": "window_5D41F965_5675_39F4_41B0_7B01300FC8D9",
  "titlePaddingTop": 5,
  "footerHeight": 5,
  "footerBackgroundOpacity": 0,
  "closeButtonBorderSize": 0,
  "titleFontSize": 14,
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonRollOverBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "veilColorRatios": [
   0,
   1
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonBackgroundColorDirection": "vertical",
  "bodyBackgroundOpacity": 0,
  "closeButtonPaddingLeft": 5,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "bodyPaddingBottom": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonIconColor": "#000000",
  "scrollBarOpacity": 0.5,
  "close": "this.PlayList_5A76566C_5674_EBF4_41CF_3F6D4D2D1E92.set('selectedIndex', -1);",
  "closeButtonPaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "verticalAlign": "middle",
  "headerBackgroundOpacity": 0,
  "class": "Window",
  "headerPaddingRight": 0,
  "shadowVerticalLength": 0,
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowHorizontalLength": 3,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 "this.popup_654F705B_50BD_8733_41D0_F63243597D98",
 "this.popup_5E84A72B_5062_8913_41D3_2E436895D709",
 {
  "id": "ImageResource_4617CE97_507D_BB33_41CC_277230F4FDD7",
  "class": "ImageResource",
  "levels": [
   {
    "height": 2500,
    "class": "ImageResourceLevel",
    "width": 4000,
    "url": "media/popup_5E84A72B_5062_8913_41D3_2E436895D709_0_0.jpg"
   },
   {
    "height": 1280,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_5E84A72B_5062_8913_41D3_2E436895D709_0_1.jpg"
   },
   {
    "height": 640,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_5E84A72B_5062_8913_41D3_2E436895D709_0_2.jpg"
   },
   {
    "height": 320,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_5E84A72B_5062_8913_41D3_2E436895D709_0_3.jpg"
   }
  ]
 },
 {
  "scrollBarWidth": 10,
  "closeButtonPressedIconLineWidth": 5,
  "backgroundColor": [],
  "titlePaddingLeft": 5,
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPaddingTop": 5,
  "bodyPaddingTop": 0,
  "modal": true,
  "shadowSpread": 1,
  "titlePaddingRight": 5,
  "closeButtonIconWidth": 20,
  "bodyPaddingRight": 0,
  "shadowOpacity": 0.5,
  "closeButtonBorderRadius": 0,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "minHeight": 20,
  "children": [
   "this.viewer_uid723D9451_5695_2F2F_41C4_8DAE38B48F9A"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "overflow": "scroll",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "footerBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "paddingTop": 0,
  "minWidth": 20,
  "borderSize": 0,
  "bodyPaddingLeft": 0,
  "headerPaddingLeft": 10,
  "closeButtonIconHeight": 20,
  "shadowColor": "#000000",
  "layout": "vertical",
  "gap": 10,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingRight": 0,
  "backgroundOpacity": 1,
  "paddingBottom": 0,
  "titlePaddingBottom": 5,
  "headerPaddingTop": 10,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonIconLineWidth": 5,
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "veilOpacity": 0.4,
  "shadowBlurRadius": 6,
  "titleFontFamily": "Arial",
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "scrollBarMargin": 2,
  "closeButtonBorderColor": "#000000",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "scrollBarVisible": "rollOver",
  "headerVerticalAlign": "middle",
  "contentOpaque": false,
  "backgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#666666",
  "shadow": true,
  "id": "window_5D45E95E_5675_39D4_41BF_85EB21D2176F",
  "titlePaddingTop": 5,
  "footerHeight": 5,
  "footerBackgroundOpacity": 0,
  "closeButtonBorderSize": 0,
  "titleFontSize": 14,
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonRollOverBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "veilColorRatios": [
   0,
   1
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonBackgroundColorDirection": "vertical",
  "bodyBackgroundOpacity": 0,
  "closeButtonPaddingLeft": 5,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "bodyPaddingBottom": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonIconColor": "#000000",
  "scrollBarOpacity": 0.5,
  "close": "this.PlayList_5A71A66C_5674_EBF4_41D1_C0904051AD56.set('selectedIndex', -1);",
  "closeButtonPaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "verticalAlign": "middle",
  "headerBackgroundOpacity": 0,
  "class": "Window",
  "headerPaddingRight": 0,
  "shadowVerticalLength": 0,
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowHorizontalLength": 3,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 "this.popup_65BD6281_50A2_8B0E_41D1_6A6A3A214872",
 {
  "scrollBarWidth": 10,
  "closeButtonPressedIconLineWidth": 5,
  "backgroundColor": [],
  "titlePaddingLeft": 5,
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPaddingTop": 5,
  "bodyPaddingTop": 0,
  "modal": true,
  "shadowSpread": 1,
  "titlePaddingRight": 5,
  "closeButtonIconWidth": 20,
  "bodyPaddingRight": 0,
  "shadowOpacity": 0.5,
  "closeButtonBorderRadius": 0,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "minHeight": 20,
  "children": [
   "this.viewer_uid723C5452_5695_2F2C_4192_5E109F9BB66C"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "overflow": "scroll",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "footerBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "paddingTop": 0,
  "minWidth": 20,
  "borderSize": 0,
  "bodyPaddingLeft": 0,
  "headerPaddingLeft": 10,
  "closeButtonIconHeight": 20,
  "shadowColor": "#000000",
  "layout": "vertical",
  "gap": 10,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingRight": 0,
  "backgroundOpacity": 1,
  "paddingBottom": 0,
  "titlePaddingBottom": 5,
  "headerPaddingTop": 10,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonIconLineWidth": 5,
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "veilOpacity": 0.4,
  "shadowBlurRadius": 6,
  "titleFontFamily": "Arial",
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "scrollBarMargin": 2,
  "closeButtonBorderColor": "#000000",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "scrollBarVisible": "rollOver",
  "headerVerticalAlign": "middle",
  "contentOpaque": false,
  "backgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#666666",
  "shadow": true,
  "id": "window_5D44F95F_5675_39D4_41D4_E4C2ECE86D1A",
  "titlePaddingTop": 5,
  "footerHeight": 5,
  "footerBackgroundOpacity": 0,
  "closeButtonBorderSize": 0,
  "titleFontSize": 14,
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonRollOverBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "veilColorRatios": [
   0,
   1
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonBackgroundColorDirection": "vertical",
  "bodyBackgroundOpacity": 0,
  "closeButtonPaddingLeft": 5,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "bodyPaddingBottom": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonIconColor": "#000000",
  "scrollBarOpacity": 0.5,
  "close": "this.PlayList_5A71666D_5674_EBF4_4181_91AE77033B38.set('selectedIndex', -1);",
  "closeButtonPaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "verticalAlign": "middle",
  "headerBackgroundOpacity": 0,
  "class": "Window",
  "headerPaddingRight": 0,
  "shadowVerticalLength": 0,
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowHorizontalLength": 3,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 "this.popup_654154AD_50A7_8F17_41CC_033E6CF6538E",
 {
  "scrollBarWidth": 10,
  "closeButtonPressedIconLineWidth": 5,
  "backgroundColor": [],
  "titlePaddingLeft": 5,
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPaddingTop": 5,
  "bodyPaddingTop": 0,
  "modal": true,
  "shadowSpread": 1,
  "titlePaddingRight": 5,
  "closeButtonIconWidth": 20,
  "bodyPaddingRight": 0,
  "shadowOpacity": 0.5,
  "closeButtonBorderRadius": 0,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "minHeight": 20,
  "children": [
   "this.viewer_uid723A9455_5695_2FD4_41B1_75190097BE4C"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "overflow": "scroll",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "footerBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "paddingTop": 0,
  "minWidth": 20,
  "borderSize": 0,
  "bodyPaddingLeft": 0,
  "headerPaddingLeft": 10,
  "closeButtonIconHeight": 20,
  "shadowColor": "#000000",
  "layout": "vertical",
  "gap": 10,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingRight": 0,
  "backgroundOpacity": 1,
  "paddingBottom": 0,
  "titlePaddingBottom": 5,
  "headerPaddingTop": 10,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonIconLineWidth": 5,
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "veilOpacity": 0.4,
  "shadowBlurRadius": 6,
  "titleFontFamily": "Arial",
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "scrollBarMargin": 2,
  "closeButtonBorderColor": "#000000",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "scrollBarVisible": "rollOver",
  "headerVerticalAlign": "middle",
  "contentOpaque": false,
  "backgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#666666",
  "shadow": true,
  "id": "window_5D479960_5675_39EC_41BC_5CEBD017DFE0",
  "titlePaddingTop": 5,
  "footerHeight": 5,
  "footerBackgroundOpacity": 0,
  "closeButtonBorderSize": 0,
  "titleFontSize": 14,
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonRollOverBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "veilColorRatios": [
   0,
   1
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonBackgroundColorDirection": "vertical",
  "bodyBackgroundOpacity": 0,
  "closeButtonPaddingLeft": 5,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "bodyPaddingBottom": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonIconColor": "#000000",
  "scrollBarOpacity": 0.5,
  "close": "this.PlayList_5A71266E_5674_EBF4_41B5_CDC28585DBC3.set('selectedIndex', -1);",
  "closeButtonPaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "verticalAlign": "middle",
  "headerBackgroundOpacity": 0,
  "class": "Window",
  "headerPaddingRight": 0,
  "shadowVerticalLength": 0,
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowHorizontalLength": 3,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 "this.popup_65155EA1_50A6_9B0F_41A2_DA50D7C2A9FC",
 {
  "scrollBarWidth": 10,
  "closeButtonPressedIconLineWidth": 5,
  "backgroundColor": [],
  "titlePaddingLeft": 5,
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPaddingTop": 5,
  "bodyPaddingTop": 0,
  "modal": true,
  "shadowSpread": 1,
  "titlePaddingRight": 5,
  "closeButtonIconWidth": 20,
  "bodyPaddingRight": 0,
  "shadowOpacity": 0.5,
  "closeButtonBorderRadius": 0,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "minHeight": 20,
  "children": [
   "this.viewer_uid72390456_5695_2FD4_41D0_179112771AE0"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "overflow": "scroll",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "footerBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "paddingTop": 0,
  "minWidth": 20,
  "borderSize": 0,
  "bodyPaddingLeft": 0,
  "headerPaddingLeft": 10,
  "closeButtonIconHeight": 20,
  "shadowColor": "#000000",
  "layout": "vertical",
  "gap": 10,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingRight": 0,
  "backgroundOpacity": 1,
  "paddingBottom": 0,
  "titlePaddingBottom": 5,
  "headerPaddingTop": 10,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonIconLineWidth": 5,
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "veilOpacity": 0.4,
  "shadowBlurRadius": 6,
  "titleFontFamily": "Arial",
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "scrollBarMargin": 2,
  "closeButtonBorderColor": "#000000",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "scrollBarVisible": "rollOver",
  "headerVerticalAlign": "middle",
  "contentOpaque": false,
  "backgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#666666",
  "shadow": true,
  "id": "window_5D46A960_5675_39EC_41AE_C09C8A98295C",
  "titlePaddingTop": 5,
  "footerHeight": 5,
  "footerBackgroundOpacity": 0,
  "closeButtonBorderSize": 0,
  "titleFontSize": 14,
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonRollOverBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "veilColorRatios": [
   0,
   1
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonBackgroundColorDirection": "vertical",
  "bodyBackgroundOpacity": 0,
  "closeButtonPaddingLeft": 5,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "bodyPaddingBottom": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonIconColor": "#000000",
  "scrollBarOpacity": 0.5,
  "close": "this.PlayList_5A70F66E_5674_EBF4_41C3_5BB4281CC7F8.set('selectedIndex', -1);",
  "closeButtonPaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "verticalAlign": "middle",
  "headerBackgroundOpacity": 0,
  "class": "Window",
  "headerPaddingRight": 0,
  "shadowVerticalLength": 0,
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowHorizontalLength": 3,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 "this.popup_6A02F7F5_50A2_88F7_41CF_48C2226BE573",
 {
  "scrollBarWidth": 10,
  "closeButtonPressedIconLineWidth": 5,
  "backgroundColor": [],
  "titlePaddingLeft": 5,
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPaddingTop": 5,
  "bodyPaddingTop": 0,
  "modal": true,
  "shadowSpread": 1,
  "titlePaddingRight": 5,
  "closeButtonIconWidth": 20,
  "bodyPaddingRight": 0,
  "shadowOpacity": 0.5,
  "closeButtonBorderRadius": 0,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "minHeight": 20,
  "children": [
   "this.viewer_uid7239A456_5695_2FD4_41B1_E4CB05D4A41A"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "overflow": "scroll",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "footerBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "paddingTop": 0,
  "minWidth": 20,
  "borderSize": 0,
  "bodyPaddingLeft": 0,
  "headerPaddingLeft": 10,
  "closeButtonIconHeight": 20,
  "shadowColor": "#000000",
  "layout": "vertical",
  "gap": 10,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingRight": 0,
  "backgroundOpacity": 1,
  "paddingBottom": 0,
  "titlePaddingBottom": 5,
  "headerPaddingTop": 10,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonIconLineWidth": 5,
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "veilOpacity": 0.4,
  "shadowBlurRadius": 6,
  "titleFontFamily": "Arial",
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "scrollBarMargin": 2,
  "closeButtonBorderColor": "#000000",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "scrollBarVisible": "rollOver",
  "headerVerticalAlign": "middle",
  "contentOpaque": false,
  "backgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#666666",
  "shadow": true,
  "id": "window_5D474961_5675_39EC_41A7_723D20DEB171",
  "titlePaddingTop": 5,
  "footerHeight": 5,
  "footerBackgroundOpacity": 0,
  "closeButtonBorderSize": 0,
  "titleFontSize": 14,
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonRollOverBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "veilColorRatios": [
   0,
   1
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonBackgroundColorDirection": "vertical",
  "bodyBackgroundOpacity": 0,
  "closeButtonPaddingLeft": 5,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "bodyPaddingBottom": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonIconColor": "#000000",
  "scrollBarOpacity": 0.5,
  "close": "this.PlayList_5A70B66F_5674_EBF4_41D3_5C49F74520E4.set('selectedIndex', -1);",
  "closeButtonPaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "verticalAlign": "middle",
  "headerBackgroundOpacity": 0,
  "class": "Window",
  "headerPaddingRight": 0,
  "shadowVerticalLength": 0,
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowHorizontalLength": 3,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 "this.popup_67FA235E_50A5_8935_41D0_DC909E301520",
 {
  "scrollBarWidth": 10,
  "closeButtonPressedIconLineWidth": 5,
  "backgroundColor": [],
  "titlePaddingLeft": 5,
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPaddingTop": 5,
  "bodyPaddingTop": 0,
  "modal": true,
  "shadowSpread": 1,
  "titlePaddingRight": 5,
  "closeButtonIconWidth": 20,
  "bodyPaddingRight": 0,
  "shadowOpacity": 0.5,
  "closeButtonBorderRadius": 0,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "minHeight": 20,
  "children": [
   "this.viewer_uid7237E459_5695_2FDC_41D1_5AA5473CB1AD"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "overflow": "scroll",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "footerBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "paddingTop": 0,
  "minWidth": 20,
  "borderSize": 0,
  "bodyPaddingLeft": 0,
  "headerPaddingLeft": 10,
  "closeButtonIconHeight": 20,
  "shadowColor": "#000000",
  "layout": "vertical",
  "gap": 10,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingRight": 0,
  "backgroundOpacity": 1,
  "paddingBottom": 0,
  "titlePaddingBottom": 5,
  "headerPaddingTop": 10,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonIconLineWidth": 5,
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "veilOpacity": 0.4,
  "shadowBlurRadius": 6,
  "titleFontFamily": "Arial",
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "scrollBarMargin": 2,
  "closeButtonBorderColor": "#000000",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "scrollBarVisible": "rollOver",
  "headerVerticalAlign": "middle",
  "contentOpaque": false,
  "backgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#666666",
  "shadow": true,
  "id": "window_5D475963_5675_39EC_41C5_EDCF1D1801D0",
  "titlePaddingTop": 5,
  "footerHeight": 5,
  "footerBackgroundOpacity": 0,
  "closeButtonBorderSize": 0,
  "titleFontSize": 14,
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonRollOverBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "veilColorRatios": [
   0,
   1
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonBackgroundColorDirection": "vertical",
  "bodyBackgroundOpacity": 0,
  "closeButtonPaddingLeft": 5,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "bodyPaddingBottom": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonIconColor": "#000000",
  "scrollBarOpacity": 0.5,
  "close": "this.PlayList_5A70866F_5674_EBF3_41AC_95E00F7268B1.set('selectedIndex', -1);",
  "closeButtonPaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "verticalAlign": "middle",
  "headerBackgroundOpacity": 0,
  "class": "Window",
  "headerPaddingRight": 0,
  "shadowVerticalLength": 0,
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowHorizontalLength": 3,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 "this.popup_66D14DEA_50A2_F91D_41C8_77D742AED913",
 "this.popup_19B07CA2_569A_9C35_41C1_C421D3075B18",
 {
  "id": "ImageResource_2D7F042F_56B9_AC0A_41C5_A957BBD74718",
  "class": "ImageResource",
  "levels": [
   {
    "height": 2500,
    "class": "ImageResourceLevel",
    "width": 4000,
    "url": "media/popup_19B07CA2_569A_9C35_41C1_C421D3075B18_0_0.jpg"
   },
   {
    "height": 1280,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_19B07CA2_569A_9C35_41C1_C421D3075B18_0_1.jpg"
   },
   {
    "height": 640,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_19B07CA2_569A_9C35_41C1_C421D3075B18_0_2.jpg"
   },
   {
    "height": 320,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_19B07CA2_569A_9C35_41C1_C421D3075B18_0_3.jpg"
   }
  ]
 },
 {
  "scrollBarWidth": 10,
  "closeButtonPressedIconLineWidth": 5,
  "backgroundColor": [],
  "titlePaddingLeft": 5,
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPaddingTop": 5,
  "bodyPaddingTop": 0,
  "modal": true,
  "shadowSpread": 1,
  "titlePaddingRight": 5,
  "closeButtonIconWidth": 20,
  "bodyPaddingRight": 0,
  "shadowOpacity": 0.5,
  "closeButtonBorderRadius": 0,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "minHeight": 20,
  "children": [
   "this.viewer_uid7233F45E_5695_2FD4_41D5_67AD3774FFAA"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "overflow": "scroll",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "footerBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "paddingTop": 0,
  "minWidth": 20,
  "borderSize": 0,
  "bodyPaddingLeft": 0,
  "headerPaddingLeft": 10,
  "closeButtonIconHeight": 20,
  "shadowColor": "#000000",
  "layout": "vertical",
  "gap": 10,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingRight": 0,
  "backgroundOpacity": 1,
  "paddingBottom": 0,
  "titlePaddingBottom": 5,
  "headerPaddingTop": 10,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonIconLineWidth": 5,
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "veilOpacity": 0.4,
  "shadowBlurRadius": 6,
  "titleFontFamily": "Arial",
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "scrollBarMargin": 2,
  "closeButtonBorderColor": "#000000",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "scrollBarVisible": "rollOver",
  "headerVerticalAlign": "middle",
  "contentOpaque": false,
  "backgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#666666",
  "shadow": true,
  "id": "window_5D469964_5675_39F4_41C0_34AFBA74F3AC",
  "titlePaddingTop": 5,
  "footerHeight": 5,
  "footerBackgroundOpacity": 0,
  "closeButtonBorderSize": 0,
  "titleFontSize": 14,
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonRollOverBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "veilColorRatios": [
   0,
   1
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonBackgroundColorDirection": "vertical",
  "bodyBackgroundOpacity": 0,
  "closeButtonPaddingLeft": 5,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "bodyPaddingBottom": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonIconColor": "#000000",
  "scrollBarOpacity": 0.5,
  "close": "this.PlayList_5A704670_5674_EBEC_41B9_156CA3DB792C.set('selectedIndex', -1);",
  "closeButtonPaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "verticalAlign": "middle",
  "headerBackgroundOpacity": 0,
  "class": "Window",
  "headerPaddingRight": 0,
  "shadowVerticalLength": 0,
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowHorizontalLength": 3,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 "this.popup_673AFF1D_50AD_B937_41CD_D84791F4B91A",
 {
  "scrollBarWidth": 10,
  "closeButtonPressedIconLineWidth": 5,
  "backgroundColor": [],
  "titlePaddingLeft": 5,
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPaddingTop": 5,
  "bodyPaddingTop": 0,
  "modal": true,
  "shadowSpread": 1,
  "titlePaddingRight": 5,
  "closeButtonIconWidth": 20,
  "bodyPaddingRight": 0,
  "shadowOpacity": 0.5,
  "closeButtonBorderRadius": 0,
  "bodyBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "minHeight": 20,
  "children": [
   "this.viewer_uid7232845E_5695_2FD4_41CA_817EBC0E8438"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "overflow": "scroll",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "footerBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingBottom": 5,
  "paddingTop": 0,
  "minWidth": 20,
  "borderSize": 0,
  "bodyPaddingLeft": 0,
  "headerPaddingLeft": 10,
  "closeButtonIconHeight": 20,
  "shadowColor": "#000000",
  "layout": "vertical",
  "gap": 10,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingRight": 0,
  "backgroundOpacity": 1,
  "paddingBottom": 0,
  "titlePaddingBottom": 5,
  "headerPaddingTop": 10,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonIconLineWidth": 5,
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "veilOpacity": 0.4,
  "shadowBlurRadius": 6,
  "titleFontFamily": "Arial",
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "scrollBarMargin": 2,
  "closeButtonBorderColor": "#000000",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "scrollBarVisible": "rollOver",
  "headerVerticalAlign": "middle",
  "contentOpaque": false,
  "backgroundColorDirection": "vertical",
  "headerBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#666666",
  "shadow": true,
  "id": "window_5D410964_5675_39F4_41D1_A91997E498C1",
  "titlePaddingTop": 5,
  "footerHeight": 5,
  "footerBackgroundOpacity": 0,
  "closeButtonBorderSize": 0,
  "titleFontSize": 14,
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonRollOverBorderSize": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "veilColorRatios": [
   0,
   1
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonBackgroundColorDirection": "vertical",
  "bodyBackgroundOpacity": 0,
  "closeButtonPaddingLeft": 5,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "bodyPaddingBottom": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonIconColor": "#000000",
  "scrollBarOpacity": 0.5,
  "close": "this.PlayList_5A701671_5674_EBEC_41D0_4F17A125285D.set('selectedIndex', -1);",
  "closeButtonPaddingBottom": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "verticalAlign": "middle",
  "headerBackgroundOpacity": 0,
  "class": "Window",
  "headerPaddingRight": 0,
  "shadowVerticalLength": 0,
  "hideEffect": {
   "easing": "cubic_in_out",
   "class": "FadeOutEffect",
   "duration": 500
  },
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowHorizontalLength": 3,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 500
  },
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 "this.popup_6AC20B05_50AE_F917_41AF_5EBBE7A3AAC3",
 "this.popup_0375FAC7_50CF_F816_41A2_8895EB06B570",
 {
  "id": "ImageResource_47E090CC_5062_8715_41B8_632E16047E40",
  "class": "ImageResource",
  "levels": [
   {
    "height": 2500,
    "class": "ImageResourceLevel",
    "width": 4000,
    "url": "media/popup_0375FAC7_50CF_F816_41A2_8895EB06B570_0_0.jpg"
   },
   {
    "height": 1280,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_0375FAC7_50CF_F816_41A2_8895EB06B570_0_1.jpg"
   },
   {
    "height": 640,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_0375FAC7_50CF_F816_41A2_8895EB06B570_0_2.jpg"
   },
   {
    "height": 320,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_0375FAC7_50CF_F816_41A2_8895EB06B570_0_3.jpg"
   }
  ]
 },
 "this.popup_0690991F_50C8_9836_41B5_3F1A35404AF0",
 {
  "id": "ImageResource_47E190CB_5062_8713_41B0_E16DED267F7E",
  "class": "ImageResource",
  "levels": [
   {
    "height": 2500,
    "class": "ImageResourceLevel",
    "width": 4000,
    "url": "media/popup_0690991F_50C8_9836_41B5_3F1A35404AF0_0_0.jpg"
   },
   {
    "height": 1280,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_0690991F_50C8_9836_41B5_3F1A35404AF0_0_1.jpg"
   },
   {
    "height": 640,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_0690991F_50C8_9836_41B5_3F1A35404AF0_0_2.jpg"
   },
   {
    "height": 320,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_0690991F_50C8_9836_41B5_3F1A35404AF0_0_3.jpg"
   }
  ]
 },
 "this.popup_036D5CA5_50C8_980A_41CF_D8D8C98B1FAE",
 {
  "id": "ImageResource_47E390D7_5062_8733_41D3_D5B5D084F5CB",
  "class": "ImageResource",
  "levels": [
   {
    "height": 2500,
    "class": "ImageResourceLevel",
    "width": 4000,
    "url": "media/popup_036D5CA5_50C8_980A_41CF_D8D8C98B1FAE_0_0.jpg"
   },
   {
    "height": 1280,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_036D5CA5_50C8_980A_41CF_D8D8C98B1FAE_0_1.jpg"
   },
   {
    "height": 640,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_036D5CA5_50C8_980A_41CF_D8D8C98B1FAE_0_2.jpg"
   },
   {
    "height": 320,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_036D5CA5_50C8_980A_41CF_D8D8C98B1FAE_0_3.jpg"
   }
  ]
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -2.82,
     "path": "shortest",
     "easing": "linear",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 130.11,
     "pitchSpeed": 1.44,
     "yawSpeed": 1.88
    },
    {
     "targetPitch": -1.18,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -137.72,
     "pitchSpeed": 22.4,
     "path": "shortest",
     "yawSpeed": 44,
     "end": "this.mainPlayList.set('selectedIndex', 1)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 134.84,
   "pitch": 0
  },
  "id": "camera_73F5B497_5695_2F54_41BA_336780392E7C",
  "automaticRotationSpeed": 4,
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -6.21,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -129.18,
     "pitchSpeed": 23.38,
     "yawSpeed": 45.96
    },
    {
     "targetPitch": -3.44,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -105.73,
     "pitchSpeed": 11.7,
     "yawSpeed": 22.5
    },
    {
     "targetPitch": -5.45,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -85.95,
     "pitchSpeed": 11.7,
     "yawSpeed": 22.5
    },
    {
     "targetPitch": -8.93,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -75.23,
     "pitchSpeed": 8.49,
     "yawSpeed": 16.05
    },
    {
     "targetPitch": -11.99,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -61.71,
     "pitchSpeed": 11.7,
     "path": "shortest",
     "yawSpeed": 22.5,
     "end": "this.mainPlayList.set('selectedIndex', 8)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -80.2,
   "pitch": 0
  },
  "id": "camera_738604A9_5695_2F7C_41BD_52D9D5B1BCC9",
  "automaticRotationSpeed": 4,
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -22.61,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 146.25,
     "pitchSpeed": 67.52,
     "yawSpeed": 134.66
    },
    {
     "targetPitch": -9.72,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 109.66,
     "pitchSpeed": 11.7,
     "yawSpeed": 22.5
    },
    {
     "targetPitch": -5.1,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 99.81,
     "pitchSpeed": 9.56,
     "yawSpeed": 18.2
    },
    {
     "targetPitch": -5.45,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 63.28,
     "pitchSpeed": 11.7,
     "yawSpeed": 22.5
    },
    {
     "targetPitch": -10.94,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 6.8,
     "pitchSpeed": 17.05,
     "path": "shortest",
     "yawSpeed": 33.25,
     "end": "this.mainPlayList.set('selectedIndex', 6)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -93.89,
   "pitch": 0
  },
  "id": "camera_739464BB_5695_2F5C_41AE_CE08DF712F68",
  "automaticRotationSpeed": 4,
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -10.32,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 155.54,
     "pitchSpeed": 2.83,
     "yawSpeed": 4.68
    },
    {
     "targetPitch": -7.71,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -174.16,
     "pitchSpeed": 8.49,
     "yawSpeed": 16.05
    },
    {
     "targetPitch": -11.55,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -141.91,
     "pitchSpeed": 9.56,
     "yawSpeed": 18.2
    },
    {
     "targetPitch": -5.01,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -121.16,
     "pitchSpeed": 8.49,
     "yawSpeed": 16.05
    },
    {
     "targetPitch": -10.5,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -85.77,
     "pitchSpeed": 11.7,
     "yawSpeed": 22.5
    },
    {
     "targetPitch": -26.63,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -37.83,
     "pitchSpeed": 9.56,
     "path": "shortest",
     "yawSpeed": 18.2,
     "end": "this.mainPlayList.set('selectedIndex', 9)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 75.52,
   "pitch": 0
  },
  "id": "camera_73A074CD_5695_2F34_41C7_958A7EB21AB2",
  "automaticRotationSpeed": 4,
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -17.19,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -143.38,
     "pitchSpeed": 4.08,
     "yawSpeed": 7.18
    },
    {
     "targetPitch": -12.25,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 129.44,
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -7.71,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 105.73,
     "pitchSpeed": 11.7,
     "yawSpeed": 22.5
    },
    {
     "targetPitch": -2.48,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 74,
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -1.53,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 86.03,
     "pitchSpeed": 11.7,
     "path": "shortest",
     "yawSpeed": 22.5,
     "end": "this.mainPlayList.set('selectedIndex', 5)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -93.97,
   "pitch": 0
  },
  "id": "camera_734B24ED_5695_28F4_41CA_140E74255286",
  "automaticRotationSpeed": 4,
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -1.19,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 111.34,
     "pitchSpeed": 36.61,
     "yawSpeed": 72.55
    },
    {
     "targetPitch": -2.48,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 171.02,
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -4.14,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -143.83,
     "pitchSpeed": 17.05,
     "path": "shortest",
     "yawSpeed": 33.25,
     "end": "this.mainPlayList.set('selectedIndex', 7)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -21.1,
   "pitch": 0
  },
  "id": "camera_7356A518_5695_295C_41A4_2B18D3AC6403",
  "automaticRotationSpeed": 4,
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -6.21,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -129.18,
     "pitchSpeed": 98.06,
     "yawSpeed": 196.02
    },
    {
     "targetPitch": -3.44,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -105.73,
     "pitchSpeed": 11.7,
     "yawSpeed": 22.5
    },
    {
     "targetPitch": -5.45,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -85.95,
     "pitchSpeed": 11.7,
     "yawSpeed": 22.5
    },
    {
     "targetPitch": -8.93,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -75.23,
     "pitchSpeed": 8.49,
     "yawSpeed": 16.05
    },
    {
     "targetPitch": -11.99,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -61.71,
     "pitchSpeed": 11.7,
     "path": "shortest",
     "yawSpeed": 22.5,
     "end": "this.mainPlayList.set('selectedIndex', 8)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 84.89,
   "pitch": 0
  },
  "id": "camera_7362F544_5695_2934_41A0_559471BF54EE",
  "automaticRotationSpeed": 4,
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -28.38,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 45.58,
     "pitchSpeed": 36.59,
     "yawSpeed": 72.51
    },
    {
     "targetPitch": -7.98,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 74.7,
     "pitchSpeed": 10.63,
     "yawSpeed": 20.35
    },
    {
     "targetPitch": -6.49,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 125.43,
     "pitchSpeed": 10.63,
     "yawSpeed": 20.35
    },
    {
     "targetPitch": -10.94,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 162.83,
     "pitchSpeed": 7.42,
     "path": "shortest",
     "yawSpeed": 13.9,
     "end": "this.mainPlayList.set('selectedIndex', 3)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -82.73,
   "pitch": 0
  },
  "id": "camera_730B456F_5695_29F4_41D2_F0B0C9B30287",
  "automaticRotationSpeed": 4,
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -6.12,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 14.65,
     "pitchSpeed": 108,
     "yawSpeed": 216
    },
    {
     "targetPitch": -6.15,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 23.88,
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -43.37,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -168.93,
     "pitchSpeed": 17.05,
     "path": "shortest",
     "yawSpeed": 33.25,
     "end": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "targetPitch": 7.45,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 131.45,
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -51.1,
   "pitch": 0
  },
  "id": "camera_73157585_5695_2934_41B3_76DF9E406205",
  "automaticRotationSpeed": 4,
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -22.61,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 146.25,
     "pitchSpeed": 17.67,
     "yawSpeed": 34.49
    },
    {
     "targetPitch": -9.72,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 109.66,
     "pitchSpeed": 11.7,
     "yawSpeed": 22.5
    },
    {
     "targetPitch": -5.1,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 99.81,
     "pitchSpeed": 9.56,
     "yawSpeed": 18.2
    },
    {
     "targetPitch": -5.45,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 63.28,
     "pitchSpeed": 11.7,
     "yawSpeed": 22.5
    },
    {
     "targetPitch": -10.94,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 6.8,
     "pitchSpeed": 17.05,
     "path": "shortest",
     "yawSpeed": 33.25,
     "end": "this.mainPlayList.set('selectedIndex', 6)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 90.21,
   "pitch": 0
  },
  "id": "camera_733EE597_5695_2954_41D1_D303D068033F",
  "automaticRotationSpeed": 4,
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -11.51,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 42.81,
     "pitchSpeed": 33.12,
     "yawSpeed": 65.54
    },
    {
     "targetPitch": -1.35,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -26.5,
     "pitchSpeed": 11.7,
     "path": "shortest",
     "yawSpeed": 22.5,
     "end": "this.mainPlayList.set('selectedIndex', 4)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -167.15,
   "pitch": 0
  },
  "id": "camera_70C245A8_5695_297C_41CF_E798E9EA47DB",
  "automaticRotationSpeed": 4,
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -10.32,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 155.54,
     "pitchSpeed": 6.68,
     "yawSpeed": 12.41
    },
    {
     "targetPitch": -7.71,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -174.16,
     "pitchSpeed": 8.49,
     "yawSpeed": 16.05
    },
    {
     "targetPitch": -11.55,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -141.91,
     "pitchSpeed": 9.56,
     "yawSpeed": 18.2
    },
    {
     "targetPitch": -5.01,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -121.16,
     "pitchSpeed": 8.49,
     "yawSpeed": 16.05
    },
    {
     "targetPitch": -10.5,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -85.77,
     "pitchSpeed": 11.7,
     "yawSpeed": 22.5
    },
    {
     "targetPitch": -26.63,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -37.83,
     "pitchSpeed": 9.56,
     "path": "shortest",
     "yawSpeed": 18.2,
     "end": "this.mainPlayList.set('selectedIndex', 9)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -94.23,
   "pitch": 0
  },
  "id": "camera_70E6B5BA_5695_295C_41CF_87F215445751",
  "automaticRotationSpeed": 4,
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -1.19,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 111.34,
     "pitchSpeed": 20.44,
     "yawSpeed": 40.06
    },
    {
     "targetPitch": -2.48,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 171.02,
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -4.14,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -143.83,
     "pitchSpeed": 17.05,
     "path": "shortest",
     "yawSpeed": 33.25,
     "end": "this.mainPlayList.set('selectedIndex', 7)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 39.04,
   "pitch": 0
  },
  "id": "camera_708B75CB_5695_293C_41A4_01FB9C87137C",
  "automaticRotationSpeed": 4,
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -17.19,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -143.38,
     "pitchSpeed": 14.73,
     "yawSpeed": 28.6
    },
    {
     "targetPitch": -12.25,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 129.44,
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -7.71,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 105.73,
     "pitchSpeed": 11.7,
     "yawSpeed": 22.5
    },
    {
     "targetPitch": -2.48,
     "path": "shortest",
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 74,
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -1.53,
     "easing": "cubic_in_out",
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 86.03,
     "pitchSpeed": 11.7,
     "path": "shortest",
     "yawSpeed": 22.5,
     "end": "this.mainPlayList.set('selectedIndex', 5)"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.47,
   "pitch": 0
  },
  "id": "camera_70AFD5DC_5695_28D5_41C2_A62D9142DCD2",
  "automaticRotationSpeed": 4,
  "automaticZoomSpeed": 10
 },
 {
  "id": "effect_66A993C7_2B68_57DA_41B2_04B39F4CD777",
  "easing": "cubic_out",
  "class": "SlideInEffect",
  "from": "left",
  "duration": 1000
 },
 {
  "id": "effect_25100BD5_2B28_B7FE_41C3_A604D65396B1",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_5C8C0876_400D_056C_4197_4D21DD837174",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_5C8C0876_400D_056C_4197_4D21DD837174",
 {
  "id": "effect_70BF15E6_5695_28F4_41D4_C2B56D5C27DB",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_5C8C2877_400D_056D_41A8_5F85BCABA018",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_5C8C2877_400D_056D_41A8_5F85BCABA018",
 {
  "id": "effect_70BF45E6_5695_28F4_41D5_3840B60BECE5",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298",
 {
  "id": "effect_70BF75E6_5695_28F4_41C2_9D3B7CF6B8E3",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F",
 {
  "id": "effect_70BFB5E7_5695_28F4_41CC_E84DE3FDA4D5",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_5C8CB878_400D_0563_41C1_590C1BFEAD69",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_5C8CB878_400D_0563_41C1_590C1BFEAD69",
 {
  "id": "effect_70BFE5E7_5695_28F4_41A6_97F44D65DF84",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40",
 {
  "id": "effect_70BE05E7_5695_28F4_41C4_C034B8A904CD",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1",
 {
  "id": "effect_70A0D5E8_5695_28FC_41C4_B2A20566EE93",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407",
 {
  "id": "effect_70BF05E8_5695_28FC_41B2_D87EE5970C0B",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32",
 {
  "id": "effect_70BF45E8_5695_28FC_41C0_4BC3002F6DD7",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7646B174_4217_6060_41B9_177997DC3A13",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70BF95E9_5695_28FC_41D2_09983575A225",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7646B174_4217_6060_41B9_177997DC3A13",
 {
  "id": "effect_5E00948A_556A_ECF5_41D0_CA74D0EF60E9",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "id": "effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_4C3F9A90_5161_25ED_41CA_C5B4E91434E4",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_269A2071_2B29_F0B6_41B4_001C61C97291",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_02AE32EF_5065_8B13_41CC_5B661BAA48A8",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_02AE32EF_5065_8B13_41CC_5B661BAA48A8",
 {
  "id": "effect_70BE05E9_5695_28FC_41C2_2427A44C1F5B",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_778DEF13_553A_895E_41C7_531A1BBC730F",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70BE55EA_5695_28FC_4140_17296FD9DDC6",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_778DEF13_553A_895E_41C7_531A1BBC730F",
 {
  "id": "effect_778C5F13_553A_895E_41C3_5DFDD9378F1A",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70BE85EA_5695_28FC_41D3_03FDFF1A07EA",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_778C5F13_553A_895E_41C3_5DFDD9378F1A",
 {
  "id": "effect_778C2F14_553A_895A_41BA_F8C3C2D139FB",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_778C2F14_553A_895A_41BA_F8C3C2D139FB",
 {
  "id": "effect_70BEB5EA_5695_28FC_41AE_F7D808C3FF0C",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_412FD659_5507_FBCA_41C7_2E3CE75E45C5",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_412FD659_5507_FBCA_41C7_2E3CE75E45C5",
 {
  "id": "effect_70BD15EB_5695_28FC_41B5_98B381B080BD",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_778F4F15_553A_895A_41CF_3DECCD75F153",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70BD35EB_5695_28FC_41D3_1BE414B9E188",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_778F4F15_553A_895A_41CF_3DECCD75F153",
 {
  "id": "effect_778FDF15_553A_895A_41B6_9A7094958640",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70BD65EB_5695_28FC_41D3_153CB39CEBDD",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_778FDF15_553A_895A_41B6_9A7094958640",
 {
  "id": "effect_778FEF16_553A_8946_41CA_99E4CF26B253",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70BDB5EC_5695_28F4_41B5_20A99B5FE57A",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_778FEF16_553A_8946_41CA_99E4CF26B253",
 {
  "id": "effect_778E1F16_553A_8946_4194_90289CC41BB5",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70BDD5EC_5695_28F4_41CF_C67D89396619",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_778E1F16_553A_8946_4194_90289CC41BB5",
 {
  "id": "effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70BC05EC_5695_28F4_41BE_75D028EDBC80",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E",
 {
  "id": "effect_70AC8635_2B38_70BE_41C1_737F1147DA8C",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70BC55ED_5695_28F4_41BF_0B0444B5955B",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C",
 {
  "id": "effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70BCA5ED_5695_28F4_41A5_90CE0D2BD1C8",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2",
 {
  "id": "effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70BCB5ED_5695_28F4_41C6_2187960F3430",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828",
 {
  "id": "effect_25102BD5_2B28_B7FE_41C4_041AFE0F0BAC",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_25103BD5_2B28_B7FE_41C1_45F7C799132C",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "id": "effect_71AE157E_4211_A060_41C1_A6FA728B9FF8",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71AE157E_4211_A060_41C1_A6FA728B9FF8",
 {
  "id": "effect_70BBE5EE_5695_28F4_41CE_F9B3B877206E",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6",
 {
  "id": "effect_70BA35EE_5695_28F4_41CA_E127EC131E10",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_5E071490_556A_EC15_4193_60B7692BC205",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70BA55EF_5695_28F4_41D0_C7FA06CE379C",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_5E071490_556A_EC15_4193_60B7692BC205",
 {
  "id": "effect_5CFC3C8C_4232_A0A1_4198_B405D8F24CB7",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_5CFC3C8C_4232_A0A1_4198_B405D8F24CB7",
 {
  "id": "effect_70BA95EF_5695_28F4_41D2_1E8EAAE70ACA",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_77896F1A_553A_894E_41AD_345755A2712A",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70BAC5EF_5695_28F4_4199_FDAC32A18771",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_77896F1A_553A_894E_41AD_345755A2712A",
 {
  "id": "effect_7789DF1A_553A_894E_41D0_912F029A4173",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70BAF5F0_5695_28EC_41C2_3B74C095FFB3",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7789DF1A_553A_894E_41D0_912F029A4173",
 {
  "id": "effect_77885F1B_553A_894E_41A0_3F248053A945",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B935F0_5695_28EC_41D3_B9C77FABEBE3",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_77885F1B_553A_894E_41A0_3F248053A945",
 {
  "id": "effect_77881F1C_553A_894A_41A5_2ADD685F2322",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B965F0_5695_28EC_4173_E192062EB398",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_77881F1C_553A_894A_41A5_2ADD685F2322",
 {
  "id": "effect_412A2661_5507_FBFA_41C8_9A2D1C8C8213",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_412A2661_5507_FBFA_41C8_9A2D1C8C8213",
 {
  "id": "effect_70BA25F1_5695_28EC_41D3_715A7A0CE426",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_412B8661_5507_FBFA_41D0_0BAD895CD944",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_412B8661_5507_FBFA_41D0_0BAD895CD944",
 {
  "id": "effect_70BA45F1_5695_28EC_41D0_B7620C48AD50",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7274D1DE_4FC9_8836_41CB_C35126518752",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7274D1DE_4FC9_8836_41CB_C35126518752",
 {
  "id": "effect_70BA95F1_5695_28EF_41D2_0A6FE6DEE00C",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_727441DF_4FC9_8836_41CC_0D0B18042478",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_727441DF_4FC9_8836_41CC_0D0B18042478",
 {
  "id": "effect_70BAC5F2_5695_28EC_41A9_2A57BEF07FDB",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_6E6DDC4B_4272_E7A0_41C7_5048D0BE34B9",
  "easing": "cubic_out",
  "class": "SlideInEffect",
  "from": "top",
  "duration": 1000
 },
 "this.effect_6E6DDC4B_4272_E7A0_41C7_5048D0BE34B9",
 {
  "id": "effect_70BAF5F2_5695_28EC_41C7_DC856CEBCD88",
  "easing": "cubic_out",
  "class": "SlideOutEffect",
  "to": "top",
  "duration": 1000
 },
 {
  "id": "effect_2517ABD6_2B28_B7FA_41B9_E118F143094B",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "id": "effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B945F2_5695_28ED_41B5_118EB7F78B49",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6",
 {
  "id": "effect_2516CBD7_2B28_B7FA_4184_683EE4B06578",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B975F3_5695_28EC_419C_47E4F912D461",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578",
 {
  "id": "effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B9B5F3_5695_28EC_41D1_4873723382E2",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7",
 {
  "id": "effect_71B18581_4211_A0A0_41C4_C43629A7BC76",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71B18581_4211_A0A0_41C4_C43629A7BC76",
 {
  "id": "effect_70B9F5F4_5695_28D4_41C0_24C5A3DA2F6F",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA",
 {
  "id": "effect_70B845F4_5695_28D4_41D4_7B6A21AE42C1",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_3F2159CF_2B1A_A700_41BE_5406D4BE81FC",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B735F5_5695_28D4_418A_53817E803EE8",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_3F2159CF_2B1A_A700_41BE_5406D4BE81FC",
 {
  "id": "effect_71B0E584_4211_A0A1_41C9_43847D46138C",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71B0E584_4211_A0A1_41C9_43847D46138C",
 {
  "id": "effect_70B795F5_5695_28D4_41C9_8A185F1762C1",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_3BB158BB_2B38_D1AA_41B0_BC6D70FE94E6",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_3BB158BB_2B38_D1AA_41B0_BC6D70FE94E6",
 {
  "id": "effect_70B7A5F5_5695_28D4_41BB_04DB85BAE4FC",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_3098B1C3_2B3A_E700_41B4_232B931F0113",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B7E5F6_5695_28D4_41B9_FF1C5B270983",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_3098B1C3_2B3A_E700_41B4_232B931F0113",
 {
  "id": "effect_3098F1C3_2B3A_E700_41B3_98DAFF8001BC",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B635F6_5695_28D4_41C2_C2C18AFE9B2B",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_3098F1C3_2B3A_E700_41B3_98DAFF8001BC",
 {
  "id": "effect_3099A1C4_2B3A_E700_4170_E65033069B39",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B655F6_5695_28D4_418A_72B331E74D81",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_3099A1C4_2B3A_E700_4170_E65033069B39",
 {
  "id": "effect_5CE0DC93_4232_A0A0_41B9_FD0551C24AD5",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_5CE0DC93_4232_A0A0_41B9_FD0551C24AD5",
 {
  "id": "effect_70B695F7_5695_28D4_41CB_014658DDF046",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7795BF22_553A_897E_41AF_306CC8CD7EB1",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B6C5F7_5695_28D4_41CC_F2940629AA2A",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7795BF22_553A_897E_41AF_306CC8CD7EB1",
 {
  "id": "effect_77946F23_553A_897E_41CD_D517F5F45082",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B505F7_5695_28D3_41D1_EBB3942E7679",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_77946F23_553A_897E_41CD_D517F5F45082",
 {
  "id": "effect_7794CF24_553A_897A_41D1_47406777A3C3",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B535F8_5695_28DC_41A8_8DD566B9A245",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7794CF24_553A_897A_41D1_47406777A3C3",
 {
  "id": "effect_7794AF24_553A_897A_41D4_D93AD6342D8A",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B565F8_5695_28DC_41C0_266F17FE8597",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7794AF24_553A_897A_41D4_D93AD6342D8A",
 {
  "id": "effect_77976F25_553A_897A_41B2_877CF8B52EE2",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_77976F25_553A_897A_41B2_877CF8B52EE2",
 {
  "id": "effect_70B5C5F8_5695_28DD_41D3_DB2EBF2AA724",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7797FF25_553A_897A_41D2_19DB1CF5232F",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7797FF25_553A_897A_41D2_19DB1CF5232F",
 {
  "id": "effect_70B5F5F9_5695_28DC_41B6_CEDB718F77F1",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_726861E4_4FC9_880A_41B3_661275BA1317",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_726861E4_4FC9_880A_41B3_661275BA1317",
 {
  "id": "effect_70B455F9_5695_28DC_41D3_DEA0E54E87AF",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7269E1E5_4FC9_880A_41BA_3D5DD30BE06D",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7269E1E5_4FC9_880A_41BA_3D5DD30BE06D",
 {
  "id": "effect_70B495F9_5695_28DF_41CA_ADB77A672105",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_09C2DBC5_2FAE_5D9E_41A9_065ECAF2AF19",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "id": "effect_31459F67_2FAE_D69A_4164_37DF78EF38D3",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_309861C8_2B3A_E700_41C1_6120ED54C917",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B545FA_5695_28DC_41CC_0EE91A9D0562",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_309861C8_2B3A_E700_41C1_6120ED54C917",
 {
  "id": "effect_309821C7_2B3A_E700_41C0_E75CD3F76820",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B585FA_5695_28DC_41B2_DB78237755B5",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_309821C7_2B3A_E700_41C0_E75CD3F76820",
 {
  "id": "effect_309881C6_2B3A_E701_41C0_5AB081857C81",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B5D5FB_5695_28DC_41BA_EFDE195E7A02",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_309881C6_2B3A_E701_41C0_5AB081857C81",
 {
  "id": "effect_726B41E9_4FC9_881A_41C1_5CBE79CAE174",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B4E5FB_5695_28DC_41D0_1450AA5A4CFE",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_726B41E9_4FC9_881A_41C1_5CBE79CAE174",
 {
  "id": "effect_71B1A588_4211_A0A1_41C3_CBB8DE955D82",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71B1A588_4211_A0A1_41C3_CBB8DE955D82",
 {
  "id": "effect_70B315FC_5695_28D4_41B7_1B644EF0B173",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_3E887296_2B58_B07A_41B9_47D8BFFA574E",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E",
 {
  "id": "effect_70B355FC_5695_28D4_41A0_9D8DBE81BF41",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_5E05549E_556A_EC0D_41A0_BEC64BE8CB09",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B395FC_5695_28D4_41D3_40130F93FC30",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_5E05549E_556A_EC0D_41A0_BEC64BE8CB09",
 {
  "id": "effect_5CE05C95_4232_A0A0_418B_A9B5C6046C60",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_5CE05C95_4232_A0A0_418B_A9B5C6046C60",
 {
  "id": "effect_70B3C5FD_5695_28D4_41BF_77C9D30511FC",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_4127866E_5507_FBC7_41C3_B9D790BCA70F",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_4127866E_5507_FBC7_41C3_B9D790BCA70F",
 {
  "id": "effect_70B205FD_5695_28D4_41D3_9B5261F63E9F",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_4127466F_5507_FBC6_41D0_B25742EA3070",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_4127466F_5507_FBC6_41D0_B25742EA3070",
 {
  "id": "effect_70B235FD_5695_28D4_41B0_D6F688A20954",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7791BF2A_553A_894E_41B6_9A12571B0D3B",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B275FE_5695_28D4_41D2_8070AFE65773",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7791BF2A_553A_894E_41B6_9A12571B0D3B",
 {
  "id": "effect_77906F2B_553A_894E_41D1_5217E8D2C693",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B2B5FE_5695_28D4_41B5_D1DED7911226",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_77906F2B_553A_894E_41D1_5217E8D2C693",
 {
  "id": "effect_41270670_5507_FBDA_41CE_6B98C7CD6BCB",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B2F5FE_5695_28D4_41D2_71FC06703A64",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_41270670_5507_FBDA_41CE_6B98C7CD6BCB",
 {
  "id": "effect_4124E670_5507_FBDA_41D1_F1F1733DD227",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B125FF_5695_28D4_41CA_D4B6793A4366",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_4124E670_5507_FBDA_41D1_F1F1733DD227",
 {
  "id": "effect_726C61EB_4FC9_881E_41D1_58E533222243",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_726C61EB_4FC9_881E_41D1_58E533222243",
 {
  "id": "effect_70B165FF_5695_28D4_4193_CEBF3661949C",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_726DD1EB_4FC9_881E_418F_866B7958A526",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_726DD1EB_4FC9_881E_418F_866B7958A526",
 {
  "id": "effect_70B1A5FF_5695_28D4_41BE_20080E113869",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_6E562C55_4272_E7A0_41CC_0ED70CE160C3",
  "easing": "cubic_out",
  "class": "SlideInEffect",
  "from": "top",
  "duration": 1000
 },
 "this.effect_6E562C55_4272_E7A0_41CC_0ED70CE160C3",
 {
  "id": "effect_70B1D600_5695_2B2C_41D3_13E441DD4B2D",
  "easing": "cubic_out",
  "class": "SlideOutEffect",
  "to": "top",
  "duration": 1000
 },
 {
  "id": "effect_40B691C0_5695_692C_41B1_11572F01AB2A",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B02600_5695_2B2C_41C6_B6675709141E",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_40B691C0_5695_692C_41B1_11572F01AB2A",
 {
  "id": "effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA",
 {
  "id": "effect_70B06600_5695_2B2C_41CE_1C2C8C436B3E",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_40B6D1C1_5695_692C_41B4_15B2D2584FF8",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B08601_5695_2B2C_41CA_CC2365C23312",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_40B6D1C1_5695_692C_41B4_15B2D2584FF8",
 {
  "id": "effect_40B531C1_5695_692C_41BB_8382320E97CB",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B0F601_5695_2B2C_41AF_978E1AA38750",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_40B531C1_5695_692C_41BB_8382320E97CB",
 {
  "id": "effect_71B1258A_4211_A0A0_4180_984D30BC8BF8",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71B1258A_4211_A0A0_4180_984D30BC8BF8",
 {
  "id": "effect_704F0601_5695_2B2C_418A_12A84D0DE348",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_3E891297_2B58_B07A_41AF_4F2371C2F200",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200",
 {
  "id": "effect_70B1A602_5695_2B2C_41D2_E13CDFDF9648",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_726FF1ED_4FC9_881A_41D3_46E1C42560D7",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70B09602_5695_2B2C_41B6_D642736997AE",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_726FF1ED_4FC9_881A_41D3_46E1C42560D7",
 {
  "id": "effect_71B0F58C_4211_A0A0_41AB_6FC57BF9CE23",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71B0F58C_4211_A0A0_41AB_6FC57BF9CE23",
 {
  "id": "effect_70B0F603_5695_2B2C_41B5_F9B543190E3B",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_083FF036_2B68_50BA_41B2_BA99A13F9561",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_083FF036_2B68_50BA_41B2_BA99A13F9561",
 {
  "id": "effect_704F2603_5695_2B2C_41C5_5F6A359FB4B7",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_0A8D711D_2FA6_4AA9_41B3_1698FA0FACCA",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_704F6603_5695_2B2C_41D2_9442B52AB1FF",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_0A8D711D_2FA6_4AA9_41B3_1698FA0FACCA",
 {
  "id": "effect_5CE7AC97_4232_A0A0_41BD_683EA2897E03",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_5CE7AC97_4232_A0A0_41BD_683EA2897E03",
 {
  "id": "effect_704FC604_5695_2B34_41CD_4357B9F823CC",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_41225675_5507_FBDA_41D4_83EED0E7A5BA",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_41225675_5507_FBDA_41D4_83EED0E7A5BA",
 {
  "id": "effect_704FF604_5695_2B34_41CD_3961158C73FE",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_41223675_5507_FBDA_4181_E233D89ED9D6",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_41223675_5507_FBDA_4181_E233D89ED9D6",
 {
  "id": "effect_704E3604_5695_2B34_41B1_EDD1410F0EB9",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_779F4F31_553A_895A_41C9_F611A827B3B4",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_704E9605_5695_2B34_419A_3F3EB71FB2DA",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_779F4F31_553A_895A_41C9_F611A827B3B4",
 {
  "id": "effect_779F3F31_553A_895A_41CA_F4B2075198EF",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_704EB605_5695_2B34_41D4_A2697C8B2C1F",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_779F3F31_553A_895A_41CA_F4B2075198EF",
 {
  "id": "effect_779C6F32_553A_895E_41C2_3348EBACAD75",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_704ED605_5695_2B34_419D_BE5740F8C75A",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_779C6F32_553A_895E_41C2_3348EBACAD75",
 {
  "id": "effect_779CDF32_553A_895F_41C8_52E0B2F6CB6A",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_704D1606_5695_2B34_41B3_F08275F54A29",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_779CDF32_553A_895F_41C8_52E0B2F6CB6A",
 {
  "id": "effect_726F91EF_4FC9_8815_41C6_FEB96EF4ED62",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_726F91EF_4FC9_8815_41C6_FEB96EF4ED62",
 {
  "id": "effect_704D4606_5695_2B34_41D0_36AB6D113534",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_726FC1F0_4FC9_880A_41CE_1908D478796F",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_726FC1F0_4FC9_880A_41CE_1908D478796F",
 {
  "id": "effect_704D9606_5695_2B35_41B1_9CAB7A3504D2",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_40B521C7_5695_6933_41C9_F4F4755C65CF",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_704DF607_5695_2B34_418F_EB1B983FC536",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_40B521C7_5695_6933_41C9_F4F4755C65CF",
 {
  "id": "effect_083FA037_2B68_50BA_41C5_535FB194808D",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_083FA037_2B68_50BA_41C5_535FB194808D",
 {
  "id": "effect_704C1607_5695_2B34_41D2_4449C4CF32CF",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_40B561C8_5695_693C_41BE_5B728623950D",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_704C5608_5695_2B3C_41D4_43255928628A",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_40B561C8_5695_693C_41BE_5B728623950D",
 {
  "id": "effect_40B541C9_5695_693C_41D2_D5DBF933655C",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_704CA608_5695_2B3C_41CD_D887D6DB8606",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_40B541C9_5695_693C_41D2_D5DBF933655C",
 {
  "id": "effect_726051F1_4FC9_880A_41D1_6185001C10DB",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_704B9609_5695_2B3C_41A3_09CADB53342C",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_726051F1_4FC9_880A_41D1_6185001C10DB",
 {
  "id": "effect_71B1F58E_4211_A0A0_4193_15907AE6E948",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71B1F58E_4211_A0A0_4193_15907AE6E948",
 {
  "id": "effect_704BD609_5695_2B3C_41CC_BF609A828930",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_083EA038_2B68_50B6_41C3_0BE33D67069D",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_083EA038_2B68_50B6_41C3_0BE33D67069D",
 {
  "id": "effect_704A1609_5695_2B3C_41A3_00222D19C401",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_0A8BD120_2FA6_4A96_41A2_A9BE1252574A",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_704A460A_5695_2B3C_4152_45F4AE04038E",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_0A8BD120_2FA6_4A96_41A2_A9BE1252574A",
 {
  "id": "effect_5CE5CC9A_4232_A0A0_41C9_BFE43E88A8F1",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_5CE5CC9A_4232_A0A0_41C9_BFE43E88A8F1",
 {
  "id": "effect_704A660A_5695_2B3C_41D1_7508BB86E915",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_4123B679_5507_FBCA_41B6_7A65B0727BCB",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_4123B679_5507_FBCA_41B6_7A65B0727BCB",
 {
  "id": "effect_704AC60A_5695_2B3D_41B1_8C037C6A76AC",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_4123067A_5507_FBCE_41A4_A6CF223F2093",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_4123067A_5507_FBCE_41A4_A6CF223F2093",
 {
  "id": "effect_704AF60B_5695_2B3C_41C8_FCD29A286BF8",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_77984F37_553A_8946_41A3_E7B051EC6579",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7049260B_5695_2B3C_41D3_44983E6499C3",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_77984F37_553A_8946_41A3_E7B051EC6579",
 {
  "id": "effect_77980F38_553A_894A_41C0_A9313A6F49FE",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7049660B_5695_2B3C_41B2_1E0DB284EFC4",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_77980F38_553A_894A_41C0_A9313A6F49FE",
 {
  "id": "effect_7798CF38_553A_894A_41A7_7568B600AA9C",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_704A360C_5695_2B34_419D_52660FDD9AEA",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7798CF38_553A_894A_41A7_7568B600AA9C",
 {
  "id": "effect_779B4F39_553A_894A_41BA_C60C009E96C4",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_704A760C_5695_2B34_41D3_34B7DA73A08A",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_779B4F39_553A_894A_41BA_C60C009E96C4",
 {
  "id": "effect_7262A1F3_4FC9_880E_41C3_259FDFF86250",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7262A1F3_4FC9_880E_41C3_259FDFF86250",
 {
  "id": "effect_704AC60C_5695_2B35_41CE_DC8B6C6505F8",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7262E1F4_4FC9_880A_41D1_55FAFDDF5D8C",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7262E1F4_4FC9_880A_41D1_55FAFDDF5D8C",
 {
  "id": "effect_704AF60D_5695_2B34_41C8_DE2DFDC7B19C",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_40B531CE_5695_6934_41D0_CFB9F0962160",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7049260D_5695_2B34_41A9_6A9CC5B5B577",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_40B531CE_5695_6934_41D0_CFB9F0962160",
 {
  "id": "effect_083E6039_2B68_50B6_41C1_ECDB68119909",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_083E6039_2B68_50B6_41C1_ECDB68119909",
 {
  "id": "effect_7049860E_5695_2B34_41CC_B82C39E35494",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_40B541CF_5695_6934_41BC_437899351995",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7049B60E_5695_2B34_41CB_FC8EDC030922",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_40B541CF_5695_6934_41BC_437899351995",
 {
  "id": "effect_40B5B1D0_5695_692C_41CF_E97741C8159A",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7049E60E_5695_2B34_418B_767ADB9788DD",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_40B5B1D0_5695_692C_41CF_E97741C8159A",
 {
  "id": "effect_726311F5_4FC9_880A_41B4_030414259793",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7048E60F_5695_2B34_41A3_9CE93F7EFAA0",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_726311F5_4FC9_880A_41B4_030414259793",
 {
  "id": "effect_71B11592_4211_A0A0_41CE_905A6104BD57",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71B11592_4211_A0A0_41CE_905A6104BD57",
 {
  "id": "effect_7047260F_5695_2B34_41C4_49B8588B1516",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_5E1B94AE_556A_EC0D_41D2_7F5E6534CF32",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_5E1B94AE_556A_EC0D_41D2_7F5E6534CF32",
 {
  "id": "effect_70475610_5695_2B2C_41C8_4C603C0C93C5",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_5E1BB4AF_556A_EC0B_41D1_C9D283206AE1",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70479610_5695_2B2C_41D2_ECD29F595FDC",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_5E1BB4AF_556A_EC0B_41D1_C9D283206AE1",
 {
  "id": "effect_5CE4FC9B_4232_A0A0_41C7_BEB34AD7E39A",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_5CE4FC9B_4232_A0A0_41C7_BEB34AD7E39A",
 {
  "id": "effect_7047E610_5695_2B2C_41D5_16C2AF1EE3EE",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_41DED67D_5507_FBCA_41D1_8C3BF73507F8",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_41DED67D_5507_FBCA_41D1_8C3BF73507F8",
 {
  "id": "effect_70463611_5695_2B2C_41D1_8BCAFB4C82C8",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_41DE967D_5507_FBC5_41D4_AEC0F414A77F",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_41DE967D_5507_FBC5_41D4_AEC0F414A77F",
 {
  "id": "effect_70467611_5695_2B2C_41D5_968CAEF0E097",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_779AFF3D_553A_894A_41B6_ABA840537EE1",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7046E611_5695_2B2C_41D2_B33B81AEDD35",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_779AFF3D_553A_894A_41B6_ABA840537EE1",
 {
  "id": "effect_779AAF3D_553A_894A_41D3_E298C3D38F3B",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7046F612_5695_2B2C_41D3_C683F3A135A8",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_779AAF3D_553A_894A_41D3_E298C3D38F3B",
 {
  "id": "effect_76650F3E_553A_8946_41C2_7E9FE84BB636",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70452612_5695_2B2C_41D1_0F81325BEEA4",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_76650F3E_553A_8946_41C2_7E9FE84BB636",
 {
  "id": "effect_7665CF3E_553A_8946_41CA_38626EF15A12",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70456612_5695_2B2C_41CB_0AA3CCB6A9C2",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7665CF3E_553A_8946_41CA_38626EF15A12",
 {
  "id": "effect_7264C1F6_4FC9_8BF6_41D3_3406BD33533A",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7264C1F6_4FC9_8BF6_41D3_3406BD33533A",
 {
  "id": "effect_70459613_5695_2B2C_41BF_8C991E60FEDE",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_726461F7_4FC9_8BF6_41C5_73FA0E92B63A",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_726461F7_4FC9_8BF6_41C5_73FA0E92B63A",
 {
  "id": "effect_7045C613_5695_2B2C_41AC_01AEE6675C71",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_40B551D5_5695_68D4_41BA_B22B99BE53D5",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70443613_5695_2B2C_41C8_01F7A18424DF",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_40B551D5_5695_68D4_41BA_B22B99BE53D5",
 {
  "id": "effect_40B5B1D6_5695_68D4_41BE_E930F5807F1E",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_40B5B1D6_5695_68D4_41BE_E930F5807F1E",
 {
  "id": "effect_70447614_5695_2B54_41A4_3659620E13F6",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_40B5F1D6_5695_68D4_41B3_5F75C52C7C8E",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7044D614_5695_2B54_41CC_34929A766FA2",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_40B5F1D6_5695_68D4_41B3_5F75C52C7C8E",
 {
  "id": "effect_40B5D1D7_5695_68D4_41C5_3CFF9D0F8075",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70430614_5695_2B54_41B0_26B9C35269B3",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_40B5D1D7_5695_68D4_41C5_3CFF9D0F8075",
 {
  "id": "effect_726431F8_4FC9_8BFA_41CA_55EA2BE0E8C6",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70447615_5695_2B54_41C7_229BD97FABC1",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_726431F8_4FC9_8BFA_41CA_55EA2BE0E8C6",
 {
  "id": "effect_71B0F593_4211_A0A0_418E_AFD082FA622B",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71B0F593_4211_A0A0_418E_AFD082FA622B",
 {
  "id": "effect_7044C615_5695_2B54_4193_D8A3A2CF7F3C",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_5E19C4B4_556A_EC1D_41D1_A2A708D8EAA3",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_5E19C4B4_556A_EC1D_41D1_A2A708D8EAA3",
 {
  "id": "effect_7044F616_5695_2B54_419A_212C04656F7A",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_5E1994B4_556A_EC1D_41BA_6E287D4B2DC5",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70432616_5695_2B54_41A5_DED703B11FF7",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_5E1994B4_556A_EC1D_41BA_6E287D4B2DC5",
 {
  "id": "effect_5CEB9C9D_4232_A0A0_4182_47BCA14283F7",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_5CEB9C9D_4232_A0A0_4182_47BCA14283F7",
 {
  "id": "effect_70434616_5695_2B55_41B9_C63AF6528873",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_41DE1680_5507_FB3A_41D5_191A2AC8DF50",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_41DE1680_5507_FB3A_41D5_191A2AC8DF50",
 {
  "id": "effect_7043A617_5695_2B54_41C6_E67F00FEBAA6",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_41DFF681_5507_FB3A_41CA_29611E76A119",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_41DFF681_5507_FB3A_41CA_29611E76A119",
 {
  "id": "effect_7043F617_5695_2B54_41D3_E356A38C78CB",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7666EF42_553A_893E_41C0_918A27244B84",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70421618_5695_2B5C_41C7_D346E0B99EEA",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7666EF42_553A_893E_41C0_918A27244B84",
 {
  "id": "effect_76615F42_553A_893E_41CA_F9F9CB909ECA",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70426618_5695_2B5C_41D5_5C77C4965272",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_76615F42_553A_893E_41CA_F9F9CB909ECA",
 {
  "id": "effect_76678F43_553A_893E_41CF_230AFDC24DDC",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7042A618_5695_2B5C_41B5_3B5BAC7B105B",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_76678F43_553A_893E_41CF_230AFDC24DDC",
 {
  "id": "effect_76664F43_553A_893D_41CD_281B8D1C914E",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7042C619_5695_2B5C_41C5_C144877C0112",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_76664F43_553A_893D_41CD_281B8D1C914E",
 {
  "id": "effect_726591F9_4FC9_8BFA_41AD_697A944F3807",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_726591F9_4FC9_8BFA_41AD_697A944F3807",
 {
  "id": "effect_70411619_5695_2B5C_4158_59A07F608645",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7265C1FA_4FC9_8BFE_41D0_249438D9ACE6",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7265C1FA_4FC9_8BFE_41D0_249438D9ACE6",
 {
  "id": "effect_70414619_5695_2B5C_41D2_1848C4006F55",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_40B5D1DC_5695_68D4_41C1_E888CB003076",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7041A61A_5695_2B5C_41C8_D5E0405BB603",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_40B5D1DC_5695_68D4_41C1_E888CB003076",
 {
  "id": "effect_6392BA53_2B78_F0F9_4157_C9F7F4676B34",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_6392BA53_2B78_F0F9_4157_C9F7F4676B34",
 {
  "id": "effect_7040161A_5695_2B5C_41D0_020C20786E06",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_40B401DD_5695_68D4_41B7_5BFD96443315",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7040261A_5695_2B5C_41CC_3F575AE427C3",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_40B401DD_5695_68D4_41B7_5BFD96443315",
 {
  "id": "effect_40B471DE_5695_68D4_41C4_215F0D1DFFA2",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7040661B_5695_2B5C_41AC_EE865BEAFC53",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_40B471DE_5695_68D4_41C4_215F0D1DFFA2",
 {
  "id": "effect_726651FB_4FC9_8BFE_41B0_507650F7FA47",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_705F361B_5695_2B5C_41BD_9C422FB1E283",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_726651FB_4FC9_8BFE_41B0_507650F7FA47",
 {
  "id": "effect_71B06595_4211_A0A0_41AF_5A05C1CE96AC",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71B06595_4211_A0A0_41AF_5A05C1CE96AC",
 {
  "id": "effect_705FA61C_5695_2B54_4196_DE9450D5525F",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_5E1834B9_556A_EC17_41D2_9430EB548F52",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_5E1834B9_556A_EC17_41D2_9430EB548F52",
 {
  "id": "effect_705FC61C_5695_2B54_41A3_1640FC7DC3FE",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_5E18C4BA_556A_EC15_41B0_993036CBA4D3",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_705FF61C_5695_2B54_41CE_07A96BAC3F3D",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_5E18C4BA_556A_EC15_41B0_993036CBA4D3",
 {
  "id": "effect_5CEB3C9F_4232_A0A0_419A_6B51F183C876",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_5CEB3C9F_4232_A0A0_419A_6B51F183C876",
 {
  "id": "effect_705E461D_5695_2B54_41CD_36B2D8711207",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_41DD6684_5507_FB3A_41D3_DD4B57C8BB93",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_41DD6684_5507_FB3A_41D3_DD4B57C8BB93",
 {
  "id": "effect_705E861D_5695_2B54_41B3_7E3204F8673C",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_41DD0684_5507_FB3A_41CD_43AD81E812D7",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_41DD0684_5507_FB3A_41CD_43AD81E812D7",
 {
  "id": "effect_705F461D_5695_2B57_41D5_A4E9D97658D2",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_76631F47_553A_89C6_41CE_1E3AAAF846A7",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_705F961E_5695_2B54_41C9_258EAEC26BBC",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_76631F47_553A_89C6_41CE_1E3AAAF846A7",
 {
  "id": "effect_7663FF48_553A_89CA_41CF_8F6414C201B4",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_705FC61E_5695_2B54_41D4_FEB9A8A55068",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7663FF48_553A_89CA_41CF_8F6414C201B4",
 {
  "id": "effect_76627F48_553A_89CA_41BE_08724A507BBD",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_705E061E_5695_2B55_41B6_5C721735FF34",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_76627F48_553A_89CA_41BE_08724A507BBD",
 {
  "id": "effect_76622F49_553A_89CA_4193_06F419E1E872",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_705E461F_5695_2B54_41C9_31C4B8F035E4",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_76622F49_553A_89CA_4193_06F419E1E872",
 {
  "id": "effect_726711FC_4FC9_8BFA_41B4_84CA982A4B68",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_726711FC_4FC9_8BFA_41B4_84CA982A4B68",
 {
  "id": "effect_705E861F_5695_2B54_41CD_7BF50C5A18C9",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_726751FD_4FC9_8BFA_41CC_B39E07B66A99",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_726751FD_4FC9_8BFA_41CC_B39E07B66A99",
 {
  "id": "effect_705ED61F_5695_2B53_41B3_179BE88AA530",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_40B3B1E3_5695_68EC_41C7_C902A56D8A5C",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_705D3620_5695_2B6C_41D3_1FBA47EBEA56",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_40B3B1E3_5695_68EC_41C7_C902A56D8A5C",
 {
  "id": "effect_6391DA55_2B78_F0FE_41B8_AEF165F124F7",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_6391DA55_2B78_F0FE_41B8_AEF165F124F7",
 {
  "id": "effect_705D8620_5695_2B6C_41CE_1390A5B0F062",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_40B451E4_5695_68F4_41C3_8E61F5DD4411",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_705DB621_5695_2B6C_41D0_01EBB3D532C5",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_40B451E4_5695_68F4_41C3_8E61F5DD4411",
 {
  "id": "effect_40B481E4_5695_68F5_41D1_1E48168FD3C5",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_705DF621_5695_2B6C_41D4_465AE85DD248",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_40B481E4_5695_68F5_41D1_1E48168FD3C5",
 {
  "id": "effect_7259D1FE_4FC9_8BF6_41CF_DB27A5C12535",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_705CF622_5695_2B6C_41BF_DAD5970F1E54",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7259D1FE_4FC9_8BF6_41CF_DB27A5C12535",
 {
  "id": "effect_71B38597_4211_A0A0_4180_89B4D6D90C2E",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71B38597_4211_A0A0_4180_89B4D6D90C2E",
 {
  "id": "effect_705B3622_5695_2B6C_41BF_FA0748DD1D96",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_5E1E14BF_556A_EC0B_41C8_3FCB5AED267C",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_5E1E14BF_556A_EC0B_41C8_3FCB5AED267C",
 {
  "id": "effect_705B5622_5695_2B6C_41D0_085F80BB4BA0",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_5E1ED4C0_556A_EC75_41C5_8ED0EF18D6DF",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_705BA623_5695_2B6C_41D3_8C42552DD066",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_5E1ED4C0_556A_EC75_41C5_8ED0EF18D6DF",
 {
  "id": "effect_5CEAFCA0_4232_A0E1_41C6_589373582369",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_5CEAFCA0_4232_A0E1_41C6_589373582369",
 {
  "id": "effect_705BC623_5695_2B6C_41CF_45AA1A225ADA",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_41DAA688_5507_FB4A_41C7_B00D12B1851C",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_41DAA688_5507_FB4A_41C7_B00D12B1851C",
 {
  "id": "effect_705A1623_5695_2B6C_41CC_24DD68581425",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_41DA6688_5507_FB4A_41C7_96F748C2664C",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_41DA6688_5507_FB4A_41C7_96F748C2664C",
 {
  "id": "effect_705A8624_5695_2B74_41C5_D82F83D7112E",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_766DBF4D_553A_89CA_41C1_6179891B36AF",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_705AA624_5695_2B74_41C2_1C2FED476CA1",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_766DBF4D_553A_89CA_41C1_6179891B36AF",
 {
  "id": "effect_766C6F4D_553A_89CA_41D0_B1E056BC8D9B",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_705AE624_5695_2B74_41D4_97A3674FB2A1",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_766C6F4D_553A_89CA_41D0_B1E056BC8D9B",
 {
  "id": "effect_766C2F4E_553A_89C6_41D5_2DB544CB9DBD",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70592625_5695_2B74_41D2_90FCBEA4E645",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_766C2F4E_553A_89C6_41D5_2DB544CB9DBD",
 {
  "id": "effect_766C8F4E_553A_89C6_41CD_09EA7ADE4415",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70595625_5695_2B74_41A4_0329C79AA139",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_766C8F4E_553A_89C6_41CD_09EA7ADE4415",
 {
  "id": "effect_725A91FF_4FC9_8BF5_41B7_502D2AAEEB51",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_725A91FF_4FC9_8BF5_41B7_502D2AAEEB51",
 {
  "id": "effect_70597625_5695_2B74_41D3_248901B1B939",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_725AE200_4FC9_880A_41AA_CF59DBED9A80",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_725AE200_4FC9_880A_41AA_CF59DBED9A80",
 {
  "id": "effect_7059C626_5695_2B74_41D2_7F63B9E85FAB",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_40B231EA_5695_68FC_41BA_C901C332A906",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7059F626_5695_2B74_41C0_9C6D56F0C27B",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_40B231EA_5695_68FC_41BA_C901C332A906",
 {
  "id": "effect_63900A57_2B78_F0FA_416E_CE3D049A5BE1",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_63900A57_2B78_F0FA_416E_CE3D049A5BE1",
 {
  "id": "effect_705AC626_5695_2B74_41CE_337F2E269F2D",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_40B261EB_5695_68FC_41D4_AFBF40731950",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70590627_5695_2B74_41CE_8F5CCD91F6CB",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_40B261EB_5695_68FC_41D4_AFBF40731950",
 {
  "id": "effect_40B251EB_5695_68FC_41C5_DA3C7FB2FC27",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70595627_5695_2B74_41BF_ABDB71B1A944",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_40B251EB_5695_68FC_41C5_DA3C7FB2FC27",
 {
  "id": "effect_71C44C38_5675_6F14_41C9_81C041298B77",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70583628_5695_2B7C_41C6_EB4D331F3A3F",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71C44C38_5675_6F14_41C9_81C041298B77",
 {
  "id": "effect_71C42C38_5675_6F14_41D1_94887A8CF8D1",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71C42C38_5675_6F14_41D1_94887A8CF8D1",
 {
  "id": "effect_70589628_5695_2B7C_41AB_B7B3FCE2DFEE",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_71C40C39_5675_6F14_41C9_F19C41041CD7",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71C40C39_5675_6F14_41C9_F19C41041CD7",
 {
  "id": "effect_7058C629_5695_2B7C_41A4_48567C42656D",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_64CAC37F_5677_990B_41BC_3ED16ECB47B4",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7058E629_5695_2B7C_41CC_B824D581C16A",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_64CAC37F_5677_990B_41BC_3ED16ECB47B4",
 {
  "id": "effect_71CBFC39_5675_6F14_41C4_44E0D31CAC52",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71CBFC39_5675_6F14_41C4_44E0D31CAC52",
 {
  "id": "effect_70574629_5695_2B7C_41AA_41B75A54100B",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_71C53C3A_5675_6F14_41D2_D494E87C35E6",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7057762A_5695_2B7C_419D_58FDAAFF6580",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71C53C3A_5675_6F14_41D2_D494E87C35E6",
 {
  "id": "effect_71C4EC3B_5675_6F14_41B6_DFD422A44844",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7057A62A_5695_2B7C_41D4_D978E9FA41D2",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71C4EC3B_5675_6F14_41B6_DFD422A44844",
 {
  "id": "effect_71C4CC3B_5675_6F14_41A1_6C19A8EE6BAE",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7057F62A_5695_2B7C_41C1_16C4325FF978",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71C4CC3B_5675_6F14_41A1_6C19A8EE6BAE",
 {
  "id": "effect_71C4AC3C_5675_6F0C_41D2_FB34B665FF51",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7056062B_5695_2B7C_41C8_CFE98AAB2891",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71C4AC3C_5675_6F0C_41D2_FB34B665FF51",
 {
  "id": "effect_71C48C3C_5675_6F0C_41BF_5344818BB903",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7056362B_5695_2B7C_4191_A26ADAA51E8D",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71C48C3C_5675_6F0C_41BF_5344818BB903",
 {
  "id": "effect_71C47C3D_5675_6F0C_41CF_1C7196C6DE79",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7056A62B_5695_2B7C_41C9_B43FC1A3130A",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71C47C3D_5675_6F0C_41CF_1C7196C6DE79",
 {
  "id": "effect_71C40C3D_5675_6F0C_41CA_221F8D99D9A6",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71C40C3D_5675_6F0C_41CA_221F8D99D9A6",
 {
  "id": "effect_7056E62C_5695_2B74_41CC_3E46E2D8BCFC",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_71CBCC3E_5675_6F0C_41BB_AA9EC38FA333",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71CBCC3E_5675_6F0C_41BB_AA9EC38FA333",
 {
  "id": "effect_7055262C_5695_2B74_41BF_A946BB80A678",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_71CBAC3F_5675_6F0C_41C3_4BC30C9FECC4",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71CBAC3F_5675_6F0C_41C3_4BC30C9FECC4",
 {
  "id": "effect_7055562C_5695_2B74_41B8_A13700508F82",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_71CB6C3F_5675_6F0C_41D0_854FD3D4AAB0",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71CB6C3F_5675_6F0C_41D0_854FD3D4AAB0",
 {
  "id": "effect_7055962D_5695_2B74_41D5_044ECDDCDD79",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_41CE9BF1_567B_38EC_4194_6A36FD27C15F",
  "easing": "cubic_out",
  "class": "SlideInEffect",
  "from": "top",
  "duration": 1000
 },
 "this.effect_41CE9BF1_567B_38EC_4194_6A36FD27C15F",
 {
  "id": "effect_7055C62D_5695_2B74_41D3_4231236B46F9",
  "easing": "cubic_out",
  "class": "SlideOutEffect",
  "to": "top",
  "duration": 1000
 },
 {
  "id": "effect_71CB3C40_5675_6F74_41C9_03F106DB52FC",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7054162D_5695_2B74_41A4_01F675A63642",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71CB3C40_5675_6F74_41C9_03F106DB52FC",
 {
  "id": "effect_71CACC41_5675_6F74_41B6_52F4F2B26322",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7054462E_5695_2B74_41D0_A7EA2C60FD4C",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71CACC41_5675_6F74_41B6_52F4F2B26322",
 {
  "id": "effect_71C45C41_5675_6F74_41D5_7BFE4EFCAC53",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71C45C41_5675_6F74_41D5_7BFE4EFCAC53",
 {
  "id": "effect_7054762E_5695_2B74_41C6_16E344F22234",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_71C43C42_5675_6F74_41CA_30D59D0D6443",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7054D62E_5695_2B74_41CC_E8B3DA860DD7",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71C43C42_5675_6F74_41CA_30D59D0D6443",
 {
  "id": "effect_71CBEC42_5675_6F75_41BB_8AB9D428F376",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71CBEC42_5675_6F75_41BB_8AB9D428F376",
 {
  "id": "effect_7054F62F_5695_2B74_41D2_72FF32494069",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_71CBCC43_5675_6F74_41C5_5446C930C092",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71CBCC43_5675_6F74_41C5_5446C930C092",
 {
  "id": "effect_7053262F_5695_2B74_41D4_C0C412710576",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_71CB8C44_5675_6F7C_41BB_33B02D6F19F5",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70548630_5695_2B6C_41BB_13A6D7D0258B",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71CB8C44_5675_6F7C_41BB_33B02D6F19F5",
 {
  "id": "effect_71CB4C44_5675_6F7D_41D4_A56DF9412857",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71CB4C44_5675_6F7D_41D4_A56DF9412857",
 {
  "id": "effect_70530630_5695_2B6C_419B_1CFC0F967BA7",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_71CB3C45_5675_6F7C_41D2_95CAA49CBA82",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71CB3C45_5675_6F7C_41D2_95CAA49CBA82",
 {
  "id": "effect_70533630_5695_2B6C_41B5_2C8A66FEC0B6",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_64CB4387_5677_99FB_41C0_5E9ABA4BE93A",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70535631_5695_2B6C_41CD_374221782868",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_64CB4387_5677_99FB_41C0_5E9ABA4BE93A",
 {
  "id": "effect_71CAFC46_5675_6F7C_417E_DDE9F7FA378C",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71CAFC46_5675_6F7C_417E_DDE9F7FA378C",
 {
  "id": "effect_7053B631_5695_2B6C_41B9_23EF7E6A650A",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_71CAAC46_5675_6F7C_41A3_D2180B2ED0EA",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7053F631_5695_2B6F_419D_F29A8AF56790",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71CAAC46_5675_6F7C_41A3_D2180B2ED0EA",
 {
  "id": "effect_71CA8C47_5675_6F7C_41BB_AEAB1454686A",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70522632_5695_2B6C_41BC_CF11FF928757",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71CA8C47_5675_6F7C_41BB_AEAB1454686A",
 {
  "id": "effect_71CA6C47_5675_6F7C_41D0_C11256CAF3B8",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70527632_5695_2B6C_41AA_59F6CC9F242B",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71CA6C47_5675_6F7C_41D0_C11256CAF3B8",
 {
  "id": "effect_71CA2C48_5675_6F74_41C3_76BA544887DF",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7052A633_5695_2B6C_41D4_D9BAFE7067B8",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71CA2C48_5675_6F74_41C3_76BA544887DF",
 {
  "id": "effect_71CB8C48_5675_6F75_41D0_BA164D8AACEA",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7052D633_5695_2B6C_41D3_6DBE3333008F",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71CB8C48_5675_6F75_41D0_BA164D8AACEA",
 {
  "id": "effect_71CB6C49_5675_6F74_41D0_22BF2B45AC93",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_70514633_5695_2B6C_41D1_C17613020DCE",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71CB6C49_5675_6F74_41D0_22BF2B45AC93",
 {
  "id": "effect_71CB5C4A_5675_6F74_41BB_8190A3209C1F",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71CB5C4A_5675_6F74_41BB_8190A3209C1F",
 {
  "id": "effect_70517634_5695_2B54_41B2_4C7AB4BA11CF",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_71CB0C4A_5675_6F74_41B7_AB47F38F2527",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71CB0C4A_5675_6F74_41B7_AB47F38F2527",
 {
  "id": "effect_7051B634_5695_2B54_41C0_4DD4FE75C550",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_71CAFC4B_5675_6F74_41CA_8A7752BEB6D3",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71CAFC4B_5675_6F74_41CA_8A7752BEB6D3",
 {
  "id": "effect_7051F634_5695_2B54_4164_64D41569E2C9",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_71CABC4B_5675_6F74_41C7_F18911B6E65A",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71CABC4B_5675_6F74_41C7_F18911B6E65A",
 {
  "id": "effect_70503634_5695_2B55_41C2_8B215CB89F8C",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_41CAABF9_567B_38DC_4198_B99575EB9FCA",
  "easing": "cubic_out",
  "class": "SlideInEffect",
  "from": "bottom",
  "duration": 1000
 },
 "this.effect_41CAABF9_567B_38DC_4198_B99575EB9FCA",
 {
  "id": "effect_70506635_5695_2B54_41CC_158A67B73310",
  "easing": "cubic_out",
  "class": "SlideOutEffect",
  "to": "bottom",
  "duration": 1000
 },
 {
  "id": "effect_71CA3C4C_5675_6F0C_41B8_EA963742928E",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7050A635_5695_2B54_4196_5706E025BC1A",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71CA3C4C_5675_6F0C_41B8_EA963742928E",
 {
  "id": "effect_71C9EC4D_5675_6F0C_41C3_7A98842B70D2",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7050F635_5695_2B57_41CE_2BD994BDE608",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71C9EC4D_5675_6F0C_41C3_7A98842B70D2",
 {
  "id": "effect_71C9AC4D_5675_6F0F_41D3_2C350CFFB2F2",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_706F2636_5695_2B54_41D1_FD526478E87C",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71C9AC4D_5675_6F0F_41D3_2C350CFFB2F2",
 {
  "id": "effect_4CE7BAF0_569B_38EC_41B6_8C7B91E08C40",
  "easing": "cubic_out",
  "class": "SlideInEffect",
  "from": "top",
  "duration": 1000
 },
 "this.effect_4CE7BAF0_569B_38EC_41B6_8C7B91E08C40",
 {
  "id": "effect_706F8636_5695_2B54_41BC_6D60087553FA",
  "easing": "cubic_out",
  "class": "SlideOutEffect",
  "to": "top",
  "duration": 1000
 },
 {
  "id": "effect_71C94C4F_5675_6F0C_41D3_622785F10B00",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71C94C4F_5675_6F0C_41D3_622785F10B00",
 {
  "id": "effect_706FC637_5695_2B54_41CD_ABCF6FE0F1D4",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_71C92C4F_5675_6F0C_41C7_4547646F281E",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_71C92C4F_5675_6F0C_41C7_4547646F281E",
 {
  "id": "effect_706FE637_5695_2B54_41B8_EF7E4468A7EA",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_4BD8F14B_5597_E40A_41B3_55F825C95BBB",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_706EE638_5695_2B5C_41D1_3BEE93A7E79E",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_4BD8F14B_5597_E40A_41B3_55F825C95BBB",
 {
  "id": "effect_4BD8B14C_5597_E40D_4190_117674B71D23",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_706D2638_5695_2B5C_41BF_B22B50DC8BA9",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_4BD8B14C_5597_E40D_4190_117674B71D23",
 {
  "id": "effect_4BD8114D_5597_E40F_41D1_34C7BBE707C6",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_706D5638_5695_2B5C_41D3_29E025861DCC",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_4BD8114D_5597_E40F_41D1_34C7BBE707C6",
 {
  "id": "effect_4BD8214D_5597_E40F_41B9_D50CF2B4F416",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_4BD8214D_5597_E40F_41B9_D50CF2B4F416",
 {
  "id": "effect_706E1639_5695_2B5C_41C6_EE4D23B83BF1",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_4BD9E14E_5597_E40D_41CB_5F7E3FC7FC6D",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_4BD9E14E_5597_E40D_41CB_5F7E3FC7FC6D",
 {
  "id": "effect_706E4639_5695_2B5C_4196_1317C1CCC6D2",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_4BDAC14F_5597_E40B_41B7_A26869342FF3",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_706D563A_5695_2B5C_41D1_B25397A71083",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_4BDAC14F_5597_E40B_41B7_A26869342FF3",
 {
  "id": "effect_7E316332_51AF_2B2D_419B_C1E4901A999F",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_706D763A_5695_2B5C_41D1_C80776E15324",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7E316332_51AF_2B2D_419B_C1E4901A999F",
 {
  "id": "effect_7675FF57_553A_89C6_41A9_CE1353BBF600",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_706DC63A_5695_2B5D_41CA_AA078FE00D85",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7675FF57_553A_89C6_41A9_CE1353BBF600",
 {
  "id": "effect_7E309333_51AF_2B13_41C7_2F13138DBABC",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_706C063B_5695_2B5C_41B3_20550D51E974",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7E309333_51AF_2B13_41C7_2F13138DBABC",
 {
  "id": "effect_76741F58_553A_89CA_41D3_03D1D15ED197",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_706C463B_5695_2B5C_41D2_914022222CD8",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_76741F58_553A_89CA_41D3_03D1D15ED197",
 {
  "id": "effect_40DF16C5_5161_6D76_41CE_23717A708B39",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_40DF66C6_5161_6D75_4191_1EB238710CC7",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_40DF46C6_5161_6D75_4178_022F57B6BB96",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_40DFB6C6_5161_6D75_4100_CA059BCAE420",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_3C286B3E_51A2_9975_41C0_005CB61B26B7",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_02ADB2EB_5065_8B13_41C8_6FDF308C307F",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_3C287B3E_51A2_9972_41B7_656605B0E8B4",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_5C2A3BF3_5161_7B13_41C8_BD6DC8221933",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_02AA32EA_5065_8B1D_41D3_7CCD4EFB78A2",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_02ADF2EA_5065_8B1D_41D2_CEA58E6CE320",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_386801D4_51E2_8935_417D_BAC8BBA751DE",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_5C2AABF4_5161_7B15_41D3_D6AE4A0ECFC1",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_5C2ABBF4_5161_7B15_41C5_B9136ACE46A5",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_5C2A8BF4_5161_7B15_41D4_11BB99605814",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_7D08104C_51A1_2575_41B6_6337FC1F9382",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_706CF63C_5695_2B54_41B2_B03745EBF73A",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_7D08104C_51A1_2575_41B6_6337FC1F9382",
 {
  "id": "effect_77794990_5161_67ED_41B0_94BBED414FC4",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "id": "effect_777EB990_5161_67ED_41A9_907A812EB140",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_4C3D4A8B_5161_25F3_41C3_4B9594B0BE8F",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "id": "effect_777EA990_5161_67EE_41C3_34CC041F734E",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_4BDCA151_5597_E416_41CA_282652C6B398",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_706A363D_5695_2B54_41CD_2E20C1371525",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_4BDCA151_5597_E416_41CA_282652C6B398",
 {
  "id": "effect_4BDC4152_5597_E415_41A5_7C0E67C18C40",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_706A663D_5695_2B54_4191_2A46B7164BE7",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_4BDC4152_5597_E415_41A5_7C0E67C18C40",
 {
  "id": "effect_4BDB8153_5597_E41B_41C8_D92EADDDA0D3",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_706AA63D_5695_2B54_41B2_DAA799CA8487",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_4BDB8153_5597_E41B_41C8_D92EADDDA0D3",
 {
  "id": "effect_4BDB4153_5597_E41B_41CE_618C89EAE4E5",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_4BDB4153_5597_E41B_41CE_618C89EAE4E5",
 {
  "id": "effect_706AF63E_5695_2B54_41BA_F571D85F7F69",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "id": "effect_4BDB6154_5597_E41D_41A2_44336346A7AA",
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 1000
 },
 "this.effect_4BDB6154_5597_E41D_41A2_44336346A7AA",
 {
  "id": "effect_7069363E_5695_2B54_41CB_564D857D048C",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "thumbnailUrl": "media/video_763ECAF9_51F1_13D6_417F_A7341F095AAF_t.jpg",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_763ECAF9_51F1_13D6_417F_A7341F095AAF.mp4",
   "width": 1920,
   "webmUrl": "media/video_763ECAF9_51F1_13D6_417F_A7341F095AAF.webm"
  },
  "label": "intro video",
  "width": 1920,
  "loop": true,
  "id": "video_763ECAF9_51F1_13D6_417F_A7341F095AAF",
  "height": 1080,
  "class": "Video",
  "scaleMode": "fit_inside"
 },
 {
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_3DA9E88E_2B19_A500_41C0_6174A05A143F.ogg",
   "mp3Url": "media/audio_3DA9E88E_2B19_A500_41C0_6174A05A143F.mp3"
  },
  "class": "MediaAudio",
  "id": "audio_3DA9E88E_2B19_A500_41C0_6174A05A143F",
  "autoplay": true
 },
 {
  "thumbnailUrl": "media/video_5E3784F9_556A_EC17_41B7_E48B8923D7AF_t.jpg",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_5E3784F9_556A_EC17_41B7_E48B8923D7AF.mp4",
   "width": 1920,
   "webmUrl": "media/video_5E3784F9_556A_EC17_41B7_E48B8923D7AF.webm"
  },
  "label": "intro video",
  "width": 1920,
  "loop": false,
  "id": "video_5E3784F9_556A_EC17_41B7_E48B8923D7AF",
  "height": 1080,
  "class": "Video",
  "scaleMode": "fit_inside"
 }
], "children": [
 {
  "progressBarBackgroundColor": [
   "#0066B3",
   "#6BA13C"
  ],
  "toolTipShadowColor": "#333333",
  "toolTipFontFamily": "Arial",
  "progressBarOpacity": 0,
  "playbackBarBorderSize": 0,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarBackgroundOpacity": 0,
  "progressHeight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressBottom": 0,
  "toolTipBackgroundColor": "#FFFFFF",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipBorderRadius": 3,
  "playbackBarBackgroundColor": [
   "#0066B3",
   "#71A348"
  ],
  "toolTipFontSize": 12,
  "toolTipPaddingLeft": 6,
  "progressBorderSize": 0,
  "minHeight": 50,
  "playbackBarHeight": 0,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadWidth": 6,
  "paddingTop": 0,
  "minWidth": 100,
  "playbackBarProgressBorderSize": 0,
  "borderSize": 0,
  "height": "100%",
  "width": "100%",
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipShadowOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "paddingRight": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "playbackBarRight": 0,
  "progressBarBorderRadius": 0,
  "playbackBarHeadHeight": 30,
  "progressBarBorderSize": 0,
  "playbackBarLeft": 0,
  "progressOpacity": 1,
  "toolTipOpacity": 1,
  "progressBarBackgroundColorDirection": "horizontal",
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipTextShadowOpacity": 0,
  "paddingBottom": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "top": 0,
  "toolTipPaddingRight": 6,
  "progressBorderRadius": 0,
  "transitionMode": "fade_out_fade_in",
  "id": "MainViewer",
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "shadow": false,
  "toolTipFontStyle": "normal",
  "toolTipPaddingTop": 4,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadShadowOpacity": 0,
  "toolTipBorderSize": 1,
  "toolTipShadowSpread": 0,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipFontColor": "#606060",
  "progressBarBorderColor": "#000000",
  "toolTipFontWeight": "normal",
  "paddingLeft": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadShadow": true,
  "borderRadius": 0,
  "toolTipBorderColor": "#767676",
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBorderRadius": 0,
  "class": "ViewerArea",
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadOpacity": 0,
  "playbackBarHeadBorderRadius": 0,
  "progressBackgroundOpacity": 0,
  "playbackBarBottom": 0,
  "toolTipShadowHorizontalLength": 0,
  "left": 0,
  "progressLeft": 0,
  "playbackBarProgressOpacity": 0,
  "progressBorderColor": "#AAAAAA",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarOpacity": 1
 },
 {
  "scrollBarWidth": 10,
  "bottom": "0%",
  "top": "0%",
  "backgroundColor": [
   "#005B9E",
   "#6AA744"
  ],
  "contentOpaque": false,
  "backgroundColorDirection": "horizontal",
  "maxWidth": 500,
  "shadowSpread": 1,
  "shadow": true,
  "id": "Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927",
  "visible": false,
  "shadowOpacity": 0.4,
  "maxHeight": 2000,
  "paddingLeft": 0,
  "scrollBarColor": "#000000",
  "minHeight": 100,
  "horizontalAlign": "center",
  "borderRadius": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "children": [
   {
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "contentOpaque": false,
    "id": "Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0",
    "shadow": false,
    "paddingLeft": 0,
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "horizontalAlign": "right",
    "borderRadius": 0,
    "children": [
     {
      "maxWidth": 100,
      "id": "Image_06E95D0A_2894_7324_41C3_E29CB520D1F6",
      "maxHeight": 50,
      "shadow": false,
      "paddingLeft": 0,
      "minHeight": 1,
      "click": "this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, 0, null, null, false); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, 0, null, null, false)",
      "horizontalAlign": "right",
      "borderRadius": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "height": 50,
      "class": "Image",
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_06E95D0A_2894_7324_41C3_E29CB520D1F6.png",
      "backgroundOpacity": 0,
      "paddingBottom": 0
     }
    ],
    "overflow": "visible",
    "paddingTop": 0,
    "minWidth": 1,
    "width": "100%",
    "verticalAlign": "middle",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "class": "Container",
    "layout": "horizontal",
    "height": "5.423%",
    "paddingRight": 10,
    "gap": 10,
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "scrollBarMargin": 2
   },
   {
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "contentOpaque": false,
    "id": "Container_31C84245_28FC_512C_41B2_C8B8A201BAE0",
    "shadow": false,
    "paddingLeft": 0,
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "horizontalAlign": "center",
    "borderRadius": 0,
    "children": [
     {
      "maxWidth": 1000,
      "id": "Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03",
      "maxHeight": 1000,
      "shadow": false,
      "paddingLeft": 0,
      "minHeight": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "width": "100%",
      "verticalAlign": "middle",
      "borderSize": 0,
      "height": "100%",
      "class": "Image",
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03.png",
      "backgroundOpacity": 0,
      "paddingBottom": 0
     }
    ],
    "overflow": "scroll",
    "paddingTop": 0,
    "minWidth": 1,
    "width": "100%",
    "verticalAlign": "middle",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "class": "Container",
    "layout": "vertical",
    "height": "16.157%",
    "paddingRight": 0,
    "gap": 0,
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "scrollBarMargin": 2
   },
   {
    "maxWidth": 1705,
    "id": "Image_227442D1_2F53_0813_41B3_7271F7D70452",
    "maxHeight": 600,
    "shadow": false,
    "paddingLeft": 0,
    "minHeight": 5,
    "horizontalAlign": "center",
    "borderRadius": 0,
    "paddingTop": 0,
    "minWidth": 5,
    "width": "87.681%",
    "verticalAlign": "middle",
    "borderSize": 0,
    "height": "13.558%",
    "class": "Image",
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "url": "skin/Image_227442D1_2F53_0813_41B3_7271F7D70452.png",
    "backgroundOpacity": 0,
    "paddingBottom": 0
   },
   {
    "scrollBarWidth": 10,
    "backgroundColor": [
     "#000000",
     "#666666"
    ],
    "contentOpaque": true,
    "id": "Container_6071FB50_4190_1376_417C_4B895D2ED536",
    "backgroundColorDirection": "vertical",
    "maxWidth": 500,
    "shadow": false,
    "maxHeight": 500,
    "scrollBarVisible": "rollOver",
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "borderRadius": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "children": [
     {
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "contentOpaque": true,
      "id": "Container_62015550_4190_F776_41BA_A0A2769275B2",
      "shadow": false,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "horizontalAlign": "left",
      "borderRadius": 0,
      "children": [
       {
        "maxWidth": 386,
        "id": "Image_62D15ACC_4190_3D6E_41CA_B73B93854AF4",
        "maxHeight": 276,
        "shadow": false,
        "top": "0%",
        "minHeight": 1,
        "paddingLeft": 0,
        "click": "this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, 0, this.effect_4973D6BD_51D1_324E_41C0_AE2C94232344, 'hideEffect', false); this.setComponentVisibility(this.Container_5A0BFFF6_4F75_1916_41C8_C0192AF43769, false, 0, this.effect_4973D6BD_51D1_324E_41C0_AE2C94232344, 'hideEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, 0, this.effect_4973D6BD_51D1_324E_41C0_AE2C94232344, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_50BC88D7_41F1_A0A0_41C2_DFCE679DE04B, 'showEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_50BC88D7_41F1_A0A0_41C2_DFCE679DE04B, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_50BC88D7_41F1_A0A0_41C2_DFCE679DE04B, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_50BC88D7_41F1_A0A0_41C2_DFCE679DE04B, 'showEffect', false)",
        "horizontalAlign": "center",
        "borderRadius": 0,
        "paddingTop": 0,
        "minWidth": 1,
        "width": "80%",
        "verticalAlign": "middle",
        "borderSize": 0,
        "height": "100%",
        "class": "Image",
        "paddingRight": 0,
        "scaleMode": "fit_inside",
        "url": "skin/Image_62D15ACC_4190_3D6E_41CA_B73B93854AF4.png",
        "backgroundOpacity": 0,
        "left": "0%",
        "paddingBottom": 0
       }
      ],
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "25%",
      "verticalAlign": "top",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "class": "Container",
      "layout": "absolute",
      "height": "100%",
      "paddingRight": 0,
      "gap": 10,
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "scrollBarMargin": 2
     },
     {
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "contentOpaque": true,
      "id": "Container_63BC1E1B_4190_14EA_41CB_DE2C9D195E30",
      "shadow": false,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "horizontalAlign": "left",
      "borderRadius": 0,
      "children": [
       {
        "maxWidth": 759,
        "id": "Image_6067E60E_4190_14EA_41B7_6985D6BCDEC5",
        "maxHeight": 133,
        "shadow": false,
        "top": "0%",
        "minHeight": 1,
        "paddingLeft": 0,
        "click": "this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, 0, this.effect_4816F7BE_51D1_124A_41BA_7B4660D3C5D1, 'hideEffect', false); this.setComponentVisibility(this.Container_5A0BFFF6_4F75_1916_41C8_C0192AF43769, false, 0, this.effect_4816F7BE_51D1_124A_41BA_7B4660D3C5D1, 'hideEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, 0, this.effect_4816F7BE_51D1_124A_41BA_7B4660D3C5D1, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_6D7BCD74_41B0_373F_41C7_FB9965B99C07, 'showEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_6D7BCD74_41B0_373F_41C7_FB9965B99C07, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_6D7BCD74_41B0_373F_41C7_FB9965B99C07, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_6D7BCD74_41B0_373F_41C7_FB9965B99C07, 'showEffect', false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, this.effect_6D7BCD74_41B0_373F_41C7_FB9965B99C07, 'showEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, true, 0, this.effect_6D7BCD74_41B0_373F_41C7_FB9965B99C07, 'showEffect', false)",
        "horizontalAlign": "center",
        "borderRadius": 0,
        "paddingTop": 0,
        "minWidth": 1,
        "width": "100%",
        "verticalAlign": "middle",
        "borderSize": 0,
        "height": "100%",
        "class": "Image",
        "paddingRight": 0,
        "scaleMode": "fit_inside",
        "url": "skin/Image_6067E60E_4190_14EA_41B7_6985D6BCDEC5.png",
        "backgroundOpacity": 0,
        "left": "0%",
        "paddingBottom": 0
       }
      ],
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "57.971%",
      "verticalAlign": "top",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "class": "Container",
      "layout": "absolute",
      "height": "100%",
      "paddingRight": 0,
      "gap": 10,
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "scrollBarMargin": 2
     }
    ],
    "overflow": "visible",
    "paddingTop": 0,
    "minWidth": 1,
    "width": "100%",
    "verticalAlign": "middle",
    "borderSize": 0,
    "class": "Container",
    "layout": "horizontal",
    "height": "10%",
    "paddingRight": 0,
    "gap": 10,
    "backgroundOpacity": 0.2,
    "paddingBottom": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2
   },
   {
    "scrollBarWidth": 10,
    "backgroundColor": [
     "#000000",
     "#666666"
    ],
    "contentOpaque": true,
    "id": "Container_606C4E88_4190_15D6_4193_D28A5B1565CB",
    "backgroundColorDirection": "vertical",
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "borderRadius": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "children": [
     {
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "contentOpaque": false,
      "id": "Container_63D816B2_4190_153A_41C3_FEEA477D765F",
      "shadow": false,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "horizontalAlign": "left",
      "borderRadius": 0,
      "children": [
       {
        "maxWidth": 218,
        "id": "Image_63BEA363_41B0_135A_41BA_22AFB65D8B4A",
        "maxHeight": 344,
        "shadow": false,
        "top": "0%",
        "minHeight": 1,
        "paddingLeft": 0,
        "click": "this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, 0, null, null, false); this.setComponentVisibility(this.Container_5A0BFFF6_4F75_1916_41C8_C0192AF43769, false, 0, null, null, false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, 0, null, null, false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_510D3286_41F6_E0A0_41B7_0837F6E6C079, 'showEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_510D3286_41F6_E0A0_41B7_0837F6E6C079, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_510D3286_41F6_E0A0_41B7_0837F6E6C079, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_510D3286_41F6_E0A0_41B7_0837F6E6C079, 'showEffect', false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, this.effect_510D3286_41F6_E0A0_41B7_0837F6E6C079, 'showEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, true, 0, this.effect_510D3286_41F6_E0A0_41B7_0837F6E6C079, 'showEffect', false)",
        "horizontalAlign": "center",
        "borderRadius": 0,
        "paddingTop": 0,
        "minWidth": 1,
        "width": "70%",
        "verticalAlign": "middle",
        "borderSize": 0,
        "height": "100%",
        "class": "Image",
        "paddingRight": 0,
        "scaleMode": "fit_inside",
        "url": "skin/Image_63BEA363_41B0_135A_41BA_22AFB65D8B4A.png",
        "backgroundOpacity": 0,
        "left": "0%",
        "paddingBottom": 0
       }
      ],
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "25%",
      "verticalAlign": "top",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "class": "Container",
      "layout": "absolute",
      "height": "100%",
      "paddingRight": 0,
      "gap": 10,
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "scrollBarMargin": 2
     },
     {
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "contentOpaque": false,
      "id": "Container_629A266C_4190_352E_419F_7EF6B41B99EA",
      "shadow": false,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "horizontalAlign": "left",
      "borderRadius": 0,
      "children": [
       {
        "maxWidth": 759,
        "id": "Image_62DA2260_41B0_6D56_41D0_0BF353C4C127",
        "maxHeight": 133,
        "shadow": false,
        "top": "0%",
        "minHeight": 1,
        "paddingLeft": 0,
        "click": "this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, 0, this.effect_49156269_51D3_12F6_41D4_4641DC2CB11A, 'hideEffect', false); this.setComponentVisibility(this.Container_5A0BFFF6_4F75_1916_41C8_C0192AF43769, false, 0, this.effect_49156269_51D3_12F6_41D4_4641DC2CB11A, 'hideEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, 0, this.effect_49156269_51D3_12F6_41D4_4641DC2CB11A, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_510A6C97_41F1_A0A0_41C6_75677DDAAB42, 'showEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_510A6C97_41F1_A0A0_41C6_75677DDAAB42, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_510A6C97_41F1_A0A0_41C6_75677DDAAB42, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_510A6C97_41F1_A0A0_41C6_75677DDAAB42, 'showEffect', false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, this.effect_510A6C97_41F1_A0A0_41C6_75677DDAAB42, 'showEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, true, 0, this.effect_510A6C97_41F1_A0A0_41C6_75677DDAAB42, 'showEffect', false)",
        "horizontalAlign": "center",
        "borderRadius": 0,
        "paddingTop": 0,
        "minWidth": 1,
        "width": "100%",
        "verticalAlign": "middle",
        "borderSize": 0,
        "height": "100%",
        "class": "Image",
        "paddingRight": 0,
        "scaleMode": "fit_inside",
        "url": "skin/Image_62DA2260_41B0_6D56_41D0_0BF353C4C127.png",
        "backgroundOpacity": 0,
        "left": "0%",
        "paddingBottom": 0
       }
      ],
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "58.14%",
      "verticalAlign": "top",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "class": "Container",
      "layout": "absolute",
      "height": "100%",
      "paddingRight": 0,
      "gap": 10,
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "scrollBarMargin": 2
     }
    ],
    "overflow": "visible",
    "paddingTop": 0,
    "minWidth": 1,
    "width": "99.71%",
    "verticalAlign": "middle",
    "borderSize": 0,
    "class": "Container",
    "layout": "horizontal",
    "height": "9.778%",
    "paddingRight": 0,
    "gap": 10,
    "backgroundOpacity": 0.2,
    "paddingBottom": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2
   },
   {
    "scrollBarWidth": 10,
    "backgroundColor": [
     "#000000",
     "#666666"
    ],
    "contentOpaque": true,
    "id": "Container_60B39755_41F0_137E_41C0_0E6E0B2353C9",
    "backgroundColorDirection": "vertical",
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "borderRadius": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "children": [
     {
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "contentOpaque": false,
      "id": "Container_63F3509D_41B0_2DEE_41AE_6EB7468FDF1C",
      "shadow": false,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "horizontalAlign": "left",
      "borderRadius": 0,
      "children": [
       {
        "maxWidth": 1095,
        "id": "Image_62C990B6_41B3_ED3A_41CA_9542F80D37EE",
        "maxHeight": 1095,
        "shadow": false,
        "top": "0%",
        "minHeight": 1,
        "paddingLeft": 0,
        "click": "this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, 0, this.effect_5F766399_51D7_3256_41C8_8058BFACBDFC, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, 0, this.effect_5F766399_51D7_3256_41C8_8058BFACBDFC, 'hideEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, 0, this.effect_5F766399_51D7_3256_41C8_8058BFACBDFC, 'hideEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_57E45C73_4F2F_1F2F_41D0_D80D434D627C, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_57E45C73_4F2F_1F2F_41D0_D80D434D627C, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_57E45C73_4F2F_1F2F_41D0_D80D434D627C, 'showEffect', false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, this.effect_57E45C73_4F2F_1F2F_41D0_D80D434D627C, 'showEffect', false); this.setComponentVisibility(this.Container_5A0BFFF6_4F75_1916_41C8_C0192AF43769, true, 0, this.effect_57E45C73_4F2F_1F2F_41D0_D80D434D627C, 'showEffect', false)",
        "horizontalAlign": "center",
        "borderRadius": 0,
        "paddingTop": 0,
        "minWidth": 1,
        "width": "80%",
        "verticalAlign": "middle",
        "borderSize": 0,
        "height": "100%",
        "class": "Image",
        "paddingRight": 0,
        "scaleMode": "fit_inside",
        "url": "skin/Image_62C990B6_41B3_ED3A_41CA_9542F80D37EE.png",
        "backgroundOpacity": 0,
        "left": "0%",
        "paddingBottom": 0
       }
      ],
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "25%",
      "verticalAlign": "top",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "class": "Container",
      "layout": "absolute",
      "height": "100%",
      "paddingRight": 0,
      "gap": 10,
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "scrollBarMargin": 2
     },
     {
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "contentOpaque": false,
      "id": "Container_62EF46AC_41B0_352E_41C3_470A9C137921",
      "shadow": false,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "horizontalAlign": "left",
      "borderRadius": 0,
      "children": [
       {
        "maxWidth": 759,
        "id": "Image_6331E052_41B0_2D7A_4195_B0D655B92177",
        "maxHeight": 133,
        "shadow": false,
        "top": "0%",
        "minHeight": 1,
        "paddingLeft": 0,
        "click": "this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, 0, this.effect_5F7E6C20_51D1_3677_41A7_5A242A038A1A, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, 0, this.effect_5F7E6C20_51D1_3677_41A7_5A242A038A1A, 'hideEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, 0, this.effect_5F7E6C20_51D1_3677_41A7_5A242A038A1A, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_58318646_4F2F_2B69_41AC_962A6ED82AEE, 'showEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_58318646_4F2F_2B69_41AC_962A6ED82AEE, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_58318646_4F2F_2B69_41AC_962A6ED82AEE, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_58318646_4F2F_2B69_41AC_962A6ED82AEE, 'showEffect', false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, this.effect_58318646_4F2F_2B69_41AC_962A6ED82AEE, 'showEffect', false); this.setComponentVisibility(this.Container_5A0BFFF6_4F75_1916_41C8_C0192AF43769, true, 0, this.effect_58318646_4F2F_2B69_41AC_962A6ED82AEE, 'showEffect', false)",
        "horizontalAlign": "center",
        "borderRadius": 0,
        "paddingTop": 0,
        "minWidth": 1,
        "width": "99.75%",
        "verticalAlign": "middle",
        "borderSize": 0,
        "height": "100%",
        "class": "Image",
        "paddingRight": 0,
        "scaleMode": "fit_inside",
        "url": "skin/Image_6331E052_41B0_2D7A_4195_B0D655B92177.png",
        "backgroundOpacity": 0,
        "left": "0%",
        "paddingBottom": 0
       }
      ],
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "58.14%",
      "verticalAlign": "top",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "class": "Container",
      "layout": "absolute",
      "height": "100%",
      "paddingRight": 0,
      "gap": 10,
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "scrollBarMargin": 2
     }
    ],
    "overflow": "visible",
    "paddingTop": 0,
    "minWidth": 1,
    "width": "99.71%",
    "verticalAlign": "middle",
    "borderSize": 0,
    "class": "Container",
    "layout": "horizontal",
    "height": "9.778%",
    "paddingRight": 0,
    "gap": 0,
    "backgroundOpacity": 0.2,
    "paddingBottom": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2
   },
   {
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "contentOpaque": false,
    "id": "Container_3FB65883_2894_7124_41B7_81A73B20B38D",
    "shadow": false,
    "paddingLeft": 0,
    "scrollBarColor": "#000000",
    "minHeight": 5,
    "horizontalAlign": "center",
    "borderRadius": 0,
    "children": [
     {
      "maxWidth": 512,
      "id": "Image_31227ABF_2894_515C_41B6_160BDF6DEA3D",
      "maxHeight": 512,
      "shadow": false,
      "paddingLeft": 0,
      "minHeight": 20,
      "click": "this.openLink(\"https://www.naturalremedy.com/rd/\", \"_blank\")",
      "horizontalAlign": "center",
      "borderRadius": 0,
      "cursor": "hand",
      "paddingTop": 0,
      "minWidth": 20,
      "width": "15%",
      "verticalAlign": "middle",
      "borderSize": 0,
      "height": "22%",
      "class": "Image",
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_31227ABF_2894_515C_41B6_160BDF6DEA3D.png",
      "backgroundOpacity": 0,
      "paddingBottom": 0
     },
     {
      "maxWidth": 512,
      "id": "Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F",
      "maxHeight": 512,
      "shadow": false,
      "paddingLeft": 0,
      "minHeight": 20,
      "click": "this.openLink(\"https://www.facebook.com/NaturalRemedies.AHP/\", \"_blank\")",
      "horizontalAlign": "center",
      "borderRadius": 0,
      "cursor": "hand",
      "paddingTop": 0,
      "minWidth": 20,
      "width": "15%",
      "verticalAlign": "middle",
      "borderSize": 0,
      "height": "22%",
      "class": "Image",
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F.png",
      "backgroundOpacity": 0,
      "paddingBottom": 0
     },
     {
      "maxWidth": 512,
      "id": "Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F",
      "maxHeight": 512,
      "shadow": false,
      "paddingLeft": 0,
      "minHeight": 20,
      "click": "this.openLink(\"https://www.youtube.com/channel/UC-pz4IQAXsTO7QccbCpSZqg/videos\", \"_blank\")",
      "horizontalAlign": "center",
      "borderRadius": 0,
      "cursor": "hand",
      "paddingTop": 0,
      "minWidth": 20,
      "width": "15%",
      "verticalAlign": "middle",
      "borderSize": 0,
      "height": "22%",
      "class": "Image",
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F.png",
      "backgroundOpacity": 0,
      "paddingBottom": 0
     }
    ],
    "overflow": "visible",
    "paddingTop": 84,
    "minWidth": 5,
    "width": "100%",
    "verticalAlign": "bottom",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "class": "Container",
    "layout": "horizontal",
    "height": "30.567%",
    "paddingRight": 0,
    "gap": 35,
    "backgroundOpacity": 0,
    "paddingBottom": 30,
    "scrollBarMargin": 2
   }
  ],
  "scrollBarVisible": "rollOver",
  "overflow": "visible",
  "paddingTop": 0,
  "minWidth": 100,
  "borderSize": 0,
  "scrollBarOpacity": 0,
  "class": "Container",
  "layout": "vertical",
  "verticalAlign": "top",
  "shadowVerticalLength": 0,
  "paddingRight": 0,
  "shadowHorizontalLength": 7,
  "gap": 10,
  "shadowColor": "#000000",
  "backgroundOpacity": 1,
  "left": "0%",
  "paddingBottom": 0,
  "shadowBlurRadius": 6,
  "right": "83%",
  "scrollBarMargin": 2
 },
 {
  "toolTipTextShadowOpacity": 0,
  "toolTipPaddingTop": 4,
  "maxWidth": 500,
  "toolTipFontFamily": "Arial",
  "id": "Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D",
  "maxHeight": 500,
  "shadow": false,
  "toolTipFontStyle": "normal",
  "visible": false,
  "toolTipBackgroundColor": "#FFFFFF",
  "toolTipBorderRadius": 3,
  "top": "3%",
  "toolTipShadowSpread": 0,
  "toolTipPaddingBottom": 4,
  "toolTipFontSize": 12,
  "toolTipFontColor": "#606060",
  "toolTipPaddingLeft": 6,
  "toolTipPaddingRight": 6,
  "toolTipFontWeight": "normal",
  "minHeight": 100,
  "paddingLeft": 0,
  "toolTipShadowVerticalLength": 0,
  "horizontalAlign": "center",
  "borderRadius": 0,
  "toolTipBorderColor": "#767676",
  "click": "this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, 0, this.effect_74D59241_4213_63A0_41CB_DA1C684AF71F, 'hideEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, 0, this.effect_74D59241_4213_63A0_41CB_DA1C684AF71F, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, 0, this.effect_74D59241_4213_63A0_41CB_DA1C684AF71F, 'hideEffect', false); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, 0, null, null, false); this.setComponentVisibility(this.Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0, true, 0, null, null, false); this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, true, 0, null, null, false)",
  "paddingTop": 0,
  "minWidth": 100,
  "width": "10%",
  "verticalAlign": "middle",
  "borderSize": 0,
  "height": "10%",
  "class": "Image",
  "toolTip": "Menu",
  "toolTipTextShadowColor": "#000000",
  "paddingRight": 0,
  "scaleMode": "fit_inside",
  "url": "skin/Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.png",
  "toolTipShadowOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "backgroundOpacity": 0,
  "left": "2%",
  "paddingBottom": 0,
  "toolTipShadowHorizontalLength": 0,
  "toolTipOpacity": 1,
  "toolTipShadowColor": "#333333",
  "toolTipTextShadowBlurRadius": 3,
  "toolTipBorderSize": 1
 },
 {
  "scrollBarWidth": 10,
  "bottom": "0%",
  "contentOpaque": false,
  "id": "Container_619C3102_29AC_5324_41C1_3BF76C2BBF06",
  "shadow": false,
  "paddingLeft": 0,
  "scrollBarColor": "#000000",
  "minHeight": 500,
  "horizontalAlign": "center",
  "borderRadius": 0,
  "children": [
   {
    "scrollBarWidth": 10,
    "bottom": "18.59%",
    "backgroundColor": [
     "#006CB5",
     "#71A348"
    ],
    "contentOpaque": false,
    "id": "Container_61192088_29AC_5124_4182_B40BFFB7B4C6",
    "backgroundColorDirection": "vertical",
    "shadow": false,
    "visible": false,
    "top": "17.37%",
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "paddingLeft": 0,
    "borderRadius": 0,
    "backgroundColorRatios": [
     0.02,
     1
    ],
    "children": [
     {
      "scrollBarWidth": 10,
      "backgroundColor": [
       "#006CB5",
       "#71A348"
      ],
      "contentOpaque": false,
      "id": "Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F",
      "backgroundColorDirection": "horizontal",
      "shadow": false,
      "scrollBarVisible": "rollOver",
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "paddingLeft": 0,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "backgroundColorRatios": [
       0,
       1
      ],
      "children": [
       {
        "scrollBarWidth": 10,
        "scrollBarVisible": "rollOver",
        "contentOpaque": false,
        "id": "Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A",
        "shadow": false,
        "paddingLeft": 0,
        "scrollBarColor": "#000000",
        "minHeight": 1,
        "horizontalAlign": "left",
        "borderRadius": 0,
        "children": [
         {
          "maxWidth": 1753,
          "id": "Image_33470F48_2F93_8736_41C7_C471F2C7FF7C",
          "maxHeight": 133,
          "shadow": false,
          "top": "0%",
          "minHeight": 1,
          "paddingLeft": 0,
          "horizontalAlign": "center",
          "borderRadius": 0,
          "paddingTop": 0,
          "minWidth": 1,
          "width": "95.278%",
          "verticalAlign": "middle",
          "borderSize": 0,
          "height": "100%",
          "class": "Image",
          "paddingRight": 0,
          "scaleMode": "fit_inside",
          "url": "skin/Image_33470F48_2F93_8736_41C7_C471F2C7FF7C.png",
          "backgroundOpacity": 0,
          "left": "2.26%",
          "paddingBottom": 0
         }
        ],
        "overflow": "scroll",
        "paddingTop": 0,
        "minWidth": 1,
        "width": "84.581%",
        "verticalAlign": "top",
        "borderSize": 0,
        "scrollBarOpacity": 0.5,
        "class": "Container",
        "layout": "absolute",
        "height": "100%",
        "paddingRight": 0,
        "gap": 10,
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "scrollBarMargin": 2
       },
       {
        "scrollBarWidth": 10,
        "scrollBarVisible": "rollOver",
        "contentOpaque": false,
        "id": "Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975",
        "shadow": false,
        "paddingLeft": 0,
        "scrollBarColor": "#000000",
        "minHeight": 1,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "children": [
         {
          "toolTipBorderSize": 1,
          "toolTipPaddingTop": 4,
          "maxWidth": 100,
          "toolTipFontFamily": "Arial",
          "id": "Image_1256AF34_50A3_7975_41CF_E4D5B01FA15D",
          "maxHeight": 100,
          "shadow": false,
          "toolTipFontStyle": "normal",
          "toolTipBackgroundColor": "#F6F6F6",
          "toolTipFontSize": 12,
          "toolTipBorderRadius": 3,
          "horizontalAlign": "center",
          "toolTipShadowSpread": 0,
          "toolTipPaddingBottom": 4,
          "paddingLeft": 0,
          "toolTipPaddingRight": 6,
          "toolTipFontWeight": "normal",
          "minHeight": 10,
          "toolTipFontColor": "#606060",
          "toolTipShadowVerticalLength": 0,
          "toolTipPaddingLeft": 6,
          "borderRadius": 0,
          "toolTipBorderColor": "#767676",
          "click": "this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, 0, this.effect_15430EDE_505D_7B35_41CA_3F5C176FC215, 'hideEffect', false)",
          "paddingTop": 0,
          "minWidth": 10,
          "width": "60%",
          "verticalAlign": "middle",
          "borderSize": 0,
          "height": "60%",
          "class": "Image",
          "toolTip": "Close",
          "toolTipTextShadowColor": "#000000",
          "paddingRight": 0,
          "scaleMode": "fit_inside",
          "url": "skin/Image_1256AF34_50A3_7975_41CF_E4D5B01FA15D.png",
          "toolTipShadowOpacity": 1,
          "toolTipShadowBlurRadius": 3,
          "backgroundOpacity": 0,
          "paddingBottom": 0,
          "toolTipShadowHorizontalLength": 0,
          "toolTipOpacity": 1,
          "toolTipShadowColor": "#333333",
          "toolTipTextShadowBlurRadius": 3,
          "toolTipTextShadowOpacity": 0
         }
        ],
        "overflow": "scroll",
        "paddingTop": 0,
        "minWidth": 1,
        "width": "12.755%",
        "verticalAlign": "middle",
        "borderSize": 0,
        "scrollBarOpacity": 0.5,
        "class": "Container",
        "layout": "horizontal",
        "height": "100%",
        "paddingRight": 0,
        "gap": 10,
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "scrollBarMargin": 2
       }
      ],
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "100%",
      "verticalAlign": "middle",
      "borderSize": 0,
      "class": "Container",
      "layout": "horizontal",
      "height": "12.627%",
      "paddingRight": 0,
      "gap": 10,
      "backgroundOpacity": 1,
      "paddingBottom": 0,
      "scrollBarOpacity": 0.5,
      "scrollBarMargin": 2
     },
     {
      "maxWidth": 1385,
      "id": "Image_61372758_2994_5F24_41C3_CE568D87E54A",
      "maxHeight": 866,
      "shadow": false,
      "visible": false,
      "paddingLeft": 0,
      "minHeight": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "width": "100%",
      "verticalAlign": "middle",
      "borderSize": 0,
      "height": "87.324%",
      "class": "Image",
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_61372758_2994_5F24_41C3_CE568D87E54A.jpg",
      "backgroundOpacity": 0,
      "paddingBottom": 0
     },
     {
      "maxWidth": 1385,
      "id": "Image_6F475BB5_2994_D76C_418F_CE09ACD35F01",
      "maxHeight": 866,
      "shadow": false,
      "visible": false,
      "paddingLeft": 0,
      "minHeight": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "width": "100%",
      "verticalAlign": "middle",
      "borderSize": 0,
      "height": "87.324%",
      "class": "Image",
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_6F475BB5_2994_D76C_418F_CE09ACD35F01.jpg",
      "backgroundOpacity": 0,
      "paddingBottom": 0
     },
     {
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "contentOpaque": false,
      "id": "Container_5A0BFFF6_4F75_1916_41C8_C0192AF43769",
      "shadow": false,
      "paddingLeft": 20,
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "children": [
       {
        "scrollBarWidth": 10,
        "backgroundColor": [
         "#000000",
         "#666666"
        ],
        "contentOpaque": false,
        "id": "Container_5A65C06B_4F74_E73F_41D1_267D30DF1645",
        "backgroundColorDirection": "vertical",
        "maxWidth": 1000,
        "shadow": false,
        "maxHeight": 1000,
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "minHeight": 100,
        "paddingLeft": 5,
        "horizontalAlign": "left",
        "borderRadius": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "children": [
         {
          "maxWidth": 2245,
          "id": "Image_5928948A_4F57_6FF9_41B9_2F0112B06FDD",
          "maxHeight": 474,
          "shadow": false,
          "top": "0%",
          "minHeight": 1,
          "paddingLeft": 0,
          "click": "this.mainPlayList.set('selectedIndex', 0)",
          "horizontalAlign": "center",
          "borderRadius": 0,
          "paddingTop": 0,
          "minWidth": 1,
          "width": "100%",
          "verticalAlign": "middle",
          "borderSize": 0,
          "height": "100%",
          "class": "Image",
          "paddingRight": 0,
          "scaleMode": "fit_inside",
          "url": "skin/Image_5928948A_4F57_6FF9_41B9_2F0112B06FDD.png",
          "backgroundOpacity": 0,
          "left": "0%",
          "paddingBottom": 0
         }
        ],
        "overflow": "scroll",
        "paddingTop": 0,
        "minWidth": 100,
        "width": "98%",
        "verticalAlign": "top",
        "borderSize": 0,
        "class": "Container",
        "layout": "absolute",
        "height": "25%",
        "paddingRight": 0,
        "gap": 10,
        "backgroundOpacity": 0.3,
        "paddingBottom": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2
       },
       {
        "scrollBarWidth": 10,
        "backgroundColor": [
         "#000000",
         "#666666"
        ],
        "contentOpaque": false,
        "id": "Container_59F25950_4F6B_196A_41CD_F43855FE820E",
        "backgroundColorDirection": "vertical",
        "maxWidth": 1000,
        "shadow": false,
        "maxHeight": 1000,
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "minHeight": 100,
        "paddingLeft": 0,
        "horizontalAlign": "left",
        "borderRadius": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "children": [
         {
          "maxWidth": 2245,
          "id": "Image_596DA0A1_4F57_272B_41C1_5D7F44F03A84",
          "maxHeight": 474,
          "shadow": false,
          "top": "0%",
          "minHeight": 1,
          "paddingLeft": 0,
          "click": "this.mainPlayList.set('selectedIndex', 1)",
          "horizontalAlign": "center",
          "borderRadius": 0,
          "paddingTop": 0,
          "minWidth": 1,
          "width": "100%",
          "verticalAlign": "middle",
          "borderSize": 0,
          "height": "100%",
          "class": "Image",
          "paddingRight": 0,
          "scaleMode": "fit_inside",
          "url": "skin/Image_596DA0A1_4F57_272B_41C1_5D7F44F03A84.png",
          "backgroundOpacity": 0,
          "left": "0%",
          "paddingBottom": 0
         }
        ],
        "overflow": "scroll",
        "paddingTop": 0,
        "minWidth": 100,
        "width": "98%",
        "verticalAlign": "top",
        "borderSize": 0,
        "class": "Container",
        "layout": "absolute",
        "height": "25%",
        "paddingRight": 0,
        "gap": 10,
        "backgroundOpacity": 0.3,
        "paddingBottom": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2
       },
       {
        "scrollBarWidth": 10,
        "backgroundColor": [
         "#000000",
         "#666666"
        ],
        "contentOpaque": false,
        "id": "Container_5AEF7944_4F6B_1969_41C6_6A82DE99FA46",
        "backgroundColorDirection": "vertical",
        "maxWidth": 1000,
        "shadow": false,
        "maxHeight": 1000,
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "minHeight": 100,
        "paddingLeft": 0,
        "horizontalAlign": "left",
        "borderRadius": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "children": [
         {
          "maxWidth": 2245,
          "id": "Image_5A974EDD_4F57_FB1B_4174_06D927CA67A6",
          "maxHeight": 474,
          "shadow": false,
          "top": "0%",
          "minHeight": 1,
          "paddingLeft": 0,
          "click": "this.mainPlayList.set('selectedIndex', 3)",
          "horizontalAlign": "center",
          "borderRadius": 0,
          "paddingTop": 0,
          "minWidth": 1,
          "width": "100%",
          "verticalAlign": "middle",
          "borderSize": 0,
          "height": "100%",
          "class": "Image",
          "paddingRight": 0,
          "scaleMode": "fit_inside",
          "url": "skin/Image_5A974EDD_4F57_FB1B_4174_06D927CA67A6.png",
          "backgroundOpacity": 0,
          "left": "0%",
          "paddingBottom": 0
         }
        ],
        "overflow": "scroll",
        "paddingTop": 0,
        "minWidth": 100,
        "width": "98%",
        "verticalAlign": "top",
        "borderSize": 0,
        "class": "Container",
        "layout": "absolute",
        "height": "25%",
        "paddingRight": 0,
        "gap": 10,
        "backgroundOpacity": 0.3,
        "paddingBottom": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2
       },
       {
        "scrollBarWidth": 10,
        "backgroundColor": [
         "#000000",
         "#666666"
        ],
        "contentOpaque": false,
        "id": "Container_5AAD437C_564E_990C_419E_DF422707301C",
        "backgroundColorDirection": "vertical",
        "maxWidth": 1000,
        "shadow": false,
        "maxHeight": 1000,
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "minHeight": 100,
        "paddingLeft": 0,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "children": [
         {
          "maxWidth": 2245,
          "id": "Image_5B6C493A_5652_A914_41C0_FFAC570F4DAA",
          "maxHeight": 474,
          "shadow": false,
          "paddingLeft": 0,
          "minHeight": 1,
          "click": "this.mainPlayList.set('selectedIndex', 10)",
          "horizontalAlign": "center",
          "borderRadius": 0,
          "paddingTop": 0,
          "minWidth": 1,
          "width": "98%",
          "verticalAlign": "middle",
          "borderSize": 0,
          "height": "100%",
          "class": "Image",
          "paddingRight": 0,
          "scaleMode": "fit_inside",
          "url": "skin/Image_5B6C493A_5652_A914_41C0_FFAC570F4DAA.png",
          "backgroundOpacity": 0,
          "paddingBottom": 0
         }
        ],
        "overflow": "scroll",
        "paddingTop": 0,
        "minWidth": 100,
        "width": "98%",
        "verticalAlign": "middle",
        "borderSize": 0,
        "class": "Container",
        "layout": "horizontal",
        "height": "25%",
        "paddingRight": 0,
        "gap": 10,
        "backgroundOpacity": 0.3,
        "paddingBottom": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2
       },
       {
        "scrollBarWidth": 10,
        "backgroundColor": [
         "#000000",
         "#666666"
        ],
        "contentOpaque": false,
        "id": "Container_5AB59E23_5655_AB3B_41C1_2356140C04A7",
        "backgroundColorDirection": "vertical",
        "maxWidth": 1000,
        "shadow": false,
        "maxHeight": 1000,
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "minHeight": 100,
        "paddingLeft": 0,
        "horizontalAlign": "left",
        "borderRadius": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "children": [
         {
          "maxWidth": 2245,
          "id": "Image_5BC38697_5653_FB1C_41AB_D4A891936178",
          "maxHeight": 474,
          "shadow": false,
          "top": "0%",
          "minHeight": 1,
          "paddingLeft": 0,
          "click": "this.mainPlayList.set('selectedIndex', 11)",
          "horizontalAlign": "center",
          "borderRadius": 0,
          "paddingTop": 0,
          "minWidth": 1,
          "width": "100%",
          "verticalAlign": "middle",
          "borderSize": 0,
          "height": "100%",
          "class": "Image",
          "paddingRight": 0,
          "scaleMode": "fit_inside",
          "url": "skin/Image_5BC38697_5653_FB1C_41AB_D4A891936178.png",
          "backgroundOpacity": 0,
          "left": "0%",
          "paddingBottom": 0
         }
        ],
        "overflow": "scroll",
        "paddingTop": 0,
        "minWidth": 100,
        "width": "98%",
        "verticalAlign": "top",
        "borderSize": 0,
        "class": "Container",
        "layout": "absolute",
        "height": "25%",
        "paddingRight": 0,
        "gap": 10,
        "backgroundOpacity": 0.3,
        "paddingBottom": 0,
        "scrollBarOpacity": 0.5,
        "scrollBarMargin": 2
       }
      ],
      "overflow": "scroll",
      "paddingTop": 50,
      "minWidth": 1,
      "width": "100%",
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "class": "Container",
      "layout": "vertical",
      "height": "87.415%",
      "paddingRight": 20,
      "gap": 20,
      "backgroundOpacity": 0,
      "paddingBottom": 50,
      "scrollBarMargin": 2
     }
    ],
    "scrollBarVisible": "rollOver",
    "overflow": "visible",
    "horizontalAlign": "left",
    "paddingTop": 0,
    "minWidth": 1,
    "verticalAlign": "top",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "class": "Container",
    "layout": "vertical",
    "paddingRight": 0,
    "gap": 0,
    "backgroundOpacity": 0.75,
    "left": "13.86%",
    "paddingBottom": 0,
    "scrollBarMargin": 2,
    "right": "28.23%"
   },
   {
    "scrollBarWidth": 10,
    "bottom": "2%",
    "contentOpaque": false,
    "id": "Container_619590BA_4005_05E7_41C3_8B4621024A56",
    "shadow": false,
    "paddingLeft": 0,
    "scrollBarColor": "#000000",
    "minHeight": 10,
    "horizontalAlign": "center",
    "borderRadius": 0,
    "children": [
     {
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "contentOpaque": false,
      "id": "Container_647D2A27_403F_04ED_41B8_62A899DFCCD0",
      "shadow": false,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "overflow": "visible",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "42.607%",
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "class": "Container",
      "layout": "horizontal",
      "height": "100%",
      "paddingRight": 0,
      "gap": 0,
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "scrollBarMargin": 2
     },
     {
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "contentOpaque": false,
      "id": "Container_64F00B6B_403F_1B64_41C6_2E5278BB284E",
      "shadow": false,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "overflow": "visible",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "46.498%",
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "class": "Container",
      "layout": "horizontal",
      "height": "100%",
      "paddingRight": 0,
      "gap": 0,
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "scrollBarMargin": 2
     }
    ],
    "scrollBarVisible": "rollOver",
    "overflow": "scroll",
    "paddingTop": 0,
    "minWidth": 10,
    "width": "13.207%",
    "verticalAlign": "middle",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "class": "Container",
    "layout": "horizontal",
    "height": "9.128%",
    "paddingRight": 0,
    "gap": 10,
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "scrollBarMargin": 2,
    "right": "5%"
   },
   {
    "scrollBarWidth": 10,
    "bottom": "5%",
    "contentOpaque": true,
    "id": "Container_552C139E_41F7_60A0_41C0_6D7884D47FA7",
    "shadow": false,
    "visible": false,
    "paddingLeft": 5,
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "horizontalAlign": "center",
    "borderRadius": 0,
    "children": [
     {
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "contentOpaque": true,
      "id": "Container_3B4D0B8C_51E2_9915_41CF_67764EFA9A3C",
      "shadow": false,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "children": [
       "this.IconButton_136600B2_305F_CBFA_41B8_B6C386FD826B"
      ],
      "overflow": "visible",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "25%",
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "class": "Container",
      "layout": "horizontal",
      "height": "100%",
      "paddingRight": 0,
      "gap": 10,
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "scrollBarMargin": 2
     },
     {
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "contentOpaque": true,
      "id": "Container_41E00F2C_5161_7B35_41C6_BC2399CBF863",
      "shadow": false,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "children": [
       {
        "transparencyActive": true,
        "toolTipBorderSize": 1,
        "toolTipPaddingTop": 4,
        "maxWidth": 70,
        "toolTipFontFamily": "Arial",
        "id": "IconButton_41096450_516F_2D6D_41C6_3B86CF181E54",
        "maxHeight": 100,
        "shadow": false,
        "toolTipFontStyle": "normal",
        "mode": "push",
        "toolTipBackgroundColor": "#F6F6F6",
        "toolTipFontSize": 12,
        "toolTipBorderRadius": 3,
        "toolTipShadowSpread": 0,
        "toolTipPaddingBottom": 4,
        "paddingLeft": 0,
        "toolTipPaddingLeft": 6,
        "toolTipPaddingRight": 6,
        "toolTipFontWeight": "normal",
        "minHeight": 50,
        "toolTipFontColor": "#606060",
        "toolTipShadowVerticalLength": 0,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "toolTipBorderColor": "#767676",
        "iconURL": "skin/IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.png",
        "click": "this.setMediaBehaviour(this.playList_7EF08442_5695_2F2C_41C5_DD3924CE0A38, 0); this.MainViewerVideoPlayer.play()",
        "cursor": "hand",
        "paddingTop": 0,
        "minWidth": 50,
        "width": "80%",
        "verticalAlign": "middle",
        "borderSize": 0,
        "height": "100%",
        "class": "IconButton",
        "toolTip": "Department Head Video",
        "toolTipTextShadowColor": "#000000",
        "paddingRight": 0,
        "toolTipShadowOpacity": 1,
        "toolTipShadowBlurRadius": 3,
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "toolTipShadowHorizontalLength": 0,
        "toolTipOpacity": 1,
        "toolTipShadowColor": "#333333",
        "toolTipTextShadowBlurRadius": 3,
        "toolTipTextShadowOpacity": 0
       }
      ],
      "overflow": "visible",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "25%",
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "class": "Container",
      "layout": "horizontal",
      "height": "100%",
      "paddingRight": 0,
      "gap": 0,
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "scrollBarMargin": 2
     },
     {
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "contentOpaque": true,
      "id": "Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8",
      "shadow": false,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "children": [
       {
        "transparencyActive": true,
        "toolTipBorderSize": 1,
        "toolTipPaddingTop": 4,
        "maxWidth": 70,
        "toolTipFontFamily": "Arial",
        "id": "IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E",
        "maxHeight": 100,
        "shadow": false,
        "toolTipFontStyle": "normal",
        "mode": "push",
        "toolTipBackgroundColor": "#F6F6F6",
        "toolTipFontSize": 12,
        "toolTipBorderRadius": 3,
        "toolTipShadowSpread": 0,
        "toolTipPaddingBottom": 4,
        "paddingLeft": 0,
        "toolTipPaddingLeft": 6,
        "toolTipPaddingRight": 6,
        "toolTipFontWeight": "normal",
        "minHeight": 50,
        "toolTipFontColor": "#606060",
        "toolTipShadowVerticalLength": 0,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "toolTipBorderColor": "#767676",
        "iconURL": "skin/IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.png",
        "click": "this.setMediaBehaviour(this.playList_7E8F1443_5695_2F2C_41D1_344E519571DE, 0); this.MainViewerVideoPlayer.play()",
        "cursor": "hand",
        "paddingTop": 0,
        "minWidth": 50,
        "width": "80%",
        "verticalAlign": "middle",
        "borderSize": 0,
        "height": "100%",
        "class": "IconButton",
        "toolTip": "Department Head Video",
        "toolTipTextShadowColor": "#000000",
        "paddingRight": 0,
        "toolTipShadowOpacity": 1,
        "toolTipShadowBlurRadius": 3,
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "toolTipShadowHorizontalLength": 0,
        "toolTipOpacity": 1,
        "toolTipShadowColor": "#333333",
        "toolTipTextShadowBlurRadius": 3,
        "toolTipTextShadowOpacity": 0
       }
      ],
      "overflow": "visible",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "25%",
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "class": "Container",
      "layout": "horizontal",
      "height": "100%",
      "paddingRight": 0,
      "gap": 0,
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "scrollBarMargin": 2
     },
     {
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "contentOpaque": true,
      "id": "Container_395C4B78_51E3_79FD_4190_8DD908FD8F27",
      "shadow": false,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "children": [
       {
        "transparencyActive": true,
        "toolTipBorderSize": 1,
        "toolTipPaddingTop": 4,
        "maxWidth": 70,
        "toolTipFontFamily": "Arial",
        "id": "IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3",
        "maxHeight": 100,
        "shadow": false,
        "toolTipFontStyle": "normal",
        "mode": "push",
        "toolTipBackgroundColor": "#F6F6F6",
        "toolTipFontSize": 12,
        "toolTipBorderRadius": 3,
        "toolTipShadowSpread": 0,
        "toolTipPaddingBottom": 4,
        "paddingLeft": 0,
        "toolTipPaddingLeft": 6,
        "toolTipPaddingRight": 6,
        "toolTipFontWeight": "normal",
        "minHeight": 50,
        "toolTipFontColor": "#606060",
        "toolTipShadowVerticalLength": 0,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "toolTipBorderColor": "#767676",
        "iconURL": "skin/IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.png",
        "click": "this.setMediaBehaviour(this.playList_7E8FC444_5695_2F34_41BA_521C098B3139, 0); this.MainViewerVideoPlayer.play()",
        "cursor": "hand",
        "paddingTop": 0,
        "minWidth": 50,
        "width": "80%",
        "verticalAlign": "middle",
        "borderSize": 0,
        "height": "100%",
        "class": "IconButton",
        "toolTip": "Department Head Video",
        "toolTipTextShadowColor": "#000000",
        "paddingRight": 0,
        "toolTipShadowOpacity": 1,
        "toolTipShadowBlurRadius": 3,
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "toolTipShadowHorizontalLength": 0,
        "toolTipOpacity": 1,
        "toolTipShadowColor": "#333333",
        "toolTipTextShadowBlurRadius": 3,
        "toolTipTextShadowOpacity": 0
       }
      ],
      "overflow": "visible",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "25%",
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "class": "Container",
      "layout": "horizontal",
      "height": "100%",
      "paddingRight": 0,
      "gap": 0,
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "scrollBarMargin": 2
     },
     {
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "contentOpaque": true,
      "id": "Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9",
      "shadow": false,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "children": [
       {
        "transparencyActive": true,
        "toolTipBorderSize": 1,
        "toolTipPaddingTop": 4,
        "maxWidth": 70,
        "toolTipFontFamily": "Arial",
        "id": "IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8",
        "maxHeight": 100,
        "shadow": false,
        "toolTipFontStyle": "normal",
        "mode": "push",
        "toolTipBackgroundColor": "#F6F6F6",
        "toolTipFontSize": 12,
        "toolTipBorderRadius": 3,
        "toolTipShadowSpread": 0,
        "toolTipPaddingBottom": 4,
        "paddingLeft": 0,
        "toolTipPaddingLeft": 6,
        "toolTipPaddingRight": 6,
        "toolTipFontWeight": "normal",
        "minHeight": 50,
        "toolTipFontColor": "#606060",
        "toolTipShadowVerticalLength": 0,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "toolTipBorderColor": "#767676",
        "iconURL": "skin/IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.png",
        "click": "this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_5DF89728_4233_E1E0_41BE_006FEAB9CB13, 'showEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_5DF89728_4233_E1E0_41BE_006FEAB9CB13, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_5DF89728_4233_E1E0_41BE_006FEAB9CB13, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_5DF89728_4233_E1E0_41BE_006FEAB9CB13, 'showEffect', false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, this.effect_5DF89728_4233_E1E0_41BE_006FEAB9CB13, 'showEffect', false); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, 0, this.effect_6CABAB38_5657_6914_4191_06C77603C80F, 'hideEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, 0, this.effect_6CABAB38_5657_6914_4191_06C77603C80F, 'hideEffect', false)",
        "cursor": "hand",
        "paddingTop": 0,
        "minWidth": 50,
        "width": "80%",
        "verticalAlign": "middle",
        "borderSize": 0,
        "class": "IconButton",
        "toolTip": "Show labs list",
        "height": "100%",
        "toolTipTextShadowColor": "#000000",
        "paddingRight": 0,
        "toolTipShadowOpacity": 1,
        "toolTipShadowBlurRadius": 3,
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "toolTipShadowHorizontalLength": 0,
        "toolTipOpacity": 1,
        "toolTipShadowColor": "#333333",
        "toolTipTextShadowBlurRadius": 3,
        "toolTipTextShadowOpacity": 0
       }
      ],
      "overflow": "visible",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "25%",
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "class": "Container",
      "layout": "horizontal",
      "height": "100%",
      "paddingRight": 0,
      "gap": 0,
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "scrollBarMargin": 2
     },
     {
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "contentOpaque": true,
      "id": "Container_6E17E57D_4213_6060_41A1_9148D02E3604",
      "shadow": false,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "children": [
       {
        "transparencyActive": true,
        "toolTipBorderSize": 1,
        "toolTipPaddingTop": 4,
        "maxWidth": 70,
        "toolTipFontFamily": "Arial",
        "id": "IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356",
        "maxHeight": 100,
        "shadow": false,
        "toolTipFontStyle": "normal",
        "mode": "toggle",
        "toolTipBackgroundColor": "#F6F6F6",
        "toolTipFontSize": 12,
        "toolTipBorderRadius": 3,
        "toolTipShadowSpread": 0,
        "toolTipPaddingBottom": 4,
        "paddingLeft": 0,
        "toolTipPaddingLeft": 6,
        "toolTipPaddingRight": 6,
        "toolTipFontWeight": "normal",
        "minHeight": 50,
        "toolTipFontColor": "#606060",
        "toolTipShadowVerticalLength": 0,
        "horizontalAlign": "center",
        "borderRadius": 0,
        "toolTipBorderColor": "#767676",
        "iconURL": "skin/IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356.png",
        "cursor": "hand",
        "paddingTop": 0,
        "minWidth": 50,
        "width": "80%",
        "verticalAlign": "middle",
        "borderSize": 0,
        "class": "IconButton",
        "toolTip": "Mute",
        "pressedIconURL": "skin/IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356_pressed.png",
        "toolTipTextShadowColor": "#000000",
        "paddingRight": 0,
        "toolTipShadowOpacity": 1,
        "height": "100%",
        "toolTipShadowBlurRadius": 3,
        "backgroundOpacity": 0,
        "paddingBottom": 0,
        "toolTipShadowHorizontalLength": 0,
        "toolTipOpacity": 1,
        "toolTipShadowColor": "#333333",
        "toolTipTextShadowBlurRadius": 3,
        "toolTipTextShadowOpacity": 0
       }
      ],
      "overflow": "visible",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "25%",
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "class": "Container",
      "layout": "horizontal",
      "height": "100%",
      "paddingRight": 0,
      "gap": 0,
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "scrollBarMargin": 2
     }
    ],
    "scrollBarVisible": "rollOver",
    "overflow": "visible",
    "paddingTop": 2,
    "minWidth": 1,
    "width": "50%",
    "verticalAlign": "middle",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "class": "Container",
    "layout": "horizontal",
    "height": "10%",
    "paddingRight": 5,
    "gap": 10,
    "backgroundOpacity": 0,
    "paddingBottom": 2,
    "scrollBarMargin": 2,
    "right": "5%"
   },
   {
    "scrollBarWidth": 10,
    "maxWidth": 500,
    "contentOpaque": false,
    "id": "Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5",
    "maxHeight": 180,
    "shadow": false,
    "top": "1%",
    "paddingLeft": 0,
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "horizontalAlign": "center",
    "borderRadius": 0,
    "children": [
     {
      "bottom": "0%",
      "maxWidth": 700,
      "id": "Image_7615E83C_29EC_D15C_41B6_53D6B9448359",
      "maxHeight": 600,
      "shadow": false,
      "visible": false,
      "top": "0%",
      "paddingLeft": 0,
      "minHeight": 30,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "paddingTop": 0,
      "minWidth": 50,
      "verticalAlign": "middle",
      "borderSize": 0,
      "class": "Image",
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_7615E83C_29EC_D15C_41B6_53D6B9448359.jpg",
      "backgroundOpacity": 0,
      "left": "0%",
      "paddingBottom": 0,
      "right": "0%"
     },
     {
      "bottom": "0%",
      "maxWidth": 700,
      "id": "Image_4A371192_29EB_D325_41B4_06FF095FB8E1",
      "maxHeight": 600,
      "shadow": false,
      "visible": false,
      "top": "0%",
      "paddingLeft": 0,
      "minHeight": 30,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "paddingTop": 0,
      "minWidth": 50,
      "verticalAlign": "middle",
      "borderSize": 0,
      "class": "Image",
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_4A371192_29EB_D325_41B4_06FF095FB8E1.jpg",
      "backgroundOpacity": 0,
      "left": "0%",
      "paddingBottom": 0,
      "right": "0%"
     },
     {
      "bottom": "0%",
      "maxWidth": 1705,
      "id": "Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235",
      "maxHeight": 600,
      "shadow": false,
      "visible": false,
      "top": "0%",
      "paddingLeft": 0,
      "minHeight": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "class": "Image",
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.jpg",
      "backgroundOpacity": 0,
      "left": "0%",
      "paddingBottom": 0,
      "right": "0%"
     },
     {
      "bottom": "0%",
      "maxWidth": 1705,
      "id": "Image_74AA3858_29EC_5124_41B6_A1E86580D355",
      "maxHeight": 600,
      "shadow": false,
      "visible": false,
      "top": "0%",
      "paddingLeft": 0,
      "minHeight": 1,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "class": "Image",
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_74AA3858_29EC_5124_41B6_A1E86580D355.jpg",
      "backgroundOpacity": 0,
      "left": "0%",
      "paddingBottom": 0,
      "right": "0%"
     }
    ],
    "scrollBarVisible": "rollOver",
    "overflow": "scroll",
    "paddingTop": 0,
    "minWidth": 1,
    "width": "100%",
    "verticalAlign": "middle",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "class": "Container",
    "layout": "absolute",
    "height": "100%",
    "paddingRight": 0,
    "gap": 0,
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "scrollBarMargin": 2,
    "right": "1%"
   }
  ],
  "scrollBarVisible": "rollOver",
  "overflow": "scroll",
  "paddingTop": 0,
  "minWidth": 500,
  "width": "82.948%",
  "verticalAlign": "middle",
  "borderSize": 0,
  "scrollBarOpacity": 0,
  "class": "Container",
  "layout": "absolute",
  "height": "99.918%",
  "paddingRight": 0,
  "gap": 10,
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "scrollBarMargin": 2,
  "right": "0%"
 },
 {
  "scrollBarWidth": 10,
  "bottom": "3%",
  "contentOpaque": false,
  "id": "Container_77D4607B_4271_6060_41A3_CF43634A36B0",
  "shadow": false,
  "visible": false,
  "scrollBarVisible": "rollOver",
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "borderRadius": 0,
  "children": [
   {
    "toolTipBorderSize": 1,
    "toolTipPaddingTop": 4,
    "maxWidth": 850,
    "toolTipFontFamily": "Arial",
    "id": "Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE",
    "maxHeight": 850,
    "shadow": false,
    "toolTipFontStyle": "normal",
    "toolTipBackgroundColor": "#FFFFFF",
    "toolTipFontSize": 12,
    "toolTipBorderRadius": 3,
    "horizontalAlign": "center",
    "toolTipShadowSpread": 0,
    "toolTipPaddingBottom": 4,
    "paddingLeft": 0,
    "toolTipPaddingRight": 6,
    "toolTipFontWeight": "normal",
    "minHeight": 1,
    "toolTipFontColor": "#606060",
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingLeft": 6,
    "borderRadius": 0,
    "toolTipBorderColor": "#767676",
    "click": "this.mainPlayList.set('selectedIndex', 0)",
    "paddingTop": 0,
    "minWidth": 1,
    "width": "63.469%",
    "verticalAlign": "middle",
    "borderSize": 0,
    "height": "83%",
    "class": "Image",
    "toolTip": "Home",
    "toolTipTextShadowColor": "#000000",
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "url": "skin/Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.png",
    "toolTipShadowOpacity": 1,
    "toolTipShadowBlurRadius": 3,
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "toolTipShadowHorizontalLength": 0,
    "toolTipOpacity": 1,
    "toolTipShadowColor": "#333333",
    "toolTipTextShadowBlurRadius": 3,
    "toolTipTextShadowOpacity": 0
   }
  ],
  "overflow": "visible",
  "paddingTop": 0,
  "minWidth": 1,
  "width": "11.834%",
  "verticalAlign": "middle",
  "borderSize": 0,
  "scrollBarOpacity": 0.5,
  "class": "Container",
  "layout": "horizontal",
  "height": "16.434%",
  "paddingRight": 0,
  "gap": 10,
  "backgroundOpacity": 0,
  "left": "3%",
  "paddingBottom": 0,
  "scrollBarMargin": 2
 },
 {
  "bottom": 0,
  "backgroundColor": [
   "#000000"
  ],
  "id": "veilPopupPanorama",
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "visible": false,
  "top": 0,
  "minHeight": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "backgroundColorRatios": [
   0
  ],
  "paddingTop": 0,
  "minWidth": 0,
  "borderSize": 0,
  "class": "UIComponent",
  "paddingRight": 0,
  "backgroundOpacity": 0.55,
  "left": 0,
  "paddingBottom": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 350
  },
  "right": 0
 },
 {
  "bottom": 0,
  "backgroundColor": [],
  "id": "zoomImagePopupPanorama",
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "visible": false,
  "top": 0,
  "minHeight": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "backgroundColorRatios": [],
  "paddingTop": 0,
  "minWidth": 0,
  "borderSize": 0,
  "class": "ZoomImage",
  "paddingRight": 0,
  "scaleMode": "custom",
  "backgroundOpacity": 1,
  "left": 0,
  "paddingBottom": 0,
  "right": 0
 },
 {
  "pressedIconColor": "#888888",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "iconColor": "#000000",
  "id": "closeButtonPopupPanorama",
  "backgroundColorDirection": "vertical",
  "shadowSpread": 1,
  "shadow": false,
  "mode": "push",
  "fontColor": "#FFFFFF",
  "visible": false,
  "textDecoration": "none",
  "top": 10,
  "iconHeight": 20,
  "rollOverIconColor": "#666666",
  "minHeight": 0,
  "paddingLeft": 5,
  "fontFamily": "Arial",
  "horizontalAlign": "center",
  "borderRadius": 0,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "fontWeight": "normal",
  "cursor": "hand",
  "paddingTop": 5,
  "minWidth": 0,
  "borderColor": "#000000",
  "verticalAlign": "middle",
  "borderSize": 0,
  "class": "CloseButton",
  "fontSize": 12,
  "iconBeforeLabel": true,
  "paddingRight": 5,
  "layout": "horizontal",
  "fontStyle": "normal",
  "iconLineWidth": 5,
  "shadowColor": "#000000",
  "backgroundOpacity": 0.3,
  "paddingBottom": 5,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 350
  },
  "shadowBlurRadius": 6,
  "iconWidth": 20,
  "label": "",
  "gap": 5,
  "right": 10
 }
], 
 "start": "this.playAudioList([this.audio_3DA9E88E_2B19_A500_41C0_6174A05A143F]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_136600B2_305F_CBFA_41B8_B6C386FD826B], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "id": "rootPlayer",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 0.5,
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "paddingLeft": 0,
 "backgroundPreloadEnabled": true,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "overflow": "visible",
 "paddingTop": 0,
 "minWidth": 20,
 "width": "100%",
 "verticalAlign": "top",
 "borderSize": 0,
 "class": "Player",
 "layout": "absolute",
 "height": "100%",
 "paddingRight": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "buttonToggleMute": "this.IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356",
 "mouseWheelEnabled": false,
 "scripts": {
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getKey": function(key){  return window[key]; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "registerKey": function(key, value){  window[key] = value; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; }
 }
})