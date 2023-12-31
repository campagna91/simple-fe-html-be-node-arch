# SIMPLE NODE SERVER [![styled with esformatter](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://marketplace.visualstudio.com/items?itemName=howardzuo.vscode-esformatter)

> Sometimes you need to have a development environment where each modification must be re -proposed on all connected devices without wasting time to find the right configurations

A simple server written in node.js useful for the rapid development of small web services.

## Prerequisities

It needs to have installed [Node.js](https://nodejs.org/en) onto your machine
(the package from the official website also will include the npm package utility.

## Installation

From the root project's directory run the command:

```
 npm install
```

## Usage

After that on the project run run the command: 

```
npm run dev
```

This will start the server on the port specified in the file _index.js_ .

## IDE

The project was tested using programming as a programming ideal [Visual Code Studio](https://code.visualstudio.com/). The download and the use of the following Plugins is recommended:

1. [esformatter](https://marketplace.visualstudio.com/items?itemName=howardzuo.vscode-esformatter)
2. [Style formatter](https://marketplace.visualstudio.com/items?itemName=dweber019.vscode-style-formatter)

## Debug

In order to debug the server of your project, the file in the path 

> .vscode/launch.json

provide 2 kinds of debugging types: 

**1. Local**

The configuration `Local Debug` allows to debug locally the server project. To start it, just select it from the dropdown menu in the `Run and Debug` side menu and press play. 

```
{
    "type": "node",
    "name": "Local Debug",
    "program": "${workspaceFolder}/index.js",
    "runtimeArgs": [
        "--inspect-brk"
    ],
    "request": "attach",
    "port": 8888,
    "address": "0.0.0.0",
    "restart": true,
    "console": "integratedTerminal",
    "internalConsoleOptions": "neverOpen",
    "skipFiles": [
        "<node_internals>/**"
    ]
}
```

**2. Remote**

The configuration `Remote Debug` allows to debug locally the server project. To start it, just select it from the dropdown menu in the `Run and Debug` side menu and press play. 

```
{
    "address": "0.0.0.0",
    "localRoot": "${workspaceFolder}",
    "name": "Remote Debug",
    "port": 9229,
    "remoteRoot": "path/to/your/project",
    "request": "attach",
    "skipFiles": [
        "<node_internals>/**"
    ],
    "runtimeArgs": [
        "--inspect-brk"
    ],
    "type": "pwa-node"
}
```

Remember to change the _remoteRoot_ configuration. 
Your host service configuration can differ from the above configuration so consult it in case of problems.

**IMPORTANT NOTES** 

The debugging starts on a different port.

## License

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.