import { defineConfig } from 'vite'

export default defineConfig({
  base:'/romantic/',
	build: {
		rollupOptions:{
			input: {
				main: './index.html',
				second: './second_page.html',
				third: './third_page.html',
				four: './fourth_page.html',
				five: './fives_page.html',
				six: './sixth_page.html',
				seven: './seven_page.html',
				last: './last.html',
				eight: './eight_page.html',
				nine: './nine_page.html',
			}
		}
	}
})
