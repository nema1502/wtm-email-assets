// Generado por sesion-04/web/flujos.py — no editar a mano.
// El JSON va embebido para que el botón de copiar funcione
// aunque no haya internet.
const FLUJOS = [
  {
    "nombre": "Que la cajita diga tu nombre",
    "que": "El ejercicio de la expresión, ya resuelto. Abrilo y mirá el campo saludo: está en modo Expression.",
    "cuando": "Si te trabaste en la práctica 1",
    "cajitas": 3,
    "archivo": "actividad-01-tu-nombre.json",
    "url": "https://cdn.jsdelivr.net/gh/nema1502/wtm-email-assets@v32/flujos/actividad-01-tu-nombre.json",
    "json": {
      "name": "WTM SC · Actividad 1 — Que la segunda cajita diga tu nombre",
      "nodes": [
        {
          "parameters": {},
          "id": "8dc3cce0-c062-50a7-a64e-02b58867f7f1",
          "name": "▶ Ejecutar",
          "type": "n8n-nodes-base.manualTrigger",
          "typeVersion": 1,
          "position": [
            -260,
            300
          ]
        },
        {
          "parameters": {
            "assignments": {
              "assignments": [
                {
                  "id": "87a6c77c-115f-5c93-b2e0-b4c326ed5d2b",
                  "name": "nombre",
                  "type": "string",
                  "value": "Noelia"
                }
              ]
            },
            "includeOtherFields": false,
            "options": {}
          },
          "id": "1c906309-d7ff-53c9-876f-973bcb374719",
          "name": "1 · Tu nombre",
          "type": "n8n-nodes-base.set",
          "typeVersion": 3.4,
          "position": [
            -40,
            300
          ]
        },
        {
          "parameters": {
            "assignments": {
              "assignments": [
                {
                  "id": "c0b2957d-c5eb-51dc-8ac4-53602070b3b9",
                  "name": "saludo",
                  "type": "string",
                  "value": "=Hola {{ $json.nombre }}, tu flujo te conoce"
                }
              ]
            },
            "includeOtherFields": true,
            "options": {}
          },
          "id": "f0986e34-613d-54d6-b356-d2fef05cdd90",
          "name": "2 · El saludo",
          "type": "n8n-nodes-base.set",
          "typeVersion": 3.4,
          "position": [
            180,
            300
          ]
        },
        {
          "parameters": {
            "content": "## Lo que hay que mirar\n\nAbrí «2 · El saludo» y fijate en el campo *saludo*:\nestá en modo **Expression**, no en Fixed.\n\nAbajo del campo, n8n muestra el resultado ya resuelto.\nEse es el momento que hay que ver.",
            "height": 250,
            "width": 330,
            "color": 5
          },
          "id": "b52c3ef8-3ad1-5bc1-a591-9dbd650a0803",
          "name": "Nota Lo que hay que mirar",
          "type": "n8n-nodes-base.stickyNote",
          "typeVersion": 1,
          "position": [
            -300,
            -20
          ]
        },
        {
          "parameters": {
            "content": "## Para desarmar en vivo\n\n1. Cambiá el nombre en la cajita 1 y ejecutá otra vez.\n2. Poné el campo *saludo* en **Fixed** y ejecutá:\n   van a ver las llaves tal cual. Ese es el error\n   número uno de la lámina 10.\n3. Escribí mal el nombre del dato (nombree) y\n   ejecutá: sale **undefined**. Error número dos.",
            "height": 250,
            "width": 360,
            "color": 4
          },
          "id": "455abce4-1ae2-5154-a50f-c6873330a3d1",
          "name": "Nota Para desarmar en vivo",
          "type": "n8n-nodes-base.stickyNote",
          "typeVersion": 1,
          "position": [
            60,
            -20
          ]
        }
      ],
      "connections": {
        "▶ Ejecutar": {
          "main": [
            [
              {
                "node": "1 · Tu nombre",
                "type": "main",
                "index": 0
              }
            ]
          ]
        },
        "1 · Tu nombre": {
          "main": [
            [
              {
                "node": "2 · El saludo",
                "type": "main",
                "index": 0
              }
            ]
          ]
        }
      },
      "settings": {
        "executionOrder": "v1"
      },
      "pinData": {},
      "meta": {
        "instanceId": "wtm-santa-cruz"
      },
      "tags": []
    }
  },
  {
    "nombre": "El clima de Santa Cruz",
    "que": "Un HTTP Request andando, con la frase armada. No pide cuenta ni clave: se ejecuta y listo.",
    "cuando": "Si te trabaste en la práctica 2",
    "cajitas": 4,
    "archivo": "actividad-02-el-clima.json",
    "url": "https://cdn.jsdelivr.net/gh/nema1502/wtm-email-assets@v32/flujos/actividad-02-el-clima.json",
    "json": {
      "name": "WTM SC · Actividad 2 — El clima de Santa Cruz, ahora mismo",
      "nodes": [
        {
          "parameters": {},
          "id": "b63e0997-f9ef-5de4-9139-f5f491a967bd",
          "name": "▶ Ejecutar",
          "type": "n8n-nodes-base.manualTrigger",
          "typeVersion": 1,
          "position": [
            -360,
            300
          ]
        },
        {
          "parameters": {
            "assignments": {
              "assignments": [
                {
                  "id": "cc87a22d-b00f-5b6e-a27e-29a1f0ca8cac",
                  "name": "tuNombre",
                  "type": "string",
                  "value": "Noelia"
                }
              ]
            },
            "includeOtherFields": false,
            "options": {}
          },
          "id": "e815aa33-ff6d-580a-af08-1ecb60fc396f",
          "name": "1 · Tu nombre",
          "type": "n8n-nodes-base.set",
          "typeVersion": 3.4,
          "position": [
            -150,
            300
          ]
        },
        {
          "parameters": {
            "url": "https://api.open-meteo.com/v1/forecast?latitude=-17.7833&longitude=-63.1821&current=temperature_2m,relative_humidity_2m&timezone=America%2FLa_Paz",
            "options": {}
          },
          "id": "2f5b44bf-fe93-596c-a568-6210d80e27c8",
          "name": "2 · Traer el clima",
          "type": "n8n-nodes-base.httpRequest",
          "typeVersion": 4.2,
          "position": [
            60,
            300
          ]
        },
        {
          "parameters": {
            "assignments": {
              "assignments": [
                {
                  "id": "7642489c-37f8-556c-8ea3-e7a908b061eb",
                  "name": "frase",
                  "type": "string",
                  "value": "=Hola {{ $('1 · Tu nombre').item.json.tuNombre }}, en Santa Cruz hay {{ $json.current.temperature_2m }} grados y {{ $json.current.relative_humidity_2m }}% de humedad."
                },
                {
                  "id": "0172dd80-73fc-5000-aac4-dd769349f890",
                  "name": "medido",
                  "type": "string",
                  "value": "={{ $json.current.time }}"
                }
              ]
            },
            "includeOtherFields": true,
            "options": {}
          },
          "id": "a190a833-ad85-52fa-b88a-c08a848fa9cf",
          "name": "3 · Armar la frase",
          "type": "n8n-nodes-base.set",
          "typeVersion": 3.4,
          "position": [
            270,
            300
          ]
        },
        {
          "parameters": {
            "content": "## Anda sin cuenta ni clave\n\nOpen-Meteo es gratis y abierta. Se ejecuta y\nlisto: no hay nada que configurar.\n\nLas coordenadas son las de Santa Cruz. Cambialas\ny te da el clima de donde quieras.",
            "height": 250,
            "width": 330,
            "color": 4
          },
          "id": "c0f729d5-20c2-5f59-bb35-d70313a4cc02",
          "name": "Nota Anda sin cuenta ni clave",
          "type": "n8n-nodes-base.stickyNote",
          "typeVersion": 1,
          "position": [
            -400,
            -30
          ]
        },
        {
          "parameters": {
            "content": "## El salto de la clase\n\nMirá la cajita 3: para agarrar el nombre usa\n`$('1 · Tu nombre').item.json.tuNombre`.\n\nEso es pedirle un dato a una cajita ANTERIOR,\nno a la que le acaba de llegar. Es el paso\nsiguiente, y con esto ya lo tienen a la vista.",
            "height": 250,
            "width": 370,
            "color": 5
          },
          "id": "70928323-5386-55cc-b0d3-7f87a1ff0916",
          "name": "Nota El salto de la clase",
          "type": "n8n-nodes-base.stickyNote",
          "typeVersion": 1,
          "position": [
            -20,
            -30
          ]
        }
      ],
      "connections": {
        "▶ Ejecutar": {
          "main": [
            [
              {
                "node": "1 · Tu nombre",
                "type": "main",
                "index": 0
              }
            ]
          ]
        },
        "1 · Tu nombre": {
          "main": [
            [
              {
                "node": "2 · Traer el clima",
                "type": "main",
                "index": 0
              }
            ]
          ]
        },
        "2 · Traer el clima": {
          "main": [
            [
              {
                "node": "3 · Armar la frase",
                "type": "main",
                "index": 0
              }
            ]
          ]
        }
      },
      "settings": {
        "executionOrder": "v1"
      },
      "pinData": {},
      "meta": {
        "instanceId": "wtm-santa-cruz"
      },
      "tags": []
    }
  },
  {
    "nombre": "Dos APIs en una sola frase",
    "que": "El clima y el dólar juntos. El mismo salto que ya diste, con dos cajitas más.",
    "cuando": "Si terminaste antes y querés más",
    "cajitas": 4,
    "archivo": "actividad-05-dos-apis.json",
    "url": "https://cdn.jsdelivr.net/gh/nema1502/wtm-email-assets@v32/flujos/actividad-05-dos-apis.json",
    "json": {
      "name": "WTM SC · Actividad 5 — Dos APIs en una sola frase",
      "nodes": [
        {
          "parameters": {},
          "id": "8dc3cce0-c062-50a7-a64e-02b58867f7f1",
          "name": "▶ Ejecutar",
          "type": "n8n-nodes-base.manualTrigger",
          "typeVersion": 1,
          "position": [
            -360,
            300
          ]
        },
        {
          "parameters": {
            "url": "https://api.open-meteo.com/v1/forecast?latitude=-17.7833&longitude=-63.1821&current=temperature_2m,relative_humidity_2m&timezone=America%2FLa_Paz",
            "options": {}
          },
          "id": "87a6c77c-115f-5c93-b2e0-b4c326ed5d2b",
          "name": "1 · Traer el clima",
          "type": "n8n-nodes-base.httpRequest",
          "typeVersion": 4.2,
          "position": [
            -150,
            300
          ]
        },
        {
          "parameters": {
            "url": "https://open.er-api.com/v6/latest/USD",
            "options": {}
          },
          "id": "1c906309-d7ff-53c9-876f-973bcb374719",
          "name": "2 · Traer el dólar",
          "type": "n8n-nodes-base.httpRequest",
          "typeVersion": 4.2,
          "position": [
            60,
            300
          ]
        },
        {
          "parameters": {
            "assignments": {
              "assignments": [
                {
                  "id": "c0b2957d-c5eb-51dc-8ac4-53602070b3b9",
                  "name": "frase",
                  "type": "string",
                  "value": "=Hoy en Santa Cruz hay {{ $('1 · Traer el clima').item.json.current.temperature_2m }} grados y el dólar está a {{ $json.rates.BOB }} bolivianos."
                }
              ]
            },
            "includeOtherFields": false,
            "options": {}
          },
          "id": "f0986e34-613d-54d6-b356-d2fef05cdd90",
          "name": "3 · Juntar las dos",
          "type": "n8n-nodes-base.set",
          "typeVersion": 3.4,
          "position": [
            270,
            300
          ]
        },
        {
          "parameters": {
            "content": "## Para quien terminó antes\n\nDos HTTP Request, uno detrás del otro.\n\nLa segunda cajita PISA la bandeja de la primera.\nPor eso el clima se agarra con\n`$('1 · Traer el clima')` y el dólar con `$json`,\nque es la bandeja que acaba de llegar.\n\nEse es el truco entero.",
            "height": 270,
            "width": 380,
            "color": 5
          },
          "id": "b52c3ef8-3ad1-5bc1-a591-9dbd650a0803",
          "name": "Nota Para quien terminó antes",
          "type": "n8n-nodes-base.stickyNote",
          "typeVersion": 1,
          "position": [
            -400,
            -40
          ]
        },
        {
          "parameters": {
            "content": "## Y si querés más\n\nCambiá USD por EUR en la dirección del dólar\ny mirá qué pasa.\n\nDespués agregá una tercera cajita con la API\nque elegiste para tu reto, y metela en la\nmisma frase.",
            "height": 270,
            "width": 330,
            "color": 4
          },
          "id": "455abce4-1ae2-5154-a50f-c6873330a3d1",
          "name": "Nota Y si querés más",
          "type": "n8n-nodes-base.stickyNote",
          "typeVersion": 1,
          "position": [
            10,
            -40
          ]
        }
      ],
      "connections": {
        "▶ Ejecutar": {
          "main": [
            [
              {
                "node": "1 · Traer el clima",
                "type": "main",
                "index": 0
              }
            ]
          ]
        },
        "1 · Traer el clima": {
          "main": [
            [
              {
                "node": "2 · Traer el dólar",
                "type": "main",
                "index": 0
              }
            ]
          ]
        },
        "2 · Traer el dólar": {
          "main": [
            [
              {
                "node": "3 · Juntar las dos",
                "type": "main",
                "index": 0
              }
            ]
          ]
        }
      },
      "settings": {
        "executionOrder": "v1"
      },
      "pinData": {},
      "meta": {
        "instanceId": "wtm-santa-cruz"
      },
      "tags": []
    }
  },
  {
    "nombre": "Este flujo está roto: arreglalo",
    "que": "Tres errores plantados a propósito, uno de cada tipo. Trae las pistas, y la respuesta aparte.",
    "cuando": "Si querés practicar de verdad",
    "cajitas": 4,
    "archivo": "actividad-06-roto.json",
    "url": "https://cdn.jsdelivr.net/gh/nema1502/wtm-email-assets@v32/flujos/actividad-06-roto.json",
    "json": {
      "name": "WTM SC · Actividad 6 — Este flujo está roto: arreglalo",
      "nodes": [
        {
          "parameters": {},
          "id": "b63e0997-f9ef-5de4-9139-f5f491a967bd",
          "name": "▶ Ejecutar",
          "type": "n8n-nodes-base.manualTrigger",
          "typeVersion": 1,
          "position": [
            -360,
            300
          ]
        },
        {
          "parameters": {
            "assignments": {
              "assignments": [
                {
                  "id": "cc87a22d-b00f-5b6e-a27e-29a1f0ca8cac",
                  "name": "tuNombre",
                  "type": "string",
                  "value": "Noelia"
                }
              ]
            },
            "includeOtherFields": false,
            "options": {}
          },
          "id": "e815aa33-ff6d-580a-af08-1ecb60fc396f",
          "name": "1 · Tu nombre",
          "type": "n8n-nodes-base.set",
          "typeVersion": 3.4,
          "position": [
            -150,
            300
          ]
        },
        {
          "parameters": {
            "url": "https://api.open-meteo.com/v1/forecas?latitude=-17.7833&longitude=-63.1821&current=temperature_2m,relative_humidity_2m&timezone=America%2FLa_Paz",
            "options": {}
          },
          "id": "2f5b44bf-fe93-596c-a568-6210d80e27c8",
          "name": "2 · Traer el clima",
          "type": "n8n-nodes-base.httpRequest",
          "typeVersion": 4.2,
          "position": [
            60,
            300
          ]
        },
        {
          "parameters": {
            "assignments": {
              "assignments": [
                {
                  "id": "7642489c-37f8-556c-8ea3-e7a908b061eb",
                  "name": "frase",
                  "type": "string",
                  "value": "Hola {{ $json.tuNombre }}, hay {{ $json.current.temperatura }} grados."
                }
              ]
            },
            "includeOtherFields": true,
            "options": {}
          },
          "id": "0172dd80-73fc-5000-aac4-dd769349f890",
          "name": "3 · Armar la frase",
          "type": "n8n-nodes-base.set",
          "typeVersion": 3.4,
          "position": [
            270,
            300
          ]
        },
        {
          "parameters": {
            "content": "## Hay TRES errores. Encontralos\n\nEjecutá el flujo y mirá qué sale mal.\nLos tres están en la lámina 10.\n\nOJO: no aparecen los tres juntos. Arreglás\nuno y recién ahí se ve el siguiente. Así es\ncomo se arregla software de verdad.\n\nPista 1: la cajita del clima se pone roja.\nPista 2: después van a salir las llaves.\nPista 3: y al final, un undefined.\n\nNo mires la respuesta hasta intentarlo.",
            "height": 330,
            "width": 380,
            "color": 2
          },
          "id": "a190a833-ad85-52fa-b88a-c08a848fa9cf",
          "name": "Nota Hay TRES errores. Encontra",
          "type": "n8n-nodes-base.stickyNote",
          "typeVersion": 1,
          "position": [
            -400,
            -60
          ]
        },
        {
          "parameters": {
            "content": "## La respuesta · no espiar\n\n1. La dirección dice `/v1/forecas` y va\n   `/v1/forecast`. Falta la t.\n2. El campo *frase* está en Fixed: pasalo a\n   Expression.\n3. Dice `temperatura` y el dato se llama\n   `temperature_2m`. Miralo en la pestaña\n   INPUT.\n\nBonus: *tuNombre* tampoco anda, porque la\nbandeja que llega es la del clima. Va con\n`$('1 · Tu nombre').item.json.tuNombre`.",
            "height": 310,
            "width": 380,
            "color": 4
          },
          "id": "c0f729d5-20c2-5f59-bb35-d70313a4cc02",
          "name": "Nota La respuesta · no espiar",
          "type": "n8n-nodes-base.stickyNote",
          "typeVersion": 1,
          "position": [
            10,
            -60
          ]
        }
      ],
      "connections": {
        "▶ Ejecutar": {
          "main": [
            [
              {
                "node": "1 · Tu nombre",
                "type": "main",
                "index": 0
              }
            ]
          ]
        },
        "1 · Tu nombre": {
          "main": [
            [
              {
                "node": "2 · Traer el clima",
                "type": "main",
                "index": 0
              }
            ]
          ]
        },
        "2 · Traer el clima": {
          "main": [
            [
              {
                "node": "3 · Armar la frase",
                "type": "main",
                "index": 0
              }
            ]
          ]
        }
      },
      "settings": {
        "executionOrder": "v1"
      },
      "pinData": {},
      "meta": {
        "instanceId": "wtm-santa-cruz"
      },
      "tags": []
    }
  }
];
