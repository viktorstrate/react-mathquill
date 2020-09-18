// webpack loaders are used to configure mathquill as a commonjs module, see webpack.config.js
export const MathQuill = require('@edtr-io/mathquill/build/mathquill.js')
export const MQ = MathQuill.getInterface(2)
