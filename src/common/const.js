/**
 * Cryptify - A file-based encryption utility for Node.js
 * Copyright (C) 2017 Mike Chabot
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 */

const packageDotJson = require('../../package.json');

/**
 * Cryptify options
 * @type {{ENCRYPT: [*], DECRYPT: [*], CIPHER: [*], PASSWORD: [*], FILE_ENCODING: [*], LIST_CIPHERS: [*], HELP: [*], VERSION: [*]}}
 */
export const OPTION_MAP = {
    ENCRYPT      : ['-e', '--encrypt'],
    DECRYPT      : ['-d', '--decrypt'],
    CIPHER       : ['-c', '--cipher'],
    PASSWORD     : ['-p', '--password'],
    FILE_ENCODING: ['-n', '--encoding'],
    LIST_CIPHERS : ['-l', '--list'],
    HELP         : ['-h', '--help'],
    VERSION      : ['-v', '--version']
};

/**
 * Options that don't require an argument
 * @type {[*]}
 */
export const OPTIONS_WITH_NO_ARGS = [
    ...OPTION_MAP.HELP,
    ...OPTION_MAP.VERSION,
    ...OPTION_MAP.LIST_CIPHERS
];

/**
 * Options that an argument
 * @type {[*]}
 */
export const OPTIONS_WITH_ARGS = [
    ...OPTION_MAP.PASSWORD,
    ...OPTION_MAP.CIPHER,
    ...OPTION_MAP.FILE_ENCODING
];

/**
 * Required options
 * @type {[*]}
 */
export const REQUIRED_OPTIONS = [
    ...OPTION_MAP.ENCRYPT,
    ...OPTION_MAP.DECRYPT
];

/**
 * Combined option arrays
 */
export const OPTION_ARRAY = [
    ...REQUIRED_OPTIONS,
    ...OPTIONS_WITH_NO_ARGS,
    ...OPTIONS_WITH_ARGS
];

/**
 * Password special characters
 * https://www.owasp.org/index.php/Password_special_characters
 * @type {[*]}
 */
export const SPECIAL_CHARACTERS = [
    '!', '"', '#', '$', '%', '&', '\'', '(',
    ')', '*', '+', ',', '-', '.', '/', ':',
    ';', '<', '=', '>', '?', '@', '[', '\\',
    ']', '^', '_', '`', '{', '|', '}', '~'
];

export const CRYPTIFY_VERSION = packageDotJson.version;

export const DEFAULTS = {
    COMMAND  : OPTION_MAP.ENCRYPT[0],
    CIPHER   : 'aes-256-cbc-hmac-sha256',
    ENCODING : 'utf8',
    EXTENSION: 'tmp'
};

export default {
    OPTION_MAP,
    OPTION_ARRAY,
    REQUIRED_OPTIONS,
    OPTIONS_WITH_NO_ARGS,
    OPTIONS_WITH_ARGS,
    SPECIAL_CHARACTERS,
    CRYPTIFY_VERSION,
    DEFAULTS
};
