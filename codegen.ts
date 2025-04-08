import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://makanak.afqalryiada.com/graphql",
  documents: "./queries/**/*.graphql",
  generates: {
    "./generated/graphql.ts": {
      preset: "client",
      plugins: [],
    },
    "./graphql.schema.json": {
      plugins: ["typescript", "typescript-operations", "typescript-vue-apollo"],
    },
  },
};

export default config;
