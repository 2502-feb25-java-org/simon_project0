--create product table
Create Table products (
	pid int identity(1,1) primary key,
	pname char(50) not null,
	price numeric not null)
--create customer table
create table customers(
	cid int identity(1,1) primary key,
	fname char(50) not null,
	lname char(50) not null,
	cardnumber int not null)
--create order table
Create Table orders (
	oid int identity(1,1) primary key,
	pid int not null,
	cid int not null)
--fill tables with some rows
insert into products (pname, price)
values ('flipphone', 50), ('android', 180), ('windows', 160);

insert into customers (fname, lname, cardnumber)
values ('joe', 'smith' , 123456790), ('samantha', 'lee' , 999999999), ('kevin', 'tran' , 987654321)

insert into orders (pid, cid)
values (2,3), (3,1), (4,2);
--add iphone
insert into products (pname, price)
values ('iphone', 200);
--add tina smith to databse
insert into customers (fname, lname, cardnumber)
values ('tina', 'smith', 456456456)
--create tinas order for iphone
insert into orders (pid, cid)
values (1, 2)
--concat(fname,lname)='tinasmith' did not work, why?
select * from orders where cid = (select cid from customers where fname='tina' and lname='smith') --tina purchased iphone and flipphone
--pid for iphone is 1 (returns amount made from iphone sales)
select (select count(pid) from orders where pid=1)*(select price from products where pid=1) 
--change iphone price to 250
update products
set price = 250
where pid = 1
--check if updated
select * from products