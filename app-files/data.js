var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala-centro",
      "name": "sala-centro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.7980954917759693,
        "pitch": 0.09316121762427443,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.5798337687516444,
          "pitch": 0.20292533967513293,
          "rotation": 0,
          "target": "4-sala-scifi"
        },
        {
          "yaw": -3.0671075569581845,
          "pitch": 0.28067715787052094,
          "rotation": 0,
          "target": "3-sala-sala"
        },
        {
          "yaw": -1.4911445485712047,
          "pitch": 0.24353958322197045,
          "rotation": 0,
          "target": "1-sala-bath"
        },
        {
          "yaw": 0.028270185599035713,
          "pitch": 0.2361772405497291,
          "rotation": 0,
          "target": "2-sala-ruin"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9703797978679667,
          "pitch": -1.1524723953946499,
          "title": "Hazme click",
          "text": "Los renders están en baja resolución porque este es un simple ejemplo de recorrido virtual. Se recomienda que las imágenes en proyectos reales tengan una dimensión de 6000x3000 px"
        }
      ]
    },
    {
      "id": "1-sala-bath",
      "name": "sala-bath",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -0.7284252184589572,
        "pitch": 0.10652639405467035,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -3.127554113939727,
          "pitch": 0.2253825282283728,
          "rotation": 0,
          "target": "0-sala-centro"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6135382180084434,
          "pitch": -0.29312383818564847,
          "title": "Hazme click",
          "text": "Esto es un texto informativo. Ahora no dice nada relevante, pero en un proyecto real se puede poner información de diferentes cosas."
        }
      ]
    },
    {
      "id": "2-sala-ruin",
      "name": "sala-ruin",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -0.7884681641766953,
        "pitch": 0.18853598359014967,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.9858845448275737,
          "pitch": 0.19325590087955824,
          "rotation": 0,
          "target": "0-sala-centro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-sala-sala",
      "name": "sala-sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 0.055033428817374386,
        "pitch": 0.22331575908104284,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.1687342775996648,
          "pitch": 0.3084386032388906,
          "rotation": 0,
          "target": "0-sala-centro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-sala-scifi",
      "name": "sala-scifi",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -0.6189265593336906,
        "pitch": 0.018403233624574966,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.9953361679473645,
          "pitch": 0.1554752931263046,
          "rotation": 0,
          "target": "0-sala-centro"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
