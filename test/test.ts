import osName from '../my-mod'
console.log('osName === \'win32\'', osName === 'win32')

import {platform} from 'os'
console.log('platform() === \'win32\'', platform() === 'win32')

import now from './now'
console.log('now', now)
