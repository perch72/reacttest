// module.exports = api => {
//     return {
//       plugins: [
//         "@babel/plugin-transform-arrow-functions","@babel/plugin-transform-runtime"
//       ],
//       presets: [
//         [
//           "@babel/preset-env",
//           {
//             useBuiltIns: "entry",
//             // caller.target will be the same as the target option from webpack
//             targets: api.caller(caller => caller && caller.target === "node")
//               ? { node: "current" }
//               : { chrome: "58", ie: "11" }
//           }
//         ]
//       ]
//     }
//   }