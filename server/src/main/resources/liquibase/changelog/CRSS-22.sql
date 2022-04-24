--liquibase formatted sql

--changeset evgeniy.sharunov:CRSS-22

create table user
(
    id   bigint auto_increment
        primary key,
    email varchar(255) not null unique,
    `role` int(11) NOT NULL

);
--rollback DROP TABLE user;
