CREATE DATABASE Bamazon;

USE Bamazon;

create table products (
    item_id int auto_increment not null,
    product_name varchar(255) not null,
    department_name varchar(255) not null,
    price dec(6,2) not null,
    stock_quantity int(11) not null,
    primary key (item_id)
);

select * from products;

insert into products (product_name, department_name, price, stock_quantity)

value ("GoPro Karma", 'Electronics', 1200.00, 8);

insert into products (product_name, department_name, price, stock_quantity)
value ("MacBook Pro", 'Electronics', 1500.00, 13);

insert into products (product_name, department_name, price, stock_quantity)
value ('Adidas Yeezy 350 Boost', 'Shoes', 179.99, 2);

insert into products (product_name, department_name, price, stock_quantity)
value ("Air Jordan 5 Premium", 'Shoes', 399.99, 10);

insert into products (product_name, department_name, price, stock_quantity)
value ("Phillips Hue Starter Kit", 'Electronics', 149.99, 20);

insert into products (product_name, department_name, price, stock_quantity)
value ('Chaco Sandal', 'Shoes', 99.99, 30);

insert into products (product_name, department_name, price, stock_quantity)
value ('Breakfast Table', 'Home', 120.00, 15);

insert into products (product_name, department_name, price, stock_quantity)
value ('Blendtec Blender', 'Home', 299.99, 17);

insert into products (product_name, department_name, price, stock_quantity)
value ('Pampers Cruisers', 'Baby', 39.99, 30);

insert into products (product_name, department_name, price, stock_quantity)
value ('Baby Stroller', 'Baby', 179.99. 6);
