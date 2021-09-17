Instructions to run this sample application and reproduce the error:

1. Clone repository
2. In repository root, run `yarn install` (must have Node and yarn installed on the computer)
3. Open the repository folder in Visual Studio Code
4. Open a terminal and run `yarn start`
5. In the debug pane in Visual Studio Code, select the "react app chrome debug" debug configuration
6. Hit the play button or press `F5` to start debugging
7. In the new Chrome instance/window that pops up, click the "Paypal" button (the top button whose label simply says "Paypal")

The button *may* work the first time, but subsequent clicks should result in the error