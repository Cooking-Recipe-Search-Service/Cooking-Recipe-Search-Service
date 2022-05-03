--liquibase formatted sql

--changeset evgeniy.sharunov:CRSS-22

create table user
(
    id     bigint auto_increment
        primary key,
    email  varchar(50) not null unique,
    username  varchar(20) not null unique,
    password  varchar(120) not null,
    `role` int(11) NOT NULL
);
--rollback DROP TABLE user;