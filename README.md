This Simple Repo is designed to reappearing the error as below, powered by `vite2` and `react-17` and [`react-activation`](https://github.com/CJY0208/react-activation).
I guess it's vite2's bug, because webpack is OK.

- `yarn dev` is ok

- `yarn build` and `yarn serve`, then we will got an error from Broswer Console when visiting `http://localhost:5000/`.
```
Error: Minified React error #130
```

![](https://user-images.githubusercontent.com/19356426/124440796-998a7200-ddad-11eb-9c49-edf680950197.png)

Related issues:
https://github.com/CJY0208/react-activation/issues/125
https://github.com/Harhao/electron-vite-react-starter/issues/2
https://github.com/vitejs/vite/issues/4123
