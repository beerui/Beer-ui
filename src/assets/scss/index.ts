import  '$assets/scss/index.scss'
import fs from 'fs';
import { browser } from '$app/env';

if (!browser) {
	// 把modules和common中的scss文件 写入index.scss
	const modules = fs.readdirSync('./src/assets/scss/modules')
	const commons = fs.readdirSync('./src/assets/scss/common')
	const modulesFiles = modules.map(el => `@import './modules/${el}'`)
	const commonsFiles = commons.map(el => `@import './common/${el}'`)
	fs.writeFileSync('./src/assets/scss/index.scss', [...commonsFiles, ...modulesFiles].join(';\r') + ';')
	console.log('index.scss 导入已更新！')
}
