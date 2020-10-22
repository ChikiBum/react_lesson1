'use strict';

const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';

const command = employers.filter((el) => el.length > 0 && el.trim() !== '').map((el) => {
	el.toLowerCase().trim();
	return el[0].toUpperCase() + el.slice(1);
})

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const calcCash = (own, everyCash) => {
	own = own || 0;
	let total = own;
	total =+ everyCash.reduce((sum, current) => {
		return sum + current;
	  }, 0);
	return total;
}

const lesson = calcCash(null, data.cash);

const makeBusiness = (director, teacher, allModule, gang, course) => {
	teacher = teacher || 'Максим';
	const sumTech = data.react.concat(data.add, 'и другие');
	console.log(`Стартуем новый курс: ${course}. Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}'. 
Команда Академии:  ${gang}`);
	console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
	console.log('Технологии которые мы изучим: ');
	console.log.apply(null, sumTech);
}

const [director, teacher, allModule, gang, course] = ['Артем', null, lesson, command, nameCourse];

makeBusiness(director, teacher, allModule, gang, course);
