import * as process from "process";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const execa = require("execa");

async function exec(
  script: string,
  env: NodeJS.ProcessEnv,
  options?: {
    cwd?: string;
    stdout?: NodeJS.WritableStream;
    stderr?: NodeJS.WritableStream;
  },
) {
  const command = execa(script, {
    shell: true,
    cwd: options?.cwd || process.cwd(),
    env,
  });

  if (options?.stdout) {
    command.stdout?.pipe(options.stdout, { end: false });
  }
  if (options?.stderr) {
    command.stderr?.pipe(options.stderr, { end: false });
  }

  const result = await command;

  if (result.exitCode !== 0) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    throw new Error(result.stdout.trim());
  }

  return result.stdout.trim();
}

export { exec };
