# VAMTIGER Node Typescript Commit
[VAMTIGER Node Typescript Commit](https://github.com/vamtiger-project/vamtiger-node-typescript-commit) commits unsaved **_source code_** on the **_source_** branch, and merges the corresponding build into the **_master_** branch. The purpose for this commit strategy is to explore the feesibility of removing any requirement/reliance on any postinstall configuration by branch-based separation of [Typescript](https://www.typescriptlang.org/) source code and the corresponding [traspiled](https://www.stevefenton.co.uk/2012/11/compiling-vs-transpiling/) result to reduce install time.<br>
<sup>_* The **Source** branch is thus always reserved for **development**._</sup><br>
<sup>_* The **Master** branch is thus always **derived** from the **source** branch._</sup>
<figure style="height: 350px; background-color: rgb(240, 240, 240)">
    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFk%0D%0Ab2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246%0D%0AIDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9InZhbXRpZ2VyLW5vZGUt%0D%0AdHlwZXNjcmlwdC1jb21taXQiCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4%0D%0AbWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgi%0D%0AIHZpZXdCb3g9IjAgMCAyNDYgNDE0IgoJIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAw%0D%0AIDI0NiA0MTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4K%0D%0ACS5zdDB7Zm9udC1mYW1pbHk6J0Jhcmxvd1NlbWlDb25kZW5zZWQtUmVndWxhcic7fQoJLnN0MXtm%0D%0Ab250LXNpemU6MTZweDt9Cgkuc3Qye2ZpbGw6bm9uZTtzdHJva2U6I0U5OTg1NjtzdHJva2Utd2lk%0D%0AdGg6OTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qze2Zp%0D%0AbGw6bm9uZTtzdHJva2U6IzkyRERBMTtzdHJva2Utd2lkdGg6OTtzdHJva2UtbGluZWNhcDpyb3Vu%0D%0AZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6dXJsKCNtZXJn%0D%0AZV94NUZfMl8zXyk7c3Ryb2tlLXdpZHRoOjk7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1p%0D%0AdGVybGltaXQ6MTA7fQoJLnN0NXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRo%0D%0AOjk7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0NntmaWxsOm5vbmU7c3Ryb2tlOnVybCgjbWVy%0D%0AZ2VfeDVGXzFfM18pO3N0cm9rZS13aWR0aDo5O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1t%0D%0AaXRlcmxpbWl0OjEwO30KCS5zdDd7ZmlsbDp1cmwoI21lcmdlX3g1Rl8xXzRfKTtzdHJva2U6dXJs%0D%0AKCNtZXJnZV94NUZfMV81Xyk7c3Ryb2tlLXdpZHRoOjk7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJ%0D%0ALnN0OHtmaWxsOiM5MkREQTE7fQoJLnN0OXtmaWxsOiNFOTk4NTY7fQo8L3N0eWxlPgo8ZyBpZD0i%0D%0AdmFtdGlnZXItbm9kZS10eXBlc2NyaXB0LWNvbW1pdF8xXyI+Cgk8ZyBpZD0iTGFiZWxzIj4KCQk8%0D%0AdGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDE2OC44NDY5IDM2NC40NTgpIiBjbGFzcz0i%0D%0Ac3QwIHN0MSI+bWFzdGVyPC90ZXh0PgoJCTx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEg%0D%0AMzQuMTU0NSAzNjQuNDU4NSkiIGNsYXNzPSJzdDAgc3QxIj5zb3VyY2U8L3RleHQ+CgkJPHRleHQg%0D%0AdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAxNC43MzA1IDI2LjQ2NjMpIiBjbGFzcz0ic3QwIHN0%0D%0AMSI+RGV2ZWxvcG1lbnQ8L3RleHQ+CgkJPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAx%0D%0ANTYuMDYzMiAyNi40NjYxKSIgY2xhc3M9InN0MCBzdDEiPlB1YmxpY2F0aW9uPC90ZXh0PgoJPC9n%0D%0APgoJPGcgaWQ9ImJyYW5jaCI+CgkJPGxpbmUgaWQ9Im1hc3RlciIgY2xhc3M9InN0MiIgeDE9IjE5%0D%0AMC43IiB5MT0iNDMuOSIgeDI9IjE5MC43IiB5Mj0iMzI3LjkiLz4KCQk8bGluZSBpZD0ic291cmNl%0D%0AIiBjbGFzcz0ic3QzIiB4MT0iNTUuMyIgeTE9IjQzLjkiIHgyPSI1NS4zIiB5Mj0iMzI3LjkiLz4K%0D%0ACTwvZz4KCTxnIGlkPSJtZXJnZSI+CgkJPGxpbmVhckdyYWRpZW50IGlkPSJtZXJnZV94NUZfMl8z%0D%0AXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI1MC43OTAxIiB5MT0iMjg5LjY3%0D%0ANDgiIHgyPSIxOTUuMjEwNyIgeTI9IjI4OS42NzQ4Ij4KCQkJPHN0b3AgIG9mZnNldD0iMCIgc3R5%0D%0AbGU9InN0b3AtY29sb3I6IzkyRERBMSIvPgoJCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3Rv%0D%0AcC1jb2xvcjojRTk5ODU2Ii8+CgkJPC9saW5lYXJHcmFkaWVudD4KCQk8cGF0aCBpZD0ibWVyZ2Vf%0D%0AeDVGXzJfMl8iIGNsYXNzPSJzdDQiIGQ9Ik01NS4zLDI0Ny40YzAsMCwzMy40LDc5LjUsMTM1LjQs%0D%0AODQuNSIvPgoJCTxwYXRoIGlkPSJtZXJnZV94NUZfMl8xXyIgY2xhc3M9InN0NSIgZD0iTTU1LjMs%0D%0AMjkwLjEiLz4KCQk8bGluZWFyR3JhZGllbnQgaWQ9Im1lcmdlX3g1Rl8xXzNfIiBncmFkaWVudFVu%0D%0AaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjUwLjc5MDEiIHkxPSIxMjUuNjc0OCIgeDI9IjE5NS4y%0D%0AMTA3IiB5Mj0iMTI1LjY3NDgiPgoJCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xv%0D%0AcjojOTJEREExIi8+CgkJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNFOTk4%0D%0ANTYiLz4KCQk8L2xpbmVhckdyYWRpZW50PgoJCTxwYXRoIGlkPSJtZXJnZV94NUZfMV8yXyIgY2xh%0D%0Ac3M9InN0NiIgZD0iTTU1LjMsODMuNGMwLDAsMzMuNCw3OS41LDEzNS40LDg0LjUiLz4KCQk8bGlu%0D%0AZWFyR3JhZGllbnQgaWQ9Im1lcmdlX3g1Rl8xXzRfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VP%0D%0AblVzZSIgeDE9IjU1LjI5MDEiIHkxPSIxMjYuMTExOCIgeDI9IjU1LjI5MDEiIHkyPSIxMjYuMTEx%0D%0AOCI+CgkJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkYiLz4KCQkJ%0D%0APHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMCIvPgoJCTwvbGluZWFy%0D%0AR3JhZGllbnQ+CgkJPGxpbmVhckdyYWRpZW50IGlkPSJtZXJnZV94NUZfMV81XyIgZ3JhZGllbnRV%0D%0Abml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI1NS4yOTAxIiB5MT0iMTI2LjExMTgiIHgyPSI1NS4y%0D%0AOTAxIiB5Mj0iMTI2LjExMTgiPgoJCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xv%0D%0AcjojRkZGRkZGIi8+CgkJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDAw%0D%0AMDAiLz4KCQk8L2xpbmVhckdyYWRpZW50PgoJCTxwYXRoIGlkPSJtZXJnZV94NUZfMV8xXyIgY2xh%0D%0Ac3M9InN0NyIgZD0iTTU1LjMsMTI2LjEiLz4KCTwvZz4KCTxnIGlkPSJjb21taXQiPgoJCTxnIGlk%0D%0APSJzb3VyY2VfMV8iPgoJCQk8Y2lyY2xlIGNsYXNzPSJzdDgiIGN4PSI1NS43IiBjeT0iMjQ3Ljki%0D%0AIHI9IjEzIi8+CgkJCTxjaXJjbGUgY2xhc3M9InN0OCIgY3g9IjU1LjciIGN5PSI4My45IiByPSIx%0D%0AMyIvPgoJCTwvZz4KCQk8ZyBpZD0ibWFzdGVyXzFfIj4KCQkJPGNpcmNsZSBjbGFzcz0ic3Q5IiBj%0D%0AeD0iMTkwLjciIGN5PSIxNjcuOSIgcj0iMTMiLz4KCQkJPGNpcmNsZSBjbGFzcz0ic3Q5IiBjeD0i%0D%0AMTkwLjciIGN5PSIzMzEuOSIgcj0iMTMiLz4KCQk8L2c+Cgk8L2c+Cgk8dGV4dCB0cmFuc2Zvcm09%0D%0AIm1hdHJpeCgxIDAgMCAxIDE0LjEwNTcgMzk3Ljc0MTcpIiBjbGFzcz0ic3QwIHN0MSI+VkFNVElH%0D%0ARVIgTm9kZSBUeXBlc2NyaXB0IENvbW1pdDwvdGV4dD4KPC9nPgo8L3N2Zz4K"/>
</figure>

## Installation
[VAMTIGER Node Typescript Commit](https://github.com/vamtiger-project/vamtiger-node-typescript-commit) can be installed using [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/lang/en/):
```javascript
npm i --save-dev vamtiger-node-typescript-commit
```
or
```javascript
yarn add --dev vamtiger-node-typescript-commit
```

[VAMTIGER Node Typescript Commit](https://github.com/vamtiger-project/vamtiger-node-typescript-commit) can also be installed globally:
```javascript
npm i --global vamtiger-node-typescript-commit 
```
or
```javascript
yarn global vamtiger-node-typescript-commit 
```

## Usage
[VAMTIGER Node Typescript Commit](https://github.com/vamtiger-project/vamtiger-node-typescript-commit) can be referenced as an [npm](https://www.npmjs.com/) script:
```json
{
    "scripts": {
        "commit": "vamtigerNodeTypescriptCommit"
    }
}
```

[VAMTIGER Node Typescript Commit](https://github.com/vamtiger-project/vamtiger-node-typescript-commit) can then be executed using:

To push changes to a defined the default remote repository:
```bash
{
    "scripts": {
        "commit": "vamtigerNodeTypescriptCommit --push"
    }
}
```

The latest master build can be published to [npm](https://www.npmjs.com/):
```json
{
    "scripts": {
        "commit": "vamtigerNodeTypescriptCommit --push --publish"
    }
}
```

Once defined as an [npm](https://www.npmjs.com/), [VAMTIGER Node Typescript Commit](https://github.com/vamtiger-project/vamtiger-node-typescript-commit) can executed using:
```bash
npm run commit
```

If installed globally, [VAMTIGER Node Typescript Commit](https://github.com/vamtiger-project/vamtiger-node-typescript-commit) can be run as follows:
```bash
vamtigerNodeTypescriptCommit --push --publish
```