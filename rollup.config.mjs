import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import scss from "rollup-plugin-scss";
import typescript from "rollup-plugin-typescript2";

export default {
  input: ["src/index.ts"],
  output: [
    {
      file: "lib/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "lib/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    scss(),
    postcss(),
  ],
};
