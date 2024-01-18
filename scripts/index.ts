/*
Задание 2.2.3

1. создать папку проекта и базовый шаблон index.html (содержащий head,
body),
2. установить TS как dev-dependency (локально) в проект,
3. сгенерировать стандартный конфигурационный файл tsconfig.json,
4. настроить следующие параметры в tsconfig.json:
- запрет генерации JS-файлов при ошибке типов в исходнике,
- название папки с исходными .ts файлами - scripts
- название папки с сгенерированными файлами - build
- убирать комментарии из исходников в сгенерированных файлах
5. в файле-исходнике index.ts написать код, который запросит с помощью
метода fetch данные со следующего API-эндпоинта
https://jsonplaceholder.typicode.com/users и выведет ответ в console.log
6. скомпилировать данный файл index.ts и подключить результат в HTML-
шаблон
7. (дополнительно) Написать функцию fillTable, которая принимает
полученный массив юзеров из пункта 5 и выводит результат в виде
таблицы в index.html. Требуется вывести следующие поля пользователей в
таблице: 'id', 'name', 'username', 'email', 'phone', 'website'. Для вывода
использовать динамическую генерацию строк и ячеек таблицы
*/

interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
	website: string;
}

/////////////////////
///////VARIANT 1/////
/////////////////////

const getUsersData = "https://jsonplaceholder.typicode.com/users";
const table: any = document.getElementById("userTable");

fetch(getUsersData)
	.then((response) => {
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		return response.json();
	})
	.then(function (users) {
		users.forEach(function (user: User) {
			const row = table.insertRow(-1);

			// Insert cells to the row
			const idCell = row.insertCell(0);
			const nameCell = row.insertCell(1);
			const usernameCell = row.insertCell(2);
			const emailCell = row.insertCell(3);
			const phoneCell = row.insertCell(4);
			const websiteCell = row.insertCell(5);

			// Add the text content to each cell
			idCell.textContent = user.id;
			nameCell.textContent = user.name;
			usernameCell.textContent = user.username;
			emailCell.textContent = user.email;
			phoneCell.textContent = user.phone;
			websiteCell.textContent = user.website;
		});
	})
	.catch(function (error) {
		return console.error("Error:", error);
	});

///////////////////
/////VARIANT 2/////
///////////////////

//async function getUsersData() {
//	try {
//		const table = document.getElementById(
//			"userTable"
//		) as HTMLTableElement | null;
//		if (!table) {
//			throw new Error("Table element not found!");
//		}

//		const resp = await fetch("https://jsonplaceholder.typicode.com/users");
//		if (!resp.ok) {
//			throw new Error(`HTTP error! Status: ${resp.status}`);
//		}
//		const data: User[] = await resp.json();

//		data.forEach((user: User) => {
//			const row = table.insertRow(-1); // Insert cells to the row

//			const idCell = row.insertCell(0);
//			const nameCell = row.insertCell(1);
//			const usernameCell = row.insertCell(2);
//			const emailCell = row.insertCell(3);
//			const phoneCell = row.insertCell(4);
//			const websiteCell = row.insertCell(5); // Add the text content to each cell

//			idCell.textContent = user.id.toString();
//			nameCell.textContent = user.name;
//			usernameCell.textContent = user.username;
//			emailCell.textContent = user.email;
//			phoneCell.textContent = user.phone;
//			websiteCell.textContent = user.website;
//		});
//	} catch (error) {
//		console.error(error);
//	}
//}

//getUsersData();

///////////////////
/////VARIANT 3/////
///////////////////

//async function getUsersData() {
//	try {
//		const table: any = document.getElementById("userTable");
//		const resp = await fetch("https://jsonplaceholder.typicode.com/users");
//		const data = await resp.json();

//		data.forEach(function (user: User) {
//			const row = table.insertRow(-1);

//			const idCell = row.insertCell(0);
//			const nameCell = row.insertCell(1);
//			const usernameCell = row.insertCell(2);
//			const emailCell = row.insertCell(3);
//			const phoneCell = row.insertCell(4);
//			const websiteCell = row.insertCell(5);

//			idCell.textContent = user.id;
//			nameCell.textContent = user.name;
//			usernameCell.textContent = user.username;
//			emailCell.textContent = user.email;
//			phoneCell.textContent = user.phone;
//			websiteCell.textContent = user.website;
//		});
//	} catch (error) {
//		console.log(error);
//	}
//}

//getUsersData();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Задание 2.3.2

Написать тип-объект для следующей константы, учитывая что:
поле id - объединение строковых литералов (использовать все
возможные в данном примере значения)
поле label - строка
поле minWidth - числовое
поле align - строковой литерал с 1 значением
поле format - функция с аргументом value типа число и возвращаемым
типом строка
*/

//type Column = {
//	id: string;
//	label: string;
//	minWidth?: number;
//	align?: "right" | "left" | "center";
//	format?: (value: number) => string;
//};

//const columns = [
//	{ id: "name", label: "Name" },
//	{ id: "code", label: "ISO\u00A0Code", minWidth: 100 },
//	{
//		id: "population",
//		label: "Population",
//		minWidth: 170,
//		align: "right",
//		format: (value: number) => value.toLocaleString("en-US"),
//	},
//	{
//		id: "size",
//		label: "Size\u00A0(km\u00B2)",
//		minWidth: 170,
//		align: "right",
//		format: (value: number) => value.toLocaleString("en-US"),
//	},
//];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Задание 2.3.4

//Необходимо дописать пропуски в коде, отмеченные символами
///* (1) */
///* (2) */
///* (3) */
///* (4) */
///* (5) */
//так, чтоб приведенные в нижней части кода тестовые сценарии успешно
//выполнялись в песочнице, а так же не было ошибок в редакторе кода.

//type ColorHexCode = string;

//interface VehicleParameters {
//	type: string;
//	weight: number;
//	colorHex: ColorHexCode;
//	vin: string;
//}

//interface IVehicle extends VehicleParameters {
//	getParametersForBoats(): IVehicle | null;
//}

//class Vehicle<T extends VehicleParameters> implements IVehicle {
//	type: string;
//	weight: number;
//	colorHex: ColorHexCode;
//	vin: string;
//	constructor({ type, weight, colorHex, vin }: T) {
//		this.type = type;
//		this.weight = weight;
//		this.colorHex = colorHex;
//		this.vin = vin;
//	}

//	getParametersForBoats(): IVehicle | null {
//		return this.type === "boat" ? this : null;
//	}
//}

//const boat = new Vehicle({
//	type: "boat",
//	weight: 200,
//	colorHex: "#00ff00",
//	vin: "1234ABC5389DEF83958",
//});

//const parameters = boat.getParametersForBoats();
//console.log("parameters", parameters);

//const bike = new Vehicle({
//	type: "bike",
//	weight: 12,
//	colorHex: "#fff000",
//	vin: "5948ABC5389DEF832428",
//});
//const parameters2 = bike.getParametersForBoats();
//console.log("parameters2", parameters2);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Задание 2.3.7.1

/*
Нужно написать перегруженную функцию (Function Overloads) так, чтоб
функция принимала либо численные широту и долготу, либо строковые
страну, город, улицу, а так же в обеих перегрузках вызывался коллбэк, в
который передается одно из двух сообщений:
*/

/////////////////////
///////VARIANT 1/////
/////////////////////

//const location1 = getUserLocation(55.45, 37.37, (location) => {
//	console.log(location); // "latitude: 55.45, longitude: 37.37"
//});
//const location2 = getUserLocation(
//	"Russia",
//	"Taganrog",
//	"Petrovskaya 51",
//	(location) => {
//		console.log(location); // "location is: Russia, Taganrog, Petrovskaya 51"
//	}
//);

//function getUserLocation(
//	latitude: number,
//	longitude: number,
//	callback: (location: string) => void
//): void;
//function getUserLocation(
//	country: string,
//	city: string,
//	street: string,
//	callback: (location: string) => void
//): void;

//function getUserLocation(
//	arg1: string | number,
//	arg2: string | number,
//	arg3: string | ((location: string) => void),
//	arg4?: (location: string) => void
//): void {
//	if (
//		typeof arg1 === "number" &&
//		typeof arg2 === "number" &&
//		typeof arg3 === "function"
//	) {
//		const locationMessage = `latitude: ${arg1}, longitude: ${arg2}`;
//		arg3(locationMessage);
//	} else if (
//		typeof arg1 === "string" &&
//		typeof arg2 === "string" &&
//		typeof arg3 === "string" &&
//		typeof arg4 === "function"
//	) {
//		const locationMessage = `location is: ${arg1}, ${arg2}, ${arg3}`;
//		arg4(locationMessage);
//	} else {
//		throw new Error("Invalid arguments");
//	}
//}

/////////////////////
///////VARIANT 2/////
/////////////////////

//// Переименование класса Location во избежание конфликтов со встроенным глобальным типом Location
//class CustomLocation {
//	constructor(
//		public country: string,
//		public city: string,
//		public street: string
//	) {}
//}

//function getUserLocation(
//	location: CustomLocation | number,
//	secondParam?: string | ((location: string) => void),
//	thirdParam?: string,
//	callback?: (location: string) => void
//): void {
//	if (location instanceof CustomLocation && typeof secondParam === "function") {
//		const message = `location is: ${location.country}, ${location.city}, ${location.street}`;
//		secondParam(message);
//	} else if (
//		typeof location === "number" &&
//		typeof secondParam === "string" &&
//		typeof thirdParam === "string" &&
//		typeof callback === "function"
//	) {
//		const latitude = location;
//		const longitude = secondParam;
//		const message = `latitude: ${latitude}, longitude: ${longitude}`;
//		callback(message);
//	} else {
//		throw new Error("Invalid arguments");
//	}
//}

//// Использование с переименованным классом CustomLocation
//const customLocation = new CustomLocation(
//	"Russia",
//	"Taganrog",
//	"Petrovskaya 51"
//);
//getUserLocation(customLocation, (message: string) => {
//	console.log(message);
//});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Задание 2.3.7.2

/*
1. Написать абстрактный класс Resource<T> по работе с массивом
объектов, включающий операции (методы):
- получение полного массива объектов из контекста (get),
- получение одного объекта по ключу/значению (getOne)
- запись нового объекта в конец массива (add)
- обновление найденного объекта (update)
- удаление найденного объекта (delete)
2. Класс должен работать с любым массивом объектов, переданным
ему дочерним классом при создании инстанса дочернего класса. См.
дочерние классы UserModel и OrderModel.
3. Абстрактный класс должен сохранить массив данных в свой контекст
(this.data) в конструкторе и проводить все операции изменения или
чтения из своего контекста, не затрагивая исходные массивы с
данными.
Метод get() должен возвращать текущий массив данных из
контекста, с учетом всех изменений, произведенных в других
методах.
Метод add(newObj) должен возвращать получившийся массив после
добавления (push) элемента, соответственно.
Метод getOne(key, val) должен возвращать либо один объект,
удовлетворяющий условиям поиска, либо undefined. Поиск элемента
может вестись по любому полю в объекте (см. примеры в console.log
users.getOne и orders.getOne ниже)
Метод update(key, val, partialData) должен обновлять и возвращать либо один
обновленный объект, удовлетворяющий условиям поиска, либо ничего не
обновлять и возвращать undefined. Поиск элемента может вестись по любому
полю в объекте (см. примеры в console.log users.upate и orders.update ниже).
Данный метод не может добавлять новые поля, не соответствующие
исходному интерфейсу объекта, он должен принимать третьим агрументом
новые данные, которые будут переписаны в найденном объекте. Тип данных
должен соответствовать Partial<T>.
Метод delete(key, val) должен удалять и возвращать либо один удаленный
объект, удовлетворяющий условиям поиска, либо ничего не удалять и
возвращать undefined. Поиск элемента может вестись по любому полю в
объекте (см. примеры в console.log users.delete и orders.delete ниже).
Метод update(key, val, partialData) должен обновлять и возвращать либо один
обновленный объект, удовлетворяющий условиям поиска, либо ничего не
обновлять и возвращать undefined. Поиск элемента может вестись по любому
полю в объекте (см. примеры в console.log users.upate и orders.update ниже).
Данный метод не может добавлять новые поля, не соответствующие
исходному интерфейсу объекта, он должен принимать третьим агрументом
новые данные, которые будут переписаны в найденном объекте. Тип данных
должен соответствовать Partial<T>.
Метод delete(key, val) должен удалять и возвращать либо один удаленный
объект, удовлетворяющий условиям поиска, либо ничего не удалять и
возвращать undefined. Поиск элемента может вестись по любому полю в
объекте (см. примеры в console.log users.delete и orders.delete ниже).
*/

//abstract class Resource<T> {
//	protected data: T[];

//	constructor(data: T[]) {
//		this.data = data;
//	}

//	get(): T[] {
//		return this.data;
//	}

//	getOne(key: keyof T, val: any): T | undefined {
//		return this.data.find((item: T) => item[key] === val);
//	}

//	add(newObj: T): T[] {
//		this.data.push(newObj);
//		return this.data;
//	}

//	update(key: keyof T, val: any, partialData: Partial<T>): T | undefined {
//		const index = this.data.findIndex((item) => item[key] === val);
//		if (index === -1) return undefined;

//		this.data[index] = { ...this.data[index], ...partialData };
//		return this.data[index];
//	}

//	delete(key: keyof T, val: any): T | undefined {
//		const index = this.data.findIndex((item) => item[key] === val);
//		if (index === -1) return undefined;

//		return this.data.splice(index, 1)[0];
//	}
//}

//// DataType интерфейс для пользовательских данных
//type DataType = {
//	id: number;
//	name: string;
//	phone: string;
//	email: string;
//	address: string;
//};

//// Имитация пользовательских данных
//const mockUserData: DataType[] = [
//	{
//		id: 1,
//		name: "Lane Mcdonald",
//		phone: "1-980-603-4363",
//		email: "dui@aol.com",
//		address: "P.O. Box 895, 4432 Placerat, Avenue",
//	},
//	{
//		id: 2,
//		name: "Emma Ford",
//		phone: "(472) 855-7514",
//		email: "aliquam.ornare@protonmail.net",
//		address: "P.O. Box 311, 427 Egestas Av.",
//	},
//	{
//		id: 3,
//		name: "Louis Juarez",
//		phone: "1-895-966-2657",
//		email: "venenatis.lacus@outlook.net",
//		address: "Ap #125-478 Sit Av.",
//	},
//	{
//		id: 4,
//		name: "Zorita Mason",
//		phone: "1-262-419-4287",
//		email: "arcu.vel@protonmail.net",
//		address: "P.O. Box 631, 1093 Metus Street",
//	},
//	{
//		id: 5,
//		name: "Harriet Acevedo",
//		phone: "1-788-618-2639",
//		email: "consequat.dolor@protonmail.net",
//		address: "P.O. Box 769, 5046 Pellentesque, Rd.",
//	},
//];

//class UserModel extends Resource<DataType> {
//	constructor(data: DataType[]) {
//		super(data);
//	}
//}
//const users = new UserModel([...mockUserData]);
//console.log("users.get()", users.get());
//console.log('[LOG] "users.get()"', [
//	{
//		id: 1,
//		name: "Lane Mcdonald",
//		phone: "1-980-603-4363",
//		email: "dui@aol.com",
//		address: "P.O. Box 895, 4432 Placerat, Avenue",
//	},
//	{
//		id: 2,
//		name: "Emma Ford",
//		phone: "(472) 855-7514",
//		email: "aliquam.ornare@protonmail.net",
//		address: "P.O. Box 311, 427 Egestas Av.",
//	},
//	{
//		id: 3,
//		name: "Louis Juarez",
//		phone: "1-895-966-2657",
//		email: "venenatis.lacus@outlook.net",
//		address: "Ap #125-478 Sit Av.",
//	},
//	{
//		id: 4,
//		name: "Zorita Mason",
//		phone: "1-262-419-4287",
//		email: "arcu.vel@protonmail.net",
//		address: "P.O. Box 631, 1093 Metus Street",
//	},
//	{
//		id: 5,
//		name: "Harriet Acevedo",
//		phone: "1-788-618-2639",
//		email: "consequat.dolor@protonmail.net",
//		address: "P.O. Box 769, 5046 Pellentesque, Rd.",
//	},
//]);

//console.log(
//	"users add",
//	users.add({
//		id: 6,
//		name: "Ivan Petrov",
//		phone: "1-788-618-2639",
//		email: "consequat.dolor@protonmail.net",
//		address: "P.O. Box 769, 5046 Pellentesque, Rd.",
//	})
//); // Push объекта в массив. Объект может быть только типа Datatype

//console.log('[LOG]: "users add"', [
//	{
//		id: 1,
//		name: "Lane Mcdonald",
//		phone: "1-980-603-4363",
//		email: "dui@aol.com",
//		address: "P.O. Box 895, 4432 Placerat, Avenue",
//	},
//	{
//		id: 2,
//		name: "Emma Ford",
//		phone: "(472) 855-7514",
//		email: "aliquam.ornare@protonmail.net",
//		address: "P.O. Box 311, 427 Egestas Av.",
//	},
//	{
//		id: 3,
//		name: "Louis Juarez",
//		phone: "1-895-966-2657",
//		email: "venenatis.lacus@outlook.net",
//		address: "Ap #125-478 Sit Av.",
//	},
//	{
//		id: 4,
//		name: "Zorita Mason",
//		phone: "1-262-419-4287",
//		email: "arcu.vel@protonmail.net",
//		address: "P.O. Box 631, 1093 Metus Street",
//	},
//	{
//		id: 5,
//		name: "Harriet Acevedo",
//		phone: "1-788-618-2639",
//		email: "consequat.dolor@protonmail.net",
//		address: "P.O. Box 769, 5046 Pellentesque, Rd.",
//	},
//	{
//		id: 6,
//		name: "Ivan Petrov",
//		phone: "1-788-618-2639",
//		email: "consequat.dolor@protonmail.net",
//		address: "P.O. Box 769, 5046 Pellentesque, Rd.",
//	},
//]);

//console.log(
//	"users.getOne()",
//	users.getOne("id", 4)
//); /* Получение одного объекта с id: 4 (возможно получение по любому ключу и его значению) */
//console.log(
//	"users.getOne()",
//	users.getOne("name", "Lane Mcdonald")
//); /* Получение одного объекта по совпадению name */
//console.log(
//	"users.getOne()",
//	users.getOne("phone", "(472) 855-7514")
//); /* Получение одного объекта по совпадению phone */
//console.log(
//	"users.getOne()",
//	users.getOne("id", 12)
//); /* Не существующий id, вернется undefined */

//console.log('[LOG]: "users.getOne()"', {
//	id: 4,
//	name: "Zorita Mason",
//	phone: "1-262-419-4287",
//	email: "arcu.vel@protonmail.net",
//	address: "P.O. Box 631, 1093 Metus Street",
//});
//console.log('[LOG]: "users.getOne()"', {
//	"id": 1,
//	"name": "Lane Mcdonald",
//	"phone": "1-980-603-4363",
//	"email": "dui@aol.com",
//	"address": "P.O. Box 895, 4432 Placerat, Avenue"
//	});
//console.log('[LOG]: "users.getOne()"', {
//	"id": 2,
//	"name": "Emma Ford",
//	"phone": "(472) 855-7514",
//	"email": "aliquam.ornare@protonmail.net",
//	"address": "P.O. Box 311, 427 Egestas Av."
//	});
//console.log('[LOG]: "users.getOne()", undefined');

//console.log(
//	"users.update()",
//	users.update("id", 4, { name: "Sergey" })
//); /* Изменение поля 'name' в
//объекте с 'id' равным 4, возвращает измененный объект (поиск по любому ключу, изменяемые данные
//должны быть совместимы с DataType (Partial)) */
//console.log(
//	"users.update()",
//	users.update("email", "dui@aol.com", {
//		address: "Moscow, Russia",
//		phone: "12345678910",
//	})
//); /* Изменение поля 'name' в объекте с 'id' равным 4, возвращает измененный
//объект (поиск по любому ключу, изменяемые данные должны быть совместимы с DataType (Partial)) */
//console.log(
//	"users.update()",
//	users.update("name", "Leo Tolstoy", { address: "Yasnaya polyana, Russia" })
//); /* изменение несуществующей записи вернет undefined и ничего не изменится */
///**
//	"id": 6,
//	"name": "Ivan Petrov",
//	"phone": "1-788-618-2639",
//	"email": "consequat.dolor@protonmail.net",
//	"address": "P.O. Box 769, 5046 Pellentesque, Rd."
//	}]
//	*/
//console.log(
//	"users.delete()",
//	users.delete("name", "Ivan Petrov")
//); /* Удаление объекта с полем name
//"Ivan Petrov", возвращает удаленный объект */
//console.log(
//	"users.delete()",
//	users.delete("id", 222)
//); /* Удаление несуществующего объекта */
//console.log('[LOG]: "users.delete()"', {
//	id: 6,
//	name: "Ivan Petrov",
//	phone: "1-788-618-2639",
//	email: "consequat.dolor@protonmail.net",
//	address: "P.O. Box 769, 5046 Pellentesque, Rd.",
//});
//console.log('[LOG]: "users.delete()", undefined');

//console.log("users.get()4", users.get());
//console.log('[LOG]: "users.get()4"', [
//	{
//		id: 1,
//		name: "Lane Mcdonald",
//		phone: "12345678910",
//		email: "dui@aol.com",
//		address: "Moscow, Russia",
//	},
//	{
//		id: 2,
//		name: "Emma Ford",
//		phone: "(472) 855-7514",
//		email: "aliquam.ornare@protonmail.net",
//		address: "P.O. Box 311, 427 Egestas Av.",
//	},
//	{
//		id: 3,
//		name: "Louis Juarez",
//		phone: "1-895-966-2657",
//		email: "venenatis.lacus@outlook.net",
//		address: "Ap #125-478 Sit Av.",
//	},
//	{
//		id: 4,
//		name: "Sergey",
//		phone: "1-262-419-4287",
//		email: "arcu.vel@protonmail.net",
//		address: "P.O. Box 631, 1093 Metus Street",
//	},
//	{
//		id: 5,
//		name: "Harriet Acevedo",
//		phone: "1-788-618-2639",
//		email: "consequat.dolor@protonmail.net",
//		address: "P.O. Box 769, 5046 Pellentesque, Rd.",
//	},
//]);

///**
// * Набор исходных данных и примеров 2
// */
//interface OrderDataType {
//	id: number;
//	price: number;
//}
//class OrderModel extends Resource<OrderDataType> {
//	constructor(data: OrderDataType[]) {
//		super(data);
//	}
//}
//const orders = new OrderModel([
//	{
//		id: 1,
//		price: 100,
//	},
//	{
//		id: 2,
//		price: 200,
//	},
//	{
//		id: 3,
//		price: 300,
//	},
//]);
//console.log("orders.get()", orders.get());

//console.log('[LOG]: "orders.get()"', [
//	{
//		id: 1,
//		price: 100,
//	},
//	{
//		id: 2,
//		price: 200,
//	},
//	{
//		id: 3,
//		price: 300,
//	},
//]);

//console.log(
//	"orders.add()",
//	orders.add({
//		id: 4,
//		price: 400,
//	})
//);

//console.log('[LOG]: "orders.add()"', [
//	{
//		id: 1,
//		price: 100,
//	},
//	{
//		id: 2,
//		price: 200,
//	},
//	{
//		id: 3,
//		price: 300,
//	},
//	{
//		id: 4,
//		price: 400,
//	},
//]);
//console.log("orders.getOne", orders.getOne("id", 1));
//console.log("orders.getOne", orders.getOne("price", 200));
//console.log('[LOG]: "orders.getOne"', {
//	id: 1,
//	price: 100,
//});
//console.log('[LOG]: "orders.getOne"', {
//	id: 2,
//	price: 200,
//});
//console.log("orders.update", orders.update("id", 3, { price: 500 }));
//console.log('[LOG]: "orders.update"', {
//	id: 3,
//	price: 500,
//});
//console.log("orders.delete", orders.delete("id", 2));
//console.log('[LOG]: "orders.delete"', {
//	id: 2,
//	price: 200,
//});
//console.log("orders.get", orders.get());
//console.log('[LOG]: "orders.get"', [
//	{
//		id: 1,
//		price: 100,
//	},
//	{
//		id: 3,
//		price: 500,
//	},
//	{
//		id: 4,
//		price: 400,
//	},
//]);

abstract class Resource<T> {
	protected data: T[];

	constructor(data: T[]) {
		this.data = data;
	}

	get(): T[] {
		return this.data;
	}

	getOne(key: keyof T, val: any): T | undefined {
		return this.data.find((item: T) => item[key] === val);
	}

	add(newObj: T): T[] {
		this.data.push(newObj);
		return this.data;
	}

	update(key: keyof T, val: any, partialData: Partial<T>): T | undefined {
		const index = this.data.findIndex((item) => item[key] === val);
		if (index === -1) return undefined;

		this.data[index] = { ...this.data[index], ...partialData };
		return this.data[index];
	}

	delete(key: keyof T, val: any): T | undefined {
		const index = this.data.findIndex((item) => item[key] === val);
		if (index === -1) return undefined;

		return this.data.splice(index, 1)[0];
	}
}

type DataType = {
	id: number;
	name: string;
	phone: string;
	email: string;
	address: string;
};
const mockUserData: DataType[] = [
	{
		id: 1,
		name: "Lane Mcdonald",
		phone: "1-980-603-4363",
		email: "dui@aol.com",
		address: "P.O. Box 895, 4432 Placerat, Avenue",
	},
	{
		id: 2,
		name: "Emma Ford",
		phone: "(472) 855-7514",
		email: "aliquam.ornare@protonmail.net",
		address: "P.O. Box 311, 427 Egestas Av.",
	},
	{
		id: 3,
		name: "Louis Juarez",
		phone: "1-895-966-2657",
		email: "venenatis.lacus@outlook.net",
		address: "Ap #125-478 Sit Av.",
	},
	{
		id: 4,
		name: "Zorita Mason",
		phone: "1-262-419-4287",
		email: "arcu.vel@protonmail.net",
		address: "P.O. Box 631, 1093 Metus Street",
	},
	{
		id: 5,
		name: "Harriet Acevedo",
		phone: "1-788-618-2639",
		email: "consequat.dolor@protonmail.net",
		address: "P.O. Box 769, 5046 Pellentesque, Rd.",
	},
];
class UserModel extends Resource<DataType> {
	constructor(data: DataType[]) {
		super(data);
	}
}
const users = new UserModel([...mockUserData]);

console.log(
	"users.get()",
	users.get()
); /* Получение массива всех объектов из контекста абстрактного класса */

console.log('[LOG]: "users.get()"', [
	{
		id: 1,
		name: "Lane Mcdonald",
		phone: "1-980-603-4363",
		email: "dui@aol.com",
		address: "P.O. Box 895, 4432 Placerat, Avenue",
	},
	{
		id: 2,
		name: "Emma Ford",
		phone: "(472) 855-7514",
		email: "aliquam.ornare@protonmail.net",
		address: "P.O. Box 311, 427 Egestas Av.",
	},
	{
		id: 3,
		name: "Louis Juarez",
		phone: "1-895-966-2657",
		email: "venenatis.lacus@outlook.net",
		address: "Ap #125-478 Sit Av.",
	},
	{
		id: 4,
		name: "Zorita Mason",
		phone: "1-262-419-4287",
		email: "arcu.vel@protonmail.net",
		address: "P.O. Box 631, 1093 Metus Street",
	},
	{
		id: 5,
		name: "Harriet Acevedo",
		phone: "1-788-618-2639",
		email: "consequat.dolor@protonmail.net",
		address: "P.O. Box 769, 5046 Pellentesque, Rd.",
	},
]);

console.log(
	"users add",
	users.add({
		id: 6,
		name: "Ivan Petrov",
		phone: "1-788-618-2639",
		email: "consequat.dolor@protonmail.net",
		address: "P.O. Box 769, 5046 Pellentesque, Rd.",
	})
); /* Push объекта в массив. Объект может быть только типа Datatype */

console.log('[LOG]: "users add"', [
	{
		id: 1,
		name: "Lane Mcdonald",
		phone: "1-980-603-4363",
		email: "dui@aol.com",
		address: "P.O. Box 895, 4432 Placerat, Avenue",
	},
	{
		id: 2,
		name: "Emma Ford",
		phone: "(472) 855-7514",
		email: "aliquam.ornare@protonmail.net",
		address: "P.O. Box 311, 427 Egestas Av.",
	},
	{
		id: 3,
		name: "Louis Juarez",
		phone: "1-895-966-2657",
		email: "venenatis.lacus@outlook.net",
		address: "Ap #125-478 Sit Av.",
	},
	{
		id: 4,
		name: "Zorita Mason",
		phone: "1-262-419-4287",
		email: "arcu.vel@protonmail.net",
		address: "P.O. Box 631, 1093 Metus Street",
	},
	{
		id: 5,
		name: "Harriet Acevedo",
		phone: "1-788-618-2639",
		email: "consequat.dolor@protonmail.net",
		address: "P.O. Box 769, 5046 Pellentesque, Rd.",
	},
	{
		id: 6,
		name: "Ivan Petrov",
		phone: "1-788-618-2639",
		email: "consequat.dolor@protonmail.net",
		address: "P.O. Box 769, 5046 Pellentesque, Rd.",
	},
]);

console.log(
	"users.getOne()",
	users.getOne("id", 4)
); /* Получение одного объекта с id: 4 (возможно
получение по любому ключу и его значению) */
console.log(
	"users.getOne()",
	users.getOne("name", "Lane Mcdonald")
); /* Получение одного объекта
по совпадению name */
console.log(
	"users.getOne()",
	users.getOne("phone", "(472) 855-7514")
); /* Получение одного объекта
по совпадению phone */
console.log(
	"users.getOne()",
	users.getOne("id", 12)
); /* Не существующий id, вернется undefined */

console.log('[LOG]: "users.getOne()"', {
	id: 4,
	name: "Zorita Mason",
	phone: "1-262-419-4287",
	email: "arcu.vel@protonmail.net",
	address: "P.O. Box 631, 1093 Metus Street",
});
console.log('[LOG]: "users.getOne()"', {
	id: 1,
	name: "Lane Mcdonald",
	phone: "1-980-603-4363",
	email: "dui@aol.com",
	address: "P.O. Box 895, 4432 Placerat, Avenue",
});
console.log('[LOG]: "users.getOne()"', {
	id: 2,
	name: "Emma Ford",
	phone: "(472) 855-7514",
	email: "aliquam.ornare@protonmail.net",
	address: "P.O. Box 311, 427 Egestas Av.",
});
console.log('[LOG]: "users.getOne()", undefined');

console.log(
	"users.update()",
	users.update("id", 4, { name: "Sergey" })
); /* Изменение поля 'name' в
объекте с 'id' равным 4, возвращает измененный объект (поиск по любому ключу, изменяемые данные
должны быть совместимы с DataType (Partial)) */
console.log(
	"users.update()",
	users.update("email", "dui@aol.com", {
		address: "Moscow, Russia",
		phone: "12345678910",
	})
); /* Изменение поля 'name' в объекте с 'id' равным 4, возвращает измененный
объект (поиск по любому ключу, изменяемые данные должны быть совместимы с DataType (Partial)) */
console.log(
	"users.update()",
	users.update("name", "Leo Tolstoy", { address: "Yasnaya polyana, Russia" })
); /* изменение несуществующей записи вернет undefined и ничего не изменится */

console.log('[LOG]: "users.update()"', {
	id: 4,
	name: "Sergey",
	phone: "1-262-419-4287",
	email: "arcu.vel@protonmail.net",
	address: "P.O. Box 631, 1093 Metus Street",
});
console.log('[LOG]: "users.update()"', {
	id: 1,
	name: "Lane Mcdonald",
	phone: "12345678910",
	email: "dui@aol.com",
	address: "Moscow, Russia",
});
console.log('[LOG]: "users.update()", undefined');

console.log("users.get()3", users.get());

console.log('[LOG]: "users.get()3"', [
	{
		id: 1,
		name: "Lane Mcdonald",
		phone: "12345678910",
		email: "dui@aol.com",
		address: "Moscow, Russia",
	},
	{
		id: 2,
		name: "Emma Ford",
		phone: "(472) 855-7514",
		email: "aliquam.ornare@protonmail.net",
		address: "P.O. Box 311, 427 Egestas Av.",
	},
	{
		id: 3,
		name: "Sergey",
		phone: "1-262-419-4287",
		email: "arcu.vel@protonmail.net",
		address: "P.O. Box 631, 1093 Metus Street",
	},
	{
		id: 4,
		name: "Lane Mcdonald",
		phone: "12345678910",
		email: "dui@aol.com",
		address: "Moscow, Russia",
	},
]);
console.log('[LOG]: "users.update()", undefined');
console.log("users.get()3", users.get());
console.log('[LOG]: "users.get()3"', [
	{
		id: 1,
		name: "Lane Mcdonald",
		phone: "12345678910",
		email: "dui@aol.com",
		address: "Moscow, Russia",
	},
	{
		id: 2,
		name: "Emma Ford",
		phone: "(472) 855-7514",
		email: "aliquam.ornare@protonmail.net",
		address: "P.O. Box 311, 427 Egestas Av.",
	},
	{
		id: 3,
		name: "Louis Juarez",
		phone: "1-895-966-2657",
		email: "venenatis.lacus@outlook.net",
		address: "Ap #125-478 Sit Av.",
	},
	{
		id: 4,
		name: "Sergey",
		phone: "1-262-419-4287",
		email: "arcu.vel@protonmail.net",
		address: "P.O. Box 631, 1093 Metus Street",
	},
	{
		id: 5,
		name: "Harriet Acevedo",
		phone: "1-788-618-2639",
		email: "consequat.dolor@protonmail.net",
		address: "P.O. Box 769, 5046 Pellentesque, Rd.",
	},
	{
		name: "Louis Juarez",
		phone: "1-895-966-2657",
		email: "venenatis.lacus@outlook.net",
		address: "Ap #125-478 Sit Av.",
	},
	{
		id: 4,
		name: "Sergey",
		phone: "1-262-419-4287",
		email: "arcu.vel@protonmail.net",
		address: "P.O. Box 631, 1093 Metus Street",
	},
	{
		id: 5,
		name: "Harriet Acevedo",
		phone: "1-788-618-2639",
		email: "consequat.dolor@protonmail.net",
		address: "P.O. Box 769, 5046 Pellentesque, Rd.",
	},
	{
		id: 6,
		name: "Ivan Petrov",
		phone: "1-788-618-2639",
		email: "consequat.dolor@protonmail.net",
		address: "P.O. Box 769, 5046 Pellentesque, Rd.",
	},
]);
console.log(
	"users.delete()",
	users.delete("name", "Ivan Petrov")
); /* Удаление объекта с полем name "Ivan Petrov", возвращает удаленный объект */
console.log(
	"users.delete()",
	users.delete("id", 222)
); /* Удаление несуществующего объекта */
console.log('[LOG]: "users.delete()"', {
	id: 6,
	name: "Ivan Petrov",
	phone: "1-788-618-2639",
	email: "consequat.dolor@protonmail.net",
	address: "P.O. Box 769, 5046 Pellentesque, Rd.",
});
console.log('[LOG]: "users.delete()", undefined');
console.log("users.get()4", users.get());
console.log('[LOG]: "users.get()4"', [
	{
		id: 1,
		name: "Lane Mcdonald",
		phone: "12345678910",
		email: "dui@aol.com",
		address: "Moscow, Russia",
	},
	{
		id: 2,
		name: "Emma Ford",
		phone: "(472) 855-7514",
		email: "aliquam.ornare@protonmail.net",
		address: "P.O. Box 311, 427 Egestas Av.",
	},
	{
		id: 3,
		name: "Louis Juarez",
		phone: "1-895-966-2657",
		email: "venenatis.lacus@outlook.net",
		address: "Ap #125-478 Sit Av.",
	},
	{
		id: 4,
		name: "Sergey",
		phone: "1-262-419-4287",
		email: "arcu.vel@protonmail.net",
		address: "P.O. Box 631, 1093 Metus Street",
	},
	{
		id: 5,
		name: "Harriet Acevedo",
		phone: "1-788-618-2639",
		email: "consequat.dolor@protonmail.net",
		address: "P.O. Box 769, 5046 Pellentesque, Rd.",
	},
]);

/**
 * Набор исходных данных и примеров 2
 */
interface OrderDataType {
	id: number;
	price: number;
}
class OrderModel extends Resource<OrderDataType> {
	constructor(data: OrderDataType[]) {
		super(data);
	}
}
const orders = new OrderModel([
	{
		id: 1,
		price: 100,
	},
	{
		id: 2,
		price: 200,
	},
	{
		id: 3,
		price: 300,
	},
]);
console.log("orders.get()", orders.get());
console.log('[LOG]: "orders.get()"', [
	{
		id: 1,
		price: 100,
	},
	{
		id: 2,
		price: 200,
	},
	{
		id: 3,
		price: 300,
	},
]);

console.log(
	"orders.add()",
	orders.add({
		id: 4,
		price: 400,
	})
);
console.log('[LOG]: "orders.add()"', [
	{
		id: 1,
		price: 100,
	},
	{
		id: 2,
		price: 200,
	},
	{
		id: 3,
		price: 300,
	},
	{
		id: 4,
		price: 400,
	},
]);

console.log("orders.getOne", orders.getOne("id", 1));
console.log("orders.getOne", orders.getOne("price", 200));
console.log('[LOG]: "orders.getOne"', {
	id: 1,
	price: 100,
});
console.log('[LOG]: "orders.getOne"', {
	id: 2,
	price: 200,
});
console.log("orders.update", orders.update("id", 3, { price: 500 }));
console.log('[LOG]: "orders.update"', {
	id: 3,
	price: 500,
});
console.log("orders.delete", orders.delete("id", 2));
console.log('[LOG]: "orders.delete"', {
	id: 2,
	price: 200,
});
console.log("orders.get", orders.get());
console.log('[LOG]: "orders.get"', [
	{
		id: 1,
		price: 100,
	},
	{
		id: 3,
		price: 500,
	},
	{
		id: 4,
		price: 400,
	},
]);
