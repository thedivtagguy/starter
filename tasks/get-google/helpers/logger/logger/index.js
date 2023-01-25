import * as winston from "winston";

import chalk from "chalk";

export default (processName = "Graphics Bin") => {
  const label = chalk`{green ${processName}:}`;

  const consoleFormat = winston.format.printf(({ level, message }) => {
    if (level === "error") return chalk`${label} {bgRed ERROR} ${message}`;
    if (level === "warn") {
      return chalk`${label} {bgYellow.black warn} ${message}`;
    }
    if (level === "info") {
      return chalk`${label} {bgGreen.black info} ${message}`;
    }
    return chalk`${label} {cyan ${level}} ${message}`;
  });

  return winston.createLogger({
    transports: [
      new winston.transports.Console({
        format: consoleFormat,
        level: "info",
      }),
    ],
  });
};
