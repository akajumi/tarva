report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_Test_project_0_document_0_phone.png",
        "test": "..\\bitmaps_test\\20180324-203127\\backstop_default_Test_project_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_Test_project_0_document_0_phone.png",
        "label": "Test project",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "file:///C:/TRABAJO/tarva/myCoolProject/index.html",
        "referenceUrl": "",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.02",
          "analysisTime": 80
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_Test_project_0_document_1_tablet.png",
        "test": "..\\bitmaps_test\\20180324-203127\\backstop_default_Test_project_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Test_project_0_document_1_tablet.png",
        "label": "Test project",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "file:///C:/TRABAJO/tarva/myCoolProject/index.html",
        "referenceUrl": "",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -25
          },
          "misMatchPercentage": "13.70",
          "analysisTime": 149
        },
        "diffImage": "..\\bitmaps_test\\20180324-203127\\failed_diff_backstop_default_Test_project_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_Test_project_0_document_2_desktop.png",
        "test": "..\\bitmaps_test\\20180324-203127\\backstop_default_Test_project_0_document_2_desktop.png",
        "selector": "document",
        "fileName": "backstop_default_Test_project_0_document_2_desktop.png",
        "label": "Test project",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "file:///C:/TRABAJO/tarva/myCoolProject/index.html",
        "referenceUrl": "",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -25
          },
          "misMatchPercentage": "12.53",
          "analysisTime": 150
        },
        "diffImage": "..\\bitmaps_test\\20180324-203127\\failed_diff_backstop_default_Test_project_0_document_2_desktop.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});