import { Injectable, Scope, Logger } from '@nestjs/common';
import * as colors from 'colors';
import { template } from 'lodash';

import { ContextService } from '@app/core';

const buildLog = template('[${ requestId }][${ datetime }]: ${ message }');

@Injectable({ scope: Scope.DEFAULT })
export class HttpLogger extends Logger {
  private _log(message: string) {
    const datetime = new Date().toISOString();
    const requestId = ContextService.get('requestId') as string;
    console.log(
      buildLog({
        requestId: colors.yellow(requestId),
        datetime,
        message,
      }),
    );
  }

  log(message: string): void {
    this._log(colors.bgGreen(message));
  }

  error(message: string): void {
    this._log(colors.red(message));
  }

  warn(message: string): void {
    this._log(colors.yellow(message));
  }

  debug(message: string): void {
    this._log(colors.cyan(message));
  }

  verbose(message: string): void {
    this._log(colors.cyan(message));
  }
}
