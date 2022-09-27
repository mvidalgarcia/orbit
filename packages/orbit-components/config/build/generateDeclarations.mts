import { $, fs, chalk, globby } from "zx";
import flowgen, { beautify } from "flowgen";
import dedent from "dedent";
import filedirname from "filedirname";

const [, __dirname] = filedirname();

export default async function generateTypeDeclarations() {
  await $`ts-node --esm config/typeFiles.mts`;

  await $`cpy "**/*.d.ts" ../lib --cwd src --parents`;
  await $`cpy "**/*.d.ts" ../es --cwd src --parents`;
  await $`del tsconfig.tsbuildinfo`; // reset potential incremental compilation information
  await $`tsc`;

  // generate flow declarations out of typescript definitions
  console.log(chalk.greenBright("Generating Flow declarations..."));
  const tsDeclarations = await globby("{lib,es}/**/*.d.ts");
  await Promise.all(
    tsDeclarations.map(async tsDeclPath => {
      const flowDeclPath = tsDeclPath.replace(".d.ts", ".js.flow");
      try {
        if (await fs.pathExists(flowDeclPath)) return;
        const flowDecl = beautify(
          flowgen.compiler.compileDefinitionFile(tsDeclPath, {
            interfaceRecords: true,
          }),
        );

        const content = ["// @flow", flowDecl].join("\n");

        await fs.writeFile(flowDeclPath, content);
      } catch (err) {
        if (err instanceof Error) {
          err.message = dedent`
                Failed to create a Flow libdef
                ${__dirname}/${flowDeclPath}
                ${err.message}
              `;
          throw err;
        }
      }
    }),
  );

  await $`yarn jscodeshift -t config/flowAst.ts packages/orbit-components/lib/**/*.js.flow`;
  await $`yarn jscodeshift -t config/flowAst.ts packages/orbit-components/es/**/*.js.flow`;
}
