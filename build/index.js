"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var getUsersData = "https://jsonplaceholder.typicode.com/users";
var table = document.getElementById("userTable");
fetch(getUsersData)
    .then(function (response) {
    if (!response.ok) {
        throw new Error("HTTP error! status: ".concat(response.status));
    }
    return response.json();
})
    .then(function (users) {
    users.forEach(function (user) {
        var row = table.insertRow(-1);
        var idCell = row.insertCell(0);
        var nameCell = row.insertCell(1);
        var usernameCell = row.insertCell(2);
        var emailCell = row.insertCell(3);
        var phoneCell = row.insertCell(4);
        var websiteCell = row.insertCell(5);
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
var Resource = (function () {
    function Resource(data) {
        this.data = data;
    }
    Resource.prototype.get = function () {
        return this.data;
    };
    Resource.prototype.getOne = function (key, val) {
        return this.data.find(function (item) { return item[key] === val; });
    };
    Resource.prototype.add = function (newObj) {
        this.data.push(newObj);
        return this.data;
    };
    Resource.prototype.update = function (key, val, partialData) {
        var index = this.data.findIndex(function (item) { return item[key] === val; });
        if (index === -1)
            return undefined;
        this.data[index] = __assign(__assign({}, this.data[index]), partialData);
        return this.data[index];
    };
    Resource.prototype.delete = function (key, val) {
        var index = this.data.findIndex(function (item) { return item[key] === val; });
        if (index === -1)
            return undefined;
        return this.data.splice(index, 1)[0];
    };
    return Resource;
}());
var mockUserData = [
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
var UserModel = (function (_super) {
    __extends(UserModel, _super);
    function UserModel(data) {
        return _super.call(this, data) || this;
    }
    return UserModel;
}(Resource));
var users = new UserModel(__spreadArray([], mockUserData, true));
console.log("users.get()", users.get());
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
console.log("users add", users.add({
    id: 6,
    name: "Ivan Petrov",
    phone: "1-788-618-2639",
    email: "consequat.dolor@protonmail.net",
    address: "P.O. Box 769, 5046 Pellentesque, Rd.",
}));
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
console.log("users.getOne()", users.getOne("id", 4));
console.log("users.getOne()", users.getOne("name", "Lane Mcdonald"));
console.log("users.getOne()", users.getOne("phone", "(472) 855-7514"));
console.log("users.getOne()", users.getOne("id", 12));
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
console.log("users.update()", users.update("id", 4, { name: "Sergey" }));
console.log("users.update()", users.update("email", "dui@aol.com", {
    address: "Moscow, Russia",
    phone: "12345678910",
}));
console.log("users.update()", users.update("name", "Leo Tolstoy", { address: "Yasnaya polyana, Russia" }));
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
console.log("users.delete()", users.delete("name", "Ivan Petrov"));
console.log("users.delete()", users.delete("id", 222));
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
var OrderModel = (function (_super) {
    __extends(OrderModel, _super);
    function OrderModel(data) {
        return _super.call(this, data) || this;
    }
    return OrderModel;
}(Resource));
var orders = new OrderModel([
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
console.log("orders.add()", orders.add({
    id: 4,
    price: 400,
}));
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
